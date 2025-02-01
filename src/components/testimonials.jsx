// import React from "react";
// import { Box, Typography, Paper } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// // import "swiper/css/navigation";

// const testimonials = [
//   {
//     name: "John Doe",
//     feedback:
//       "Working with Peace was an absolute pleasure. Her expertise in frontend development and attention to detail brought our project to life seamlessly.",
//   },
//   {
//     name: "Jane Smith",
//     feedback:
//       "Nnorom Peace is a talented and dedicated developer. Her problem-solving skills and ability to work under pressure make her a great asset to any team.",
//   },
//   {
//     name: "Michael Johnson",
//     feedback:
//       "I enjoyed collaborating with Peace. Her knowledge of React and backend technologies ensured our project was delivered successfully.",
//   },
//   {
//     name: "Emily Brown",
//     feedback:
//       "Nnorom Peace is highly skilled and professional. She communicates effectively and always delivers high-quality code.",
//   },
//   {
//     name: "David Wilson",
//     feedback:
//       "Her expertise in MongoDB and API integration helped streamline our application. she is a great developer to work with.",
//   },
//   {
//     name: "Sophia Martinez",
//     feedback:
//       "Peace's ability to understand project requirements and execute them flawlessly is remarkable. Highly recommend working with her!",
//   },
// ];

// const Testimonials = ({ isDarkMode }) => {
//   return (
//     <Box
//       sx={{
//         padding: "50px 20px",
//         bgcolor: isDarkMode ? "#121212" : "#f9f9f9",
//         color: isDarkMode ? "#FFFFFF" : "#333",
//         position: "relative",
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" align="center" mb={4}>
//         Testimonials.
//       </Typography>

//       <Box sx={{ position: "relative" }}>
//       <Swiper
//   slidesPerView={1}
//   spaceBetween={20}
//   breakpoints={{
//     1024: {
//       slidesPerView: 3,
//     },
//   }}
//   pagination={{ clickable: true }}
//   autoplay={{ delay: 3000 }}
//   modules={[Pagination, Autoplay]} 
//   style={{ paddingBottom: "30px" }}
// >

//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   padding: 3,
//                   borderRadius: 2,
//                   textAlign: "center",
//                   height: "100%",
//                   bgcolor: isDarkMode ? "#1e1e1e" : "#fff",
//                   border: `2px solid ${isDarkMode ? "#90CAF9" : "#4CAF50"}`, 
//                   color: isDarkMode ? "#FFFFFF" : "#333", // Fixes text color toggle issue
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   fontStyle="italic"
//                   sx={{ color: isDarkMode ? "#E0E0E0" : "#333" }}
//                 >
//                   "{testimonial.feedback}"
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   fontWeight="bold"
//                   mt={2}
//                   sx={{ color: isDarkMode ? "#90CAF9" : "#007BFF" }}
//                 >
//                   - {testimonial.name}
//                 </Typography>
//               </Paper>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom navigation arrows positioned inside the Swiper container */}
//         <div
//           className="swiper-button-prev"
//           style={{
//             color: isDarkMode ? "#90CAF9" : "#4CAF50",
//             fontSize: "18px",
//             position: "absolute",
//             top: "50%",
//             left: "-35px",
//             transform: "translateY(-50%)",
//             zIndex: 10,
//           }}
//         ></div>
//         <div
//           className="swiper-button-next"
//           style={{
//             color: isDarkMode ? "#90CAF9" : "#4CAF50",
//             fontSize: "18px",
//             position: "absolute",
//             top: "50%",
//             right: "-35px",
//             transform: "translateY(-50%)",
//             zIndex: 10,
//           }}
//         ></div>
//       </Box>
//     </Box>
//   );
// };

// export default Testimonials;





import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Uzoma Nwaiwu",
    feedback:
      "Working with Peace was an absolute pleasure. Her expertise in frontend development and attention to detail brought our project to life seamlessly.",
  },
  {
    name: "Agwuoma Prince",
    feedback:
      "Nnorom Peace is a talented and dedicated developer. Her problem-solving skills and ability to work under pressure make her a great asset to any team.",
  },
  {
    name: "Ayodele Charles",
    feedback:
      "I enjoyed collaborating with Peace. Her knowledge of React and backend technologies ensured our project was delivered successfully.",
  },
  {
    name: "Akinsola Michael",
    feedback:
      "Nnorom Peace is highly skilled and professional. She communicates effectively and always delivers high-quality code.",
  },
  {
    name: "Faith Etim",
    feedback:
      "Her expertise in MongoDB and API integration helped streamline our application. She is a great developer to work with.",
  },
  {
    name: "Lucky Moses",
    feedback:
      "Peace's ability to understand project requirements and execute them flawlessly is remarkable. Highly recommend working with her!",
  },
];

const Testimonials = ({ isDarkMode }) => {
  return (
    <Box
      id="testimonials"
      sx={{
        padding: "80px 20px",
        // bgcolor: isDarkMode ? "rgb(22,22,22)" : "#f3f9f8",
        // color: isDarkMode ? "#FFFFFF" : "#222",
        background: isDarkMode
          ? "linear-gradient(135deg, rgb(22,22,22), #1b2a41)"
          : "linear-gradient(135deg, #3dcfb6, #2a9d8f)",
        color: "#fff",
      }}
    >
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" mb={4}>
          Testimonials
        </Typography>
      </motion.div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        style={{ paddingBottom: "30px" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Paper
  elevation={3}
  sx={{
    padding: 3,
    borderRadius: "12px",
    textAlign: "center",
    height: "100%",
    bgcolor: isDarkMode ? "#1b2a41" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#333",
    transition: "all 0.3s ease-in-out",
    border: `2px solid transparent`,
    "&:hover": {
      transform: "translateY(-8px) scale(1.03)", // Lift effect
      boxShadow: isDarkMode
        ? "0px 12px 30px rgba(61, 207, 182, 0.2)"
        : "0px 12px 30px rgba(42, 157, 143, 0.3)", // Soft shadow expansion
      border: `2px solid ${isDarkMode ? "#3dcfb6" : "#2a9d8f"}`, // Border glow effect
    },
  }}
>
  <Typography variant="body1" fontStyle="italic">
    "{testimonial.feedback}"
  </Typography>
  <Typography
    variant="h6"
    fontWeight="bold"
    mt={2}
    color={isDarkMode ? "#3dcfb6" : "#2a9d8f"}
  >
    - {testimonial.name}
  </Typography>
</Paper>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
