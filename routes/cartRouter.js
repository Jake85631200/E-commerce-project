const express = require("express");
const router = express.Router();

const { addToCart } = require("../controller/cartController");

router.route("/:id").post(addToCart);

module.exports = router;