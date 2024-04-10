import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  mainVariant,
  childFromLeftVariant,
  childFromRightVariant,
} from "../helpers/viewVariants";
import {
  FrontendSkillsSVGs,
  BackendSkillsSVGs,
} from "../components/SkillsSVGs";

const Skills = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { amount: 0.9 });

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
        <h2 className="rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold sm:text-4xl ">
          Skills
        </h2>
      </motion.div>

      <motion.div
        className=" flex w-full flex-grow flex-col justify-around gap-4 p-4 text-lg sm:m-auto"
        variants={childFromLeftVariant}
      >
        <div className="flex flex-col items-center text-center">
          <h3 className="m-4 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold">
            Frontend:
          </h3>
          <FrontendSkillsSVGs />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="m-4 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold">
            Backend:
          </h3>
          <BackendSkillsSVGs />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
