import React from 'react';
import './Sidebar.scss';
import { FaX } from "react-icons/fa6";
import {motion} from 'framer-motion';
const itemVariants = {
  initial: {
    opacity:0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration:0.5,
      staggerChildren: 0.1,
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
function Sidebar({toggle,settoggle}) {
  const variants = {
    visible: (i)=>( {
      opacity: 1,
      x:0,
      transition: { delay:i*.09},
    }),
    hidden: { opacity: 0 },
  };
  const items = ["Home", "About", "Sponsors","Team-GR Network", "Courses","GR NETWORK PROJECTS","Article","Assignments","Certificates","CEO Message","Executive and Leadership Team","Testimonials","Login","Contact"];
  return (
    <motion.div className='sidebar' variants={itemVariants} initial='initial' animate={"animate"}>
    <motion.div className='close'><FaX onClick={()=>settoggle(!toggle)} className='close-icon'/></motion.div>
   <motion.ul initial="hidden" animate="visible" variants={variants}  className='list-sidebar'>
   {items.map((item,i) => (
     <motion.li variants={variants} key={item} custom={i} className='listitem-sidebar'>
       <a href='/'>{item}</a>   
     </motion.li>
   ))}
 </motion.ul>
</motion.div>
  )
}

export default Sidebar