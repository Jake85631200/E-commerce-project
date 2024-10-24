const mongoose = require("mongoose");
const { availableMemory } = require("process");

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
  availability: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    require: [true, "Please provide available quantity."],
  },
  sold: {
    type: Number,
  },
  release_date: {
    type: Date,
    default: Date.now,
  },
  brand: {
    type: String,
  },
  size: {
    type: String,
    enum: ["Small", "Medium", "Large"],
  },
  weight: {
    type: Number,
    min: [0, "Weight can't be below 0."],
  },
  ratingsAverage: {
    type: Number,
    min: 0,
    max: 5,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
  },
  customer_reviews: {
    type: Number,
  },
  seller_name: {
    type: String,
    require: true,
  },
  seller_rating: {
    type: Number,
  },
});



const Products = mongoose.model("Products", productSchema);
module.exports = Products;
