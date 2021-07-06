import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import CartState from "./Context/cart/CartState";
const app = document.getElementById("app");

ReactDOM.render(
  <CartState>
    <App />
  </CartState>,
  app
);
