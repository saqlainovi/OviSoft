"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const preloaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setLoading(false),
        });

        tl.to(".loader-text", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
        })
            .to(".loader-progress", {
                width: "100%",
                duration: 1.5,
                ease: "power2.inOut",
            })
            .to(preloaderRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5,
            });

    }, []);

    if (!loading) return null;

    return (
        <div ref={preloaderRef} className="fixed inset-0 bg-black z-[99999] flex flex-col justify-center items-center preloader">
            <div className="overflow-hidden mb-4 flex flex-col items-center gap-3">
                <img
                    src="/logo.png"
                    alt="OviSoft Logo"
                    className="w-16 h-16 object-contain rounded-full animate-pulse drop-shadow-[0_0_25px_rgba(0,122,255,0.6)]"
                />
                <div className="loader-text font-heading text-4xl sm:text-6xl font-black tracking-widest text-accent opacity-0 translate-y-5">
                    OviSoft
                </div>
            </div>
            <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
                <div className="loader-progress absolute top-0 left-0 h-full w-0 bg-primary"></div>
            </div>
        </div>
    );
}
