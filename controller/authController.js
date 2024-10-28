const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const crypto = require("crypto");
const sendMail = require("../utils/Email");

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

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    gender: req.body.gender,
    address: req.body.address,
    phone_number: req.body.phone_number,
  });
  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) 檢查帳號密碼是否存在 （檢查輸入有效性）
  if (!email || !password) {
    return next(
      new AppError("Invalid email or password! Please try again!", 400)
    );
  }

  // 2) 檢查用戶是否存在，密碼是否正確 （進行身份驗證）
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError(
        "User does not exist or password is incorrect! Please try again!",
        401
      )
    );
  }

  // 3) 產生並送出 token：設置一個名為 "jwt" 且包含 token 的 cookie
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
  // 1) 用 email 確認 user 身份
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
  await user.save();

  // 4) Log the user in, send JWT
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
  // if (currentUser.changedPasswordAfter(payload.iat)) {
  //   return res.status(401).json({
  //     status: "error",
  //     message: "User recently changed password! Please log in again.",
  //   });
  // }

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});
