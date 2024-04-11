import { useInView } from "react-intersection-observer";
import Nav from "./components/Nav";
import MainSection from "./components/MainSection";

function App() {
  const [homeRef, homeViewState] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutViewState] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsViewState] = useInView({ threshold: 0.5 });
  const [personalRef, personalViewState] = useInView({ threshold: 0.5 });
  const [clientRef, clientViewState] = useInView({ threshold: 0.5 });
  const [contactRef, contactViewState] = useInView({ threshold: 0.5 });

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
      <MainSection viewObject={inViewObject} />
    </main>
  );
}

export default App;
