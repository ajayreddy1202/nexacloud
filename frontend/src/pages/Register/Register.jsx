import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  CircularProgress,
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirm_password
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser(formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={6}
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
          Create Account
        </Typography>

        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
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

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />

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
                <PersonAddIcon />
              )
            }
            disabled={loading}
            onClick={handleRegister}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {loading ? "Creating Account..." : "Register"}
          </Button>

          <Typography textAlign="center">
            Already have an account?{" "}
            <Link
              component="button"
              underline="hover"
              onClick={() => navigate("/login")}
            >
              Login
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Register;
