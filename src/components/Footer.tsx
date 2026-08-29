import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-24 bg-[#050505] border-t border-white/10 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl text-gray-500 mb-8 font-light">Have an idea?</h2>
                    <Link
                        href="mailto:hello@ovisoft.tech"
                        className="font-heading text-[12vw] font-black leading-none text-white hover:text-primary transition-colors duration-300 magnetic-btn"
                    >
                        Let's Build It
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12 gap-8">
                    <div>
                        <h4 className="font-heading text-2xl font-bold mb-2">OviSoft.</h4>
                        <p className="text-gray-500">Innovating for tomorrow.</p>
                        <div className="mt-4 flex gap-4 text-sm font-bold">
                            <Link href="/legal/privacy" className="text-blue-500 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/start-project" className="text-blue-500 hover:text-white transition-colors">Start Project</Link>
                        </div>
                    </div>

                    <ul className="flex flex-col md:flex-row gap-6 text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors magnetic-btn">LinkedIn</Link></li>

                        <li><Link href="#" className="hover:text-white transition-colors magnetic-btn">Twitter</Link></li>
                    </ul>

                    <div className="text-gray-600">
                        &copy; 2025 OviSoft. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
