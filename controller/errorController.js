const AppError = require("../utils/AppError.js");

// handleCastErrorDB: 處理 MongoDB 的 CastError，當請求的資料格式不正確時觸發。
// if (error.name === CastError)
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};
// handleDuplicateFieldsDB: 處理 MongoDB 的重複字段錯誤（duplicate key error），當嘗試插入重複的唯一字段值時觸發
const handleDuplicateFieldsDB = (err) => {
  const value = err.keyValue ? Object.values(err.keyValue)[0] : "";
  const message = ``;
};
// handleValidationErrorDB: 處理 MongoDB 的驗證錯誤（validation error），當資料不符合模型定義的驗證規則時觸發。

// handleJWTError: 處理 JSON Web Token (JWT) 錯誤，當提供的令牌無效時觸發。

// handleJWTExpireError: 處理 JWT 過期錯誤，當提供的令牌已過期時觸發。

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack, // stack: 就是有一堆 error 資訊的那個
  });
};

const sendErrorProd = (err, res) => {
  // 當 error 是 operational error 時，發送詳細 error 給 client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Log error
    console.error("ERROR!💥💥💥", err);

    // 當 error 是 programming 或 unknown error 時，只發送簡單 error message
    res.status(500).json({
      status: "error",
      message: "Oops! Something went wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // In development, we need as much information as possible
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    // In production, we don't need error and stack to client
    sendErrorProd(err, res);
  }

  // let error = { ...err };

  // if (error.name === "CastError") error = handleCastErrorDB(error);
};
