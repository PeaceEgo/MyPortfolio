// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import CodeIcon from "@mui/icons-material/Code";
// import StorageIcon from "@mui/icons-material/Storage";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import BuildIcon from "@mui/icons-material/Build";
// import SettingsIcon from "@mui/icons-material/Settings";

// const Skills = ({ isDarkMode }) => {
//   const primaryColor = isDarkMode ? "#90CAF9" : "#4CAF50"; // Blue in dark mode, Green in light mode
//   const textColor = isDarkMode ? "#FFFFFF" : "#333";
//   const bgColor = isDarkMode ? "#121212" : "rgba(255, 255, 255, 0.9)";
//   const borderColor = isDarkMode ? "#90CAF9" : "#4CAF50";

//   return (
//     <Box
//       id="skills"
//       sx={{
//         textAlign: "center",
//         padding: "50px 20px",
//         bgcolor: bgColor,
//         color: textColor,
//       }}
//     >
//       <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
//         skills.
//       </Typography>
//       <Grid container spacing={4}>
//         {/** Skill Cards */}
//         {[
//           { icon: <CodeIcon />, title: "languages", skills: "JavaScript, TypeScript, PHP, SQL, NoSQL" },
//           { icon: <StorageIcon />, title: "databases", skills: "MySQL, Firestore" },
//           { icon: <DesignServicesIcon />, title: "design", skills: "Figma, Photoshop, CorelDRAW" },
//           { icon: <BuildIcon />, title: "frontend development", skills: "Vue.js, Nuxt.js, Tailwind, Bootstrap, HTML, CSS" },
//           { icon: <SettingsIcon />, title: "backend development", skills: "Laravel, Livewire, Firebase" },
//         ].map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box
//               sx={{
//                 border: `2px solid ${borderColor}`,
//                 borderRadius: "8px",
//                 padding: 3,
//                 textAlign: "center",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: `0 4px 20px ${borderColor}`,
//                 },
//               }}
//             >
//               {React.cloneElement(skill.icon, { sx: { fontSize: 50, color: primaryColor } })}
//               <Typography variant="h6" sx={{ marginTop: 2, color: textColor }}>
//                 {skill.title}
//               </Typography>
//               <Typography variant="body1" sx={{ color: textColor }}>
//                 {skill.skills}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;




import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
  Backend: ["Node.js", "Express.js", "MongoDB", "WebSockets"],
  Tools: ["Git", "GitHub", "Postman", "Firebase"],
  Others: ["REST API", "Web Performance", "Responsive Design"],
};

const Skills = ({ isDarkMode }) => {
  return (
    <Box
      id="skills"
      sx={{
        padding: "80px 20px",
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "linear-gradient(135deg, #3dcfb6, #2a9d8f)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Skills & Expertise
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {Object.entries(skills).map(([category, skillList]) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: isDarkMode ? "#1b2a41" : "#fff",
                color: isDarkMode ? "#fff" : "#222",
                padding: "20px",
                borderRadius: "12px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                {category}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                {skillList.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      backgroundColor: isDarkMode ? "#3dcfb6" : "#2a9d8f",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
