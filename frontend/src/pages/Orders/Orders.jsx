import {
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

function Orders() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        📦 My Orders
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">
            No Orders Yet
          </Typography>

          <Typography color="text.secondary">
            Your orders will appear here after checkout.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Orders;