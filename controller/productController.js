const Products = require("./../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find();
    
    res.status(200).json({
      status: "success.",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);
    
    res.status(200).json({
      status: "success.",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    
    res.status(200).json({
      status: "success.",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Products.create(req.body);
    
    res.status(201).json({
      status: "success.",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
      status: "success.",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
