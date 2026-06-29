import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Stack,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";
import { removeFromWishlist } from "../../redux/slices/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart`);
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    alert("Removed from wishlist");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
      >
        ❤️ My Wishlist
      </Typography>

      {wishlistItems.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 10,
          }}
        >
          <Typography variant="h5">
            Your Wishlist is Empty
          </Typography>

          <Typography
            color="text.secondary"
            mt={2}
          >
            Add products to your wishlist.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {wishlistItems.map((item) => (
            <Grid
              key={item.id}
              size={{ xs: 12 }}
            >
              <Card
                sx={{
                  display: "flex",
                  borderRadius: 3,
                  boxShadow: 4,
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image_url}
                  alt={item.name}
                  sx={{
                    width: 220,
                    height: 220,
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    mt={1}
                  >
                    {item.description}
                  </Typography>

                  <Typography
                    variant="h5"
                    color="primary"
                    fontWeight="bold"
                    mt={2}
                  >
                    ₹ {item.price}
                  </Typography>

                  <Typography mt={1}>
                    Category : {item.category_name}
                  </Typography>

                  <Typography>
                    Stock : {item.stock}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    mt={4}
                  >
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => handleAddToCart(item)}
                    >
                      Move To Cart
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Wishlist;
