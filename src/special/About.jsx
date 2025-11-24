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
        // { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
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

  useEffect(() => {
    // Entire section scale animation
    gsap.fromTo(aboutSectionRef.current, {
      scale: 1.1,
    }, {
      scale: 1,
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      }
    })

    // Image animation
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      scale: 0.5,
      rotation: -10,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    })

    // Text animation
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    // Skills title animation
    gsap.from(skillsRef.current, {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    // Marquee animations
    marqueeRefs.current.forEach((marquee, index) => {
      if (marquee) {
        gsap.from(marquee, {
          scrollTrigger: {
            trigger: marquee,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.out"
        })
      }
    })
  }, [])

  return (
    <section ref={aboutSectionRef} className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            About <span className="text-[#4DB8FF]">Me</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left side - Image/Visual */}
            <div ref={imageRef} className="flex-1 flex justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-2xl bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-[290px] h-[290px] md:w-[390px] md:h-[390px] rounded-2xl bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#4DB8FF" strokeWidth="1.5">
                      <path d="M9 3H4v6h5V3zM20 9h-5v6h5V9zM14 15H9v6h5v-6zM20 3h-5v4h5V3z"/>
                      <path d="M12 12L9 9M12 12l3-3M12 12v9"/>
                    </svg>
                    <p className="text-white text-2xl font-bold">Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - About text */}
            <div ref={textRef} className="flex-1">
              <p className="text-white text-xl md:text-2xl leading-relaxed">
                I am a <span className="text-[#4DB8FF] font-semibold">passionate engineer</span> pursuing 
                <span className="text-[#AEE6FF] font-semibold"> Computer Science Engineering</span> with 
                specialization in <span className="text-[#4DB8FF] font-semibold">AI & Robotics</span>. 
                I love building innovative solutions and exploring cutting-edge technologies that shape the future.
              </p>
              
              <div className="mt-6 flex gap-4">
                <div className="px-6 py-3 bg-[#4DB8FF]/20 border border-[#4DB8FF] rounded-lg hover:bg-[#4DB8FF]/30 transition-all duration-300 cursor-pointer">
                  <p className="text-[#4DB8FF] font-bold text-lg">AI Enthusiast</p>
                </div>
                <div className="px-6 py-3 bg-[#AEE6FF]/20 border border-[#AEE6FF] rounded-lg hover:bg-[#AEE6FF]/30 transition-all duration-300 cursor-pointer">
                  <p className="text-[#AEE6FF] font-bold text-lg">Full Stack Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section with Marquees */}
        <div>
          <h2 ref={skillsRef} className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            My <span className="text-[#4DB8FF]">Tech Stack</span>
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} ref={el => marqueeRefs.current[idx] = el} className="overflow-hidden">
                <h3 className="text-2xl md:text-3xl font-bold text-[#4DB8FF] mb-4 text-center">
                  {category.category}
                </h3>
                
                <div className="relative flex">
                  <div className="flex animate-marquee">
                    {[...category.skills, ...category.skills, ...category.skills].map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="flex-shrink-0 mx-4 px-8 py-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-[#4DB8FF] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#4DB8FF]/30 flex items-center gap-3 cursor-pointer"
                      >
                        <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                        <span className="text-white text-xl font-semibold whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default About
