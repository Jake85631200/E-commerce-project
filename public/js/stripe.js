import { showAlert } from "./utils/alerts";
import axios from "axios";

const stripe = Stripe(
  "pk_test_51QLQ4AI3a5BAumhdTw8QzW29h7wbMei3VthvME7cNwYM5FmPB5brLtQRuPP1G836Pqj7M0ryKIc265qIN7vHmWSc00tf1qzk09",
);

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
