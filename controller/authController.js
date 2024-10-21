const User = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const signToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (token) => {
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.error("Token validation failed.", err.message);
      return null;
    }
    return decoded;
  });
};

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

exports.signUp = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) 檢查帳號密碼是否存在 （檢查輸入有效性）
    if (!email || !password)
      return res.status(404).json({
        status: "fail",
        message: "Invalid email or password! Please try again!",
      });

    // 2) 檢查用戶是否存在，密碼是否正確 （進行身份驗證）

    //依 email 找到 user，並將 password 一併顯示以供驗證
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password)))
      return res.status(404).json({
        status: "fail",
        message: "User not existed! Please try again!",
      });

    // 3) 產生並送出 token：設置一個名為 "jwt" 且包含 token 的 cookie
    createSendToken(user, 200, req, res);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
