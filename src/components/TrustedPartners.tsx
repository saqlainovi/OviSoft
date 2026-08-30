"use client";

import { Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustedPartners() {
    const { language } = useLanguage();

    const partners = [
        { name: "bKash Auto Gateway", badge: "Payment Partner" },
        { name: "Nagad Merchant API", badge: "Payment Partner" },
        { name: "SSLCommerz Enterprise", badge: "Secure Gateway" },
        { name: "Pathao Courier API", badge: "Logistics Sync" },
        { name: "RedX Logistics", badge: "Delivery Partner" },
        { name: "Next.js 15 & React 19", badge: "Tech Architecture" },
        { name: "Cloudflare Enterprise", badge: "DDoS Security" },
        { name: "Dhaka Cloud Tier-3", badge: "Data Center" },
        { name: "PostgreSQL Database", badge: "Enterprise DB" },
        { name: "FastAPI & Microservices", badge: "Backend API" }
    ];

    return (
        <section className="py-16 bg-[#08080c] border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest mb-3">
                    <Shield size={13} className="text-accent" />
                    <span>{language === "bn" ? "বিশ্বস্ত পার্টনার ও টেকনোলজি ইকোসিস্টেম" : "TRUSTED ECOSYSTEM & ENTERPRISE PARTNERS"}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
                    {language === "bn"
                        ? "শীর্ষস্থানীয় পেমেন্ট গেটওয়ে, লজিস্টিক ও ক্লাউড ইনফ্রাস্ট্রাকচারের সাথে নিরবচ্ছিন্ন ইন্টিগ্রেশন।"
                        : "Seamless enterprise integration with Bangladesh's premier fintech, logistics, and cloud networks."}
                </p>
            </div>

            {/* Infinite Logo / Partner Ribbon */}
            <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex gap-6 py-4 animate-marquee whitespace-nowrap">
                    {[...partners, ...partners].map((p, idx) => (
                        <div
                            key={idx}
                            className="glass px-6 py-3.5 rounded-2xl border border-white/10 hover:border-accent/40 bg-[#111118] flex items-center gap-3 transition-all duration-300 group shrink-0 shadow-lg"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="font-heading font-bold text-sm text-white group-hover:text-accent transition-colors">
                                {p.name}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                                {p.badge}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
