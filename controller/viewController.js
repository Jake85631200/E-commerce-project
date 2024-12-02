const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Orders = require("../models/orderModel");

exports.OverView = catchAsync(async (req, res, next) => {
  const products = await Products.find();

  res.status(200).render("overview", {
    title: "All Products",
    products,
  });
});

exports.MyCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findById("652e10e9fc13ae2b026747c6").populate({
    path: "productsInCart",
    fields: "image product_name price ",
  });

  res.status(200).render("cart", {
    title: "My Cart",
    cart,
  });
});

exports.addToCart = catchAsync(async (req, res, next) => {
  // Get product id from URL
  const product = await Products.findById(req.params.id);
  const cart = await Cart.findById(req.user.cart._id);
  console.log(req.params.id);
  if (!req.user.id)
    return next(new AppError("You're not logged in or authorization expired, please login again.", 401));

  if (!product) return next(new AppError("Product not found.", 404));

  // Check if added item has already in cart, if so, quantity + 1
  const existingItem = cart.items.find((item) => item.product.toString() === req.params.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      product: req.params.id,
      quantity: 1,
      price: product.price,
      total: product.price,
    });
  }

  await cart.save();

  res.status(200).json({
    status: "success.",
    message: "This item has been added into your cart!",
    data: {
      cart,
    },
  });
});

exports.getLoginForm = async (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};
