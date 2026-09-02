"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import CinematicLogo from "./CinematicLogo";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const preloaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Allow user to skip by clicking or waiting for full cinematic sequence
        const timeout = setTimeout(() => {
            if (preloaderRef.current) {
                gsap.to(preloaderRef.current, {
                    opacity: 0,
                    scale: 1.05,
                    duration: 0.8,
                    ease: "power3.inOut",
                    onComplete: () => setLoading(false)
                });
            }
        }, 3600);

        return () => clearTimeout(timeout);
    }, []);

    const handleAnimationComplete = () => {
        if (preloaderRef.current) {
            gsap.to(preloaderRef.current, {
                opacity: 0,
                scale: 1.05,
                duration: 0.8,
                ease: "power3.inOut",
                delay: 0.4,
                onComplete: () => setLoading(false)
            });
        }
    };

    if (!loading) return null;

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 bg-[#030611] z-[99999] flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Ambient Dark Navy Atmospheric Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#007aff]/10 rounded-full filter blur-[180px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#002b80]/15 rounded-full filter blur-[150px] pointer-events-none" />

            {/* Cinematic Logo Reveal */}
            <div className="relative z-10">
                <CinematicLogo
                    size={160}
                    autoPlay={true}
                    onComplete={handleAnimationComplete}
                    showText={true}
                    interactive={false}
                />
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full relative overflow-hidden mt-8">
                <div className="loader-progress absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#0051ff] via-[#00f0ff] to-[#007aff] animate-[pulse_2s_ease-in-out_infinite]" />
            </div>

            {/* Skip hint */}
            <button
                onClick={() => setLoading(false)}
                className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 hover:text-accent transition-colors cursor-pointer"
            >
                Click to enter
            </button>
        </div>
    );
}
