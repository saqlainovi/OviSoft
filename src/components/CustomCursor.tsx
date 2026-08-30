"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorFollowerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const dot = cursorDotRef.current;
        const follower = cursorFollowerRef.current;
        if (!dot || !follower) return;

        // Smooth mouse move with high precision
        const onMouseMove = (e: MouseEvent) => {
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.02,
                ease: "none"
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        };

        // Click Ripple Physics
        const onMouseDown = () => {
            setIsClicked(true);
            gsap.to(follower, {
                scale: 0.75,
                borderColor: "#00f3ff",
                duration: 0.1
            });
        };

        const onMouseUp = () => {
            setIsClicked(false);
            gsap.to(follower, {
                scale: isHovered ? 2.2 : 1,
                borderColor: "rgba(255, 255, 255, 0.4)",
                duration: 0.3,
                ease: "elastic.out(1, 0.4)"
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        // Hover & Magnetic Detectors
        const attachHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                "a, button, input, select, textarea, [role='button'], .magnetic-btn, .group"
            );

            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setIsHovered(true);
                    gsap.to(follower, {
                        scale: 2.2,
                        backgroundColor: "rgba(0, 243, 255, 0.08)",
                        borderColor: "#00f3ff",
                        duration: 0.25
                    });
                    gsap.to(dot, {
                        scale: 0.5,
                        backgroundColor: "#00f3ff",
                        duration: 0.2
                    });
                });

                el.addEventListener("mouseleave", () => {
                    setIsHovered(false);
                    gsap.to(follower, {
                        scale: 1,
                        backgroundColor: "transparent",
                        borderColor: "rgba(255, 255, 255, 0.4)",
                        duration: 0.25
                    });
                    gsap.to(dot, {
                        scale: 1,
                        backgroundColor: "#00f3ff",
                        duration: 0.2
                    });
                });
            });
        };

        attachHoverListeners();
        const timer = setTimeout(attachHoverListeners, 600);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            clearTimeout(timer);
        };
    }, [pathname]);

    return (
        <>
            {/* Inner precise dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#00f3ff]"
            />

            {/* Outer smooth follower */}
            <div
                ref={cursorFollowerRef}
                className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/40 pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] transition-colors"
            />
        </>
    );
}
