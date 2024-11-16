const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("./../models/productModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.getAllBookings = catchAsync(async (req, res, next) => {});

exports.getBooking = catchAsync(async (req, res, next) => {});

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) get currently booked product
  const product = await Products.findById(req.params.productId);
   if (!product || !product.product_name) {
     return next(
       new AppError("Product not found or product name is null", 404)
     );
   }
  // 2) create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.protocol}://${req.get("host")}/`,
    cancel_url: `${req.protocol}://${req.get("host")}/product/${product.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.productId,
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: product.price * 100,
          product_data: {
            name: product.product_name,
            description: product.description,
            images: [product.image],
          },
        },
        quantity: 1,
      },
    ],
  });

  // 3) create session as response
  res.status(200).json({
    status: "success",
    session,
  });
});
