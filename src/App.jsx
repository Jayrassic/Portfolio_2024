import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";

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
    <div className="grid grid-cols-10 bg-slate-300">
      <nav className="col-span-2 bg-green-700 h-screen sticky top-1 self-start">
        <h1 className="p-1 m-1" onClick={(e) => scrollHandler(e)}>
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
            <a className="text-xl" href="#other">
              Other Link
            </a>
          </li>
        </motion.ul>
      </nav>

      <div className="col-span-8 max-h-screen  overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-py-0">
        <div
          id="home"
          className=" bg-red-400 min-h-screen snap-always snap-start"
        ></div>
        <div
          id="about"
          className=" bg-emerald-400 snap-always snap-start min-h-screen"
        >
          <AboutMe />
        </div>
        <div
          id="personal"
          className=" bg-blue-400 min-h-screen snap-always snap-start"
        >
          <motion.p
            className="p-3"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
            viewport={{ amount: 0.1 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            quos debitis! Placeat officia incidunt blanditiis aperiam architecto
            suscipit maiores, reprehenderit animi, atque provident mollitia
            labore inventore temporibus beatae. Quam, totam. Iste alias at
            praesentium eligendi corrupti nisi quasi culpa neque ut vel,
            voluptatibus quibusdam magnam incidunt quod, impedit enim unde
            facilis illo ipsa temporibus maxime consequuntur, quo placeat quia!
            Quam!
          </motion.p>
        </div>
        <div
          id="other"
          className=" bg-yellow-400 h-screen snap-always snap-start"
        ></div>
      </div>

      {/* <ScrollContainer className=" col-span-8 bg-red-400">
        <ScrollPage>
          <div>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <h1>Test #1</h1>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h1>Test #2</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer> */}
    </div>
  );
}

export default App;
