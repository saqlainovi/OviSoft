"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User as UserIcon, Globe } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const { user, logout, refreshUser } = useAuth();
    const { language, setLanguage, toggleLanguage } = useLanguage();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        let verificationInterval: NodeJS.Timeout;
        if (user && !user.emailVerified) {
            verificationInterval = setInterval(async () => {
                await refreshUser?.();
            }, 3000);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (verificationInterval) clearInterval(verificationInterval);
        };
    }, [user, refreshUser]);

    const navItems = language === "bn" ? [
        { name: "হোম", href: "/" },
        { name: "সার্ভিস", href: "/services" },
        { name: "প্রজেক্ট", href: "/projects" },
        { name: "ব্লগ", href: "/blog" },
        { name: "টিম", href: "/team" },
    ] : [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Team", href: "/team" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 px-6 py-4 flex justify-between items-center ${
                scrolled ? "glass" : "bg-transparent border-b border-transparent backdrop-blur-none"
            }`}
        >
            {/* Logo */}
            <Link href="/" className="font-heading text-2xl font-black tracking-wider cursor-none">
                OviSoft<span className="text-accent text-4xl leading-none">.</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="font-medium text-xs uppercase tracking-widest relative group magnetic-btn"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        href="/start-project"
                        className="bg-accent text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-cyan-400/50"
                    >
                        {language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start Project"}
                    </Link>
                </li>
            </ul>

            {/* Right Side Actions: Language Toggle & Auth */}
            <div className="flex items-center gap-4">
                {/* Language Switcher Button */}
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
                    <button
                        onClick={() => setLanguage("en")}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            language === "en"
                                ? "bg-accent text-black shadow-md shadow-accent/30"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage("bn")}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            language === "bn"
                                ? "bg-accent text-black shadow-md shadow-accent/30"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        বাংলা
                    </button>
                </div>

                {/* Auth Button */}
                <div className="hidden lg:block">
                    {user ? (
                        <div className="relative group">
                            <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                {!user.emailVerified && (
                                    <span className="absolute top-0 right-0 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
                                )}
                            </button>

                            <div className="absolute top-full right-0 mt-4 w-72 glass p-4 rounded-xl border border-white/10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform origin-top-right shadow-2xl z-[10001]">
                                <div className="mb-4 pb-4 border-b border-white/10 flex items-center gap-3">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full border border-white/20" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50 text-accent font-bold">
                                            {user.name?.[0] || "U"}
                                        </div>
                                    )}
                                    <div className="overflow-hidden">
                                        <p className="font-bold text-white font-heading truncate">{user.name || "User"}</p>
                                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-1 mb-4">
                                    <Link href="/dashboard" className="w-full text-left flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition-colors text-sm hover:text-accent">
                                        Dashboard
                                    </Link>
                                    <Link href="/settings" className="w-full text-left flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition-colors text-sm hover:text-accent">
                                        Settings
                                    </Link>
                                </div>

                                <button
                                    onClick={logout}
                                    className="w-full text-left flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors font-bold text-sm"
                                >
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 text-white px-5 py-1.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                        >
                            <UserIcon size={14} className="group-hover:text-accent transition-colors" />
                            <span>Login</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
