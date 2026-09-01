import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Marquee from "@/components/Marquee";
import TrustedPartners from "@/components/TrustedPartners";
import Promotions from "@/components/Promotions";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
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

      <Promotions />

      <About />

      <Services />

      <Work />

      <BlogSection />

      <ContactForm />

      <Footer />
    </main>
  );
}
