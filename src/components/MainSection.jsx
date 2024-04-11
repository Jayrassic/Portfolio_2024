import Home from "../views/Home";
import AboutMe from "../views/AboutMe";
import Skills from "../views/Skills";
import PersonalProjects from "../views/PersonalProjects";
import ClientProjects from "../views/ClientProjects";
import Contact from "../views/Contact";
import PropTypes from "prop-types";

const MainSection = ({ viewObject }) => {
  const { home, about, skills, personal, client, contact } = viewObject;

  return (
    <section
      className={`h-[calc(100vh-5rem)] snap-y snap-mandatory scroll-p-0 overflow-x-hidden overflow-y-scroll font-figtree sm:col-span-8 sm:max-h-screen sm:min-h-screen`}
    >
      <div
        ref={home.ref}
        id="home"
        className={`flex h-full snap-start snap-always justify-center align-middle sm:max-h-screen sm:min-h-screen`}
      >
        <Home />
      </div>
      <div
        ref={about.ref}
        id="about"
        className={`h-full snap-start snap-always sm:max-h-screen sm:min-h-screen`}
      >
        <AboutMe />
      </div>

      <div
        ref={skills.ref}
        id="skills"
        className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
      >
        <Skills />
      </div>
      <div
        ref={personal.ref}
        id="personal"
        className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
      >
        <PersonalProjects />
      </div>
      <div
        ref={client.ref}
        id="client"
        className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
      >
        <ClientProjects />
      </div>
      <div
        ref={contact.ref}
        id="contact"
        className="h-full snap-start snap-always sm:max-h-screen sm:min-h-screen"
      >
        <Contact />
      </div>
    </section>
  );
};

MainSection.propTypes = {
  viewObject: PropTypes.object.isRequired,
};

export default MainSection;
