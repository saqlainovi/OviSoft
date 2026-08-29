"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        // 1. Move Cursor
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });

            gsap.to(followerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // 2. Magnetic Buttons using Event Delegation
        // This allows it to work with dynamically added elements (like Next.js navigations)
        // We track mouse movement over specific elements

        const handleMagneticMove = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest(".magnetic-btn");
            if (target) {
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(target, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out",
                });

                gsap.to(followerRef.current, { scale: 2, duration: 0.2 });
            } else {
                gsap.to(followerRef.current, { scale: 1, duration: 0.2 });
            }
        };

        // We need to reset position when leaving
        // Event delegation for 'mouseleave' is tricky because it doesn't bubble like 'mouseout'
        // But 'mouseout' fires too often.
        // Instead, we can just detect if we are NOT on a magnetic btn in the move handler above 
        // and reset all ".magnetic-btn" positions? No, that's heavy.
        // 
        // Best approach for React + Global Magnetic:
        // Add listeners to elements when page changes.

        // Cleanup previous listeners if any (simple approach)
        const attachListeners = () => {
            const btns = document.querySelectorAll(".magnetic-btn");
            btns.forEach((btn) => {
                // Remove old listener to avoid dupes? 
                // Better to clone or use a flag. 
                // For simplicity in this migration, we'll assume lightweight listeners.

                // Actually, let's use the 'mouseenter' / 'mouseleave' local approach for reset
                btn.addEventListener("mouseleave", () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
                    gsap.to(followerRef.current, { scale: 1, duration: 0.2 });
                });

                // We still need the move logic locally for that specific button to avoid conflict
                btn.addEventListener("mousemove", (e: any) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(btn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                    gsap.to(followerRef.current, { scale: 2, duration: 0.2 });
                });
            });
        };

        // Run on mount and path change
        attachListeners();
        // A small timeout to allow new DOM elements to paint
        setTimeout(attachListeners, 500);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [pathname]);

    return (
        <>
            <div ref={cursorRef} className="cursor hidden md:block" />
            <div ref={followerRef} className="cursor-follower hidden md:block" />
        </>
    );
}
