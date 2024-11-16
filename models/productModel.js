const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  product_name: {
    type: String,
    require: [true, "Product must have a name."],
    minlength: [8, "Product name must at least 8 characters long."],
    maxlength: [100, "Product name must less than 100 characters long."],
  },
  slug: String,
  image: {
    type: String,
    require: [true, "Please provide a image of the product."],
  },
  price: {
    type: Number,
    require: [true, "Product must have a price."],
    min: [1, "Price must be more than 0"],
  },
  description: {
    type: String,
    require: [true, "Product must have a description"],
    minlength: [20, "Product description must at least 20 characters long."],
    maxlength: [500, "Product description must less than 100 characters long."],
  },
  quantity: {
    type: Number,
    require: [true, "Please provide available quantity."],
  },
  release_date: {
    type: Date,
    default: Date.now,
  },
  ratings_average: {
    type: Number,
    min: 0,
    max: 5,
    default: 4.5,
  },
  ratings_quantity: {
    type: Number,
  },
  customer_reviews: {
    type: Number,
  },
  seller: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Product must belong to a seller."],
    },
    seller_name: {
      type: String,
      required: true,
    },
  },
  seller_rating: {
    type: Number,
  },
  isAvailable: {
    type: Boolean,
    default: true,
    // select: false,
  },
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "seller",
    select: ["name"],
  });
  next();
});

// Hide not active product
productSchema.pre(/^find/, function (next) {
  this.where({ isAvailable: true });
  next();
});

productSchema.pre("save", function (next) {
  // slugify converts string into URL friendly format
  this.slug = slugify(this.product_name, { lower: true });
  next();
});

const Products = mongoose.model("Product", productSchema);
module.exports = Products;
