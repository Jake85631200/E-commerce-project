import { login, logout } from "./login";
import { myCart } from "./cart";
import { search } from "./search";
import { showAlert } from "./alerts";

const loginForm = document.querySelector(".login-form");
const logOutBtn = document.querySelector(".nav-logout-btn");
const searchBarForm = document.querySelector(".search-bar-form");
const productContainer = document.querySelector(".card-container");
const searchInput = document.querySelector(".form-input");
const myCartBtn = document.querySelector(".nav-cart");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener("click", logout());
}

if (myCartBtn) {
  myCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myCart();
  });
}

if (searchBarForm) {
  searchBarForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(searchInput.value.toLowerCase());
    const products = await search(searchInput.value.toLowerCase());
    if (products) {
      productContainer.innerHTML = products;
    }
  });
}

// IF dateset-alert = alert, showAlert
const alertMsg = document.querySelector("body").dataset.alert;
if (alertMsg) showAlert("success", alertMsg, 20);
