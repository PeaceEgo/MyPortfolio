import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import go from "../assets/go.jpg";
import taskmate from "../assets/taskmate.jpg";
import tasty from "../assets/Tasty.jpg";

const projects = [
  {
    title: "GoRide",
    description:
      "GoRide is a ride-hailing web application that allows users to book rides seamlessly. It integrates Paystack for secure payments, real-time ride tracking, and an intuitive UI for smooth navigation. Built with a MERN stack, it ensures scalability and a fast user experience.",
    techStack: ["React", "MongoDB", "Express.js", "Paystack API"],
    image: go,
    liveLink: "https://go-rideng.netlify.app/",
    github: "https://github.com/chillestdev/GoRide.git",
  },
  {
    title: "TaskMate",
    description:
      "TaskMate is a task management application designed for productivity. It features real-time task updates, Firebase authentication, and a sleek UI. The app supports dark mode and push notifications, ensuring users stay on top of their tasks effortlessly.",
    techStack: ["React", "Firebase", "Tailwind-CSS", "Material-UI"],
    image: taskmate,
    liveLink: "https://gettaskmate.netlify.app/",
    github: "https://github.com/PeaceEgo/TaskMate.git",
  },
  {
    title: "TastyTrip (On-going)",
    description:
      "TastyTrip is a food delivery platform connecting customers with restaurants and dispatch riders. It provides real-time order tracking, multiple payment options, and a dynamic dashboard for business owners to manage their orders effectively. The app is designed for seamless, efficient food delivery.",
    techStack: ["React", "Node.js", "MongoDB", "WebSockets"],
    image: tasty,
    liveLink: "https://tastytrip.com",
    github: "https://github.com/PeaceEgo/fooDelivery.git",
  },
];

const Projects = ({ isDarkMode }) => {
  return (
    <Box
      id="projects"
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
        textAlign: "center",
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
         fontFamily: "Poppins, sans-serif",
            color: isDarkMode ? "#ff8c42" : "#002240"
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: isDarkMode ? "#1b2a41" : "#fff",
                color: isDarkMode ? "#fff" : "#222",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: isDarkMode ? "#ff8c42" : "#002240" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" mb={2} sx={{ minHeight: "120px" }}>
                  {project.description}
                </Typography>

                {/* Tech Stack */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 2 }}>
                  {project.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        background: isDarkMode ? "transparent" : "#1b2a41",
                        color: "#fff",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        border: isDarkMode ? "1px solid #fff" : "1px solid #1b2a41",
                      }}
                    />
                  ))}
                </Box>

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<OpenInNewIcon />}
                    href={project.liveLink}
                    target="_blank"
                    sx={{
                      backgroundColor: "#ff8c42",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      padding: "6px 12px",
                      minWidth: "120px",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#ff8c42",
                        border: "1px solid #ff8c42",
                      },
                    }}
                  >
                    Live Preview
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    sx={{
                      borderColor: isDarkMode ? "#fff" : "#222",
                      color: isDarkMode ? "#fff" : "#222",
                      fontSize: "0.75rem",
                      padding: "6px 12px",
                      minWidth: "120px",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#fff" : "#222",
                        color: isDarkMode ? "#222" : "#fff",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
