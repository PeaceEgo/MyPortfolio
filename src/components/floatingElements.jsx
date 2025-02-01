import React from "react";
import { motion } from "framer-motion";

const floatingVariants = {
  animate: {
    y: [0, 20, 0], // Floating up and down
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FloatingElements = ({ isDarkMode }) => {
  const floatingShapes = [
    { size: 100, top: "10%", left: "20%", color: isDarkMode ? "#90CAF9" : "#3dcfb6" },
    { size: 80, top: "30%", left: "70%", color: isDarkMode ? "#ff8c42" : "#2a9d8f" },
    { size: 60, top: "70%", left: "10%", color: isDarkMode ? "#a29bfe" : "#4CAF50" },
  ];

  return (
    <>
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          variants={floatingVariants}
          animate="animate"
          style={{
            position: "absolute",
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            borderRadius: "50%",
            opacity: 0.3,
            filter: "blur(30px)",
            top: shape.top,
            left: shape.left,
            zIndex: -1,
          }}
        />
      ))}
    </>
  );
};

export default FloatingElements;
