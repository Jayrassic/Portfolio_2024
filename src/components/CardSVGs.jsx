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

      <img src={reactSVG} alt="react logo" loading="lazy" />
      <img src={bootstrapSVG} alt="bootstrap logo" loading="lazy" />
      <img src={typescriptSVG} alt="typescript logo" loading="lazy" />
    </div>
  );
};

export const BBBackTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>
      <img src={expressSVG} alt="express logo" loading="lazy" />
      <img src={mongoSVG} alt="mongodb logo" loading="lazy" />
      <img src={JWTSVG} alt="JWT logo" loading="lazy" />
      <img src={nodeSVG} alt="node logo" loading="lazy" />
    </div>
  );
};

export const PalletTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>
      <img src={reactSVG} alt="react logo" loading="lazy" />
      <img src={typescriptSVG} alt="typescript logo" loading="lazy" />
      <img src={cssSvg} alt="CSS logo" loading="lazy" />
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
