"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    Search, 
    FileText, 
    LayoutTemplate, 
    Code2, 
    ShieldAlert, 
    Server, 
    Headphones, 
    ArrowUpRight, 
    Check, 
    Workflow 
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface StepItem {
    num: string;
    titleEn: string;
    titleBn: string;
    tagEn: string;
    tagBn: string;
    descEn: string;
    descBn: string;
    deliverablesEn: string[];
    deliverablesBn: string[];
    icon: any;
    color: string;
}

const steps: StepItem[] = [
    {
        num: "01",
        titleEn: "Planning & Deep Discovery",
        titleBn: "প্ল্যানিং ও ডিপ ডিসকভারি",
        tagEn: "SCOPE & TIMELINE",
        tagBn: "স্কোপ ও টাইমলাইন নির্ধারণ",
        descEn: "We define the complete operational scope—identifying business pain points, resource allocation, milestone timeline, and fixed transparent budget before touching code.",
        descBn: "প্রজেক্টের পূর্ণাঙ্গ স্কোপ নির্ধারণ—ব্যবসার সমস্যা চিহ্নিতকরণ, রিসোর্স বণ্টন, মাইলস্টোন টাইমলাইন এবং শতভাগ স্বচ্ছ বাজেট ফ্রেমওয়ার্ক তৈরি।",
        deliverablesEn: ["Discovery Report", "Cost Breakdown", "Feasibility Audit"],
        deliverablesBn: ["ডিসকভারি রিপোর্ট", "কস্ট ব্রেকডাউন", "সম্ভাব্যতা যাচাই"],
        icon: Search,
        color: "text-blue-400"
    },
    {
        num: "02",
        titleEn: "Systems Requirements & SRS",
        titleBn: "সিস্টেম রিকোয়ারমেন্টস ও SRS",
        tagEn: "WORKFLOW MAPPING",
        tagBn: "ওয়ার্কফ্লো ও রিকোয়ারমেন্টস",
        descEn: "Deep operational workflow interviews with stakeholders to author rigorous Software Requirement Specifications (SRS) with zero functional ambiguity.",
        descBn: "স্টেকহোল্ডারদের সাথে সরাসরি বসে প্রতিটি ডিপার্টমেন্টের কাজের ধারা বিশ্লেষণ এবং বিস্তারিত সফটওয়্যার রিকোয়ারমেন্ট স্পেসিফিকেশন (SRS) ডকুমেন্ট প্রস্তুতকরণ।",
        deliverablesEn: ["Complete SRS Doc", "Data Flow Diagram", "User Role Matrix"],
        deliverablesBn: ["সম্পূর্ণ SRS ডকুমেন্ট", "ডাটা ফ্লো ডায়াগ্রাম", "ইউজার রোল ম্যাট্রিক্স"],
        icon: FileText,
        color: "text-cyan-400"
    },
    {
        num: "03",
        titleEn: "Architecture & UI/UX Blueprint",
        titleBn: "আর্কিটেকচার ও UI/UX ব্লুপ্রিন্ট",
        tagEn: "DATABASE & PROTOTYPE",
        tagBn: "ডাটাবেস ও ইন্টারেক্টিভ প্রোটোটাইপ",
        descEn: "Architecting normalized database schemas, API microservice topologies, and interactive Figma UI/UX prototypes approved by the client prior to build.",
        descBn: "হাই-পারফরম্যান্স ডাটাবেস আর্কিটেকচার ডিজাইন এবং ক্লায়েন্ট কর্তৃক অনুমোদিত আধুনিক ফিগমা UI/UX ইন্টারঅ্যাক্টিভ ব্লুপ্রিন্ট তৈরি।",
        deliverablesEn: ["Figma High-Fi Prototype", "DB Schema Blueprint", "API Architecture"],
        deliverablesBn: ["ফিগমা প্রোটোটাইপ", "ডাটাবেস স্কিমা", "API আর্কিটেকচার"],
        icon: LayoutTemplate,
        color: "text-emerald-400"
    },
    {
        num: "04",
        titleEn: "Agile Full-Stack Development",
        titleBn: "এজাইল ফুল-স্ট্যাক ডেভেলপমেন্ট",
        tagEn: "SPRINT BUILDS",
        tagBn: "স্প্রিন্টভিত্তিক কোডিং",
        descEn: "Certified Next.js 16, PostgreSQL, Python, and microservice engineers code module-by-module with live demo staging reviews at every milestone.",
        descBn: "নেক্সট.জেএস ১৬, পোস্টগ্রেসকিউএল ও মাইক্রোসার্ভিস ব্যবহার করে মডিউল-বাই-মডিউল কোডিং এবং প্রতিটি মাইলস্টোনে লাইভ স্টেজ ডেমো রিভিউ।",
        deliverablesEn: ["Module Sprints", "Live Staging Demos", "Clean Documented Code"],
        deliverablesBn: ["মডিউল স্প্রিন্ট", "লাইভ স্টেজিং ডেমো", "ডকুমেন্টেড কোডবেস"],
        icon: Code2,
        color: "text-indigo-400"
    },
    {
        num: "05",
        titleEn: "Integration, Load Stress & QA",
        titleBn: "স্ট্রেস টেস্টিং ও কোয়ালিটি অডিট",
        tagEn: "ZERO DEFECT POLICY",
        tagBn: "জিরো ডিফেক্ট টেস্টিং",
        descEn: "End-to-end load testing simulating thousands of concurrent transactions, automated vulnerability scans, and end-to-end regression audits.",
        descBn: "একসাথে হাজার হাজার লেনদেনের লোড টেস্ট, সাইবার সিকিউরিটি ভালনারেবিলিটি স্ক্যান এবং বাগ-মুক্ত হ্যান্ডওভারের জন্য রিগ্রেশন অডিট।",
        deliverablesEn: ["QA Audit Certificate", "Load Test Report", "Security Sign-off"],
        deliverablesBn: ["QA অডিট সার্টিফিকেট", "লোড টেস্ট রিপোর্ট", "সিকিউরিটি সাইন-অফ"],
        icon: ShieldAlert,
        color: "text-amber-400"
    },
    {
        num: "06",
        titleEn: "Deployment & Data Migration",
        titleBn: "সার্ভার ডেপ্লয়মেন্ট ও ডাটা মাইগ্রেশন",
        tagEn: "ZERO-DOWNTIME GO-LIVE",
        tagBn: "জিরো ডাউনটাইম গো-লাইভ",
        descEn: "Zero-downtime deployment on dedicated Dhaka Proxmox Cloud nodes, secure legacy data migration, multi-tenant RBAC setup, and complete staff training.",
        descBn: "ঢাকায় নিজস্ব প্রক্সমক্স ক্লাউড নোডে স্মুথ ডেপ্লয়মেন্ট, পুরনো ডাটা মাইগ্রেশন এবং আপনার পুরো টিমের জন্য হ্যান্ডস-অন ট্রেনিং সেশন।",
        deliverablesEn: ["Proxmox Production Node", "Migrated Clean Data", "Staff Training Video"],
        deliverablesBn: ["প্রডাকশন ক্লাউড নোড", "মাইগ্রেটেড ডাটা", "টিম ট্রেনিং গাইড"],
        icon: Server,
        color: "text-purple-400"
    },
    {
        num: "07",
        titleEn: "24/7 Operations & Long-Term SLA",
        titleBn: "২৪/৭ অপারেশন ও লাইফটাইম সাপোর্ট",
        tagEn: "ENTERPRISE GUARANTEE",
        tagBn: "১০০% এসএলএ গ্যারান্টি",
        descEn: "Round-the-clock server health telemetry, daily automated encrypted off-site backups, instant security patches, and lifetime software upgrades.",
        descBn: "২৪/৭ সার্ভার মনিটরিং, প্রতিদিনের স্বয়ংক্রিয় এনক্রিপ্টেড ব্যাকআপ, নিয়মিত সিকিউরিটি প্যাচ এবং নিরবচ্ছিন্ন সফটওয়্যার আপগ্রেড সাপোর্ট।",
        deliverablesEn: ["99.9% Uptime Guarantee", "24/7 Telemetry Alert", "1-Year Free Cloud Node"],
        deliverablesBn: ["৯৯.৯% আপটাইম SLA", "২৪/৭ মনিটরিং", "১ বছর ফ্রি ক্লাউড হোস্টিং"],
        icon: Headphones,
        color: "text-rose-400"
    }
];

