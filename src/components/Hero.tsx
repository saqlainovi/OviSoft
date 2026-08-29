"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Video Playlist
    const videos = [
        "/videos/AI_Brain_Video_Generation.mp4",
        "/videos/Abstract_Digital_Tunnel_Video_Generation.mp4",
        "/videos/Cybernetic_Code_Screen_Generation.mp4"
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial State
        gsap.set(titleRef.current?.children || [], { y: "100%" });
        gsap.set(".hero-fade", { opacity: 0, y: 20 });
        gsap.set(".hero-bg", { opacity: 0, scale: 1.1 });

        // Animation
        tl.to(".hero-bg", { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" })
            .to(titleRef.current?.children || [], {
                y: "0%",
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
            }, "-=1")
            .to(".hero-fade", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            }, "-=0.5");

    }, []);

    // Video Rotation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        }, 8000); // Rotate every 8 seconds

        return () => clearInterval(interval);
    }, [videos.length]);

    return (
        <section ref={heroRef} id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Background Video Layer */}
            {videos.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 z-0 hero-bg transition-opacity duration-1000 ease-in-out ${index === currentVideoIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            ))}


            <div className="container mx-auto px-6 relative z-30">
                <div className="max-w-4xl">
                    <h1 ref={titleRef} className="font-heading font-black text-[12vw] md:text-[7vw] leading-[1] text-accent mix-blend-screen">
                        <div className="overflow-hidden"><span className="inline-block">We Craft</span></div>
                        <div className="overflow-hidden"><span className="inline-block text-white">Digital Dreams</span></div>
                    </h1>

                    <p className="hero-fade mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
                        Redefining the digital landscape with cutting-edge technology and premium aesthetics.
                    </p>

                    <div className="hero-fade flex gap-6 mt-12">
                        <Link
                            href="#work"
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider overflow-hidden magnetic-btn"
                        >
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                Explore Projects <ArrowUpRight size={20} />
                            </span>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </Link>

                        <Link
                            href="#contact"
                            className="group px-8 py-4 border border-white/20 backdrop-blur-md rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all magnetic-btn"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hero-fade">
                <span className="uppercase text-xs tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </div>

        </section>
    );
}
