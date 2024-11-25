const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("./../models/productModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Users = require("../models/userModel");
const Bookings = require("../models/bookingModel");

exports.getAllBookings = catchAsync(async (req, res, next) => {});

exports.getBooking = catchAsync(async (req, res, next) => {});

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) get currently booked product
  const product = await Products.findById(req.params.productId);
  if (!product || !product.product_name) {
    return next(new AppError("Product not found or product name is null", 404));
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

const createBookingCheckout = async (session) => {
  // Find product, user, price in the session
  const product = session.client_reference_id;
  const user = (await Users.findOne({ email: session.customer_email }))._id;
  const price = session.amount_total;
  // Create new booking
  await Bookings.create({ product, user, price });
};

exports.webhookCheckout = async (req, res, next) => {
  const signature = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    createBookingCheckout(event.data.object);
  }
  res.status(200).json({ received: true });
};
