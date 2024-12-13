const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  uploadUserImage,
  updateMe,
  disableMe,
  getProfile,
} = require("../controller/userController");

const {
  login,
  logout,
  signUp,
  forgetPassword,
  resetPassword,
  updatePassword,
  twoFactor,
  validateFACode,
  protect,
  restrictTo,
} = require("../controller/authController");

router.post("/signUp", signUp);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);
router.post("/twoFactor", twoFactor);
router.post("/validateFACode", validateFACode);

router.use(protect);

router.get("/profile", getProfile);

router.patch("/updatePassword", updatePassword);

router.patch("/disableMe", disableMe);

router.patch("/updateMe", uploadUserImage, updateMe);

router.use(restrictTo("admin"));

router.route("/").get(getAllUsers);

router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
