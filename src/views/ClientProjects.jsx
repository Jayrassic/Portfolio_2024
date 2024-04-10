import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { AutexTechSVGs } from "../components/CardSVGs";
import {
  mainVariant,
  childFromLeftVariant,
  childFromRightVariant,
} from "../helpers/viewVariants";

const ClientProjects = () => {
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
        <h2 className="mb-2 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold sm:mb-8 sm:text-4xl">
          Client Projects
        </h2>
      </motion.div>
      <motion.div
        variants={childFromLeftVariant}
        className="flex flex-grow flex-wrap items-center gap-4 p-4 sm:m-auto sm:justify-center sm:gap-8"
      >
        <ProjectCard
          title="Autex Auto Haus"
          projectScreenshot="https://res.cloudinary.com/dkqdyagy6/image/upload/q_auto/f_auto/v1712355403/AutexAutoScreenshot_tudchq.png"
          description="Single Page App"
          SVGComponent={<AutexTechSVGs />}
          siteLink="https://autex-autohaus.com/"
        />
      </motion.div>
    </motion.div>
  );
};

export default ClientProjects;
