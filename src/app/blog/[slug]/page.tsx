import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ArrowRight, Sparkles } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return [
        { slug: "why-ecommerce-beats-fb-page" },
        { slug: "bkash-auto-payment-integration-guide" },
        { slug: "proxmox-cloud-vs-shared-hosting" },
        { slug: "nextjs-15-vs-wordpress-bangladesh" },
        { slug: "erp-automation-for-bangladeshi-retail" }
    ];
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-semibold text-sm mb-10 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>সকল আর্টিকেলে ফিরে যান</span>
                </Link>

                {/* Article Header */}
                <div className="space-y-6 mb-12 border-b border-white/10 pb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={14} />
                        <span>E-Commerce & Technology Guide</span>
                    </div>

                    <h1 className="font-heading text-3xl md:text-5xl font-black text-white leading-tight">
                        কেন সাধারণ ফেসবুক পেজের চেয়েও নিজস্ব ই‑কমার্স ওয়েবসাইট আপনাকে ৪০% পর্যন্ত সেলস বাড়াতে পারে?
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-accent" />
                            <span>OviSoft Solutions Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-accent" />
                            <span>৩০ আগস্ট ২০২৬</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-accent" />
                            <span>৫ মিনিট পাঠ</span>
                        </div>
                    </div>
                </div>

                {/* Article Body Content */}
                <article className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
                    <p className="text-xl text-gray-200 leading-relaxed font-medium">
                        বাংলাদেশে বর্তমান সময়ে হাজার হাজার উদ্যোক্তা ও বুটিক শপ ওনার শুধুমাত্র একটি ফেসবুক পেজ খুলে ব্যবসা শুরু করছেন। কিন্তু ব্যবসা যখন একটু বড় হয়, তখন শুধুমাত্র ফেসবুক মেসেঞ্জারের ওপর নির্ভর করা ব্যবসার সবচেয়ে বড় বাধা হয়ে দাঁড়ায়।
                    </p>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white pt-6 border-t border-white/5">
                        ১. কাস্টমার মেসেজে রিপ্লাই দিতে দেরি হওয়া মানেই অর্ডার বাতিল
                    </h2>
                    <p>
                        একজন ক্রেতা যখন রাতে কোনো পণ্য দেখে ইনবক্সে নক দেয়, অধিকাংশ ক্ষেত্রে পেজ ওনার ঘুমে থাকেন বা ব্যস্ত থাকেন। ৩-৪ ঘণ্টা পর যখন রিপ্লাই দেওয়া হয়, ততক্ষণে ক্রেতা অন্য একটি পেজ থেকে পণ্যটি অর্ডার করে ফেলে। কিন্তু একটি ই-কমার্স ওয়েবসাইটে কাস্টমার গভীর রাতেও ২ ক্লিকে বিকাশ/নগদ পেমেন্ট করে অর্ডার কনফার্ম করে ফেলতে পারে।
                    </p>

                    <div className="glass p-6 rounded-2xl border border-white/10 my-8">
                        <h3 className="font-bold text-white text-lg mb-4">ফেসবুক পেজ বনাম অটোমেটেড ওয়েবসাইট তুলনা:</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/10 text-accent font-bold">
                                        <th className="pb-3">বৈশিষ্ট্য</th>
                                        <th className="pb-3">ফেসবুক পেজ</th>
                                        <th className="pb-3">OviSoft ই-কমার্স সাইট</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-300">
                                    <tr>
                                        <td className="py-3 font-semibold">পেমেন্ট কালেকশন</td>
                                        <td className="py-3 text-red-400">ম্যানুয়াল স্ক্রিনশট ভেরিফাই</td>
                                        <td className="py-3 text-emerald-400 font-bold">বিকাশ/নগদ অটো পেমেন্ট (২ সেকেন্ড)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold">অর্ডার ম্যানেজমেন্ট</td>
                                        <td className="py-3 text-red-400">খাতায় বা এক্সেলে নোট</td>
                                        <td className="py-3 text-emerald-400 font-bold">অটোমেটেড ইনভয়েস ও স্টক ট্র্যাকিং</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold">গুগল SEO ট্র্যাফিক</td>
                                        <td className="py-3 text-red-400">০% গুগল সার্চ র‍্যাংকিং</td>
                                        <td className="py-3 text-emerald-400 font-bold">গুগলে ১ নম্বরে আসার সুযোগ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white pt-6 border-t border-white/5">
                        ২. বিকাশ ও নগদ অটোমেটেড পেমেন্ট গেটওয়ের শক্তি
                    </h2>
                    <p>
                        ওভিসফটের ই-কমার্স প্ল্যাটফর্মে যুক্ত থাকে সরাসরি বিকাশ ও নগদ ইনস্ট্যান্ট পেমেন্ট গেটওয়ে। কাস্টমার কার্ড বা মোবাইল ব্যাংকিং দিয়ে পেমেন্ট করার সাথে সাথেই সিস্টেমে টাকা রিসিভ হয়ে যায় এবং কাস্টমারের ফোনে অর্ডার কনফার্মেশন SMS চলে যায়।
                    </p>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white pt-6 border-t border-white/5">
                        ৩. ঢাকায় নিজস্ব Proxmox ক্লাউড নোডে ফ্রি হোস্টিং
                    </h2>
                    <p>
                        বিদেশি স্লো হোস্টিংয়ের পরিবর্তে ওভিসফটের প্রতিটি ওয়েবসাইটে পাচ্ছেন ঢাকায় নিজস্ব ডেডিকেটেড ক্লাউড নোড হোস্টিং, যা ১ম বছর সম্পূর্ণ ফ্রি! ফলে আপনার সাইট খুলবে চোখের পলকে (০.১ সেকেন্ডে)।
                    </p>
                </article>

                {/* CTA Card */}
                <div className="glass rounded-3xl p-8 md:p-12 border border-accent/40 bg-gradient-to-r from-[#121220] via-[#0d0d18] to-black mt-16 text-center space-y-6">
                    <h3 className="font-heading text-3xl font-black text-white">
                        আপনার ব্যবসার জন্য ই-কমার্স ওয়েবসাইট তৈরি করতে চান?
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                        ওভিসফটের সাথে আজই আলোচনা করে আপনার অনলাইন শপ তৈরি করুন। পাচ্ছেন ১ম বছর ফ্রি ক্লাউড হোস্টিং এবং ১ বছর সম্পূর্ণ ফ্রি টেকনিক্যাল সাপোর্ট গ্যারান্টি!
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/start-project"
                            className="inline-flex items-center gap-2 bg-accent text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                        >
                            <span>প্রজেক্ট শুরু করুন</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
