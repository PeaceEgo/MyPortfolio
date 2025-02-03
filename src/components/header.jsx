import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);
};

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: isDarkMode
          ? "rgba(22,22,22,0.9)"
          : "rgba(243, 249, 248, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: "#FF8C42",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("hero")}
        >
          CeePrintz.
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navItems.map(({ label, id }) => (
            <motion.div whileHover={{ scale: 1.1 }} key={id}>
              <Typography
                component="a"
                onClick={() => scrollToSection(id)}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: isDarkMode ? "#f3f9f8" : "#002240",
                  textDecoration: "none",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#FF8C42" },
                }}
              >
                {label}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Right-side Icons (Dark Mode + Menu) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Dark Mode Toggle */}
          <IconButton
            onClick={toggleDarkMode}
            sx={{ color: isDarkMode ? "#FF8C42" : "#002240" }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              color: isDarkMode ? "#FF8C42" : "#002240",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: isDarkMode ? "#1b2a41" : "#f3f9f8",
            color: isDarkMode ? "#f3f9f8" : "#002240",
          },
        }}
      >
        <List sx={{ width: 200 }}>
          {navItems.map(({ label, id }) => (
            <ListItem
              button
              key={id}
              onClick={() => {
                setMobileOpen(false); // Close menu first
                scrollToSection(id); // Then scroll
              }}
            >
              <ListItemText
                primary={label}
                sx={{
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                  color: isDarkMode ? "#f3f9f8" : "#002240",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#FF8C42" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
