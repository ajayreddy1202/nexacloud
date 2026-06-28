import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />
    </Routes>
  );
}

export default App;