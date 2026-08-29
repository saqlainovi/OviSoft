"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { CheckCircle2, Clock, AlertCircle, Users, LayoutGrid, Shield, User as UserIcon, FileText, Trash2, XCircle, CheckSquare } from "lucide-react";
import jsPDF from "jspdf";

interface Project {
    id: string;
    clientName: string;
    projectType: string;
    status: string;
    progress: number;
    phase: string;
    budget: string;
    createdAt: string;
    clientEmail: string;
    features: string;
}

interface UserProfile {
    uid: string;
    name: string;
    email: string;
    photoURL?: string;
    role: "admin" | "client";
    lastLogin?: any;
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<"missions" | "personnel">("missions");
    const [projects, setProjects] = useState<Project[]>([]);
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Fetch Projects
    useEffect(() => {
        const q = query(collection(db, "projects"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const projectsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Project[];
            projectsData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setProjects(projectsData);
        }, (error) => console.error("Error fetching projects:", error));
        return () => unsubscribe();
    }, []);

    // Sync selected project when projects update
    useEffect(() => {
        if (selectedProject) {
            const updatedProject = projects.find(p => p.id === selectedProject.id);
            if (updatedProject && updatedProject !== selectedProject) {
                setSelectedProject(updatedProject);
            }
        }
    }, [projects]);

    // Fetch Users
    useEffect(() => {
        if (activeTab === "personnel") {
            const q = query(collection(db, "users"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const usersData = snapshot.docs.map(doc => ({
                    uid: doc.id,
                    ...doc.data()
                })) as UserProfile[];
                setUsers(usersData);
            }, (error) => console.error("Error fetching users:", error));
            return () => unsubscribe();
        }
    }, [activeTab]);

