import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Box,
  TextField,
} from "@mui/material";

import ProductCard from "./ProductCard";
import { getProducts } from "../../services/productService";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        🔥 Featured Products
      </Typography>

      <TextField
        fullWidth
        label="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}

export default ProductSection;