import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import MainLayout from "../../layouts/MainLayout";
import { getPayments } from "../../services/paymentService";

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {
    try {
      const response = await getPayments();
      setPayments(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
        >
          💳 Payment History
        </Typography>

        <Stack spacing={3}>
          {payments.map((payment) => (
            <Paper
              key={payment.id}
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6">
                Payment #{payment.id}
              </Typography>

              <Typography>
                Order ID : #{payment.order_id}
              </Typography>

              <Typography>
                Amount : ₹{payment.amount}
              </Typography>

              <Typography>
                Payment Method : {payment.payment_method}
              </Typography>

              <Typography>
                Gateway : {payment.payment_gateway}
              </Typography>

              <Typography>
                Transaction :
                {" "}
                {payment.transaction_id}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Chip
                label={payment.status}
                color={
                  payment.status === "completed"
                    ? "success"
                    : "warning"
                }
              />
            </Paper>
          ))}
        </Stack>
      </Container>
    </MainLayout>
  );
}

export default Payments;
