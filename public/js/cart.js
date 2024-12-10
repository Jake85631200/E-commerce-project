import axios from "axios";
import { showAlert } from "./alerts";

export const myCart = async () => {
  try {
    await axios({
      method: "GET",
      url: "/my-cart",
    });
  } catch (err) {
    showAlert("error", "Please login first!");
    window.setTimeout(() => {
      location.assign("/login");
    }, 1500);
  }
};
