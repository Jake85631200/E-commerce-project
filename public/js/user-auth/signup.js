import axios from "axios";
import { showAlert } from "../utils/alerts";

// type is either 'password' or 'data'
const signup = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signUp",
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `You've successfully signed up!`);
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};

export const initSignup = () => {
  const userSignupForm = document.querySelector(".user-signup-form");

  if (userSignupForm) {
    userSignupForm.addEventListener("submit", (e) => {
      console.log("Signing up...");
      e.preventDefault();

      const selectedGender = document.querySelector('input[name="gender"]:checked');
      let gender;
      if (selectedGender) {
        gender = selectedGender.value;
      }

      const form = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        address: document.getElementById("address").value,
        password: document.getElementById("password").value,
        passwordConfirm: document.getElementById("password-confirm").value,
        gender,
      };
      // form.forEach((value, key) => {
      //   console.log(key, value);
      // });
      // updateButtonText("sign-up-commit", "Signing up...");

      signup(form);
    });
  }
};
