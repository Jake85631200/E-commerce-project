import { showAlert } from "./utils/alerts";
import axios from "axios";

const stripe = Stripe(window.STRIPE_PUBLISHABLE_KEY);

export const orderProducts = async (productsId, productsQty) => {
  try {
    // 發送請求以獲取 checkout session
    const session = await axios({
      method: "POST",
      url: "/api/v1/orders/checkout-session",
      data: {
        productsId,
        productsQty,
      },
    });
    showAlert("success", "Directing to payment...");
    // 導向 Stripe checkout
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert("error", `${err.response.data.message}`);
  }
};
