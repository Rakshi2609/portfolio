import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const mobileCardsRef = useRef([]);

  const projects = [
    {
      title: "Task Tapper",
      description:
        "Tracks all your tasks and even the tasks you assign to others. Sends daily summary mails and supports Twilio notifications.",
      tech: ["React", "Express", "MongoDB", "Node.js","Nodemailer"],
      color: "from-blue-500 to-white",
      theme: {
        glow: "#4DB8FF",
        tag: "#4DB8FF",
        button: "#4DB8FF",
      },
      live: "https://task-tapper-blush.vercel.app",
      source: "https://github.com/Rakshi2609/task-tapper",
    },
    {
      title: "ShopHub",
      description:
        "A real-time shopping website where users can upload and manage their own products.",
      tech: ["MERN", "Pixel-AI", "Socket.io"],
      color: "from-orange-500 to-white",
      theme: {
        glow: "#FFAA55",
        tag: "#FFAA55",
        button: "#FFAA55",
      },
      live: "https://shop-hub-1v4j.vercel.app",
      source: "https://github.com/Rakshi2609/ShopHub",
    },
    {
      title: "Dr Help 2",
      description:
        "Connects doctors and patients in real time. Doctors can access digital medical records instantly. Replaces prescription slips.",
      tech: ["React", "Express", "MongoDB", "WebRTC"],
      color: "from-green-500 to-black",
      theme: {
        glow: "#19FFB0",
        tag: "#19FFB0",
        button: "#19FFB0",
      },
      live: "https://dr-help-2.vercel.app",
      source: "https://github.com/Rakshi2609/Dr_Help_2",
    },
    {
      title: "AI Code Reviewer",
      description:
        "Gemini-powered multi-language code reviewer with 3 modes of deep analysis & correction.",
      tech: ["React", "Gemini API", "JavaScript","FastAPI"],
      color: "from-purple-500 via-pink-500 to-violet-600",
      theme: {
        glow: "#E75CFF",
        tag: "#E75CFF",
        button: "#E75CFF",
      },
      live: "https://ai-code-reviewer-livid-sigma.vercel.app",
      source: "https://github.com/Rakshi2609/AI_CODE_REVIEWER",
    },
    {
      title: "Career Chatbot",
      description:
        "Career-focused AI chatbot powered by Gemini & Mistral with controlled context—answers only career-related queries.",
      tech: ["Next.js", "Gemini API", "Mistral", "Typescript"],
      color: "from-blue-900 to-gray-500",
      theme: {
        glow: "#3DA6FF",
        tag: "#3DA6FF",
        button: "#3DA6FF",
      },
      live: "https://career-chatbot-ruby.vercel.app",
      source: "https://github.com/Rakshi2609/career-chatbot",
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

    const mm = gsap.matchMedia();

    // Mobile animations - alternating left/right
    mm.add("(max-width: 1023px)", () => {
      mobileCardsRef.current.forEach((card, index) => {
        if (card) {
          const isEven = index % 2 === 0;

          gsap.set(card, {
            x: isEven ? -100 : 100,
            opacity: 0,
          });

          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=20",
              end: "bottom bottom",
              toggleActions: "play none none reverse",
            },
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      });
    });

    // Desktop horizontal scroll
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
      className="min-h-screen lg:h-screen w-full bg-black relative overflow-hidden lg:overflow-visible"
    >
      <style>{`
        .source-code-btn:hover {
          background-color: var(--hover-bg) !important;
          color: black !important;
        }
      `}</style>
      {/* Progress Bar - Desktop only */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] origin-left scale-x-0"
        />
      </div>

      {/* Title */}
      <div className="absolute top-[20px] lg:top-[50px] left-4 md:left-10 z-50 max-w-[90%] lg:max-w-none">
        <div className="bg-gradient-to-r from-black via-black/95 to-transparent pr-8 lg:pr-0 py-3 lg:py-0 rounded-r-xl">
          <h2 className="projects-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            My <span className="text-[#4DB8FF]">Projects</span>
          </h2>
          {/* <p className="hidden lg:block text-gray-400 mt-3 text-lg">
            Scroll horizontally to explore →
          </p> */}
          {/* <p className="lg:hidden text-gray-400 mt-1 text-xs sm:text-sm">
            Swipe down to see all projects
          </p> */}
        </div>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="h-full flex lg:flex-row flex-col items-center gap-6 lg:gap-10 px-4 md:px-10 pt-28 sm:pt-32 lg:pt-[120px] pb-10 lg:pb-0 lg:overflow-visible overflow-y-auto"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (mobileCardsRef.current[index] = el)}
            className="project-card w-full max-w-[340px] lg:min-w-[340px] h-[340px] flex-shrink-0 transform transition-all duration-300 hover:scale-[1.05]"
          >
            <div
              className={`h-full bg-gradient-to-br ${project.color} p-[2px] rounded-2xl`}
              style={{ boxShadow: `0 0 20px -4px ${project.theme.glow}` }}
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
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-semibold shadow"
                        style={{ color: project.theme.tag }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-2 py-2 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-xs text-center"
                  >
                    View Live
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="source-code-btn flex-1 px-2 py-2 rounded-xl font-semibold transition-all duration-300 text-xs text-center"
                    style={{
                      zIndex:100,
                      color: project.theme.button,
                      border: `1px solid ${project.theme.button}`,
                      '--hover-bg': project.theme.button,
                    }}
                  >
                    Source Code
                  </a>
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