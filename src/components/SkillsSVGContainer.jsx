import { motion } from "framer-motion";
import { childFromRightVariant } from "../helpers/skillsSVGVarients";
import PropTypes from "prop-types";

const SkillsSVGContainer = ({ svgSource, alt, displayText }) => {
  return (
    <motion.div
      variants={childFromRightVariant}
      className="flex flex-col items-center justify-center text-center"
    >
      <img
        className="drop-shadow-[1px_3px_6px_rgb(0,0,0,0.3)]"
        src={svgSource}
        width="100px"
        alt={alt}
        loading="lazy"
      />
      <p className="text-s font-bold sm:text-base">{displayText}</p>
    </motion.div>
  );
};

export default SkillsSVGContainer;

SkillsSVGContainer.propTypes = {
  svgSource: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
};
