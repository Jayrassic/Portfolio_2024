import typescriptSVG from "../assets/SVG/typescript.svg";
import reactSVG from "../assets/SVG/react.svg";
import cssSvg from "../assets/SVG/css-3.svg";

const PalletTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>

      <img src={reactSVG} alt="react logo" />
      <img src={typescriptSVG} alt="typescript logo" />
      <img src={cssSvg} alt="CSS logo" />
    </div>
  );
};

export default PalletTechSVGs;
