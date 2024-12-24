const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: [true, "Orders must belong to a user!"],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  orderedItems: [
    {
      item: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        require: [true, "Orders must belong to a product!"],
      },
      name: {
        type: String,
        require: [true, "Product must have a name"],
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        require: [true, "Order must have a price."],
      },
    },
  ],
  paid: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Orders = mongoose.model("Order", orderSchema);
module.exports = Orders;
