const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
} = require("./../controller/productController");

router.route("/").get(getAllProducts).post(createProduct);

router.route("/:id").get(getProduct).delete(deleteProduct);

module.exports = router;
