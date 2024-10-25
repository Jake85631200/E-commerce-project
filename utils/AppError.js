class AppError extends Error {
  constructor(message, statusCode) {
    // 呼叫父類別 Error 的 constructor 並放入 message ，便能把 Error 的 message 變成 AppError 輸入的 message
    super(message);

    // 以下為自定義的功能，非 Error 的屬性
    this.statusCode = statusCode;
    // 若 statusCode = 4xx 則為 client 端錯誤，其餘 5xx 為 server 端錯誤
    // `${statusCode}` 確保 statusCode 一定是 string
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    // 捕捉並將 Error 的 error stack 記錄在 this 中，並忽略 this.constructor *(AppError)* 本身，避免污染 error stack
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
