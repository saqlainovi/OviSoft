"use client";

import React, { useRef } from "react";
import gsap from "gsap";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    tiltIntensity?: number;
}

export default function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(0, 243, 255, 0.15)",
    tiltIntensity = 8
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        const spotlight = spotlightRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -tiltIntensity;
        const rotateY = ((x - centerX) / centerX) * tiltIntensity;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: "power2.out"
        });

        if (spotlight) {
            gsap.to(spotlight, {
                x: x,
                y: y,
                opacity: 1,
                duration: 0.15,
                ease: "power1.out"
            });
        }
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        const spotlight = spotlightRef.current;
        if (!card) return;

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)"
        });

        if (spotlight) {
            gsap.to(spotlight, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Dynamic Spotlight Radial Follower */}
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute -top-40 -left-40 w-80 h-80 rounded-full blur-2xl opacity-0 transition-opacity duration-300 z-0"
                style={{
                    background: `radial-gradient(circle, ${spotlightColor} 0%, rgba(0,0,0,0) 70%)`
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
