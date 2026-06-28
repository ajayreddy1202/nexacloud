import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        🛒 Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{ mb: 3 }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.name}
                </Typography>

                <Typography mt={1}>
                  Price: ₹{item.price}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  mt={2}
                >
                  <IconButton
                    color="error"
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    <RemoveIcon />
                  </IconButton>

                  <Typography fontWeight="bold">
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

                  <IconButton
                    color="error"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>

                <Typography
                  mt={2}
                  fontWeight="bold"
                >
                  Total: ₹{item.price * item.quantity}
                </Typography>
              </CardContent>
            </Card>
          ))}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Grand Total: ₹{total}
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
}

export default Cart;