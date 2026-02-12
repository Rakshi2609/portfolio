import { Toaster } from "react-hot-toast";

import About from "./special/About";
import Name from "./special/Name";
import Projects from "./special/Projects";
import Experience from "./special/Experience";
import Education from "./special/Education";
import Connect from "./special/Connect";
import CustomCursor from "./components/CustomCursor";
import FloatingNav from "./components/FloatingNav";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <CustomCursor />
      <FloatingNav />
      <ScrollProgress />
      <div className="w-full bg-black text-white overflow-x-hidden">
        <Name />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Connect />
      </div>
    </>
  );
}
