import axios from "axios";
import { showAlert } from "../utils/alerts";
import { reviewToggleAndRatingStars } from "./review-render";

const leaveReview = async (productId, review, rating) => {
  try {
    const res = await axios({
      method: "POST",
      url: `/api/v1/reviews/${productId}`,
      data: {
        review,
        rating,
      },
    });
    if (res.data.status === "success") {
      showAlert("success", res.data.message);
      window.setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  } catch (err) {
    showAlert("error", `${`${err.response.data.message}`}`, 4);
  }
};

export const initReview = async () => {
  reviewToggleAndRatingStars();
  const reviewBtn = document.getElementById("review-submit");

  if (reviewBtn) {
    reviewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newReview = document.getElementById("review-textarea").value;
      const ratingValue = document.querySelector(".rating-value").textContent;
      if (!newReview) return showAlert("error", "Please leave your review!", 4);
      const path = window.location.pathname;
      const productId = path.split("/").pop();
      const rating = ratingValue.replace(/[()]/g, "").split(" / ")[0];
      console.log(rating);
      leaveReview(productId, newReview, rating);
    });
  }
};
