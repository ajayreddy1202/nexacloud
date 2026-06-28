import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800",
  },
  {
    name: "Mobiles",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  },
  {
    name: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
  },
  {
    name: "Home",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800",
  },
];

function Categories() {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        Shop by Category
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid
            key={category.name}
            size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
          >
            <Card
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
                height="180"
                image={category.image}
                alt={category.name}
              />

              <CardContent>
                <Typography
                  align="center"
                  fontWeight="bold"
                >
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Categories;