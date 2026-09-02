"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building2, Quote, ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface CertificateItem {
    id: string;
    organizationEn: string;
    organizationBn: string;
    sectorEn: string;
    sectorBn: string;
    productUsed: string;
    awardeeTitleEn: string;
    awardeeTitleBn: string;
    quoteEn: string;
    quoteBn: string;
    issuedDate: string;
    verifiedId: string;
}

const certificates: CertificateItem[] = [
    {
        id: "cert-1",
        organizationEn: "Ha-Meem Textile & Packaging Units",
        organizationBn: "হা-মীম টেক্সটাইল ও প্যাকেজিং গ্রুপ",
        sectorEn: "Garments & Supply Chain",
        sectorBn: "গার্মেন্টস ও সাপ্লাই চেইন",
        productUsed: "OviSupplyChain & OviERP",
        awardeeTitleEn: "Managing Director",
        awardeeTitleBn: "ব্যবস্থাপনা পরিচালক",
        quoteEn: "Running multiple factory units across garments, packaging, and textiles meant our supply chain and financial data was always fragmented. OviSoft deployed an integrated cloud ERP across all our factories. Today, group-level consolidation and dispatch tracking takes seconds.",
        quoteBn: "আমাদের ১১টি ভিন্ন ফ্যাক্টরি ও প্রোডাকশন ইউনিটের সাপ্লাই চেইন ও অ্যাকাউন্টস ট্র্যাকিং করা অনেক জটিল ছিল। ওভিসফট-এর ক্লাউড ইআরপি সিস্টেম চালু করার পর প্রতিটি অর্ডারের কাঁচামাল সংগ্রহ থেকে ডেলিভারি পর্যন্ত প্রতিটি ধাপ নিমিষেই সেন্ট্রাল ড্যাশবোর্ডে পাওয়া যাচ্ছে।",
        issuedDate: "2024 - Present",
        verifiedId: "OVI-CERT-8841"
    },
    {
        id: "cert-2",
        organizationEn: "Universal Publications & Retail Network",
        organizationBn: "ইউনিভার্সাল পাবলিকেশন্স ও বুকশপ নেটওয়ার্ক",
        sectorEn: "Publishing & Bookstore Chains",
        sectorBn: "প্রকাশনা ও চেইন বুকশপ",
        productUsed: "OviPublication & POS Matrix",
        awardeeTitleEn: "Executive Director",
        awardeeTitleBn: "নির্বাহী পরিচালক",
        quoteEn: "Managing over 4,500 active book titles across multiple outlets used to be a logistical nightmare with registers. OviSoft's publication ERP automated our author royalties, consignment billing, and POS checkout flawlessly. Exceptional software engineering.",
        quoteBn: "সারাদেশের আউটলেটে ৪,৫০০টির বেশি বইয়ের স্টক ও শত শত লেখকের রয়্যালটি হিসাব রাখা আমাদের জন্য কঠিন ছিল। ওভিসফটের কাস্টম সফটওয়্যার আমাদের লেখক রয়্যালটি, চালান বিলিং এবং পিওএস অটোমেশন এক নিমিষে সমাধান করে দিয়েছে।",
        issuedDate: "2023 - Present",
        verifiedId: "OVI-CERT-9102"
    },
    {
        id: "cert-3",
        organizationEn: "Dhaka Premier Diagnostic & Medical Hub",
        organizationBn: "ঢাকা প্রিমিয়ার ডায়াগনস্টিক ও মেডিকেল হাব",
        sectorEn: "Healthcare & Diagnostics",
        sectorBn: "স্বাস্থ্যসেবা ও ডায়াগনস্টিক",
        productUsed: "OviHealth Clinic ERP",
        awardeeTitleEn: "Chief Medical Officer",
        awardeeTitleBn: "প্রধান মেডিকেল কর্মকর্তা",
        quoteEn: "Patient wait times decreased by 65% with OviSoft's barcode lab report system and OPD admission flow. Their 24/7 dedicated Dhaka server ensures zero lag during peak hours.",
        quoteBn: "ওভিসফটের ডিজিটাল বারকোড ল্যাব রিপোর্টিং এবং ওপিডি পেশেন্ট ম্যানেজমেন্ট সিস্টেমের কারণে রোগীদের ওয়েটিং টাইম ৬৫% কমে গেছে। ঢাকায় নিজস্ব সার্ভারে হোস্টিং থাকায় পিক আওয়ারেও কোনো ল্যাগ হয় না।",
        issuedDate: "2024 - Present",
        verifiedId: "OVI-CERT-7634"
    },
    {
        id: "cert-4",
        organizationEn: "Apex Agro & SuperShop Chains",
        organizationBn: "অ্যাপেক্স এগ্রো ও সুপারশপ চেইন",
        sectorEn: "Retail POS & Wholesale",
        sectorBn: "রিটেইল সুপারশপ ও হোলসেল",
        productUsed: "OviPOS & Multi-Store Inventory",
        awardeeTitleEn: "Head of Operations",
        awardeeTitleBn: "হেড অব অপারেশনস",
        quoteEn: "High-speed barcode scanning, bKash automated tokenized payment, and instant multi-store stock transfers make OviSoft POS the most reliable retail software we have used in a decade.",
        quoteBn: "দ্রুততম বারকোড স্ক্যানিং, বিকাশ অটো-পেমেন্ট এবং এক শপ থেকে অন্য শপে লাইভ স্টক ট্রান্সফারের সুবিধা ওভিসফটের পিওএসকে আমাদের দেখা সেরা ও নির্ভরযোগ্য সফটওয়্যারে পরিণত করেছে।",
        issuedDate: "2023 - Present",
        verifiedId: "OVI-CERT-5529"
    }
];

