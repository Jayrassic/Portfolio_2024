import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import emailSVG from "../assets/SVG/email.svg";
import downloadSVG from "../assets/SVG/download.svg";

const Contact = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { margin: "-2px" });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);
  return (
    <motion.div
      ref={divRef}
      className="flex min-h-screen snap-start flex-col overflow-y-scroll p-8"
      initial={{ opacity: 0, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
      viewport={{ amount: 0.1 }}
    >
      <h2 className="mb-8 rounded-md border-2 border-solid border-black p-2 text-center font-serif text-4xl">
        Contact
      </h2>

      <div className="m-auto flex flex-col items-center gap-12 font-mono">
        <h3>Looking for a Full-Stack web developer?</h3>
        <div>
          <button className=" bg-blue-200">
            Email Me
            <img className="inline px-2" src={emailSVG} alt="email icon" />
          </button>
        </div>
        <div>
          <button>
            Download my resume
            <img
              className="inline px-2"
              src={downloadSVG}
              alt="download icon"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
