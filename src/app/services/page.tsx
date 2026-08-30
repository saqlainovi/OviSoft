"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, ShoppingBag, BrainCircuit, Database, Smartphone, PenTool, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { language } = useLanguage();

    const capabilities = [
        {
            icon: ShoppingBag,
            titleEn: "High-Concurrency E-Commerce Platforms",
            titleBn: "অটোমেটেড ই-কমার্স প্ল্যাটফর্ম",
            descEn: "Full-stack digital storefronts built on Next.js 15 with automated bKash/Nagad checkout, multi-vendor support, live stock tracking, and Pathao courier API integration.",
            descBn: "বিকাশ ও নগদ অটো পেমেন্ট গেটওয়ে, স্টক ট্র্যাকিং, ইনভয়েস জেনারেশন ও পাঠাও কুরিয়ার এপিআই সহ স্বয়ংক্রিয় ই-কমার্স সমাধান।",
            deliverablesEn: [
                "bKash & Nagad Tokenized Checkout Gateways",
                "Automated Customer Order SMS Notifications",
                "Real-time Inventory & Low-Stock Alerts",
                "1st Year Free Dhaka Dedicated Cloud Hosting"
            ],
            deliverablesBn: [
                "বিকাশ ও নগদ ইনস্ট্যান্ট মার্চেন্ট পেমেন্ট গেটওয়ে",
                "অটোমেটেড বাংলা এসএমএস অর্ডার আপডেট",
                "রিয়েল-টাইম ইনভেন্টরি ও স্টক অ্যালার্ট",
                "১ম বছর সম্পূর্ণ ফ্রি ঢাকা ক্লাউড হোস্টিং"
            ]
        },
        {
            icon: Code2,
            titleEn: "Custom Next.js & React Web Applications",
            titleBn: "নেক্সট.জেএস ও রিঅ্যাক্ট ওয়েব ডেভেলপমেন্ট",
            descEn: "Ultra-fast corporate portals, SaaS backends, and bespoke digital platforms engineered with Next.js 15 App Router, React 19, and TailwindCSS.",
            descBn: "নেক্সট.জেএস ১৫ ও রিঅ্যাক্ট ১৯ দিয়ে তৈরি আন্তর্জাতিক মানের দৃষ্টিনন্দন, দ্রুতগতির ও নিরাপদ কর্পোরেট ওয়েবসাইট এবং ওয়েব পোর্টাল।",
            deliverablesEn: [
                "Sub-0.3s Page Loading Speed Across Bangladesh",
                "Headless Content Management System (CMS)",
                "100% Core Web Vitals & Technical SEO Score",
                "Full 1-Year Technical Maintenance & Warranty"
            ],
            deliverablesBn: [
                "০.৩ সেকেন্ডের আল্ট্রা-ফাস্ট পেজ লোড স্পিড",
                "সহজ ও ডায়নামিক হেডলেস অ্যাডমিন ড্যাশবোর্ড",
                "১০০% টেকনিক্যাল গুগল এসইও অপটিমাইজেশন",
                "১ বছরের সম্পূর্ণ ফ্রি টেকনিক্যাল সাপোর্ট"
            ]
        },
        {
            icon: BrainCircuit,
            titleEn: "Autonomous AI Systems & Chatbots",
            titleBn: "এআই অটোমেশন ও অটোনোমাস চ্যাটবট",
            descEn: "24/7 autonomous artificial intelligence agents for Facebook Messenger, customer lead routing, automated quoting, and support ticketing.",
            descBn: "ফেসবুক মেসেঞ্জার ও ওয়েবসাইটের জন্য ২৪/৭ লাইভ এআই অ্যাসিস্ট্যান্ট, অটো রিপ্লাই এবং কাস্টমার লিড জেনারেশন অটোমেশন।",
            deliverablesEn: [
                "Zero External API Overhead with Private Local Inference",
                "Direct Facebook Graph API & Webhook Connectivity",
                "Intelligent Natural Language Processing in Bangla & English",
                "Automated CRM Lead Ingestion"
            ],
            deliverablesBn: [
                "প্রাইভেট লোকাল মডেলে জিরো ক্লাউড এপিআই খরচ",
                "ফেসবুক পেজ মেসেঞ্জার ও কমেন্ট অটো-রিপ্লাই ইন্টিগ্রেশন",
                "বাংলা ও ইংরেজি দুই ভাষায় নিখুঁত উত্তর দেওয়ার ক্ষমতা",
                "অটোমেটেড কাস্টমার লিড ক্যাপচার"
            ]
        },
        {
            icon: Database,
            titleEn: "Custom Software & Factory ERP",
            titleBn: "কাস্টম ইআরপি ও ফ্যাক্টরি সফটওয়্যার",
            descEn: "Tailored enterprise resource planning, multi-warehouse inventory, employee payroll, accounts, and point-of-sale (POS) systems.",
            descBn: "ফ্যাক্টরি, রিটেল শপ ও কর্পোরেট ব্যবসার জন্য কাস্টম ইনভেন্টরি, চালানি, কর্মী বেতন ও অ্যাকাউন্টস ম্যানেজমেন্ট সফটওয়্যার।",
            deliverablesEn: [
                "Granular Role-Based Access Controls (RBAC)",
                "PDF Invoice, Challan & Barcode Generation",
                "Real-time Profit/Loss Financial Analytics",
                "Daily Automated Database Backup Cluster"
            ],
            deliverablesBn: [
                "মাল্টি-লেভেল রোল ও সিকিউরিটি পারমিশন কন্ট্রোল",
                "অটোমেটেড চালান, ইনভয়েস ও বারকোড জেনারেশন",
                "রিয়েল-টাইম আয়-ব্যয় ও স্টক অ্যানালিটিক্স",
                "প্রতিদিনের স্বয়ংক্রিয় ক্লাউড ব্যাকআপ সিস্টেম"
            ]
        },
        {
            icon: Smartphone,
            titleEn: "Cross-Platform Mobile Applications",
            titleBn: "মোবাইল অ্যাপস ডেভেলপমেন্ট",
            descEn: "High-performance iOS and Android mobile apps engineered with Flutter and React Native for fluid, responsive mobile experiences.",
            descBn: "আইওএস এবং অ্যান্ড্রয়েডের জন্য ফ্লটার ও রিঅ্যাক্ট নেটিভ দিয়ে তৈরি হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন।",
            deliverablesEn: [
                "Single Codebase for Apple App Store & Google Play",
                "Push Notifications & Offline Data Caching",
                "Secure Biometric Fingerprint / Face ID Login",
                "Seamless REST / GraphQL API Integration"
            ],
            deliverablesBn: [
                "একই কোডবেস থেকে গুগল প্লে ও অ্যাপল অ্যাপ স্টোরে পাবলিশ",
                "পুশ নোটিফিকেশন ও অফলাইন ডেটা সেভ সুবিধা",
                "বায়োমেট্রিক ফিঙ্গারপ্রিন্ট ও ফেস লগইন সিকিউরিটি",
                "সুপারফাস্ট ব্যাকএন্ড এপিআই কানেক্টিভিটি"
            ]
        },
        {
            icon: PenTool,
            titleEn: "Futuristic UI/UX & Interactive Design",
            titleBn: "ইউআই/ইউএক্স ও ইন্টারেক্টিভ ডিজাইন",
            descEn: "Dark-mode cyber aesthetics, responsive layout systems, and interactive micro-interactions designed to elevate brand authority.",
            descBn: "আন্তর্জাতিক মানের আধুনিক ডার্ক মোড ইন্টারফেস, ৩ডি মাইক্রো-অ্যানিমেশন এবং ব্যবহারকারী-বান্ধব ইউজার এক্সপেরিয়েন্স ডিজাইন।",
            deliverablesEn: [
                "Figma High-Fidelity Interactive Prototypes",
                "TailwindCSS Custom Design Token Library",
                "Mobile-First Responsive Usability Audits",
                "Conversion-Rate Optimization (CRO) Architecture"
            ],
            deliverablesBn: [
                "ফিগমায় সম্পূর্ণ হাই-ফিডেলিটি ইন্টারঅ্যাকটিভ প্রোটোটাইপ",
                "টেলউইন্ড সিএসএস কাস্টম ডিজাইন টোকেন",
                "মোবাইল-ফার্স্ট রেসপনসিভ ডিজাইন অডিট",
                "সেলস কনভার্সন বাড়ানোর উপযোগী লেআউট"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-12 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}</span>
                </Link>

                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles size={14} />
                        <span>{language === "bn" ? "ওভিসফট ইঞ্জিনিয়ারিং সার্ভিসেস" : "Full-Spectrum Digital Services"}</span>
                    </div>
                    <h1 className="font-heading text-4xl sm:text-6xl font-black text-white mb-6">
                        {language === "bn"
                            ? "প্রযুক্তি ও উদ্ভাবনের পূর্ণাঙ্গ সমাধান"
                            : "End-to-End Software Capabilities"}
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {language === "bn"
                            ? "আমরা কোনো গতানুগতিক টেমপ্লেট ব্যবহার করি না। প্রতিটি প্রজেক্ট তৈরি হয় কাস্টম আর্কিটেকচার, নিজস্ব ঢাকা ক্লাউড হোস্টিং এবং ১ বছর টেকনিক্যাল ওয়ারেন্টি সহ।"
                            : "From high-scale automated retail platforms to bespoke ERPs and private AI systems, we build software designed to scale."}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                    {capabilities.map((cap, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-accent/40 bg-[#0f0f15] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                                        <cap.icon size={32} />
                                    </div>
                                    <span className="font-mono text-xs text-gray-500 font-bold">0{idx + 1}</span>
                                </div>

                                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                                    {language === "bn" ? cap.titleBn : cap.titleEn}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    {language === "bn" ? cap.descBn : cap.descEn}
                                </p>

                                <div className="space-y-2.5 pt-6 border-t border-white/5 mb-8">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-2">
                                        {language === "bn" ? "প্রজেক্টে যা অন্তর্ভুক্ত:" : "Key Deliverables:"}
                                    </span>
                                    {(language === "bn" ? cap.deliverablesBn : cap.deliverablesEn).map((d, dIdx) => (
                                        <div key={dIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                                            <CheckCircle2 size={14} className="text-accent shrink-0" />
                                            <span>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/start-project"
                                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-accent hover:text-black border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
                            >
                                <span>{language === "bn" ? "সার্ভিসটি শুরু করুন" : "Order This Service"}</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Consultation CTA */}
                <div className="glass rounded-3xl p-8 md:p-14 border border-accent/40 bg-gradient-to-r from-[#121222] via-[#0d0d18] to-black text-center space-y-6">
                    <h3 className="font-heading text-3xl md:text-4xl font-black text-white">
                        {language === "bn" ? "আপনার প্রজেক্টের সঠিক আর্কিটেকচার নিয়ে আলোচনা করতে চান?" : "Not Sure Which Tech Stack You Need?"}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        {language === "bn"
                            ? "আমাদের সিনিয়র সল্যুশনস আর্কিটেক্টদের সাথে সরাসরি কথা বলে আপনার ব্যবসার জন্য সেরা প্রযুক্তি সমাধান বেছে নিন।"
                            : "Schedule a free technical architecture consultation with our engineering leads to outline scope, budget, and timeline."}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <Link
                            href="/start-project"
                            className="bg-accent text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-2"
                        >
                            <span>{language === "bn" ? "ফ্রি পরামর্শ নিন" : "Book Free Consultation"}</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
