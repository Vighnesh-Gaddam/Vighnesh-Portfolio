import React from "react";
import { motion } from "framer-motion";

const ArrowButton = () => {
  return (
    <motion.div
      className="absolute bottom-4 right-4 flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer border-4 border-gray-400 border-opacity-20"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.div
        className="w-4 h-4 font-bold"
        variants={{
          rest: { rotate: -45 }, // Initial state
          hover: { rotate: 0 }, // Hover state
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-full h-full fill-black"
        >
          {/* Added stroke and stroke-width for bold effect */}
          <path
            d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
            stroke="black"      // Set stroke color
            strokeWidth="10"    // Make the stroke thicker (bold effect)
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ArrowButton;
