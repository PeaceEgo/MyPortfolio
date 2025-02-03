import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        bgcolor: isDarkMode ? "#0d1b2a" : "#f3f9f8", // Dark mode: Deep Navy | Light mode: Soft White
        color: isDarkMode ? "#ffffff" : "#1b2a41", // Adjusted for contrast
        padding: "24px",
        textAlign: "center",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        boxShadow: isDarkMode
          ? "0px -4px 15px rgba(255, 94, 0, 0.1)" // Subtle neon glow in dark mode
          : "0px -4px 10px rgba(0, 0, 0, 0.05)", // Soft shadow in light mode
        position: "relative",
      }}
    >
      {/* Social Media Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{
            color: isDarkMode ? "#ff8c42" : "#002240",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)", color: "#ff8c42" },
          }}
        >
          <FaGithub size={24} />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{
            color: isDarkMode ? "#ff8c42" : "#002240",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)", color: "#ff8c42" },
          }}
        >
          <FaLinkedin size={24} />
        </IconButton>

        <IconButton
          component="a"
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          sx={{
            color: isDarkMode ? "#ff8c42" : "#002240",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)", color: "#ff8c42" },
          }}
        >
          <FaTwitter size={24} />
        </IconButton>
      </Box>

      {/* Copyright Text */}
      <Typography variant="body2" fontWeight="500">
        &copy; {new Date().getFullYear()} CeePrintz. All Rights Reserved.
      </Typography>

      {/* Back to Top Button */}
      <IconButton
        onClick={scrollToTop}
        aria-label="Back to Top"
        sx={{
          position: "absolute",
          right: { xs: "10%", md: "20px" },
          bottom: "20px",
          transform: { xs: "translateX(50%)", md: "none" },
          bgcolor: isDarkMode ? "#ff8c42" : "#1b2a41",
          color: "#fff",
          "&:hover": {
            bgcolor: isDarkMode ? "#ff8c42" : "#002240",
          },
          transition: "0.3s",
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
