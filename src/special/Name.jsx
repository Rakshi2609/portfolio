import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeuralBackground from "@/components/ui/flow-field-background";

gsap.registerPlugin(ScrollTrigger);

const Name = () => {
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const rolesRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Staggered entrance animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(helloRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
    })
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6");

    const letters = nameRef.current.querySelectorAll(".letter");
    gsap.from(letters, {
      opacity: 0,
      y: 30,
      rotateX: 90,
      duration: 0.8,
      stagger: 0.04,
      ease: "back.out(2)",
      delay: 0.3,
    });

    // Responsive scroll animation
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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
        { x: -350, y: -70, scale: 0.4, duration: 1 },
        0
      )
        .to(
          nameRef.current,
          { x: -350, y: -150, scale: 0.5, duration: 1 },
          0
        )
        .to(
          subtitleRef.current,
          { opacity: 0, y: -30, duration: 0.5 },
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
          { opacity: 1, scale: 1, x: 300, y: 40, duration: 1 },
          0.5
        );
    });

    mm.add("(max-width: 1023px)", () => {
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
        { y: -500, scale: 0.4, duration: 1 },
        0
      )
        .to(
          nameRef.current,
          { y: -280, scale: 0.7, duration: 1 },
          0
        )
        .to(
          subtitleRef.current,
          { opacity: 0, y: -30, duration: 0.5 },
          0
        )
        .fromTo(
          rolesRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: -120, x: -40, scale: 0.8, duration: 1 },
          0.5
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, y: 150 },
          { opacity: 1, scale: 1.1, y: 180, duration: 1 },
          0.5
        );
    });

    return () => mm.revert();
  }, []);

  const name = "Rakshith Ganjimut".split("");

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden"
    >
      {/* FLOW FIELD PARTICLE BACKGROUND */}
      <NeuralBackground
        color="#4DB8FF"
        trailOpacity={0.08}
        particleCount={700}
        speed={0.7}
        blur={3}
        className="absolute inset-0 z-0"
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />

      <style>{`
        @keyframes ray {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
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
      <div className="absolute flex flex-col items-center justify-center text-center z-10">

        {/* HELLO TEXT */}
        <h1
          ref={helloRef}
          className="
            font-bold mb-2 tracking-wide text-white
            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[5.5rem]
            xl:text-[6rem]
            2xl:text-[6.5rem]
            whitespace-nowrap
          "
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hello, I'm
        </h1>

        {/* NAME TEXT — large, solid white with cyan glow */}
        <h2
          ref={nameRef}
          className="
            font-extrabold leading-[0.95] text-white
            text-[3.2rem]
            sm:text-[4.2rem]
            md:text-[5.5rem]
            lg:text-[7rem]
            xl:text-[8rem]
            2xl:text-[8.5rem]
            tracking-tight whitespace-nowrap
          "
          style={{
            fontFamily: "var(--font-name)",
            textShadow: "0 0 60px rgba(77, 184, 255, 0.5), 0 0 120px rgba(77, 184, 255, 0.2), 0 2px 4px rgba(0,0,0,0.5)"
          }}
        >
          {name.map((char, idx) => (
            <span key={idx} className="letter inline-block" style={{ perspective: "500px" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        {/* SUBTITLE */}
        <p
          ref={subtitleRef}
          className="mt-5 text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(77, 184, 255, 0.6)",
            fontWeight: 300
          }}
        >
          Engineer · Creator · Innovator
        </p>
      </div>

      {/* ROLES BLOCK */}
      <div ref={rolesRef} className="absolute opacity-0 text-left z-10">
        <div className="border-l-2 border-[#4DB8FF]/60 pl-5 lg:pl-7 py-3 lg:py-4">
          <p
            className="text-lg lg:text-2xl font-semibold mb-4 lg:mb-6 tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--accent)"
            }}
          >
            Hire me for
          </p>

          <div className="space-y-3 lg:space-y-4">
            {["App Developer", "Web Developer", "Full Stack", "AI/ML"].map((role, i) => (
              <p
                key={i}
                className="text-white/80 text-base lg:text-xl xl:text-2xl hover:text-[#4DB8FF] hover:translate-x-3 transition-all duration-300 flex items-center gap-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DB8FF]/50 inline-block" />
                {role}
              </p>
            ))}
          </div>

          <a
            href="/resume/Rakshith_Ganjimut_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 lg:mt-8 px-7 lg:px-9 py-2.5 lg:py-3 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] text-black font-semibold text-sm lg:text-base rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(77,184,255,0.4)] active:scale-95 transition-all duration-300 inline-block tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get Resume ↗
          </a>
        </div>
      </div>

      {/* PROFILE IMAGE CIRCLE */}
      <div
        ref={imageRef}
        className="absolute opacity-0 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full p-[2px] flex items-center justify-center relative animate-pulse-glow"
          style={{ background: "linear-gradient(135deg, #4DB8FF, #AEE6FF, #4DB8FF)" }}
        >
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
};

export default Name;
