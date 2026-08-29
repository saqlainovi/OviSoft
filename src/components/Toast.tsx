"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-24 right-6 z-[10001] animate-in slide-in-from-right fade-in duration-300">
            <div className={`glass border ${type === "success" ? "border-green-500/50" : "border-red-500/50"} p-4 rounded-xl flex items-center gap-4 shadow-2xl min-w-[300px]`}>
                <div className={`p-2 rounded-full ${type === "success" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}>
                    {type === "success" ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                </div>
                <div className="flex-1">
                    <h4 className={`font-bold ${type === "success" ? "text-green-500" : "text-red-500"}`}>
                        {type === "success" ? "Success" : "Error"}
                    </h4>
                    <p className="text-sm text-gray-300">{message}</p>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white">
                    <X size={18} />
                </button>
            </div>
        </div>
    );
}
