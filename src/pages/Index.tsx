import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <SEO
        title="Numan Irshad | Full-Stack Developer Portfolio"
        description="Portfolio of Numan Irshad, a Full-Stack Developer specializing in MERN stack, Next.js, and modern SaaS applications. Explore projects and contact for collaboration."
        url="https://numanirshad.dev"
        image="https://numanirshad.dev/N-brand.svg"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
