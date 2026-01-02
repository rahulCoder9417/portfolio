"use client"
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/Devsync/SectionTitle";
import  {ArchitectureDiagram}  from "@/components/Devsync/ArchitectureDiagram";
import {
  ArrowRight,
  Github,
  Mail,
} from "lucide-react";
import { FullBleed } from "@/components/Devsync/MaxWidth";
import DevSyncAbout from "@/components/Devsync/About/MainComponent";
import Hero from "@/components/Devsync/hero/Hero";
import Problem from "@/components/Devsync/Problem/Problem";
import Basic from "@/components/Devsync/Architectur/Basic";
import Link from "next/link";
import ProjectFooter from "@/components/ProjectFooter";
const Index = () => {
  const BasicData: {
    mainH: string;
    secH: string;
    desc: string;
    components: string[];
  }[] = [
    {
      mainH: "CLIENT",
      secH: "Browser IDE",
      desc:
        "Unified interface containing editor, terminal, preview, and chat — fully synchronized across users.",
      components: [
        "Code Editor",
        "Terminal",
        "Chat",
        "Live Preview",
      ],
    },
    {
      mainH: "REAL-TIME CORE",
      secH: "Collaboration & Awareness Engine",
      desc:
        "Handles live code sync, cursor presence, file state, and multi-user awareness using persistent connections.",
      components: [
        "WebSockets",
        "Live Sync",
        "Presence",
        "Conflict-free Updates",
      ],
    },
    {
      mainH: "EXECUTION",
      secH: "Isolated Code Execution Environment",
      desc:
        "Runs real projects in isolated containers with full access to npm, CLI tools, backend servers, and build systems.",
      components: [
        "Docker",
        "npm",
        "Vite",
        "Backend Servers",
      ],
    },
    {
      mainH: "VISUALIZATION",
      secH: "GUI Virtualization Layer",
      desc:
        "Enables GUI-based applications to run headlessly on the server and stream their display directly into the browser.",
      components: [
        "Xvfb",
        "X11",
        "noVNC",
        "Browser Rendering",
      ],
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
       <Hero title="DevSync" description="A real-time collaborative cloud IDE that lets teams write, run, and ship code together — directly from the browser." features={[
        "Real-time Collaboration",
        "WebSockets",
        "Docker-based Execution",
        "GUI and Local Server Support",
      ]} actions={[
        { label: "scroll", href: "how-devsync-works" },
        { label: "link", href: "https://dev-sync-blush.vercel.app/" },
      ]} />
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
       <Basic 
       description="  DevSync is built as a layered real-time system where collaboration,
                execution, and visualization operate as one pipeline."
       data={BasicData}  
      />
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
<ProjectFooter githubLink="dev-sync" />
      
    </div>
  );
};

export default Index;