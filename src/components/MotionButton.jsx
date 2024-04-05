import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MotionButton = ({ text, svg }) => {
  return (
    <motion.button
      className="flex justify-center rounded-lg bg-blue-200 p-4 shadow-md"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
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
