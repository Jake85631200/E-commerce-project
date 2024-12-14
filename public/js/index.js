import { showAlert } from "./alerts";
import { login, logout } from "./login";
import { checkTwoFACode, sendTwoFACode } from "./twoFactorVerify";
import { myCart } from "./cart";
import { search } from "./search";
import { updateSettings } from "./updateSettings";

const loginForm = document.querySelector(".login-form");
const logOutBtn = document.querySelector(".nav-logout-btn");
const searchBarForm = document.querySelector(".search-bar-form");
const productContainer = document.querySelector(".card-container");
const searchInput = document.querySelector(".form-input");
const myCartBtn = document.querySelector(".nav-cart");
const userDataForm = document.querySelector(".user-info-form");
const userPasswordForm = document.querySelector(".user-password-form");
const sendEmailForm = document.querySelector(".send-email-form");
const sendVerifyForm = document.querySelector(".send-verify-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener("click", (e) => {
    logout();
  });
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
if (userDataForm) {
  userDataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("phone_number", document.getElementById("phone_number").value);
    form.append("address", document.getElementById("address").value);

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
      form.append("gender", selectedGender.value);
    }

    const selectedImage = document.getElementById("image").files[0];
    if (selectedImage) {
      form.append("image", document.getElementById("image").files[0]);
    }

    updateSettings(form, "data");
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".save-password").textContent = "Updating...";

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings({ passwordCurrent, password, passwordConfirm }, "password");

    document.querySelector(".save-password").textContent = "Save password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });
}

if (sendEmailForm) {
  sendEmailForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".send-verification").textContent = "Sending...";
    const email = document.getElementById("email").value;
    await sendTwoFACode(email);
    document.getElementById("send-verify").style.display = "none";
    document.getElementById("verify-email").style.display = "";
  });
}

if (sendVerifyForm) {
  sendVerifyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".code-verifying").textContent = "Verifying...";
    const email = document.getElementById("email").value;
    const verifyCode = document.getElementById("verify-code").value;
    await checkTwoFACode(email, verifyCode);
    document.getElementById("verify-email").style.display = "none";
    document.getElementById("verify-successful").style.display = "";
  });
}

// IF dateset-alert = alert, showAlert
const alertMsg = document.querySelector("body").dataset.alert;
if (alertMsg) showAlert("success", alertMsg, 20);
