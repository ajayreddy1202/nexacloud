import { Container, Grid, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();

  const product = {
    id: 1,
    name: "Apple iPhone 16 Pro",
    description:
      "Experience the latest Apple flagship with titanium design, A18 Pro chip, incredible cameras and all-day battery.",
    price: 129999,
    stock: 25,
    category_name: "Mobiles",
    image_url:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart");
  };

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={product.image_url}
            alt={product.name}
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" fontWeight="bold">
            {product.name}
          </Typography>

          <Typography variant="h5" color="primary" mt={2}>
            ₹{product.price}
          </Typography>

          <Typography mt={3} color="text.secondary">
            {product.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 5, mr: 2 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{ mt: 5 }}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;