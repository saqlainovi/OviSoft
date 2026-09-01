"use client";

import Link from "next/link";
import { ArrowUpRight, FolderGit2, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
    {
        slug: "parkinsons-disease-analysis",
        title: "Parkinson's Disease Analysis",
        descriptionEn: "Deep learning pipeline for multiclass neuroimaging classification using PyTorch & Explainable AI.",
        descriptionBn: "নিউরোইমেজিং ডেটা ও এক্সএআই ব্যবহার করে ডিপ লার্নিং পার্কিনসন্স ডিজিজ ক্লাসিফিকেশন পাইপলাইন।",
        tags: ["Python", "Deep Learning", "XAI"],
        stats: "AI Research",
        color: "from-purple-950 via-indigo-950 to-black",
        badge: "AI / ML"
    },
    {
        slug: "facial-recognition-security-system",
        title: "Facial Recognition System",
        descriptionEn: "Sub-100ms real-time facial recognition authentication platform with 3D anti-spoofing liveness detection.",
        descriptionBn: "উচ্চ ক্ষমতাসম্পন্ন ফেসিয়াল রিকগনিশন ও ৩ডি অ্যান্টি-স্পুফিং সিকিউরিটি অথেন্টিকেশন প্ল্যাটফর্ম।",
        tags: ["Computer Vision", "FastAPI", "Security"],
        stats: "Vision AI",
        color: "from-blue-950 via-cyan-950 to-black",
        badge: "Vision AI"
    },
    {
        slug: "harvest-hub-agri-commerce",
        title: "Harvest Hub Agri-Commerce",
        descriptionEn: "Direct farmer-to-consumer agri-tech platform with harvest calendar scheduling and instant bKash checkout.",
        descriptionBn: "কৃষকদের সাথে সরাসরি ভোক্তাদের সংযোগকারী অটোমেটেড এগ্রি-কমার্স মার্কেটপ্লেস ও বিকাশ পেমেন্ট।",
        tags: ["Next.js 15", "PostgreSQL", "bKash"],
        stats: "E-Commerce",
        color: "from-emerald-950 via-teal-950 to-black",
        badge: "Platform"
    },
    {
        slug: "local-services-marketplace",
        title: "Local Services Marketplace",
        descriptionEn: "High-concurrency digital marketplace for on-demand home service booking and live technician geolocation.",
        descriptionBn: "লোকাল সার্ভিস ও টেকনিশিয়ানদের রিয়েল-টাইম বুকিং করার জন্য ডিজিটাল সার্ভিস মার্কেটপ্লেস।",
        tags: ["React 19", "Node.js", "Docker"],
        stats: "Marketplace",
        color: "from-orange-950 via-red-950 to-black",
        badge: "Web App"
    },
    {
        slug: "bd-travel-tourism-portal",
        title: "BD Travel & Tourism Portal",
        descriptionEn: "High-ranking dynamic tourism portal for exploring and booking top scenic destinations across Bangladesh.",
        descriptionBn: "বাংলাদেশের পর্যটন স্থান, রিসোর্ট ও হোটেল বুকিংয়ের জন্য সম্পূর্ণ ডাইনামিক ট্রাভেল পোর্টাল।",
        tags: ["Next.js 15", "TailwindCSS", "SEO"],
        stats: "Tourism Portal",
        color: "from-teal-950 via-blue-950 to-black",
        badge: "Portal"
    },
    {
        slug: "enterprise-networking-lab",
        title: "Enterprise Cisco Network Lab",
        descriptionEn: "Enterprise Cisco topology featuring redundant BGP/OSPF dynamic routing, VLAN micro-segmentation, and Zero-Trust.",
        descriptionBn: "এন্টারপ্রাইজ সিসকো নেটওয়ার্ক আর্কিটেকচার: ওএসপিএফ/বিজিপি রাউটিং, ভি-ল্যান এবং জিরো-ট্রাস্ট সিকিউরিটি।",
        tags: ["Networking", "Cisco", "Security"],
        stats: "Infrastructure",
        color: "from-slate-900 via-gray-950 to-black",
        badge: "Security"
    },
    {
        slug: "ai-chatbot-automation",
        title: "AI Customer Support Agent",
        descriptionEn: "NLP-powered intelligent support agent capable of resolving customer queries instantly using fine-tuned LLMs.",
        descriptionBn: "ফাইন-টিউনড এলএলএম ব্যবহার করে ইনস্ট্যান্ট কাস্টমার সাপোর্ট প্রদানকারী এআই চ্যাটবট।",
        tags: ["OpenAI", "Next.js", "Python"],
        stats: "AI Automation",
        color: "from-blue-900 via-indigo-900 to-black",
        badge: "AI / ML"
    },
    {
        slug: "real-estate-crm",
        title: "Real Estate ERP & CRM",
        descriptionEn: "Complete property management CRM with automated lead scoring, tenant portals, and payment tracking.",
        descriptionBn: "অটোমেটেড লিড স্কোরিং এবং প্রপার্টি ম্যানেজমেন্টের জন্য রিয়েল এস্টেট সিআরএম ও ইআরপি।",
        tags: ["Laravel", "Vue.js", "MySQL"],
        stats: "Enterprise CRM",
        color: "from-green-900 via-emerald-950 to-black",
        badge: "Web App"
    },
    {
        slug: "fintech-payment-gateway",
        title: "FinTech Payment Gateway",
        descriptionEn: "Custom payment processing API gateway supporting high-concurrency transactions and fraud detection.",
        descriptionBn: "উচ্চ-নিরাপত্তাসম্পন্ন কাস্টম পেমেন্ট প্রসেসিং এপিআই গেটওয়ে ও ফ্রড ডিটেকশন সিস্টেম।",
        tags: ["Go", "Microservices", "Redis"],
        stats: "FinTech",
        color: "from-red-950 via-rose-950 to-black",
        badge: "System"
    },
];

