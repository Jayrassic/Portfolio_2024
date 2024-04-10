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
    <div className="font-figtree flex flex-shrink flex-col items-center justify-center rounded-lg border-2 border-solid border-black bg-emerald-400  p-4 text-center shadow-xl">
      <h3 className="px-4 pb-4 text-xl font-bold">{title}</h3>
      <a href={siteLink}>
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
        <p className="text-lg font-bold">
          {githubLink && siteLink ? "Links:" : "Link:"}
        </p>
        <a href={siteLink} target="_blank">
          <img loading="lazy" src={websiteSVG} alt="website SVG" />
        </a>

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
