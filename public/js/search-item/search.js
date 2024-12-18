import axios from "axios";
import { showAlert } from "../utils/alerts";

const search = async (query) => {
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

export const initSearch = () => {
  const productContainer = document.querySelector(".card-container");
  const searchBarForm = document.querySelector(".search-bar-form");
  const searchInput = document.querySelector(".form-input");
  if (searchBarForm) {
    searchBarForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const products = await search(searchInput.value.toLowerCase());
      if (products) {
        productContainer.innerHTML = products;
      }
    });
  }
};
