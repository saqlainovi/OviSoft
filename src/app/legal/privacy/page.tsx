"use client";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <main className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Privacy Policy
                </h1>

                <div className="space-y-6 text-gray-400 leading-relaxed">
                    <p>Last updated: December 23, 2025</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to OviSoft. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. The Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        <a href="mailto:admin@ovisoft.tech" className="text-blue-400 hover:underline ml-1">admin@ovisoft.tech</a>
                    </p>
                </div>
            </main>
        </div>
    );
}
