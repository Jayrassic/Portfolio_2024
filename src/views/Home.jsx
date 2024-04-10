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

const Home = ({ test }) => {
  return (
    <motion.div
      className={`no-scrollbar font-figtree flex snap-start flex-col content-center items-center justify-center overflow-x-hidden overflow-y-scroll p-4 text-center font-bold text-slate-800 sm:max-h-screen sm:min-h-screen sm:p-8`}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <motion.h1 className="p-2 text-6xl" variants={fromTopVariant}>
        Hello there,
      </motion.h1>
      <motion.h1 className="p-2 text-7xl" variants={fromLeftVariant}>
        My name is{" "}
        <motion.span animate className="text-emerald-400">
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
        className="p-3 sm:p-5"
        variants={fromBottomVariant}
        src={downArrow}
        alt="arrow pointing down"
      />
    </motion.div>
  );
};

export default Home;
