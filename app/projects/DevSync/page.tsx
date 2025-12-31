"use client"
import { Button } from "@/components/ui/button";
import { FeatureBadge, TechBadge } from "@/components/Devsync/FeatureBadge";
import { VideoPlaceholder } from "@/components/Devsync/VideoPlaceholder";
import { SectionTitle } from "@/components/Devsync/SectionTitle";
import { TechHighlight } from "@/components/Devsync/TechHighlight";
import  {ArchitectureDiagram}  from "@/components/Devsync/ArchitectureDiagram";
import {
  Play,
  FileText,
  Zap,
  Box,
  Shield,
  Terminal,
  GitBranch,
  Layers,
  ArrowRight,
  Github,
  Mail,
  ArrowLeft,
  ArrowDown,
  Code2,
  Users,
  FileCode
} from "lucide-react";
import { FullBleed } from "@/components/Devsync/MaxWidth";
import DevSyncAbout from "@/components/Devsync/About/MainComponent";
import Hero from "@/components/Devsync/hero/Hero";
import Problem from "@/components/Devsync/Problem/Problem";
import Basic from "@/components/Devsync/Architectur/Basic";
import Link from "next/link";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
       <Hero />
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-50" />
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* Problem Statement */}
      <section className="relative py-20">
      <Problem />
      </section>


      {/* Divider */}
      <div className="project-section-divider" />


      {/* Architecture */}
      <section className="relative py-24">
       <Basic/>
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* How DevSync Works */}
      <section className="py-20 md:py-28" id="how-devsync-works">
        <DevSyncAbout />
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* Architecture Overview */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle
            title="System Architecture"
            subtitle="A high-level overview of the infrastructure powering DevSync."
          />

  <FullBleed >        <ArchitectureDiagram className="mb-12 p-8 h-auto" /></FullBleed>

           


{/* Tech Stack */}
<section className="py-20">
  <div className="container max-w-6xl mx-auto px-6 space-y-10">

    <div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Built With
      </h2>
      <p className="text-muted-foreground mt-3 text-lg">
        Core technologies powering DevSync.
      </p>
    </div>

    <div className="flex flex-wrap gap-4">
      {[
        "Next.js",
        "Tailwind CSS",

        "TypeScript",
        "Node.js",
        "Express",
        "WebSockets",
        "SSE",
        "Docker",
        "shadcn/ui",
        "Render",
        "Vercel",
        "xterm",
        "node-pty",
        "NeonDB",
        "Prisma",
        "Cloudinary",
        "Xvfb",
        "Yjs",
        "Fluxbox",
        "Clerk",
        "x11vnc",
        "noVNC",
      ].map((tech) => (
        <span
        key={tech}
        className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 hover:border-orange-600 transition-all duration-300 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:animate-pulse"></span>
        {tech}
      </span>
      ))}
    </div>
  </div>
</section>



        </div>
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* Call to Action */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Ready to explore?
              </h2>
              <p className="text-muted-foreground">
                Dive into the source code or get in touch to discuss the implementation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/rahulCoder9417/dev-sync" target="_blank" className="flex items-center gap-2">
              <Button variant="glow" size="lg">
                <Github className="w-4 h-4" />
                Explore the Code
                <ArrowRight className="w-4 h-4" />
              </Button>
              </Link>
              <Link href="/#contact"  className="">
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="project-font-mono">DevSync — Built for developers, by me.</p>
            <p>© 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;