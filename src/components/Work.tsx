"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Star, FolderGit2, Lock } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
    {
        title: "Parkinson's Disease Analysis",
        description: "Deep learning pipeline for multiclass classification using neuroimaging data & XAI.",
        tags: ["Python", "Deep Learning", "XAI"],
        image: "", // Add image path here e.g. "/projects/p1.jpg"
        stats: "Research",
        color: "from-purple-900 to-indigo-900",
    },
    {
        title: "Facial Recognition System",
        description: "Design and implementation of a robust facial recognition security system.",
        tags: ["AI", "Computer Vision", "Security"],
        image: "",
        stats: "System",
        color: "from-blue-900 to-cyan-900",
    },
    {
        title: "Harvest Hub",
        description: "Agri-tech platform connecting farmers with consumers. Harvest calendars & e-commerce.",
        tags: ["PHP", "Web", "E-commerce"],
        image: "",
        stats: "Platform",
        color: "from-green-900 to-emerald-900",
    },
    {
        title: "Local Services Marketplace",
        description: "A digital marketplace for finding local services and professionals.",
        tags: ["Web", "Marketplace"],
        image: "",
        stats: "1 ⭐",
        color: "from-orange-900 to-red-900",
    },
    {
        title: "BD Travel Website",
        description: "Tourism portal for exploring beautiful destinations in Bangladesh.",
        tags: ["Web", "Travel"],
        image: "",
        stats: "1 ⭐",
        color: "from-teal-900 to-blue-900",
    },
    {
        title: "Networking Lab",
        description: "Cisco Packet Tracer labs: Routing, Switching, and Security protocols.",
        tags: ["Networking", "Cisco"],
        image: "",
        stats: "Lab",
        color: "from-gray-800 to-slate-900",
    },
];

export default function Work() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // 3D Tilt Effect
        const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = (card: HTMLElement) => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)"
            });
        };

        cardsRef.current.forEach(card => {
            if (!card) return;
            card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
            card.addEventListener("mouseleave", () => handleMouseLeave(card));
        });

        // Cleanup not strictly necessary for simple ref iteration in this context, 
        // but good practice would be removal. Keeping simple for this migration.

    }, []);

    return (
        <section id="work" className="py-32 bg-background relative px-6">
            <div className="container mx-auto">
                <h2 className="font-heading text-6xl md:text-7xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            ref={el => { if (el) cardsRef.current[i] = el }}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/5] magnetic-btn border border-white/5 bg-[#0a0a0a] shadow-2xl"
                        >
                            {/* Background Image or Gradient */}
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                            )}

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                                        <FolderGit2 className="text-accent" size={24} />
                                    </div>
                                    <div className="p-3 bg-white/5 text-gray-500 rounded-full cursor-not-allowed" title="Private Repository">
                                        <Lock size={24} />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-gray-300 backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-heading text-3xl font-bold mb-3 leading-tight group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
                                        <Github size={14} />
                                        <span>Private</span>
                                    </div>
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}
