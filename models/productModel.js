const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  product_name: {
    type: String,
    required: [true, "Product must have a name."],
    minlength: [8, "Product name must at least 8 characters long."],
    maxlength: [100, "Product name must less than 100 characters long."],
  },
  slug: String,
  image: {
    type: String,
    required: [true, "Please provide an image of the product."],
  },
  price: {
    type: Number,
    required: [true, "Product must have a price."],
    min: [1, "Price must be more than 0"],
  },
  description: {
    type: String,
    required: [true, "Product must have a description"],
    minlength: [20, "Product description must at least 20 characters long."],
    maxlength: [500, "Product description must less than 100 characters long."],
  },
  category: {
    type: String,
    enum: [
      "Electronics",
      "Home Appliances",
      "Footwear",
      "Beauty & Personal Care",
      "Health & Wellness",
      "Home & Kitchen",
      "Sports & Outdoors",
      "Toys & Games",
      "Automotive",
      "Books & Stationery",
      "Pet Supplies",
      "Furniture",
      "Jewelry & Accessories",
      "Groceries",
      "Clothing & Apparel",
    ],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide available quantity."],
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
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

// Virtual Populate
// NOT suitable to put review collection into productSchema, because reviews tends to be a MANY collection, using Virtual Populate
productSchema.virtual("reviewsInProd", {
  ref: "Review", // 關聯的模型名稱
  foreignField: "product", // Review 模型中的關聯欄位
  localField: "_id", // Product 模型的主鍵欄位
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
