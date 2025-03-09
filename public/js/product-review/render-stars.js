export const updateRatingStars = (elements, typeOfStar, selectedValue) => {
  // turn elements into array if it's not
  const stars = Array.isArray(elements) ? elements : [elements];
  stars.forEach((star) => {
    const value = parseFloat(star.getAttribute("data-value"));
    // if star value <= selected rating value, display as solid
    if (value <= selectedValue) {
      star.classList.add("fa-solid");
      star.classList.remove("fa-regular", typeOfStar);
    }
    // if star value - 0.5 = selected rating value, display as half star
    else if (value - 0.5 === selectedValue) {
      star.classList.add("fa-solid", typeOfStar);
      star.classList.remove("fa-regular");
    }
    // display as empty
    else {
      star.classList.remove("fa-solid", typeOfStar);
      star.classList.add("fa-regular");
    }
  });
};

export const renderStars = (starContainer, stars, reviewRating) => {
  const createEmptyStars = (container, maxStars, type = "regular") => {
    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement("div");
      star.className = `star-in-rating star fa-${type} fa-star fa-sm m-2`;
      star.setAttribute("data-value", i);
      container.appendChild(star);
    }
  };

  const reviewRatingStars = document.querySelectorAll(starContainer);
  reviewRatingStars.forEach((el) => {
    createEmptyStars(el, 5, "regular");
  });

  const starInRating = document.querySelectorAll(stars);
  starInRating.forEach((star) => {
    const ratingValue = star.closest(".rating").querySelector(reviewRating);
    const ratingInReview = parseFloat(ratingValue.textContent.replace(/[()]/g, "").split("/")[0]);
    updateRatingStars(star, "fa-star-half-stroke", ratingInReview);
  });
};
