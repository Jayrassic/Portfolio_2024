import { motion } from "framer-motion";

import javascriptSVG from "../assets/SVG/javascript.svg";
import bootstrapSVG from "../assets/SVG/bootstrap.svg";
import typescriptSVG from "../assets/SVG/typescript.svg";
import reactSVG from "../assets/SVG/react.svg";
import tailwindSVG from "../assets/SVG/tailwind.svg";

import expressSVG from "../assets/SVG/express.svg";
import jwtSVG from "../assets/SVG/JWT.svg";
import mongoSVG from "../assets/SVG/mongodb.svg";
import nodeSVG from "../assets/SVG/node.svg";
import ejsSVG from "../assets/SVG/ejs.svg";

const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const childFromRightVariant = {
  hidden: { opacity: 0, x: "110vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.5 },
  },
};

export const FrontendSkillsSVGs = () => {
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      whileInView="visible"
      className="flex w-full justify-evenly"
    >
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={javascriptSVG}
        width="100px"
        alt="javascript svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={typescriptSVG}
        width="100px"
        alt="typescript svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={tailwindSVG}
        width="100px"
        alt="tailwind svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={bootstrapSVG}
        width="100px"
        alt="bootstrap svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={reactSVG}
        width="100px"
        alt="react svg"
      />
    </motion.div>
  );
};

export const BackendSkillsSVGs = () => {
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      whileInView="visible"
      className="flex w-full justify-evenly"
    >
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={nodeSVG}
        width="100px"
        alt="node svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={expressSVG}
        width="100px"
        alt="express svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={mongoSVG}
        width="100px"
        alt="mongoDB svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={jwtSVG}
        width="100px"
        alt="JWT svg"
      />
      <motion.img
        className="drop-shadow-xl"
        variants={childFromRightVariant}
        src={ejsSVG}
        width="100px"
        alt="EJS svg"
      />
    </motion.div>
  );
};
