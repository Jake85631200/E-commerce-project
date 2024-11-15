const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Users = require("./../models/userModel");
const Products = require("./../models/productModel");
const Carts = require("./../models/cartModel");
const Reviews = require("./../models/reviewModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");
});

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf-8")
);
const carts = JSON.parse(fs.readFileSync(`${__dirname}/carts.json`, "utf-8"));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, "utf-8")
);

const importData = async () => {
  try {
    await Users.create(users, { validateBeforeSave: false });
    await Products.create(products, { validateBeforeSave: false });
    await Carts.create(carts, { validateBeforeSave: false });
    await Reviews.create(reviews, { validateBeforeSave: false });
    console.log("Data import successful.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Users.deleteMany();
    await Products.deleteMany();
    await Carts.deleteMany();
    await Reviews.deleteMany();
    console.log("Data has been deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const updateData = async () => {
  const fs = require("fs");

  // 讀取 products.json
  const productsData = JSON.parse(
    fs.readFileSync("dev-data/products.json", "utf-8")
  );
  const productIds = productsData.map((product) => product._id);

  // 讀取 review.json
  const reviewsData = JSON.parse(
    fs.readFileSync("dev-data/reviews.json", "utf-8")
  );

  // 隨機替換 product 值
  reviewsData.forEach((review) => {
    review.product = productIds[Math.floor(Math.random() * productIds.length)];
  });

  // 將結果寫回 reviews.json
  fs.writeFileSync(
    "dev-data/reviews.json",
    JSON.stringify(reviewsData, null, 2),
    "utf-8"
  );
};

// IMPORT AND DELETE DATA BY USING process.argv ON TERMINAL
// node dev-data/import-dev-data.js --import or --delete
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
} else if (process.argv[2] === "--update") {
  updateData();
}
console.log(process.argv);
