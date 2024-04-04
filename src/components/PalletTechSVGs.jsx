import { IconContext } from "react-icons";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const PalletTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>

      <IconContext.Provider
        value={{ className: "fill-blue-300", size: "1.5rem" }}
      >
        <FaReact />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "fill-blue-500", size: "1.5rem" }}
      >
        <SiTypescript />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "fill-red-500", size: "1.5rem" }}
      >
        <FaCss3Alt />
      </IconContext.Provider>
    </div>
  );
};

export default PalletTechSVGs;
