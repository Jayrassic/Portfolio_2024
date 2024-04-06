import { motion } from "framer-motion";
import downArrow from "../assets/SVG/arrow-down.svg";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const fromTopVariant = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" },
  },
};

const fromLeftVariant = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" },
  },
};

const fromRightVariant = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" },
  },
};

const fromBottomVariant = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="no-scrollbar font-figtree flex max-h-screen min-h-screen snap-start flex-col items-center justify-center overflow-x-hidden overflow-y-scroll p-8 font-bold"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <motion.h1 className="items-end p-2 text-6xl" variants={fromTopVariant}>
        Hello there,
      </motion.h1>
      <motion.h1 className="p-2 text-6xl" variants={fromLeftVariant}>
        My name is{" "}
        <motion.span animate className="text-green-400">
          Jason
        </motion.span>
      </motion.h1>
      <motion.p className="p-2 text-xl" variants={fromRightVariant}>
        I'm a Full stack web developer.
      </motion.p>
      <motion.p className="p-2 text-xl" variants={fromLeftVariant}>
        Lets build together!
      </motion.p>
      <motion.img
        className="p-5"
        variants={fromBottomVariant}
        src={downArrow}
        alt="arrow pointing down"
      />
    </motion.div>
  );
};

export default Home;
