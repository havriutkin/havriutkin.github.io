import React from 'react';
import { motion } from 'framer-motion';

const NeonBorderBox = ({ children }) => {
  // Define your animation variants
  const variants = {
    initial: {
      boxShadow: '0 0 8px rgba(255, 255, 255, 0)', // starting state
    },
    animate: {
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)', // glowing effect
      transition: {
        duration: 0.5,
        yoyo: Infinity, // create a continuous animation
      },
    },
  };

  return (
    <motion.div
      className="relative p-8 border-4 border-transparent"
      variants={variants}
      initial="initial"
      animate="animate"
      // Adjust the colors to create a neon effect
      style={{
        borderRadius: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderImage: 'linear-gradient(to right, #3b82f6, #6ee7b7, #9333ea) 1',
      }}
    >
      {children}
    </motion.div>
  );
};

export default NeonBorderBox;
