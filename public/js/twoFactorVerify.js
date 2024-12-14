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
    if (res.data.status === "success") {
      showAlert("success", "You have logged in!");
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

// export const suggestion = async (code) => {
//   try {
//     const res = await axios({
//       method: "POST",
//       url: "/api/v1/users/verifyFACode",
//       data: { code },
//     });
//     if (res.data.status === "success") {
//       showAlert("success", res.data.message);
//       location.assign("/verify-successful");
//     }
//   } catch (err) {
//     showAlert("error", err.response.data.message);
//   }
// };
