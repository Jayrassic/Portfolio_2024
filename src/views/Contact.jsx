import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import emailSVG from "../assets/SVG/email.svg";
import downloadSVG from "../assets/SVG/download.svg";
import MotionButton from "../components/MotionButton";

const Contact = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { margin: "-2px" });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);
  return (
    <div
      ref={divRef}
      className="no-scrollbar flex max-h-screen min-h-screen snap-start flex-col overflow-x-hidden overflow-y-scroll p-8"
    >
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
        viewport={{ amount: 0.1 }}
      >
        <h2 className="mb-8 rounded-md border-2 border-solid border-black p-2 text-center font-serif text-4xl">
          Contact
        </h2>
      </motion.div>
      <motion.div
        className="m-auto flex flex-col items-center gap-12 font-mono"
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
        viewport={{ amount: 0.1 }}
      >
        <h3 className="text-xl">Looking for a Full-Stack web developer?</h3>
        <div>
          <MotionButton text="Email Me" svg={emailSVG} />
        </div>
        <div>
          <MotionButton text="Resume" svg={downloadSVG} />
        </div>
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Contact;
