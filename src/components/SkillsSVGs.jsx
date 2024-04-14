import { motion } from "framer-motion";

import SkillsSVGContainer from "./SkillsSVGContainer";

import { mainVariant } from "../helpers/skillsSVGVarients";

import javascriptSVG from "../assets/SVG/javascript.svg";
import bootstrapSVG from "../assets/SVG/bootstrap.svg";
import typescriptSVG from "../assets/SVG/typescript.svg";
import reactSVG from "../assets/SVG/react.svg";
import tailwindSVG from "../assets/SVG/tailwind.svg";

import expressSVG from "../assets/SVG/express.svg";
import jwtSVG from "../assets/SVG/JWT.svg";
import mongoSVG from "../assets/SVG/mongodb.svg";
import nodeSVG from "../assets/SVG/node.svg";
import ejsSVG from "../assets/SVG/ejs.svg";

export const FrontendSkillsSVGs = () => {
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      whileInView="visible"
      className="flex w-full justify-evenly"
    >
      <SkillsSVGContainer svgSource={javascriptSVG} alt="javascript svg" />
      <SkillsSVGContainer svgSource={typescriptSVG} alt="typescript svg" />
      <SkillsSVGContainer svgSource={tailwindSVG} alt="tailwind svg" />
      <SkillsSVGContainer svgSource={bootstrapSVG} alt="bootstrap svg" />
      <SkillsSVGContainer svgSource={reactSVG} alt="react svg" />
    </motion.div>
  );
};

export const BackendSkillsSVGs = () => {
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      whileInView="visible"
      className="flex w-full justify-evenly"
    >
      <SkillsSVGContainer svgSource={nodeSVG} alt="node svg" />
      <SkillsSVGContainer svgSource={expressSVG} alt="express svg" />
      <SkillsSVGContainer svgSource={mongoSVG} alt="mongoDB svg" />
      <SkillsSVGContainer svgSource={jwtSVG} alt="JWT svg" />
      <SkillsSVGContainer svgSource={ejsSVG} alt="EJS svg" />
    </motion.div>
  );
};
