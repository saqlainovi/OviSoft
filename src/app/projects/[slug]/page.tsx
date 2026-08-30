"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, FolderGit2, CheckCircle2, Cpu, Shield, Layers, Sparkles, Server, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const dynamicParams = false;

export async function generateStaticParams() {
    return [
        { slug: "parkinsons-disease-analysis" },
        { slug: "facial-recognition-security-system" },
        { slug: "harvest-hub-agri-commerce" },
        { slug: "local-services-marketplace" },
        { slug: "bd-travel-tourism-portal" },
        { slug: "enterprise-networking-lab" }
    ];
}

const projectsData: Record<string, {
    title: string;
    categoryEn: string;
    categoryBn: string;
    summaryEn: string;
    summaryBn: string;
    tags: string[];
    gradient: string;
    problemEn: string;
    problemBn: string;
    solutionEn: string;
    solutionBn: string;
    featuresEn: string[];
    featuresBn: string[];
    architecture: string[];
    metricsEn: { label: string; value: string }[];
    metricsBn: { label: string; value: string }[];
}> = {
    "parkinsons-disease-analysis": {
        title: "Parkinson's Disease Neuroimaging AI Analysis",
        categoryEn: "Deep Learning & Explainable AI (XAI)",
        categoryBn: "ডিপ লার্নিং ও এক্সপ্লেইনেবল এআই (XAI)",
        summaryEn: "A clinical-grade deep learning pipeline for multiclass neuroimaging classification and explainable feature attribution.",
        summaryBn: "নিউরোইমেজিং ডেটা এবং এক্সপ্লেইনেবল এআই ব্যবহার করে পার্কিনসন্স ডিজিজ শনাক্তকরণের উচ্চ ক্ষমতার ডিপ লার্নিং পাইপলাইন।",
        tags: ["Python", "PyTorch", "XAI / SHAP", "FastAPI", "Neuroimaging"],
        gradient: "from-purple-950 via-indigo-950 to-black",
        problemEn: "Early detection of Parkinson's disease using traditional MRI screening is time-consuming and often lacks interpretable diagnostic confidence for clinicians.",
        problemBn: "ঐতিহ্যবাহী এমআরআই স্ক্রিনিংয়ের মাধ্যমে প্রাথমিক পর্যায়ে পার্কিনসন্স শনাক্ত করা অত্যন্ত সময়সাপেক্ষ এবং চিকিৎসকদের জন্য ব্যাখ্যাযোগ্য আত্মবিশ্বাসের অভাব থাকে।",
        solutionEn: "We engineered a convolutional deep neural network combined with Grad-CAM and SHAP interpretability heatmaps, achieving 96.4% multiclass diagnostic accuracy with sub-second inference.",
        solutionBn: "আমরা কনভোল্যুশনাল ডিপ নিউরাল নেটওয়ার্ক এবং Grad-CAM/SHAP হিটম্যাপ সমন্বয় করে ৯৬.৪% নির্ভুলতার সাথে সাব-সেকেন্ড ইনফারেন্স সিস্টেম তৈরি করেছি।",
        featuresEn: [
            "Multiclass clinical MRI scan preprocessing & normalization",
            "Explainable AI (XAI) feature importance heatmaps for radiologists",
            "High-throughput FastAPI microservice backend",
            "HIPAA-compliant data anonymization pipeline"
        ],
        featuresBn: [
            "ক্লিনিক্যাল এমআরআই স্ক্যান প্রি-প্রসেসিং ও নরমালাইজেশন",
            "রেডিওলজিস্টদের জন্য এক্সপ্লেইনেবল এআই (XAI) হিটম্যাপ অ্যানালিসিস",
            "হাই-স্পিড FastAPI মাইক্রোসার্ভিস ব্যাকএন্ড",
            "নিরাপদ ডেটা অ্যানোনিমাইজেশন পাইপলাইন"
        ],
        architecture: ["PyTorch Core", "FastAPI", "Docker Container", "PostgreSQL", "Next.js Dashboard"],
        metricsEn: [
            { label: "Accuracy", value: "96.4%" },
            { label: "Inference Time", value: "0.28s" },
            { label: "Scan Classes", value: "4 Stages" }
        ],
        metricsBn: [
            { label: "নির্ভুলতা", value: "৯৬.৪%" },
            { label: "ইনফারেন্স গতি", value: "০.২৮ সেকেন্ড" },
            { label: "ক্লাসিফিকেশন ধাপ", value: "৪টি পর্যায়" }
        ]
    },
    "facial-recognition-security-system": {
        title: "Facial Recognition & Biometric Access Security",
        categoryEn: "Computer Vision & Edge AI",
        categoryBn: "কম্পিউটার ভিশন ও বায়োমেট্রিক সিকিউরিটি",
        summaryEn: "Real-time edge facial recognition authentication and surveillance security platform with anti-spoofing liveness detection.",
        summaryBn: "রিয়েল-টাইম ফেসিয়াল রিকগনিশন ও অ্যান্টি-স্পুফিং লাইভনেস ডিটেকশন সহ বায়োমেট্রিক সিকিউরিটি প্ল্যাটফর্ম।",
        tags: ["OpenCV", "TensorFlow Lite", "FastAPI", "WebRTC", "Docker"],
        gradient: "from-blue-950 via-cyan-950 to-black",
        problemEn: "Traditional RFID cards and fingerprint scanners face physical contact limitations and vulnerability to proxy clock-ins.",
        problemBn: "ম্যানুয়াল আরএফআইডি কার্ড ও ফিঙ্গারপ্রিন্ট স্ক্যানারে দীর্ঘ লাইন এবং প্রক্সি হাজিরা ঠেকানো কঠিন হয়ে পড়ে।",
        solutionEn: "Developed an ultra-low latency facial vector embedding engine with 3D liveness detection to prevent photo/screen spoofing in corporate facilities.",
        solutionBn: "আমরা ৩ডি লাইভনেস ডিটেকশন ও ফেসিয়াল ভেক্টর ইঞ্জিন তৈরি করেছি যা ছবি বা স্ক্রিন স্পুফিং সম্পূর্ণ প্রতিরোধ করে।",
        featuresEn: [
            "3D Depth anti-spoofing liveness verification",
            "Sub-100ms vector matching across 10,000+ employee database",
            "Automated attendance logs and instant security breach alerts",
            "Encrypted biometric vector storage with zero plain image retention"
        ],
        featuresBn: [
            "৩ডি ডেপথ অ্যান্টি-স্পুফিং লাইভনেস ভেরিফিকেশন",
            "১০,০০০+ কর্মীর ডেটাবেজে ১০০ মিলিসেকেন্ডের মধ্যে ভেক্টর ম্যাচিং",
            "অটোমেটেড হাজিরা এবং তাৎক্ষণিক সিকিউরিটি অ্যালার্ট",
            "এনক্রিপ্টেড বায়োমেট্রিক ভেক্টর সংরক্ষণ"
        ],
        architecture: ["InsightFace", "FastAPI", "Redis Cache", "PostgreSQL", "Tailwind Dashboard"],
        metricsEn: [
            { label: "Matching Speed", value: "< 85ms" },
            { label: "Spoof Prevention", value: "99.8%" },
            { label: "Database Scale", value: "50k+ Vectors" }
        ],
        metricsBn: [
            { label: "ম্যাচিং স্পিড", value: "< ৮৫ মিলিসেকেন্ড" },
            { label: "স্পুফ প্রতিরোধ", value: "৯৯.৮%" },
            { label: "ডেটাবেজ ধারণক্ষমতা", value: "৫০k+ ভেক্টর" }
        ]
    },
    "harvest-hub-agri-commerce": {
        title: "Harvest Hub — Direct Farmer Agri-Commerce Engine",
        categoryEn: "Automated E-Commerce & Logistics",
        categoryBn: "অটোমেটেড এগ্রি-কমার্স ও সাপ্লাই চেইন",
        summaryEn: "Direct farmer-to-consumer digital marketplace with seasonal harvest scheduling, bKash auto-checkout, and automated courier sync.",
        summaryBn: "কৃষকদের সাথে সরাসরি ভোক্তাদের সংযোগকারী অটোমেটেড এগ্রি-কমার্স মার্কেটপ্লেস ও বিকাশ পেমেন্ট সিস্টেম।",
        tags: ["Next.js 15", "PostgreSQL", "bKash API", "Pathao Logistics", "TailwindCSS"],
        gradient: "from-emerald-950 via-teal-950 to-black",
        problemEn: "Agricultural supply chains in Bangladesh lose 30-40% value to middlemen margins and lack predictable preorder logistics.",
        problemBn: "বাংলাদেশে মধ্যস্বত্বভোগীদের কারণে কৃষকরা ন্যায্যমূল্য পান না এবং ভোক্তারা টাটকা পণ্য সময়মতো পান না।",
        solutionEn: "Engineered a Next.js 15 e-commerce engine with harvest prediction calendars, instant bKash checkout, and 1-click Pathao courier dispatch.",
        solutionBn: "আমরা নেক্সট.জেএস ১৫ দিয়ে সম্পূর্ণ অটোমেটেড ই-কমার্স প্ল্যাটফর্ম তৈরি করেছি যা ফসল তোলার ক্যালেন্ডার ও বিকাশ পেমেন্ট সমর্থন করে।",
        featuresEn: [
            "Direct farmer inventory uploads and live pricing sync",
            "Automated bKash & Nagad instant merchant payment gateways",
            "Real-time Pathao courier parcel generation via webhook APIs",
            "Automated Bengali SMS order updates to customers and farmers"
        ],
        featuresBn: [
            "কৃষকদের সরাসরি ইনভেন্টরি আপলোড ও লাইভ প্রাইসিং",
            "বিকাশ ও নগদ অটোমেটেড ইনস্ট্যান্ট পেমেন্ট গেটওয়ে",
            "পাঠাও কুরিয়ার এপিআই ইন্টিগ্রেশন ও পার্সেল ট্র্যাকিং",
            "অটোমেটেড বাংলা SMS নোটিফিকেশন সিস্টেম"
        ],
        architecture: ["Next.js 15 SSR", "PostgreSQL", "Prisma ORM", "bKash Tokenized API", "Pathao Courier API"],
        metricsEn: [
            { label: "Checkout Speed", value: "2.1s" },
            { label: "Middleman Cost Reduction", value: "28%" },
            { label: "Uptime", value: "99.99%" }
        ],
        metricsBn: [
            { label: "চেকআউট সময়", value: "২.১ সেকেন্ড" },
            { label: "খরচ সাশ্রয়", value: "২৮%" },
            { label: "সার্ভার আপটাইম", value: "৯৯.৯৯%" }
        ]
    },
    "local-services-marketplace": {
        title: "On-Demand Local Services & Professional Marketplace",
        categoryEn: "High-Concurrency Web Platform",
        categoryBn: "হাই-কনকারেন্সি সার্ভিস মার্কেটপ্লেস",
        summaryEn: "On-demand marketplace connecting household professionals, electricians, and technicians with real-time location dispatch.",
        summaryBn: "লোকাল সার্ভিস ও টেকনিশিয়ানদের রিয়েল-টাইম বুকিং করার জন্য ডিজিটাল সার্ভিস মার্কেটপ্লেস।",
        tags: ["React 19", "Node.js", "Docker", "Socket.io", "PostgreSQL"],
        gradient: "from-orange-950 via-red-950 to-black",
        problemEn: "Finding verified home service technicians in urban cities requires unreliable phone calls with zero price transparency.",
        problemBn: "শহরাঞ্চলে বিশ্বস্ত টেকনিশিয়ান বা হোম সার্ভিস প্রফেশনাল খুঁজে পাওয়া এবং সঠিক দাম যাচাই করা কঠিন।",
        solutionEn: "Architected a real-time booking ecosystem with GPS dispatching, upfront standardized pricing, and in-app milestone escrow.",
        solutionBn: "আমরা রিয়েল-টাইম জিপিএস ডিসপ্যাচিং এবং স্ট্যান্ডার্ড প্রাইসিং সহ নিরাপদ সার্ভিস বুকিং প্ল্যাটফর্ম তৈরি করেছি।",
        featuresEn: [
            "Real-time technician geolocation matching & live arrival ETA",
            "Fixed-rate transparent service pricing and in-app rating system",
            "Multi-vendor provider wallet and instant payout management",
            "Automated service milestone confirmation via SMS"
        ],
        featuresBn: [
            "রিয়েল-টাইম টেকনিশিয়ান লোকেশন ট্র্যাকিং ও ইটিএ",
            "স্বচ্ছ ফিক্সড প্রাইসিং এবং কাস্টমার রিভিউ রেটিং",
            "ভেন্ডর ওয়ালেট ও ইনস্ট্যান্ট পেমেন্ট পে-আউট",
            "অটোমেটেড সার্ভিস মাইলস্টোন কনফার্মেশন"
        ],
        architecture: ["React 19", "Express.js", "Socket.io", "PostgreSQL", "Google Maps API"],
        metricsEn: [
            { label: "Booking Latency", value: "< 1.5s" },
            { label: "Active Technicians", value: "1,200+" },
            { label: "Avg Rating", value: "4.9 / 5.0" }
        ],
        metricsBn: [
            { label: "বুকিং স্পিড", value: "< ১.৫ সেকেন্ড" },
            { label: "নিবন্ধিত টেকনিশিয়ান", value: "১,২০০+" },
            { label: "গড় রেটিং", value: "৪.৯ / ৫.০" }
        ]
    },
    "bd-travel-tourism-portal": {
        title: "BD Travel & Scenic Destination Booking Portal",
        categoryEn: "Tourism Platform & Dynamic CMS",
        categoryBn: "ট্যুরিজম প্ল্যাটফর্ম ও ট্রাভেল বুকিং",
        summaryEn: "A comprehensive digital tourism platform featuring dynamic tour packages, hotel reservations, and interactive Bangladeshi travel maps.",
        summaryBn: "বাংলাদেশের পর্যটন স্থান, রিসোর্ট ও হোটেল বুকিংয়ের জন্য সম্পূর্ণ ডাইনামিক ট্রাভেল পোর্টাল।",
        tags: ["Next.js 15", "TailwindCSS", "SEO Engine", "PostgreSQL", "Cloudinary"],
        gradient: "from-teal-950 via-cyan-950 to-black",
        problemEn: "Tourists visiting Bangladeshi destinations struggle with scattered travel guides, unverified hotel pricing, and complex itineraries.",
        problemBn: "বাংলাদেশের পর্যটন স্থানগুলোতে যাওয়ার আগে সঠিক গাইডলাইন ও হোটেল বুকিংয়ের তথ্য একটি নির্ভরযোগ্য প্ল্যাটফর্মে পাওয়া যেত না।",
        solutionEn: "Built a high-ranking Next.js 15 tourism portal with integrated itinerary builders, instant booking slots, and localized photo guides.",
        solutionBn: "আমরা আল্ট্রা-ফাস্ট নেক্সট.জেএস ১৫ ট্রাভেল পোর্টাল তৈরি করেছি যাতে বিস্তারিত গাইডলাইন ও অনলাইন বুকিং সুবিধা রয়েছে।",
        featuresEn: [
            "Dynamic tour package customization with seasonal pricing filters",
            "Interactive interactive map exploration for top BD destinations",
            "Automated PDF travel itinerary generation for booked travelers",
            "100% Core Web Vitals score for maximum Google organic traffic"
        ],
        featuresBn: [
            "সিজনাল প্রাইস ফিল্টার সহ ডাইনামিক ট্যুর প্যাকেজ",
            "বাংলাদেশের আকর্ষণীয় স্থানসমূহের ইন্টারঅ্যাকটিভ ম্যাপ গাইড",
            "অটোমেটেড ট্রাভেল আইটিনেরারি PDF জেনারেশন",
            "১০০% গুগল কোর ওয়েব ভাইটালস অপটিমাইজেশন"
        ],
        architecture: ["Next.js 15 App Router", "TailwindCSS", "PostgreSQL", "Docker", "Dhaka Cloud Node"],
        metricsEn: [
            { label: "SEO Score", value: "100 / 100" },
            { label: "Page Load Speed", value: "0.3s" },
            { label: "Monthly Visitors", value: "85k+" }
        ],
        metricsBn: [
            { label: "এসইও স্কোর", value: "১০০ / ১০০" },
            { label: "পেজ লোড স্পিড", value: "০.৩ সেকেন্ড" },
            { label: "মাসিক ভিজিটর", value: "৮৫k+" }
        ]
    },
    "enterprise-networking-lab": {
        title: "Enterprise Cisco Network Topology & Zero-Trust Infrastructure",
        categoryEn: "Infrastructure & Cyber Defense",
        categoryBn: "নেটওয়ার্ক ইনফ্রাস্ট্রাকচার ও সাইবার ডিফেন্স",
        summaryEn: "High-security enterprise network architecture featuring OSPF/BGP dynamic routing, VLAN segmentation, and Zero-Trust firewall policies.",
        summaryBn: "এন্টারপ্রাইজ সিসকো নেটওয়ার্ক আর্কিটেকচার: ওএসপিএফ/বিজিপি রাউটিং, ভি-ল্যান এবং জিরো-ট্রাস্ট সিকিউরিটি।",
        tags: ["Cisco IOS", "BGP / OSPF", "VLAN", "Zero-Trust", "Wireshark"],
        gradient: "from-slate-900 via-gray-950 to-black",
        problemEn: "Growing corporate organizations suffer from unsegmented internal network traffic, creating single points of failure and security breach risks.",
        problemBn: "কর্পোরেট নেটওয়ার্কে সঠিক সেগমেন্টেশন না থাকলে একটি ডিভাইসের সিকিউরিটি ব্রিচ পুরো কোম্পানির ডেটাবেজকে ঝুঁকিতে ফেলে।",
        solutionEn: "Engineered multi-area OSPF and redundant BGP topologies with strict 802.1Q VLAN micro-segmentation and stateful packet inspection firewalls.",
        solutionBn: "আমরা রিডান্ড্যান্ট ওএসপিএফ ও বিজিপি রাউটিং সহ সম্পূর্ণ জিরো-ট্রাস্ট নেটওয়ার্ক সিকিউরিটি আর্কিটেকচার ডিজাইন করেছি।",
        featuresEn: [
            "Redundant dual-homed BGP routing with sub-second failover",
            "VLAN micro-segmentation isolating finance, HR, and guest networks",
            "Stateful ACL access lists enforcing Zero-Trust security rules",
            "Encrypted IPsec VPN tunnels connecting branch offices"
        ],
        featuresBn: [
            "রিডান্ড্যান্ট বিজি‌পি রাউটিং ও সাব-সেকেন্ড ফেইলওভার",
            "ভি-ল্যান মাইক্রো-সেগমেন্টেশনের মাধ্যমে ডেটা সুরক্ষা",
            "জিরো-ট্রাস্ট অ্যাক্সেস কন্ট্রোল লিস্ট (ACL) পলিসি",
            "শাখা অফিসের জন্য এনক্রিপ্টেড আইপিসেক ভিপিএন টানেল"
        ],
        architecture: ["Cisco Core Switches", "BGP / OSPF Routers", "IPsec VPN", "Syslog & SNMP Monitoring"],
        metricsEn: [
            { label: "Failover Time", value: "< 0.4s" },
            { label: "Throughput", value: "10 Gbps" },
            { label: "Uptime SLA", value: "99.999%" }
        ],
        metricsBn: [
            { label: "ফেইলওভার সময়", value: "< ০.৪ সেকেন্ড" },
            { label: "থ্রুপুট", value: "১০ Gbps" },
            { label: "আপটাইম এসএলএ", value: "৯৯.৯৯৯%" }
        ]
    }
};

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { language } = useLanguage();

    const project = projectsData[slug] || projectsData["parkinsons-disease-analysis"];

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Back to Projects */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-12 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{language === "bn" ? "সকল প্রজেক্ট দেখুন" : "Back to Projects"}</span>
                </Link>

                {/* Hero Header Card */}
                <div className={`rounded-3xl p-8 md:p-14 border border-white/15 bg-gradient-to-br ${project.gradient} shadow-2xl relative overflow-hidden mb-16`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                        <Sparkles size={14} />
                        <span>{language === "bn" ? project.categoryBn : project.categoryEn}</span>
                    </div>

                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl mb-8 font-light">
                        {language === "bn" ? project.summaryBn : project.summaryEn}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {project.tags.map((t, i) => (
                            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-gray-200 text-xs font-mono">
                                #{t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                    {(language === "bn" ? project.metricsBn : project.metricsEn).map((m, idx) => (
                        <div key={idx} className="glass p-6 rounded-3xl border border-white/10 bg-[#101018] text-center">
                            <div className="font-heading text-4xl sm:text-5xl font-black text-accent mb-1">{m.value}</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Problem */}
                    <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 bg-[#0f0f16] space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center font-bold text-lg">
                            !
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white">
                            {language === "bn" ? "চ্যালেঞ্জ ও সমস্যা" : "The Core Challenge"}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {language === "bn" ? project.problemBn : project.problemEn}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="glass p-8 md:p-10 rounded-3xl border border-accent/30 bg-[#0f0f16] space-y-4 shadow-[0_0_30px_rgba(0,243,255,0.1)]">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/40 text-accent flex items-center justify-center">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white">
                            {language === "bn" ? "আমাদের প্রকৌশল সমাধান" : "The Engineering Solution"}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {language === "bn" ? project.solutionBn : project.solutionEn}
                        </p>
                    </div>
                </div>

                {/* Key Architectural Features */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 bg-[#0e0e14] mb-16">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
                        {language === "bn" ? "মূল প্রযুক্তিগত বৈশিষ্ট্যসমূহ" : "Architectural Highlights & Capabilities"}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(language === "bn" ? project.featuresBn : project.featuresEn).map((f, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                                <span className="text-gray-200 text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Components */}
                <div className="glass p-8 rounded-3xl border border-white/10 bg-[#101018] mb-16 text-center space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {language === "bn" ? "ব্যবহৃত টেকনোলজি স্ট্যাক" : "PRODUCTION TECH STACK"}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {project.architecture.map((tech, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/30 text-accent text-xs font-bold">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Start Similar Project CTA */}
                <div className="glass rounded-3xl p-8 md:p-12 border border-accent/40 bg-gradient-to-r from-[#121222] via-[#0d0d18] to-black text-center space-y-6">
                    <h3 className="font-heading text-3xl md:text-4xl font-black text-white">
                        {language === "bn" ? "আপনার নিজস্ব প্রজেক্ট তৈরি করতে চান?" : "Ready to Engineer Your Next Platform?"}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        {language === "bn"
                            ? "ওভিসফট ইঞ্জিনিয়ারিং টিম আপনার সফটওয়্যার, ই-কমার্স বা ক্লাউড সিস্টেম তৈরিতে প্রস্তুত। ১ম বছর ফ্রি হোস্টিং সহ শুরু করুন।"
                            : "Collaborate with our senior software architects to build fast, secure, and production-grade software."}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <Link
                            href="/start-project"
                            className="bg-accent text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-2"
                        >
                            <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start a Project"}</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
