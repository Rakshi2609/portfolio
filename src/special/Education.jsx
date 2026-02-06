import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    title: "St. Philomena’s Public School",
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
      // Slide in from left
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

      // Slide in from right
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
    <section className="min-h-fit lg:h-screen bg-black pt-4 pb-4 lg:pt-6 lg:pb-2 px-8 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 lg:mb-10 text-left pl-0 md:pl-10">
          <span className="text-[#4DB8FF]">Education</span>
        </h2>

        {/* MOBILE DROPDOWN VERSION */}
        <div className="lg:hidden flex flex-col gap-2">
          {educationData.map((edu, index) => {
            const isExpanded = expandedMobile === index;

            return (
              <div
                key={index}
                ref={(el) => (mobileCardsRef.current[index] = el)}
                className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Dropdown Header */}
                <div
                  onClick={() => toggleMobile(index)}
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    isExpanded ? "bg-[#4DB8FF]/10" : "bg-black/40 hover:bg-white/5"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isExpanded ? "text-[#4DB8FF]" : "text-white"}`}>
                        {edu.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#4DB8FF] font-medium">
                        {edu.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400">
                        {edu.startDate} – {edu.endDate}
                      </p>
                    </div>
                    <div className={`text-[#4DB8FF] text-2xl transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                      ▼
                    </div>
                  </div>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 bg-black/40 border-t border-white/10">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
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
          <div ref={leftListRef} className="w-full lg:w-[30%] flex flex-col gap-6">
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
                  <h3 className={`text-lg md:text-xl font-semibold mb-2 ${isActive ? "text-[#4DB8FF]" : "text-white"}`}>
                    {edu.title}
                  </h3>

                  <p className="text-base md:text-lg text-[#4DB8FF] font-medium">
                    {edu.role}
                  </p>

                  <p className="text-sm md:text-base text-gray-400">
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT PANEL */}
          <div ref={rightPanelRef} className="w-full lg:w-[60%]">
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-xl">

              <h2 className="text-2xl md:text-3xl font-bold text-[#4DB8FF] mb-4">
                {educationData[selected].title}
              </h2>

              <p className="text-lg md:text-xl font-semibold text-white mb-2">
                {educationData[selected].role}
              </p>

              <p className="text-gray-400 text-base md:text-lg mb-6">
                {educationData[selected].startDate} – {educationData[selected].endDate}
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
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
