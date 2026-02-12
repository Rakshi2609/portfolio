import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionParticles from "@/components/ui/section-particles";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "Vellore Institute of Technology",
    role: "B.Tech",
    description:
      "Studying Computer Science Engineering with focus on AI, Software Engineering, Machine Learning, and Full-Stack development.",
    startDate: "2024",
    endDate: "Present",
  },
  {
    title: "Dr. NSAM",
    role: "PUC / Higher Secondary (Science)",
    description:
      "Studied Physics, Chemistry, Maths, and Computer Science. Built strong fundamentals and problem-solving ability.",
    startDate: "2022",
    endDate: "2024",
  },
  {
    title: "St. Philomena's Public School",
    role: "Schooling (1st–10th)",
    description:
      "Completed schooling from 2009 to 2022. Built academic foundations, discipline, communication and leadership skills.",
    startDate: "2009",
    endDate: "2022",
  },
];

const Education = () => {
  const [selected, setSelected] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const leftListRef = useRef(null);
  const rightPanelRef = useRef(null);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Mobile animations
    mm.add("(max-width: 1023px)", () => {
      mobileCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=20",
              end: "bottom bottom",
              toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out"
          });
        }
      });
    });

    // Desktop animations
    mm.add("(min-width: 1024px)", () => {
      gsap.from(leftListRef.current, {
        scrollTrigger: {
          trigger: leftListRef.current,
          start: "top bottom-=20",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(rightPanelRef.current, {
        scrollTrigger: {
          trigger: rightPanelRef.current,
          start: "top bottom-=20",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    return () => mm.revert();
  }, []);

  const toggleMobile = (index) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="education" className="min-h-fit lg:h-screen bg-black pt-4 pb-4 lg:pt-6 lg:pb-2 px-8 text-white relative overflow-hidden noise-overlay">
      {/* Subtle particle background */}
      <SectionParticles color="#4DB8FF" particleCount={70} speed={0.25} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="mb-6 lg:mb-10 text-left pl-0 md:pl-10">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-2"
            style={{ fontFamily: "var(--font-body)", color: "rgba(77, 184, 255, 0.5)" }}
          >
            My journey
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[#4DB8FF] glow-text">Education</span>
          </h2>
        </div>

        {/* MOBILE DROPDOWN VERSION */}
        <div className="lg:hidden flex flex-col gap-3">
          {educationData.map((edu, index) => {
            const isExpanded = expandedMobile === index;

            return (
              <div
                key={index}
                ref={(el) => (mobileCardsRef.current[index] = el)}
                className="glass-panel overflow-hidden transition-all duration-300"
              >
                {/* Dropdown Header */}
                <div
                  onClick={() => toggleMobile(index)}
                  className={`p-5 cursor-pointer transition-all duration-300 ${isExpanded ? "bg-[#4DB8FF]/5" : "hover:bg-white/[0.02]"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3
                        className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${isExpanded ? "text-[#4DB8FF]" : "text-white/80"}`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {edu.title}
                      </h3>
                      <p
                        className="text-base sm:text-lg text-[#4DB8FF]/70 font-medium"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {edu.role}
                      </p>
                      <p
                        className="text-sm sm:text-base text-white/25 font-light mt-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {edu.startDate} – {edu.endDate}
                      </p>
                    </div>
                    <div className={`text-[#4DB8FF]/50 text-xl transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                      ▼
                    </div>
                  </div>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-5 border-t border-white/[0.04]">
                    <p
                      className="text-white/50 text-base sm:text-lg leading-relaxed font-light"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VERSION */}
        <div className="hidden lg:flex gap-8 lg:gap-12 justify-center items-start">

          {/* LEFT LIST */}
          <div ref={leftListRef} className="w-full lg:w-[30%] flex flex-col gap-5">
            {educationData.map((edu, index) => {
              const isActive = selected === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`
                    p-5 rounded-xl cursor-pointer transition-all duration-300 relative
                    ${isActive
                      ? "glass-panel scale-[1.02] border-[#4DB8FF]/20 shadow-[0_0_25px_rgba(77,184,255,0.1)]"
                      : "border border-transparent hover:bg-white/[0.02]"
                    }
                  `}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-gradient-to-b from-[#4DB8FF] to-transparent rounded-full" />
                  )}

                  <h3
                    className={`text-lg md:text-xl font-semibold mb-2 transition-colors duration-300 ${isActive ? "text-[#4DB8FF]" : "text-white/60"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {edu.title}
                  </h3>

                  <p
                    className="text-base md:text-lg text-[#4DB8FF]/60 font-medium"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {edu.role}
                  </p>

                  <p
                    className="text-sm md:text-base text-white/20 font-light mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT PANEL */}
          <div ref={rightPanelRef} className="w-full lg:w-[60%]">
            <div className="glass-panel p-8 md:p-10">

              {/* Active indicator line */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#4DB8FF] to-transparent mb-6" />

              <h2
                className="text-2xl md:text-3xl font-bold text-[#4DB8FF] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {educationData[selected].title}
              </h2>

              <p
                className="text-lg md:text-xl font-semibold text-white/90 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {educationData[selected].role}
              </p>

              <p
                className="text-white/25 text-base md:text-lg mb-6 font-light tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {educationData[selected].startDate} – {educationData[selected].endDate}
              </p>

              <p
                className="text-white/55 text-base md:text-lg leading-relaxed font-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {educationData[selected].description}
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
