import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  "Frontend Development": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
  "Backend Development": ["Node.js", "Express.js", "MongoDB", "WebSockets"],
  "Development Tools": ["Git", "GitHub", "Postman", "Firebase"],
  "Other Expertise": ["REST API", "Web Performance", "Responsive Design"],
};

const Skills = ({ isDarkMode }) => {
  return (
    <Box
      id="skills"
      sx={{
        padding: "80px 20px",
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "#f3f9f8",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: isDarkMode ? "#ff8c42" : "#002240",
          }}
        >
          Skills & Expertise
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {Object.entries(skills).map(([category, skillList]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             <Paper
  elevation={3}
  sx={{
    bgcolor: isDarkMode ? "#1b2a41" : "#fff",
    color: isDarkMode ? "#ffffff" : "#002240",
    padding: "20px",
    borderRadius: "12px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
    minHeight: "150px", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={2}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    color: isDarkMode ? "#ff8c42" : "#002240",
                  }}
                >
                  {category}
                </Typography>

                {/* Skill Badges */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{
                        backgroundColor: isDarkMode ? "#1b2a41" : "#002240",
                        color: "#fff",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
