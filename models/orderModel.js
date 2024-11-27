const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    require: [true, "Orders must belong to a product!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: [true, "Orders must belong to a user!"],
  },
  price: {
    type: Number,
    require: [true, "Order must have a price."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

orderSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "product",
    select: "name",
  });
  next();
});

const Orders = mongoose.model("Order", orderSchema);
module.exports = Orders;
