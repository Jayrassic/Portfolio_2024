import { motion } from "framer-motion";
import AboutMe from "./views/AboutMe";
import PersonalProjects from "./views/PersonalProjects";
import ClientProjects from "./views/ClientProjects";
import Links from "./components/Links";

function App() {
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
      <nav className="sticky top-1 col-span-2 h-screen self-start bg-emerald-400">
        <h1 className="m-1 p-1" onClick={(e) => scrollHandler(e)}>
          <a href="#home">Jason Gaglio</a>
        </h1>
        <motion.ul
          className="flex flex-col gap-2 text-center"
          onClick={(e) => scrollHandler(e)}
        >
          <li>
            <a className="text-xl" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-xl" href="#personal">
              Personal Projects
            </a>
          </li>
          <li>
            <a className="text-xl" href="#client">
              Client Projects
            </a>
          </li>
          <li>
            <a className="text-xl" href="#links">
              Resume + Github
            </a>
          </li>
          <li>
            <a className="text-xl" href="#">
              Contact
            </a>
          </li>
        </motion.ul>
      </nav>

      <div className="col-span-8 max-h-screen  snap-y snap-mandatory scroll-py-0 overflow-x-hidden overflow-y-scroll">
        <div
          id="home"
          className="min-h-screen snap-start snap-always bg-red-400"
        ></div>
        <div id="about" className="min-h-screen snap-start snap-always">
          <AboutMe />
        </div>
        <div id="personal" className="min-h-screen snap-start snap-always">
          <PersonalProjects />
        </div>
        <div id="client" className=" h-screen snap-start snap-always">
          <ClientProjects />
        </div>
        <div id="links" className=" h-screen snap-start snap-always">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
