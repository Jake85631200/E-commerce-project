import axios from "axios";
import { showAlert } from "../utils/alerts";

// ES6 modules export
const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        // form req.body
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      // Redirect to homepage in 1.5s
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};

const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    if ((res.data.status = "success")) {
      location.assign("/");
    }
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};

export const initLoginOut = () => {
  const loginForm = document.querySelector(".login-form");
  const logOutBtn = document.querySelector(".nav-logout-btn");

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
      console.log("1");
      logout();
    });
  }
};
