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
        "Full-stack chatbot with NLP capabilities, supporting multiple languages and context-aware responses.",
      tech: ["React", "Python", "TensorFlow", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Real-time analytics dashboard for tracking sales, inventory, and customer behavior patterns.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Chart.js"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Image Recognition System",
      description:
        "Deep learning model for object detection and classification with 95% accuracy rate.",
      tech: ["Python", "PyTorch", "OpenCV", "Flask"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team communication features.",
      tech: ["React", "Express", "Socket.io", "MongoDB"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Weather Prediction ML",
      description:
        "Machine learning model predicting weather patterns using historical climate data analysis.",
      tech: ["Python", "Scikit-learn", "Pandas", "Docker"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(".project-card");
    const progressBar = progressBarRef.current;

    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth + 100),
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
            duration: 0.1,
            ease: "none"
          });
        }
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-black relative overflow-hidden"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="absolute top-20 left-12 z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          My <span className="text-[#4DB8FF]">Projects</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">Scroll to explore →</p>
      </div>

      <div
        ref={containerRef}
        className="h-full flex items-center gap-8 pl-5 pr-20 pt-40"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card min-w-[600px] h-[500px] flex-shrink-0"
            style={{ marginLeft: index === 0 ? '20px' : '30px' }}
          >
            <div
              className={`h-full bg-gradient-to-br ${project.color} p-[2px] rounded-2xl shadow-[0_0_40px_-8px_#4DB8FF]`}
            >
              <div className="h-full bg-black/80 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-between border border-white/10 shadow-xl">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-[#4DB8FF] rounded-lg text-sm font-semibold shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 rounded-xl font-bold bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20">
                    View Live
                  </button>

                  <button className="flex-1 px-6 py-3 rounded-xl font-bold border border-[#4DB8FF] text-[#4DB8FF] hover:bg-[#4DB8FF] hover:text-black transition-all duration-300">
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
