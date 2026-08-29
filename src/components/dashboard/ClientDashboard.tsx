"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { Rocket, Codepen, Activity, CheckCircle2 } from "lucide-react";

export default function ClientDashboard() {
    const { user } = useAuth();
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, "projects"),
            where("clientId", "==", user.uid)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, [user]);

    return (
        <section className="min-h-screen bg-black text-white pt-24 px-6 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <header className="mb-12 text-center md:text-left">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2">
                        MISSION CONTROL
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Welcome back, Captain <span className="text-accent font-bold">{user?.name}</span>. Status report follows.
                    </p>
                </header>

                <div className="grid gap-12">
                    {projects.length === 0 ? (
                        <div className="text-center py-24 bg-white/5 rounded-[3rem] border border-white/10">
                            <Rocket size={64} className="mx-auto text-gray-600 mb-6" />
                            <h2 className="text-2xl font-bold text-gray-400 mb-4">No Active Missions</h2>
                            <p className="mb-8 text-gray-500">Initialize a new project to track its progress here.</p>
                            <a href="/#contact" className="px-8 py-3 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform">
                                Launch New Project
                            </a>
                        </div>
                    ) : (
                        projects.map(project => (
                            <div key={project.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                                {/* Glow Effect */}
                                <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-colors duration-700"></div>

                                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                    {/* Left: Info */}
                                    <div>
                                        <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold tracking-widest uppercase mb-6 text-accent">
                                            {project.status}
                                        </div>
                                        <h2 className="text-4xl font-heading font-black mb-2">{project.projectType}</h2>
                                        <p className="text-gray-400 mb-8">{project.problem}</p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                                                <div className="text-gray-500 text-xs uppercase font-bold mb-1">Timeline</div>
                                                <div className="text-xl font-bold whitespace-nowrap">{project.timeline}</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                                                <div className="text-gray-500 text-xs uppercase font-bold mb-1">Phase</div>
                                                <div className="text-xl font-bold text-accent">{project.phase}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Progress Circle (Futuristic) */}
                                    <div className="flex flex-col items-center justify-center relative">
                                        {/* Circular Progress */}
                                        <div className="relative w-64 h-64 flex items-center justify-center">
                                            {/* Outer Ring */}
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
                                                <circle
                                                    cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="4" fill="transparent"
                                                    className="text-accent transition-all duration-1000 ease-out"
                                                    strokeDasharray={2 * Math.PI * 120}
                                                    strokeDashoffset={(2 * Math.PI * 120) * (1 - project.progress / 100)}
                                                    strokeLinecap="round"
                                                />
                                            </svg>

                                            {/* Inner Content */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-6xl font-black font-heading">{project.progress}%</span>
                                                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">Completion</span>
                                            </div>
                                        </div>

                                        {/* Status Steps */}
                                        <div className="w-full mt-8 flex justify-between text-[10px] uppercase font-bold text-gray-600 tracking-widest">
                                            <span className={project.progress >= 20 ? "text-white" : ""}>Analysis</span>
                                            <span className={project.progress >= 40 ? "text-white" : ""}>Design</span>
                                            <span className={project.progress >= 60 ? "text-white" : ""}>Dev</span>
                                            <span className={project.progress >= 80 ? "text-white" : ""}>Test</span>
                                            <span className={project.progress >= 100 ? "text-accent" : ""}>Launch</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
