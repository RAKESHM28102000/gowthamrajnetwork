import Navbar from "../navbar/Navbar";
import "./Home.scss";
import { motion } from "framer-motion";

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
const imgVariants = {
  initial: {
    x:200,
    y:100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y:10,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const img1Variants = {
  initial: {
    y:100,
    opacity: 0,
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration:3,
    },
  },
}
const sliderVariants = {
  initial: {
    x:0,
  },
  animate: {
    x:"500px",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration:15,
    },
  },
};

const Home = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>GOWTHAMRAJ NETWORK INDIA PRIVATE LIMITIED</motion.h2>
          <motion.h1 variants={textVariants}>
          EDUCATION TECHNOLOGY MEDIA COMPANY
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
  
      {/* <motion.div  */}
          {/* // className="imageContainer"  */}
          {/* // variants={imgVariants} */}
          {/* // initial="initial" */}
          {/* // animate="animate" */}
          {/* // > */}
        {/* {/* <motion.img variants={img1Variants}  src="./images/LOGO .png" alt="logo" /> */} 
      {/* </motion.div> */}

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        whileInView="animate"
      >
      GOWTHAMRAJ NETWORK INDIA PRIVATE LIMITIED
      </motion.div>
     
    </div>
  );
};

export default Home;
