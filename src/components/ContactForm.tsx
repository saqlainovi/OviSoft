"use client";

import { useState } from "react";
import { Send, CheckCircle2, Download, Lock } from "lucide-react";
import jsPDF from "jspdf";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm() {
    const { user } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Web Development",
        customProjectType: "",
        sdlc: "Agile",
        budget: "5000",
        timeline: "1 Month",
        problem: "",
        features: "",
        references: "",
        techStack: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const generatePDF = () => {
        const doc = new jsPDF();
        const primaryColor = [0, 200, 150]; // Green Accent
        const darkColor = [20, 20, 20]; // Almost Black

        // -- DESIGN ELEMENTS --

        // 1. Header Bar
        doc.setFillColor(20, 20, 20); // Dark Background
        doc.rect(0, 0, 210, 40, "F");

        // 2. Logo / Title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont("helvetica", "bold");
        doc.text("OviSoft", 20, 20);

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(200, 200, 200);
        doc.text("Future of Digital Innovation", 20, 26);

        doc.setFontSize(14);
        doc.setTextColor(0, 250, 150); // Accent Text
        doc.text("PROJECT REQUIREMENT BRIEF", 120, 22);

        // 3. Document Info (Right side below header)
        doc.setTextColor(100, 100, 100);
        doc.setFontSize(9);
        doc.text(`DATE: ${new Date().toLocaleDateString()}`, 150, 50);
        doc.text(`ID: ${Math.floor(Math.random() * 10000)}`, 150, 55);

        // -- CONTENT SECTIONS --

        let y = 60; // Starting Y position

        const addSectionTitle = (title: string) => {
            doc.setFillColor(240, 240, 240);
            doc.rect(20, y - 6, 170, 8, "F"); // Light gray background strip
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            doc.setFont("helvetica", "bold");
            doc.text(title.toUpperCase(), 22, y);
            y += 15;
            doc.setTextColor(60, 60, 60);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
        };

        const addField = (label: string, value: string, isLong = false) => {
            doc.setFont("helvetica", "bold");
            doc.text(label, 20, y);

            doc.setFont("helvetica", "normal");

            if (isLong) {
                const splitText = doc.splitTextToSize(value || "N/A", 120);
                doc.text(splitText, 70, y);
                y += (splitText.length * 6) + 4;
            } else {
                doc.text(value || "N/A", 70, y);
                y += 10;
            }
        };

        // Section: Client Details
        addSectionTitle("Client Identity");
        addField("Name:", formData.name);
        addField("Email:", formData.email);
        y += 5;

        // Section: Project Specs
        addSectionTitle("Project Specifications");

        const type = formData.projectType === "Others" ? formData.customProjectType : formData.projectType;
        addField("Type:", type);
        addField("SDLC Model:", formData.sdlc);
        addField("Target Budget:", `$${formData.budget}+`);
        addField("Timeline:", formData.timeline);

        if (formData.techStack) {
            addField("Preferred Tech:", formData.techStack, true);
        }
        y += 5;

        // Section: Strategic Requirements
        addSectionTitle("Strategic Core");

        addField("Core Problem:", formData.problem, true);
        addField("Key Features:", formData.features, true);

        if (formData.references) {
            addField("References:", formData.references, true);
        }

        // -- FOOTER --
        const pageHeight = doc.internal.pageSize.height;
        doc.setDrawColor(200, 200, 200);
        doc.line(20, pageHeight - 30, 190, pageHeight - 30); // Footer line

        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);

        doc.text("OviSoft Headquarters", 20, pageHeight - 20);
        doc.text("Shewrapara, Mirpur, Dhaka, Bangladesh. 1216", 20, pageHeight - 15);
        doc.text("www.ovisoft.tech", 20, pageHeight - 10);

        doc.setFont("helvetica", "bold");
        doc.text("CONFIDENTIAL", 150, pageHeight - 15);

        // Save
        doc.save("OviSoft_Project_Brief.pdf");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // 2. Save to Firestore (Real Database)
            if (user) {
                await addDoc(collection(db, "projects"), {
                    clientId: user.uid || "anonymous",
                    clientName: formData.name,
                    clientEmail: formData.email,
                    projectType: formData.projectType === "Others" ? formData.customProjectType : formData.projectType,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    problem: formData.problem,
                    features: formData.features,
                    techStack: formData.techStack,
                    status: "Pending", // Pending, In Progress, Completed
                    phase: "Analysis", // Analysis, Design, Dev, Testing, Deployment
                    progress: 0,
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString()
                });

                // Only show success if database write was successful
                setSubmitted(true);
            } else {
                alert("You must be logged in to submit a project.");
            }
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to submit project. Please check your internet connection and try again.");
        }

        // 3. Delay PDF & Email so user sees the rocket animation first
        setTimeout(() => {
            generatePDF();

            // Open Mailto
            const subject = encodeURIComponent(`Project Request: ${formData.projectType} - ${formData.name}`);
            const body = encodeURIComponent(`Hi OviSoft Team,\n\nI have attached the generated PDF requirement document for my project.\n\nBest regards,\n${formData.name}`);
            window.location.href = `mailto:contact@ovisoft.tech?subject=${subject}&body=${body}`;
        }, 3000); // 3-second delay for dramatic effect
    };

    if (submitted) {
        return (
            <section id="contact" className="py-32 px-6 bg-black relative flex items-center justify-center min-h-[80vh] overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"></div>

                <div className="text-center p-12 glass rounded-[3rem] max-w-3xl w-full border border-green-500/50 relative z-10 shadow-[0_0_100px_rgba(0,255,150,0.3)] animate-in zoom-in duration-500">

                    {/* Rocket / Success Icon */}
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-green-500 blur-xl opacity-50 animate-pulse rounded-full"></div>
                        <CheckCircle2 size={100} className="text-green-400 relative z-10 mx-auto drop-shadow-[0_0_15px_rgba(0,255,150,1)]" />
                    </div>

                    <h2 className="font-heading text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-primary">
                        MISSION LAUNCHED! 🚀
                    </h2>

                    <p className="text-white text-xl mb-10 leading-relaxed font-light">
                        Capitain <span className="text-accent font-bold uppercase">{formData.name}</span>, your project brief has been initialized. <br />
                        <span className="text-gray-400 text-sm block mt-4">(The secret PDF dossier has been downloaded to your secure terminal)</span>
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button
                            onClick={() => window.location.href = `mailto:contact@ovisoft.tech?subject=Project Request: ${formData.projectType}&body=Hi OviSoft Team, attached is my brief.`}
                            className="px-10 py-4 bg-green-500 hover:bg-green-600 text-black rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,150,0.5)] flex items-center justify-center gap-3"
                        >
                            <Send size={24} /> Open Secure Line (Email)
                        </button>

                        <button
                            onClick={() => setSubmitted(false)}
                            className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
                        >
                            Initialize New Mission
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-32 px-6 bg-black relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6">
                        Start Your Project
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tell us about your vision. We'll help you choose the right SDLC model and architecture.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[3rem] border border-white/10 relative">
                    {/* Glow Effect */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* Auth Gate for Form */}
                    {!user && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-[3rem]">
                            <div className="text-center p-8 max-w-md">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Lock size={40} className="text-accent" />
                                </div>
                                <h3 className="text-3xl font-heading font-bold mb-4">Login Required</h3>
                                <p className="text-gray-400 mb-8">
                                    To submit projects or generate SRS documents, please sign in to your OviSoft account.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <Link
                                        href="/login"
                                        className="py-3 px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-bold uppercase tracking-widest transition-all"
                                    >
                                        Sign In
                                    </Link>
                                    <p className="text-sm text-gray-500">
                                        New here? <Link href="/signup" className="text-white hover:underline">Create Account</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={`relative z-10 space-y-12 ${!user ? 'opacity-20 pointer-events-none' : ''}`}>

                        {/* 1. Client Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* 2. Project Scope */}
                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl font-bold border-b border-white/10 pb-4">Project Parameters</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Project Type</label>
                                    <select
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                                        value={formData.projectType}
                                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                                    >
                                        <option className="bg-neutral-900">Web Development</option>
                                        <option className="bg-neutral-900">Mobile App (iOS/Android)</option>
                                        <option className="bg-neutral-900">AI & Machine Learning</option>
                                        <option className="bg-neutral-900">Blockchain & Web3</option>
                                        <option className="bg-neutral-900">DevOps & Cloud</option>
                                        <option className="bg-neutral-900">Cyber Security</option>
                                        <option className="bg-neutral-900">UI/UX Design System</option>
                                        <option className="bg-neutral-900">Others</option>
                                    </select>

                                    {formData.projectType === "Others" && (
                                        <input
                                            type="text"
                                            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none animate-in fade-in slide-in-from-top-2"
                                            placeholder="Please specify project type..."
                                            value={formData.customProjectType}
                                            onChange={e => setFormData({ ...formData, customProjectType: e.target.value })}
                                            required
                                        />
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Preferred SDLC Model</label>
                                    <select
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                                        value={formData.sdlc}
                                        onChange={e => setFormData({ ...formData, sdlc: e.target.value })}
                                    >
                                        <option className="bg-neutral-900" value="Agile">Agile (Flexible, Iterative)</option>
                                        <option className="bg-neutral-900" value="Waterfall">Waterfall (Linear, Structured)</option>
                                        <option className="bg-neutral-900" value="V-Model">V-Model (Verification Focus)</option>
                                        <option className="bg-neutral-900" value="Spiral">Spiral (Risk-Driven)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm uppercase tracking-widest text-gray-500 font-bold flex justify-between">
                                        <span>Estimated Budget</span>
                                        <span className="text-accent">${formData.budget}+</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1000" max="50000" step="1000"
                                        className="w-full accent-accent h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                        value={formData.budget}
                                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Estimated Timeline</label>
                                    <select
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                                        value={formData.timeline}
                                        onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                                    >
                                        <option className="bg-neutral-900">1 Month</option>
                                        <option className="bg-neutral-900">1-3 Months</option>
                                        <option className="bg-neutral-900">3-6 Months</option>
                                        <option className="bg-neutral-900">6+ Months</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 3. Advanced SRS Builder */}
                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl font-bold border-b border-white/10 pb-4">Advanced SRS Builder</h3>

                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Core Problem Statement</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 h-24 focus:border-accent focus:bg-white/10 transition-all outline-none resize-none"
                                    placeholder="What specific problem are you solving? (e.g., 'Manual inventory validation is too slow')"
                                    value={formData.problem}
                                    onChange={e => setFormData({ ...formData, problem: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Key Features & Requirements</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 h-32 focus:border-accent focus:bg-white/10 transition-all outline-none resize-none"
                                    placeholder="List the absolute must-have features..."
                                    value={formData.features}
                                    onChange={e => setFormData({ ...formData, features: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Reference Websites (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                        placeholder="e.g., awwwards.com, apple.com"
                                        value={formData.references}
                                        onChange={e => setFormData({ ...formData, references: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-gray-500 font-bold">Tech Stack Preference</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent focus:bg-white/10 transition-all outline-none"
                                        placeholder="e.g., Next.js, Python, Flutter"
                                        value={formData.techStack}
                                        onChange={e => setFormData({ ...formData, techStack: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 text-center">
                            <button
                                type="submit"
                                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest overflow-hidden magnetic-btn"
                            >
                                <span className="relative z-10 flex items-center gap-2">Launch Project <Send size={20} /></span>
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
