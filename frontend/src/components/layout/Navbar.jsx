import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  InputBase,
  Avatar,
} from "@mui/material";

import {
  ShoppingCart,
  Favorite,
  NotificationsNone,
  Search,
  Person,
} from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/slices/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    alert("Logged Out Successfully");

    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "#131921",
      }}
    >
      <Toolbar sx={{ height: 75 }}>
        {/* Logo */}

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#ff9900",
            mr: 5,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          NexaCloud
        </Typography>

        {/* Search */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 2,
            overflow: "hidden",
            width: 500,
            height: 45,
          }}
        >
          <InputBase
            placeholder="Search products..."
            sx={{
              px: 2,
              flex: 1,
            }}
          />

          <Box
            sx={{
              bgcolor: "#febd69",
              px: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search />
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Home */}

        <Button
          sx={{ color: "white" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>

        {/* Products */}

        <Button
          sx={{ color: "white" }}
          onClick={() => navigate("/")}
        >
          Products
        </Button>

        {/* Orders */}

        <Button
          sx={{ color: "white" }}
          onClick={() => navigate("/orders")}
        >
          Orders
        </Button>

        {/* Wishlist */}

        <IconButton
          color="inherit"
          onClick={() => navigate("/wishlist")}
        >
          <Badge
            badgeContent={wishlistItems.length}
            color="error"
          >
            <Favorite />
          </Badge>
        </IconButton>

        {/* Cart */}

        <IconButton
          color="inherit"
          onClick={() => navigate("/cart")}
        >
          <Badge
            badgeContent={cartItems.length}
            color="warning"
          >
            <ShoppingCart />
          </Badge>
        </IconButton>

        {/* Notifications */}

        <IconButton color="inherit">
          <Badge
            badgeContent={5}
            color="success"
          >
            <NotificationsNone />
          </Badge>
        </IconButton>

        {/* Login / Logout */}

        {isAuthenticated ? (
          <Button
            variant="contained"
            color="error"
            sx={{ ml: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              ml: 2,
              bgcolor: "#ff9900",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}

        {/* Profile */}

        <Avatar
          sx={{
            ml: 2,
            bgcolor: "#ff9900",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          <Person />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;