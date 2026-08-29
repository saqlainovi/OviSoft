export default function About() {
    return (
        <section className="py-32 px-6 bg-background">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">Who We Are</h2>
                    <p className="text-2xl md:text-3xl text-white leading-relaxed mb-6 font-light">
                        We are a collective of visionaries, code-wizards, and designers.
                    </p>
                    <p className="text-gray-400 text-lg mb-10 leading-loose">
                        OviSoft isn't just an IT firm; it's a brotherhood of innovators. We started as friends with a shared passion for breaking the status quo. Now, we build digital experiences that define the future.
                    </p>

                    <div className="flex gap-12 border-t border-white/10 pt-8">
                        <div>
                            <span className="block font-heading text-5xl font-bold text-accent mb-2">15+</span>
                            <span className="text-gray-500 uppercase tracking-wider text-sm">Projects</span>
                        </div>
                        <div>
                            <span className="block font-heading text-5xl font-bold text-accent mb-2">100%</span>
                            <span className="text-gray-500 uppercase tracking-wider text-sm">Satisfaction</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full glass rounded-3xl overflow-hidden group flex items-center justify-center">
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                        >
                            <source src="/videos/Cybernetic_Code_Screen_Generation.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-30 z-10 transition-transform duration-1000"></div>

                    {/* Visual Centerpiece */}
                    <div className="relative z-10 grid grid-cols-2 gap-4 p-8 w-full max-w-md pointer-events-none">
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center aspect-square transform translate-y-8 animate-pulse">
                            <div className="w-3 h-3 bg-red-500 rounded-full mb-2 self-start ml-[-10px]"></div>
                            <div className="w-12 h-1 bg-white/20 rounded-full mb-2"></div>
                            <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 flex flex-col items-center justify-center aspect-square shadow-2xl shadow-accent/20">
                            <span className="text-4xl">🚀</span>
                            <span className="text-xs uppercase tracking-widest mt-2">Speed</span>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center aspect-square transform -translate-y-4">
                            <span className="text-4xl">💎</span>
                            <span className="text-xs uppercase tracking-widest mt-2">Quality</span>
                        </div>
                        <div className="bg-accent/20 backdrop-blur-md p-6 rounded-2xl border border-accent/30 flex flex-col items-center justify-center aspect-square">
                            <h3 className="font-heading font-bold text-2xl">AI</h3>
                            <span className="text-[10px] uppercase text-accent">Powered</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
