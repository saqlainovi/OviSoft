"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { ADMIN_EMAILS } from "@/config/admins";
import { User, Shield, Bell, Lock, Save, LogOut } from "lucide-react";

export default function SettingsPage() {
    const { user, logout, updateName } = useAuth();
    const isAdmin = ADMIN_EMAILS.includes(user?.email || "");

    const [activeTab, setActiveTab] = useState("profile");

    // Mock States for UI
    const [name, setName] = useState(user?.name || "");
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        updates: true
    });

    if (!user) return null;

    return (
        <section className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-heading text-5xl md:text-6xl font-black mb-4">
                        SYSTEM <span className="text-accent">SETTINGS</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Configure your personal terminal and system preferences.</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1 space-y-2">
                        {[
                            { id: "profile", label: "Profile", icon: User },
                            { id: "account", label: "Security", icon: Lock },
                            { id: "notifications", label: "Notifications", icon: Bell },
                            ...(isAdmin ? [{ id: "admin", label: "Admin Config", icon: Shield }] : [])
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase tracking-wider text-sm ${activeTab === item.id
                                    ? "bg-accent text-black scale-105 shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </button>
                        ))}

                        <div className="pt-8 mt-8 border-t border-white/10">
                            <button
                                onClick={logout}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all font-bold uppercase tracking-wider text-sm"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm shadow-2xl relative overflow-hidden">

                            {/* Glow Effect */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Profile Settings */}
                            {activeTab === "profile" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-6">
                                        <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-4xl font-bold text-accent">
                                            {user.photoURL ? (
                                                <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover rounded-full" />
                                            ) : (
                                                user.name?.[0] || "U"
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{user.name}</h3>
                                            <p className="text-gray-400">{user.email}</p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20">
                                                {isAdmin ? "Commander (Admin)" : "Cadet (Client)"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid gap-6 max-w-md">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Display Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-accent outline-none focus:shadow-[0_0_15px_rgba(0,255,150,0.3)] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                value={user.email || ""}
                                                disabled
                                                className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed"
                                            />
                                            <p className="text-[10px] text-gray-600 mt-2">* Emails cannot be changed manually. Contact High Command.</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => updateName(name)}
                                        className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                                    >
                                        <Save size={18} />
                                        Save Changes
                                    </button>
                                </div>
                            )}

                            {/* Security Settings */}
                            {activeTab === "account" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-2xl font-bold border-b border-white/10 pb-4">Security Protocols</h3>

                                    <div className="grid gap-4 max-w-md">
                                        <button className="w-full text-left px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex justify-between items-center group transition-all">
                                            <div>
                                                <h4 className="font-bold">Reset Password</h4>
                                                <p className="text-xs text-gray-400">Receive a secure link via email</p>
                                            </div>
                                            <Shield className="text-gray-500 group-hover:text-accent transition-colors" />
                                        </button>

                                        <button className="w-full text-left px-6 py-4 rounded-xl bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 flex justify-between items-center group transition-all">
                                            <div>
                                                <h4 className="font-bold text-red-400">Delete Account</h4>
                                                <p className="text-xs text-red-500/50">Permanently erase all data</p>
                                            </div>
                                            <Shield className="text-red-500/50 group-hover:text-red-500 transition-colors" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Notifications */}
                            {activeTab === "notifications" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-2xl font-bold border-b border-white/10 pb-4">Transmission Feeds</h3>

                                    <div className="space-y-4 max-w-md">
                                        {[
                                            { key: "email", label: "Email Notifications", desc: "Receive mission updates via secure line" },
                                            { key: "push", label: "Browser Alerts", desc: "Real-time popup notifications" },
                                            { key: "updates", label: "Marketing Updates", desc: "News about new tech and features" }
                                        ].map((setting) => (
                                            <div key={setting.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                                <div>
                                                    <h4 className="font-bold">{setting.label}</h4>
                                                    <p className="text-xs text-gray-400">{setting.desc}</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={notifications[setting.key as keyof typeof notifications]}
                                                        onChange={() => setNotifications(prev => ({ ...prev, [setting.key]: !prev[setting.key as keyof typeof notifications] }))}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Admin Config */}
                            {activeTab === "admin" && isAdmin && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-2xl font-bold border-b border-white/10 pb-4 text-red-500">Classified Admin Config</h3>

                                    <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                                        <h4 className="font-bold text-red-400 mb-2">Authorized Personnel (Admins)</h4>
                                        <p className="text-sm text-gray-400 mb-4">These users have full command access.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {ADMIN_EMAILS.map(email => (
                                                <span key={email} className="px-3 py-1 bg-black/50 border border-red-500/30 rounded text-xs font-mono text-gray-300">
                                                    {email}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                        <h4 className="font-bold text-blue-400 mb-2">System Status</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-xs uppercase text-gray-500 font-bold">Database</div>
                                                <div className="text-green-500 font-bold">Online (Firestore)</div>
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase text-gray-500 font-bold">Version</div>
                                                <div className="text-white font-bold">v2.1.0-Alpha</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
