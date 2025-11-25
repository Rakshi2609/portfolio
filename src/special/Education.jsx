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
    <section className="min-h-screen bg-black py-14 px-8 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left pl-0 md:pl-10">
          <span className="text-[#4DB8FF]">Education</span>
        </h2>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start">
          
          {/* LEFT LIST */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6">
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
                  <h3 className={`text-base md:text-lg font-semibold mb-1 ${isActive ? "text-[#4DB8FF]" : "text-white"}`}>
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

          {/* RIGHT PANEL */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-xl">

              <h2 className="text-xl md:text-2xl font-bold text-[#4DB8FF] mb-3">
                {educationData[selected].title}
              </h2>

              <p className="text-base md:text-lg font-semibold text-white mb-1">
                {educationData[selected].role}
              </p>

              <p className="text-gray-400 text-sm mb-5">
                {educationData[selected].startDate} – {educationData[selected].endDate}
              </p>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
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
