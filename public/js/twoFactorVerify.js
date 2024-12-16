import axios from "axios";
import { showAlert } from "./alerts";

// type is either 'password' or 'data'
export const sendTwoFACode = async (email) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/twoFactor",
      data: { email },
    });
    if (res.data.status === "success") {
      showAlert("success", "Verification code send! Check your email!");
    }
    return res.data.status;
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const checkTwoFACode = async (email, verifyCode) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/verifyFACode",
      data: { email, verifyCode },
    });
    return res.data.status;
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const resetPassword = async (email, newPassword, passwordConfirm) => {
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
    showAlert("error", err.response.data.message);
  }
};
