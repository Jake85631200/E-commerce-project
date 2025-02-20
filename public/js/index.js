// IMPORT FUNCTIONS
import { showAlert } from "./utils/alerts";
import { initOverview } from "./overview/overview";
import { initLoginOut } from "./user-auth/login";
import { initSignup } from "./user-auth/signup";
import { initForgetPassword } from "./user-auth/twoFactorVerify";
import { initSearch } from "./search-item/search";
import { initUpdateSetting } from "./user-account/updateSettings";
import { initCart } from "./user-cart/cart";
import { initReview } from "./product-review/review";

document.addEventListener("DOMContentLoaded", () => {
  initOverview();
  initLoginOut();
  initSignup();
  initForgetPassword();
  initSearch();
  initUpdateSetting();
  initCart();
  initReview();
});

// IF dateset-alert = alert, showAlert
const alertMsg = document.querySelector("body").dataset.alert;
if (alertMsg) showAlert("success", alertMsg, 20);
