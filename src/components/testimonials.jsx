import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Uzoma Nwaiwu",
    feedback:
      "Working with Peace was an absolute pleasure. Her expertise in frontend development and attention to detail brought our project to life seamlessly.",
  },
  {
    name: "Agwuoma Prince",
    feedback:
      "Nnorom Peace is a talented and dedicated developer. Her problem-solving skills and ability to work under pressure make her a great asset to any team.",
  },
  {
    name: "Ayodele Charles",
    feedback:
      "I enjoyed collaborating with Peace. Her knowledge of React and backend technologies ensured our project was delivered successfully.",
  },
  {
    name: "Akinsola Michael",
    feedback:
      "Nnorom Peace is highly skilled and professional. She communicates effectively and always delivers high-quality code.",
  },
  {
    name: "Faith Etim",
    feedback:
      "Her expertise in MongoDB and API integration helped streamline our application. She is a great developer to work with.",
  },
  {
    name: "Lucky Moses",
    feedback:
      "Peace's ability to understand project requirements and execute them flawlessly is remarkable. Highly recommend working with her!",
  },
];

const Testimonials = ({ isDarkMode }) => {
  return (
    <Box
      id="testimonials"
      sx={{
        padding: "80px 20px",
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "linear-gradient(135deg, #f3f9f8, #dbe9e8)",
        color: isDarkMode ? "#ffffff" : "#1b2a41",
      }}
    >
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          mb={4}
          sx={{
            color: isDarkMode ? "#ff8c42" : "#002240",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Testimonials
        </Typography>
      </motion.div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        style={{ paddingBottom: "30px" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: "12px",
                  textAlign: "center",
                  height: "100%",
                  bgcolor: isDarkMode ? "#1b2a41" : "#ffffff",
                  color: isDarkMode ? "#ffffff" : "#333",
                  transition: "all 0.3s ease-in-out",
                  border: `2px solid transparent`,
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: isDarkMode
                      ? "0px 12px 30px rgba(207, 149, 61, 0.2)"
                      : "0px 12px 30px rgba(0, 34, 64, 0.2)",
                    border: `2px solid ${isDarkMode ? "#ffffff" : "#002240"}`,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  fontStyle="italic"
                  sx={{
                    fontSize: "1rem",
                    color: isDarkMode ? "#E0E0E0" : "#444",
                  }}
                >
                  "{testimonial.feedback}"
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mt={2}
                  color={isDarkMode ? "#ff8c42" : "#002240"}
                >
                  - {testimonial.name}
                </Typography>
              </Paper>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
