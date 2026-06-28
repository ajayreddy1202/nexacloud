import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { placeOrder } from "../../services/orderService";
import { clearCart } from "../../redux/slices/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    shippingAddress: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderData = {
      user_id: user.id,
      total_amount: total,
      status: "pending",
      shipping_address: formData.shippingAddress,
      notes: formData.notes,
      items: cartItems.map((item) => ({
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    // Debug
    console.log("Order Data:");
    console.log(orderData);

    alert(JSON.stringify(orderData, null, 2));

    try {
      const response = await placeOrder(orderData);

      console.log(response);

      dispatch(clearCart());

      alert("Order Placed Successfully");

      navigate("/orders");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data, null, 2));
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        💳 Checkout
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Shipping Address"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            multiline
            rows={2}
            label="Order Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Checkout;