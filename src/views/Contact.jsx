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

  const isInView = useInView(divRef, { margin: "-2px" });

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
      className="no-scrollbar flex max-h-screen min-h-screen snap-start flex-col overflow-x-hidden overflow-y-scroll p-8"
    >
      <motion.div variants={childFromRightVariant}>
        <h2 className="mb-8 rounded-md border-2 border-solid border-black p-2 text-center text-4xl font-bold">
          Contact
        </h2>
      </motion.div>
      <motion.div
        variants={childFromLeftVariant}
        className="m-auto flex flex-col items-center gap-12"
      >
        <h3 className="text-3xl">Looking for a Full-Stack web developer?</h3>
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
