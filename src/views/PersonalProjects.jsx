import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import BBFrontTechSVGs from "../components/BBFrontTechSVGs";
import BBBackTechSVGs from "../components/BBBackTechSVGs";
import PalletTechSVGs from "../components/PalletTechSVGs";
import {
  mainVariant,
  childFromLeftVariant,
  childFromRightVariant,
} from "../helpers/viewVariants";

const PersonalProjects = () => {
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
          Personal Projects
        </h2>
      </motion.div>

      <motion.div
        variants={childFromLeftVariant}
        className="m-auto flex flex-wrap justify-center gap-8"
      >
        <ProjectCard
          title="BoardBuddies-Frontend"
          projectScreenshot="https://res.cloudinary.com/dkqdyagy6/image/upload/q_auto/f_auto/v1712355403/Boardbuddies_Screenshot_x1frtr.png"
          description="Searchable Board Game Database"
          SVGComponent={<BBFrontTechSVGs />}
          siteLink="https://boardbuddies.netlify.app/ "
          githubLink="https://github.com/Jayrassic/Board_Buddies-Frontend"
        />
        <ProjectCard
          title="BoardBuddies-Backend"
          projectScreenshot="https://res.cloudinary.com/dkqdyagy6/image/upload/q_auto/f_auto/v1712355403/NodeScreenshot_l1ntww.png"
          description="Routing, Authentication, and Data Management"
          SVGComponent={<BBBackTechSVGs />}
          siteLink="https://boardbuddies.netlify.app/ "
          githubLink="https://github.com/Jayrassic/Board_Buddies-API"
        />
        <ProjectCard
          title="Pallet Counter"
          projectScreenshot="https://res.cloudinary.com/dkqdyagy6/image/upload/q_auto/f_auto/v1712355403/PalletCounterScreenshot_rkhzs0.png"
          description="Pallet Weight Counter"
          SVGComponent={<PalletTechSVGs />}
          siteLink="https://palletcounter.netlify.app/ "
          githubLink="https://github.com/Jayrassic/react_pallet_counter"
        />
      </motion.div>
    </motion.div>
  );
};

export default PersonalProjects;
