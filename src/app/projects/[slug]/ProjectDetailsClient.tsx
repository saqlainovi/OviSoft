"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailsClientProps {
    project: {
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
    };
}

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
    const { language } = useLanguage();

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
