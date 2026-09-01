"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2, Sparkles, Lock, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
    {
        slug: "parkinsons-disease-analysis",
        title: "Parkinson's Disease AI Analysis",
        descriptionEn: "Deep learning pipeline for multiclass neuroimaging classification using PyTorch & Explainable AI.",
        descriptionBn: "নিউরোইমেজিং ডেটা ও এক্সএআই ব্যবহার করে ডিপ লার্নিং পার্কিনসন্স ডিজিজ ক্লাসিফিকেশন পাইপলাইন।",
        tags: ["Python", "Deep Learning", "XAI"],
        stats: "AI Research",
        color: "from-purple-950 via-indigo-950 to-black",
        badge: "AI / ML"
    },
    {
        slug: "facial-recognition-security-system",
        title: "Facial Recognition Security System",
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

export default function ProjectsListingPage() {
    const { language } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-12 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}</span>
                </Link>

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles size={14} />
                        <span>{language === "bn" ? "ওভিসফট ইঞ্জিনিয়ারিং পোর্টফোলিও" : "Selected Engineering Works"}</span>
                    </div>
                    <h1 className="font-heading text-4xl sm:text-6xl font-black text-white mb-6">
                        {language === "bn"
                            ? "বাস্তবায়িত সফটওয়্যার ও গবেষণা প্রজেক্ট"
                            : "Engineering Case Studies & Products"}
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {language === "bn"
                            ? "আমাদের তৈরি করা অত্যাধুনিক ওয়েব প্ল্যাটফর্ম, এআই সিস্টেম ও ক্লাউড আর্কিটেকচারের কেস স্টাডিজ।"
                            : "Explore our real-world software platforms, computer vision engines, and high-concurrency systems."}
                    </p>
                </div>

                {/* Projects Grid (Original Aspect-[4/5] Design) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Link
                            key={i}
                            href={`/projects/${project.slug}`}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/5] magnetic-btn border border-white/10 hover:border-accent/50 bg-[#0d0d12] shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between p-8"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-75 transition-opacity duration-500`}></div>

                            {/* Top Icons */}
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-accent shadow-lg group-hover:scale-110 transition-transform">
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
                                        {language === "bn" ? "কেস স্টাডি দেখুন" : "View Case Study"} →
                                    </span>
                                </div>
                            </div>

                            {/* Moving Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
