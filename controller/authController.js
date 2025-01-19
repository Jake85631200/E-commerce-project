const User = require("./../models/userModel");
const Cart = require("./../models/cartModel");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const sendMail = require("../utils/Email");
const redis = require("../utils/redis");

// Generate JWT
const signToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Create JWT in cookie
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    // new Date(): Convert calculated milliseconds to an object expected by cookie
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    // Cookie cannot be accessed via JS's Document.cookie, preventing XSS attacks.
    httpOnly: true,
    // Cookie can only be sent over HTTPS, enhancing cookie security
    secure: true,
    // Cookie will be signed to prevent tampering (requires cookieParser: app.use(cookieParser("secret"));)
    // signed: true,
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

const setLoginAttempts = async (userId, attempts, expiration) => {
  await redis.set(`loginAttempts_${userId}`, attempts, {
    EX: expiration,
  });
};

// record login attempt count until endOfDay
const handleFailedLogin = async (user, endOfDay, attempts) => {
  attempts = attempts + 1;
  // 1. Update attempt count
  await setLoginAttempts(user._id, attempts, endOfDay);
  // 2. Check if lock condition is met
  if (attempts >= 3) {
    const ttl = 10;
    await redis.set(`locked_${user._id}`, "locked", {
      EX: ttl,
    });
    throw new AppError(`Due to failed login attempts, your account has been locked for ${ttl} seconds.`, 429);
  }

  // 3. If lock condition is not met, throw general login failure error
  throw new AppError("Incorrect email or password", 400);
};

exports.signUp = catchAsync(async (req, res, next) => {
  const newCart = await Cart.create({ createAt: Date.now() });
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    gender: req.body.gender,
    address: req.body.address,
    phone_number: req.body.phone_number,
    cart: newCart._id,
    // role: req.body.role,
  });
  createSendToken(newUser, 201, req, res);
});

exports.logout = (req, res) => {
  // 以新 cookie "loggedout"，覆蓋 cookie "jwt"
  res.cookie("jwt", "loggedout", {
    // 10 秒後失效
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.login = catchAsync(async (req, res, next) => {
  // 1. Validate input data
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // 2. Confirm user exists
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new AppError("Incorrect email or password", 400));
  }

  // 3. Initialize time and attempt count related variables
  const endOfDay = Math.floor((new Date().setHours(23, 59, 59, 999) - Date.now()) / 1000);
  let attempts = parseInt(await redis.get(`loginAttempts_${user._id}`)) || 0;

  // 4. Check if account is locked
  const lockUntil = await redis.get(`locked_${user._id}`);
  if (lockUntil) {
    const countDown = await redis.ttl(`locked_${user._id}`);
    throw next(new AppError(`Your account has been locked for safety. Please try again in ${countDown} seconds`, 403));
  }

  // 5. Initialize or reset login attempt count
  if (attempts >= 3) {
    // Reset login attempts when lock expires
    await setLoginAttempts(user._id, (attempts = 0), endOfDay);
  }

  // 6. Validate password
  if (!(await user.comparePassword(password, user.password))) {
    return await handleFailedLogin(user, endOfDay, attempts);
  }

  // 7. Login success processing
  await setLoginAttempts(user._id, (attempts = 0), endOfDay);
  createSendToken(user, 200, req, res);
});

exports.twoFactor = catchAsync(async (req, res, next) => {
  // Check if user exist by email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("User not existed or invalid email", 400));
  }

  // Generate verification code and set expiration to 10 minutes
  const TwoFACode = Math.floor(100000 + Math.random() * 899999).toString();

  // Set verification code inside redis
  await redis.set(`2fa_${user.email}`, TwoFACode, {
    EX: 600,
  });
  // Send verification code to email
  await sendMail(
    req.body.email,
    "Two-Factor Authentication Code",
    `Your verification code is: ${TwoFACode}. This code will expire in 10 minutes.`,
  );

  res.status(200).json({
    status: "success",
    message: `Verification code has been send to ${req.body.email}. This code will expire in 10 minutes.`,
  });
});

exports.verify2FACode = catchAsync(async (req, res, next) => {
  // Check if user provide email and 2FACode
  const { email, verifyCode } = req.body;
  if (!email || !verifyCode) {
    return next(new AppError("Please provide email and verification code.", 400));
  }

  // Get verification code which is stored in redis
  const storedCode = await redis.get(`2fa_${email}`);

  // If verification code expired
  if (storedCode === null) {
    return next(new AppError("Verification code expired. Please resend verification code again", 400));
  }

  // Comparing verification co
  if (verifyCode !== storedCode) {
    return next(new AppError("Verification code invalid. Please try again", 400));
  }

  // Delete Verification code in redis
  await redis.del(`2fa_${email}`);

  res.status(200).json({
    status: "success",
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email }).select("+password");

  if (req.body.newPassword !== req.body.passwordConfirm)
    return next(new AppError("Confirm password is not the same with password! Please try again!"), 400);

  if (await user.comparePassword(req.body.newPassword, user.password))
    return next(new AppError("New password can't be the same as current password! Please try new one!"), 400);

  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  createSendToken(user, 200, req, res);
});

// Update password feature: Allows users to update their password while logged in and invalidate the old token after updating.

exports.updatePassword = catchAsync(async (req, res, next) => {
  // Check if token is valid and if the user is logged in
  const user = await User.findById(req.user._id).select("+password");

  if (!(await user.comparePassword(req.body.passwordCurrent, user.password)))
    return next(new AppError("Your current password is incorrect! Please try again!"), 400);
  // Check if req.body contains valid password and passwordConfirm
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  res.clearCookie("jwt");

  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1) Get and check if token existed in headers
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError("You're not logged in! Please log in to get access!", 401));
  }

  // 2) Verification token
  const payload = await promisify(jwt.verify)(token, jwtSecret); // payload contains user information

  // 3) If user still exist
  const currentUser = await User.findById(payload.id);
  if (!currentUser) {
    return next(new AppError("The user of this token is no-longer exist.", 401));
  }
  // 4) if user changed password
  if (currentUser.changedPasswordAfter(payload.iat)) {
    return res.status(401).json({
      status: "error",
      message: "User recently changed password! Please log in again.",
    });
  }

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

// Only for rendered pages
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return next(new AppError("Your don't have permission to this api!", 403));

    next();
  };
};
