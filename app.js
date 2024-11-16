const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/AppError.js");
const globalErrorHandler = require("./controller/errorController.js");

const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productRoute.js");
const cartRoute = require("./routes/cartRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");
const bookingRoute = require("./routes/bookingRoute.js");

const app = express();

// middleware
// parse JSON request bodies
app.use(express.json());

// parse cookie into req.cookies and sign cookie
app.use(cookieParser(process.env.JWT_COOKIE_SECRET));

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use("/");
app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