    const updateProject = async (id: string, updates: any) => {
        // Optimistic update for smoother UI
        if (selectedProject) {
            setSelectedProject({ ...selectedProject, ...updates });
        }

        try {
            const projectRef = doc(db, "projects", id);
            await updateDoc(projectRef, updates);
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const deleteProject = async (id: string) => {
        if (confirm("Are you sure you want to delete this mission? This action cannot be undone.")) {
            try {
                await deleteDoc(doc(db, "projects", id));
                setSelectedProject(null);
            } catch (error) {
                console.error("Error deleting project:", error);
            }
        }
    };

    const downloadPDF = (project: Project) => {
        const doc = new jsPDF();

        // Header
        doc.setFillColor(0, 0, 0);
        doc.rect(0, 0, 210, 40, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text("OviSoft Mission Brief", 20, 25);

        // Content
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);

        let y = 60;
        const addLine = (label: string, value: string) => {
            doc.setFont("helvetica", "bold");
            doc.text(`${label}:`, 20, y);
            doc.setFont("helvetica", "normal");
            doc.text(value, 60, y);
            y += 10;
        };

        addLine("Client", project.clientName);
        addLine("Email", project.clientEmail);
        addLine("Project Type", project.projectType);
        addLine("Budget", `$${project.budget}`);
        addLine("Status", project.status);
        addLine("Phase", project.phase);
        addLine("Date", new Date(project.createdAt).toLocaleDateString());

        y += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Features & Requirements:", 20, y);
        y += 10;
        doc.setFont("helvetica", "normal");

        const splitText = doc.splitTextToSize(project.features, 170);
        doc.text(splitText, 20, y);

        doc.save(`${project.clientName.replace(/\s+/g, '_')}_Mission_Brief.pdf`);
    };

    return (
        <section className="min-h-screen bg-black text-white pt-24 px-6">
            <div className="container mx-auto">

                {/* Header & Tabs */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="font-heading text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-2">
                            COMMAND CENTER
                        </h1>
                        <p className="text-gray-400">Manage all client missions and personnel from one location.</p>
                    </div>

                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                        <button
                            onClick={() => setActiveTab("missions")}
                            className={`px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${activeTab === "missions" ? "bg-accent text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            <LayoutGrid size={18} /> Missions
                        </button>
                        <button
                            onClick={() => setActiveTab("personnel")}
                            className={`px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${activeTab === "personnel" ? "bg-accent text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            <Users size={18} /> Personnel
                        </button>
                    </div>
                </div>

                {/* Tab Content: Missions */}
                {activeTab === "missions" && (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Project List */}
                        <div className="lg:col-span-1 space-y-4 h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                            {projects.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/5 border border-white/10 rounded-xl border-dashed">
                                    <Clock className="w-12 h-12 text-gray-600 mb-4" />
                                    <h3 className="font-bold text-gray-400">No Active Missions</h3>
                                    <p className="text-xs text-gray-600 mt-2">New launch requests will appear here.</p>
                                </div>
                            ) : (
                                projects.map(project => (
                                    <div
                                        key={project.id}
                                        onClick={() => setSelectedProject(project)}
                                        className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${selectedProject?.id === project.id
                                            ? "bg-accent/10 border-accent shadow-[0_0_20px_rgba(0,255,150,0.2)]"
                                            : "bg-white/5 border-white/10 hover:bg-white/10"
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg text-white">{project.clientName}</h3>
                                            <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${project.status === 'Completed' || project.status === 'Approved' ? 'bg-green-500/20 text-green-500' :
                                                project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' :
                                                    project.status === 'Rejected' ? 'bg-red-500/20 text-red-500' :
                                                        'bg-yellow-500/20 text-yellow-500'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-1">{project.projectType}</p>
                                        <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                                            <div
                                                className="bg-accent h-full transition-all duration-500"
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Editor Panel */}
                        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl relative overflow-hidden">
                            {selectedProject ? (
                                <div className="relative z-10 animate-in fade-in duration-300">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h2 className="text-3xl font-heading font-bold mb-1">{selectedProject.projectType}</h2>
                                            <p className="text-gray-400">{selectedProject.clientEmail} • Budget: ${selectedProject.budget}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => downloadPDF(selectedProject)}
                                                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                                                title="Download Project Brief"
                                            >
                                                <FileText size={20} />
                                            </button>
                                            <button
                                                onClick={() => deleteProject(selectedProject.id)}
                                                className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                                                title="Delete Mission"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        <button
                                            onClick={() => updateProject(selectedProject.id, { status: "Approved" })}
                                            className={`p-3 rounded-lg border flex items-center justify-center gap-2 font-bold transition-all ${selectedProject.status === "Approved" ? "bg-green-500 text-black border-green-500" : "border-green-500/30 text-green-500 hover:bg-green-500/10"
                                                }`}
                                        >
                                            <CheckCircle2 size={18} /> Approve
                                        </button>
                                        <button
                                            onClick={() => updateProject(selectedProject.id, { status: "In Progress" })}
                                            className={`p-3 rounded-lg border flex items-center justify-center gap-2 font-bold transition-all ${selectedProject.status === "In Progress" ? "bg-blue-500 text-black border-blue-500" : "border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
                                                }`}
                                        >
                                            <Clock size={18} /> In Progress
                                        </button>
                                        <button
                                            onClick={() => updateProject(selectedProject.id, { status: "Completed" })}
                                            className={`p-3 rounded-lg border flex items-center justify-center gap-2 font-bold transition-all ${selectedProject.status === "Completed" ? "bg-accent text-black border-accent" : "border-accent/30 text-accent hover:bg-accent/10"
                                                }`}
                                        >
                                            <CheckSquare size={18} /> Complete
                                        </button>
                                        <button
                                            onClick={() => updateProject(selectedProject.id, { status: "Rejected" })}
                                            className={`p-3 rounded-lg border flex items-center justify-center gap-2 font-bold transition-all ${selectedProject.status === "Rejected" ? "bg-red-500 text-black border-red-500" : "border-red-500/30 text-red-500 hover:bg-red-500/10"
                                                }`}
                                        >
                                            <XCircle size={18} /> Reject
                                        </button>
                                    </div>

                                    {/* Controls */}
                                    <div className="space-y-8 bg-black/20 p-6 rounded-xl border border-white/5">
                                        <div>
                                            <label className="text-sm uppercase font-bold text-gray-500 mb-2 block">Current Phase</label>
                                            <select
                                                value={selectedProject.phase}
                                                onChange={(e) => updateProject(selectedProject.id, { phase: e.target.value })}
                                                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-accent outline-none"
                                            >
                                                <option>Analysis</option>
                                                <option>Design</option>
                                                <option>Development</option>
                                                <option>Testing</option>
                                                <option>Deployment</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-sm uppercase font-bold text-gray-500 mb-2 block flex justify-between">
                                                <span>Mission Progress</span>
                                                <span className="text-accent">{selectedProject.progress}%</span>
                                            </label>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={selectedProject.progress}
                                                onChange={(e) => updateProject(selectedProject.id, { progress: Number(e.target.value) })}
                                                className="w-full accent-accent h-3 bg-black rounded-lg appearance-none cursor-pointer border border-white/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h4 className="font-bold mb-2 text-gray-300">Mission Brief (Features)</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">{selectedProject.features}</p>
                                    </div>

                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                                    <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-6 animate-[spin_10s_linear_infinite]">
                                        <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm">
                                            <AlertCircle size={32} className="text-white/50" />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 font-heading tracking-widest">SYSTEM STANDBY</h3>
                                    <p className="max-w-md text-gray-400">Select a mission from the left panel to initialize control systems and view telemetry data.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Tab Content: Personnel */}
                {activeTab === "personnel" && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {users.map(user => (
                            <div key={user.uid} className="bg-white/5 border border-white/10 rounded-xl p-6 group hover:border-accent transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold text-accent">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                        ) : (
                                            <UserIcon />
                                        )}
                                    </div>
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${user.role === 'admin' ? 'bg-red-500/20 text-red-500 border-red-500/30' : 'bg-blue-500/20 text-blue-500 border-blue-500/30'
                                        }`}>
                                        {user.role}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{user.name}</h3>
                                <p className="text-sm text-gray-400 font-mono mb-4">{user.email}</p>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
                                    <span>ID: {user.uid.slice(0, 8)}...</span>
                                    <span className="flex items-center gap-1">
                                        <Shield size={12} /> {user.role === 'admin' ? 'Classified' : 'Authorized'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
