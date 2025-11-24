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
  {
    title: "Harley's Fine Baking",
    role: "Web Developer",
    description:
      "Designed & maintained the website, improved UI, SEO, responsiveness, and performance.",
    startDate: "2024",
    endDate: "2025",
  },
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

    gsap.from(timelineRef.current, {
      scrollTrigger: { trigger: timelineRef.current, start: "top 75%" },
      x: -60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.from(detailsRef.current, {
      scrollTrigger: { trigger: detailsRef.current, start: "top 75%" },
      x: 60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="min-h-screen bg-black py-14 px-8 text-white">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-left pl-40"
        >
          My <span className="text-[#4DB8FF]">Experience</span>
        </h2>

        <div className="flex gap-12 justify-center">

          {/* LEFT TIMELINE */}
          <div
            ref={timelineRef}
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
            ref={detailsRef}
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

      </div>
    </section>
  );
};

export default Experience;
