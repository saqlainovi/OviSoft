"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Split text into characters
        // Using simple split for migration speed. 
        // In production, libraries like 'split-type' are robust, but manual span wrapping works for simple text.
        if (!textRef.current) return;

        // Animate
        const chars = textRef.current.querySelectorAll(".char");

        gsap.fromTo(chars,
            {
                y: "100%",
                opacity: 0
            },
            {
                y: "0%",
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.03,
                delay: delay,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, [children, delay]);

    const splitText = children.split("").map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
            <span className="char inline-block translate-y-full">
                {char === " " ? "\u00A0" : char}
            </span>
        </span>
    ));

    return (
        <div ref={textRef} className={`overflow-hidden leading-none ${className}`}>
            {splitText}
        </div>
    );
}
