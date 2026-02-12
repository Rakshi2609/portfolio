import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionParticles from "@/components/ui/section-particles";

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
      tech: ["React", "Express", "MongoDB", "Node.js", "Nodemailer"],
      theme: {
        glow: "#4DB8FF",
        tag: "#4DB8FF",
        button: "#4DB8FF",
        gradient: "from-[#4DB8FF]/20 to-[#4DB8FF]/5",
      },
      live: "https://task-tapper-blush.vercel.app",
      source: "https://github.com/Rakshi2609/task-tapper",
    },
    {
      title: "ShopHub",
      description:
        "A real-time shopping website where users can upload and manage their own products.",
      tech: ["MERN", "Pixel-AI", "Socket.io"],
      theme: {
        glow: "#FFAA55",
        tag: "#FFAA55",
        button: "#FFAA55",
        gradient: "from-[#FFAA55]/20 to-[#FFAA55]/5",
      },
      live: "https://shop-hub-1v4j.vercel.app",
      source: "https://github.com/Rakshi2609/ShopHub",
    },
    {
      title: "Visa Verse",
      description:
        "Check's visa requirements for any country with a simple search. Powered by a custom-built ML and AI(LLM) summarization.",
      tech: ["React", "Express", "MongoDB", "FastAPI", "Gemini API", "Sciket-learn"],
      theme: {
        glow: "#4F46E5",
        tag: "#818CF8",
        button: "#818CF8",
        gradient: "from-[#4F46E5]/20 to-[#4F46E5]/5",
      },
      live: "https://visa-verse-six.vercel.app",
      source: "https://github.com/Rakshi2609/Visa_Verse",
    },
    {
      title: "AI Code Reviewer",
      description:
        "Gemini-powered multi-language code reviewer with 3 modes of deep analysis & correction.",
      tech: ["React", "Gemini API", "JavaScript", "FastAPI"],
      theme: {
        glow: "#E75CFF",
        tag: "#E75CFF",
        button: "#E75CFF",
        gradient: "from-[#E75CFF]/20 to-[#E75CFF]/5",
      },
      live: "https://ai-code-reviewer-livid-sigma.vercel.app",
      source: "https://github.com/Rakshi2609/AI_CODE_REVIEWER",
    },
    {
      title: "Career Chatbot",
      description:
        "Career-focused AI chatbot powered by Gemini & Mistral with controlled context—answers only career-related queries.",
      tech: ["Next.js", "Gemini API", "Mistral", "Typescript"],
      theme: {
        glow: "#3DA6FF",
        tag: "#3DA6FF",
        button: "#3DA6FF",
        gradient: "from-[#3DA6FF]/20 to-[#3DA6FF]/5",
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
      id="projects"
      className="min-h-screen lg:h-screen w-full bg-black relative overflow-hidden lg:overflow-visible noise-overlay"
    >
      {/* Subtle particle background */}
      <SectionParticles color="#4DB8FF" particleCount={80} speed={0.25} />

      <style>{`
        .source-code-btn:hover {
          background-color: var(--hover-bg) !important;
          color: black !important;
        }
      `}</style>

      {/* Progress Bar - Desktop only */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-[2px] bg-white/5 z-20">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] origin-left scale-x-0"
          style={{ boxShadow: "0 0 15px rgba(77, 184, 255, 0.5)" }}
        />
      </div>

      {/* Title */}
      <div className="absolute top-[20px] lg:top-[50px] left-4 md:left-10 z-50 max-w-[90%] lg:max-w-none">
        <div className="bg-gradient-to-r from-black via-black/95 to-transparent pr-8 lg:pr-0 py-3 lg:py-0 rounded-r-xl">
          <p
            className="hidden lg:block text-xs tracking-[0.4em] uppercase mb-2"
            style={{ fontFamily: "var(--font-body)", color: "rgba(77, 184, 255, 0.5)" }}
          >
            Featured work
          </p>
          <h2
            className="projects-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My <span className="text-[#4DB8FF] glow-text">Projects</span>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="h-full flex lg:flex-row flex-col items-center gap-6 lg:gap-10 px-4 md:px-10 pt-28 sm:pt-32 lg:pt-[120px] pb-10 lg:pb-0 lg:overflow-visible overflow-y-auto relative z-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (mobileCardsRef.current[index] = el)}
            className="project-card w-full max-w-[340px] lg:min-w-[500px] lg:max-w-[420px] h-[340px] lg:h-[500px] flex-shrink-0 transform transition-all duration-300 hover:scale-[1.03]"
          >
            <div
              className="h-full p-[1px] rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${project.theme.glow}40, transparent 50%, ${project.theme.glow}20)`,
                boxShadow: `0 0 30px -8px ${project.theme.glow}30`
              }}
            >
              <div className="h-full bg-black/90 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between border border-white/5 relative overflow-hidden group">

                {/* Hover glow effect */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                  style={{ background: project.theme.glow }}
                />

                <div className="relative z-10">
                  {/* Project number */}
                  <span
                    className="text-xs font-medium tracking-[0.3em] uppercase mb-3 block"
                    style={{ color: `${project.theme.tag}60`, fontFamily: "var(--font-body)" }}
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-lg text-[11px] sm:text-xs lg:text-sm font-medium"
                        style={{ color: `${project.theme.tag}cc`, fontFamily: "var(--font-body)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-3 relative z-10">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-3 py-2.5 rounded-xl font-semibold text-white/70 hover:text-white glass-panel hover:bg-white/[0.08] transition-all duration-300 text-xs sm:text-sm lg:text-base text-center"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    View Live ↗
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="source-code-btn flex-1 px-3 py-2.5 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base text-center"
                    style={{
                      zIndex: 100,
                      color: project.theme.button,
                      border: `1px solid ${project.theme.button}30`,
                      '--hover-bg': project.theme.button,
                      fontFamily: "var(--font-display)",
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