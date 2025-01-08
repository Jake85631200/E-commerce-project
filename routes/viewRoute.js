const express = require("express");
const router = express.Router();

const {
  overview,
  search,
  myProfile,
  checkProd,
  myCart,
  addToCart,
  getLoginForm,
  getSignupForm,
  Two2FACode,
} = require("../controller/viewController");

const { restrictTo, protect, isLoggedIn } = require("../controller/authController");

router.get("/", isLoggedIn, overview);

router.get("/search", search);

router.get("/profile", protect, isLoggedIn, myProfile);

router.get("/product/:id", isLoggedIn, checkProd);

router.get("/my-cart", protect, isLoggedIn, myCart);

router.get("/login", isLoggedIn, getLoginForm);

router.get("/signup", isLoggedIn, getSignupForm);

router.get("/two-factor", isLoggedIn, Two2FACode);

module.exports = router;
