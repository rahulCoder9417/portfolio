import { BookOpen, Database, Shield, Mail, ArrowLeft, ExternalLink, ArrowDown, Play, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className=" relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
        
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slide-up delay-100">
            <span className="text-gradient">BookWise</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            A production-grade library system with email automation, enterprise security, and seamless user experience.
          </p>
          
          
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up delay-400">
            {["Next.js", "NextAuth", "Neon PostgreSQL", "Drizzle ORM", "Upstash Redis", "QStash"].map((tech) => (
              <span key={tech} className="project-tech-badge">{tech}</span>
            ))}
          </div>
     
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 animate-slide-up delay-500">
            {[
              { icon: BookOpen, label: "Smart Library" },
              { icon: User, label: "Admin Page" },
              { icon: Mail, label: "Email Automation" },
              { icon: Shield, label: "Enterprise Security" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
             {/* CTA Buttons */}
             <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
         
         <Link href={"https://library-beta-seven.vercel.app/"} target="_blank">
           <Button
             variant="glow"
             size="default"
             className="project-font-mono font-bold"
           >
             <Play className="w-4 h-4" />
             Try It Out
           </Button>
         </Link>
         <Link
         href={"/"}
         >
         <Button
          
          variant="link"
          size="default"
          className="text-muted-foreground hover:text-foreground"
           >
           <ArrowLeft className="w-4 h-4" />
           Go Back
         </Button>
         </Link>
     </div>
        </div>
          
      
      </div>
    </section>
  );
}
