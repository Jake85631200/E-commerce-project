const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Users = require("./../models/userModel");
const Products = require("./../models/productModel");
const Carts = require("./../models/cartModel")

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

const importData = async () => {
  try {
    await Users.create(users, { validateBeforeSave: false });
    await Products.create(products, { validateBeforeSave: false });
    await Carts.create(carts, { validateBeforeSave: false });
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
    console.log("Data has been deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// IMPORT AND DELETE DATA BY USING process.argv ON TERMINAL
// node dev-data/import-dev-data.js --import or --delete
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
console.log(process.argv);
