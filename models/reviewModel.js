const mongoose = require("mongoose");
const Product = require("./productModel");

const reviewSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    comment: {
      type: String,
      require: [true, "A comment must have content."],
      maxlength: [50, "A comment must less or equal to 50 characters."],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Review must belong to a product."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong a user."],
    },
  },
  // Virtual Property
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Each combination of product and user has always to be unique
// reviewSchema.index({ product: 1, user: 1 }, { unique: true });

// MIDDLEWARE

// QUERY MIDDLEWARE
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: ["name", "image"],
  });
  next();
});

// AGGREGATION PIPELINE
reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    { $match: { product: tourId } },
    {
      $group: {
        _id: "$product",
        numRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Product.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].numRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Product.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.product);
});

// Update rating statistics on review update or delete
// Use query middleware to invoke calcAverageRatings

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.clone().findOne();
  next();
});

// Calculate rating statistics in post middleware
reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.product);
});
// Two-step process because data isn't updated in query middleware

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
