import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Name = () => {
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const rolesRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial animations
    gsap.from(helloRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const letters = nameRef.current.querySelectorAll(".letter");
    gsap.from(letters, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.06,
      ease: "back.out(2)",
    });

    // Scroll animation (clean and subtle)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      helloRef.current,
      {
        x: -350,
        y: -70,
        scale: 0.4,
        duration: 1,
      },
      0
    )
      .to(
        nameRef.current,
        {
          x: -350,
          y: -150,
          scale: 0.5,
          duration: 1,
        },
        0
      )
      .fromTo(
        rolesRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 100, x: -400, scale: 0.8, duration: 1 },
        0.5
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 300,
          y: 40,
          duration: 1,
        },
        0.5
      );
  }, []);

  const name = "Rakshith Ganjimut".split("");

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden"
    >
      <style>{`
        @keyframes ray {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) rotate(45deg);
          }
        }
        .animate-ray {
          animation: ray 1s ease-in-out;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
        }
      `}</style>

      {/* CENTER TEXT */}
      <div className="absolute flex flex-col items-center justify-center text-center">

        {/* HELLO TEXT */}
        <h1
          ref={helloRef}
          className="
            text-white font-bold mb-3
            text-[2.4rem]
            sm:text-[3.2rem]
            md:text-[4rem]
            lg:text-[5rem]
            xl:text-[5.5rem]
            2xl:text-[6rem]
            whitespace-nowrap
          "
        >
          Hello, I'm
        </h1>

        {/* NAME TEXT */}
        <h2
          ref={nameRef}
          className="
            font-extrabold leading-tight text-white
            text-[2.6rem]
            sm:text-[3.3rem]
            md:text-[4.5rem]
            lg:text-[6rem]
            xl:text-[6.7rem]
            2xl:text-[7rem]
            tracking-tight whitespace-nowrap
          "
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {name.map((char, idx) => (
            <span key={idx} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>

      {/* ROLES BLOCK */}
      <div ref={rolesRef} className="absolute opacity-0 text-left">
        <div className="border-l-4 border-[#4DB8FF] pl-6 py-4">
          <p className="text-[#4DB8FF] text-3xl font-bold mb-5 tracking-wide">
            Hire me for
          </p>

          <div className="space-y-3">
            <p className="text-white text-xl md:text-2xl hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ App Developer
            </p>
            <p className="text-white text-xl md:text-2xl hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ Web Developer
            </p>
            <p className="text-white text-xl md:text-2xl hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ Full Stack
            </p>
            <p className="text-white text-xl md:text-2xl hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ AI/ML
            </p>
          </div>

          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] text-black font-bold text-lg rounded-lg hover:scale-110 hover:shadow-lg shadow-[#4DB8FF]/50 active:scale-95">
            Get Resume
          </button>
        </div>
      </div>

      {/* PROFILE IMAGE CIRCLE */}
      <div 
        ref={imageRef} 
        className="absolute opacity-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] p-[3px] flex items-center justify-center relative">
          {/* Blue ray effect on hover */}
          <div className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute animate-ray bg-gradient-to-r from-transparent via-[#4DB8FF] to-transparent opacity-70"></div>
          </div>
          
          <div className="w-full h-full rounded-full overflow-hidden relative bg-black z-10">
            <img 
              src="/images/proffef.jpg" 
              alt="Profile" 
              className={`absolute w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
              style={{ objectPosition: '50% 36%' }}
            />
            <img 
              src="/images/anime.jpg" 
              alt="Anime Profile" 
              className={`absolute w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ objectPosition: '50% 38%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Name;