export default function Work() {
    const { language } = useLanguage();
    const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
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
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = (card: HTMLElement) => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.4)"
            });
        };

        cardsRef.current.forEach(card => {
            if (!card) return;
            const moveHandler = (e: MouseEvent) => handleMouseMove(e, card);
            const leaveHandler = () => handleMouseLeave(card);

            card.addEventListener("mousemove", moveHandler);
            card.addEventListener("mouseleave", leaveHandler);
        });
    }, []);

    return (
        <section id="work" className="py-32 bg-background relative px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                            <Sparkles size={14} />
                            <span>{language === "bn" ? "বাস্তবায়িত কাজসমূহ" : "Selected Works"}</span>
                        </div>
                        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            {language === "bn" ? "নির্বাচিত প্রজেক্টসমূহ" : "Featured Engineering"}
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-accent hover:text-cyan-300 font-bold text-xs uppercase tracking-widest group"
                    >
                        <span>{language === "bn" ? "সকল প্রজেক্ট দেখুন" : "View All Case Studies"}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Original Aspect-[4/5] Dynamic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Link
                            key={i}
                            href={`/projects/${project.slug}`}
                            ref={el => { if (el) cardsRef.current[i] = el }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/5] magnetic-btn border border-white/10 hover:border-accent/50 bg-[#0a0a0f] shadow-2xl transition-all duration-300 flex flex-col justify-between p-8"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-75 transition-opacity duration-500`}></div>

                            {/* Top Row Icons */}
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-accent shadow-lg group-hover:scale-110 transition-transform">
                                    <FolderGit2 size={22} />
                                </div>
                                <div className="p-3 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black rounded-2xl transition-all">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="relative z-10">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-gray-200 backdrop-blur-md border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                                    {language === "bn" ? project.descriptionBn : project.descriptionEn}
                                </p>

                                <div className="flex items-center justify-between text-xs text-accent font-bold uppercase tracking-wider pt-3 border-t border-white/10">
                                    <span>{project.stats}</span>
                                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        {language === "bn" ? "ডিটেইলস পড়ুন" : "Explore Study"} →
                                    </span>
                                </div>
                            </div>

                            {/* Moving Shine Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
