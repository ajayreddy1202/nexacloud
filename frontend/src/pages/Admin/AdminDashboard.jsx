import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import MainLayout from "../../layouts/MainLayout";

import { getProducts } from "../../services/productService";
import { getOrders } from "../../services/orderService";
import { getPayments } from "../../services/paymentService";
import { getNotifications } from "../../services/notificationService";

function AdminDashboard() {

  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    payments: 0,
    notifications: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {

      const products = await getProducts();
      const orders = await getOrders();
      const payments = await getPayments();
      const notifications = await getNotifications();

      setStats({
        products: products.count,
        orders: orders.count,
        payments: payments.count,
        notifications: notifications.count,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const Card = ({ title, value, color }) => (
    <Paper
      elevation={5}
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: "center",
        bgcolor: color,
        color: "white",
      }}
    >
      <Typography variant="h6">
        {title}
      </Typography>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        {value}
      </Typography>
    </Paper>
  );

  return (
    <MainLayout>

      <Container maxWidth="lg" sx={{ py: 6 }}>

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={5}
        >
          📊 Admin Dashboard
        </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} md={3}>
            <Card
              title="Products"
              value={stats.products}
              color="#1976d2"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Card
              title="Orders"
              value={stats.orders}
              color="#2e7d32"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Card
              title="Payments"
              value={stats.payments}
              color="#ed6c02"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Card
              title="Notifications"
              value={stats.notifications}
              color="#9c27b0"
            />
          </Grid>

        </Grid>

      </Container>

    </MainLayout>
  );
}

export default AdminDashboard;
