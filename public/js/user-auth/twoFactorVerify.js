import axios from "axios";
import { showAlert } from "../utils/alerts";

const sendTwo2FACode = async (email) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/twoFactor",
      data: { email },
    });
    if (res.data.status === "success") {
      showAlert("success", res.data.message, 3);
    }
    return res.data.status;
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};

const checkTwo2FACode = async (email, verifyCode) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/verify2FACode",
      data: { email, verifyCode },
    });
    return res.data.status;
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};

const resetPassword = async (email, newPassword, passwordConfirm) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: "/api/v1/users/resetPassword",
      data: { email, newPassword, passwordConfirm },
    });
    if (res.data.status === "success") {
      showAlert("success", "Password reset successful! Redirecting...");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
    return res.data.status;
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};

export const initForgetPassword = () => {
  const sendEmailForm = document.querySelector(".send-email-form");
  const sendVerifyForm = document.querySelector(".send-verify-form");
  const resetPasswordForm = document.querySelector(".reset-password-form");

  // Send verification code to email
  if (sendEmailForm) {
    sendEmailForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      document.querySelector(".send-verification").textContent = "Sending...";
      const email = document.getElementById("email").value.toLowerCase();
      if ((await sendTwo2FACode(email)) === "success") {
        document.getElementById("send-verify").style.display = "none";
        document.getElementById("verify-email").style.display = "";
      }
      document.querySelector(".send-verification").textContent = "Send verification code";
    });
  }

  // Confirm code form email
  if (sendVerifyForm) {
    sendVerifyForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      document.querySelector(".code-verifying").textContent = "Verifying...";

      const email = document.getElementById("email").value.toLowerCase();
      const verifyCode = document.getElementById("verify-code").value;

      const result = await checkTwo2FACode(email, verifyCode);

      // If verification successful
      if (result === "success") {
        document.getElementById("verify-email").style.display = "none";
        document.getElementById("reset-password").style.display = "";
      }
      document.querySelector(".code-verifying").textContent = "Verify";
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
};
