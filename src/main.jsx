import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import CartProvider from "./components/4-Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
