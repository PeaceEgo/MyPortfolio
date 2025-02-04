import React from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FloatingElements from "./floatingElements";

const socialLinks = [
  { icon: <GitHubIcon />, url: "https://github.com/PeaceEgo" },
  { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/peace-nnorom-120048235" },
  { icon: <TwitterIcon />, url: "https://twitter.com/ego_wure" },
];

const Hero = ({ isDarkMode }) => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          : "#F3F9F8",
        color: isDarkMode ? "#FFFFFF" : "#002240",
      }}
    >
      {/* Floating Elements in Background */}
      <FloatingElements isDarkMode={isDarkMode} />

      {/* Animated Heading */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ fontFamily: "Poppins, sans-serif" }}
        >
          Hi, I'm Peace Nnorom
        </Typography>
      </motion.div>

      {/* Animated Subheading */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
        <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px", fontFamily: "Poppins, sans-serif" }}>
           I Build sleek, scalable, and seamless web experiences
        </Typography>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8 }}>
        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => handleScroll("contact")}
            sx={{
              backgroundColor: "#FF8C42",
              color: "#FFFFFF",
              fontWeight: "bold",
              border: "2px solid #FF8C42",
              fontFamily: "Poppins, sans-serif",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#FF8C42",
              },
            }}
          >
            Let's Talk
          </Button>
          <Button
  variant="outlined"
  component="a"
  href="/Nnorom_Peace_CV.pdf"
  download="Nnorom_Peace_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    borderColor: isDarkMode ? "#FFFFFF" : "#002240",
    color: isDarkMode ? "#FFFFFF" : "#002240",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    "&:hover": {
      backgroundColor: isDarkMode ? "#FFFFFF" : "#002240",
      color: isDarkMode ? "#002240" : "#FFFFFF",
    },
  }}
>
  Download CV
</Button>

        </Stack>
      </motion.div>

      {/* Social Media Links */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1 }}>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDarkMode ? "#FFFFFF" : "#001140",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                "&:hover": { transform: "scale(1.1)", backgroundColor: "#FF8C42" },
                transition: "0.3s ease",
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Hero;
