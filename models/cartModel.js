const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  // ref: user, product
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  items: [
    {
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
});

// Middleware
cartSchema.pre("save", function (next) {
  this.items.forEach((item) => {
    item.total = item.quantity * item.price;
  });
  next();
});

const Carts = mongoose.model("Cart", cartSchema);
module.exports = Carts;
