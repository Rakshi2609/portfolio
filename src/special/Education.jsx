import React, { useState } from "react";

const educationData = [
  {
    title: "Vellore Institute of Technology",
    role: "B.Tech",
    description:
      "Pursuing Bachelor of Technology at VIT with strong focus on AI, software engineering, machine learning, and full-stack development. Developing academic + practical engineering skillsets.",
    startDate: "2024",
    endDate: "Present",
  },
  {
    title: "Dr. NSAM",
    role: "PUC / Higher Secondary (Science)",
    description:
      "Studied Physics, Chemistry, Maths and Computer Science. Built analytical, problem-solving foundations and academic consistency.",
    startDate: "2022",
    endDate: "2024",
  },
  {
    title: "St. Philomena’s Public School",
    role: "Schooling (1st–12th)",
    description:
      "Completed schooling from 2009 to 2022. Built strong fundamentals, communication skills, discipline, leadership and extracurricular involvement.",
    startDate: "2009",
    endDate: "2022",
  },
];

const Education = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="min-h-screen bg-black py-20 px-10 text-white flex gap-20 justify-center">

      {/* LEFT LIST */}
      <div className="w-[25%] flex flex-col gap-6">
        <h2 className="text-5xl font-extrabold mb-6">
          My <span className="text-[#4DB8FF]">Education</span>
        </h2>

        {educationData.map((edu, index) => {
          const isActive = selected === index;

          return (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`
                p-5 rounded-xl cursor-pointer border border-white/10 
                transition-all duration-300 relative overflow-hidden
                ${isActive ? "scale-105 shadow-[0_0_25px_#4DB8FF]" : "hover:scale-[1.03]"}
              `}
            >
              {/* Blue overlay ON SELECT */}
              {isActive && (
                <div className="absolute inset-0 bg-[#4DB8FF] opacity-20 rounded-xl"></div>
              )}

              <h3 className="text-2xl font-bold relative z-10">
                {edu.title}
              </h3>

              <p className="text-[#4DB8FF] text-lg font-semibold relative z-10">
                {edu.role}
              </p>

              <p className="text-gray-400 text-sm relative z-10">
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
          );
        })}
      </div>

      {/* RIGHT — BIG CARD */}
      <div className="w-[55%]">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 shadow-xl p-14 rounded-3xl">

          <h2 className="text-6xl font-extrabold text-[#4DB8FF] mb-4">
            {educationData[selected].title}
          </h2>

          <p className="text-3xl font-semibold text-white mb-3">
            {educationData[selected].role}
          </p>

          <p className="text-gray-400 text-xl mb-10">
            {educationData[selected].startDate} – {educationData[selected].endDate}
          </p>

          <p className="text-gray-300 text-2xl leading-relaxed">
            {educationData[selected].description}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Education;
