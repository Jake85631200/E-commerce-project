const express = require("express");
const router = express.Router();

const {
  overview,
  search,
  myProfile,
  getProdReviews,
  checkProd,
  myCart,
  addToCart,
  getLoginForm,
} = require("../controller/viewController");

const { restrictTo, protect, isLoggedIn } = require("../controller/authController");

router.get("/", isLoggedIn, overview);

router.get("/search", search); 

router.get("/profile", protect, isLoggedIn, myProfile);

router.get("/product/:id", protect, isLoggedIn, checkProd);

router.get("/my-cart", protect, isLoggedIn, myCart);

router.post("/add-to-cart/:id", protect, addToCart);

router.get("/login", isLoggedIn, getLoginForm);

module.exports = router;
