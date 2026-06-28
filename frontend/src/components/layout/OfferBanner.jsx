import { Box, Button, Container, Typography } from "@mui/material";

function OfferBanner() {
  return (
    <Container sx={{ py: 8 }}>
      <Box
        sx={{
          background: "linear-gradient(135deg,#0F172A,#2563EB)",
          borderRadius: 5,
          color: "white",
          p: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Summer Mega Sale 🔥
        </Typography>

        <Typography sx={{ mt: 2, mb: 4 }}>
          Up to 70% OFF on Electronics, Fashion and Mobiles
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "white",
            color: "#2563EB",
            borderRadius: "30px",
            px: 5,
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Container>
  );
}

export default OfferBanner;