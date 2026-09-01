"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Sparkles, Activity, Shield, RefreshCw } from "lucide-react";

export default function Interactive3DBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stats, setStats] = useState({
        nodes: 80,
        fps: 60,
        latency: "0.12ms",
        theme: "Cyber Cyan"
    });

    const triggerShockwaveRef = useRef<(x?: number, y?: number) => void>(() => {});
    const changeThemeRef = useRef<() => void>(() => {});

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        // Color palettes
        const colorThemes = [
            { name: "Cyber Cyan", colors: ["#00f3ff", "#5d3fd3", "#38bdf8", "#818cf8", "#c084fc"] },
            { name: "Emerald Matrix", colors: ["#10b981", "#059669", "#34d399", "#6ee7b7", "#00f3ff"] },
            { name: "Electric Plasma", colors: ["#ec4899", "#8b5cf6", "#f43f5e", "#c084fc", "#6366f1"] },
            { name: "Solar Gold", colors: ["#f59e0b", "#fbbf24", "#d97706", "#38bdf8", "#00f3ff"] }
        ];

        let currentThemeIndex = 0;
        let activeColors = colorThemes[currentThemeIndex].colors;

        changeThemeRef.current = () => {
            currentThemeIndex = (currentThemeIndex + 1) % colorThemes.length;
            activeColors = colorThemes[currentThemeIndex].colors;
            setStats(prev => ({ ...prev, theme: colorThemes[currentThemeIndex].name }));
            // Re-color particles
            particles.forEach(p => {
                p.color = activeColors[Math.floor(Math.random() * activeColors.length)];
            });
        };

        // Mouse tracking with smooth physics
        const mouse = {
            x: width / 2,
            y: height / 2,
            targetX: width / 2,
            targetY: height / 2,
            radius: 200,
            isHovered: false,
            isDown: false
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
            mouse.isHovered = true;
        };

        const handleMouseDown = (e: MouseEvent) => {
            mouse.isDown = true;
            spawnShockwave(e.clientX, e.clientY);
        };

        const handleMouseUp = () => {
            mouse.isDown = false;
        };

        const handleMouseLeave = () => {
            mouse.isHovered = false;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Shockwaves ring simulation
        const shockwaves: Array<{
            x: number;
            y: number;
            radius: number;
            maxRadius: number;
            alpha: number;
            color: string;
        }> = [];

        const spawnShockwave = (x: number = mouse.x, y: number = mouse.y) => {
            shockwaves.push({
                x: x,
                y: y,
                radius: 10,
                maxRadius: 350,
                alpha: 1,
                color: activeColors[Math.floor(Math.random() * activeColors.length)]
            });
        };

        triggerShockwaveRef.current = (x, y) => {
            spawnShockwave(x || width / 2, y || height / 2);
        };

        // Particle nodes
        const particleCount = Math.min(Math.floor(window.innerWidth / 14), 100);
        setStats(prev => ({ ...prev, nodes: particleCount }));

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            baseRadius: number;
            radius: number;
            color: string;
            alpha: number;
            phase: number;
            orbitAngle: number;
            orbitSpeed: number;
            orbitDistance: number;
        }> = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.9,
                vy: (Math.random() - 0.5) * 0.9,
                baseRadius: Math.random() * 2.2 + 1,
                radius: Math.random() * 2.2 + 1,
                color: activeColors[Math.floor(Math.random() * activeColors.length)],
                alpha: Math.random() * 0.5 + 0.3,
                phase: Math.random() * Math.PI * 2,
                orbitAngle: Math.random() * Math.PI * 2,
                orbitSpeed: (Math.random() - 0.5) * 0.02,
                orbitDistance: Math.random() * 150 + 50
            });
        }

        // Data packets traveling along lines
        const dataPackets: Array<{
            fromIdx: number;
            toIdx: number;
            progress: number;
            speed: number;
            color: string;
        }> = [];

        const spawnPacket = () => {
            if (particles.length < 2) return;
            const fromIdx = Math.floor(Math.random() * particles.length);
            let toIdx = (fromIdx + 1 + Math.floor(Math.random() * 5)) % particles.length;

            dataPackets.push({
                fromIdx,
                toIdx,
                progress: 0,
                speed: Math.random() * 0.02 + 0.015,
                color: "#00f3ff"
            });
        };

        // Frame rate monitoring
        let lastTime = performance.now();
        let frameCount = 0;

        const render = () => {
            const now = performance.now();
            frameCount++;
            if (now - lastTime >= 1000) {
                setStats(prev => ({ ...prev, fps: frameCount }));
                frameCount = 0;
                lastTime = now;
            }

            ctx.clearRect(0, 0, width, height);

            // Smooth mouse tracking
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;

            // Interactive Ambient Spotlight Follower
            if (mouse.isHovered) {
                const gradient = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, mouse.radius * 2
                );
                gradient.addColorStop(0, "rgba(0, 243, 255, 0.08)");
                gradient.addColorStop(0.5, "rgba(93, 63, 211, 0.03)");
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            // Render and update Shockwaves
            for (let s = shockwaves.length - 1; s >= 0; s--) {
                const sw = shockwaves[s];
                sw.radius += 6;
                sw.alpha *= 0.94;

                ctx.beginPath();
                ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
                ctx.strokeStyle = sw.color;
                ctx.lineWidth = 2.5;
                ctx.globalAlpha = sw.alpha;
                ctx.stroke();

                // Shockwave pushes particles outward
                for (let p of particles) {
                    const dx = p.x - sw.x;
                    const dy = p.y - sw.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (Math.abs(dist - sw.radius) < 30) {
                        const push = 4;
                        const angle = Math.atan2(dy, dx);
                        p.x += Math.cos(angle) * push;
                        p.y += Math.sin(angle) * push;
                    }
                }

                if (sw.alpha < 0.02 || sw.radius >= sw.maxRadius) {
                    shockwaves.splice(s, 1);
                }
            }

            // Occasionally spawn autonomous data packet
            if (Math.random() < 0.08 && dataPackets.length < 15) {
                spawnPacket();
            }

            // Update & Render Particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.phase += 0.03;
                p.radius = p.baseRadius + Math.sin(p.phase) * 0.8;

                p.x += p.vx;
                p.y += p.vy;

                // Bounce off boundaries
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction physics
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);

                    if (mouse.isDown) {
                        // Gravitational Black Hole suction when clicked
                        p.x += Math.cos(angle) * force * 5;
                        p.y += Math.sin(angle) * force * 5;
                    } else {
                        // Gentle wave repulsion on hover
                        p.x -= Math.cos(angle) * force * 2.5;
                        p.y -= Math.sin(angle) * force * 2.5;
                    }
                    p.alpha = Math.min(1, p.alpha + force * 0.4);
                } else {
                    p.alpha = Math.max(0.25, p.alpha - 0.005);
                }

                // Draw outer particle aura
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha * 0.3;
                ctx.fill();

                // Draw core particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();

                // Draw interconnected constellation synaptic lines
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const ldx = p.x - p2.x;
                    const ldy = p.y - p2.y;
                    const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

                    if (ldist < 140) {
                        const lineAlpha = (1 - ldist / 140) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = lineAlpha;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Render live streaming data packets
            for (let k = dataPackets.length - 1; k >= 0; k--) {
                const pkt = dataPackets[k];
                pkt.progress += pkt.speed;

                const pFrom = particles[pkt.fromIdx];
                const pTo = particles[pkt.toIdx];

                if (pFrom && pTo) {
                    const px = pFrom.x + (pTo.x - pFrom.x) * pkt.progress;
                    const py = pFrom.y + (pTo.y - pFrom.y) * pkt.progress;

                    ctx.beginPath();
                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                    ctx.fillStyle = pkt.color;
                    ctx.globalAlpha = 0.9;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = pkt.color;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }

                if (pkt.progress >= 1) {
                    dataPackets.splice(k, 1);
                }
            }

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[1] opacity-70"
            />
        </>
    );
}
