// Preloader.js
import React from 'react';
import './Preloader.scss';
import { motion } from "framer-motion";
const textVariants = {
    scrollButton: {
      opacity: 0,
      x:-20,
      transition: {
        duration:.8,
        repeat: Infinity,
      },
    },
  };
const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader"></div>
      <motion.h1  variants={textVariants}
 animate="scrollButton"
 src="/scroll.png" className='heading-loader'>GR NETWORK...</motion.h1>
    </div>

  );
};

export default Preloader;
