import { motion } from "framer-motion";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import PersonalProjects from "./views/PersonalProjects";
import ClientProjects from "./views/ClientProjects";
import Contact from "./views/Contact";
import githubSVG from "./assets/SVG/github.svg";
import emailSVG from "./assets/SVG/email.svg";
import { useInView } from "react-intersection-observer";

function App() {
  const [homeRef, homeVis] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutVis] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsVis] = useInView({ threshold: 0.5 });
  const [personalRef, personalVis] = useInView({ threshold: 0.5 });
  const [clientRef, clientVis] = useInView({ threshold: 0.5 });
  const [contactRef, contactVis] = useInView({ threshold: 0.5 });

  function scrollHandler(e) {
    e.preventDefault();
    const target = e.target;
    const id = target.getAttribute("href").replace("#", "");
    const element = document.getElementById(id);
    element.scrollIntoView(true, {
      behavior: "smooth",
    });
  }

  return (
    <div className=" max-h-screen min-h-screen bg-slate-100 sm:grid sm:grid-cols-10">
      <nav
        className="font-figtree flex h-20 justify-evenly bg-emerald-400 p-1 text-center sm:sticky sm:top-0 sm:col-span-2 sm:h-screen sm:flex-col sm:p-3
        "
      >
        <h1
          className={
            homeVis
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
              className={aboutVis ? "text-2xl text-slate-100" : "text-2xl"}
              href="#about"
            >
              About Me
            </a>
          </motion.li>
          <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
            <a
              className={skillsVis ? "text-2xl text-slate-100" : "text-2xl"}
              href="#"
            >
              Skills
            </a>
          </motion.li>
          <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
            <a
              className={personalVis ? "text-2xl text-slate-100" : "text-2xl"}
              href="#personal"
            >
              Personal Projects
            </a>
          </motion.li>
          <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
            <a
              className={clientVis ? "text-2xl text-slate-100" : "text-2xl"}
              href="#client"
            >
              Client Projects
            </a>
          </motion.li>
          <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.12 }}>
            <a
              className={contactVis ? "text-2xl text-slate-100" : "text-2xl"}
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

      <div
        className={`font-figtree h-[calc(100vh-5rem)] snap-y snap-mandatory scroll-p-0 overflow-x-hidden overflow-y-scroll sm:col-span-8 sm:max-h-screen sm:min-h-screen`}
      >
        <div
          ref={homeRef}
          id="home"
          className={`flex h-full snap-start snap-always justify-center align-middle sm:max-h-screen sm:min-h-screen`}
        >
          <Home />
        </div>
        <div
          ref={aboutRef}
          id="about"
          className={`h-full snap-start snap-always sm:max-h-screen sm:min-h-screen`}
        >
          <AboutMe />
        </div>

        <div
          ref={skillsRef}
          id="skills"
          className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
        >
          <Skills />
        </div>
        <div
          ref={personalRef}
          id="personal"
          className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
        >
          <PersonalProjects />
        </div>
        <div
          ref={clientRef}
          id="client"
          className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
        >
          <ClientProjects />
        </div>
        <div
          ref={contactRef}
          id="contact"
          className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
