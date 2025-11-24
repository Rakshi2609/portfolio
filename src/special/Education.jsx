import React, { useState } from "react";

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
    title: "St. Philomena’s Public School",
    role: "Schooling (1st–12th)",
    description:
      "Completed schooling from 2009 to 2022. Built academic foundations, discipline, communication and leadership skills.",
    startDate: "2009",
    endDate: "2022",
  },
];

const Education = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="min-h-screen bg-black py-14 px-8 text-white flex gap-12 justify-center">

      {/* LEFT LIST */}
      <div className="w-[25%] flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="text-[#4DB8FF]">Education</span>
        </h2>

        <div className="flex flex-col gap-6">
          {educationData.map((edu, index) => {
            const isActive = selected === index;

            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`
                  p-4 rounded-xl cursor-pointer border border-white/10 transition-all duration-300 relative
                  ${isActive ? "bg-[#4DB8FF]/10 scale-[1.02] shadow-[0_0_15px_#4DB8FF]" : "hover:bg-white/5"}
                `}
              >
                <h3 className={`text-lg font-semibold mb-1 ${isActive ? "text-[#4DB8FF]" : "text-white"}`}>
                  {edu.title}
                </h3>

                <p className="text-sm text-[#4DB8FF] font-medium">
                  {edu.role}
                </p>

                <p className="text-xs text-gray-400">
                  {edu.startDate} – {edu.endDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-[55%]">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold text-[#4DB8FF] mb-3">
            {educationData[selected].title}
          </h2>

          <p className="text-lg font-semibold text-white mb-1">
            {educationData[selected].role}
          </p>

          <p className="text-gray-400 text-sm mb-5">
            {educationData[selected].startDate} – {educationData[selected].endDate}
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            {educationData[selected].description}
          </p>

        </div>
      </div>

    </section>
  );
};

export default Education;
