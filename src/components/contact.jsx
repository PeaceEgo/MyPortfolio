import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
  Alert,
} from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("All fields are required!");
      setSuccessMessage("");
      return;
    }

    emailjs
      .send("service_f5ju8ph", "template_b4fnzb8", formData, "49g5knOscr2nPU0--")
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => setSuccessMessage(""), 5000);
        },
        () => {
          setErrorMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "linear-gradient(135deg, #f3f9f8, #dbe9e8)",
        color: isDarkMode ? "#fff" : "#222",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: isDarkMode ? "#ff8c42" : "#002240",
          textAlign: "center",
        }}
      >
        Contact 
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          width: "100%",
        }}
      >
        {/* Contact Info Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: 4,
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            background: isDarkMode ? "#1b2a41" : "#fff",
            color: isDarkMode ? "#fff" : "#222",
          }}
        >
          <IconButton sx={{ fontSize: 48, color: isDarkMode ? "#ff8c42" : "#002240" }}>
            <EmailIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            Email
          </Typography>
          <Typography fontWeight="bold">nnorompeace14@gmail.com</Typography>
          <Link
            href="mailto:nnorompeace14@gmail.com"
            underline="none"
            sx={{
              mt: 2,
              color: isDarkMode ? "#ff8c42" : "#002240",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Send a message
          </Link>
        </Box>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "50%" },
            padding: 4,
            background: isDarkMode ? "#1b2a41" : "#fff",
            color: isDarkMode ? "#ff8c42" : "#002240",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Get in Touch
          </Typography>

          {/* Success & Error Messages */}
          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}

          {/* Input Fields */}
          <TextField
            variant="outlined"
            label="Your Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ sx: { color: isDarkMode ? "#ff8c42" : "#002240" } }}
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: isDarkMode ? "#1b2a41" : "#fff",
                color: isDarkMode ? "#fff" : "#222",
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ sx: { color: isDarkMode ? "#ff8c42" : "#002240" } }}
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: isDarkMode ? "#1b2a41" : "#fff",
                color: isDarkMode ? "#fff" : "#222",
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ sx: { color: isDarkMode ? "#ff8c42" : "#002240" } }}
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: isDarkMode ? "#1b2a41" : "#fff",
                color: isDarkMode ? "#fff" : "#222",
                borderRadius: "8px",
              },
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
            sx={{
              bgcolor: isDarkMode ? "#3dcfb6" : "#002240",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": { bgcolor: isDarkMode ? "#2a9d8f" : "#ff8c42" },
              transition: "0.3s",
            }}
            endIcon={<FaPaperPlane />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
