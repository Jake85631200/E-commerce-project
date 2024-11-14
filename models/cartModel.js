const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        _id: false,
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
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
  }, // Virtual Property
  {
    // When using toJSON and toObject, VP will be included.
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual property
cartSchema.virtual("isEmpty").get(function () {
  return !this.items || this.items.length === 0 ? "empty" : false;
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
