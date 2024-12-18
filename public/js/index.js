// IMPORT FUNCTIONS
import { showAlert } from "./utils/alerts";
import { initLoginOut } from "./user-auth/login";
import { initForgetPassword } from "./user-auth/twoFactorVerify";
import { initSearch } from "./search-item/search";
import { initUpdateSetting } from "./user-account/updateSettings";
import { initCart } from "./user-cart/cart";

document.addEventListener("DOMContentLoaded", () => {
  initLoginOut();
  initForgetPassword();
  initSearch();
  initUpdateSetting();
  initCart();
});

// IF dateset-alert = alert, showAlert
const alertMsg = document.querySelector("body").dataset.alert;
if (alertMsg) showAlert("success", alertMsg, 20);
