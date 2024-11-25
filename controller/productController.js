const Products = require("./../models/productModel");
const GetAllProductsFeature = require("../utils/getAllProductsFeature");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const query = Products.find();
  const APIFeatures = new GetAllProductsFeature(query, req.query).filter().paginate().sort().fields();

  const products = await APIFeatures.query;

  res.status(200).json({
    status: "success.",
    result: products.length,
    data: {
      products,
    },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product) return next(new AppError("Can't find product with that ID!", 404));

  res.status(200).json({
    status: "success.",
    data: {
      product,
    },
  });
});

exports.getMyProduct = catchAsync(async (req, res, next) => {
  const products = await Products.find({ "seller._id": req.user._id });

  console.log(products);

  if (!products || products.length === 0) {
    return next(new AppError("Can't find any products for this user!", 404));
  }

  res.status(200).json({
    status: "success.",
    result: products.length,
    data: {
      products,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!product) return next(new AppError("Can't find product with that ID!", 404));

  res.status(200).json({
    status: "success.",
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  try {
    console.log(req.user.name);
    const product = await Products.create({
      product_name: req.body.product_name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      release_date: req.body.release_date,
      ratings_average: req.body.ratingsAverage,
      customer_reviews: req.body.customer_reviews,
      // Nested object
      seller: {
        _id: req.user._id,
        seller_name: req.user.name,
      },
      seller_rating: req.body.seller_rating,
      isAvailable: req.body.isAvailable,
    });

    res.status(201).json({
      status: "success.",
      data: {
        product,
      },
    });
  } catch (err) {
    return next(err);
  }
});

exports.disableProd = catchAsync(async (req, res, next) => {
  const product = await Products.findByIdAndUpdate(req.params.id, {
    isActive: false,
  });

  if (!product) return next(new AppError("Can't find product with that ID!", 404));

  res.status(204).json({
    status: "success.",
    data: null,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findByIdAndDelete(req.params.id);

  if (!product) return next(new AppError("Can't find product with that ID!", 404));

  res.status(204).json({
    status: "success.",
    data: null,
  });
});

exports.productStats = catchAsync(async (req, res, next) => {
  try {
    const list = await Products.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },

      {
        $group: {
          _id: { $toUpper: "$price" },
          numProds: { $sum: 1 },
          avgRating: { $avg: "$ratings_average" },
          avgQuantity: { $avg: "$ratings_quantity" },
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
});
