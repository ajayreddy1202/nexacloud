import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";

import { getOrders } from "../../services/orderService";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        📦 My Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography>No Orders Found.</Typography>
      ) : (
        orders.map((order) => (
          <Card
            key={order.id}
            sx={{
              mb: 4,
              p: 2,
              borderRadius: 3,
            }}
          >
            <CardContent>

              <Typography variant="h6">
                Order ID : #{order.id}
              </Typography>

              <Typography mt={1}>
                Total : ₹{order.total_amount}
              </Typography>

              <Typography mt={1}>
                Shipping :
                {" "}
                {order.shipping_address}
              </Typography>

              <Typography mt={1}>
                Date :
                {" "}
                {new Date(order.created_at).toLocaleString()}
              </Typography>

              <Chip
                label={order.status}
                color={
                  order.status === "delivered"
                    ? "success"
                    : order.status === "cancelled"
                    ? "error"
                    : "warning"
                }
                sx={{ mt: 2 }}
              />

              <Divider sx={{ my: 3 }} />

              <Typography
                variant="h6"
                mb={2}
              >
                Products
              </Typography>

              {order.items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    mb: 2,
                  }}
                >
                  <Typography fontWeight="bold">
                    {item.product_name}
                  </Typography>

                  <Typography>
                    Quantity : {item.quantity}
                  </Typography>

                  <Typography>
                    Price : ₹{item.price}
                  </Typography>

                  <Typography>
                    Subtotal : ₹{item.subtotal}
                  </Typography>

                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}

            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Orders;
