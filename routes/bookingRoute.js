const express = require("express");
const router = express.Router();

const { getCheckoutSession } = require("../controller/bookingController");

const { restrictTo, protect } = require("../controller/authController");

router.use(protect);

router.get("/checkout-session/:productId", getCheckoutSession);

module.exports = router;
