import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Hack Club",
    role: "Web Developer",
    description:
      "Worked on internal tools, responsive UIs, and event-driven applications. Built multiple components alongside student developers to enable faster feature rollout.",
    startDate: "2023",
    endDate: "2024",
  },
  {
    title: "CodeChef Club",
    role: "Web Developer",
    description:
      "Developed competitive coding event portals, leaderboards, UI components, and optimized user experience for contest-day traffic.",
    startDate: "2023",
    endDate: "Present",
  },
  {
    title: "Film Society, VIT Chennai",
    role: "Video Editor",
    description:
      "Created cinematic edits, event aftermovies, Instagram reels, short films and story-driven content using motion graphics + advanced color grading.",
    startDate: "2024",
    endDate: "Present",
  },
  {
    title: "Harley's Fine Baking",
    role: "Web Developer",
    description:
      "Designed and maintained the website, built product showcasing UI, improved SEO, and enhanced responsiveness for all devices.",
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
    // Animate content change
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [active]);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Timeline animation
    gsap.from(timelineRef.current, {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Details panel animation
    gsap.from(detailsRef.current, {
      scrollTrigger: {
        trigger: detailsRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20 px-10 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
          My <span className="text-[#4DB8FF]">Experience</span>
        </h2>

        <div className="flex gap-16 justify-center">
          {/* LEFT TIMELINE */}
          <div ref={timelineRef} className="w-[25%] relative flex flex-col items-center">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 w-[4px] bg-white/10 rounded-full"></div>

            {/* Timeline Items */}
            <div className="flex flex-col gap-14 mt-5">
              {experiences.map((exp, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelected(index)}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex flex-col items-center cursor-pointer transition-all"
                  >
                    {/* Dot */}
                    <div
                      className={`w-7 h-7 rounded-full border-2 border-[#4DB8FF] transition-all duration-300
                        ${isActive ? "bg-[#4DB8FF] shadow-[0_0_20px_#4DB8FF]" : "bg-black"}
                      `}
                    ></div>

                    {/* Title */}
                    <p
                      className={`mt-4 text-center transition-all duration-300 font-bold text-lg
                        ${isActive ? "text-[#4DB8FF] scale-110" : "text-gray-400"}
                      `}
                    >
                      {exp.title}
                    </p>

                    {/* Dates */}
                    <p className="text-md text-gray-500 font-medium">
                      {exp.startDate} – {exp.endDate}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div ref={detailsRef} className="w-[55%] bg-black/40 border border-white/10 rounded-2xl p-14 backdrop-blur-2xl shadow-xl">
            <div ref={contentRef}>
              {/* Big Title */}
              <h2 className="text-6xl font-extrabold text-[#4DB8FF] mb-6 leading-snug">
                {experiences[active].title}
              </h2>

              {/* Role */}
              <p className="text-3xl text-white mb-3 font-semibold">
                {experiences[active].role}
              </p>

              {/* Date Range */}
              <p className="text-gray-400 text-xl mb-10 font-medium">
                {experiences[active].startDate} – {experiences[active].endDate}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-2xl leading-relaxed">
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
