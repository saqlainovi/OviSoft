"use client";

import Link from "next/link";
import { ArrowLeft, Check, Zap, ShieldCheck, Server, Sparkles, ArrowRight, Star, Flame, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
    const { language } = useLanguage();

    const faqs = [
        {
            qEn: "What is included in the 1-Year Free Dedicated Cloud Hosting?",
            qBn: "১ম বছরের ফ্রি ডেডিকেটেড ক্লাউড হোস্টিংয়ে কী কী অন্তর্ভুক্ত?",
            aEn: "Every package comes hosted on our high-speed private cloud server node in Dhaka with 0.1s latency, automated SSL certificates, unlimited bandwidth, and daily database backups.",
            aBn: "প্রতিটি প্যাকেজের সাথে ঢাকায় অবস্থিত আমাদের প্রাইভেট ক্লাউড সার্ভারে ফ্রি হোস্টিং দেওয়া হয়, যাতে রয়েছে ০.১ সেকেন্ড স্পিড, ফ্রি SSL ও প্রতিদিনের ডেটাবেজ ব্যাকআপ।"
        },
        {
            qEn: "How does the 50% Milestone Billing work?",
            qBn: "৫০% মাইলস্টোন পেমেন্ট পলিসি কীভাবে কাজ করে?",
            aEn: "You pay an initial 50% advance to initiate architecture design and development. The final 50% is billed only after your live preview demo is tested and approved.",
            aBn: "প্রজেক্টের কাজ শুরুর পূর্বে ৫০% অ্যাডভান্স করতে হয়। বাকি ৫০% পেমেন্ট কেবল লাইভ ডেমো দেখে শতভাগ সন্তুষ্ট হওয়ার পর ডেলিভারির সময় সম্পন্ন করবেন।"
        },
        {
            qEn: "Can I upgrade my package or add AI automation later?",
            qBn: "পরবর্তীতে কি ওয়েবসাইট বা প্যাকেজ আপগ্রেড করা সম্ভব?",
            aEn: "Yes! Our codebase is 100% modular. You can easily upgrade from a Starter to E-Commerce Pro or add our 24/7 AI Automation Suite at any time.",
            aBn: "হ্যাঁ, সম্পূর্ণ মডিউলার আর্কিটেকচার হওয়ায় যেকোনো সময় স্টার্টার থেকে ই-কমার্স বা এআই অটোমেশন প্যাকেজে আপগ্রেড করা যায়।"
        },
        {
            qEn: "What does the 1-Year Full Technical Warranty cover?",
            qBn: "১ বছরের ফ্রি টেকনিক্যাল ওয়ারেন্টির সুবিধা কী?",
            aEn: "We provide 1 year of continuous bug fixes, security patch updates, server health monitoring, and priority SLA assistance with zero maintenance fees.",
            aBn: "১ বছরের মধ্যে যেকোনো টেকনিক্যাল বাগ ফিক্সিং, সিকিউরিটি আপডেট এবং সার্ভার হেলথ মনিটরিং ওভিসফট টিম সম্পূর্ণ ফ্রিতে প্রদান করে।"
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-12 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}</span>
                </Link>

                {/* Pricing Component Embedded */}
                <Pricing />

                {/* FAQ Section */}
                <div className="mt-20 pt-16 border-t border-white/10 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                            <HelpCircle size={14} />
                            <span>{language === "bn" ? "সাধারণ প্রশ্নোত্তর" : "Frequently Asked Questions"}</span>
                        </div>
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">
                            {language === "bn" ? "প্রাইসিং ও ডেলিভারি সংক্রান্ত তথ্য" : "Pricing & Delivery Transparency"}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="glass p-8 rounded-3xl border border-white/10 bg-[#0f0f15]">
                                <h4 className="font-heading text-xl font-bold text-white mb-3">
                                    {language === "bn" ? faq.qBn : faq.qEn}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {language === "bn" ? faq.aBn : faq.aEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
