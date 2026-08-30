"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Zap, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { language } = useLanguage();
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const floatingBadgesRef = useRef<HTMLDivElement>(null);

    const videos = [
        "/videos/AI_Brain_Video_Generation.mp4",
        "/videos/Abstract_Digital_Tunnel_Video_Generation.mp4",
        "/videos/Cybernetic_Code_Screen_Generation.mp4"
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline();

        // Stagger Title Reveal
        if (titleRef.current) {
            gsap.set(titleRef.current.children, { y: "110%", opacity: 0 });
            gsap.set(".hero-fade", { opacity: 0, y: 30 });

            tl.to(titleRef.current.children, {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out"
            })
            .to(".hero-fade", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.6");
        }

        // Mouse Parallax on Hero elements
        const handleHeroMouseMove = (e: MouseEvent) => {
            const hero = heroRef.current;
            if (!hero) return;
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(".hero-title-layer", {
                x: x * 20,
                y: y * 20,
                duration: 0.5,
                ease: "power1.out"
            });

            gsap.to(".hero-badge-1", {
                x: x * -35,
                y: y * -35,
                duration: 0.6,
                ease: "power1.out"
            });

            gsap.to(".hero-badge-2", {
                x: x * 40,
                y: y * 30,
                duration: 0.7,
                ease: "power1.out"
            });

            gsap.to(".hero-badge-3", {
                x: x * -25,
                y: y * 35,
                duration: 0.6,
                ease: "power1.out"
            });
        };

        const hero = heroRef.current;
        if (hero) {
            hero.addEventListener("mousemove", handleHeroMouseMove);
        }

        return () => {
            if (hero) hero.removeEventListener("mousemove", handleHeroMouseMove);
        };
    }, []);

    // Video Rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [videos.length]);

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Video Layer with Smooth Blend */}
            {videos.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentVideoIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-45 scale-105"
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            ))}

            {/* Floating 3D Interactive Badges */}
            <div ref={floatingBadgesRef} className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                {/* Badge 1 */}
                <div className="hero-badge-1 absolute top-1/4 right-[10%] hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl glass border border-accent/40 text-accent text-xs font-bold shadow-[0_0_25px_rgba(0,243,255,0.2)] backdrop-blur-xl">
                    <Zap size={14} className="animate-pulse" />
                    <span>Next.js 15 & React 19</span>
                </div>

                {/* Badge 2 */}
                <div className="hero-badge-2 absolute bottom-1/3 left-[8%] hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl glass border border-purple-500/40 text-purple-300 text-xs font-bold shadow-[0_0_25px_rgba(168,85,247,0.2)] backdrop-blur-xl">
                    <Globe size={14} />
                    <span>Dedicated Dhaka Cloud Node</span>
                </div>

                {/* Badge 3 */}
                <div className="hero-badge-3 absolute top-1/3 left-[12%] hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-2xl glass border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-[0_0_25px_rgba(16,185,129,0.2)] backdrop-blur-xl">
                    <Shield size={14} />
                    <span>24/7 AI Automation Suite</span>
                </div>
            </div>

            {/* Center Content */}
            <div className="container mx-auto px-6 relative z-30 py-16">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    {/* Pill Tag */}
                    <div className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                        <Sparkles size={14} />
                        <span>{language === "bn" ? "প্রিমিয়াম ডিজিটাল এজেন্সি • ঢাকা" : "Next-Gen Digital Agency • Dhaka"}</span>
                    </div>

                    {/* Main Headline with 3D Parallax */}
                    <h1
                        ref={titleRef}
                        className="hero-title-layer font-heading font-black text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-tight mb-8"
                    >
                        <div className="overflow-hidden">
                            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
                                {language === "bn" ? "আমরা তৈরি করি" : "We Engineer"}
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="inline-block text-accent drop-shadow-[0_0_35px_rgba(0,243,255,0.4)]">
                                {language === "bn" ? "ভবিষ্যতের সফটওয়্যার" : "Digital Excellence"}
                            </span>
                        </div>
                    </h1>

                    <p className="hero-fade text-lg sm:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12">
                        {language === "bn"
                            ? "হাই-পারফরম্যান্স ই-কমার্স, কাস্টম ERP ও এআই অটোমেশনের পূর্ণাঙ্গ সমাধান—ঢাকায় নিজস্ব ডেডিকেটেড ক্লাউড হোস্টিং সহ।"
                            : "High-concurrency E-Commerce, custom software ERPs, and localized AI automation—hosted on dedicated private cloud nodes."}
                    </p>

                    {/* Action Buttons */}
                    <div className="hero-fade flex flex-wrap gap-5 justify-center md:justify-start">
                        <Link
                            href="/#pricing"
                            className="group relative px-8 py-4 bg-accent text-black rounded-full font-bold uppercase text-xs tracking-widest overflow-hidden transition-all duration-300 hover:bg-cyan-300 shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:shadow-cyan-400/60 flex items-center gap-2"
                        >
                            <span>{language === "bn" ? "প্যাকেজ দেখুন" : "Explore Packages"}</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>

                        <Link
                            href="/start-project"
                            className="group px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-md rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                        >
                            {language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start a Project"}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hero-fade">
                <span className="uppercase text-[10px] tracking-[0.25em] text-accent font-bold">SCROLL</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent animate-pulse" />
            </div>
        </section>
    );
}
