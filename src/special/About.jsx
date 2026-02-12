import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionParticles from '@/components/ui/section-particles'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutSectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const section = aboutSectionRef.current
    const image = imageRef.current
    const text = textRef.current
    const skills = skillsRef.current

    // Fade in section on scroll
    gsap.fromTo(
      section,
      { opacity: 0, scale: 1.05 },
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
      { opacity: 0, x: -60, rotation: -3 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
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
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
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
      { opacity: 0, y: 40 },
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
      id="about"
      className="min-h-screen w-full bg-black py-16 px-4 md:px-10 relative overflow-hidden noise-overlay"
    >
      {/* Subtle particle background */}
      <SectionParticles color="#4DB8FF" particleCount={100} speed={0.3} />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-[2]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-14">
          <p
            className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)", color: "rgba(77, 184, 255, 0.5)" }}
          >
            Get to know me
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About <span className="text-[#4DB8FF] glow-text">Me</span>
          </h2>
        </div>

        {/* IMAGE + TEXT */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-20">

          {/* IMAGE */}
          <div ref={imageRef} className="flex-1 flex justify-center group">
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] p-[2px] flex items-center justify-center transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-[0_0_50px_rgba(77,184,255,0.4)]">
              <div className="w-full h-full rounded-2xl bg-black/90 flex items-center justify-center relative overflow-hidden glass-panel">
                {/* SVG Icon - Hidden on hover */}
                <svg className="w-14 h-14 transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" viewBox="0 0 24 24" fill="none" stroke="#4DB8FF" strokeWidth="1.5">
                  <path d="M9 3H4v6h5V3zM20 9h-5v6h5V9zM14 15H9v6h5v-6zM20 3h-5v4h5V3z" />
                  <path d="M12 12L9 9M12 12l3-3M12 12v9" />
                </svg>
                {/* RG Text - Shows on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-bold opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "linear-gradient(135deg, #4DB8FF, #AEE6FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  RG
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div ref={textRef} className="flex-1 max-w-2xl mx-auto text-center lg:text-left">
            <p
              className="text-white/80 text-lg sm:text-xl md:text-[1.28rem] leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              I am a <span className="text-[#4DB8FF] font-medium">passionate engineer</span> pursuing
              <span className="text-[#AEE6FF] font-medium"> CSE</span> specializing in
              <span className="text-[#4DB8FF] font-medium"> AI & Robotics</span>.
              I enjoy building products, exploring ML, and solving real-world problems.
            </p>

            <div className="mt-7 flex gap-3 justify-center lg:justify-start flex-wrap">
              {[
                { label: "AI Enthusiast", color: "#4DB8FF" },
                { label: "Full Stack Dev", color: "#AEE6FF" },
                { label: "Problem Solver", color: "#34D399" },
              ].map((tag, i) => (
                <div
                  key={i}
                  className="group/tag relative px-5 py-2.5 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 glass-panel"
                  style={{ borderColor: `${tag.color}20` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${tag.color}, ${tag.color}cc)` }}
                  />
                  <p
                    className="relative z-10 text-sm font-semibold transition-colors duration-300 group-hover/tag:text-black"
                    style={{ color: tag.color, fontFamily: "var(--font-display)" }}
                  >
                    {tag.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="section-divider mb-16" />

        {/* SKILLS */}
        <div ref={skillsRef}>
          <div className="text-center mb-12">
            <p
              className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", color: "rgba(77, 184, 255, 0.5)" }}
            >
              Technologies I work with
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              My <span className="text-[#4DB8FF] glow-text">Tech Stack</span>
            </h2>
          </div>

          <div className="space-y-10">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="text-center">

                <h3
                  className="text-lg md:text-xl font-semibold text-[#4DB8FF]/80 mb-4 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {category.category}
                </h3>

                <div className="overflow-hidden flex justify-center">
                  <div className="flex animate-marquee-center">

                    {[...category.skills, ...category.skills, ...category.skills].map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="flex-shrink-0 mx-2 px-5 py-3 glass-panel glass-panel-hover transition-all duration-300 hover:scale-105 flex items-center gap-3 cursor-pointer min-w-[150px] justify-center"
                      >
                        <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                        <span
                          className="text-white/80 text-sm sm:text-base font-medium whitespace-nowrap"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
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

      </div>
    </section>
  )
}

export default About
