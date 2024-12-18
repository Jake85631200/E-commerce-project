import {
  addToCartRequest,
  setQuantity,
  calCheckout,
  updateAllCheckbox,
  deleteItem,
} from "../user-cart/cartFunction.js";

export const initCart = () => {
  const addToCart = document.querySelector(".add-to-cart-btn");
  const itemCheckbox = document.querySelectorAll(".item-checkbox");
  const allCheckbox = document.querySelector(".all-checkbox");
  const decreaseBtns = document.querySelectorAll(".decrease-btn");
  const increaseBtns = document.querySelectorAll(".increase-btn");
  const deleteItemBtn = document.querySelectorAll(".item-delete");

  if (addToCart) {
    addToCart.addEventListener("click", (e) => {
      e.preventDefault;
      const path = window.location.pathname;
      const productId = path.split("/").pop();
      addToCartRequest(productId);
    });
  }

  if (itemCheckbox) {
    itemCheckbox.forEach((item) => {
      item.addEventListener("change", () => {
        item.classList.toggle("checked", item.checked);

        //- update checkout area and all-checkbox statement
        calCheckout();
        updateAllCheckbox();
      });
    });
  }

  if (allCheckbox) {
    allCheckbox.addEventListener("change", () => {
      //- classList.toggle("addedClass", Boolean)
      const isChecked = allCheckbox.checked;
      allCheckbox.classList.toggle("checked", isChecked);

      itemCheckbox.forEach((item) => {
        item.checked = isChecked;
        item.classList.toggle("checked", isChecked);
      });
      calCheckout();
    });
  }

  if (decreaseBtns && increaseBtns) {
    document.querySelectorAll(".decrease-btn, .increase-btn").forEach((button) => {
      const increment = button.classList.contains("decrease-btn") ? -1 : 1;
      button.addEventListener("click", () => setQuantity(button, increment));
    });
  }

  if (deleteItemBtn) {
    deleteItemBtn.forEach((deleteButton) => {
      deleteButton.addEventListener("click", (e) => {
        if (e.target.matches(".item-delete")) {
          deleteItem(e.target);
        }
      });
    });
  }
};
