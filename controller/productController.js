const Products = require("./../models/productModel");
const GetAllProductsFeature = require("../utils/getAllProductsFeature");
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = catchAsync(async (req, res, next) => {
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
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product)
    return next(new AppError("Can't find product with that ID!", 404));

  res.status(200).json({
    status: "success.",
    data: {
      product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!product)
    return next(new AppError("Can't find product with that ID!", 404));

  res.status(200).json({
    status: "success.",
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Products.create(req.body);

  res.status(201).json({
    status: "success.",
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Products.findByIdAndDelete(req.params.id);

  if (!product)
    return next(new AppError("Can't find product with that ID!", 404));

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
});
