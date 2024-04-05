import bootstrapSVG from "../assets/SVG/bootstrap.svg";
import typescriptSVG from "../assets/SVG/typescript.svg";
import reactSVG from "../assets/SVG/react.svg";

const BBFrontTechSVGs = () => {
  return (
    <div className="flex justify-center gap-4">
      <p className="">Tech:</p>

      <img src={reactSVG} alt="react logo" />
      <img src={bootstrapSVG} alt="bootstrap logo" />
      <img src={typescriptSVG} alt="typescript logo" />
    </div>
  );
};

export default BBFrontTechSVGs;
