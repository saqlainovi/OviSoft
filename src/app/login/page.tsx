"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, Facebook, Chrome } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
    const { login, googleLogin, facebookLogin, user } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Email login flow
        login(email, password);
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/videos/AI_Brain_Video_Generation.mp4')] bg-cover opacity-20 blur-sm pointer-events-none" />
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px]" />

            <div className="relative z-10 w-full max-w-md p-8">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="glass p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                    <div className="text-center mb-8 flex flex-col items-center">
                        <img src="/logo.png" alt="OviSoft" className="w-12 h-12 object-contain rounded-full mb-3 drop-shadow-[0_0_15px_rgba(0,122,255,0.5)]" />
                        <h1 className="font-heading text-4xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-gray-400">Sign in to manage your projects</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Password</label>
                                <Link href="/forgot-password" className="text-xs text-accent hover:underline">Forgot?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/25"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="my-8 flex items-center gap-4">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <span className="text-gray-500 text-sm">OR CONTINUE WITH</span>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={googleLogin}
                            className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-[#DB4437] hover:border-[#DB4437] hover:text-white rounded-xl transition-all duration-300 group"
                        >
                            <Chrome size={20} className="text-[#DB4437] group-hover:text-white transition-colors" /> Google
                        </button>
                        <button
                            onClick={facebookLogin}
                            className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white rounded-xl transition-all duration-300 group"
                        >
                            <Facebook size={20} className="text-[#1877F2] group-hover:text-white transition-colors" /> Facebook
                        </button>
                    </div>

                    <p className="mt-8 text-center text-gray-400 text-sm">
                        Don't have an account? <Link href="/signup" className="text-white font-bold hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
