"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Smartphone, BrainCircuit, PenTool, Database, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const { language } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.innerWidth > 768 && wrapperRef.current && sectionRef.current) {
            const pin = gsap.fromTo(
                wrapperRef.current,
                { x: 0 },
                {
                    x: () => -(wrapperRef.current!.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => "+=" + wrapperRef.current!.scrollWidth,
                        invalidateOnRefresh: true,
                    },
                }
            );

            return () => {
                pin.kill();
            };
        }
    }, []);

    const services = [
        {
            icon: ShoppingBag,
            titleEn: "E-Commerce Engines",
            titleBn: "অটোমেটেড ই-কমার্স",
            descEn: "Ultra-fast online stores with bKash/Nagad instant payment gateways, live inventory, and SMS alerts.",
            descBn: "বিকাশ ও নগদ অটো পেমেন্ট, স্টক ট্র্যাকিং ও ইনস্ট্যান্ট SMS অ্যালার্ট সহ আধুনিক ই-কমার্স প্ল্যাটফর্ম।"
        },
        {
            icon: Code2,
            titleEn: "Next.js Web Applications",
            titleBn: "নেক্সট.জেএস ওয়েব ডেভেলপমেন্ট",
            descEn: "Futuristic corporate portals and web platforms built with Next.js 15, React 19, and TailwindCSS.",
            descBn: "নেক্সট.জেএস ১৫ ও রিঅ্যাক্ট ১৯ দিয়ে তৈরি আন্তর্জাতিক মানের দৃষ্টিনন্দন ও সুপারফাস্ট ওয়েবসাইট।"
        },
        {
            icon: BrainCircuit,
            titleEn: "AI Automation & Chatbots",
            titleBn: "এআই অটোমেশন ও চ্যাটবট",
            descEn: "24/7 autonomous AI agents for Facebook Messenger, customer lead generation, and workflow automation.",
            descBn: "ফেসবুক মেসেঞ্জার ও ওয়েবসাইটের জন্য ২৪/৭ লাইভ এআই অ্যাসিস্ট্যান্ট এবং সেলস অটোমেশন।"
        },
        {
            icon: Database,
            titleEn: "Custom Software & ERP",
            titleBn: "কাস্টম ইআরপি ও সফটওয়্যার",
            descEn: "Bespoke inventory management, POS billing, accounts, and factory automation systems.",
            descBn: "ফ্যাক্টরি ও রিটেল ব্যবসার জন্য কাস্টম ইনভেন্টরি, চালানি ও অ্যাকাউন্টস সফটওয়্যার।"
        },
        {
            icon: Smartphone,
            titleEn: "Mobile App Development",
            titleBn: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
            descEn: "Cross-platform mobile applications for iOS and Android with fluid native performance.",
            descBn: "আইওএস ও অ্যান্ড্রয়েডের জন্য হাই-পারফরম্যান্স ফ্লটার ও রিঅ্যাক্ট নেটিভ মোবাইল অ্যাপস।"
        },
        {
            icon: PenTool,
            titleEn: "UI/UX & 3D Interactive Design",
            titleBn: "ইউআই/ইউএক্স ও থ্রিডি ডিজাইন",
            descEn: "Dark-mode futuristic user interfaces with interactive micro-animations and micro-interactions.",
            descBn: "ইউজারদের মুগ্ধ করার মতো আকর্ষণীয় ডার্ক মোড ইন্টারফেস ও ইন্টারেক্টিভ অ্যানিমেশন ডিজাইন।"
        },
    ];

    return (
        <section ref={sectionRef} id="services" className="overflow-hidden py-28 bg-background relative">
            <div className="container mx-auto mb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                    <span>{language === "bn" ? "আমাদের সার্ভিসসমূহ" : "What We Build"}</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                    {language === "bn" ? "প্রকৌশল ও উদ্ভাবনের ক্ষেত্র" : "Core Capabilities"}
                </h2>
            </div>

            <div ref={wrapperRef} className="flex gap-8 px-6 md:px-20 w-max pb-6">
                {services.map((service, i) => (
                    <SpotlightCard
                        key={i}
                        spotlightColor="rgba(0, 243, 255, 0.18)"
                        tiltIntensity={8}
                        className="w-[85vw] md:w-[420px] h-[480px] bg-[#111116] border border-white/10 rounded-3xl p-10 flex flex-col justify-between transition-all duration-300 hover:border-accent/50 group flex-shrink-0"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span className="text-gray-600 font-mono text-xs font-bold">0{i + 1}</span>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors leading-snug">
                                {language === "bn" ? service.titleBn : service.titleEn}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {language === "bn" ? service.descBn : service.descEn}
                            </p>
                        </div>

                        <Link
                            href="/start-project"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-cyan-300 transition-colors pt-4 border-t border-white/5"
                        >
                            <span>{language === "bn" ? "শুরু করুন" : "Get Started"}</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
}
