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

          {/* INTERACTIVE TERMINAL CARD */}
          <div ref={imageRef} className="flex-1 flex justify-center">
            <div
              className="w-[260px] sm:w-[300px] md:w-[340px] rounded-2xl p-[1.5px] transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(77,184,255,0.3)]"
              style={{ background: "linear-gradient(135deg, #4DB8FF40, #4DB8FF10, #AEE6FF30)" }}
            >
              <div className="w-full rounded-2xl bg-[#0a0a0f] overflow-hidden glass-panel">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[10px] text-white/20 tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                    rakshith.js
                  </span>
                </div>
                {/* Code lines */}
                <div className="px-4 py-4 space-y-2 min-h-[200px]">
                  <p className="text-[11px] font-mono leading-relaxed">
                    <span className="text-[#c678dd]">const</span>{" "}
                    <span className="text-[#e5c07b]">rakshith</span>{" "}
                    <span className="text-white/40">=</span>{" "}
                    <span className="text-[#61afef]">{"{"}</span>
                  </p>
                  <p className="text-[11px] font-mono leading-relaxed pl-4">
                    <span className="text-[#e06c75]">role</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-[#98c379]">"Full Stack Dev"</span>
                    <span className="text-white/30">,</span>
                  </p>
                  <p className="text-[11px] font-mono leading-relaxed pl-4">
                    <span className="text-[#e06c75]">passion</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-[#98c379]">"AI & Robotics"</span>
                    <span className="text-white/30">,</span>
                  </p>
                  <p className="text-[11px] font-mono leading-relaxed pl-4">
                    <span className="text-[#e06c75]">coffee</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-[#d19a66]">Infinity</span>
                    <span className="text-white/30">,</span>
                  </p>
                  <p className="text-[11px] font-mono leading-relaxed pl-4">
                    <span className="text-[#e06c75]">status</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-[#98c379]">"Building cool stuff"</span>
                  </p>
                  <p className="text-[11px] font-mono leading-relaxed">
                    <span className="text-[#61afef]">{"}"}</span>
                    <span className="text-white/30">;</span>
                    <span className="inline-block w-[6px] h-[14px] bg-[#4DB8FF] ml-1 animate-pulse rounded-sm" />
                  </p>
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
                  className="relative px-6 py-3 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 glass-panel"
                  style={{ borderColor: `${tag.color}30` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${tag.color}40, inset 0 0 20px ${tag.color}15`;
                    e.currentTarget.style.borderColor = `${tag.color}60`;
                    e.currentTarget.querySelector('.tag-bg').style.opacity = '1';
                    e.currentTarget.querySelector('.tag-text').style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = `${tag.color}30`;
                    e.currentTarget.querySelector('.tag-bg').style.opacity = '0';
                    e.currentTarget.querySelector('.tag-text').style.color = tag.color;
                  }}
                >
                  <div
                    className="tag-bg absolute inset-0 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${tag.color}, ${tag.color}bb)`, opacity: 0 }}
                  />
                  <p
                    className="tag-text relative z-10 text-sm font-bold tracking-wide transition-colors duration-300"
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
