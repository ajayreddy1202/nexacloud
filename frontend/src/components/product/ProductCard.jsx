import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  Rating,
  Chip,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToWishlist(product));

    alert(`${product.name} added to wishlist`);
  };

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart(product));

    alert(`${product.name} added to cart`);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 10,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={product.image_url}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Rating value={4.5} precision={0.5} readOnly />

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          {product.description}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
          mt={2}
        >
          ₹ {product.price}
        </Typography>

        <Chip
          label={`Stock: ${product.stock}`}
          color="success"
          sx={{ mt: 2 }}
        />

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          Category: {product.category_name}
        </Typography>

        {/* IMPORTANT: stop click here */}
        <Stack
          direction="row"
          spacing={2}
          mt={3}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FavoriteBorderIcon />}
            onClick={handleWishlist}
          >
            Wishlist
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddCart}
          >
            Add Cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;