export default function ClientCertificates() {
    const { language } = useLanguage();

    return (
        <section id="certificates" className="py-24 relative overflow-hidden bg-[#02050e]">
            {/* Background Ambient Aura */}
            <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full filter blur-[180px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full filter blur-[180px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                        <Award size={14} />
                        <span>{language === "bn" ? "ক্লায়েন্ট প্রশংসাপত্র ও স্বীকৃতি" : "Certificates of Appreciation & Client Trust"}</span>
                    </div>

                    <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight mb-6">
                        {language === "bn" ? (
                            <>
                                বাংলাদেশের শীর্ষ প্রতিষ্ঠানের আস্থা <br />
                                <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]">স্বীকৃত কাজের প্রমাণ</span>
                            </>
                        ) : (
                            <>
                                Trusted by Industry Leaders <br />
                                <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]">Official Client Endorsements</span>
                            </>
                        )}
                    </h2>

                    <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        {language === "bn"
                            ? "সাধারণ রিভিউ নয়—আমাদের নির্ভরযোগ্য সার্ভিস ও কোয়ালিটির জন্য সম্মানিত ক্লায়েন্টদের প্রদত্ত অফিসিয়াল প্রশংসাপত্র।"
                            : "Formal certificates of excellence awarded to OviSoft by enterprises, factory groups, and retail networks we proudly engineer software for."}
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative rounded-3xl p-8 sm:p-10 bg-[#070b16] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
                        >
                            {/* Certificate Gold Ribbon Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-transparent rounded-bl-full pointer-events-none" />

                            <div>
                                {/* Certificate Header */}
                                <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
                                    <div>
                                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block mb-1">
                                            CERTIFICATE OF APPRECIATION
                                        </span>
                                        <h3 className="font-heading font-black text-2xl text-white">
                                            {language === "bn" ? cert.organizationBn : cert.organizationEn}
                                        </h3>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {language === "bn" ? cert.sectorBn : cert.sectorEn} • <span className="text-accent font-semibold">{cert.productUsed}</span>
                                        </p>
                                    </div>

                                    {/* Golden Verified Seal */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.25)]">
                                        <Award size={24} />
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="relative mb-8">
                                    <Quote className="absolute -top-2 -left-2 text-white/10 w-8 h-8 -z-10" />
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light italic">
                                        "{language === "bn" ? cert.quoteBn : cert.quoteEn}"
                                    </p>
                                </div>
                            </div>

                            {/* Certificate Footer */}
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                                <div>
                                    <p className="text-white font-bold font-heading">
                                        {language === "bn" ? cert.awardeeTitleBn : cert.awardeeTitleEn}
                                    </p>
                                    <span className="text-[10px] text-gray-500 font-mono">
                                        Verified: {cert.verifiedId}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                                    <ShieldCheck size={13} />
                                    <span>Active Enterprise Partner</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating WhatsApp / Direct Contact Trigger */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-xs mb-4">
                        {language === "bn" ? "সরাসরি আমাদের সল্যুশন আর্কিটেক্টদের সাথে হোয়াটসঅ্যাপে কথা বলুন:" : "Connect with our lead architects on WhatsApp for instant proposal:"}
                    </p>
                    <a
                        href="https://wa.me/8801781376867"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95"
                    >
                        <span>WhatsApp Chat: +880 1781-376867</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
