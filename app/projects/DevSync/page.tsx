"use client"
import { Button } from "@/components/ui/button";
import { FeatureBadge } from "@/components/Project/FeatureBadge";
import { VideoPlaceholder } from "@/components/Project/VideoPlaceholder";
import { SectionTitle } from "@/components/Project/SectionTitle";
import { TechHighlight } from "@/components/Project/TechHighlight";
import { ArchitectureDiagram } from "@/components/Project/ArchitectureDiagram";
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
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { SyncedVideos } from "@/components/Project/SyncedVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 project-animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="project-gradient-text">DevSync</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  A real-time collaborative development platform that enables teams to code, 
                  execute, and ship together — instantly.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <FeatureBadge>Real-time</FeatureBadge>
                <FeatureBadge>WebSockets</FeatureBadge>
                <FeatureBadge>Docker</FeatureBadge>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="glow" size="default" className="project-font-mono font-bold cursor-pointer"onClick={() =>
              document.getElementById("how-devsync-works")?.scrollIntoView({ behavior: "smooth" })
            }>
                  <Play className="w-4 h-4" />
                 See Funtioning 
                </Button>
                <Button variant="ghost" size="default" className="text-muted-foreground hover:text-foreground">
                  <FileText className="w-4 h-4" />
                  Read  Docs
                </Button>
                <Link
                  href="/"
            
                >
                  <Button variant="link" size="default" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4" />
                 Go Back
                </Button>
                </Link>
              </div>
            </div>

            {/* Right Video Placeholder */}
            <div className="project-animate-fade-in delay-200">
              <VideoPlaceholder className="project-glow-effect-subtle" />
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-50" />
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* Problem Statement */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-6 project-animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Problem
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Remote development teams struggle with fragmented tools, laggy screen shares, 
              and broken context switching. Pair programming becomes a chore when your 
              environment doesn't follow you. DevSync eliminates the friction — putting 
              everyone in the same runtime, in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* How DevSync Works */}
      <section className="py-20 md:py-28" id="how-devsync-works">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle 
            title="How DevSync Works" 
            subtitle="A walkthrough of the core collaborative features that power real-time development."
          />

          <div className="space-y-24">
            {/* Feature 1: Real-Time Code Syncing */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                01 — Real-Time Code Syncing
              </h3>
              <SyncedVideos srcA="/DevSync/CodeSharing/1sharing.mp4" srcB="/DevSync/CodeSharing/1recieving.mp4" size="xl" />
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Live code sharing</span> with instant synchronization across all connected users. 
                  Multiple cursors can edit the same file simultaneously with conflict-free resolution, 
                  ensuring every keystroke is reflected in real time across the entire team.
                </p>
              </div>
            </div>

            {/* Feature 2: Integrated Terminal Execution */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                02 — Integrated Terminal Execution
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <VideoPlaceholder size="lg" />
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="text-foreground font-medium">Live Command Execution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Execute terminal commands with output streamed to all collaborators in real time. 
                      The shared runtime state ensures everyone sees the same terminal output, 
                      enabling true collaborative debugging and development workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: File System Synchronization */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                03 — File System Synchronization
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <VideoPlaceholder size="md" />
                <VideoPlaceholder size="md" />
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">File creation, deletion, and updates</span> are 
                  reflected instantly across all users. Changes propagate in real time, maintaining a 
                  persistent shared project state that keeps everyone in sync throughout the development session.
                </p>
              </div>
            </div>

            {/* Feature 4: Live Preview & GUI Execution */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                04 — Live Preview & GUI Execution
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <VideoPlaceholder size="md" />
                  <div className="bg-card border border-border rounded-xl p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span className="text-foreground font-medium">Frontend Preview</span> — Running frontend apps 
                      with Vite or dev server preview, streamed live to all collaborators.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <VideoPlaceholder size="md" />
                  <div className="bg-card border border-border rounded-xl p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span className="text-foreground font-medium">GUI Execution</span> — Headless display execution 
                      via terminal using Xvfb, enabling graphical application streaming.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Built-in Team Chat */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                05 — Built-in Team Chat
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <VideoPlaceholder size="md" />
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="text-foreground font-medium">Real-time Messaging</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Communicate alongside your code with built-in team chat. Features include 
                      real-time messaging, read status indicators, and seamless integration 
                      with your development workflow — no context switching required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 6: Git Repository Import */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                06 — Git Repository Import
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <VideoPlaceholder size="md" />
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="text-foreground font-medium">Instant Project Bootstrap</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Clone repositories directly into the workspace for instant project bootstrap. 
                      Get a ready-to-collaborate environment in seconds, with full Git integration 
                      for version control within your collaborative session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

          <ArchitectureDiagram className="mb-12" />

          <div className="space-y-8 max-w-4xl">
            {/* Frontend */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-foreground font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Frontend
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Next.js application with Monaco Editor integration for real-time code editing. 
                Handles UI rendering, user interactions, and maintains WebSocket connections to both backend services.
              </p>
            </div>

            {/* Main Backend */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-foreground font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Main Backend
              </h4>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <li>• Handles file synchronization WebSocket for real-time file updates</li>
                <li>• Manages collaboration WebSocket for cursor positions and user presence</li>
                <li>• Coordinates project state across all connected clients</li>
              </ul>
            </div>

            {/* Terminal Backend */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-foreground font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Terminal Backend
              </h4>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <li>• Executes terminal commands in isolated Docker containers</li>
                <li>• Runs inside sandboxed environment with resource limits</li>
                <li>• Streams output to connected clients via WebSocket</li>
              </ul>
            </div>

            {/* WebSocket Connections */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-foreground font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                WebSocket Connections
              </h4>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <li>• <span className="text-foreground">Frontend → Main Backend:</span> Collaboration + file synchronization</li>
                <li>• <span className="text-foreground">Frontend → Terminal Backend:</span> Terminal I/O streaming</li>
                <li>• <span className="text-foreground">Main Backend → Terminal Backend:</span> File updates & execution sync</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* Technical Highlights */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle 
            title="Technical Highlights" 
            subtitle="Key engineering decisions and implementation details."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechHighlight 
              icon={Zap}
              title="WebSocket-Driven Real-Time State"
              description="Sub-50ms latency for all collaborative operations using optimized binary payloads and delta synchronization."
            />
            <TechHighlight 
              icon={Box}
              title="Docker-Based Execution Isolation"
              description="Each session runs in isolated containers with resource limits, network isolation, and automatic cleanup policies."
            />
            <TechHighlight 
              icon={Terminal}
              title="Headless GUI via Xvfb"
              description="Virtual framebuffer captures graphical output and streams as optimized frames for browser rendering."
            />
            <TechHighlight 
              icon={Shield}
              title="Persistent File System State"
              description="Project state synced to persistent volumes with automatic backup, restore, and version tracking."
            />
            <TechHighlight 
              icon={GitBranch}
              title="Scalable Backend Design"
              description="Horizontally scalable architecture with load balancing and session affinity for consistent connections."
            />
            <TechHighlight 
              icon={Layers}
              title="PTY Integration"
              description="Full pseudo-terminal support for interactive shell sessions with proper signal handling and resize events."
            />
          </div>
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
              <Button variant="glow" size="lg">
                <Github className="w-4 h-4" />
                Explore the Code
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="project-font-mono">DevSync — Built for developers, by developers.</p>
            <p>© 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;