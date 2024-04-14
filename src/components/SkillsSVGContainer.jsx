import { motion } from "framer-motion";
import { childFromRightVariant } from "../helpers/skillsSVGVarients";
import PropTypes from "prop-types";

const SkillsSVGContainer = ({ svgSource, alt }) => {
  return (
    <motion.img
      className="drop-shadow-xl"
      variants={childFromRightVariant}
      src={svgSource}
      width="100px"
      alt={alt}
    />
  );
};

export default SkillsSVGContainer;

SkillsSVGContainer.propTypes = {
  svgSource: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
