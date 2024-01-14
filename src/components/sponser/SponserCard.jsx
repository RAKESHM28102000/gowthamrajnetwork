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
        <motion.h1 variants={textVariants} className='sponser-heading'>SPONSORSHIP</motion.h1>
        <motion.h1 variants={textVariants} className='sponser-heading'>{sponserTitle}</motion.h1>
        <motion.h1 variants={textVariants} className='sponser-heading'>MINIMUM QUOTE</motion.h1>
        <motion.h2 variants={textVariants}  className='sponser-heading' >{sponsershipQuote}</motion.h2>
        <motion.h1 variants={textVariants} className='sponser-heading'>SPONSORS COUNT MAXIMUM</motion.h1>
        <motion.h3 variants={textVariants}  className='sponser-heading'>{sponsersCount}</motion.h3>
    </motion.div>
  )
}

export default SponserCard