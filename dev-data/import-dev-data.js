const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./../models/userModel");
const Products = require("./../models/productModel");

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

const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    await Products.create(products, { validateBeforeSave: false });
    console.log("Data import successful.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Products.deleteMany();
    console.log("Data has been deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// IMPORT AND DELETE DATA BY USING process.argv ON TERMINAL
// node <Path of this file> --import or --delete
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
console.log(process.argv);
