"use client"
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
       

        {/* Main Heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-87xl font-bold leading-tight animate-fade-up-delay-1">
          Hi, I'm{" "}
          <span className="text-gradient">Rahul Kumar</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
  <span className="text-gradient font-semibold">Full-stack engineer</span> with strong
  <span className="text-foreground font-semibold"> DSA</span> foundations, building
  scalable APIs,
  <span className="text-foreground font-semibold"> real-time WebSocket </span>
  architectures, and production-ready web applications.
</p>


        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
            className="group inline-flex items-center gap-2 cursor-pointer rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-105"
          >
            About Me
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 cursor-pointer rounded-full border border-border px-8 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Get In Touch
          </button>
        
        </div>
        <a
    href="/Resume.pdf"
    download
    className="group inline-flex items-center gap-2 cursor-pointer rounded-full border border-primary px-8 py-4 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
  >
    Download Résumé
    <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
  </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-muted flex items-start justify-center p-2">
          <div className="h-2 w-1 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
