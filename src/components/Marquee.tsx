"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-primary text-white py-6 overflow-hidden relative rotate-[-2deg] scale-105 z-10 my-10 border-y border-white/10">
            <div className="flex whitespace-nowrap animate-marquee font-heading font-bold text-4xl uppercase tracking-widest">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-8 mx-4">
                        <span>Creative Engineering</span>
                        <span className="text-white/50">•</span>
                        <span>AI Solutions</span>
                        <span className="text-white/50">•</span>
                        <span>Mobile Apps</span>
                        <span className="text-white/50">•</span>
                        <span>Web Development</span>
                        <span className="text-white/50">•</span>
                        <span>UI/UX Design</span>
                        <span className="text-white/50">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
