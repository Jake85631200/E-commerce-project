import axios from "axios";
import { showAlert } from "./alerts";

export const addToCart = async (productUrl) => {
  try {
    const res = await axios({
      method: "POST",
      url: productUrl,
    });

    if (res.status === "success") {
      showAlert("success", "Added to your cart!");
    }
  } catch (error) {
    showAlert("error", `${err.response.data.message}`);
  }
};
