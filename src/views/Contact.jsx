import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import emailSVG from "../assets/SVG/email.svg";
import downloadSVG from "../assets/SVG/download.svg";
import MotionButton from "../components/MotionButton";
import {
  mainVariant,
  childFromLeftVariant,
  childFromRightVariant,
} from "../helpers/viewVariants";

const Contact = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { amount: 0.1 });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      ref={divRef}
      className="no-scrollbar flex h-full snap-start flex-col overflow-x-hidden overflow-y-scroll p-4 sm:max-h-screen sm:min-h-screen sm:p-8"
    >
      <motion.div variants={childFromRightVariant}>
        <h2 className="mb-8 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-4xl font-bold">
          Contact
        </h2>
      </motion.div>
      <motion.div
        variants={childFromLeftVariant}
        className="flex w-full flex-grow flex-col items-center justify-center gap-12 p-4 text-center text-lg sm:m-auto"
      >
        <h3 className=" text-2xl sm:text-3xl">
          Looking for a Full-Stack web developer?
        </h3>
        <div>
          <MotionButton text="Email Me" svg={emailSVG} />
        </div>
        <div>
          <MotionButton text="Resume" svg={downloadSVG} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
