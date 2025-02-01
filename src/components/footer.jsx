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
        bgcolor: isDarkMode ? "#1b2a41" : "#3dcfb6",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
        <IconButton
          component="a"
          href="https://github.com/"
          target="_blank"
          sx={{
            color: "#fff",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <FaGithub size={22} />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/"
          target="_blank"
          sx={{
            color: "#fff",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <FaLinkedin size={22} />
        </IconButton>

        <IconButton
          component="a"
          href="https://twitter.com/"
          target="_blank"
          sx={{
            color: "#fff",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <FaTwitter size={22} />
        </IconButton>
      </Box>

      {/* Copyright Text */}
      <Typography variant="body2" fontWeight="500">
        &copy; {new Date().getFullYear()} CeePrintz. All Rights Reserved.
      </Typography>

      {/* Back to Top Button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
          bgcolor: isDarkMode ? "#3dcfb6" : "#1b2a41",
          color: "#fff",
          "&:hover": { bgcolor: isDarkMode ? "#2a9d8f" : "#ff8c42" },
          transition: "0.3s",
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
