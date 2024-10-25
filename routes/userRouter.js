const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  disableMe,
} = require("./../controller/userController");

const { login, signUp, protect } = require("./../controller/authController");

const {} = require("./../middleware/authMiddleware");

router.post("/login", login);

router.route("/").get(getAllUsers).post(signUp);

router.use(protect);

router.delete("/disableMe", disableMe);

router.route("/:id").get(protect, getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
