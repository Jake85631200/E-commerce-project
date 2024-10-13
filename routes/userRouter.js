const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
} = require("./../controller/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUser);

module.exports = router;
