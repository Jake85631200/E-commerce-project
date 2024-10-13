const Products = require("./../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  const products = await Products.find();

  res.status(200).json({
    status: "success",
    result: products.length,
    data: {
      products,
    },
  });
};