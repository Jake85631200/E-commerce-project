import { renderStars, updateRatingStars } from "../product-review/render-stars";

// const updateRatingStars = (elements, typeOfStar, selectedValue);
export const initOverview = () => {
  const overviewCard = document.querySelector(".card-container");
  if (overviewCard) {
    renderStars(".overview-rating-star", ".star-in-rating", ".overview-rating");

    // let value = document.querySelector(".overview-rating").innerText;
    // value = parseInt(value)
    // updateRatingStars(".star-in-rating", "regular", value);
  }
};
