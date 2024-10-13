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

const port = process.env.PORT;
const server = app
  .listen(port, () => {
    console.log(`App is running on port: ${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is in use, switching to port 3000...`);
      server.close(); // closing current server
      app.listen(3000, () => {
        console.log(`App is running on port: 3000`);
      });
    }
  });
