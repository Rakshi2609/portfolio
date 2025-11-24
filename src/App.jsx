import About from "./special/About";
import Name from "./special/Name";
import Projects from "./special/Projects";
import Experience from "./special/Experience";
import Education from "./special/Education";
// import Contact from "./special/Contact";
import Connect from "./special/Connect";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="w-full bg-black text-white overflow-x-hidden">
        <Name />
        <About />
        <Projects />
        <Experience />
        <Education />
        {/* <Contact /> */}
        <Connect />
      </div>
    </>
  );
}
