import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Box,
  TextField,
} from "@mui/material";

import MainLayout from "../../layouts/MainLayout";
import ProductCard from "../../components/product/ProductCard";
import { getProducts } from "../../services/productService";

function Products() {
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

  return (
    <MainLayout>
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={4}
          textAlign="center"
        >
          🛍 All Products
        </Typography>

        <TextField
          fullWidth
          label="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 5 }}
        />

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 8,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
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
        )}
      </Container>
    </MainLayout>
  );
}

export default Products;
