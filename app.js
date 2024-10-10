const express = require("express");
const morgan = require("morgan");

const app = express();

// middleware
// parse JSON request bodies
app.use(express.json());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use("/");
// app.use('/api/v1/products')
// app.use("/api/v1/users");
// app.use("/api/v1/reviews");
// app.use("/api/v1/bookings");

module.exports = app;
