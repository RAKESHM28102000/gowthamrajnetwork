import React from 'react';
import './About.scss';
import { motion } from "framer-motion";
import Navbar from '../navbar/Navbar';
const textVariants = {
  initial: {
    x:-500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const About = () => {
  return (<section id='about'>
    <motion.div className='about' variants={textVariants}
    initial="initial"
    animate="animate">
    <motion.div variants={textVariants}><p className='about-title'>ABOUT US</p></motion.div>
    <div className='about-sub about-1'>
    <img src='./images/3.jpg' alt='logo'></img>
      <div className='about-p'><p>GOWTHAMRAJ NETWORK IS THE FIRST FREE EDUCATION TECHNOLOGY AND MEDIA COMPANY.The company is started by ER GOWTHAM RAJ on JUNE 19 2023 and he is the current FOUNDER CHAIRMAN CEO and DIRECTOR OF GR NETWORK.Educational Technology(Edu-tech) Media Company from Tamilnadu available in Tamil and English.</p></div>
    </div>
    <div className='about-sub about-2'>
    <img src='./images/1.jpg' alt='logo' ></img>
    <div className='about-p'><p>We provide diverse professional and certificate tech courses to students, graduates, and working professionals who wish to upskill themselves. We offers high quality learning courses on various IT and tech domains in two languages such as Tamil and English. Our mission is "to make technical education available to all at a very very affordable cost ". We are providing the courses for free of cost for initial few months after that we are charging only the platform fee that is affordable by everyone.  Our primary goal is to bring tech closer to everyone without any financial barriers. </p></div>
 
</div>
<div className='about-sub about-3'>
<img src='./images/2.jpg' alt='logo'></img>
<div className='about-p'><p>We offering courses created by working professionals in well-known companies and experts in their fields so that we ensure the quality of the courses.We are providing the professional certificates after completing the courses.We are providing coaching and guidance to the learners both in online and offline platform.We are also conducting different sessions for helping them in various aspects like placement training, skill development in various technologies and so on.</p> </div>
</div>
    </motion.div>
    </section> )
}

export default About