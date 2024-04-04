import { IconContext } from "react-icons";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const BBFrontTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>

      <IconContext.Provider
        value={{ className: "fill-blue-300", size: "1.5rem" }}
      >
        <FaReact />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "fill-violet-500", size: "1.5rem" }}
      >
        <FaBootstrap />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "fill-blue-500", size: "1.5rem" }}
      >
        <SiTypescript />
      </IconContext.Provider>
    </div>
  );
};

export default BBFrontTechSVGs;
