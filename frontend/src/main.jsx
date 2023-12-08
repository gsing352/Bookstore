import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { BooklistProvider } from "./context/BookListContext";
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofGJlTmNWU/mx0s5dL/tSzzp2YfoRSJo4" crossorigin="anonymous"></script>


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BooklistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BooklistProvider>
  </AuthProvider>,
  document.getElementById("root")
);
