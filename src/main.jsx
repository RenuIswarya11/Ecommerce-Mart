import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./contexts/ProductsContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { UserDetailsProvider } from "./contexts/UserDetailsContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "./contexts/ToastContext.jsx";
import { WishListProvider } from "./contexts/WishListContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <WishListProvider>
        <ToastProvider>
          <ProductProvider>
            <UserDetailsProvider>
              <AuthProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </AuthProvider>
            </UserDetailsProvider>
          </ProductProvider>
        </ToastProvider>
      </WishListProvider>
    </Router>
  </React.StrictMode>
);
