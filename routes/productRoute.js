const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  disableProd,
  productStats,
  getMyProduct,
} = require("../controller/productController");

const { protect, restrictTo } = require("../controller/authController");

router.use(protect);

router.route("/").get(getAllProducts).post(createProduct);

router.route("/myProduct").get(getMyProduct);

router.route("/productStats").get(productStats);

router.route("/:id").get(getProduct);

router.use(restrictTo("admin"));

router.patch("/disableProd/:id", disableProd);

router.route("/:id").patch(updateProduct).delete(deleteProduct);

module.exports = router;
