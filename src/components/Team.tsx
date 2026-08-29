export default function Team() {
    return (
        <section id="team" className="py-32 bg-black relative px-6">
            <div className="container mx-auto text-center">
                <h2 className="font-heading text-6xl font-bold mb-6">The Squad</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-20">
                    Meet the minds behind the magic. A collective of visionaries and code-wizards.
                </p>

                <div className="flex flex-wrap justify-center gap-12">
                    {/* Member 1 - FOUNDER */}
                    <div className="text-center group magnetic-btn">
                        <div className="w-48 h-48 rounded-full bg-neutral-800 mx-auto mb-6 relative overflow-hidden border border-white/10 group-hover:border-accent transition-all duration-500 transform group-hover:scale-110 shadow-2xl">
                            <img
                                src="/ovi.jpg"
                                alt="Siyam Ovi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="font-heading text-2xl font-bold group-hover:text-accent transition-colors">Siyam Ovi</h4>
                        <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">Founder & CEO</span>
                    </div>

                    {/* Member 2 - PARTNER */}
                    <div className="text-center group magnetic-btn">
                        <div className="w-48 h-48 rounded-full bg-neutral-800 mx-auto mb-6 relative overflow-hidden border border-white/10 group-hover:border-accent transition-all duration-500 transform group-hover:scale-110 shadow-2xl">
                            <img
                                src="/partner.jpg"
                                alt="Partner"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="font-heading text-2xl font-bold group-hover:text-accent transition-colors">Client Manager</h4>
                        <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">Client Relations & Quality Assurance</span>
                    </div>

                    {/* Member 3 */}
                    <div className="text-center group magnetic-btn">
                        <div className="w-48 h-48 rounded-full bg-neutral-800 mx-auto mb-6 relative overflow-hidden border border-white/10 group-hover:border-accent transition-all duration-500 transform group-hover:scale-110 shadow-2xl">
                            <img
                                src="/mostofa.jpg"
                                alt="Mostofa"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="font-heading text-2xl font-bold">Tech Lead</h4>
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Engineering</span>
                    </div>

                    {/* Member 4 - SALES & GROWTH */}
                    <div className="text-center group magnetic-btn">
                        <div className="w-48 h-48 rounded-full bg-neutral-800 mx-auto mb-6 relative overflow-hidden border border-white/10 group-hover:border-accent transition-all duration-500 transform group-hover:scale-110 shadow-2xl">
                            <img
                                src="/shishir.jpg"
                                alt="Shishir Chandra Das"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="font-heading text-2xl font-bold group-hover:text-accent transition-colors">Shishir Chandra Das</h4>
                        <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">Director of Sales &amp; Business Development</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
