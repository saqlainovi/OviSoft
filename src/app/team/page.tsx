"use client";

import { ArrowLeft, Users, Sparkles, Mail, Linkedin, Github, ShieldCheck, Cpu, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamPage() {
    const { language } = useLanguage();

    const leadership = [
        {
            name: "Siyam Saqlain Ovi",
            roleEn: "Founder, CEO & Lead Architect",
            roleBn: "প্রতিষ্ঠাতা, সিইও ও লিড সল্যুশনস আর্কিটেক্ট",
            departmentEn: "Executive Leadership & AI Systems",
            departmentBn: "এক্সিকিউটিভ লিডারশিপ ও এআই সিস্টেমস",
            image: "/ovi.jpg",
            bioEn: "Visionary software architect leading OviSoft's engineering, private cloud infrastructure, and autonomous AI matrix. Focused on delivering high-performance Next.js 15 platforms, custom ERPs, and localized AI automation across Bangladesh.",
            bioBn: "ওভিসফটের টেকনিক্যাল আর্কিটেকচার, নিজস্ব ক্লাউড ইনফ্রাস্ট্রাকচার ও এআই সিস্টেমের প্রধান রূপকার। আধুনিক নেক্সট.জেএস ১৫, কাস্টম ইআরপি এবং অটোমেশন সফটওয়্যার তৈরিতে দক্ষ।",
            expertise: ["Next.js 15 / React 19", "Dhaka Private Cloud", "FastAPI & AI Matrix", "PostgreSQL Architecture"]
        },
        {
            name: "Shishir Chandra Das",
            roleEn: "Director of Sales & Business Growth",
            roleBn: "ডিরেক্টর অব সেলস ও বিজনেস গ্রোথ",
            departmentEn: "Business Development & Client Relations",
            departmentBn: "বিজনেস ডেভেলপমেন্ট ও স্ট্র্যাটেজিক পার্টনারশিপ",
            image: "/shishir.jpg",
            bioEn: "Driving strategic partnerships, commercial expansion, and corporate client engagements across e-commerce, manufacturing, and tech sectors in Bangladesh.",
            bioBn: "বাংলাদেশি ব্যবসা প্রতিষ্ঠান, ই-কমার্স ও কর্পোরেট ক্লায়েন্টদের সাথে দীর্ঘমেয়াদী ব্যবসায়িক সম্পর্ক ও ডিজিটাল রূপান্তরে নেতৃত্ব দিচ্ছেন।",
            expertise: ["B2B Tech Sales", "Client Strategy", "Contract Negotiation", "Revenue Operations"]
        },
        {
            name: "Client Relations & QA Lead",
            roleEn: "Head of Client Success & QA",
            roleBn: "হেড অব ক্লায়েন্ট সাকসেস ও কোয়ালিটি কন্ট্রোল",
            departmentEn: "Client Relations & Quality Assurance",
            departmentBn: "ক্লায়েন্ট কমিউনিকেশন ও কোয়ালিটি নিশ্চিতকরণ",
            image: "/partner.jpg",
            bioEn: "Ensuring 100% bug-free project handovers, seamless milestone communication, and white-glove onboarding for every OviSoft client.",
            bioBn: "প্রতিটি প্রজেক্টের সঠিক সময়ে নির্ভুল ডেলিভারি, ক্লায়েন্টদের সাপোর্ট ও সর্বোচ্চ সন্তুষ্টি নিশ্চিতকরণে নিয়োজিত।",
            expertise: ["Software Quality Testing", "SLA Monitoring", "Agile Coordination", "Client Onboarding"]
        },
        {
            name: "Technical Engineering Lead",
            roleEn: "Lead Full-Stack Engineer",
            roleBn: "লিড ফুল-স্ট্যাক ইঞ্জিনিয়ার",
            departmentEn: "Core Engineering & Cloud DevOps",
            departmentBn: "কোর ইঞ্জিনিয়ারিং ও ক্লাউড ডেভঅপস",
            image: "/mostofa.jpg",
            bioEn: "Specializing in microservices, database optimizations, automated deployment pipelines, and high-concurrency database backends.",
            bioBn: "সুপারফাস্ট ডেটাবেজ অপটিমাইজেশন, ক্লাউড অটোমেশন ও হাই-স্কেল ব্যাকএন্ড আর্কিটেকচার বাস্তবায়নে অভিজ্ঞ।",
            expertise: ["Node.js / Python", "Docker & Linux", "Database Optimization", "Payment APIs"]
        }
    ];

    const values = [
        {
            icon: Cpu,
            titleEn: "Modern Tech First",
            titleBn: "সর্বাধুনিক টেকনোলজি",
            descEn: "No outdated templates. We build strictly on Next.js 15, React 19, TailwindCSS, and dedicated Linux cloud nodes.",
            descBn: "কোনো গতানুগতিক টেমপ্লেট নয়—আমরা শুধু আধুনিক Next.js 15, React 19 ও ডেডিকেটেড ক্লাউড নোডে কাজ করি।"
        },
        {
            icon: ShieldCheck,
            titleEn: "100% Transparent Terms",
            titleBn: "১০০% স্বচ্ছ পলিসি",
            descEn: "Clear 50% milestone payments, 1-year free Dhaka cloud hosting, and 1-year guaranteed technical support.",
            descBn: "৫০% মাইলস্টোন পেমেন্ট, ১ম বছর ফ্রি ঢাকা ক্লাউড হোস্টিং এবং ১ বছর ফ্রি ওয়ারেন্টি গ্যারান্টি।"
        },
        {
            icon: Target,
            titleEn: "Local Cloud Speed",
            titleBn: "ঢাকায় নিজস্ব ক্লাউড স্পিড",
            descEn: "We host client platforms on our private Dhaka cloud cluster delivering 0.1s latency across Bangladesh.",
            descBn: "ঢাকায় নিজস্ব ডেডিকেটেড ক্লাউড নোড থেকে ০.১ সেকেন্ডের অবিশ্বাস্য গতিতে সাইট লোড নিশ্চিত করা হয়।"
        },
        {
            icon: Award,
            titleEn: "Autonomous AI Engine",
            titleBn: "২৪/৭ অটোনোমাস এআই",
            descEn: "Our clients benefit from 24/7 localized AI automation engines for marketing, sales, and customer support.",
            descBn: "ক্লায়েন্টদের কাস্টমার হ্যান্ডেলিং ও সেলস বাড়াতে সার্বক্ষণিক লোকাল এআই অটোমেশন সুবিধা।"
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-12 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>{language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}</span>
                </Link>

                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                        <Users size={14} />
                        <span>{language === "bn" ? "ওভিসফট লিডারশিপ ও ইঞ্জিনিয়ার্স" : "The Team Behind OviSoft"}</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
                        {language === "bn"
                            ? "দক্ষ প্রকৌশলী ও প্রযুক্তিবিদদের নিবেদিত দল"
                            : "Minds Behind the Digital Revolution"}
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {language === "bn"
                            ? "ওভিসফটের প্রতিটি লাইন কোড এবং ক্লাউড আর্কিটেকচার তৈরি হয় আমাদের দক্ষ ইঞ্জিনিয়ার এবং বিজনেস লিডারদের তত্ত্বাবধানে।"
                            : "A collective of software architects, cloud engineers, and growth strategists passionate about building ultra-reliable software platforms."}
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-28">
                    {leadership.map((member, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-accent/40 bg-[#111118] transition-all duration-300 hover:-translate-y-1.5 relative group overflow-hidden"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-accent transition-all duration-300 shrink-0 shadow-2xl relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                                        {language === "bn" ? member.departmentBn : member.departmentEn}
                                    </span>
                                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-semibold mt-1">
                                        {language === "bn" ? member.roleBn : member.roleEn}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6 border-y border-white/5 py-5">
                                {language === "bn" ? member.bioBn : member.bioEn}
                            </p>

                            <div>
                                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    {language === "bn" ? "দক্ষতা ও ডোমেইন:" : "Core Competencies:"}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {member.expertise.map((exp, eIdx) => (
                                        <span
                                            key={eIdx}
                                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 text-xs font-medium"
                                        >
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Company Values & Culture */}
                <div className="mb-28">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                            <Sparkles size={14} />
                            <span>{language === "bn" ? "আমাদের কাজের মূলনীতি" : "Engineering Culture"}</span>
                        </div>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                            {language === "bn" ? "কেন ওভিসফট আলাদা?" : "Our Core Principles"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, idx) => (
                            <div
                                key={idx}
                                className="glass p-8 rounded-3xl border border-white/10 bg-[#0e0e14] hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                                    <val.icon size={24} />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-white mb-2">
                                    {language === "bn" ? val.titleBn : val.titleEn}
                                </h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {language === "bn" ? val.descBn : val.descEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join the Team / Project CTA */}
                <div className="glass rounded-3xl p-8 md:p-14 border border-accent/40 bg-gradient-to-r from-[#121220] via-[#0d0d18] to-black text-center space-y-6">
                    <h3 className="font-heading text-3xl md:text-4xl font-black text-white">
                        {language === "bn" ? "আমাদের সাথে আপনার প্রজেক্ট শুরু করতে চান?" : "Ready to Build Something Extraordinary?"}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        {language === "bn"
                            ? "আপনার সফটওয়্যার, ই-কমার্স বা ক্লাউড সল্যুশনের জন্য ওভিসফট টিম সর্বদা প্রস্তুত। ১ম বছর ফ্রি ক্লাউড হোস্টিং সহ এখনই শুরু করুন।"
                            : "Collaborate with our engineering team to design, build, and deploy high-concurrency web and AI platforms."}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <Link
                            href="/start-project"
                            className="bg-accent text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-2"
                        >
                            <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start a Project"}</span>
                            <ArrowRight size={16} />
                        </Link>
                        <a
                            href="mailto:admin@ovisoft.tech"
                            className="bg-white/5 hover:bg-white/15 text-white border border-white/10 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                        >
                            <Mail size={16} />
                            <span>admin@ovisoft.tech</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
