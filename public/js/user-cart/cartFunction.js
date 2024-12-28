import axios from "axios";
import { showAlert } from "../utils/alerts";

export const addToCartRequest = async (productId) => {
  try {
    const res = await axios({
      method: "POST",
      url: `/api/v1/carts/${productId}`,
    });
    if (res.data.status === "success") {
      showAlert("success", res.data.message);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const deleteItem = async (productId) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/carts`,
      data: {
        productId,
      },
    });
    if (res.data.status === "success") {
      showAlert("success", response.data.message);
    }
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

  const event = new Event("input", { bubbles: true }); // 加上 bubbles 使事件能冒泡
  input.dispatchEvent(event); // 手動觸發 input 事件

  console.log(input.value);
  updateTotal(input);
  if (buttonElement.closest(".item").querySelector(".item-checkbox").checked) {
    calCheckout();
  }
};

// UPDATE SINGLE ITEM PRICE TOTAL
const updateTotal = (inputElement) => {
  const quantity = parseInt(inputElement.value) || 0;
  // closest price element
  const price = parseFloat(inputElement.closest(".item-group-2").querySelector(".item-price").textContent);
  const total = price * quantity;
  const itemTotalElement = inputElement.closest(".item-group-2").querySelector(".item-total");
  itemTotalElement.textContent = total.toFixed(2);
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

// 將 .checked 的 item 加入 checkedItemArray，取消 .checked 則移除
export const getCheckedItem = (checkedItems, checkedItem) => {
  const productId = checkedItem.closest(".item").dataset.productId;

  if (checkedItem.classList.contains("checked")) {
    checkedItems.push(productId);
  } else {
    let productIndex = checkedItems.indexOf(productId);
    checkedItems.splice(productIndex, 1);
  }
};
