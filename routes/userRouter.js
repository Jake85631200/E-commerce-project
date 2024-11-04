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
  updatePassword,
  twoFactor,
  validateFACode,
  protect,
  restrictTo,
} = require("./../controller/authController");

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/logout", logOut);
router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);
router.post("/twoFactor", twoFactor);
router.post("/validateFACode", validateFACode);

router.use(protect);

router.patch("/updatePassword", updatePassword);

router.route("/").get(getAllUsers);

router.patch("/disableMe", disableMe);

router.route("/:id").patch(updateUser);

router.use(restrictTo("admin"));

router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
