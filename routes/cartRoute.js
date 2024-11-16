const express = require("express");
const router = express.Router();

const {
  checkMyCart,
  addToCart,
  checkAllCart,
  removeFormCart,
} = require("../controller/cartController");

const { restrictTo, protect } = require("../controller/authController");

router.use(protect);

router.get("/my-cart", checkMyCart);

router.route("/").get(restrictTo("admin"), checkAllCart);


router.route("/:id").post(addToCart).delete(removeFormCart);

module.exports = router;
