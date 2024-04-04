import { IconContext } from "react-icons";
import { SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const BBBackTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>

      <IconContext.Provider
        value={{ className: "fill-green-300", size: "1.5rem" }}
      >
        <SiMongodb />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "fill-green-500", size: "1.5rem" }}
      >
        <FaNodeJs />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <SiExpress />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <SiJsonwebtokens />
      </IconContext.Provider>
    </div>
  );
};

export default BBBackTechSVGs;
