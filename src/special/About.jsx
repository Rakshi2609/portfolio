import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutSectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const skillsRef = useRef(null)
  const marqueeRefs = useRef([])

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      category: "ML/AI",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      ]
    }
  ]

  return (
    <section
      ref={aboutSectionRef}
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 py-14 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          About <span className="text-[#4DB8FF]">Me</span>
        </h2>

        {/* IMAGE + TEXT */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-16">

          {/* IMAGE */}
          <div ref={imageRef} className="flex-1 flex justify-center">
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] flex items-center justify-center">
              <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-2xl bg-gray-900 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#4DB8FF" strokeWidth="1.5">
                  <path d="M9 3H4v6h5V3zM20 9h-5v6h5V9zM14 15H9v6h5v-6zM20 3h-5v4h5V3z"/>
                  <path d="M12 12L9 9M12 12l3-3M12 12v9"/>
                </svg>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div ref={textRef} className="flex-1 max-w-2xl mx-auto text-center">
            <p className="text-white text-lg sm:text-xl md:text-[1.28rem] leading-relaxed font-light">
              I am a <span className="text-[#4DB8FF] font-semibold">passionate engineer</span> pursuing 
              <span className="text-[#AEE6FF] font-semibold"> CSE</span> specializing in 
              <span className="text-[#4DB8FF] font-semibold"> AI & Robotics</span>.  
              I enjoy building products, exploring ML, and solving real-world problems.
            </p>

            <div className="mt-5 flex gap-3 justify-center flex-wrap">
              <div className="px-4 py-2 bg-[#4DB8FF]/20 border border-[#4DB8FF] rounded-lg">
                <p className="text-[#4DB8FF] text-base font-semibold">AI Enthusiast</p>
              </div>
              <div className="px-4 py-2 bg-[#AEE6FF]/20 border border-[#AEE6FF] rounded-lg">
                <p className="text-[#AEE6FF] text-base font-semibold">Full Stack Dev</p>
              </div>
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <h2 ref={skillsRef} className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
          My <span className="text-[#4DB8FF]">Tech Stack</span>
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="text-center">

              <h3 className="text-xl md:text-2xl font-bold text-[#4DB8FF] mb-3">
                {category.category}
              </h3>

              <div className="overflow-hidden flex justify-center">
                <div className="flex animate-marquee-center">

                  {[...category.skills, ...category.skills, ...category.skills].map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex-shrink-0 mx-3 px-5 py-3 bg-gray-800 rounded-xl border border-gray-700 hover:border-[#4DB8FF] transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer min-w-[140px] justify-center"
                    >
                      <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                      <span className="text-white text-base font-medium whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee-center {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-center {
          animation: marquee-center 16s linear infinite;
        }
        .animate-marquee-center:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default About
