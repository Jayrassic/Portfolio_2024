import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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
  const divRef = useRef(null);

  const isInView = useInView(divRef, { amount: 0.1 });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);

  return (
    <motion.div
      className={`no-scrollbar flex h-full snap-start flex-col overflow-x-hidden overflow-y-scroll p-4 text-center font-bold text-slate-800 sm:max-h-svh sm:min-h-svh`}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      ref={divRef}
      viewport={{ amount: 0.1 }}
    >
      <div className="m-auto">
        <motion.h1
          className="p-2 text-5xl sm:text-6xl"
          variants={fromTopVariant}
        >
          Hello there,
        </motion.h1>
        <motion.h1
          className="p-2 text-6xl sm:text-7xl"
          variants={fromLeftVariant}
        >
          My name is{" "}
          <motion.span animate className="text-emerald-400">
            Jason
          </motion.span>
        </motion.h1>
        <motion.p
          className="p-2 text-base sm:text-xl"
          variants={fromRightVariant}
        >
          I'm a Fullstack web developer.
        </motion.p>
        <motion.p
          className="p-2 text-base sm:text-xl"
          variants={fromLeftVariant}
        >
          Lets build together!
        </motion.p>
        <motion.img
          className="m-auto p-3 sm:p-5"
          variants={fromBottomVariant}
          src={downArrow}
          alt="arrow pointing down"
        />
      </div>
    </motion.div>
  );
};

export default Home;
