import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import resumePDF from "/jason_gaglio_resume.pdf";
import githubSVG from "../assets/SVG/github.svg";
import emailSVG from "../assets/SVG/email.svg";
import PropTypes from "prop-types";
import HamburgerButton from "./Hamburger";

const Nav = ({ viewObject }) => {
  const { home, about, skills, personal, client, contact, ai } = viewObject;

  const [showMenu, setShowMenu] = useState(false);

  let needMenu = window.innerWidth <= 640;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 640) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    });

    return window.addEventListener("resize", () => {
      if (window.innerWidth <= 640) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    });
  }, []);

  function scrollHandler(e) {
    e.preventDefault();
    const target = e.target;
    const id = target.getAttribute("href").replace("#", "");
    const element = document.getElementById(id);
    setShowMenu(false);
    element.scrollIntoView(true, {
      behavior: "smooth",
    });
  }

  return (
    <nav className=" z-30 flex h-20 justify-evenly text-center font-figtree shadow-[0px_3px_5px_0px_rgb(0,0,0,0.4)] sm:sticky sm:top-0 sm:col-span-2 sm:h-svh sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:bg-emerald-400 sm:shadow-[3px_0px_5px_0px_rgb(0,0,0,0.5)]">
      <div className="z-20 flex flex-grow items-center justify-around bg-emerald-400 p-1 shadow-md sm:flex-grow-0 sm:p-3 sm:shadow-none ">
        <h1
          className={`mt-2 self-center pt-1 text-3xl font-extrabold ${home.state ? "text-slate-100" : ""}`}
          onClick={(e) => scrollHandler(e)}
        >
          <a href="#home">Jason Gaglio</a>
        </h1>
        <HamburgerButton state={showMenu} setState={setShowMenu} />
      </div>

      <motion.div
        className={`absolute top-[5rem] z-10 flex w-full flex-col items-end gap-2 rounded-b-lg bg-emerald-300 py-4 text-center font-bold text-neutral-800 shadow-[0px_3px_5px_0px_rgb(0,0,0,0.4)] sm:static sm:flex-grow  sm:items-center sm:justify-around sm:gap-4 sm:bg-emerald-400 sm:py-0 sm:shadow-none`}
        initial={
          needMenu
            ? { y: showMenu ? 0 : -400, opacity: 0 }
            : { y: 0, opacity: 1 }
        }
        animate={
          needMenu
            ? { y: showMenu ? 0 : -400, opacity: 1 }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 0.5 }}
      >
        <motion.ul
          className={`flex flex-col items-end gap-2 px-8 py-2 text-center font-bold text-neutral-800 sm:relative sm:items-center sm:gap-4 sm:bg-emerald-400 sm:shadow-none`}
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
              href="#skills"
            >
              Skills
            </a>
          </motion.li>
          <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
            <a
              className={
                personal.state ? "text-2xl text-slate-100" : "text-2xl"
              }
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
          <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
            <a
              className={ai.state ? "text-2xl text-slate-100" : "text-2xl"}
              href="#ai"
            >
              AI Assistant
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
        <motion.a
          className="px-8 py-2 text-lg text-slate-100"
          whileHover={{ x: 4, scale: 1.2 }}
          href={resumePDF}
          download="Jason-Gaglio-Resume"
          target="_blank"
        >
          Download my Resume
        </motion.a>
        <div className="flex gap-4 px-8 py-2 sm:w-full sm:justify-evenly">
          <a href="https://github.com/Jayrassic">
            <motion.img
              width="35px"
              whileHover={{ x: 4, scale: 1.12 }}
              src={githubSVG}
              alt="github logo"
              loading="lazy"
            />
          </a>
          <a href="mailto:jasongaglio@jasongaglio.com">
            <motion.img
              width="35px"
              whileHover={{ x: 4, scale: 1.12 }}
              src={emailSVG}
              alt="mail envelop"
              loading="lazy"
            />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  viewObject: PropTypes.object.isRequired,
};
