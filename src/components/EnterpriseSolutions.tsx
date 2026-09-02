"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    Layers, 
    Building2, 
    Truck, 
    ShoppingCart, 
    Users, 
    Calculator, 
    GraduationCap, 
    BookOpen, 
    Globe, 
    Bot, 
    HeartPulse, 
    ArrowUpRight, 
    CheckCircle2, 
    Sparkles, 
    ShieldCheck, 
    ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionItem {
    id: string;
    category: "erp" | "supply" | "retail" | "industry" | "web";
    titleEn: string;
    titleBn: string;
    subtitleEn: string;
    subtitleBn: string;
    descriptionEn: string;
    descriptionBn: string;
    modules: string[];
    icon: any;
    color: string;
    badge: string;
}

const solutions: SolutionItem[] = [
    {
        id: "ierp-enterprise",
        category: "erp",
        titleEn: "OviERP Manager",
        titleBn: "ওভিসিআরপি এন্টারপ্রাইজ",
        subtitleEn: "SCMS • HRM • ACCOUNTS • AUDIT",
        subtitleBn: "সাপ্লাই চেইন • এইচআরএম • একাউন্টস • অডিট",
        descriptionEn: "Complete cloud ERP platform for large enterprises, garments, and multi-branch group of companies. Features real-time consolidated financial intelligence and multi-warehouse control.",
        descriptionBn: "বৃহৎ এন্টারপ্রাইজ, গার্মেন্টস ও মাল্টি-ব্রাঞ্চ গ্রুপের জন্য পূর্ণাঙ্গ ক্লাউড ইআরপি। রিয়েল-টাইম সেন্ট্রালাইজড অ্যাকাউন্টিং ও ওয়্যারহাউস ম্যানেজমেন্টের শতভাগ অটোমেশন।",
        modules: ["Multi-Branch Ledger", "Automated Payroll", "Inventory Matrix", "Audit Vault", "Zero-Trust Security"],
        icon: Building2,
        color: "from-blue-600 via-indigo-600 to-cyan-500",
        badge: "Flagship ERP"
    },
    {
        id: "isupplychain",
        category: "supply",
        titleEn: "OviSupplyChain Matrix",
        titleBn: "সাপ্লাই চেইন ও প্রোডাকশন",
        subtitleEn: "SCMS • PRODUCTION • LOGISTICS",
        subtitleBn: "ম্যানুফ্যাকচারিং • প্রোডাকশন • ডেলিভারি",
        descriptionEn: "End-to-end supply chain ecosystem tracking raw material procurement, factory floor production lines, dispatch tracking, and automated vendor reconciliations.",
        descriptionBn: "কাঁচামাল সংগ্রহ থেকে শুরু করে ফ্যাক্টরি ফ্লোরে প্রোডাকশন, কোয়ালিটি চেক ও লজিস্টিকস ডেলিভারির প্রতিটি ধাপ ট্র্যাক করার আধুনিক সফটওয়্যার।",
        modules: ["Production Workflow", "Vendor Portal", "Raw Material GRN", "Dispatch Tracking", "SLA Monitoring"],
        icon: Truck,
        color: "from-cyan-600 via-teal-600 to-emerald-500",
        badge: "Manufacturing"
    },
    {
        id: "ishopkeeper-pos",
        category: "retail",
        titleEn: "OviPOS & ShopKeeper",
        titleBn: "রিটেইল ও সুপারশপ পিওএস",
        subtitleEn: "POS • WHOLESALE • RETAIL INVENTORY",
        subtitleBn: "পয়েন্ট অব সেল • পাইকারি ও খুচরা বিক্রয়",
        descriptionEn: "High-speed barcode POS, wholesale order processing, multi-outlet stock syncing, and instant bKash/Nagad/Card payment reconciliation with thermal receipt printing.",
        descriptionBn: "দ্রুততম বারকোড পিওএস, মাল্টি-আউটলেট স্টক সিনক্রোনাইজেশন এবং ইনস্ট্যান্ট ডিজিটাল পেমেন্ট রিকনসিলিয়েশন সহ রিটেইল ও হোলসেল সলিউশন।",
        modules: ["Barcode Scanning", "Multi-Counter Sync", "Wholesale Credit Ledger", "Thermal Invoicing", "Stock Alerts"],
        icon: ShoppingCart,
        color: "from-emerald-600 via-green-600 to-teal-500",
        badge: "POS & Retail"
    },
    {
        id: "ihrmanager",
        category: "erp",
        titleEn: "OviHR & Smart Payroll",
        titleBn: "এইচআর ও বায়োমেট্রিক পেরোল",
        subtitleEn: "PERSONNEL • ATTENDANCE • TAX & SALARY",
        subtitleBn: "উপস্থিতি • পে-রোল • ট্যাক্স ও লিভ পোর্টাল",
        descriptionEn: "Automated biometric attendance integration, custom Bangladeshi tax & PF calculations, employee self-service portal, and one-click salary disbursement sheets.",
        descriptionBn: "বায়োমেট্রিক ডিভাইস ইন্টিগ্রেশন, লিভ ম্যানেজমেন্ট, স্বয়ংক্রিয় প্রভিডেন্ট ফান্ড ও ট্যাক্স ক্যালকুলেশন সহ ১-ক্লিক পে-রোল শিট জেনারেশন।",
        modules: ["Biometric Sync", "Salary Auto-Sheet", "Tax & PF Matrix", "Employee App", "Leave Approvals"],
        icon: Users,
        color: "from-purple-600 via-indigo-600 to-blue-500",
        badge: "HR & Payroll"
    },
    {
        id: "iaccountmanager",
        category: "erp",
        titleEn: "OviAccounts & Ledger",
        titleBn: "ফাইন্যান্স ও অডিট লেজার",
        subtitleEn: "JOURNAL • LEDGER • TAX & BALANCE SHEET",
        subtitleBn: "জার্নাল • লেজার • ভ্যাট ও ইনভয়েসিং",
        descriptionEn: "Double-entry accounting system with automated VAT/Tax computation, profit-loss analytics, multi-currency ledger, and real-time executive balance sheet reporting.",
        descriptionBn: "ডাবল-এন্ট্রি অ্যাকাউন্টিং আর্কিটেকচার, অটোমেটেড ভ্যাট ও ট্যাক্স হিসাব, রিয়েল-টাইম প্রফিট/লস স্টেটমেন্ট ও মাল্টি-কারেন্সি লেজার।",
        modules: ["Double-Entry Engine", "Vat / Tax Invoicing", "Balance Sheet Generator", "Bank Reconciliation", "Cash-Flow Chart"],
        icon: Calculator,
        color: "from-amber-600 via-orange-600 to-rose-500",
        badge: "Finance"
    },
    {
        id: "ischoolmanager",
        category: "industry",
        titleEn: "OviEduCore Campus ERP",
        titleBn: "স্কুল ও ইউনিভার্সিটি ম্যানেজমেন্ট",
        subtitleEn: "STUDENTS • EXAMS • FEES & ACCOUNTS",
        subtitleBn: "শিক্ষার্থী পোর্টাল • পরীক্ষা রেজাল্ট • ফি কালেকশন",
        descriptionEn: "Comprehensive educational institution software with student admission, fee collection SMS gateway, digital report cards, and parent mobile portals.",
        descriptionBn: "স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের স্টুডেন্ট ভর্তি, ডিজিটাল ফি কালেকশন, স্বয়ংক্রিয় গ্রেডশিট তৈরি এবং অভিভাবক পোর্টালের পূর্ণাঙ্গ প্ল্যাটফর্ম।",
        modules: ["Admissions Portal", "SMS Fee Collection", "Automated GradeSheet", "Teacher Logbook", "Student ID Generator"],
        icon: GraduationCap,
        color: "from-indigo-600 via-purple-600 to-pink-500",
        badge: "Education"
    },
    {
        id: "ipublicationmanager",
        category: "industry",
        titleEn: "OviPublication & BookStore",
        titleBn: "বুকশপ ও প্রকাশনা ম্যানেজমেন্ট",
        subtitleEn: "PUBLICATION • ROYALTY • BRANCH STOCKS",
        subtitleBn: "প্রকাশনা স্টক • লেখক রয়্যালটি • সেলস",
        descriptionEn: "Specialized for publishing houses and bookstore networks. Manage thousands of titles, author royalty calculations, branch replenishment, and consignment sales.",
        descriptionBn: "হাজার হাজার বইয়ের টাইটেল, লেখক রয়্যালটি হিসাব, শাখা স্টক এবং পাইকারি কনসাইনমেন্ট বিক্রয়ের জন্য বিশেষায়িত সফটওয়্যার।",
        modules: ["Title Cataloging", "Author Royalty Matrix", "Consignment Orders", "Distributor Ledger", "Warehouse Restock"],
        icon: BookOpen,
        color: "from-rose-600 via-pink-600 to-purple-500",
        badge: "Publishing"
    },
    {
        id: "iecommerce-nextjs",
        category: "web",
        titleEn: "OviCommerce Ultra-Fast",
        titleBn: "হাই-পারফরম্যান্স ই-কমার্স",
        subtitleEn: "NEXT.JS 16 • AUTO-PAYMENT • PROXMOX HOSTED",
        subtitleBn: "নেক্সট.জেএস ১৬ • অটোমেটেড পেমেন্ট • ক্লাউড নোড",
        descriptionEn: "Modern server-rendered e-commerce platform capable of handling millions of simultaneous shoppers with zero lag. Includes bKash/Nagad/SSLCommerz and courier auto-sync.",
        descriptionBn: "নেক্সট.জেএস ১৬ আর্কিটেকচারে তৈরি বিদ্যুৎগতির অনলাইন শপ—বিকাশ/নগদ অটো-পেমেন্ট ও কুরিয়ার এপিআই ইন্টিগ্রেশন সহ ঢাকায় নিজস্ব ক্লাউড নোডে হোস্ট করা।",
        modules: ["Sub-Second Load Time", "bKash Tokenized Checkout", "Pathao/Steadfast API", "Live Stock Count", "Abandoned Cart Recovery"],
        icon: Globe,
        color: "from-blue-600 via-cyan-600 to-sky-400",
        badge: "Next.js E-Com"
    },
    {
        id: "iai-support-bot",
        category: "web",
        titleEn: "OviAI Autonomous Agent",
        titleBn: "অটোনোমাস এআই কাস্টমার এজেন্ট",
        subtitleEn: "LLM MATRIX • 24/7 SUPPORT • CRM SYNC",
        subtitleBn: "এআই চ্যাটবট • ২৪/৭ সাপোর্ট • সিআরএম অটোমেশন",
        descriptionEn: "Fine-tuned domain LLM conversational agent that answers product queries in Bangla/English, processes orders directly, and synchronizes with your ERP.",
        descriptionBn: "বাংলা ও ইংরেজিতে গ্রাহকের সব প্রশ্নের তাৎক্ষণিক উত্তর প্রদানকারী এবং স্বয়ংক্রিয়ভাবে অর্ডার বুকিং ও কাস্টমার ট্র্যাকিং সম্পন্নকারী এআই সহকারী।",
        modules: ["Natural Bangla NLP", "Auto-Order Creation", "Knowledge Base RAG", "CRM Integration", "Instant Escalation"],
        icon: Bot,
        color: "from-violet-600 via-purple-600 to-indigo-500",
        badge: "AI Automation"
    },
    {
        id: "ihospital-manager",
        category: "industry",
        titleEn: "OviHealth Clinic & Lab ERP",
        titleBn: "হাসপাতাল ও ডায়াগনস্টিক ম্যানেজমেন্ট",
        subtitleEn: "PATIENTS • LAB REPORTS • DOCTOR APPOINTMENTS",
        subtitleBn: "রোগী ভর্তি • ডিজিটাল ল্যাব রিপোর্ট • প্রেসক্রিপশন",
        descriptionEn: "Integrated hospital management suite featuring OPD/IPD tracking, doctor consultation rosters, diagnostic lab test barcoding, and pharmacy billing.",
        descriptionBn: "রোগী অ্যাডমিশন, ডাক্তারদের সিরিয়াল শিডিউলিং, ডিজিটাল ল্যাব রিপোর্ট এবং সেন্ট্রালাইজড ফার্মাসি বিলিংয়ের পূর্ণাঙ্গ স্বাস্থ্যসেবা ইআরপি।",
        modules: ["OPD / IPD Admissions", "Doctor Roster Matrix", "Barcode Lab Reports", "Pharmacy POS Sync", "Discharge Summary"],
        icon: HeartPulse,
        color: "from-red-600 via-rose-600 to-pink-500",
        badge: "Healthcare"
    }
];

