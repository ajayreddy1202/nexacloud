import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Orders from "./pages/Orders/Orders";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Payments from "./pages/Payments/Payments";
import Notifications from "./pages/Notifications/Notifications";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />

      {/* Product Details */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      {/* Cart */}
      <Route path="/cart" element={<Cart />} />

      {/* Wishlist */}
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      {/* Orders */}
      <Route path="/orders" element={<Orders />} />

      {/* Checkout */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />

      {/* Payments */}
      <Route
        path="/payments"
        element={<Payments />}
      />

      {/* Notifications */}
      <Route
        path="/notifications"
        element={<Notifications />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
}

export default App;
