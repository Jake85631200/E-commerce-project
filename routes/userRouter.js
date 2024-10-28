const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  disableMe,
} = require("./../controller/userController");

const {
  login,
  logOut,
  signUp,
  forgetPassword,
  resetPassword,
  protect,
} = require("./../controller/authController");

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/logout", logOut);
router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);

router.use(protect);

router.route("/").get(getAllUsers);

router.delete("/disableMe", disableMe);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
