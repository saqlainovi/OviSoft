"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User as UserIcon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const { user, logout, refreshUser } = useAuth();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Auto-check for email verification if user exists but is unverified
        let verificationInterval: NodeJS.Timeout;
        if (user && !user.emailVerified) {
            verificationInterval = setInterval(async () => {
                await refreshUser?.();
            }, 3000); // Check every 3 seconds
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (verificationInterval) clearInterval(verificationInterval);
        };
    }, [user, refreshUser]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled
                ? "glass"
                : "bg-transparent border-b border-transparent backdrop-blur-none"
                }`}
        >
            <div className="font-heading text-2xl font-black tracking-wider cursor-none">
                OviSoft<span className="text-accent text-4xl leading-none">.</span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-10 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {["Home", "Services", "Work", "Team"].map((item) => (
                    <li key={item}>
                        <Link
                            href={pathname === "/" ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                            className="font-medium text-sm uppercase tracking-widest relative group magnetic-btn"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        href="/start-project"
                        className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
                    >
                        Start Project
                    </Link>
                </li>
            </ul>

            {/* Auth & Mobile Toggle */}
            <div className="flex items-center gap-4">
                {/* Auth Button */}
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

                            {/* Dropdown Menu */}
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
                                        {!user.emailVerified && (
                                            <p className="text-[10px] text-yellow-500 font-bold mt-1 uppercase tracking-wider">⚠ Unverified</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-1 mb-4">
                                    <Link href="/dashboard" className="w-full text-left flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition-colors text-sm hover:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
                                        Dashboard
                                    </Link>
                                    <Link href="/settings" className="w-full text-left flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition-colors text-sm hover:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                                        Settings
                                    </Link>
                                </div>

                                <button
                                    onClick={logout}
                                    className="w-full text-left flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors font-bold text-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(var(--accent),0.3)]"
                        >
                            <UserIcon size={14} className="group-hover:text-accent transition-colors" />
                            <span>Login</span>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle - FORCE HIDDEN */}
                <button
                    className="!hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Unverified Email Global Warning */}
            {user && !user.emailVerified && (
                <div className="fixed top-20 right-6 z-[9999] animate-in slide-in-from-right duration-500 hidden md:block">
                    <div className="bg-yellow-500/10 border border-yellow-500/50 p-4 rounded-xl backdrop-blur-md flex items-center gap-3 shadow-lg max-w-sm">
                        <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-500 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-yellow-500 text-sm">Verify Your Email</h4>
                            <p className="text-xs text-gray-300">Check your inbox to unlock all features.</p>
                            <button
                                onClick={() => refreshUser?.()}
                                className="mt-2 text-[10px] bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500 px-2 py-1 rounded transition-colors uppercase font-bold tracking-wider"
                            >
                                I Verified It
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {["Home", "Services", "Work", "Team", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={pathname === "/" ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                        className="font-heading text-4xl font-bold uppercase tracking-wider hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </Link>
                ))}

                <div className="flex gap-6 mt-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://github.com/saqlainovi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>

            </div>
        </nav>
    );
}
