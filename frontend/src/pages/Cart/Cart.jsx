import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  IconButton,
  Box,
  Divider,
  Paper,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;

  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
        >
          🛒 Your Cart
        </Typography>

        <Typography
          align="center"
          mt={5}
          fontSize={22}
        >
          Your cart is empty.
        </Typography>

        <Box textAlign="center" mt={5}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={5}
      >
        🛒 Shopping Cart
      </Typography>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={4}
        alignItems="flex-start"
      >
        <Box flex={3} width="100%">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                mb: 3,
                borderRadius: 3,
                boxShadow: 4,
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
              >
                <CardMedia
                  component="img"
                  image={item.image_url}
                  alt={item.name}
                  sx={{
                    width: 250,
                    height: 220,
                    objectFit: "contain",
                    p: 2,
                  }}
                />

                <CardContent sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    mt={1}
                    color="text.secondary"
                  >
                    {item.description}
                  </Typography>

                  <Typography
                    variant="h5"
                    color="primary"
                    mt={2}
                    fontWeight="bold"
                  >
                    ₹ {item.price}
                  </Typography>

                  <Typography mt={1}>
                    Category : {item.category_name}
                  </Typography>

                  <Typography color="green">
                    In Stock
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    mt={3}
                  >
                    <IconButton
                      color="error"
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Typography
                      fontWeight="bold"
                      fontSize={20}
                    >
                      {item.quantity}
                    </Typography>

                    <IconButton
                      color="primary"
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      <AddIcon />
                    </IconButton>

                    <Button
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      Remove
                    </Button>
                  </Stack>

                  <Typography
                    variant="h6"
                    mt={3}
                    fontWeight="bold"
                  >
                    Item Total : ₹
                    {Number(item.price) * item.quantity}
                  </Typography>
                </CardContent>
              </Stack>
            </Card>
          ))}
        </Box>

        <Paper
          elevation={5}
          sx={{
            p: 4,
            width: 360,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={3}
          >
            Order Summary
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            mb={2}
          >
            <Typography>Subtotal</Typography>

            <Typography>
              ₹ {subtotal}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            mb={2}
          >
            <Typography>Shipping</Typography>

            <Typography>
              ₹ {shipping}
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Grand Total
            </Typography>

            <Typography
              variant="h6"
              color="primary"
              fontWeight="bold"
            >
              ₹ {total}
            </Typography>
          </Stack>

          <Button
            fullWidth
            size="large"
            variant="contained"
            startIcon={<ShoppingCartCheckoutIcon />}
            sx={{
              mt: 4,
              py: 1.8,
              fontWeight: "bold",
            }}
            onClick={() => navigate("/checkout")}
          >
            Proceed To Checkout
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}

export default Cart;
