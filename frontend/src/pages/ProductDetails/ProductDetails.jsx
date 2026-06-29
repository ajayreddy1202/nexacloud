import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";
import { getProducts } from "../../services/productService";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const products = await getProducts();

      const selected = products.find(
        (item) => item.id === Number(id)
      );

      setProduct(selected);
    }

    loadProduct();
  }, [id]);

  if (!product) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={product.image_url}
            alt={product.name}
            width="100%"
            style={{
              borderRadius: 20,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" fontWeight="bold">
            {product.name}
          </Typography>

          <Typography
            variant="h4"
            color="primary"
            mt={2}
          >
            ₹ {product.price}
          </Typography>

          <Typography mt={3}>
            {product.description}
          </Typography>

          <Typography mt={3}>
            Category: {product.category_name}
          </Typography>

          <Typography mt={1}>
            Stock: {product.stock}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 5 }}
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
