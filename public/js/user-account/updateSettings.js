import axios from "axios";
import { showAlert } from "../utils/alerts";
import { updateButtonText } from "../utils/updateButtonText";

// type is either 'password' or 'data'
const updateSettings = async (data, type) => {
  try {
    const url = type === "password" ? "/api/v1/users/updatePassword" : "/api/v1/users/updateMe";
    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `${type.toUpperCase()} updated successfully!`);
      window.setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};

export const initUpdateSetting = () => {
  const userDataForm = document.querySelector(".user-info-form");
  const userPasswordForm = document.querySelector(".user-password-form");

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
};
