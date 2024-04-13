import { MotionConfig, motion } from "framer-motion";
import PropTypes from "prop-types";

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "calc(50% + 10px)",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const HamburgerButton = ({ state, setState }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        aria-label={state ? "close menu" : "open menu"}
        initial={false}
        animate={state ? "open" : "closed"}
        onClick={() => setState((pv) => !pv)}
        className="relative h-20 w-20 hover:cursor-context-menu sm:hidden"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-10 bg-white"
          style={{
            x: "-75%",
            y: "50%",
            bottom: "35%",
            left: "-50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

HamburgerButton.propTypes = {
  state: PropTypes.bool,
  setState: PropTypes.func,
};

export default HamburgerButton;
