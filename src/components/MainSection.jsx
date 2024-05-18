import Home from "../views/Home";
import AboutMe from "../views/AboutMe";
import Skills from "../views/Skills";
import PersonalProjects from "../views/PersonalProjects";
import ClientProjects from "../views/ClientProjects";
import Contact from "../views/Contact";
import PropTypes from "prop-types";
import ChatPage from "../views/ChatPage";

const MainSection = ({ viewObject }) => {
  const { home, about, skills, personal, client, contact, ai } = viewObject;

  return (
    <section
      className={`h-[calc(100svh-5rem)] snap-y snap-mandatory scroll-p-0 overflow-x-hidden overflow-y-scroll font-figtree sm:col-span-8 sm:max-h-svh sm:min-h-svh`}
    >
      <div
        ref={home.ref}
        id="home"
        className={`h-full snap-start snap-always sm:max-h-svh sm:min-h-svh`}
      >
        <Home />
      </div>
      <div
        ref={about.ref}
        id="about"
        className={`h-full snap-start snap-always sm:max-h-svh sm:min-h-svh`}
      >
        <AboutMe />
      </div>

      <div
        ref={skills.ref}
        id="skills"
        className="h-full snap-start snap-always sm:max-h-svh sm:min-h-svh"
      >
        <Skills />
      </div>
      <div
        ref={personal.ref}
        id="personal"
        className="h-full snap-start snap-always sm:max-h-svh sm:min-h-svh"
      >
        <PersonalProjects />
      </div>
      <div
        ref={client.ref}
        id="client"
        className="h-full snap-start snap-always sm:max-h-svh sm:min-h-svh"
      >
        <ClientProjects />
      </div>
      <div
        ref={ai.ref}
        id="ai"
        className={`h-full snap-start snap-always sm:max-h-svh sm:min-h-svh`}
      >
        <ChatPage />
      </div>
      <div
        ref={contact.ref}
        id="contact"
        className="h-full snap-start snap-always sm:max-h-svh sm:min-h-svh"
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
