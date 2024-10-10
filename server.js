const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

// setting database and password
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// connecting to DB
mongoose.connect(DB).then(() => {
  console.log("DB connecting successfully!");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
