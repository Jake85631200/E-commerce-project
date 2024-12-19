import { showAlert } from "../utils/alerts";
import {
  addToCartRequest,
  setQuantity,
  calCheckout,
  updateAllCheckbox,
  deleteItem,
  getCheckedItem,
} from "../user-cart/cartFunction";
import { orderProducts } from "../stripe";

export const initCart = () => {
  const addToCart = document.querySelector(".add-to-cart-btn");
  const itemCheckbox = document.querySelectorAll(".item-checkbox");
  const allCheckbox = document.querySelector(".all-checkbox");
  const decreaseBtns = document.querySelectorAll(".decrease-btn");
  const increaseBtns = document.querySelectorAll(".increase-btn");
  const deleteItemBtn = document.querySelectorAll(".item-delete");
  const checkoutBtn = document.querySelector(".checkout-btn");

  let checkedItems = [];
  let checkedQty = [];

  if (addToCart) {
    addToCart.addEventListener("click", (e) => {
      e.preventDefault();
      const path = window.location.pathname;
      const productId = path.split("/").pop();
      addToCartRequest(productId);
    });
  }

  // TOGGLE .checked WHILE CHECKBOX BEEN CLICKED
  if (itemCheckbox) {
    itemCheckbox.forEach((item) => {
      item.addEventListener("change", () => {
        item.classList.toggle("checked", item.checked);

        //- update checkout area and all-checkbox statement
        calCheckout();
        updateAllCheckbox();
        getCheckedItem(checkedItems, item);
      });
    });
  }

  // TOGGLE .checked WHILE ALL-CHECKBOX BEEN CLICKED
  if (allCheckbox) {
    allCheckbox.addEventListener("change", () => {
      //- classList.toggle("addedClass", Boolean)
      const isChecked = allCheckbox.checked;
      allCheckbox.classList.toggle("checked", isChecked);

      // 清空，改以 allCheckbox .checked 為準
      checkedItems = [];
      checkedQty = [];

      itemCheckbox.forEach((item) => {
        item.checked = isChecked;
        item.classList.toggle("checked", isChecked);
        getCheckedItem(checkedItems, item);
      });
      calCheckout();
    });
  }

  if (decreaseBtns && increaseBtns) {
    document.querySelectorAll(".decrease-btn, .increase-btn").forEach((button) => {
      const increment = button.classList.contains("decrease-btn") ? -1 : 1;
      button.addEventListener("click", (e) => {
        setQuantity(button, increment);
      });
    });
  }

  if (deleteItemBtn) {
    deleteItemBtn.forEach((deleteButton) => {
      deleteButton.addEventListener("click", (e) => {
        if (e.target.matches(".item-delete")) {
          const itemElement = e.target.closest(".item");
          itemElement.remove(); // remove item
          const productId = itemElement.dataset.productId;
          deleteItem(productId);
          calCheckout();
          updateAllCheckbox();
        }
      });
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", (e) => {
      e.preventDefault();

      checkedQty = [];

      const productQty = document.querySelectorAll(".qt-input");
      productQty.forEach((quantity) => {
        const checkboxNearest = quantity.closest(".item").querySelector(".item-checkbox");
        if (checkboxNearest.classList.contains("checked")) {
          checkedQty.push(parseInt(quantity.value));
        }
      });

      if (checkedItems.length !== 0 && checkedQty.length !== 0) {
        orderProducts(checkedItems, checkedQty);
      } else {
        showAlert("error", "Please select an item to checkout!");
      }
    });
  }
};
