import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../services/authService";
import { login } from "../../redux/slices/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    try {
      const response = await loginUser(formData);

      console.log(response);

      // Save Tokens
      localStorage.setItem("access", response.access);
      localStorage.setItem("refresh", response.refresh);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      // Show User Data
      alert(JSON.stringify(response.user, null, 2));

      // Redux
      dispatch(login(response));

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Invalid Email or Password");
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={5}
        sx={{
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Login
        </Typography>

        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Login;