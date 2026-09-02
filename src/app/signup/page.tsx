"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User, SquareAsterisk } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const { signup } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    // Password Strength Logic
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [shake, setShake] = useState(false);

    const calculateStrength = (pass: string) => {
        let strength = 0;
        if (pass.length > 5) strength += 1;
        if (pass.length > 7) strength += 1;
        if (/[A-Z]/.test(pass)) strength += 1;
        if (/[0-9]/.test(pass)) strength += 1;
        if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
        setPasswordStrength(strength);
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const success = await signup(formData.email, formData.password, formData.name);
            if (success) {
                router.push("/");
            } else {
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
        } catch (error) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/videos/Abstract_Digital_Tunnel_Video_Generation.mp4')] bg-cover opacity-20 blur-sm pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px]" />

            <div className="relative z-10 w-full max-w-md p-8">
                <Link href="/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Login
                </Link>

                <div className={`glass p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl transition-transform ${shake ? 'animate-shake' : ''}`}>
                    <div className="text-center mb-8 flex flex-col items-center">
                        <img src="/logo.png" alt="OviSoft" className="w-12 h-12 object-contain rounded-full mb-3 drop-shadow-[0_0_15px_rgba(0,122,255,0.5)]" />
                        <h1 className="font-heading text-4xl font-bold mb-2">Join OviSoft</h1>
                        <p className="text-gray-400">Create your account to start building.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={e => {
                                        setFormData({ ...formData, password: e.target.value });
                                        calculateStrength(e.target.value);
                                    }}
                                />
                            </div>
                            {/* Password Strength Meter */}
                            <div className="flex gap-1 h-1 mt-2 px-1">
                                {[1, 2, 3, 4, 5].map((level) => (
                                    <div
                                        key={level}
                                        className={`flex-1 rounded-full transition-all duration-300 ${passwordStrength >= level ?
                                            (passwordStrength <= 2 ? 'bg-red-500' : passwordStrength <= 3 ? 'bg-yellow-500' : 'bg-green-500')
                                            : 'bg-white/10'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-[10px] text-right text-gray-500 px-1">
                                {passwordStrength <= 2 ? 'Weak' : passwordStrength <= 3 ? 'Medium' : 'Strong'}
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Creating Account..." : "Complete Registration"}
                        </button>
                    </form>
                </div>
                <style jsx global>{`
                    @keyframes shake {
                        0%, 100% { transform: translateX(0); }
                        25% { transform: translateX(-5px); }
                        75% { transform: translateX(5px); }
                    }
                    .animate-shake {
                        animation: shake 0.5s ease-in-out;
                    }
                `}</style>
            </div>
        </main>
    );
}
