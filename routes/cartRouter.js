const express = require("express");
const router = express.Router();

const { addToCart, checkAllCart } = require("../controller/cartController");

router.route("/").get(checkAllCart);

router.route("/:id").post(addToCart);

module.exports = router;
