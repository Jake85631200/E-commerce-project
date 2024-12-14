const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const Users = require("../models/userModel");
const Carts = require("../models/cartModel");
const Reviews = require("../models/reviewModel");
const Orders = require("../models/orderModel");

exports.overview = catchAsync(async (req, res, next) => {
  const products = await Products.find();

  res.status(200).render("overview", {
    title: "All Products",
    products,
  });
});

exports.search = catchAsync(async (req, res, next) => {
  const query = req.query.keyword.trim();
  const products = await Products.find({ product_name: new RegExp(query, "i") });

  console.log(products);

  if (products.length === 0) {
    return next(new AppError("No related products found!", 404));
  }

  res.render("product_partial", { products, query }, (err, html) => {
    res.status(200).send(html);
  });
});

exports.myProfile = catchAsync(async (req, res, next) => {
  const user = await Users.findById(req.user._id);

  res.status(200).render("account", {
    title: "My Profile",
    user,
  });
});

exports.checkProd = catchAsync(async (req, res, next) => {
  const product = await Products.findById(req.params.id).populate({
    path: "reviewsInProd",
  });

  if (!product) return next(new AppError("Can't find product with that ID!", 404));

  res.status(200).render("product", {
    title: `${product.product_name}`,
    product,
    reviews: product.reviewsInProd || [],
  });
});

exports.myCart = catchAsync(async (req, res, next) => {
  const cart = await Carts.findById(req.user.cart).populate({
    path: "productsInCart",
  });

  res.status(200).render("cart", {
    title: "My Cart",
    cart,
  });
});

exports.addToCart = catchAsync(async (req, res, next) => {
  // Get product id from URL
  const product = await Products.findById(req.params.id);
  const cart = await Carts.findById(req.user.cart._id);
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

exports.getLoginForm = async (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.TwoFACode = async (req, res) => {
  res.status(200).render("two_factor", {
    title: "Forget password",
  });
};
