import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Marquee from "@/components/Marquee";
import TrustedPartners from "@/components/TrustedPartners";
import EnterpriseSolutions from "@/components/EnterpriseSolutions";
import EngineeringProcess from "@/components/EngineeringProcess";
import Promotions from "@/components/Promotions";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import ClientCertificates from "@/components/ClientCertificates";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-black">
      <Preloader />

      <Hero />

      <TrustedPartners />

      <Marquee />

      {/* 1. Complete Enterprise Product Suite (Like Swadesh IT, elevated with Next.js & AI) */}
      <EnterpriseSolutions />

      {/* 2. 7-Step Engineering Methodology & Process */}
      <EngineeringProcess />

      <Promotions />

      <About />

      <Services />

      <Work />

      {/* 3. Formal Certificates of Appreciation & Client Proof */}
      <ClientCertificates />

      <BlogSection />

      <ContactForm />

      <Footer />
    </main>
  );
}
