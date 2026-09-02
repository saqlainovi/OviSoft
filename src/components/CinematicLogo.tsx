"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CinematicLogoProps {
    className?: string;
    size?: number;
    autoPlay?: boolean;
    onComplete?: () => void;
    showText?: boolean;
    interactive?: boolean;
}

export default function CinematicLogo({
    className = "",
    size = 220,
    autoPlay = true,
    onComplete,
    showText = true,
    interactive = true
}: CinematicLogoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const topSwooshRef = useRef<SVGGElement>(null);
    const bottomSwooshRef = useRef<SVGGElement>(null);
    const finalLogoRef = useRef<HTMLDivElement>(null);
    const lightStreakRef = useRef<HTMLDivElement>(null);
    const energyPulseRef = useRef<HTMLDivElement>(null);
    const glowRingRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);

    const playRevealAnimation = () => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // Initial setup
        gsap.set(finalLogoRef.current, { opacity: 0, scale: 0.95 });
        gsap.set(topSwooshRef.current, {
            opacity: 0,
            rotation: -140,
            x: -120,
            y: -100,
            scale: 0.6,
            transformOrigin: "center center"
        });
        gsap.set(bottomSwooshRef.current, {
            opacity: 0,
            rotation: 140,
            x: 120,
            y: 100,
            scale: 0.6,
            transformOrigin: "center center"
        });
        gsap.set(lightStreakRef.current, { opacity: 0, x: "-150%", rotate: 25 });
        gsap.set(energyPulseRef.current, { opacity: 0, scale: 0.5 });
        gsap.set(glowRingRef.current, { opacity: 0, scale: 0.8 });
        if (textRef.current) {
            gsap.set(textRef.current, { opacity: 0, y: 20 });
        }

        // 1. Initial atmospheric glow fade in
        tl.to(glowRingRef.current, {
            opacity: 0.8,
            scale: 1.1,
            duration: 1.2,
            ease: "power2.out"
        }, 0);

        // 2. Bright blue upper swoosh sweeps in clockwise
        tl.to(topSwooshRef.current, {
            opacity: 1,
            rotation: 0,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.6,
            ease: "expo.out"
        }, 0.2);

        // 3. Dark navy lower swoosh gracefully sweeps in counter-direction
        tl.to(bottomSwooshRef.current, {
            opacity: 1,
            rotation: 0,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.6,
            ease: "expo.out"
        }, 0.3);

        // 4. Lock both pieces into exact final logo with precision
        tl.to([topSwooshRef.current, bottomSwooshRef.current], {
            opacity: 0,
            duration: 0.3,
            ease: "power1.in"
        }, 1.7);

        tl.to(finalLogoRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.4)"
        }, 1.7);

        // 5. Clean energy pulse & soft blue glow upon lock
        tl.to(energyPulseRef.current, {
            opacity: 0.8,
            scale: 1.8,
            duration: 0.8,
            ease: "power3.out"
        }, 1.75)
        .to(energyPulseRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        }, 2.1);

        // 6. Subtle premium light streak traveling across the curves
        tl.to(lightStreakRef.current, {
            opacity: 0.85,
            x: "150%",
            duration: 1.1,
            ease: "power2.inOut"
        }, 1.9)
        .to(lightStreakRef.current, {
            opacity: 0,
            duration: 0.3
        }, 2.8);

        // 7. Reveal company wordmark
        if (textRef.current) {
            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, 2.2);
        }

        return tl;
    };

    useEffect(() => {
        if (autoPlay) {
            playRevealAnimation();
        }
    }, [autoPlay]);

    const handleMouseEnter = () => {
        if (!interactive) return;
        setIsHovered(true);
        gsap.to(finalLogoRef.current, {
            scale: 1.06,
            filter: "drop-shadow(0 0 28px rgba(0, 122, 255, 0.75))",
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(lightStreakRef.current, {
            opacity: 0.7,
            x: "150%",
            duration: 0.8,
            ease: "power2.inOut",
            onStart: () => {
                gsap.set(lightStreakRef.current, { x: "-150%", opacity: 0.7 });
            }
        });
    };

    const handleMouseLeave = () => {
        if (!interactive) return;
        setIsHovered(false);
        gsap.to(finalLogoRef.current, {
            scale: 1,
            filter: "drop-shadow(0 0 16px rgba(0, 122, 255, 0.35))",
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleClick = () => {
        if (!interactive) return;
        playRevealAnimation();
    };

    return (
        <div
            ref={containerRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative flex flex-col items-center justify-center select-none ${interactive ? 'cursor-pointer' : ''} ${className}`}
            style={{ width: size, height: showText ? size + 60 : size }}
        >
            {/* Atmospheric Background Glow */}
            <div
                ref={glowRingRef}
                className="absolute rounded-full pointer-events-none filter blur-[45px] bg-gradient-to-tr from-[#007aff]/30 via-[#0040aa]/20 to-transparent"
                style={{ width: size * 1.3, height: size * 1.3 }}
            />

            {/* Energy Expansion Wave Ring */}
            <div
                ref={energyPulseRef}
                className="absolute rounded-full pointer-events-none border border-[#00a2ff]/60 shadow-[0_0_30px_rgba(0,162,255,0.5)]"
                style={{ width: size, height: size }}
            />

            {/* Animation Stage */}
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                {/* SVG Swoosh Reveal Phase */}
                <svg
                    viewBox="0 0 500 500"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ overflow: "visible" }}
                >
                    <defs>
                        <linearGradient id="cyanSwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00f0ff" />
                            <stop offset="50%" stopColor="#007aff" />
                            <stop offset="100%" stopColor="#0051ff" />
                        </linearGradient>

                        <linearGradient id="navySwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a8a" />
                            <stop offset="50%" stopColor="#0a2558" />
                            <stop offset="100%" stopColor="#03102d" />
                        </linearGradient>

                        <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Bright Blue Upper Swoosh */}
                    <g ref={topSwooshRef} filter="url(#cyanGlow)">
                        <path
                            d="M250,50 C360,50 450,140 450,250 C450,200 370,160 300,180 C220,200 170,260 120,300 C80,330 50,310 50,250 C50,140 140,50 250,50 Z"
                            fill="url(#cyanSwooshGrad)"
                        />
                    </g>

                    {/* Dark Navy Lower Swoosh */}
                    <g ref={bottomSwooshRef}>
                        <path
                            d="M250,450 C140,450 50,360 50,250 C50,300 130,340 200,320 C280,300 330,240 380,200 C420,170 450,190 450,250 C450,360 360,450 250,450 Z"
                            fill="url(#navySwooshGrad)"
                        />
                    </g>
                </svg>

                {/* Final Original 100% Unmodified OviSoft Logo with Shimmer Overlay */}
                <div
                    ref={finalLogoRef}
                    className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center drop-shadow-[0_0_20px_rgba(0,122,255,0.45)] transition-all"
                >
                    <img
                        src="/logo.png"
                        alt="OviSoft"
                        className="w-full h-full object-contain select-none pointer-events-none"
                    />

                    {/* Travelling Light Shimmer Streak */}
                    <div
                        ref={lightStreakRef}
                        className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-25 mix-blend-overlay"
                    />
                </div>
            </div>

            {/* Optional Typography Reveal */}
            {showText && (
                <div ref={textRef} className="mt-5 text-center">
                    <h2 className="font-heading text-3xl font-black tracking-wider text-white">
                        OviSoft<span className="text-accent text-4xl leading-none">.</span>
                    </h2>
                    <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-1">
                        Crafting Digital Dreams
                    </p>
                </div>
            )}
        </div>
    );
}