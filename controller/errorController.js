const AppError = require("../utils/AppError.js");

// Triggered when the requested data format is incorrect.
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

// Triggered when attempting to insert a duplicate unique field value.
const handleDuplicateFieldsDB = (err) => {
  // Object.values extracting values from any object, even ones with uncertain key names.
  const value = err.keyValue ? Object.values(err.keyValue)[0] : "";
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

// Triggered when data does not meet the validation rules defined by the model.
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((val) => val.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

// Triggered when the provided token is invalid.
const handleJWTError = (err) => {
  return new AppError("Invalid Token. Please log in again!", 401);
};

// Triggered when the provided token has expired.
const handleJWTExpireError = (err) => {
  return new AppError("Your token has expired! Please log in again!", 401);
};

const sendErrorDev = (err, req, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    // Send detailed error to client when error is operational
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    console.error("ERROR!💥💥💥", err);

    // Send simple error message when error is programming or unknown
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
    let error = err;

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError") error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError(error);
    if (error.name === "TokenExpiredError") error = handleJWTExpireError(error);

    // In production, we don't need error and stack to client
    sendErrorProd(error, req, res);
  }
};
