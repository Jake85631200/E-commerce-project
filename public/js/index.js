import { showAlert } from "./alerts";
import { login, logout } from "./login";
import { checkTwoFACode, sendTwoFACode, resetPassword } from "./twoFactorVerify";
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
const resetPasswordForm = document.querySelector(".reset-password-form");

const updateButtonText = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

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

    updateButtonText(".save-password", "Updating...");

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings({ passwordCurrent, password, passwordConfirm }, "password");

    updateButtonText(".save-password", "Save password");
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });
}

// Send verification code to email
if (sendEmailForm) {
  sendEmailForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    updateButtonText(".send-verification", "Sending...");
    const email = document.getElementById("email").value;
    if ((await sendTwoFACode(email)) === "success") {
      document.getElementById("send-verify").style.display = "none";
      document.getElementById("verify-email").style.display = "";
    }
    updateButtonText(".send-verification", "Send verification code");
  });
}

// Confirm code form email
if (sendVerifyForm) {
  sendVerifyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    updateButtonText(".code-verifying", "Verifying...");
    const email = document.getElementById("email").value;
    const verifyCode = document.getElementById("verify-code").value;

    // If verification successful
    if ((await checkTwoFACode(email, verifyCode)) === "success") {
      document.getElementById("verify-email").style.display = "none";
      document.getElementById("reset-password").style.display = "";
    }
    updateButtonText(".code-verifying", "Verify");
  });
}

// Reset password
if (resetPasswordForm) {
  resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    resetPassword(email, newPassword, passwordConfirm);
  });
}

// IF dateset-alert = alert, showAlert
const alertMsg = document.querySelector("body").dataset.alert;
if (alertMsg) showAlert("success", alertMsg, 20);
