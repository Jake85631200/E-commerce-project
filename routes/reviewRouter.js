const express = require("express");
const router = express.Router();

const {
  getAllReview,
  getReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");

const { restrictTo, protect } = require("../controller/authController");

router.use(protect);

router
  .route("/")
  .get(restrictTo("admin"), getAllReview)
  .delete(deleteReview)
  .patch(updateReview);

router.route("/:id").get(getReview).post(createReview);

module.exports = router;
