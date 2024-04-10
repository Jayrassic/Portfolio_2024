import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import PersonalProjects from "./views/PersonalProjects";
import ClientProjects from "./views/ClientProjects";
import Contact from "./views/Contact";
import { useInView } from "react-intersection-observer";
import Nav from "./components/Nav";

function App() {
  const [homeRef, homeViewState] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutViewState] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsViewState] = useInView({ threshold: 0.5 });
  const [personalRef, personalViewState] = useInView({ threshold: 0.5 });
  const [clientRef, clientViewState] = useInView({ threshold: 0.5 });
  const [contactRef, contactViewState] = useInView({ threshold: 0.5 });

  const stateArray = [
    homeViewState,
    aboutViewState,
    skillsViewState,
    personalViewState,
    clientViewState,
    contactViewState,
  ];

  const inViewObject = {
    home: {
      ref: homeRef,
      state: homeViewState,
    },
    about: {
      ref: aboutRef,
      state: aboutViewState,
    },
    skills: {
      ref: skillsRef,
      state: skillsViewState,
    },
    personal: {
      ref: personalRef,
      state: personalViewState,
    },
    client: {
      ref: clientRef,
      state: clientViewState,
    },
    contact: {
      ref: contactRef,
      state: contactViewState,
    },
  };

  return (
    <main className=" max-h-screen min-h-screen bg-slate-100 sm:grid sm:grid-cols-10">
      <Nav viewObject={inViewObject} />
      <section
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
      </section>
    </main>
  );
}

export default App;
