const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Products = require("../models/productModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Users = require("../models/userModel");
const Orders = require("../models/orderModel");

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
        metadata: {
          id: JSON.stringify(products.map((product) => product._id)), // 將 product 陣列轉成 JSON
        },
      },
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.protocol}://${req.get("host")}/`,
    cancel_url: `${req.protocol}://${req.get("host")}/my-cart`,
    customer_email: req.user.email,
    mode: "payment",
    line_items: lineItems,
  });

  res.status(200).json({
    status: "success",
    session,
  });
});

const createOrderCheckout = async (session) => {
  // Find product, user, price in the session
  const user = (await Users.findOne({ email: session.customer_email }))._id;
  // const products = JSON.parse(session.metadata.products);

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

  const orderedItems = lineItems.data.map((lineItem) => ({
    item: session.metadata.id,
    name: lineItem.description,
    quantity: lineItem.quantity,
    price: lineItem.amount_total / 100,
  }));

  await Orders.create({ user, orderedItems });
};

exports.webhookCheckout = async (req, res, next) => {
  const signature = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    console.log("event.type");
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    createOrderCheckout(session);
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
