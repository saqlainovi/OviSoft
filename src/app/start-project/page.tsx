"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ArrowLeft, Lock } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function StartProject() {
    const { user } = useAuth();
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        clientName: "",
        clientEmail: "",
        projectType: "Web Development",
        budget: "1000-3000",
        features: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            alert("You must be logged in to submit a project.");
            return;
        }

        setStatus("submitting");

        try {
            // Match the 'Project' interface expected by AdminDashboard
            await addDoc(collection(db, "projects"), {
                clientId: user.uid,
                clientName: formData.clientName,
                clientEmail: formData.clientEmail,
                projectType: formData.projectType,
                budget: formData.budget,
                features: formData.features,
                status: "Pending Review",
                progress: 0,
                phase: "Initiation",
                createdAt: new Date().toISOString(),
            });
            setStatus("success");
        } catch (error) {
            console.error("Error submitting project:", error);
            alert("Something went wrong. Please try again.");
            setStatus("idle");
        }
    };

    if (status === "success") {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center max-w-md backdrop-blur-xl"
                >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Request Received! 🚀</h2>
                    <p className="text-gray-400 mb-6">
                        Thank you, {formData.clientName}. Our team works at light speed. We will analyze your request and email you within 24 hours.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <main className="container mx-auto px-4 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto"
                >
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Start Your Project
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Tell us about your vision. We'll handle the rest.
                    </p>

                    <div className="relative">
                        {!user && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl">
                                <div className="text-center p-8 max-w-md">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Lock size={40} className="text-accent" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold mb-4">Login Required</h3>
                                    <p className="text-gray-400 mb-8">
                                        To submit projects, please sign in to your OviSoft account.
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <Link
                                            href="/login"
                                            className="py-3 px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-bold uppercase tracking-widest transition-all"
                                        >
                                            Sign In
                                        </Link>
                                        <p className="text-sm text-gray-500">
                                            New here?{" "}
                                            <Link href="/signup" className="text-white hover:underline">Create Account</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className={`space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm ${!user ? "opacity-20 pointer-events-none" : ""}`}
                        >

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.clientName}
                                    onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.clientEmail}
                                    onChange={e => setFormData({ ...formData, clientEmail: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                                <select
                                    value={formData.projectType}
                                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                >
                                    <option>Web Development</option>
                                    <option>Mobile App (iOS/Android)</option>
                                    <option>AI Solution / Chatbot</option>
                                    <option>UI/UX Design</option>
                                    <option>Custom Software</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget (USD)</label>
                                <select
                                    value={formData.budget}
                                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                >
                                    <option value="500-1000">$500 - $1,000</option>
                                    <option value="1000-3000">$1,000 - $3,000</option>
                                    <option value="3000-5000">$3,000 - $5,000</option>
                                    <option value="5000+">$5,000+</option>
                                    <option value="Consultation">Not sure (Need Consultation)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Project Details & Features</label>
                            <textarea
                                required
                                rows={4}
                                value={formData.features}
                                onChange={e => setFormData({ ...formData, features: e.target.value })}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Describe your idea... e.g. 'A real-time delivery app with map tracking' or 'A portfolio site for my photography business'."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? (
                                <span className="animate-pulse">Sending Request...</span>
                            ) : (
                                <>
                                    Submit Request <Send className="ml-2 w-5 h-5" />
                                </>
                            )}
                        </button>

                        </form>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
