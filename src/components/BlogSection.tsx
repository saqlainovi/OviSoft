"use client";

import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const articlesEn = [
    {
        slug: "why-ecommerce-beats-fb-page",
        title: "Why an Automated E-Commerce Website Drives 40% More Revenue Than a Facebook Page",
        excerpt: "Relying purely on manual Messenger replies creates bottleneck delays and abandoned sales. Discover how instant bKash/Nagad checkout scales Bangladeshi retail brands.",
        category: "E-Commerce & Tech",
        readTime: "5 min read",
        date: "30 Aug 2026"
    },
    {
        slug: "bkash-auto-payment-integration-guide",
        title: "How to Integrate Automated bKash & Nagad Payment Gateways on Your Website",
        excerpt: "Eliminate manual screenshot matching and payment confirmation friction. Set up instant 2-second order processing with live webhook callbacks.",
        category: "Payment Gateway",
        readTime: "6 min read",
        date: "30 Aug 2026"
    },
    {
        slug: "proxmox-cloud-vs-shared-hosting",
        title: "Private Proxmox Cloud Hosting in Dhaka vs Cheap Shared Hosting: The Technical Breakdown",
        excerpt: "Explore how 0.1s ultra-low latency local cloud nodes in Dhaka dramatically improve Core Web Vitals, Google SEO rankings, and checkout conversions.",
        category: "Cloud Infrastructure",
        readTime: "4 min read",
        date: "30 Aug 2026"
    }
];

const articlesBn = [
    {
        slug: "why-ecommerce-beats-fb-page",
        title: "কেন সাধারণ ফেসবুক পেজের চেয়েও নিজস্ব ই‑কমার্স ওয়েবসাইট আপনাকে ৪০% পর্যন্ত সেলস বাড়াতে পারে?",
        excerpt: "অনলাইন শপ বা বুটিক ওনারদের একটি বড় সমস্যা—কাস্টমার যখন রাতে ইনবক্সে মেসেজ দেয়, রিপ্লাই দিতে দেরি হলেই সেলস অন্য পেজে চলে যায়। বিকাশ অটো-পেমেন্টের সম্পূর্ণ সুবিধা জানুন।",
        category: "E-Commerce & Tech",
        readTime: "৫ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬"
    },
    {
        slug: "bkash-auto-payment-integration-guide",
        title: "বিকাশ ও নগদ অটো পেমেন্ট গেটওয়ে কীভাবে আপনার ওয়েবসাইটে যুক্ত করবেন? (সম্পূর্ণ নিয়মাবলী)",
        excerpt: "ম্যানুয়াল স্ক্রিনশট ম্যাচিং ও পেমেন্ট ভেরিফিকেশনের ঝামেলা বাদ দিয়ে কীভাবে ২ সেকেন্ডে অটোমেটেড চেকআউট সিস্টেম চালু করবেন।",
        category: "Payment Gateway",
        readTime: "৬ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬"
    },
    {
        slug: "proxmox-cloud-vs-shared-hosting",
        title: "ঢাকায় নিজস্ব Proxmox ডেডিকেটেড ক্লাউড হোস্টিং vs সাধারণ শেয়ারড হোস্টিং: কোনটি সেরা?",
        excerpt: "০.১ সেকেন্ডের সুপারফাস্ট লোডিং স্পিড এবং বাংলাদেশি ক্লায়েন্টদের জন্য নিজস্ব প্রাইভেট ক্লাউড নোডের আসল টেকনিক্যাল পার্থক্য।",
        category: "Cloud Infrastructure",
        readTime: "৪ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬"
    }
];

export default function BlogSection() {
    const { language } = useLanguage();
    const articles = language === "bn" ? articlesBn : articlesEn;

    return (
        <section id="blog" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                            <BookOpen size={14} />
                            <span>{language === "bn" ? "জ্ঞান ও টেকনিক্যাল ইনসাইটস" : "Engineering & Business Insights"}</span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {language === "bn" ? "ওভিসফট টেক ব্লগ" : "OviSoft Tech Hub"}
                        </h2>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-accent hover:text-cyan-300 font-bold text-sm tracking-wider uppercase group"
                    >
                        <span>{language === "bn" ? "সকল আর্টিকেল দেখুন" : "View All Articles"}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((art, idx) => (
                        <Link
                            key={idx}
                            href={`/blog/${art.slug}`}
                            className="glass rounded-3xl p-8 border border-white/10 hover:border-accent/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group bg-[#101015]"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4 text-xs text-gray-400">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent font-medium">
                                        <Tag size={12} />
                                        {art.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <Clock size={12} />
                                        {art.readTime}
                                    </span>
                                </div>

                                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                                    {art.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {art.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider pt-4 border-t border-white/5">
                                <span>{language === "bn" ? "সম্পূর্ণ পড়ুন" : "Read Full Article"}</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
