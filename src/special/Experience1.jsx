import React, { useState } from "react";

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

const Experience1 = () => {

  // ⭐ UPDATED → default selected = first index
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(null);

  const active = selected !== null ? selected : hovered;

  return (
    <section className="min-h-screen bg-black py-20 px-10 text-white flex gap-16 justify-center">

      {/* LEFT TIMELINE */}
      <div className="w-[25%] relative flex flex-col items-center">

        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-[4px] bg-white/10 rounded-full"></div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-14 mt-5">
          {experiences.map((exp, index) => {
            const isSelected = selected === index;
            const isHovered = hovered === index && selected === null;

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
                    ${isSelected || isHovered ? "bg-[#4DB8FF] shadow-[0_0_20px_#4DB8FF]" : "bg-black"}
                  `}
                ></div>

                {/* Title (bigger size) */}
                <p
                  className={`mt-4 text-center transition-all duration-300 font-bold text-lg
                    ${isSelected || isHovered ? "text-[#4DB8FF] scale-110" : "text-gray-400"}
                  `}
                >
                  {exp.title}
                </p>

                {/* Dates (slightly larger) */}
                <p className="text-md text-gray-500 font-medium">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-[55%] bg-black/40 border border-white/10 rounded-2xl p-14 backdrop-blur-2xl shadow-xl">
        {active !== null ? (
          <>
            {/* Big Title */}
            <h2 className="text-6xl font-extrabold text-[#4DB8FF] mb-6 leading-snug">
              {experiences[active].title}
            </h2>

            {/* Bigger Role */}
            <p className="text-3xl text-white mb-3 font-semibold">
              {experiences[active].role}
            </p>

            {/* Date Range */}
            <p className="text-gray-400 text-xl mb-10 font-medium">
              {experiences[active].startDate} – {experiences[active].endDate}
            </p>

            {/* Bigger Description */}
            <p className="text-gray-300 text-2xl leading-relaxed">
              {experiences[active].description}
            </p>
          </>
        ) : (
          <p className="text-gray-600 text-xl">Hover or click a timeline marker →</p>
        )}
      </div>
    </section>
  );
};

export default Experience1;
