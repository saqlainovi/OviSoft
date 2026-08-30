"use client";

import { ArrowRight, BookOpen, Clock, Tag, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const articlesEn = [
    {
        slug: "why-ecommerce-beats-fb-page",
        title: "Why an Automated E-Commerce Website Drives 40% More Revenue Than a Facebook Page",
        excerpt: "Relying purely on manual Messenger replies creates bottleneck delays and abandoned sales. Discover how instant bKash/Nagad checkout scales Bangladeshi retail brands.",
        category: "E-Commerce",
        readTime: "5 min read",
        date: "30 Aug 2026",
        author: "OviSoft Research & Development Team"
    },
    {
        slug: "bkash-auto-payment-integration-guide",
        title: "How to Integrate Automated bKash & Nagad Payment Gateways on Your Website",
        excerpt: "Eliminate manual screenshot matching and payment confirmation friction. Set up instant 2-second order processing with live webhook callbacks.",
        category: "Payment Gateway",
        readTime: "6 min read",
        date: "30 Aug 2026",
        author: "OviSoft Solutions Architecture"
    },
    {
        slug: "proxmox-cloud-vs-shared-hosting",
        title: "Private Proxmox Cloud Hosting in Dhaka vs Cheap Shared Hosting: The Technical Breakdown",
        excerpt: "Explore how 0.1s ultra-low latency local cloud nodes in Dhaka dramatically improve Core Web Vitals, Google SEO rankings, and checkout conversions.",
        category: "Cloud Infrastructure",
        readTime: "4 min read",
        date: "30 Aug 2026",
        author: "OviSoft Infrastructure Team"
    },
    {
        slug: "nextjs-15-vs-wordpress-bangladesh",
        title: "Next.js 15 vs WordPress in 2026: Which Stack Delivers Greater Speed and Security for BD Businesses?",
        excerpt: "Why modern engineering teams prefer Next.js 15, React 19, and server-side rendering over vulnerable WordPress plugins.",
        category: "Web Engineering",
        readTime: "7 min read",
        date: "30 Aug 2026",
        author: "OviSoft Engineering Lead"
    },
    {
        slug: "erp-automation-for-bangladeshi-retail",
        title: "How Custom ERP & Inventory Automation Saves Bangladeshi Factories 20 Hours per Week",
        excerpt: "Automate raw materials tracking, employee payroll, and automated digital challan generation seamlessly.",
        category: "ERP & SaaS",
        readTime: "5 min read",
        date: "30 Aug 2026",
        author: "OviSoft Enterprise Advisory"
    }
];

const articlesBn = [
    {
        slug: "why-ecommerce-beats-fb-page",
        title: "কেন সাধারণ ফেসবুক পেজের চেয়েও নিজস্ব ই‑কমার্স ওয়েবসাইট আপনাকে ৪০% পর্যন্ত সেলস বাড়াতে পারে?",
        excerpt: "অনলাইন শপ বা বুটিক ওনারদের একটি বড় সমস্যা—কাস্টমার যখন রাতে ইনবক্সে মেসেজ দেয়, রিপ্লাই দিতে দেরি হলেই সেলস অন্য পেজে চলে যায়। বিকাশ অটো-পেমেন্টের সম্পূর্ণ সুবিধা জানুন।",
        category: "E-Commerce",
        readTime: "৫ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬",
        author: "OviSoft Research & Development Team"
    },
    {
        slug: "bkash-auto-payment-integration-guide",
        title: "বিকাশ ও নগদ অটো পেমেন্ট গেটওয়ে কীভাবে আপনার ওয়েবসাইটে যুক্ত করবেন? (সম্পূর্ণ নিয়মাবলী)",
        excerpt: "ম্যানুয়াল স্ক্রিনশট ম্যাচিং ও পেমেন্ট ভেরিফিকেশনের ঝামেলা বাদ দিয়ে কীভাবে ২ সেকেন্ডে অটোমেটেড চেকআউট সিস্টেম চালু করবেন।",
        category: "Payment Gateway",
        readTime: "৬ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬",
        author: "OviSoft Solutions Architecture"
    },
    {
        slug: "proxmox-cloud-vs-shared-hosting",
        title: "ঢাকায় নিজস্ব Proxmox ডেডিকেটেড ক্লাউড হোস্টিং vs সাধারণ শেয়ারড হোস্টিং: কোনটি সেরা?",
        excerpt: "০.১ সেকেন্ডের সুপারফাস্ট লোডিং স্পিড এবং বাংলাদেশি ক্লায়েন্টদের জন্য নিজস্ব প্রাইভেট ক্লাউড নোডের আসল টেকনিক্যাল পার্থক্য।",
        category: "Cloud Infrastructure",
        readTime: "৪ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬",
        author: "OviSoft Infrastructure Team"
    },
    {
        slug: "nextjs-15-vs-wordpress-bangladesh",
        title: "Next.js 15 বনাম WordPress: ২০২৬ সালে বাংলাদেশি ব্যবসার জন্য কোনটি দ্রুত ও নিরাপদ?",
        excerpt: "ওয়ার্ডপ্রেসের সিকিউরিটি প্লাগইন জটিলতা এবং স্লো স্পিডের বিপরীতে Next.js 15 ও React 19 কেন আধুনিক টেক এজেন্সিদের প্রথম পছন্দ।",
        category: "Web Engineering",
        readTime: "৭ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬",
        author: "OviSoft Engineering Lead"
    },
    {
        slug: "erp-automation-for-bangladeshi-retail",
        title: "রিটেল ও ফ্যাক্টরি ব্যবসার জন্য কাস্টম ERP সফটওয়্যার কীভাবে প্রতি সপ্তাহে ২০ ঘণ্টা বাঁচায়?",
        excerpt: "স্টক ইনভেন্টরি, কর্মচারী বেতন এবং অটোমেটেড চালানের পূর্ণাঙ্গ সমাধান তৈরির গাইডলাইন।",
        category: "ERP & SaaS",
        readTime: "৫ মিনিট পাঠ",
        date: "৩০ আগস্ট ২০২৬",
        author: "OviSoft Enterprise Advisory"
    }
];

export default function BlogListingPage() {
    const { language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["All", "E-Commerce", "Payment Gateway", "Cloud Infrastructure", "Web Engineering", "ERP & SaaS"];
    const allArticles = language === "bn" ? articlesBn : articlesEn;

    const filtered = allArticles.filter(art => {
        const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
        const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-12 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>{language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}</span>
                </Link>

                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                        <BookOpen size={14} />
                        <span>OviSoft Knowledge Hub</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
                        {language === "bn"
                            ? "প্রযুক্তি, সফটওয়্যার ও আধুনিক ব্যবসার আর্টিকেল"
                            : "Engineering, Cloud & Software Growth Articles"}
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {language === "bn"
                            ? "বাংলাদেশি ব্যবসায়ী ও প্রযুক্তিপ্রেমীদের জন্য আধুনিক ওয়েবসাইট, ক্লাউড হোস্টিং এবং সফটওয়্যার অটোমেশনের ইন-সাইট ব্লগ।"
                            : "Actionable engineering guides, cloud architecture deep dives, and scaling strategies for modern software."}
                    </p>
                </div>

                {/* Search & Categories */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all shrink-0 ${
                                    selectedCategory === cat
                                        ? "bg-accent text-black shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                                        : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder={language === "bn" ? "আর্টিকেল খুঁজুন..." : "Search articles..."}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#111118] border border-white/15 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
                        />
                        <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((art, idx) => (
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

                            <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/5">
                                <span>{art.date}</span>
                                <span className="text-accent font-bold uppercase tracking-wider flex items-center gap-1">
                                    {language === "bn" ? "পড়ুন" : "Read"} <ArrowRight size={12} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
