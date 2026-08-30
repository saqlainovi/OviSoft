"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export default function AnimatedCounter({
    target,
    duration = 2,
    suffix = "",
    prefix = "",
    className = ""
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = counterRef.current;
        if (!el) return;

        const obj = { val: 0 };
        const tween = gsap.to(obj, {
            val: target,
            duration: duration,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            onUpdate: () => {
                setCount(Math.floor(obj.val));
            }
        });

        return () => {
            tween.kill();
        };
    }, [target, duration]);

    return (
        <span ref={counterRef} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}
