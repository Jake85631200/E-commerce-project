const Products = require("./../models/productModel");
const GetAllProductsFeature = require("../utils/getAllProductsFeature");

exports.getAllProducts = async (req, res, next) => {
  try {
    const query = Products.find();
    const APIFeatures = new GetAllProductsFeature(query, req.query)
      .filter()
      .paginate()
      .sort()
      .fields();

    const products = await APIFeatures.query;

    res.status(200).json({
      status: "success.",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
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
    res.status(404).json({
      status: "fail",
      message: err.message,
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
    res.status(404).json({
      status: "fail",
      message: err.message,
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
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Products.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success.",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.productStats = async (req, res, next) => {
  try {
    const list = await Products.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },

      {
        $group: {
          _id: { $toUpper: "$size" },
          numProds: { $sum: 1 },
          avgRating: { $avg: "$ratingsAverage" },
          avgQuantity: { $avg: "$ratingsQuantity" },
          avgSellerRating: { $avg: "$seller_rating" },
          avgPrice: { $avg: "$price" },
          minPrice: { $min: "$price" },
          maxPrice: { $max: "$price" },
        },
      },
    ]);

    res.status(200).json({
      status: "success.",
      data: {
        list,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
