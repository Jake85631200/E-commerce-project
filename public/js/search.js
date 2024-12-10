import axios from "axios";
import { showAlert } from "./alerts";

export const search = async (query) => {
  try {
    const res = await axios({
      method: "GET",
      url: `/search?keyword=${query}`,
    });
    return res.data;
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};
