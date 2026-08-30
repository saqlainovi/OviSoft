'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    engine?: string;
};

export default function ChatWidget() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: language === 'bn'
                ? "স্বাগতম! আমি ওভিসফট ডিজিটাল এআই কনসালট্যান্ট। আপনার ওয়েবসাইট, ই-কমার্স বা সফটওয়্যার প্রজেক্ট নিয়ে কীভাবে সাহায্য করতে পারি?"
                : "Hello! Welcome to OviSoft.tech. How can I help you choose the best website, software, or e-commerce solution for your business today?",
            sender: 'bot'
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        const userMessage: Message = { id: Date.now(), text: userText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Build history payload for local OSS 20B engine
            const historyPayload = messages.slice(-4).map(m => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text
            }));

            const res = await fetch("http://192.168.0.120:9090/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userText,
                    history: historyPayload
                })
            });

            if (!res.ok) throw new Error("API response error");

            const data = await res.json();
            const botReply = data.reply || (language === 'bn' ? "আমাদের সকল প্যাকেজ দেখতে বা আলোচনা করতে 'Start Project'-এ ক্লিক করুন।" : "To view our packages or discuss scope, please click 'Start Project' or message us.");

            setMessages(prev => [
                ...prev,
                { id: Date.now() + 1, text: botReply, sender: 'bot', engine: data.engine }
            ]);
        } catch (err) {
            console.error("Local AI chat error:", err);
            // Graceful fallback response
            const fallback = language === 'bn'
                ? "ওভিসফটে যোগাযোগ করার জন্য ধন্যবাদ। আমাদের স্টার্টার ওয়েবসাইট ৳৫,০০০ থেকে এবং ই-কমার্স ৳৩৫,০০০ থেকে শুরু। বিস্তারিত জানতে 'Start Project'-এ ক্লিক করুন।"
                : "Thank you for reaching out to OviSoft.tech. Starter websites start from ৳5,000 and E-Commerce from ৳35,000 with 1st year free cloud hosting. Click 'Start Project' to connect with us!";
            setMessages(prev => [
                ...prev,
                { id: Date.now() + 1, text: fallback, sender: 'bot', engine: 'OviSoft Local Assistant' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[99999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="w-[90vw] sm:w-[380px] h-[520px] bg-[#0c0c12] border border-accent/40 rounded-3xl shadow-[0_0_50px_rgba(0,243,255,0.15)] flex flex-col overflow-hidden mb-4 backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[#12121c] border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                                    <Sparkles size={18} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-heading font-bold text-white text-sm">OviSoft AI</h4>
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    </div>
                                    <p className="text-[10px] text-accent font-semibold tracking-wider">
                                        ● 24/7 Digital Assistant • Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                                            m.sender === 'user'
                                                ? 'bg-accent text-black font-medium rounded-tr-none shadow-md shadow-accent/20'
                                                : 'bg-[#181822] text-gray-200 border border-white/10 rounded-tl-none'
                                        }`}
                                    >
                                        <p className="whitespace-pre-wrap">{m.text}</p>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex items-center gap-2 text-xs text-gray-400 bg-[#181822] p-3 rounded-2xl w-max border border-white/10">
                                    <Zap size={14} className="animate-spin text-accent" />
                                    <span>{language === 'bn' ? 'মডেল চিন্তা করছে...' : 'OSS 20B generating reply...'}</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Footer */}
                        <div className="p-3 bg-[#101018] border-t border-white/10 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={language === 'bn' ? "আপনার প্রশ্ন লিখুন..." : "Ask about websites, pricing, AI..."}
                                className="flex-1 bg-[#181822] border border-white/15 rounded-full px-4 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center hover:bg-cyan-300 transition-colors disabled:opacity-40 disabled:hover:bg-accent"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Floating Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,243,255,0.5)] border border-cyan-200 transition-all hover:bg-cyan-300 relative group"
            >
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25"></div>
                {isOpen ? <X size={24} /> : <Bot size={26} />}
            </motion.button>
        </div>
    );
}
