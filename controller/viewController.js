const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const GetAllProductsFeature = require("../utils/getAllProductsFeature");

const Products = require("../models/productModel");
const Users = require("../models/userModel");
const Carts = require("../models/cartModel");

exports.overview = catchAsync(async (req, res, next) => {
  const products = await Products.find();

  res.status(200).render("overview", {
    status: "success",
    title: "All Products",
    products,
  });
});

exports.search = catchAsync(async (req, res, next) => {
  const query = Products.find();

  const APIFeatures = new GetAllProductsFeature(query, req.query).search().filter().paginate().sort().fields();

  const products = await APIFeatures.query;

  if (products.length === 0 || !products) {
    return res.status(404).render("overview", {
      title: `Search results for ${req.query.keyword}`,
      products,
    });
  }

  res.status(200).render("overview", {
    status: "success",
    title: `Search results for ${req.query.keyword}`,
    products,
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
  const cart = await Carts.findById(req.user.cart);

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

exports.getSignupForm = async (req, res) => {
  res.status(200).render("sign_up", {
    title: "Sign up for an account",
  });
};

exports.TwoFACode = async (req, res) => {
  res.status(200).render("two_factor", {
    title: "Forget password",
  });
};
