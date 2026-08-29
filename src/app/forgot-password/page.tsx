"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function ForgotPassword() {
    const { resetPassword } = useAuth();
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            setSent(true);
        } catch (error) {
            // Error handling is done in AuthContext (toast)
        }
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
            <div className="relative z-10 w-full max-w-md p-8">
                <Link href="/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Login
                </Link>

                <div className="glass p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <h1 className="font-heading text-4xl font-bold mb-2">Reset Password</h1>
                        <p className="text-gray-400">Enter your email to receive recovery instructions.</p>
                    </div>

                    {!sent ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
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

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/25"
                            >
                                Send Link
                            </button>
                        </form>
                    ) : (
                        <div className="text-center space-y-4 animate-in fade-in">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="text-green-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Check your Inbox</h3>
                            <p className="text-gray-400">We've sent a password reset link to <span className="text-white">{email}</span></p>
                            <button
                                onClick={() => setSent(false)}
                                className="text-accent hover:underline text-sm"
                            >
                                Try another email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
