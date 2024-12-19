const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Users = require("../models/userModel");
const Orders = require("../models/orderModel");

exports.getAllOrders = catchAsync(async (req, res, next) => {});

exports.getOrder = catchAsync(async (req, res, next) => {});

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const { productsId, productsQty } = req.body;

  const products = await Products.find({ _id: productsId });

  if (!products || !products.length === 0) {
    return next(new AppError("No products found.", 404));
  }

  products.forEach((product, index) => {
    product.quantity = productsQty[index];
  });

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      unit_amount: product.price * 100,
      product_data: {
        name: product.product_name,
        description: product.description,
        images: [product.image],
      },
    },
    quantity: product.quantity,
  }));
  // 2) create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.protocol}://${req.get("host")}/`,
    cancel_url: `${req.protocol}://${req.get("host")}/my-cart`,
    customer_email: req.user.email,
    client_reference_id: req.user.id,
    mode: "payment",
    line_items: lineItems,
  });
  lineItems.forEach((item) => {
    console.log(item.price_data.product_data.images);
  });
  // 3) create session as response
  res.status(200).json({
    status: "success",
    session,
  });
});

const createOrderCheckout = async (session) => {
  // Find product, user, price in the session
  const product = session.client_reference_id;
  const user = (await Users.findOne({ email: session.customer_email }))._id;
  const price = session.amount_total;
  // Create new order
  await Orders.create({ product, user, price });
};

exports.webhookCheckout = async (req, res, next) => {
  const signature = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    createOrderCheckout(event.data.object);
  }
  res.status(200).json({ received: true });
};

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Orders.find();

  res.status(200).json({
    status: "success",
    orders,
  });
});

exports.getMyOrder = catchAsync(async (req, res, next) => {
  const orders = await Orders.find({ user: req.user.id });

  res.status(200).json({
    status: "success",
    orders,
  });
});
