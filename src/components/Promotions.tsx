"use client";

import { Sparkles, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Promotions() {
    const { language } = useLanguage();

    return (
        <section className="py-16 bg-background relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="glass rounded-3xl p-8 md:p-12 border border-accent/30 relative overflow-hidden bg-gradient-to-br from-[#12121e] via-[#0d0d14] to-[#08080c] shadow-[0_0_50px_rgba(0,243,255,0.08)]">
                    {/* Glow background */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/15 rounded-full filter blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/15 rounded-full filter blur-[100px] pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        {/* Left Info Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider">
                                <Sparkles size={14} className="animate-spin" />
                                <span>{language === "bn" ? "স্পেশাল অফার • ২০২৬" : "SPECIAL LAUNCH OFFER • 2026"}</span>
                            </div>

                            <h3 className="font-heading text-3xl md:text-5xl font-black text-white leading-tight">
                                {language === "bn" ? (
                                    <>আপনার ব্র্যান্ডের জন্য সম্পূর্ণ অটোমেটেড <span className="text-accent">E-Commerce প্ল্যাটফর্ম</span></>
                                ) : (
                                    <>Transform Your Brand with an Automated <span className="text-accent">E-Commerce Engine</span></>
                                )}
                            </h3>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                {language === "bn" ? (
                                    "ফেসবুক মেসেঞ্জারে ম্যানুয়াল রিপ্লাই দেওয়ার দিন শেষ! বিকাশ/নগদ অটো পেমেন্ট ও ইনভেন্টরি সহ আধুনিক ই-কমার্স ওয়েবসাইট বানিয়ে সেলস বাড়ান বহুগুণ।"
                                ) : (
                                    "Stop losing 40% of sales to manual messaging delays. Get a dedicated e-commerce store with instant bKash/Nagad auto-checkout, live inventory, and 0.1s cloud hosting."
                                )}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                                    <span>{language === "bn" ? "১ম বছর ফ্রি ঢাকা ক্লাউড হোস্টিং" : "1st Year Free Dhaka Cloud Hosting"}</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                                    <span>{language === "bn" ? "বিকাশ ও নগদ অটোমেটেড পেমেন্ট" : "Instant bKash & Nagad Auto-Gateway"}</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                                    <span>{language === "bn" ? "১ বছরের সম্পূর্ণ ফ্রি টেক সাপোর্ট" : "1-Year Full Technical Warranty"}</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                                    <span>{language === "bn" ? "৫০% নিরাপদ মাইলস্টোন পেমেন্ট" : "50% Milestone-Based Billing"}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <Link
                                    href="/start-project"
                                    className="bg-accent text-black hover:bg-cyan-300 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)]"
                                >
                                    <span>{language === "bn" ? "এখনই শুরু করুন" : "Get Started Now"}</span>
                                    <ArrowRight size={16} />
                                </Link>

                                <a
                                    href="https://m.me/1179663841894781"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 hover:bg-white/15 text-white border border-white/10 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                                >
                                    <span>{language === "bn" ? "মেসেঞ্জারে চ্যাট করুন" : "Chat on Messenger"}</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Banner Preview Column */}
                        <div className="lg:col-span-5 relative group">
                            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a0a10]">
                                <div className="aspect-[4/3] relative flex items-center justify-center p-8 bg-gradient-to-tr from-purple-950/40 via-cyan-950/30 to-black">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto text-accent shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                                            <Zap size={32} />
                                        </div>
                                        <h4 className="font-heading text-2xl font-black text-white">OviSoft Cloud Node</h4>
                                        <p className="text-xs text-gray-300 max-w-xs">
                                            Dhaka Private Data Center • 0.1s Ultra-Low Latency • 99.99% Uptime Guarantee
                                        </p>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold tracking-wider">
                                            ● LIVE & OPERATIONAL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
