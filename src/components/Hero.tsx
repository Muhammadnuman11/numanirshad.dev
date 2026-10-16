import { ArrowDown, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "@/config/personalInfo";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-block mb-6 opacity-0 animate-fade-in-up">
            <span className="font-mono text-sm text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Hello World! 👋
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            I'm a{" "}
            <span className="text-gradient">Full-Stack</span>
            <br />
            Software Engineer
          </h1>

          {/* Subtitle with typing effect */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono opacity-0 animate-fade-in-up animate-delay-200">
            <span className="text-primary">const</span> stack = [
            <span className="text-accent">'MERN'</span>,{" "}
            <span className="text-accent">'Next.js'</span>,{" "}
            <span className="text-accent">'AI/Automation'</span>];
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animate-delay-300">
            Building production-grade SaaS platforms, scalable web applications, and automation workflows with Next.js, React, Node.js, MongoDB, Stripe, and modern AI tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up animate-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/NomiResumev4.pdf" download aria-label="Download Resume">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 opacity-0 animate-fade-in-up animate-delay-500">
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={24} />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <MailIcon size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
