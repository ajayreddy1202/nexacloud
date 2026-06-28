import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Typography, Button } from "@mui/material";

const slides = [
  {
    title: "Electronics Mega Sale",
    subtitle: "Up to 70% OFF",
    color: "#2563EB",
  },
  {
    title: "Fashion Festival",
    subtitle: "New Arrivals Every Day",
    color: "#7C3AED",
  },
  {
    title: "Latest Mobiles",
    subtitle: "Exchange & Save More",
    color: "#0F766E",
  },
];

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              height: "500px",
              bgcolor: slide.color,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pl: 12,
            }}
          >
            <Typography variant="h2" fontWeight="bold">
              {slide.title}
            </Typography>

            <Typography variant="h5" mt={2}>
              {slide.subtitle}
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: 180,
                mt: 4,
                bgcolor: "white",
                color: slide.color,
              }}
            >
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;