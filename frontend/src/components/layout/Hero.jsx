import { Box, Button, Container, Typography } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
        >
          Welcome to NexaCloud
        </Typography>

        <Typography
          variant="h5"
          color="white"
          mt={2}
          mb={4}
        >
          India's Next Generation Shopping Platform
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#ff6b00",
            px: 5,
            py: 2,
            fontSize: 18,
            "&:hover": {
              bgcolor: "#e65c00",
            },
          }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;