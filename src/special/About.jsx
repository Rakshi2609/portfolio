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

  useEffect(() => {
    const section = aboutSectionRef.current
    const image = imageRef.current
    const text = textRef.current
    const skills = skillsRef.current

    // Fade in section on scroll
    gsap.fromTo(
      section,
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    )

    // Image fade in animation
    gsap.fromTo(
      image,
      { opacity: 0, x: -50, rotation: -5 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    )

    // Text fade in animation
    gsap.fromTo(
      text,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    )

    // Skills fade in
    gsap.fromTo(
      skills,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skills,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, [])

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
          <div ref={imageRef} className="flex-1 flex justify-center group">
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_40px_rgba(77,184,255,0.6)]">
              <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-2xl bg-gray-900 flex items-center justify-center transform transition-all duration-500 group-hover:bg-gray-800 relative overflow-hidden">
                {/* SVG Icon - Hidden on hover */}
                <svg className="w-16 h-16 transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" viewBox="0 0 24 24" fill="none" stroke="#4DB8FF" strokeWidth="1.5">
                  <path d="M9 3H4v6h5V3zM20 9h-5v6h5V9zM14 15H9v6h5v-6zM20 3h-5v4h5V3z"/>
                  <path d="M12 12L9 9M12 12l3-3M12 12v9"/>
                </svg>
                {/* RG Text - Shows on hover */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-6xl font-bold opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-12">
                  RG
                </div>
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

            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <div className="relative group px-5 py-3 bg-gradient-to-r from-[#4DB8FF]/10 to-[#4DB8FF]/20 border-2 border-[#4DB8FF] rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(77,184,255,0.5)] hover:bg-gradient-to-r hover:from-[#4DB8FF] hover:to-[#AEE6FF]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative z-10 text-[#4DB8FF] text-base font-semibold transition-colors duration-300 group-hover:text-black">AI Enthusiast</p>
              </div>
              <div className="relative group px-5 py-3 bg-gradient-to-r from-[#AEE6FF]/10 to-[#AEE6FF]/20 border-2 border-[#AEE6FF] rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(174,230,255,0.5)] hover:bg-gradient-to-r hover:from-[#AEE6FF] hover:to-[#4DB8FF]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#AEE6FF] to-[#4DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative z-10 text-[#AEE6FF] text-base font-semibold transition-colors duration-300 group-hover:text-black">Full Stack Dev</p>
              </div>
              <div className="relative group px-5 py-3 bg-gradient-to-r from-green-500/10 to-green-400/20 border-2 border-green-400 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative z-10 text-green-400 text-base font-semibold transition-colors duration-300 group-hover:text-black">Problem Solver</p>
              </div>
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <h2 ref={skillsRef} className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">
          My <span className="text-[#4DB8FF]">Tech Stack</span>
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="text-center">

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4DB8FF] mb-4">
                {category.category}
              </h3>

              <div className="overflow-hidden flex justify-center">
                <div className="flex animate-marquee-center">

                  {[...category.skills, ...category.skills, ...category.skills].map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex-shrink-0 mx-3 px-6 py-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-[#4DB8FF] transition-all duration-300 hover:scale-105 flex items-center gap-3 cursor-pointer min-w-[160px] justify-center"
                    >
                      <img src={skill.logo} alt={skill.name} className="w-7 h-7" />
                      <span className="text-white text-base sm:text-lg md:text-xl font-medium whitespace-nowrap">
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
