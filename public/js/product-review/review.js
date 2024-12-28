import axios from "axios";
import { showAlert } from "../utils/alerts";

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
    showAlert("error", err.response.data.message);
  }
};

export const initReview = async () => {
  const reviewBtn = document.getElementById("review-submit");

  if (reviewBtn) {
    reviewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newReview = document.getElementById("review-textarea").value;
      console.log(newReview);
      const path = window.location.pathname;
      const productId = path.split("/").pop();
      const rating = parseInt(4);
      leaveReview(productId, newReview, rating);
    });
  }
};
