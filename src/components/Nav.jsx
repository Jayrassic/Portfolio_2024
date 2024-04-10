import { motion } from "framer-motion";
import PropTypes from "prop-types";
import githubSVG from "../assets/SVG/github.svg";
import emailSVG from "../assets/SVG/email.svg";

const Nav = ({ viewObject }) => {
  function scrollHandler(e) {
    e.preventDefault();
    const target = e.target;
    const id = target.getAttribute("href").replace("#", "");
    const element = document.getElementById(id);
    element.scrollIntoView(true, {
      behavior: "smooth",
    });
  }

  const { home, about, skills, personal, client, contact } = viewObject;

  return (
    <nav
      className="font-figtree flex h-20 justify-evenly bg-emerald-400 p-1 text-center sm:sticky sm:top-0 sm:col-span-2 sm:h-screen sm:flex-col sm:p-3
    "
    >
      <h1
        className={
          home.state
            ? "m-1 self-center p-1 text-4xl font-extrabold text-slate-100"
            : "m-1 self-center p-1 text-4xl font-extrabold"
        }
        onClick={(e) => scrollHandler(e)}
      >
        <a href="#home">Jason Gaglio</a>
      </h1>
      <motion.ul
        className="my-8 hidden flex-col items-center gap-4 text-center font-bold text-neutral-800 sm:flex "
        onClick={(e) => scrollHandler(e)}
      >
        <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
          <a
            className={about.state ? "text-2xl text-slate-100" : "text-2xl"}
            href="#about"
          >
            About Me
          </a>
        </motion.li>
        <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
          <a
            className={skills.state ? "text-2xl text-slate-100" : "text-2xl"}
            href="#"
          >
            Skills
          </a>
        </motion.li>
        <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
          <a
            className={personal.state ? "text-2xl text-slate-100" : "text-2xl"}
            href="#personal"
          >
            Personal Projects
          </a>
        </motion.li>
        <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
          <a
            className={client.state ? "text-2xl text-slate-100" : "text-2xl"}
            href="#client"
          >
            Client Projects
          </a>
        </motion.li>
        <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.12 }}>
          <a
            className={contact.state ? "text-2xl text-slate-100" : "text-2xl"}
            href="#contact"
          >
            Contact
          </a>
        </motion.li>
      </motion.ul>
      <div className="hidden justify-evenly sm:flex">
        <a href="#">
          <motion.img
            whileHover={{ x: 4, scale: 1.12 }}
            src={githubSVG}
            alt="github logo"
          />
        </a>
        <a href="#">
          <motion.img
            whileHover={{ x: 4, scale: 1.12 }}
            src={emailSVG}
            alt="mail envelop"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  viewObject: PropTypes.object.isRequired,
};
