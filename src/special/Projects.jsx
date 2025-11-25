import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  const projects = [
    {
      title: "AI ChatBot Platform",
      description:
        "Full-stack AI chatbot with NLP, multilingual support, and contextual memory.",
      tech: ["React", "Python", "TensorFlow", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Real-time analytics dashboard for sales, inventory, and customer behaviour insights.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Chart.js"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Image Recognition System",
      description:
        "Deep learning model for object detection & classification with 95% accuracy.",
      tech: ["Python", "PyTorch", "OpenCV", "Flask"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management with realtime sync & team messaging.",
      tech: ["React", "Express", "Socket.io", "MongoDB"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Weather Prediction ML",
      description:
        "Machine learning model predicting weather patterns using historical data.",
      tech: ["Python", "Scikit-learn", "Pandas", "Docker"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const progressBar = progressBarRef.current;

    gsap.from(".projects-title", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power3.out",
    });

    // Only enable horizontal scroll on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth + 150),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${container.scrollWidth}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            gsap.to(progressBar, {
              scaleX: self.progress,
              duration: 0.2,
              ease: "none",
            });
          },
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen lg:h-screen w-full bg-black relative overflow-hidden"
    >
      {/* Progress Bar - Desktop only */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] origin-left scale-x-0"
        />
      </div>

      {/* Title */}
      <div className="absolute top-[20px] lg:top-[50px] left-4 md:left-10 z-50 max-w-[90%] lg:max-w-none">
        <div className="bg-gradient-to-r from-black via-black/95 to-transparent pr-8 lg:pr-0 py-3 lg:py-0 rounded-r-xl lg:rounded-none">
          <h2 className="projects-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            My <span className="text-[#4DB8FF]">Projects</span>
          </h2>
          <p className="hidden lg:block text-gray-400 mt-3 text-lg">
            Scroll horizontally to explore →
          </p>
          <p className="lg:hidden text-gray-400 mt-1 text-xs sm:text-sm">
            Swipe down to see all projects
          </p>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="h-full flex lg:flex-row flex-col items-center gap-6 lg:gap-10 px-4 md:px-10 pt-28 sm:pt-32 lg:pt-[120px] pb-10 lg:pb-0 overflow-y-auto lg:overflow-visible"
        style={{ marginLeft: "0", maxHeight: "100vh" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card w-full max-w-[340px] lg:min-w-[340px] h-[340px] flex-shrink-0 transform transition-all duration-300 hover:scale-[1.05]"
          >
            <div
              className={`h-full bg-gradient-to-br ${project.color} p-[2px] rounded-2xl shadow-[0_0_20px_-4px_#4DB8FF]`}
            >
              <div className="h-full bg-black/80 rounded-2xl backdrop-blur-xl p-5 flex flex-col justify-between border border-white/10 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-[#4DB8FF] rounded-lg text-[10px] font-semibold shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-2 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-xs">
                    View Live
                  </button>

                  <button className="flex-1 px-2 py-2 rounded-xl font-semibold border border-[#4DB8FF] text-[#4DB8FF] hover:bg-[#4DB8FF] hover:text-black transition-all duration-300 text-xs">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
