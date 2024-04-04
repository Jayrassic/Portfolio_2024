import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import PalletTechSVGs from "../components/PalletTechSVGs";

const ClientProjects = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { margin: "-2px" });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);

  return (
    <motion.div
      ref={divRef}
      className="max-h-screen snap-start overflow-y-scroll p-8 "
      initial={{ opacity: 0, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
      viewport={{ amount: 0.1 }}
    >
      <h2 className="rounded-md border-2 border-solid border-black p-2 text-center font-serif text-4xl">
        Client Projects
      </h2>

      <div className="m-8 flex flex-wrap items-center justify-center gap-8">
        <ProjectCard
          title="Autex Auto Haus"
          projectScreenshot="src/assets/images/AutexSite.png"
          description="Single Page App"
          SVGComponent={<PalletTechSVGs />}
          siteLink="https://autex-autohaus.com/"
        />
      </div>
    </motion.div>
  );
};

export default ClientProjects;
