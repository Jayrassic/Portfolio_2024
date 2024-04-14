import { motion } from "framer-motion";
import {
  childFromRightVariant,
  childFromLeftVariant,
} from "../helpers/viewVariants";
import PropTypes from "prop-types";

export const TitleCardH2 = ({ title }) => {
  return (
    <motion.div tabIndex={0} variants={childFromRightVariant}>
      <h2 className="mb-2 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold  shadow-[0px_3px_5px_0px_rgb(0,0,0,0.4)] sm:mb-8 sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
};

export const TitleCardH3 = ({ title }) => {
  return (
    <motion.div tabIndex={0} variants={childFromLeftVariant}>
      <h3 className="mb-2 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold shadow-[0px_4px_5px_0px_rgb(0,0,0,0.4)] sm:mb-8 sm:text-4xl">
        {title}
      </h3>
    </motion.div>
  );
};

TitleCardH2.propTypes = {
  title: PropTypes.string.isRequired,
};

TitleCardH3.propTypes = {
  title: PropTypes.string.isRequired,
};
