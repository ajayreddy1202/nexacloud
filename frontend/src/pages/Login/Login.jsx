import { useState } from "react";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  CircularProgress,
  Link,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../services/authService";
import { login } from "../../redux/slices/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      localStorage.setItem("access", response.access);
      localStorage.setItem("refresh", response.refresh);

      if (remember) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.user)
        );
      }

      dispatch(login(response.user));

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Invalid Email or Password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 8,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={1}
        >
          Welcome Back 👋
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          mb={4}
        >
          Login to continue shopping
        </Typography>

        <Stack spacing={3}>

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) =>
                    setRemember(
                      e.target.checked
                    )
                  }
                />
              }
              label="Remember Me"
            />

            <Link
              underline="hover"
              sx={{
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Link>
          </Box>


          <Button
            fullWidth
            size="large"
            variant="contained"
            startIcon={
              loading ? (
                <CircularProgress
                  size={20}
                  color="inherit"
                />
              ) : (
                <LoginIcon />
              )
            }
            disabled={loading}
            onClick={handleLogin}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>

          <Typography
            textAlign="center"
          >
            Don't have an account?{" "}
            <Link
              component="button"
              underline="hover"
              onClick={() =>
                navigate("/register")
              }
            >
              Register
            </Link>
          </Typography>

        </Stack>
      </Paper>
    </Container>
  );
}

export default Login;