export default function EngineeringProcess() {
    const { language } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-[#030612]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full filter blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                        <Workflow size={14} />
                        <span>{language === "bn" ? "৭ ধাপের ইঞ্জিনিয়ারিং প্রসেস" : "Our Engineering Methodology"}</span>
                    </div>

                    <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight mb-6">
                        {language === "bn" ? (
                            <>
                                প্ল্যানিং থেকে লাইভ ডেপ্লয়মেন্ট <br />
                                <span className="text-accent drop-shadow-[0_0_30px_rgba(0,243,255,0.4)]">জিরো শর্টকাট, জিরো সারপ্রাইজ</span>
                            </>
                        ) : (
                            <>
                                Rigorous 7-Stage Delivery <br />
                                <span className="text-accent drop-shadow-[0_0_30px_rgba(0,243,255,0.4)]">Zero Shortcuts, 100% Reliability</span>
                            </>
                        )}
                    </h2>

                    <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        {language === "bn"
                            ? "প্রতিটি প্রোজেক্ট পরিচালিত হয় আন্তর্জাতিক মানদণ্ড অনুযায়ী—যাতে ডেলিভারির পর প্রতিটি মডিউল কাজ করে ১০০% নির্ভুলভাবে।"
                            : "Every system follows our enterprise lifecycle—from comprehensive stakeholder discovery to lifetime operations and zero-downtime Proxmox hosting."}
                    </p>
                </div>

                {/* Process Step Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {steps.map((step, idx) => {
                        const IconComponent = step.icon;
                        const isLast = idx === steps.length - 1;
                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.4 }}
                                className={`group relative rounded-3xl p-7 bg-[#070c1a]/90 border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl flex flex-col justify-between hover:-translate-y-2 overflow-hidden ${
                                    isLast ? "md:col-span-2 lg:col-span-3 xl:col-span-2 bg-gradient-to-br from-[#0a1226] via-[#0d1836] to-[#080d1e] border-accent/30" : ""
                                }`}
                            >
                                {/* Top Step Number & Icon */}
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="font-mono text-3xl font-black text-white/20 group-hover:text-accent transition-colors">
                                            {step.num}
                                        </span>

                                        <div className={`w-11 h-11 rounded-xl p-2.5 bg-white/[0.04] border border-white/10 flex items-center justify-center ${step.color} group-hover:bg-accent group-hover:text-black transition-all shadow-md`}>
                                            <IconComponent size={20} />
                                        </div>
                                    </div>

                                    {/* Tag */}
                                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent/80 font-bold block mb-1">
                                        {language === "bn" ? step.tagBn : step.tagEn}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-heading font-black text-xl text-white mb-3 group-hover:text-cyan-200 transition-colors">
                                        {language === "bn" ? step.titleBn : step.titleEn}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-xs leading-relaxed font-light mb-6">
                                        {language === "bn" ? step.descBn : step.descEn}
                                    </p>
                                </div>

                                {/* Deliverables list */}
                                <div className="pt-4 border-t border-white/[0.08] space-y-1.5">
                                    <span className="text-[10px] font-mono uppercase text-gray-500 block mb-2 font-bold">
                                        {language === "bn" ? "মূল ডেলিভারেবলস:" : "Key Deliverables:"}
                                    </span>
                                    {(language === "bn" ? step.deliverablesBn : step.deliverablesEn).map((d, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[11px] text-gray-400">
                                            <Check size={12} className="text-accent flex-shrink-0" />
                                            <span>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
