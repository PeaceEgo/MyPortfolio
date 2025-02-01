import React, { useRef } from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import { motion, useInView } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Scroll Down Icon
import FloatingElements from "./floatingElements";

const socialLinks = [
  { icon: <GitHubIcon />, url: "https://github.com/PeaceEgo" },
  { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/peace-nnorom-120048235" },
  { icon: <TwitterIcon />, url: "https://twitter.com/ego_wure" },
];

const Hero = ({ isDarkMode }) => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-100px" });

  // Smooth Scroll Function
  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "linear-gradient(135deg, #3dcfb6, #2a9d8f)",
        color: "#fff",
      }}
    >
      {/* Floating Elements in Background */}
      <FloatingElements isDarkMode={isDarkMode} />

      {/* Animated Heading */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h2" fontWeight="bold">
          Hi, I'm Nnorom Peace
        </Typography>
      </motion.div>

      {/* Animated Subheading */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
        <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px" }}>
          Building sleek, scalable, and seamless web experiences
        </Typography>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, delay: 1 }}>
        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => handleScroll("contact")}
            sx={{
              backgroundColor: "#ff8c42",
              color: "#fff",
              fontWeight: "bold",
              border: "2px solid #ff8c42",
              transition: "0.3s ease",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#ff8c42",
              },
            }}
          >
            Let's Talk
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleScroll("projects")}
            sx={{
              borderColor: "#fff",
              color: "#fff",
              fontWeight: "bold",
              transition: "0.3s ease",
              "&:hover": {
                backgroundColor: "#ff8c42",
                borderColor: "#ff8c42",
              },
            }}
          >
            View Projects
          </Button>
        </Stack>
      </motion.div>

      {/* Social Media Links */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 1.5 }}>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                "&:hover": { transform: "scale(1.1)", backgroundColor: "#ff8c42" },
                transition: "0.3s ease",
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
      </motion.div>

     
      {/* Scroll Down Button (Right, Vertical) */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 2.5, delay: 1.5 }}
  sx={{
    position: "absolute",
    right: 20,
    top: "50%", 
    transform: "translateY(-50%) rotate(90deg)", 
    display: "flex",
    alignItems: "center",
    gap: 1,
    cursor: "pointer",
    transition: "0.3s ease",
    "&:hover": { color: "#ff8c42" },
  }}
  onClick={() => handleScroll("footer")}
>
  <Typography variant="body1" fontWeight="bold">
    Scroll Down
  </Typography>
  <KeyboardArrowDownIcon sx={{ fontSize: 36 }} />
</motion.div>

    </Box>
  );
};

export default Hero;
