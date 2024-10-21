const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("./../controller/userController");

const { login, signUp } = require("./../controller/authController");

router.route("/").get(getAllUsers).post(signUp);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

router.route("/login").post(login);

module.exports = router;
