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

exports.getProduct = async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  res.status(200).json({
    status: "success.",
    data: {
      product,
    },
  });
};

exports.createProduct = async (req, res, next) => {
  const product = await Products.create(req.body);

  res.status(201).json({
    status: "success.",
    data: {
      product,
    },
  });
};

exports.deleteProduct = async (req, res, next) => {
  const product = await Products.findByIdAndDelete(req.params.id);

  console.log(product);
  res.status(204).json({
    status: "success",
    data: {
      product,
    },
  });
};
