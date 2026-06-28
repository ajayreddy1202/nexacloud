import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        color: "white",
        mt: 10,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              NexaCloud
            </Typography>

            <Typography mt={2}>
              Modern E-Commerce Platform built with React,
              Django, Docker and AWS.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>

            <Link href="#" color="inherit" underline="none" display="block" mt={2}>
              Home
            </Link>

            <Link href="#" color="inherit" underline="none" display="block">
              Products
            </Link>

            <Link href="#" color="inherit" underline="none" display="block">
              Orders
            </Link>

            <Link href="#" color="inherit" underline="none" display="block">
              Contact
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>

            <Typography mt={2}>
              support@nexacloud.com
            </Typography>

            <Typography>
              +91 9876543210
            </Typography>

            <Typography>
              Bengaluru, India
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Newsletter
            </Typography>

            <TextField
              fullWidth
              size="small"
              placeholder="Enter Email"
              sx={{
                mt: 2,
                background: "white",
                borderRadius: 1,
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <Typography
          textAlign="center"
          mt={6}
          color="gray"
        >
          © 2026 NexaCloud. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;