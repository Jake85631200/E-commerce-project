const User = require("./../models/userModel");
const Cart = require("./../models/cartModel");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const crypto = require("crypto");
const sendMail = require("../utils/Email");
const redis = require("../utils/redis");

// 產生 JWT
const signToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// 在 cookie 中 create JWT
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    // new Date()：將計算出的毫秒數轉換為 cookie 期望的 object
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // cookie 不能通過 JS 的 Document.cookie 來訪問，防止 XSS 攻擊。
    secure: true, // cookie 只能通過 HTTPS 發送，提升 cookie 的安全性
    signed: true, // cookie 將被簽名，防止 cookie 被篡改 (需要 cookieParser)
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

const handleFailedLogin = async (user, endOfDay, attempts) => {
  attempts = attempts + 1;

  // 1. 更新嘗試次數
  await redis.setex(`loginAttempts_${user._id}`, endOfDay, attempts);
  
  // 2. 檢查是否達到鎖定條件
  if (attempts >= 3) {
    const ttl = 10;
    await redis.setex(`locked_${user._id}`, ttl, "locked");
    
    throw new AppError(
      `Due to failed login attempts, your account has been locked for ${ttl} seconds.`,
      403
    );
  }

  // 3. 如果未達到鎖定條件，拋出一般登入失敗錯誤
  throw new AppError("Incorrect email or password", 401);
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

exports.login = catchAsync(async (req, res, next) => {
  // 1. 驗證輸入資料
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // 2. 確認用戶存在
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 3. 初始化時間和嘗試次數相關變數
  const endOfDay = Math.floor(
    (new Date().setHours(23, 59, 59, 999) - Date.now()) / 1000
  );
  let attempts = parseInt(await redis.get(`loginAttempts_${user._id}`)) || 0;

  // 4. 檢查帳號是否被鎖定
  const lockUntil = await redis.get(`locked_${user._id}`);
  if (lockUntil) {
    const countDown = await redis.ttl(`locked_${user._id}`);
    return next(
      new AppError(
        `Your account has been locked for safety. Please try again in ${countDown} seconds`,
        403
      )
    );
  }

  // 5. 初始化或重置登入嘗試次數
  if (lockUntil === null) {
    await redis.setex(`loginAttempts_${user._id}`, endOfDay, 0);
  }

  // 6. 驗證密碼
  if (!(await user.correctPassword(password, user.password))) {
    return await handleFailedLogin(user, endOfDay, attempts);
  }

  // 7. 登入成功處理
  await redis.setex(`loginAttempts_${user._id}`, endOfDay, 0);
  createSendToken(user, 200, req, res);
});

exports.twoFactor = catchAsync(async (req, res, next) => {
  // Check if user exist by email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("User not existed or invalid email", 401));
  }

  // Generate verification code and set expiration to 10 minutes
  const faCode = Math.floor(100000 + Math.random() * 899999).toString();

  // Set verification code inside redis
  await redis.setex(`2fa_${user.email}`, 600, faCode);

  // Send verification code to email
  await sendMail(
    user.email,
    "Two-Factor Authentication Code",
    `Your verification code is: ${faCode}. This code will expire in 10 minutes.`
  );

  res.status(200).json({
    status: "success.",
    message: `Verification code has been send to ${req.body.email}. This code will expire in 10 minutes.`,
  });
});

exports.validateFACode = catchAsync(async (req, res, next) => {
  // Check if user provide email and FACode
  const { email, yourFACode } = req.body;
  if (!email || !yourFACode) {
    return next(
      new AppError("Please provide email and verification code.", 400)
    );
  }

  // Get verification code which is stored in redis
  const storedCode = await redis.get(`2fa_${email}`);

  // If verification code expired
  if (storedCode === null) {
    return next(
      new AppError(
        "Verification code expired. Please resend verification code again",
        400
      )
    );
  }

  // Comparing verification co
  if (yourFACode !== storedCode) {
    return next(
      new AppError("Verification code invalid. Please try again", 400)
    );
  }

  // Delete Verification code in redis
  await redis.del(`2fa_${email}`);

  // Find user and login user
  const user = await User.findOne({ email });
  createSendToken(user, 200, req, res);
});

exports.logOut = catchAsync(async (req, res, next) => {
  res.clearCookie("jwt");
  res.status(200).json({
    status: "success.",
    message: "Logged out.",
  });
});

exports.forgetPassword = catchAsync(async (req, res, next) => {
  // 1) 用 email 確認 user
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("User not existed or invalid email.", 401));
  }
  // 2) Generate resetToken
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send resetPassword URL within resetToken
  try {
    await sendMail(
      "test1@gmail.com",
      "test email",
      `${req.protocol}://${req.get(
        "host"
      )}/api/v1/users/resetPassword/${resetToken}`
    );

    res.status(200).send("Token sent to email!");
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "Something wrong when sending email! Please try again later!",
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256") // 創建一個 SHA-256 的哈希實例
    .update(req.params.token) // 將請求參數中的 token 更新到哈希實例中
    .digest("hex"); // 將哈希結果轉換為十六進制的字串

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Invalid token or expired.", 401));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  // 重設密碼後，token 和 expiration 就不需要了。防止用戶再次使用相同的 token 來重設密碼
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // 3) Update changedPasswordAt property for the user
  User.passwordChangedAt = Date.now() - 1000;

  // 解除登入限制
  user.loginAttempts = 0;
  user.lockUntil = null;

  await user.save();

  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

// 更新密碼功能：允許用戶在已登入的情況下更新自己的密碼，並在更新後使舊的 token 失效。

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 檢查 token 是否有效，是否為登入狀態
  const user = await User.findById(req.user._id).select("+password");

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password)))
    return next(
      new AppError("Your current password is incorrect! Please try again!"),
      401
    );
  // 檢查 req.body 是否包含 valid password and passwordConfirm
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  res.clearCookie("jwt");

  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1) Get and check if token existed in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You're not logged in! Please log in to get access!", 401)
    );
  }

  // 2) Verification token
  const payload = await promisify(jwt.verify)(token, jwtSecret); // payload 包含 user 的資訊

  // 3) If user still exist
  const currentUser = await User.findById(payload.id);
  if (!currentUser) {
    return next(
      new AppError("The user of this token is no-longer exist.", 401)
    );
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

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new AppError("Your don't have permission to this api!", 403));

    next();
  };
};
