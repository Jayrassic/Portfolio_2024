import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import PalletTechSVGs from "../components/PalletTechSVGs";
import {
  mainVariant,
  childFromLeftVariant,
  childFromRightVariant,
} from "../helpers/viewVariants";

const ClientProjects = () => {
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
        <h2 className="mb-8 rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-4xl font-bold">
          Client Projects
        </h2>
      </motion.div>
      <motion.div
        variants={childFromLeftVariant}
        className="m-auto flex flex-wrap justify-center gap-8"
      >
        <ProjectCard
          title="Autex Auto Haus"
          projectScreenshot="https://res.cloudinary.com/dkqdyagy6/image/upload/q_auto/f_auto/v1712355403/AutexAutoScreenshot_tudchq.png"
          description="Single Page App"
          SVGComponent={<PalletTechSVGs />}
          siteLink="https://autex-autohaus.com/"
        />
      </motion.div>
    </motion.div>
  );
};

export default ClientProjects;
