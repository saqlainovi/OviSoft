"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import ClientDashboard from "@/components/dashboard/ClientDashboard";
import { ADMIN_EMAILS } from "@/config/admins";

export default function DashboardPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                router.push("/login");
            } else {
                // Check if user is admin
                setIsAdmin(ADMIN_EMAILS.includes(user.email || ""));
            }
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) return (
        <div className="min-h-screen bg-black flex items-center justify-center text-accent animate-pulse font-heading text-xl">
            ACCESSING SECURE TERMINAL...
        </div>
    );

    return isAdmin ? <AdminDashboard /> : <ClientDashboard />;
}
