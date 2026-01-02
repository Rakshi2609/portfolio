import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Hack Club",
    role: "Web Developer",
    description:
      "Worked on internal tools, responsive UIs, and event-driven applications. Built multiple components to enable faster feature rollout.",
    startDate: "2023",
    endDate: "2024",
  },
  {
    title: "CodeChef Club",
    role: "Web Developer",
    description:
      "Developed competitive coding event portals, leaderboards, UI components, and optimized UX for contest-day traffic.",
    startDate: "2023",
    endDate: "Present",
  },
  {
    title: "Film Society, VIT Chennai",
    role: "Video Editor",
    description:
      "Created cinematic edits, reels, aftermovies, short films using motion graphics + color grading.",
    startDate: "2024",
    endDate: "Present",
  },
  // {
  //   title: "Harley's Fine Baking",
  //   role: "Web Developer",
  //   description:
  //     "Designed & maintained the website, improved UI, SEO, responsiveness, and performance.",
  //   startDate: "2024",
  //   endDate: "2025",
  // },
];

const Experience = () => {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const detailsRef = useRef(null);
  const contentRef = useRef(null);

  const active = hovered !== null ? hovered : selected;
  const leftTimelineRef = useRef(null);
  const rightDetailsRef = useRef(null);
  const mobileCardsRef = useRef([]);

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
    <section className="min-h-screen bg-black py-14 px-8 text-white">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-left lg:pl-40 pl-6"
        >
          My <span className="text-[#4DB8FF]">Experience</span>
        </h2>

        {/* Desktop Version - Timeline Layout */}
        <div className="hidden lg:flex gap-12 justify-center">

          {/* LEFT TIMELINE */}
          <div
            ref={leftTimelineRef}
            className="w-[25%] relative flex flex-col items-center"
          >
            <div className="absolute top-0 bottom-0 w-[2px] bg-white/10 rounded-full"></div>

            <div className="flex flex-col gap-8 mt-3">
              {experiences.map((exp, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelected(index)}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 border-[#4DB8FF] transition-all duration-300 ${
                        isActive
                          ? "bg-[#4DB8FF] shadow-[0_0_12px_#4DB8FF]"
                          : "bg-black"
                      }`}
                    ></div>

                    <p
                      className={`mt-2 font-semibold text-sm text-center transition-all ${
                        isActive
                          ? "text-[#4DB8FF] scale-105"
                          : "text-gray-400"
                      }`}
                    >
                      {exp.title}
                    </p>

                    <p className="text-xs text-gray-500 font-medium">
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
            className="w-[55%] bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-2xl shadow-xl"
          >
            <div ref={contentRef}>
              <h2 className="text-2xl font-bold text-[#4DB8FF] mb-3">
                {experiences[active].title}
              </h2>

              <p className="text-lg text-white mb-1 font-semibold">
                {experiences[active].role}
              </p>

              <p className="text-gray-400 text-sm mb-5 font-medium">
                {experiences[active].startDate} – {experiences[active].endDate}
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                {experiences[active].description}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Version - Vertical Timeline */}
        <div className="lg:hidden relative px-6">
          {/* Vertical Line */}
          <div className="absolute left-[1.75rem] top-0 bottom-0 w-[2px] bg-white/10"></div>

          <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (mobileCardsRef.current[index] = el)}
              className="relative flex gap-4"
            >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#4DB8FF] bg-black mt-1 z-10"></div>

                {/* Content Card */}
                <div className="flex-1 bg-black/40 backdrop-blur-2xl rounded-xl border border-white/10 p-5 shadow-lg">
                  <h3 className="text-lg font-bold text-[#4DB8FF] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-white mb-1">
                    {exp.role}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {exp.startDate} – {exp.endDate}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
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
