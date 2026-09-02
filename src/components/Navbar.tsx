"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User as UserIcon, Sparkles, ArrowUpRight, ShieldCheck, ChevronDown, LogOut, LayoutDashboard, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const { user, logout, refreshUser } = useAuth();
    const { language, setLanguage } = useLanguage();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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

    // Close mobile menu on page change
    useEffect(() => {
        setMobileMenuOpen(false);
        setUserDropdownOpen(false);
    }, [pathname]);

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
        <>
            <header className="fixed top-0 left-0 right-0 z-[10000] px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
                <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                    
                    {/* Modern Floating Island Bar */}
                    <nav
                        className={`w-full flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-500 border ${
                            scrolled
                                ? "bg-[#060a14]/85 border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(0,122,255,0.2)] backdrop-blur-2xl"
                                : "bg-[#060a14]/60 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                        }`}
                    >
                        {/* 1. Left: High-Impact Brand Identity & Pure Untouched HDR Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 sm:gap-3.5 group select-none relative"
                        >
                            {/* Pure Untouched Original Logo with HDR Glow */}
                            <img
                                src="/logo.png"
                                alt="OviSoft"
                                className="w-11 h-11 sm:w-14 sm:h-14 object-contain select-none filter contrast-125 saturate-125 drop-shadow-[0_0_22px_rgba(0,122,255,0.8)] group-hover:drop-shadow-[0_0_32px_rgba(0,243,255,1)] group-hover:scale-108 transition-all duration-300"
                            />

                            <div className="flex flex-col">
                                <span className="font-heading font-black text-xl sm:text-2xl tracking-wider text-white flex items-center leading-none group-hover:text-cyan-100 transition-colors">
                                    OviSoft<span className="text-accent text-3xl sm:text-4xl leading-none -mb-1">.</span>
                                </span>
                                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-mono font-bold text-accent/80 mt-0.5 hidden xs:block">
                                    Digital Agency
                                </span>
                            </div>
                        </Link>

                        {/* 2. Center: Dynamic Island Sliding Nav Links (Desktop) */}
                        <div
                            onMouseLeave={() => setHoveredPath(null)}
                            className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner"
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onMouseEnter={() => setHoveredPath(item.href)}
                                        className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-200 z-10 select-none ${
                                            isActive ? "text-black font-bold" : "text-gray-300 hover:text-white"
                                        }`}
                                    >
                                        {/* Hover Highlight */}
                                        {hoveredPath === item.href && !isActive && (
                                            <motion.div
                                                layoutId="navHover"
                                                className="absolute inset-0 rounded-full bg-white/10 -z-10"
                                                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                            />
                                        )}

                                        {/* Active Route Sliding Pill Indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navActive"
                                                className="absolute inset-0 rounded-full bg-accent text-black shadow-[0_0_20px_rgba(0,243,255,0.5)] -z-10"
                                                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                            />
                                        )}

                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* 3. Right: Modern Interactive Actions */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Sleek Language Switcher Capsule */}
                            <div className="relative flex items-center bg-white/[0.05] border border-white/10 p-0.5 sm:p-1 rounded-full backdrop-blur-md">
                                <button
                                    onClick={() => setLanguage("en")}
                                    className={`relative px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all z-10 ${
                                        language === "en" ? "text-black" : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {language === "en" && (
                                        <motion.div
                                            layoutId="langPill"
                                            className="absolute inset-0 rounded-full bg-accent shadow-[0_0_12px_rgba(0,243,255,0.4)] -z-10"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage("bn")}
                                    className={`relative px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all z-10 ${
                                        language === "bn" ? "text-black" : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {language === "bn" && (
                                        <motion.div
                                            layoutId="langPill"
                                            className="absolute inset-0 rounded-full bg-accent shadow-[0_0_12px_rgba(0,243,255,0.4)] -z-10"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    বাংলা
                                </button>
                            </div>

                            {/* User Auth Portal Dropdown (Desktop) */}
                            <div className="hidden sm:block relative">
                                {user ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all text-xs text-white"
                                        >
                                            {user.photoURL ? (
                                                <img src={user.photoURL} alt="User" className="w-5 h-5 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-5 h-5 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-[10px]">
                                                    {user.name?.[0] || "U"}
                                                </div>
                                            )}
                                            <span className="max-w-[80px] truncate font-medium">{user.name?.split(" ")[0] || "Account"}</span>
                                            <ChevronDown size={14} className={`text-gray-400 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {userDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute right-0 mt-3 w-64 p-4 rounded-2xl bg-[#080d1a]/95 border border-white/15 backdrop-blur-2xl shadow-2xl z-[10002]"
                                                >
                                                    <div className="pb-3 mb-3 border-b border-white/10 flex items-center gap-3">
                                                        {user.photoURL ? (
                                                            <img src={user.photoURL} alt="User" className="w-9 h-9 rounded-full object-cover border border-white/20" />
                                                        ) : (
                                                            <div className="w-9 h-9 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-sm border border-accent/40">
                                                                {user.name?.[0] || "U"}
                                                            </div>
                                                        )}
                                                        <div className="overflow-hidden">
                                                            <p className="font-bold text-white text-sm truncate font-heading">{user.name || "User"}</p>
                                                            <p className="text-[11px] text-gray-400 truncate">{user.email}</p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1 mb-3">
                                                        <Link
                                                            href="/dashboard"
                                                            onClick={() => setUserDropdownOpen(false)}
                                                            className="flex items-center gap-2.5 px-3 py-2 text-gray-300 hover:text-accent hover:bg-white/5 rounded-xl transition-all text-xs font-medium"
                                                        >
                                                            <LayoutDashboard size={15} />
                                                            <span>Dashboard</span>
                                                        </Link>
                                                        <Link
                                                            href="/settings"
                                                            onClick={() => setUserDropdownOpen(false)}
                                                            className="flex items-center gap-2.5 px-3 py-2 text-gray-300 hover:text-accent hover:bg-white/5 rounded-xl transition-all text-xs font-medium"
                                                        >
                                                            <Settings size={15} />
                                                            <span>Settings</span>
                                                        </Link>
                                                    </div>

                                                    <button
                                                        onClick={() => {
                                                            logout();
                                                            setUserDropdownOpen(false);
                                                        }}
                                                        className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-xs font-bold"
                                                    >
                                                        <LogOut size={15} />
                                                        <span>Sign Out</span>
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-gray-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                                    >
                                        <UserIcon size={13} className="text-accent" />
                                        <span>Login</span>
                                    </Link>
                                )}
                            </div>

                            {/* "Start Project" Futuristic CTA Button (Desktop) */}
                            <Link
                                href="/start-project"
                                className="hidden md:inline-flex items-center gap-1.5 bg-accent text-black px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,243,255,0.35)] hover:shadow-cyan-400/60 hover:scale-105 active:scale-95"
                            >
                                <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start Project"}</span>
                                <ArrowUpRight size={14} />
                            </Link>

                            {/* Mobile Hamburger Toggle Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white transition-colors flex items-center justify-center cursor-pointer"
                                aria-label="Toggle Navigation Menu"
                            >
                                {mobileMenuOpen ? <X size={20} className="text-accent" /> : <Menu size={20} />}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Futuristic Fullscreen Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] bg-[#030611]/90 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28 lg:hidden"
                    >
                        {/* Background Ambient Aura */}
                        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/15 rounded-full filter blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-600/15 rounded-full filter blur-[120px] pointer-events-none" />

                        {/* Navigation Links List */}
                        <div className="space-y-3 relative z-10">
                            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-accent pl-3">
                                {language === "bn" ? "মেনু ও পেজসমূহ" : "NAVIGATION"}
                            </span>

                            <div className="space-y-1">
                                {navItems.map((item, idx) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -25 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * idx, duration: 0.3 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`flex items-center justify-between p-3.5 rounded-2xl text-lg font-heading font-bold transition-all ${
                                                    isActive
                                                        ? "bg-accent text-black shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                                                        : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                                                }`}
                                            >
                                                <span>{item.name}</span>
                                                <ArrowUpRight size={18} className={isActive ? "text-black" : "text-gray-500"} />
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Drawer Bottom Actions */}
                        <div className="space-y-4 pt-6 border-t border-white/10 relative z-10">
                            {/* User Account / Auth Bar */}
                            {user ? (
                                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full object-cover border border-white/20" />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center">
                                                {user.name?.[0] || "U"}
                                            </div>
                                        )}
                                        <div>
                                            <p className="font-bold text-white text-sm">{user.name || "User"}</p>
                                            <p className="text-xs text-gray-400">{user.email}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            logout();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-red-400 hover:text-red-300 text-xs font-bold uppercase tracking-wider"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white font-bold text-sm uppercase tracking-wider"
                                >
                                    <UserIcon size={16} className="text-accent" />
                                    <span>{language === "bn" ? "লগইন করুন" : "Account Login"}</span>
                                </Link>
                            )}

                            {/* Start Project CTA Button */}
                            <Link
                                href="/start-project"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-accent text-black font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,243,255,0.4)]"
                            >
                                <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start Project Brief"}</span>
                                <ArrowUpRight size={18} />
                            </Link>

                            <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-bold">
                                <ShieldCheck size={14} />
                                <span>100% SLA Guarantee • Dhaka Cloud Node</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
