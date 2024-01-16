import React from 'react'
import './Sponser.scss';
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    y:200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },}}
const SponserCard = ({sponserTitle,sponsershipQuote,sponsersCount}) => {
  return (
    <motion.div whileInView='animate' initial='initial' variants={textVariants} className='sponser-card'>
        {/* <motion.h1 variants={textVariants} className='sponser-heading'>SPONSORSHIP</motion.h1> */}
        <motion.h4 variants={textVariants} className='sponser-heading'>{sponserTitle}</motion.h4>
        {/* <motion.h5 variants={textVariants} className='sponser-heading'>QUOTE:{sponsershipQuote}</motion.h5> */}
        {/* <motion.h2 variants={textVariants}  className='sponser-heading' ></motion.h2> */}
        {/* <motion.h6 variants={textVariants} className='sponser-heading'>SPONSORS COUNT:{sponsersCount}</motion.h6> */}
        {/* <motion.h3 variants={textVariants}  className='sponser-heading'></motion.h3> */}
    </motion.div>
  )
}

export default SponserCard