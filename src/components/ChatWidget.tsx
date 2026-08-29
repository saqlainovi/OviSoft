'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
};


// Animated AI Avatar Component
const AnimatedAvatar = () => (
    <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Pulsing outer glow */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute inset-0 bg-blue-500 rounded-full blur-md"
        />

        {/* Rotating border/ring */}
        <motion.div
            animate={{
                rotate: 360,
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
            }}
            className="relative w-full h-full bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-[2px]"
        >
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                {/* Voice waves */}
                <motion.div
                    animate={{ height: ["20%", "60%", "20%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 bg-blue-400 rounded-full mx-[1px]"
                />
                <motion.div
                    animate={{ height: ["40%", "80%", "40%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    className="w-1 bg-purple-400 rounded-full mx-[1px]"
                />
                <motion.div
                    animate={{ height: ["20%", "60%", "20%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="w-1 bg-blue-400 rounded-full mx-[1px]"
                />
            </div>
        </motion.div>
    </div>
);

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm OviSoft AI. How can I help you build your dream project today?", sender: 'bot' }
    ]);

    // Auto-scroll ref
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // "Smart" Rule-Based Logic (Enhanced Knowledge Base)
    const getSmartResponse = (text: string) => {
        const lowerText = text.toLowerCase();

        // GREETINGS
        if (lowerText.match(/hi|hello|hey|greetings|start|yo/)) {
            return "Hello! 👋 I am OviSoft AI. I'm here to help you turn your ideas into reality. Ask me about **Websites**, **Mobile Apps**, or **AI Solutions**!";
        }

        // GUIDE / HELP / DETAILS
        if (lowerText.match(/guide|help|details|teach|learn|how to|explain/)) {
            return "I can guide you! Here is how we work:\n1. **Consultation:** We discuss your idea.\n2. **Design:** We create stunning UI/UX.\n3. **Development:** We build using the latest tech.\n4. **Launch:** We deploy your project to the world.\n\nWhich stage are you interested in?";
        }

        // TECHNOLOGIES / STACK
        if (lowerText.match(/tech|stack|react|next|node|firebase|database|language/)) {
            return "We use the most modern tech stack:\n🚀 **Frontend:** Next.js, React, Tailwind CSS\n🔥 **Backend:** Node.js, Firebase, Supabase\n📱 **Mobile:** React Native, Flutter\n🤖 **AI:** Google Gemini, OpenAI";
        }

        // SERVICES - WEB
        if (lowerText.match(/website|web|site|landing page|ecommerce|blog|portfolio/)) {
            return "Excellent choice! 🌐 We specialize in high-performance websites. Whether you need a simple **Portfolio**, a **Business Site**, or a full **E-Commerce Store**, we can build it. What kind of website do you need?";
        }

        // SERVICES - APP
        if (lowerText.match(/app|mobile|android|ios|flutter/)) {
            return "We build native-feel mobile apps! 📱 We can create stunning apps for both **iPhone** and **Android**. Do you have a specific feature list in mind?";
        }

        // SERVICES - AI
        if (lowerText.match(/ai|bot|chat|intelligence|gpt|gemini/)) {
            return "Yes, we implement AI solutions! 🤖 We can build **Chatbots** (like me!), **AI Content Generators**, or **Data Analysis tools** for your business.";
        }

        // PRICING
        if (lowerText.match(/price|cost|much|money|rate|budget/)) {
            return "Our pricing depends on the project scope. 💰 We offer competitive custom packages:\n- **Basic:** For startups\n- **Pro:** For growing businesses\n- **Enterprise:** Full-scale solutions.\n\nShall we schedule a quick call to discuss your budget?";
        }

        // CONTACT / MEETING
        // CONTACT / MEETING
        if (lowerText.match(/contact|mail|phone|call|meeting|hire|email/)) {
            return "Great! 🤝 You can reach our team directly at <strong>admin@ovisoft.tech</strong>, or <a href='/start-project' class='text-blue-400 underline hover:text-blue-300'>Click Here to Start a Project</a>.";
        }

        // CREATOR / IDENTITY
        if (lowerText.match(/who are you|made you|created|owner/)) {
            return "I am OviSoft AI, a digital assistant created by the **OviSoft Engineering Team**. My mission is to help clients like you build amazing software.";
        }

        // DEFAULT FALLBACK (Professional & Engaging)
        // DEFAULT FALLBACK (Professional & Engaging)
        return "That sounds interesting! 🤔 To give you the best advice, I'd recommend connecting with our Senior Developers. Could you please send us a <a href='/start-project' class='text-blue-400 underline hover:text-blue-300'>Project Request</a> with more details? Or try asking about 'Websites', 'Apps', or 'Pricing'.";
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Add loading state to simulate "Thinking"
        const loadingMessageId = Date.now() + 1;
        setMessages(prev => [...prev, { id: loadingMessageId, text: "Thinking...", sender: 'bot' }]);

        // Simulate Network Delay (1.5 seconds) to feel like real AI
        setTimeout(() => {
            const responseText = getSmartResponse(input);
            setMessages(prev => prev.map(msg =>
                msg.id === loadingMessageId ? { ...msg, text: responseText } : msg
            ));
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-5 w-80 md:w-96 h-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <AnimatedAvatar />
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide">OviSoft AI</h3>
                                    <p className="text-blue-200 text-xs flex items-center">
                                        <span className="relative flex h-2 w-2 mr-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                            } whitespace-pre-wrap`}
                                        dangerouslySetInnerHTML={msg.sender === 'bot' ? { __html: msg.text } : undefined}
                                    >
                                        {msg.sender === 'user' ? msg.text : null}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-black/40 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 placeholder-gray-500 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!input.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center z-50 group border border-white/20"
            >
                <div className="scale-75">
                    <AnimatedAvatar />
                </div>
            </motion.button>
        </>
    );
};

export default ChatWidget;
