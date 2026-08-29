import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-black">
      <Preloader />

      <Hero />

      <Marquee />

      <About />

      <Services />

      <Work />

      <Team />

      <ContactForm />

      <Footer />

    </main>
  );
}
