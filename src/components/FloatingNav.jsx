import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "connect", label: "Connect" },
];

const FloatingNav = () => {
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight;

            // Show nav after scrolling past hero
            if (currentScrollY > heroHeight * 0.7) {
                setVisible(true);
            } else {
                setVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        // Track active section
        const sectionElements = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionElements.forEach((section) => observer.observe(section));

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (navRef.current) {
            gsap.to(navRef.current, {
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
                duration: 0.4,
                ease: "power2.out",
            });
        }
    }, [visible]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-[999] opacity-0 -translate-y-[100px]"
        >
            <div
                className="flex items-center gap-1 px-2 py-2 rounded-2xl"
                style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(77, 184, 255, 0.05)",
                }}
            >
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                            style={{
                                fontFamily: "var(--font-display)",
                                color: isActive ? "#4DB8FF" : "rgba(255, 255, 255, 0.45)",
                                background: isActive ? "rgba(77, 184, 255, 0.08)" : "transparent",
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.45)";
                                    e.currentTarget.style.background = "transparent";
                                }
                            }}
                        >
                            {isActive && (
                                <span
                                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, #4DB8FF, transparent)",
                                    }}
                                />
                            )}
                            {section.label}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default FloatingNav;
