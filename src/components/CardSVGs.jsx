import bootstrapSVG from "../assets/SVG/bootstrap.svg";
import typescriptSVG from "../assets/SVG/typescript.svg";
import reactSVG from "../assets/SVG/react.svg";

import mongoSVG from "../assets/SVG/mongodb.svg";
import expressSVG from "../assets/SVG/express.svg";
import JWTSVG from "../assets/SVG/JWT.svg";
import nodeSVG from "../assets/SVG/node.svg";

import cssSvg from "../assets/SVG/css-3.svg";

export const BBFrontTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>

      <img src={reactSVG} alt="react logo" />
      <img src={bootstrapSVG} alt="bootstrap logo" />
      <img src={typescriptSVG} alt="typescript logo" />
    </div>
  );
};

export const BBBackTechSVGs = () => {
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

export const PalletTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>
      <img src={reactSVG} alt="react logo" />
      <img src={typescriptSVG} alt="typescript logo" />
      <img src={cssSvg} alt="CSS logo" />
    </div>
  );
};

export const AutexTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>
      <img src={reactSVG} alt="react logo" />
      <img src={typescriptSVG} alt="typescript logo" />
      <img src={cssSvg} alt="CSS logo" />
    </div>
  );
};
