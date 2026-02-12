import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";

/**
 * Subtle section-level neural particle background.
 * Uses fewer particles and blur for a gentle, ambient effect.
 */
export default function SectionParticles({
    color = "#4DB8FF",
    particleCount = 120,
    speed = 0.4,
    trailOpacity = 0.25,
    blur = 2,
    className = ""
}) {
    return (
        <NeuralBackground
            color={color}
            particleCount={particleCount}
            speed={speed}
            trailOpacity={trailOpacity}
            blur={blur}
            className={`absolute inset-0 z-0 opacity-30 ${className}`}
        />
    );
}
