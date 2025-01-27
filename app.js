const express = require("express");
const app = express();

const AppError = require("./utils/AppError.js");
const globalErrorHandler = require("./controller/errorController.js");
const { webhookCheckout } = require("./controller/orderController.js");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const compression = require("compression");

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productRoute.js");
const cartRoute = require("./routes/cartRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");
const orderRoute = require("./routes/orderRoute.js");
const viewRoute = require("./routes/viewRoute.js");

// app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.post("/webhook-checkout", express.raw({ type: "application/json" }), webhookCheckout);

// parse JSON request bodies
// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

//  helmet: A collection of many smaller middleware that set HTTP headers.
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: [
        "'self'",
        "https://jack-PowMart-75ebcc27b086.herokuapp.com/",
        "ws://127.0.0.1:*",
        "https://ka-f.fontawesome.com",
      ],
      scriptSrc: ["'self'", "https://js.stripe.com/v3/", "https://kit.fontawesome.com", "'nonce-stripePublishKey'"],
      frameSrc: ["'self'", "https://js.stripe.com/v3/"],
      imgSrc: [
        "'self'",
        "https://cdn.jsdelivr.net",
        "https://storage.cloud.google.com",
        "https://*.googleusercontent.com",
        "https://res.cloudinary.com",
        "data:",
      ],
    },
  }),
);

// Limit requests from same API
const limiter = rateLimit({
  max: 100, // 100 request from same IP
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try again in an hour!",
});
// Let all the route starts with this
app.use("/api", limiter);

// Data sanitization against NoSQL query injection
// Check req.body, req.queryString and req.params, then filter out all the "$" and "." sign
app.use(mongoSanitize());

// Data sanitization against XSS
// Clean any user input form malicious HTML code, convert all these HTML symbols
app.use(xss());

// // Prevent parameter pollution
app.use(
  hpp({
    whitelist: ["rating_quantity", "ratings_average", "price", "category", "quantity"],
  }),
);

// this will return a middleware, compress all the text that sent to clients, images not included.
app.use(compression());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/", viewRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/orders", orderRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
