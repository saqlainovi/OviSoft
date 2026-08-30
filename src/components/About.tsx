"use client";

import { Sparkles, Zap, ShieldCheck, Server, ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";
import SpotlightCard from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { language } = useLanguage();

    return (
        <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                {/* Left Text Narrative */}
                <div className="lg:col-span-6 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest">
                        <Sparkles size={14} />
                        <span>{language === "bn" ? "ওভিসফট সম্পর্কে" : "Engineering DNA"}</span>
                    </div>

                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                        {language === "bn"
                            ? "প্রযুক্তির সীমানা অতিক্রম করে আমরা গড়ি ডিজিটাল ভবিষ্যৎ"
                            : "Architecting Ultra-Fast Digital Platforms for Scale"}
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                        {language === "bn"
                            ? "ওভিসফট শুধু সাধারণ কোনো আইটি ফার্ম নয়—এটি উদ্ভাবক, সফটওয়্যার স্থপতি ও ক্লাউড ইঞ্জিনিয়ারদের একটি দল। আমরা গতানুগতিক ধীরগতির টেমপ্লেটের পরিবর্তে তৈরি করি আল্ট্রা-ফাস্ট Next.js 15 আর্কিটেকচার।"
                            : "OviSoft is a modern software engineering and private cloud agency based in Dhaka. We build custom web apps, automated e-commerce, and bespoke ERPs engineered to handle millions of transactions with zero downtime."}
                    </p>

                    {/* Stats Counter Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                        <div>
                            <div className="font-heading text-4xl sm:text-5xl font-black text-accent mb-1 flex items-center">
                                <AnimatedCounter target={25} suffix="+" />
                            </div>
                            <span className="text-gray-400 uppercase tracking-wider text-[11px] font-bold">
                                {language === "bn" ? "সফল প্রজেক্ট" : "Projects Built"}
                            </span>
                        </div>

                        <div>
                            <div className="font-heading text-4xl sm:text-5xl font-black text-white mb-1 flex items-center">
                                <AnimatedCounter target={100} suffix="%" />
                            </div>
                            <span className="text-gray-400 uppercase tracking-wider text-[11px] font-bold">
                                {language === "bn" ? "ক্লায়েন্ট সন্তুষ্টি" : "Client Success"}
                            </span>
                        </div>

                        <div>
                            <div className="font-heading text-4xl sm:text-5xl font-black text-purple-400 mb-1 flex items-center">
                                <AnimatedCounter target={1} prefix="0." suffix="s" />
                            </div>
                            <span className="text-gray-400 uppercase tracking-wider text-[11px] font-bold">
                                {language === "bn" ? "ঢাকা ক্লাউড স্পিড" : "Dhaka Latency"}
                            </span>
                        </div>

                        <div>
                            <div className="font-heading text-4xl sm:text-5xl font-black text-emerald-400 mb-1 flex items-center">
                                <AnimatedCounter target={24} suffix="/7" />
                            </div>
                            <span className="text-gray-400 uppercase tracking-wider text-[11px] font-bold">
                                {language === "bn" ? "অটোনোমাস এআই" : "AI Workforce"}
                            </span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/team"
                            className="inline-flex items-center gap-2 text-accent hover:text-cyan-300 font-bold text-xs uppercase tracking-widest group"
                        >
                            <span>{language === "bn" ? "আমাদের টিম ও লিডারশিপ দেখুন" : "Explore Leadership & Engineering Team"}</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right Interactive 3D Video & Cyber Card */}
                <div className="lg:col-span-6">
                    <SpotlightCard
                        spotlightColor="rgba(0, 243, 255, 0.2)"
                        tiltIntensity={10}
                        className="rounded-3xl border border-white/15 bg-[#0a0a12] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                    >
                        {/* Video Layer */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-black/70 to-transparent z-10" />
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-50"
                            >
                                <source src="/videos/Cybernetic_Code_Screen_Generation.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Interactive HUD Elements */}
                        <div className="relative z-20 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span>DHAKA CLOUD LIVE</span>
                                </div>
                                <span className="text-xs text-gray-400 font-mono">192.168.0.100</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                    <Zap size={22} className="text-accent mb-2" />
                                    <h4 className="font-bold text-white text-sm">Next.js 15 Core</h4>
                                    <p className="text-[11px] text-gray-400 mt-1">SSR & Edge Rendering</p>
                                </div>

                                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                    <Server size={22} className="text-purple-400 mb-2" />
                                    <h4 className="font-bold text-white text-sm">Private Hosting</h4>
                                    <p className="text-[11px] text-gray-400 mt-1">Dhaka Datacenter</p>
                                </div>

                                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                    <ShieldCheck size={22} className="text-emerald-400 mb-2" />
                                    <h4 className="font-bold text-white text-sm">1-Year Warranty</h4>
                                    <p className="text-[11px] text-gray-400 mt-1">Full SLA Guarantee</p>
                                </div>

                                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                    <Award size={22} className="text-yellow-400 mb-2" />
                                    <h4 className="font-bold text-white text-sm">bKash Gateway</h4>
                                    <p className="text-[11px] text-gray-400 mt-1">Instant Auto Payment</p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
