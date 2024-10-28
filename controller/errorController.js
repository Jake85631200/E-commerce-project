const AppError = require("../utils/AppError.js");

// 處理 MongoDB CastError，當請求的資料格式不正確時觸發。
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

// 處理 MongoDB duplicate key error，當嘗試插入重複的唯一字段值時觸發
const handleDuplicateFieldsDB = (err) => {
  // Object 是用來操作 keyValue 的 JS 工具，可用於任何對象以提取其值。在處理不確定鍵名對象時特別有用。
  const value = err.keyValue ? Object.values(err.keyValue)[0] : "";
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

// 處理 MongoDB 的驗證錯誤（validation error），當資料不符合模型定義的驗證規則時觸發。
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((val) => val.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

// 處理 JSON Web Token (JWT) 錯誤，當提供的令牌無效時觸發。
const handleJWTError = (err) => {
  return new AppError("Invalid Token. Please log in again!", 401);
};

// 處理 JWT 過期錯誤，當提供的令牌已過期時觸發。
const handleJWTExpireError = (err) => {
  return new AppError("Your token has expired! Please log in again!", 401);
};

const sendErrorDev = (err, req, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack, // stack: 就是有一堆 error 資訊的那個
  });
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    // 當 error 是 operational error 時，發送詳細 error 給 client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    // Log error
    // console.error("ERROR!💥💥💥", err);

    // 當 error 是 programming 或 unknown error 時，只發送簡單 error message
    return res.status(500).json({
      status: "error",
      message: "Oops! Something went wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // In development, we need as much information as possible
    sendErrorDev(err, req, res);
    
  } else if (process.env.NODE_ENV === "production") {
    // error = { ... err } --> shallow copy 👎
    // JSON.parse(JSON.stringify(err)) --> Deep copy 👍
    let error = JSON.parse(JSON.stringify(err));

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError(error);
    if (error.name === "TokenExpiredError") error = handleJWTExpireError(error);

    // In production, we don't need error and stack to client
    sendErrorProd(error, req, res);
  }
};
