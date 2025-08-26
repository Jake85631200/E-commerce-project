const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

// setting database and password
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
// connecting to DB
mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  if (port === 3000) {
    console.log(`App is running http://127.0.0.1:${port}`);
  }
  console.log(`App is running on port ${port}`);
});
