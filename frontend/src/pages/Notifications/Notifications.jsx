import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

import MainLayout from "../../layouts/MainLayout";
import { getUserNotifications } from "../../services/notificationService";

function Notifications() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const response = await getUserNotifications(user.id);
      setNotifications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
        >
          🔔 Notifications
        </Typography>

        {notifications.length === 0 ? (
          <Typography>No Notifications</Typography>
        ) : (
          <Stack spacing={3}>
            {notifications.map((item) => (
              <Paper
                key={item.id}
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.subject}
                </Typography>

                <Typography mt={2}>
                  {item.message}
                </Typography>

                <Chip
                  label={item.status}
                  color="success"
                  sx={{ mt: 2 }}
                />

                <Typography
                  mt={2}
                  color="text.secondary"
                >
                  {new Date(
                    item.created_at
                  ).toLocaleString()}
                </Typography>
              </Paper>
            ))}
          </Stack>
        )}
      </Container>
    </MainLayout>
  );
}

export default Notifications;
