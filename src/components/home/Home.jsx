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
  return (<section className="hero">
    <div>
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
             Enroll Course
            </motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        whileInView="animate"
      >
      GOWTHAMRAJ NETWORK INDIA PRIVATE LIMITIED
      </motion.div>
     
    </div>
</section>  );
};

export default Home;
