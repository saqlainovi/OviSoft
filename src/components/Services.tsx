"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Smartphone, BrainCircuit, PenTool } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on desktop for horizontal scroll
        if (window.innerWidth > 768) {
            const pin = gsap.fromTo(
                wrapperRef.current,
                { x: 0 },
                {
                    x: () => -(wrapperRef.current!.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => "+=" + wrapperRef.current!.scrollWidth,
                        invalidateOnRefresh: true,
                    },
                }
            );

            return () => {
                pin.kill();
            };
        }
    }, []);

    return (
        <section ref={sectionRef} id="services" className="overflow-hidden py-24 bg-background relative">
            <div className="container mx-auto mb-16 px-6">
                <h2 className="font-heading text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Our Expertise
                </h2>
            </div>

            <div ref={wrapperRef} className="flex gap-8 px-6 md:px-20 w-max">
                {/* Service Cards */}
                {[
                    { icon: Code2, title: "Web Development", desc: "Futuristic websites using React, Next.js, and WebGL." },
                    { icon: Smartphone, title: "App Development", desc: "Native performance with cross-platform efficiency." },
                    { icon: BrainCircuit, title: "AI Solutions", desc: "Intelligent bots and automation systems." },
                    { icon: PenTool, title: "Thesis & Research", desc: "Expert guidance for BSc/MSc projects and SRS documentation." },
                    { icon: PenTool, title: "UI/UX Design", desc: "Designs that feel natural and look spectacular." },
                    // Duplicate for enough scroll length if needed
                    { icon: Code2, title: "Custom Software", desc: "Tailored solutions for complex enterprise problems." },
                ].map((service, i) => (
                    <div
                        key={i}
                        className="w-[85vw] md:w-[400px] h-[500px] bg-[#111] border border-[#222] rounded-3xl p-10 flex flex-col justify-between transition-all duration-300 hover:bg-[#161616] hover:border-accent hover:-translate-y-2 group relative overflow-hidden flex-shrink-0 cursor-none"
                    >
                        <div className="text-primary group-hover:text-accent transition-colors">
                            <service.icon size={64} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-heading text-3xl mb-4 font-bold">{service.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{service.desc}</p>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary rounded-full filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
