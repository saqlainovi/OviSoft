"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();
    const buildTextRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const textEl = buildTextRef.current;
        if (!textEl) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = textEl.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(textEl, {
                x: x * 30,
                y: y * 20,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(textEl, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        };

        textEl.addEventListener("mousemove", handleMouseMove);
        textEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            textEl.removeEventListener("mousemove", handleMouseMove);
            textEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <footer className="py-24 bg-[#050508] border-t border-white/10 relative overflow-hidden text-foreground">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Giant Kinetic Animated Call to Action */}
                <div className="text-center mb-24 py-12">
                    <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
                        {language === "bn" ? "আপনার আইডিয়াকে বাস্তবে রূপ দিন" : "HAVE A VISION IN MIND?"}
                    </span>
                    <Link
                        ref={buildTextRef}
                        href="/start-project"
                        className="inline-block font-heading text-[11vw] md:text-[8vw] font-black leading-none text-white hover:text-accent transition-colors duration-500 drop-shadow-[0_0_40px_rgba(0,243,255,0.2)] group"
                    >
                        <span className="inline-block group-hover:scale-105 transition-transform duration-300">
                            {language === "bn" ? "চলুন শুরু করি" : "Let's Build It"}
                        </span>
                        <ArrowUpRight className="inline-block ml-4 w-[6vw] h-[6vw] text-accent group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                    </Link>
                </div>

                {/* Company & Office Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
                    {/* Col 1: About OviSoft */}
                    <div className="space-y-4">
                        <h4 className="font-heading text-2xl font-black text-white">OviSoft<span className="text-accent">.tech</span></h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            {language === "bn"
                                ? "শীর্ষস্থানীয় ডিজিটাল এজেন্সি ও ক্লাউড সল্যুশনস কোম্পানি। আধুনিক Next.js 15 আর্কিটেকচার, ই-কমার্স ও এআই অটোমেশন।"
                                : "Premier software engineering & private cloud agency in Dhaka. Delivering high-concurrency web apps, ERP systems, and AI automation."}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                            <ShieldCheck size={16} />
                            <span>100% SLA Guarantee • 1-Year Free Hosting</span>
                        </div>
                    </div>

                    {/* Col 2: Official Office Address */}
                    <div className="space-y-3">
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                            {language === "bn" ? "অফিস ঠিকানা" : "Headquarters"}
                        </h5>
                        <div className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                            <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                            <span>
                                {language === "bn" ? (
                                    <>পশ্চিম শেওড়াপাড়া, মিরপুর, ঢাকা-১২১৬, বাংলাদেশ।</>
                                ) : (
                                    <>West Shewrapara, Mirpur, Dhaka-1216, Bangladesh.</>
                                )}
                            </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-gray-300">
                            <Mail size={16} className="text-accent shrink-0" />
                            <a href="mailto:hello@ovisoft.tech" className="hover:text-accent transition-colors">hello@ovisoft.tech</a>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-gray-300">
                            <Phone size={16} className="text-accent shrink-0" />
                            <span>+880 1700-000000 / Messenger Live</span>
                        </div>
                    </div>

                    {/* Col 3: Quick Navigation */}
                    <div className="space-y-3">
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                            {language === "bn" ? "প্রয়োজনীয় লিংক" : "Quick Links"}
                        </h5>
                        <ul className="space-y-2 text-xs font-semibold">
                            <li><Link href="/#pricing" className="text-gray-400 hover:text-accent transition-colors">Pricing Packages</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-accent transition-colors">Tech Blog & Insights</Link></li>
                            <li><Link href="/team" className="text-gray-400 hover:text-accent transition-colors">Leadership & Engineering Team</Link></li>
                            <li><Link href="/start-project" className="text-accent hover:text-cyan-300 transition-colors">Start Project Brief</Link></li>
                            <li><Link href="/legal/privacy" className="text-gray-400 hover:text-accent transition-colors">Privacy & Terms Policy</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Trust & Guarantees */}
                    <div className="space-y-3">
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                            {language === "bn" ? "আমাদের প্রতিশ্রুতি" : "Client Assurance"}
                        </h5>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li>✓ 50% Milestone-Based Billing</li>
                            <li>✓ 1st Year Free Dhaka Cloud Node</li>
                            <li>✓ 1-Year Free Technical Warranty</li>
                            <li>✓ 24/7 AI-Powered Support Desk</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-gray-500 gap-4">
                    <div>
                        &copy; 2026 OviSoft. All rights reserved. Built with precision in Dhaka, Bangladesh.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="https://facebook.com/1179663841894781" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook Page</a>
                        <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
                        <Link href="/start-project" className="hover:text-accent transition-colors">Client Portal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
