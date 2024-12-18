import axios from "axios";
import { showAlert } from "../utils/alerts";

// UPDATE SINGLE ITEM PRICE TOTAL
const updateTotal = (inputElement) => {
  const quantity = parseInt(inputElement.value) || 0;
  // closest price element
  const price = parseFloat(inputElement.closest(".item-group-2").querySelector(".item-price").textContent);
  const total = price * quantity;
  const itemTotalElement = inputElement.closest(".item-group-2").querySelector(".item-total");
  itemTotalElement.textContent = total.toFixed(2);
};

export const addToCartRequest = async (productId) => {
  try {
    const res = await axios({
      method: "POST",
      url: `/api/v1/carts/${productId}`,
    });
    if (res.data.status === "success") showAlert("success", "Item added into your cart!");
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

// SET ITEM QUANTITY AND UPDATE TOTAL PRICE
export const setQuantity = (buttonElement, increment) => {
  // closest input
  const input = buttonElement.closest(".item-quantity").querySelector(".qt-input");
  const currentValue = parseInt(input.value) || 1;
  const quantity = Math.max(1, currentValue + increment);
  input.value = quantity;
  updateTotal(input);
  if (buttonElement.closest(".item").querySelector(".item-checkbox").checked) {
    calCheckout();
  }
};

// UPDATE CHECKOUT TOTAL
export const calCheckout = () => {
  const itemCheckbox = document.querySelectorAll(".item-checkbox");
  const selectedItems = document.querySelector(".selected-item");
  const priceTotal = document.querySelector(".price-total");

  let selected = 0; // Qty of selected item
  let total = 0; // total price of all selected item

  itemCheckbox.forEach((item) => {
    // closest item-total element
    const itemTotal = parseFloat(item.closest(".item").querySelector(".item-total").textContent.trim());
    if (item.checked) {
      selected += 1;
      total += itemTotal;
    }
  });
  // update checkout area
  selectedItems.innerText = `Total price (${selected} item) :`;
  priceTotal.innerText = `$${total.toFixed(2)}`;
};

// UPDATE ALL CHECKBOX
export const updateAllCheckbox = () => {
  const itemCheckbox = document.querySelectorAll(".item-checkbox");
  const allCheckbox = document.querySelector(".all-checkbox");

  //- .every(fn) return true or false
  //- if all item-checkbox checked, set all-checkbox to checked
  const allChecked = Array.from(itemCheckbox).every((checkbox) => checkbox.checked);
  allCheckbox.checked = allChecked;
  allCheckbox.classList.toggle("checked", allChecked);
};

export const deleteItem = (buttonElement) => {
  const itemElement = buttonElement.closest(".item");
  itemElement.remove(); // remove item
  calCheckout();
  updateAllCheckbox();
};
