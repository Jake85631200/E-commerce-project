const express = require("express");
const router = express.Router();

const { getCheckoutSession, getAllOrders, getMyOrder } = require("../controller/orderController");

const { restrictTo, protect } = require("../controller/authController");

router.use(protect);

router.get("/checkout-session/:productId", getCheckoutSession);

router.get("/", getAllOrders);

router.get("/my-order", getMyOrder);

module.exports = router;