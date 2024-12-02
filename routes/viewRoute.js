const express = require("express");
const router = express.Router();

const { OverView, MyCart, addToCart, getLoginForm } = require("../controller/viewController");

const { restrictTo, protect, isLoggedIn } = require("../controller/authController");

router.route("/").get(OverView);

router.route("/my-cart").get(MyCart);

router.route("/add-to-cart/:id").post(protect, addToCart);

router.get("/login", isLoggedIn, getLoginForm);

module.exports = router;
