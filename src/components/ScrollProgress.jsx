import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed right-3 top-1/2 -translate-y-1/2 z-[998] hidden lg:flex flex-col items-center"
            style={{ pointerEvents: "none" }}
        >
            {/* Track */}
            <div className="relative w-[2px] h-[120px] rounded-full overflow-hidden"
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
            >
                {/* Progress fill */}
                <div
                    className="absolute bottom-0 left-0 w-full rounded-full transition-all duration-150"
                    style={{
                        height: `${progress * 100}%`,
                        background: "linear-gradient(to top, #4DB8FF, rgba(77, 184, 255, 0.2))",
                        boxShadow: "0 0 10px rgba(77, 184, 255, 0.5), 0 0 20px rgba(77, 184, 255, 0.2)",
                    }}
                />
            </div>

            {/* Percentage label */}
            <p
                className="mt-2 text-[10px] font-light tracking-wider"
                style={{
                    fontFamily: "var(--font-body)",
                    color: progress > 0.05 ? "rgba(77, 184, 255, 0.5)" : "rgba(255,255,255,0.15)",
                    transition: "color 0.3s",
                }}
            >
                {Math.round(progress * 100)}%
            </p>
        </div>
    );
};

export default ScrollProgress;
