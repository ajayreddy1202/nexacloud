import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import {
  Container,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";

import {
  getProfile,
  updateProfile,
} from "../../services/userService";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    phone: "",
    bio: "",
    profile_picture: "",
    address: "",
    city: "",
    country: "",
  });


  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, []);

  const loadProfile = async () => {
    try {
      const response = await getProfile(user.id);
      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await updateProfile(user.id, profile);
      alert("Profile Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  if (!user) {
    return (
      <MainLayout>
        <Container sx={{ py: 6 }}>
          <Typography variant="h4">
            Please Login First
          </Typography>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper
          elevation={5}
          sx={{
            p: 5,
            borderRadius: 4,
          }}
        >
          <Stack alignItems="center" spacing={2} mb={4}>
            <Avatar
              src={profile.profile_picture}
              sx={{
                width: 120,
                height: 120,
              }}
            />

            <Typography variant="h4" fontWeight="bold">
              My Profile
            </Typography>

            <Typography color="text.secondary">
              {user.email}
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Profile Picture URL"
              name="profile_picture"
              value={profile.profile_picture}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />

            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={profile.city}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Country"
                name="country"
                value={profile.country}
                onChange={handleChange}
              />
            </Box>

            <Button
              variant="contained"
              size="large"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </Stack>
        </Paper>
      </Container>
    </MainLayout>
  );
}

export default Profile;
