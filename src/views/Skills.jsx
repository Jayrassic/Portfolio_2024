import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { mainVariant, childFromLeftVariant } from "../helpers/viewVariants";
import {
  FrontendSkillsSVGs,
  BackendSkillsSVGs,
} from "../components/SkillsSVGs";
import { TitleCardH2, TitleCardH3 } from "../components/Title Card";

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
      <TitleCardH2 title="Skills" />

      <motion.div
        className=" flex w-full flex-grow flex-col justify-around gap-4 p-4 text-lg sm:m-auto"
        variants={childFromLeftVariant}
      >
        <div className="flex flex-col items-center text-center">
          <TitleCardH3 title="Frontend:" />
          <FrontendSkillsSVGs />
        </div>
        <div className="flex flex-col items-center text-center">
          <TitleCardH3 title="Backend:" />
          <BackendSkillsSVGs />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
