import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    // Throttle mousemove for performance
    let lastCall = 0;
    const moveCursor = (e) => {
      const now = Date.now();
      if (now - lastCall < 16) return; // ~60fps
      lastCall = now;
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, input, textarea"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring - Hidden on mobile/tablet */}
      <div
        ref={cursorRef}
        className="hidden lg:block fixed w-8 h-8 border-2 border-[#4DB8FF] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ mixBlendMode: "difference" }}
      />
      
      {/* Inner cursor dot - Hidden on mobile/tablet */}
      <div
        ref={cursorDotRef}
        className="hidden lg:block fixed w-2 h-2 bg-[#4DB8FF] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
