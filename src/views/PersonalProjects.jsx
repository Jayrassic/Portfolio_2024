import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import BBFrontTechSVGs from "../components/BBFrontTechSVGs";
import BBBackTechSVGs from "../components/BBBackTechSVGs";
import PalletTechSVGs from "../components/PalletTechSVGs";

const PersonalProjects = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { margin: "-2px" });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);

  return (
    <motion.div
      ref={divRef}
      className="max-h-screen snap-start overflow-y-scroll p-8"
      initial={{ opacity: 0, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
      viewport={{ amount: 0.1 }}
    >
      <h2 className="rounded-md border-2 border-solid border-black p-2 text-center font-serif text-4xl">
        Personal Projects
      </h2>

      <div className="m-8 flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="BoardBuddies-Frontend"
          projectScreenshot="src/assets/images/BoardBuddies.png"
          description="Searchable Board Game Database"
          SVGComponent={<BBFrontTechSVGs />}
          siteLink="https://boardbuddies.netlify.app/ "
          githubLink="https://github.com/Jayrassic/Board_Buddies-Frontend"
        />
        <ProjectCard
          title="BoardBuddies-Backend"
          projectScreenshot="src/assets/images/BoardBuddies.png"
          description="Routing, Authentication, and Data Management"
          SVGComponent={<BBBackTechSVGs />}
          siteLink="https://boardbuddies.netlify.app/ "
          githubLink="https://github.com/Jayrassic/Board_Buddies-API"
        />
        <ProjectCard
          title="Pallet Counter"
          projectScreenshot="src/assets/images/PalletCounter.png"
          description="Pallet Weight Counter"
          SVGComponent={<PalletTechSVGs />}
          siteLink="https://palletcounter.netlify.app/ "
          githubLink="https://github.com/Jayrassic/react_pallet_counter"
        />
      </div>
    </motion.div>
  );
};

export default PersonalProjects;
