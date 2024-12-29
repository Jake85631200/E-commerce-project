export const reviewToggleAndRatingStars = () => {
  // Expand/Fold review text
  // 1) Show expand button when review is overflowed

  // select all "review"
  const reviews = document.querySelectorAll(".review");
  reviews.forEach((review) => {
    // select "user-review" and "toggle-button" in each review
    const userReview = review.querySelector(".user-review");
    const button = review.querySelector(".toggle-button");
    // check if review is overflowed
    if (userReview.scrollHeight > userReview.clientHeight) {
      // if overflowed, show expand button
      button.style.display = "block";
    } else {
      // if not overflowed, hide expand button
      button.style.display = "none";
    }
  });

  // 2)Toggle review text (expand/fold)
  function toggleText(button) {
    // select button's previous sibling (review)
    const foldedView = button.parentElement.previousElementSibling;
    // check if foldedView is expanded
    if (foldedView.classList.contains("expanded")) {
      // if expanded, fold foldedView and change button text
      foldedView.classList.remove("expanded");
      button.textContent = "Expand foldedView";
    } else {
      // if not expanded, expand foldedView and change button text
      foldedView.classList.add("expanded");
      button.textContent = "(Fold)";
    }
  }
  const toggleReviewButtons = document.querySelectorAll(".toggle-button");
  toggleReviewButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      toggleText(toggleButton);
    });
  });

  //Leave rating stars
  // update leaveStarRating display
  function updateRatingStars(elements, typeOfStar, selectedValue) {
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
  }

  function renderLeaveReviewStars(container, maxStars) {
    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement("div");
      star.classList.add("leave-star-rating", "star", "fa-regular", "fa-star", "fa-2xl", "m-2");
      star.setAttribute("style", "color: #FFD43B;");
      star.setAttribute("data-value", i);

      const spanBox = document.createElement("span");
      spanBox.classList.add("span-box");

      const spanLeft = document.createElement("span");
      spanLeft.classList.add("span-left");

      const spanRight = document.createElement("span");
      spanRight.classList.add("span-right");

      // 將 span 內元素加到 spanBox 中
      spanBox.appendChild(spanLeft);
      spanBox.appendChild(spanRight);

      // 將 spanBox 加到 star 中
      star.appendChild(spanBox);

      // 最後將 star 加到 .star-rating 中
      container.appendChild(star);
    }
  }

  function renderStars(container, maxStars, type = "regular") {
    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement("div");
      star.className = `star-in-rating star fa-${type} fa-star fa-sm m-2`;
      star.setAttribute("data-value", i);
      container.appendChild(star);
    }
  }
  const starRatingContainer = document.querySelector(".star-rating");
  renderLeaveReviewStars(starRatingContainer, 5);

  // 1) select all stars, rating input, rating value
  const leaveStarRating = Array.from(document.querySelectorAll(".leave-star-rating"));
  const ratingInput = document.getElementById("rating");
  const ratingValue = document.querySelector(".rating-value");
  // 2) add listener to each star
  leaveStarRating.forEach((star) => {
    // select star left and right half
    const spanLeft = star.querySelector(".span-left");
    const spanRight = star.querySelector(".span-right");
    // 3) set value when left and  half mouseover
    // a) when left half mouseover
    spanLeft.addEventListener("mouseover", function () {
      // rating value = data-value - 0.5 (ex: 4.5 - 0.5 = 4)
      const value = parseFloat(star.getAttribute("data-value")) - 0.5;
      // update rating input value
      ratingInput.value = value;
      ratingValue.textContent = `(${value} / 5)`;
      // update leaveStarRating display
      updateRatingStars(leaveStarRating, "fa-star-half-stroke", value);
    });
    // b) when right half mouseover
    spanRight.addEventListener("mouseover", function () {
      // rating value = data-value
      const value = parseFloat(star.getAttribute("data-value"));
      // update rating input
      ratingInput.value = value;
      ratingValue.textContent = `(${value} / 5)`;
      // update leaveStarRating display
      updateRatingStars(leaveStarRating, "fa-star-half-stroke", value);
    });
  });

  // Star rating in review
  // 1) select all reviewRatingStars
  const reviewRatingStars = document.querySelectorAll(".review-rating-star");
  reviewRatingStars.forEach((el) => {
    renderStars(el, 5, "regular");
    //
  });

  const starInRating = document.querySelectorAll(".star-in-rating");
  starInRating.forEach((star) => {
    const ratingValue = star.closest(".rating").querySelector(".rating-in-review");
    const ratingInReview = parseFloat(ratingValue.textContent.replace(/[()]/g, "").split("/")[0]);
    updateRatingStars(star, "fa-star-half-stroke", ratingInReview);
  });
};
