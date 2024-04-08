import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MotionButton = ({ text, svg }) => {
  return (
    <motion.button
      className="flex justify-center border-2 border-solid border-black  bg-emerald-400 p-4 shadow-md"
      whileHover={{
        scale: 1.3,
        borderRadius: ".5rem",
        boxShadow:
          " 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      whileTap={{
        scale: 0.9,
        boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      {text}
      <img className="inline px-2" src={svg} alt="email icon" />
    </motion.button>
  );
};

MotionButton.propTypes = {
  text: PropTypes.string.isRequired,
  svg: PropTypes.string,
};

export default MotionButton;
