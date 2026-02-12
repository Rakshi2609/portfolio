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
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight;

            if (currentScrollY > heroHeight * 0.7) {
                setVisible(true);
            } else {
                setVisible(false);
                setMenuOpen(false);
            }
        };

        // Track active section
        const sectionElements = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        );

        sectionElements.forEach((s) => observer.observe(s));
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

    // Animate mobile menu open/close
    useEffect(() => {
        if (menuRef.current) {
            if (menuOpen) {
                gsap.fromTo(
                    menuRef.current,
                    { opacity: 0, y: -10, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(2)" }
                );
            } else {
                gsap.to(menuRef.current, {
                    opacity: 0, y: -10, scale: 0.95, duration: 0.2, ease: "power2.in",
                });
            }
        }
    }, [menuOpen]);

    const scrollToSection = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const glassStyle = {
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(77, 184, 255, 0.05)",
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-5 z-[999] opacity-0 -translate-y-[100px] left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-auto max-md:translate-x-0 max-md:right-5"
        >
            {/* ─── DESKTOP NAV (md+) ─── */}
            <div
                className="hidden md:flex items-center gap-1 px-2 py-2 rounded-2xl"
                style={glassStyle}
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

            {/* ─── MOBILE HAMBURGER (below md) ─── */}
            <div className="md:hidden relative">
                {/* Hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
                    style={glassStyle}
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col items-center justify-center gap-[5px] w-5">
                        <span
                            className="block w-full h-[2px] rounded-full bg-[#4DB8FF] transition-all duration-300 origin-center"
                            style={{
                                transform: menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
                            }}
                        />
                        <span
                            className="block w-full h-[2px] rounded-full bg-[#4DB8FF] transition-all duration-300"
                            style={{
                                opacity: menuOpen ? 0 : 1,
                                transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                            }}
                        />
                        <span
                            className="block w-full h-[2px] rounded-full bg-[#4DB8FF] transition-all duration-300 origin-center"
                            style={{
                                transform: menuOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
                            }}
                        />
                    </div>
                </button>

                {/* Dropdown menu */}
                <div
                    ref={menuRef}
                    className="absolute top-14 right-0 rounded-xl py-2 px-1 min-w-[160px]"
                    style={{
                        ...glassStyle,
                        opacity: 0,
                        pointerEvents: menuOpen ? "auto" : "none",
                    }}
                >
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    color: isActive ? "#4DB8FF" : "rgba(255, 255, 255, 0.5)",
                                    background: isActive ? "rgba(77, 184, 255, 0.1)" : "transparent",
                                }}
                            >
                                <span className="flex items-center gap-2.5">
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#4DB8FF] inline-block" />
                                    )}
                                    {section.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default FloatingNav;
