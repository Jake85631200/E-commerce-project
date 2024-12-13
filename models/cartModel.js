const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    // put every item-in-cart collection in cartSchema, suitable for FEW collection （反例：見 productModel 中的 reviews）
    items: [
      {
        _id: false,
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        product_name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 1,
        },
        total: {
          type: Number,
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // When using toJSON and toObject, VP will be included.
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Virtual property
cartSchema.virtual("isEmpty").get(function () {
  return !this.items || this.items.length === 0 ? "empty" : false;
});

// Virtual Populate
cartSchema.virtual("productsInCart", {
  ref: "Product", // 關聯的模型名稱
  foreignField: "_id", // Product 模型中的欄位
  localField: "items.product", // Cart.items.product 中的欄位
});

// Middleware
cartSchema.pre("save", function (next) {
  this.items.forEach((item) => {
    item.total = (item.quantity * item.price).toFixed(2);
  });
  next();
});

const Carts = mongoose.model("Cart", cartSchema);
module.exports = Carts;