export default function EnterpriseSolutions() {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState<string>("all");

    const filteredSolutions = activeTab === "all"
        ? solutions
        : solutions.filter((s) => s.category === activeTab);

    const tabs = [
        { id: "all", labelEn: "All Enterprise Products", labelBn: "সকল প্রোডাক্ট" },
        { id: "erp", labelEn: "ERP & Finance", labelBn: "ইআরপি ও ফাইন্যান্স" },
        { id: "supply", labelEn: "Supply Chain & Manufacturing", labelBn: "সাপ্লাই চেইন ও প্রোডাকশন" },
        { id: "retail", labelEn: "Retail POS & Stores", labelBn: "রিটেইল ও পিওএস" },
        { id: "industry", labelEn: "Publishing & Education", labelBn: "প্রকাশনা ও শিক্ষা" },
        { id: "web", labelEn: "E-Commerce & AI", labelBn: "ই-কমার্স ও এআই" }
    ];

    return (
        <section id="solutions" className="py-24 relative overflow-hidden bg-[#02050f]/80">
            {/* Ambient Background Light Flares */}
            <div className="absolute top-1/3 left-[-15%] w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-[-15%] w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                        <Layers size={14} />
                        <span>{language === "bn" ? "প্রোডাক্ট স্যুট ও সল্যুশনস" : "Enterprise Product Ecosystem"}</span>
                    </div>

                    <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight mb-6">
                        {language === "bn" ? (
                            <>
                                ব্যবসার প্রতিটি ধাপের জন্য <br />
                                <span className="text-accent drop-shadow-[0_0_30px_rgba(0,243,255,0.4)]">শক্তিশালী এন্টারপ্রাইজ সফটওয়্যার</span>
                            </>
                        ) : (
                            <>
                                Mission-Critical Software <br />
                                <span className="text-accent drop-shadow-[0_0_30px_rgba(0,243,255,0.4)]">Built For Scale & High Availability</span>
                            </>
                        )}
                    </h2>

                    <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        {language === "bn"
                            ? "ম্যানুফ্যাকচারিং, রিটেইল, শিক্ষা ও ফাইন্যান্স সহ সব ইন্ডাস্ট্রির জন্য রেডি ও কাস্টমাইজড সফটওয়্যার সল্যুশন—ঢাকায় নিজস্ব ডেডিকেটেড সার্ভার ক্লাস্টারে হোস্ট করা।"
                            : "Enterprise-grade scalable systems covering ERP, supply chain, retail POS, publishing, healthcare, and localized AI automation."}
                    </p>

                    {/* Filter Navigation Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-10 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 max-w-3xl mx-auto backdrop-blur-xl">
                        {tabs.map((tab) => {
                            const isSelected = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all select-none cursor-pointer ${
                                        isSelected ? "text-black font-extrabold" : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeTabPill"
                                            className="absolute inset-0 rounded-xl bg-accent shadow-[0_0_20px_rgba(0,243,255,0.45)] -z-10"
                                            transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                        />
                                    )}
                                    <span>{language === "bn" ? tab.labelBn : tab.labelEn}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Solutions Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredSolutions.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35 }}
                                    className="group relative rounded-3xl p-8 bg-[#090e1c]/80 border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
                                >
                                    {/* Top Background Gradient Flare */}
                                    <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-25 rounded-full filter blur-[50px] transition-opacity duration-500`} />

                                    <div>
                                        {/* Card Top: Icon & Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-13 h-13 rounded-2xl p-3 bg-white/[0.05] border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shadow-lg">
                                                <IconComponent size={26} />
                                            </div>

                                            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/[0.06] border border-white/10 text-gray-300 group-hover:border-accent/40 group-hover:text-accent transition-colors">
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* Subtitle & Title */}
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent/80 font-bold block mb-1">
                                            {language === "bn" ? item.subtitleBn : item.subtitleEn}
                                        </span>

                                        <h3 className="font-heading font-black text-2xl text-white mb-3 group-hover:text-cyan-200 transition-colors">
                                            {language === "bn" ? item.titleBn : item.titleEn}
                                        </h3>

                                        <p className="text-gray-300 text-xs leading-relaxed mb-6 font-light">
                                            {language === "bn" ? item.descriptionBn : item.descriptionEn}
                                        </p>

                                        {/* Key Feature Modules */}
                                        <div className="space-y-2 mb-8 pt-4 border-t border-white/[0.08]">
                                            {item.modules.map((mod, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300">
                                                    <CheckCircle2 size={13} className="text-accent flex-shrink-0" />
                                                    <span>{mod}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Link */}
                                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                                        <Link
                                            href="/start-project"
                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-cyan-300 transition-colors"
                                        >
                                            <span>{language === "bn" ? "ডেমো রিকোয়েস্ট / বিস্তারিত" : "Request Live Demo"}</span>
                                            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>

                                        <span className="text-[10px] text-gray-500 font-mono">SLA 99.9%</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Custom Build Banner */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-accent/15 via-blue-900/20 to-purple-900/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
                    <div className="space-y-2 text-center sm:text-left">
                        <h4 className="font-heading font-black text-2xl text-white">
                            {language === "bn" ? "আপনার স্পেসিফিক রিকোয়ারমেন্ট অনুযায়ী কাস্টম সফটওয়্যার চান?" : "Need a Bespoke Architecture Tailored to Your Workflow?"}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm">
                            {language === "bn"
                                ? "আমাদের সল্যুশন আর্কিটেক্টদের সাথে ফ্রি ডিসকভারি কল বুক করুন—২৪ ঘণ্টার মধ্যে প্রজেক্ট ব্লুপ্রিন্ট ও খরচের হিসাব বুঝে নিন।"
                                : "Book a free discovery session with our software architects for full requirement mapping and strict SRS documentation."}
                        </p>
                    </div>

                    <Link
                        href="/start-project"
                        className="px-8 py-3.5 bg-accent text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,243,255,0.4)] whitespace-nowrap"
                    >
                        {language === "bn" ? "ফ্রি কনসালটেশন নিন" : "Start Discovery Call"}
                    </Link>
                </div>
            </div>
        </section>
    );
}
