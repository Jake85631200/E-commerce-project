const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const Review = require("../models/reviewModel");

// Check Reviews
exports.getAllReview = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: "success.",
    result: reviews.length,
    data: {
      reviews,
    },
  });
});

// Check user reviews
exports.getReview = catchAsync(async (req, res, next) => {
  // const reviews = await Review.find()
  // const review = reviews.filter((review) => review._id === )
  const reviews = await Review.find({ user: req.params.id });

  res.status(200).json({
    status: "success.",
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

// Create review
exports.createReview = catchAsync(async (req, res, next) => {
  if (!req.user.id)
    return next(
      new AppError(
        "You're not logged in or authorization expired, please login again.",
        401
      )
    );

  const product = await Products.findById(req.params.id);
  if (!product) return next(new AppError("Product not found.", 404));

  const review = await Review.create({
    review: req.body.review,
    rating: req.body.rating,
    product: req.params.id,
    user: req.user._id,
  });

  res.status(200).json({
    status: "success.",
    message: "Thanks for your advice!",
    data: {
      review,
    },
  });
});

exports.updateReview = catchAsync(async (req, res, next) => {
  const review = await Review.findByIdAndUpdate(
    req.body.reviewId,
    { review: req.body.review },
    {
      new: true,
    }
  );

  if (!req.user.id)
    return next(
      new AppError(
        "You're not logged in or authorization expired, please login again.",
        401
      )
    );

  if (!review) return next(new AppError("Review not found.", 404));

  res.status(200).json({
    status: "success.",
    message: "Review removed successfully",
    data: {
      review,
    },
  });
});

// Delete review
exports.deleteReview = catchAsync(async (req, res, next) => {
  const review = await Review.findByIdAndDelete(req.body.reviewId);

  if (!req.user.id)
    return next(
      new AppError(
        "You're not logged in or authorization expired, please login again.",
        401
      )
    );

  if (!review) return next(new AppError("Review not found.", 404));

  res.status(200).json({
    status: "success.",
    message: "Review removed successfully",
  });
});
