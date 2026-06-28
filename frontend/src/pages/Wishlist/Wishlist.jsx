import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/wishlistSlice";

function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const dispatch = useDispatch();

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        ❤️ My Wishlist
      </Typography>

      {wishlistItems.length === 0 ? (
        <Typography>Your wishlist is empty.</Typography>
      ) : (
        wishlistItems.map((item) => (
          <Card key={item.id} sx={{ mb: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                {item.name}
              </Typography>

              <Typography mt={1}>
                ₹{item.price}
              </Typography>

              <Typography mt={1}>
                {item.description}
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                mt={3}
              >
                <Button
                  variant="contained"
                >
                  Add to Cart
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    dispatch(removeFromWishlist(item.id))
                  }
                >
                  Remove
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Wishlist;