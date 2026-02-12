import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionParticles from "@/components/ui/section-particles";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Hack Club",
    role: "Web Developer",
    description:
      "Actively participating in the club events.",
    startDate: "Sept, 2025",
    endDate: "Present",
  },
  {
    title: "CodeChef Club",
    role: "Web Developer",
    description:
      "Developed the design of the website and maintained it.",
    startDate: "Sept, 2025",
    endDate: "Present",
  },
  {
    title: "Film Society, VIT Chennai",
    role: "Video Editor",
    description:
      "Created cinematic edits, reels, aftermovies, short films using motion graphics + color grading.",
    startDate: "Sept, 2025",
    endDate: "Present",
  },
  {
    title: "AI Club, VIT Chennai",
    role: "Web Developer",
    description:
      "Actively participating in the club events",
    startDate: "Sept, 2025",
    endDate: "Present",
  },
  {
    title: "Harley's Fine Baking",
    role: "Web Developer",
    description:
      "Designed & maintained a task managing web application",
    startDate: "May, 2025",
    endDate: "June, 2025",
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const leftTimelineRef = useRef(null);
  const rightDetailsRef = useRef(null);
  const mobileCardsRef = useRef([]);

  const active = hovered !== null ? hovered : selected;

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [active]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });

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
      if (leftTimelineRef.current) {
        gsap.from(leftTimelineRef.current, {
          scrollTrigger: {
            trigger: leftTimelineRef.current,
            start: "top bottom-=20",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          },
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (rightDetailsRef.current) {
        gsap.from(rightDetailsRef.current, {
          scrollTrigger: {
            trigger: rightDetailsRef.current,
            start: "top bottom-=20",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          },
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="experience" className="min-h-screen lg:h-screen bg-black py-14 px-8 text-white relative overflow-hidden noise-overlay">
      {/* Subtle particle background */}
      <SectionParticles color="#4DB8FF" particleCount={90} speed={0.3} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div ref={titleRef} className="mb-12 text-left lg:pl-40 pl-6">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-2"
            style={{ fontFamily: "var(--font-body)", color: "rgba(77, 184, 255, 0.5)" }}
          >
            Where I've contributed
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My <span className="text-[#4DB8FF] glow-text">Experience</span>
          </h2>
        </div>

        {/* Desktop Version - Timeline Layout */}
        <div className="hidden lg:flex gap-12 justify-center">

          {/* LEFT TIMELINE */}
          <div
            ref={leftTimelineRef}
            className="w-[25%] relative flex flex-col items-center"
          >
            <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#4DB8FF]/30 via-[#4DB8FF]/10 to-transparent rounded-full"></div>

            <div className="flex flex-col gap-8 mt-3">
              {experiences.map((exp, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelected(index)}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border transition-all duration-300 ${isActive
                        ? "bg-[#4DB8FF] border-[#4DB8FF] shadow-[0_0_16px_rgba(77,184,255,0.6)] scale-110"
                        : "bg-transparent border-white/20 group-hover:border-[#4DB8FF]/50"
                        }`}
                    ></div>

                    <p
                      className={`mt-2 font-medium text-sm text-center transition-all duration-300 ${isActive
                        ? "text-[#4DB8FF] scale-105"
                        : "text-white/40 group-hover:text-white/60"
                        }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.title}
                    </p>

                    <p
                      className="text-xs text-white/20 font-light mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {exp.startDate} – {exp.endDate}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div
            ref={rightDetailsRef}
            className="w-[55%] glass-panel p-8"
          >
            <div ref={contentRef}>
              {/* Active indicator line */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#4DB8FF] to-transparent mb-6" />

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4DB8FF] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {experiences[active].title}
              </h2>

              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-2 font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {experiences[active].role}
              </p>

              <p
                className="text-white/30 text-base sm:text-lg lg:text-xl mb-6 font-light tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {experiences[active].startDate} – {experiences[active].endDate}
              </p>

              <p
                className="text-white/60 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {experiences[active].description}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Version - Vertical Timeline */}
        <div className="lg:hidden relative px-6">
          {/* Vertical Line */}
          <div className="absolute left-[1.75rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#4DB8FF]/30 via-[#4DB8FF]/10 to-transparent"></div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (mobileCardsRef.current[index] = el)}
                className="relative flex gap-4"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-3 h-3 rounded-full border border-[#4DB8FF]/50 bg-[#4DB8FF]/20 mt-2 z-10 shadow-[0_0_8px_rgba(77,184,255,0.3)]"></div>

                {/* Content Card */}
                <div className="flex-1 glass-panel p-5">
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase text-[#4DB8FF]/40 block mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#4DB8FF] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg font-semibold text-white/90 mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-sm sm:text-base text-white/25 mb-4 font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {exp.startDate} – {exp.endDate}
                  </p>
                  <p
                    className="text-base sm:text-lg text-white/50 leading-relaxed font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
