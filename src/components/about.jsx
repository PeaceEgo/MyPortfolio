import React, { useRef } from "react";
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";

const About = ({ isDarkMode }) => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-100px" });

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="about"
      ref={aboutRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "60px 20px",
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "linear-gradient(135deg, #f3f9f8, #dbe9e8)",
        color: isDarkMode ? "#f3f9f8" : "#161616",
      }}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          mb={3}
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: isDarkMode ? "#ff8c42" : "#002240",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Profile Image */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", display: "inline-block" }}
          >
            {/* Gradient Box behind the Avatar */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: { xs: 170, md: 280 },
                height: { xs: 170, md: 320 },
                background: "linear-gradient(45deg, #ff8c42, #002240)",
                borderRadius: { xs: "50%", md: "10px" },
                zIndex: 0,
              }}
            />
            {/* Profile Image */}
            <Avatar
              src={profilePic}
              sx={{
                position: "relative",
                width: { xs: 150, md: 250 },
                height: { xs: 150, md: 300 },
                borderRadius: { xs: "50%", md: "10px" },
                zIndex: 1,
              }}
            />
          </motion.div>
        </Grid>

        {/* Right Side - About Paragraph and Contact Me Button */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Animated Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                mb={3}
                textAlign={"justify"}
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: isDarkMode ? "#dbe9e8" : "#161616",
                }}
              >
                I am a passionate Full Stack Developer with expertise in building
                dynamic and scalable web applications. With a deep understanding of
                both front-end and back-end technologies, I create seamless user
                experiences and powerful back-end solutions. From building responsive
                interfaces using React and integrating APIs to creating robust back-end
                systems with Node.js, MongoDB, and Express, I strive to bring innovative
                solutions to the table.
              </Typography>
            </motion.div>

            {/* Animated Contact Me Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Button
                variant="contained"
                onClick={() => handleScroll("contact")}
                sx={{
                  backgroundColor: "#ff8c42",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  padding: "8px 18px",
                  border: "2px solid #ff8c42",
                  transition: "0.3s ease",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#ff8c42",
                  },
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
