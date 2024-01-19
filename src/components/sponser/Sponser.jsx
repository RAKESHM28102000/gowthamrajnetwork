import React from 'react'
import "./Sponser.scss";
import SponserCard from './SponserCard';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
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
function Sponser() {
    const sponser=[{title:"TITLE SPONSORS",quote:"1 crore",count:"3"},
    {title:"CO SPONSORS",quote:"75 LAKHS",count:"4"},
    {title:"ASSOCIATE SPONSORS",quote:"50 LAKHS",count:"6"},
    {title:"POWERED BY SPONSORS",quote:"30 LAKHS",count:"6"},
    {title:"PLATINUM SPONSOR",quote:"20 LAKHS",count:"4"},
    {title:"DIAMOND SPONSOR",
quote:"5 LAKHS TO 10 LAKHS",count:"6"},
{title:"GOLD SPONSOR",
quote:"3 TO 4 LAKHS",count:"3"},
{title:"SILVER SPONSOR",
quote:"1 LAKH",count:"4"},
]
  return (<section>
    <motion.div className='sponser-parent'>
    <div><h1 className='sponser-title'>
    SPONSORS
    </h1></div>
    <motion.div className='sponser'>
      {sponser.map((item,index)=>{
        return <Link to="/sponserpage" className='link'><SponserCard key={index} sponserTitle={item.title} sponsershipQuote={item.quote} sponsersCount={item.count}/></Link>
      })}    
    </motion.div>
    </motion.div>
    </section> )
}

export default Sponser;