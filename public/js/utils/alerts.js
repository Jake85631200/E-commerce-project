export const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg, t = 1.5) => {
  // 清除舊的 alert
  hideAlert();
  let alert;
  // create 新的 alert
  if (type === "error") {
    alert = `<div class="alert alert-danger d-flex" role="alert">
    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
      <use href="#check-circle-fill"></use>
    </svg>
    <div>${msg}</div>
  </div>`;
  } else {
    alert = `<div class="alert alert-${type} d-flex" role="alert">
      <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
        <use href="#check-circle-fill"></use>
      </svg>
      <div>${msg}</div>
    </div>`;
  }
  document.querySelector("body").insertAdjacentHTML("afterbegin", alert);
  window.setTimeout(hideAlert, t * 1000);
};
