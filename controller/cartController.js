const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const Cart = require("../models/cartModel");

// createCart: Cart will be created when user signup

// Check cart
exports.checkAllCart = catchAsync(async (req, res, next) => {
  const carts = await Cart.find();

  res.status(200).json({
    status: "success",
    result: carts.length,
    data: {
      carts,
    },
  });
});

exports.checkMyCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findById(req.user.cart);

  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
});

// Add product into cart
exports.addToCart = catchAsync(async (req, res, next) => {
  // Get product id from URL
  const product = await Products.findById(req.params.id);
  const cart = await Cart.findById(req.user.cart._id);

  if (!req.user.id)
    return next(new AppError("You're not logged in or authorization expired, please login again.", 401));

  if (!product) return next(new AppError("Product not found.", 404));
  const existingItem = cart.items.find((item) => item.product.toString() === req.params.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      product: req.params.id,
      product_name: product.product_name,
      image: product.image,
      quantity: 1,
      price: product.price,
      total: product.price,
    });
  }

  await cart.save();

  res.status(200).json({
    status: "success",
    message: "This item has been added into your cart!",
    data: {
      cart,
    },
  });
});

// Remove product from cart
exports.removeFormCart = catchAsync(async (req, res, next) => {
  const product = await Products.findById({ _id: req.body.productId });
  const cart = await Cart.findById(req.user.cart._id);

  if (!req.user.id)
    return next(new AppError("You're not logged in or authorization expired, please login again.", 401));

  if (!product) return next(new AppError("Product not found.", 404));

  const existingItem = cart.items.find((item) => item.product.toString() === req.body.productId);

  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity -= 1;
  } else {
    cart.items = cart.items.filter((item) => item.product.toString() !== req.body.productId);
  }

  await cart.save();

  res.status(200).json({
    status: "success",
    message: "This item has been removed from your cart!",
    data: {
      cart,
    },
  });
});
