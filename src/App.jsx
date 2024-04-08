import { motion } from "framer-motion";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import PersonalProjects from "./views/PersonalProjects";
import ClientProjects from "./views/ClientProjects";
import Contact from "./views/Contact";
import githubSVG from "./assets/SVG/github.svg";
import emailSVG from "./assets/SVG/email.svg";
import { useInView } from "react-intersection-observer";

function App() {
  const [homeRef, homeVis] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutVis] = useInView({ threshold: 0.5 });
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
    <div className="grid grid-cols-10 bg-slate-100">
      <nav className="font-figtree sticky col-span-2 flex h-screen flex-col justify-evenly self-start bg-emerald-400 p-3 text-center">
        <h1
          className={
            homeVis
              ? "m-1 p-1 text-4xl font-extrabold text-slate-100"
              : "m-1 p-1 text-4xl font-extrabold"
          }
          onClick={(e) => scrollHandler(e)}
        >
          <a href="#home">Jason Gaglio</a>
        </h1>
        <motion.ul
          className="my-8 flex flex-col items-center gap-4 text-center font-bold text-neutral-800"
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
          {/* <motion.li className="w-fit" whileHover={{ x: 4, scale: 1.2 }}>
            <a className="text-2xl" href="#">
              Skills
            </a>
          </motion.li> */}
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
        <div className="flex justify-evenly">
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

      <div className="font-figtree col-span-8 max-h-screen snap-y snap-mandatory scroll-py-0 overflow-x-hidden overflow-y-scroll">
        <div
          ref={homeRef}
          id="home"
          className="min-h-screen snap-start snap-always"
        >
          <Home />
        </div>
        <div
          ref={aboutRef}
          id="about"
          className="min-h-screen snap-start snap-always"
        >
          <AboutMe />
        </div>
        <div
          ref={personalRef}
          id="personal"
          className="min-h-screen snap-start snap-always"
        >
          <PersonalProjects />
        </div>
        <div
          ref={clientRef}
          id="client"
          className=" h-screen snap-start snap-always"
        >
          <ClientProjects />
        </div>
        <div
          ref={contactRef}
          id="contact"
          className=" h-screen snap-start snap-always"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
