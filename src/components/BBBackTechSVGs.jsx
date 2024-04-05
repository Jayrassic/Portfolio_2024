import mongoSVG from "../assets/SVG/mongodb.svg";
import expressSVG from "../assets/SVG/express.svg";
import JWTSVG from "../assets/SVG/JWT.svg";
import nodeSVG from "../assets/SVG/node.svg";

const BBBackTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>
      <img src={expressSVG} alt="express logo" />
      <img src={mongoSVG} alt="mongodb logo" />
      <img src={JWTSVG} alt="JWT logo" />
      <img src={nodeSVG} alt="node logo" />
    </div>
  );
};

export default BBBackTechSVGs;
