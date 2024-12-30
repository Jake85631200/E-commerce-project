import axios from "axios";
import { showAlert } from "../utils/alerts";

const searchItem = async (query) => {
  const url = `/search?keyword=${query}`;

  window.location.href = url;
};

export const initSearch = () => {
  const searchBarForm = document.querySelector(".search-bar-form");
  const searchInput = document.querySelector(".form-input");
  if (searchBarForm) {
    searchBarForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      searchItem(searchInput.value);
    });
  }
};
