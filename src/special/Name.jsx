import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Name = () => {
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const rolesRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

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

    // ScrollTrigger - Transform layout on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    // Move everything together maintaining spacing
    tl.to(helloRef.current, {
      x: -window.innerWidth*0.69 / 2 + 150,
      y: -85,
      scale: 0.52,
      duration: 1,
    }, 0)
    .to(nameRef.current, {
      x: -window.innerWidth*0.69 / 2 + 150,
      y: -185,
      scale: 0.62,
      duration: 1,
    }, 0)
    .fromTo(rolesRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      x: -window.innerWidth*0.83 / 2 + 150,
      y: 135,
      duration: 1,
    }, 0.5)
    .fromTo(imageRef.current, {
      opacity: 0,
      scale: 0.5,
    }, {
      opacity: 1,
      scale: 1.5,
      x: window.innerWidth / 2 - 400,
      y: 50,
      duration: 1,
    }, 0.5);

  }, []);

  const name = "Rakshith Ganjimut".split("");

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute flex flex-col items-center justify-center text-center">
        <h1
          ref={helloRef}
          className="text-white font-bold mb-4 text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] whitespace-nowrap"
        >
          Hello, I'm
        </h1>

        <h2
          ref={nameRef}
          className="font-extrabold leading-tight text-white text-[2.8rem] sm:text-[3.6rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7rem] tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {name.map((char, idx) => (
            <span key={idx} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>

      {/* Roles - Initially hidden */}
      <div
        ref={rolesRef}
        className="absolute opacity-0 text-left"
      >
        <div className="border-l-4 border-[#4DB8FF] pl-6 py-4">
          <p className="text-[#4DB8FF] text-3xl font-bold mb-5 tracking-wide">
            Hire me for
          </p>

          <div className="space-y-3">
            <p className="text-white text-xl md:text-2xl transition-all duration-300 hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ App Developer
            </p>
            <p className="text-white text-xl md:text-2xl transition-all duration-300 hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ Web Developer
            </p>
            <p className="text-white text-xl md:text-2xl transition-all duration-300 hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ Full Stack
            </p>
            <p className="text-white text-xl md:text-2xl transition-all duration-300 hover:text-[#4DB8FF] hover:translate-x-2 cursor-pointer">
              ➤ AI/ML
            </p>
          </div>

          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#4DB8FF]/50 active:scale-95">
            Get Resume
          </button>
        </div>
      </div>



      {/* Image - Initially hidden */}
      <div
        ref={imageRef}
        className="absolute opacity-0"
      >
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] flex items-center justify-center">
          <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-black flex items-center justify-center text-white text-5xl md:text-6xl font-bold">
            RG
          </div>
        </div>
      </div>
    </section>
  );
};

export default Name;
