import websiteSVG from "../assets/SVG/website.svg";
import githubSVG from "../assets/SVG/github.svg";
import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  projectScreenshot,
  description,
  SVGComponent,
  siteLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-shrink flex-col items-center justify-center rounded-lg border-2 border-solid border-black bg-emerald-400 p-4  text-center font-figtree shadow-[0px_3px_5px_0px_rgb(0,0,0,0.4)]">
      <h3 className="px-4 pb-4 text-xl font-bold">{title}</h3>
      <a href={siteLink} target="_blank">
        <img
          className="rounded-md border-2 border-solid border-black shadow-lg sm:max-w-96"
          src={projectScreenshot}
          alt="Screenshot of Project"
        />
      </a>
      <p className="p-2 text-lg">{description}</p>
      <div className="border-t-2 border-black p-2 text-lg font-bold">
        <div>{SVGComponent}</div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-lg font-bold text-neutral-800">
          {githubLink && siteLink ? "Links:" : "Link:"}
        </p>
        {siteLink !== "#ai" && (
          <a href={siteLink} target="_blank">
            <img src={websiteSVG} alt="website SVG" />
          </a>
        )}
        {siteLink === "#ai" && (
          <a href={siteLink}>
            <img src={websiteSVG} alt="website SVG" />
          </a>
        )}

        {githubLink && (
          <a href={githubLink} target="_blank">
            <img src={githubSVG} alt="github logo" />
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  projectScreenshot: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  SVGComponent: PropTypes.element,
  siteLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
};

export default ProjectCard;
