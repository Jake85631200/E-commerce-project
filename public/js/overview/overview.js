import { renderStars} from "../product-review/render-stars";

export const initOverview = () => {
  const overviewCard = document.querySelector(".card-container");
  if (overviewCard) {
    renderStars(".overview-rating-star", ".star-in-rating", ".overview-rating");
  }
};
