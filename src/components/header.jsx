import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";

const scrollToSection = (id, closeMenu) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    if (closeMenu) closeMenu(); // Close the mobile menu after clicking
  }
};

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: isDarkMode ? "rgba(22,22,22,0.9)" : "rgba(243, 249, 248, 0.9)",
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
            fontWeight: "bold",
            color: isDarkMode ? "#3dcfb6" : "#2a9d8f",
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
                  color: isDarkMode ? "#f3f9f8" : "#161616",
                  textDecoration: "none",
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": { color: isDarkMode ? "#3dcfb6" : "#2a9d8f" },
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
          <IconButton onClick={toggleDarkMode} sx={{ color: isDarkMode ? "#3dcfb6" : "#2a9d8f" }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              color: isDarkMode ? "#3dcfb6" : "#2a9d8f",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 200 }}>
          {navItems.map(({ label, id }) => (
            <ListItem
              button
              key={id}
              onClick={() => {
                scrollToSection(id, () => setMobileOpen(false)); // Close menu after scrolling
              }}
            >
              <ListItemText primary={label} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
