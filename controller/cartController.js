const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const Cart = require("../models/cartModel");

// 從 URL 和 req.user 帶入 product 和 user id
exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id; // user is from protect middleware
  next();
};

// 添加商品到購物車
exports.addToCart = catchAsync(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product) return next(AppError("Product not found.", 404));

  if (!user || !req.user.id)
    return next(
      AppError(
        "You're not log in or authorization expired, please login again.",
        401
      )
    );

  await Cart.create(product);

  res.status(200).json({
    status: "success.",
    message: "This item has been added into your cart!",
  });
});
// 從購物車刪除商品
// 查看購物車內容
