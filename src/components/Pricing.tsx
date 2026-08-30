"use client";

import React, { useState } from "react";
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, Server, Star, Flame } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
    const { language } = useLanguage();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const packages = [
        {
            name: "Starter Express",
            tagline: language === "bn" ? "পার্সোনাল ও বায়ো সাইট" : "Fastest Launch for Individuals",
            badge: language === "bn" ? "ফাস্ট লঞ্চ" : "⚡ Fast Launch",
            price: language === "bn" ? "৳৫,০০০ — ৳১২,০০০" : "৳5,000 — ৳12,000",
            timeline: language === "bn" ? "৩-৫ কর্মদিবস" : "3-5 Business Days",
            description: language === "bn"
                ? "ব্যক্তিগত ব্র্যান্ড, পোর্টফোলিও, ডাক্তার, উকিল ও স্টার্টআপ বায়ো সাইটের জন্য আদর্শ।"
                : "Engineered for personal branding, doctor/lawyer profiles, portfolios, and startup landing pages.",
            features: language === "bn" ? [
                "১-৫ পেজ সম্পূর্ণ রেসপনসিভ ওয়েবসাইট",
                "মোবাইল ও ট্যাবলেট ফ্রেন্ডলি আধুনিক ডিজাইন",
                "ডাইনামিক কন্টাক্ট ফর্ম ও গুগল ম্যাপ",
                "বেসিক অন-পেজ SEO ও মেটা ট্যাগ",
                "ফ্রি SSL সিকিউরিটি সার্টিফিকেট",
                "১ম বছর ফ্রি ঢাকা ক্লাউড হোস্টিং",
                "৬ মাস ফ্রি টেকনিক্যাল সাপোর্ট"
            ] : [
                "1-5 Pages Ultra-Responsive Web Architecture",
                "Mobile & Tablet Optimized Futuristic UI",
                "Dynamic Lead Contact Form & Google Maps",
                "On-Page Technical SEO & Social Meta Tags",
                "Free Enterprise SSL Certificate",
                "1st Year Free Dhaka Dedicated Cloud Hosting",
                "6 Months Dedicated Technical Support"
            ],
            highlight: false,
            popular: false
        },
        {
            name: "Business Growth",
            tagline: language === "bn" ? "কর্পোরেট ও এজেন্সি" : "Full Dynamic Corporate Power",
            badge: language === "bn" ? "বেস্ট ভ্যালু" : "💎 High Value",
            price: language === "bn" ? "৳১৫,০০০ — ৳৩০,০০০" : "৳15,000 — ৳30,000",
            timeline: language === "bn" ? "৭-১২ কর্মদিবস" : "7-12 Business Days",
            description: language === "bn"
                ? "কর্পোরেট কোম্পানি, আইটি ফার্ম, ফ্যাক্টরি, এনজিও ও সার্ভিস এজেন্সির পূর্ণাঙ্গ ওয়েবসাইট।"
                : "Complete dynamic digital architecture for corporate IT firms, manufacturing, agencies, and institutions.",
            features: language === "bn" ? [
                "৫-১৫ পেজ প্রিমিয়াম ডাইনামিক ওয়েবসাইট",
                "সহজ অ্যাডমিন প্যানেল / কাস্টম CMS",
                "ব্লগ, টিম, সার্ভিস ও পোর্টফোলিও সেকশন",
                "অ্যাডভান্সড গুগল SEO অপটিমাইজেশন",
                "গুগল অ্যানালিটিক্স ও ফেসবুক পিক্সেল সেটআপ",
                "১ম বছর সম্পূর্ণ ফ্রি হাই-স্পিড হোস্টিং",
                "১ বছর ফ্রি মেইনটেন্যান্স ও টেক সাপোর্ট"
            ] : [
                "5-15 Dynamic Custom Pages + Blog Hub",
                "Custom Headless Admin Dashboard / CMS",
                "Dedicated Services, Portfolio & Team Showcase",
                "Advanced Google Search Engine Optimization",
                "Google Analytics & Facebook Meta Pixel Tracking",
                "1st Year Free Dhaka Dedicated Cloud Hosting",
                "1 Year Full Maintenance & SLA Support"
            ],
            highlight: false,
            popular: false
        },
        {
            name: "E-Commerce Pro",
            tagline: language === "bn" ? "বিকাশ অটো পেমেন্ট ও ইনভেন্টরি" : "Automated Sales & Instant Checkout",
            badge: language === "bn" ? "সবচেয়ে জনপ্রিয়" : "🔥 Most Popular",
            price: language === "bn" ? "৳৩৫,০০০ — ৳৭০,০০০" : "৳35,000 — ৳70,000",
            timeline: language === "bn" ? "১২-২০ কর্মদিবস" : "12-20 Business Days",
            description: language === "bn"
                ? "অনলাইন ফ্যাশন ব্র্যান্ড, শপ ও এফ-কমার্স বিক্রেতাদের জন্য সম্পূর্ণ অটোমেটেড স্টোর।"
                : "Full-scale automated e-commerce store for fashion brands, retail shops, and high-volume online merchants.",
            features: language === "bn" ? [
                "আনলিমিটেড প্রোডাক্ট ও ক্যাটাগরি লিস্টিং",
                "বিকাশ ও নগদ অটোমেটেড পেমেন্ট গেটওয়ে",
                "ক্যাশ অন ডেলিভারি (COD) ও কার্ট চেকআউট",
                "রিয়েল-টাইম স্টক ইনভেন্টরি ও অর্ডার ট্র্যাকিং",
                "কাস্টমার অ্যাকাউন্ট ও কুপন ডিসকাউন্ট",
                "অটোমেটেড SMS নোটিফিকেশন সিস্টেম",
                "১ম বছর ফ্রি ডেডিকেটেড SSD হোস্টিং",
                "১ বছর ফ্রি মেইনটেন্যান্স ও বাগ ফিক্স গ্যারান্টি"
            ] : [
                "Unlimited Products & Category Filters",
                "bKash & Nagad Instant Automated Payment Gateway",
                "Cash on Delivery (COD) + Modern 1-Click Checkout",
                "Real-Time Stock Inventory & Order Tracking",
                "Customer Accounts, Coupon Code & Discount Engine",
                "Automated Customer SMS Notifications",
                "1st Year Free High-Performance SSD Cloud Node",
                "1 Year Full Technical Warranty & Bug-Fix Guarantee"
            ],
            highlight: true,
            popular: true
        },
        {
            name: "Enterprise Custom",
            tagline: language === "bn" ? "কাস্টম ইআরপি ও স্কেল" : "Bespoke Multi-Tenant Architecture",
            badge: language === "bn" ? "কাস্টম সল্যুশন" : "👑 Bespoke Scale",
            price: language === "bn" ? "৳৮০,০০০ — ৳৩,০০,০০০+" : "৳80,000 — ৳3,00,000+",
            timeline: language === "bn" ? "৩০-৬০+ কর্মদিবস" : "30-60+ Business Days",
            description: language === "bn"
                ? "লার্জ স্কেল কাস্টম সফটওয়্যার, ERP, CRM, POS ও মাল্টি-টেন্যান্ট SaaS প্ল্যাটফর্ম।"
                : "Tailored enterprise software, custom ERP, CRM, inventory POS, and high-concurrency SaaS platforms.",
            features: language === "bn" ? [
                "সম্পূর্ণ কাস্টম বিল্ড আর্কিটেকচার (Next.js/FastAPI)",
                "মাল্টি-লেভেল রোল ও পারমিশন ম্যানেজমেন্ট",
                "REST API ও থার্ড-পার্টি ইন্টিগ্রেশন (বিকাশ, পাঠাও, রেডেক্স)",
                "লাইভ অ্যানালিটিক্স ড্যাশবোর্ড ও এক্সপোর্ট রিপোর্টিং",
                "ঢাকায় ডেডিকেটেড প্রাইভেট ক্লাউড সেটআপ",
                "ডেডিকেটেড ক্লাউড নোড ১ম বছর সম্পূর্ণ ফ্রি",
                "১ বছর ফ্রি এন্টারপ্রাইজ SLA সাপোর্ট"
            ] : [
                "Bespoke High-Performance Architecture (Next.js/FastAPI)",
                "Multi-Role Granular Access & Permission Control",
                "REST APIs & 3rd-Party Courier APIs (Pathao, RedX, bKash)",
                "Real-Time Analytics Dashboard & Financial Reporting",
                "Private Dedicated Cloud Node in Dhaka",
                "1st Year 100% Free Dedicated Private Cloud Hosting",
                "1 Year Priority Enterprise SLA & Maintenance"
            ],
            highlight: false,
            popular: false
        }
    ];

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
        const card = document.getElementById(cardId);
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1200,
            duration: 0.25,
            ease: "power2.out"
        });

        const sheen = card.querySelector(".holo-sheen") as HTMLElement;
        if (sheen) {
            sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 243, 255, 0.2) 0%, rgba(93, 63, 211, 0.1) 35%, transparent 70%)`;
            sheen.style.opacity = "1";
        }
    };

    const handleCardMouseLeave = (cardId: string) => {
        const card = document.getElementById(cardId);
        if (!card) return;

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)"
        });

        const sheen = card.querySelector(".holo-sheen") as HTMLElement;
        if (sheen) {
            sheen.style.opacity = "0";
        }
    };

    return (
        <section id="pricing" className="py-28 bg-background relative overflow-hidden">
            {/* Cyber Matrix Laser Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <div className="w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Glowing Ambient Plasma Orbs */}
            <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-primary/15 rounded-full filter blur-[160px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-accent/15 rounded-full filter blur-[160px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-accent/10 border border-accent/40 text-accent text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,243,255,0.25)]">
                        <Flame size={16} className="text-accent animate-bounce" />
                        <span>{language === "bn" ? "স্বচ্ছ ও প্রিমিয়াম প্যাকেজ কাঠামো" : "TRANSPARENT & BESPOKE PACKAGES"}</span>
                    </div>

                    <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-400">
                            {language === "bn" ? "আপনার ব্যবসার জন্য সঠিক প্যাকেজ বেছে নিন" : "Choose the Perfect Plan for Your Growth"}
                        </span>
                    </h2>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                        {language === "bn" ? (
                            <>কোনো গোপন চার্জ নেই। প্রতিটি প্যাকেজে অন্তর্ভুক্ত <span className="text-accent font-bold">ঢাকায় ডেডিকেটেড ক্লাউড হোস্টিং</span> এবং <span className="text-white font-bold">১ বছরের সম্পূর্ণ ফ্রি টেকনিক্যাল সাপোর্ট ও ওয়ারেন্টি</span>।</>
                        ) : (
                            <>Zero hidden fees. Every tier includes <span className="text-accent font-bold">1st Year Free Dhaka Dedicated Cloud Hosting</span> and <span className="text-white font-bold">1-Year Full Technical Warranty & Maintenance</span>.</>
                        )}
                    </p>
                </div>

                {/* Uniform-Height 4-Column Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
                    {packages.map((pkg, idx) => {
                        const cardId = `pricing-card-${idx}`;
                        return (
                            <div
                                key={idx}
                                id={cardId}
                                onMouseMove={(e) => handleCardMouseMove(e, cardId)}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => {
                                    setHoveredCard(null);
                                    handleCardMouseLeave(cardId);
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                                className={`rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-300 backdrop-blur-xl group cursor-pointer ${
                                    pkg.highlight
                                        ? "bg-gradient-to-b from-[#161626] via-[#10101c] to-[#08080f] border-2 border-accent shadow-[0_0_50px_rgba(0,243,255,0.25)] lg:-translate-y-3"
                                        : "bg-[#0f0f15]/90 border border-white/10 hover:border-white/25 hover:-translate-y-1 shadow-2xl"
                                }`}
                            >
                                {/* Holographic Sheen Layer */}
                                <div className="holo-sheen pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 z-0"></div>

                                {/* Animated Laser Border for Featured Card */}
                                {pkg.highlight && (
                                    <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 opacity-75 blur-[2px] animate-pulse -z-10"></div>
                                )}

                                {/* Top Floating Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-cyan-300 text-black font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_25px_rgba(0,243,255,0.6)] flex items-center gap-1.5 z-30">
                                        <Star size={12} className="fill-black" />
                                        <span>MOST POPULAR</span>
                                    </div>
                                )}

                                {/* Card Header & Content */}
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-heading text-2xl font-black text-white group-hover:text-accent transition-colors">
                                            {pkg.name}
                                        </h3>
                                    </div>
                                    <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-6 h-5">
                                        {pkg.tagline}
                                    </p>

                                    {/* Strictly Aligned Price Tag Block */}
                                    <div className="mb-6 pb-6 border-b border-white/10 h-28 flex flex-col justify-center">
                                        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                            {pkg.price}
                                        </div>
                                        <div className="text-xs text-emerald-400 font-bold mt-2 flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                            <span>{language === "bn" ? `ডেলিভারি: ${pkg.timeline}` : `Timeline: ${pkg.timeline}`}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-xs leading-relaxed mb-6 h-12 overflow-hidden">
                                        {pkg.description}
                                    </p>

                                    {/* Features Checklist */}
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {pkg.features.map((feat, fIdx) => (
                                            <li
                                                key={fIdx}
                                                className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed hover:text-white transition-colors group/item"
                                            >
                                                <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-accent group-hover/item:text-black transition-all">
                                                    <Check size={11} strokeWidth={3} />
                                                </div>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Action Button */}
                                <div className="relative z-20 pt-4 mt-auto">
                                    <Link
                                        href="/start-project"
                                        className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${
                                            pkg.highlight
                                                ? "bg-accent text-black hover:bg-cyan-300 shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                                                : "bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-accent/40"
                                        }`}
                                    >
                                        <span>{language === "bn" ? "প্যাকেজ নিন" : "Select Package"}</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Feature Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Pillar 1 */}
                    <div className="glass p-8 rounded-3xl border border-white/10 bg-[#0e0e16]/80 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl relative overflow-hidden group">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(0,243,255,0.2)]">
                            <Zap size={28} />
                        </div>
                        <h4 className="font-heading text-xl font-bold text-white mb-2">
                            {language === "bn" ? "AI Automation Suite" : "AI Automation Suite"}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                            {language === "bn"
                                ? "৳২০,০০০ — ৳৫০,০০০। ২৪/৭ ফেসবুক মেসেঞ্জার ও ওয়েবসাইট এআই সহকারী ইন্টিগ্রেশন।"
                                : "৳20,000 — ৳50,000. 24/7 Facebook Messenger & Website intelligent AI assistants."}
                        </p>
                        <span className="text-[11px] font-bold text-accent uppercase tracking-wider">● 24/7 AUTONOMOUS ASSISTANT</span>
                    </div>

                    {/* Pillar 2 */}
                    <div className="glass p-8 rounded-3xl border border-white/10 bg-[#0e0e16]/80 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl relative overflow-hidden group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                            <ShieldCheck size={28} />
                        </div>
                        <h4 className="font-heading text-xl font-bold text-white mb-2">
                            {language === "bn" ? "৫০% নিরাপদ মাইলস্টোন পলিসি" : "50% Milestone Billing"}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                            {language === "bn"
                                ? "৫০% অগ্রিম দিয়ে কাজ শুরু, বাকি ৫০% লাইভ ডেলিভারি ও ডেমো দেখে সম্পন্ন করবেন।"
                                : "50% advance to start development, remaining 50% only upon live demo & milestone completion."}
                        </p>
                        <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">● 100% RISK-FREE GUARANTEE</span>
                    </div>

                    {/* Pillar 3 */}
                    <div className="glass p-8 rounded-3xl border border-white/10 bg-[#0e0e16]/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl relative overflow-hidden group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                            <Server size={28} />
                        </div>
                        <h4 className="font-heading text-xl font-bold text-white mb-2">
                            {language === "bn" ? "ঢাকায় নিজস্ব ক্লাউড নোড" : "Dhaka Cloud Server"}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                            {language === "bn"
                                ? "০.১ সেকেন্ডের সুপারফাস্ট লোডিং স্পিড ও ৯৯.৯৯% আপটাইম নিশ্চিত।"
                                : "0.1s ultra-low latency response times across Bangladesh with Tier-3 cloud data center."}
                        </p>
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">● 1ST YEAR 100% FREE HOSTING</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
