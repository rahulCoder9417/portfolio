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
  ArrowLeft,
  ArrowDown
} from "lucide-react";
import Link from "next/link";
import { SyncedVideos } from "@/components/Project/SyncedVideo";
import { DemoVideo } from "@/components/Project/DemoVideo";
import { FullBleed } from "@/components/Project/MaxWidth";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="project-animate-fade-in space-y-10">

            {/* Title & Description */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="project-gradient-text">DevSync</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                A real-time collaborative cloud IDE that lets teams write, run,
                and ship code together — directly from the browser.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <FeatureBadge>Real-time Collaboration</FeatureBadge>
              <FeatureBadge>WebSockets</FeatureBadge>
              <FeatureBadge>Docker-based Execution</FeatureBadge>
              
              <FeatureBadge>Next.js</FeatureBadge>
              <FeatureBadge>Neon</FeatureBadge>
              <FeatureBadge>GUI and Preview Support</FeatureBadge>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
              <Button
                variant="glow"
                size="default"
                className="project-font-mono font-bold"
                onClick={() =>
                  document
                    .getElementById("how-devsync-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ArrowDown className="w-4 h-4" />
                See It in Action
              </Button>
              <Link href="https://dev-sync-zeta.vercel.app/" target="_blank">
                <Button
                  variant="link"
                  size="default"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Play className="w-4 h-4" />
                  Try It Out
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="default"
                className="text-muted-foreground hover:text-foreground"
              >
                <FileText className="w-4 h-4" />
                Read Docs
              </Button>

              <Link href="/">
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

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-50" />
      </section>

      {/* Divider */}
      <div className="project-section-divider" />

      {/* Problem Statement */}
      <section className="relative py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-14">

            {/* Section Title */}
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The Problem DevSync Solves
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Modern collaboration tools are fragmented, limited, or fake-real-time.
                DevSync was built to remove these constraints.
              </p>
            </div>

            {/* Problem Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "No True Real-Time",
                  desc: "Most editors fake collaboration or rely on refresh-based sync."
                },
                {
                  title: "Can’t Run Real Projects",
                  desc: "Online editors break when npm, servers,GUI sessions, or build tools are involved."
                },
                {
                  title: "MultiLanguage ",
                  desc: "Online IDE can't run multiple languages."
                },
                {
                  title: "Disconnected Tools",
                  desc: "Chat, code, terminal, and preview live in separate apps."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 hover:bg-muted/40 transition"
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Divider */}
      <div className="project-section-divider" />


      {/* Architecture */}
      <section className="relative py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-16">

            {/* Section Header */}
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                System Architecture
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                DevSync is built as a layered real-time system where collaboration,
                execution, and visualization operate as one pipeline.
              </p>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-5">

              {/* Browser Layer */}
              <div className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute -top-3 left-4 bg-background px-3 text-xs font-mono text-primary">
                  CLIENT
                </span>
                <h3 className="font-semibold text-lg">
                  Browser IDE
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Unified interface containing editor, terminal, preview, and chat —
                  fully synchronized across users.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-muted">Code Editor</span>
                  <span className="px-2 py-1 rounded bg-muted">Terminal</span>
                  <span className="px-2 py-1 rounded bg-muted">Chat</span>
                  <span className="px-2 py-1 rounded bg-muted">Live Preview</span>
                </div>
              </div>

              {/* Real-Time Layer */}
              <div className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute -top-3 left-4 bg-background px-3 text-xs font-mono text-primary">
                  REAL-TIME CORE
                </span>
                <h3 className="font-semibold text-lg">
                  Collaboration & Awareness Engine
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Handles live code sync, cursor presence, file state, and
                  multi-user awareness using persistent connections.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-muted">WebSockets</span>
                  <span className="px-2 py-1 rounded bg-muted">Live Sync</span>
                  <span className="px-2 py-1 rounded bg-muted">Presence</span>
                  <span className="px-2 py-1 rounded bg-muted">Conflict-free Updates</span>
                </div>
              </div>

              {/* Execution Layer */}
              <div className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute -top-3 left-4 bg-background px-3 text-xs font-mono text-primary">
                  EXECUTION
                </span>
                <h3 className="font-semibold text-lg">
                  Isolated Code Execution Environment
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Runs real projects in isolated containers with full access to npm,
                  CLI tools, backend servers, and build systems.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-muted">Docker</span>
                  <span className="px-2 py-1 rounded bg-muted">npm</span>
                  <span className="px-2 py-1 rounded bg-muted">Vite</span>
                  <span className="px-2 py-1 rounded bg-muted">Backend Servers</span>
                </div>
              </div>

              {/* GUI Layer */}
              <div className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute -top-3 left-4 bg-background px-3 text-xs font-mono text-primary">
                  VISUALIZATION
                </span>
                <h3 className="font-semibold text-lg">
                  GUI Virtualization Layer
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Enables GUI-based applications to run headlessly on the server
                  and stream their display directly into the browser.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-muted">Xvfb</span>
                  <span className="px-2 py-1 rounded bg-muted">X11</span>
                  <span className="px-2 py-1 rounded bg-muted">noVNC</span>
                  <span className="px-2 py-1 rounded bg-muted">Browser Rendering</span>
                </div>
              </div>

            </div>
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
              <SyncedVideos srcA="/DevSync/CodeSharing/1sharing.mp4" srcB="/DevSync/CodeSharing/1recieving.mp4" size="xl" lazyLoad={false} />
              <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-muted-foreground leading-relaxed">
  <span className="text-foreground font-medium">Real-time code synchronization</span> forms the foundation of DevSync’s collaborative engine.
  As users type, <span className="text-foreground font-semibold" >code changes</span> are streamed instantly to all connected clients,
  while <span className="text-foreground font-semibold">cursor positions</span>, <span className="text-accent-foreground font-semibold">text selections</span>,
  and <span className="text-foreground font-semibold">scroll state</span> are continuously synchronized to preserve full editing context.
  Multiple users can work on the same file in parallel, with DevSync maintaining a
  <span className="text-foreground font-medium"> consistent, conflict-free document state</span>
  — eliminating refreshes, locks, and manual coordination.
</p>

              </div>
            </div>

            {/* Feature 2: Integrated Terminal Execution */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                02 — Integrated Terminal Execution
              </h3>
              <FullBleed>
                <div className="flex items-start p-8 gap-6">
                  <div className="space-y-4">
                    <DemoVideo src="/DevSync/TerminalBasic/TerminalBasic.mp4" size="xl" hoverSpeedUp={true} />
                    <div className="bg-card border border-border rounded-xl p-4">
                    <p className="text-muted-foreground leading-relaxed">
  <span className="font-semibold text-foreground">DevSync’s terminal</span> runs inside an
  <span className="font-semibold text-foreground"> isolated Docker container</span>,
  providing a real execution environment with
  <span className="font-semibold text-foreground"> persistent disk-backed storage </span>
  for project files, dependencies, and build artifacts.
  Terminal input and output are handled using
  <span className="font-semibold text-foreground"> xterm</span> on the client and
  <span className="font-semibold text-foreground"> node-pty</span> on the server,
  enabling fully interactive shell sessions.
  All terminal events are streamed bidirectionally over
  <span className="font-semibold text-foreground"> WebSocket connections </span>,
  ensuring low-latency command execution, real-time output,
  and seamless synchronization across connected users.
</p>

                    </div>
                  </div>
                  <div className="space-y-4">
                    <DemoVideo src="/DevSync/TerminalBasic/TerminalStatic.mp4" size="xl" hoverSpeedUp={true} />
                    <div className="bg-card border border-border rounded-xl p-4">
                    <p className="text-muted-foreground leading-relaxed">
  <span className="font-semibold text-foreground">DevSync’s terminal</span> runs inside an
  <span className="font-semibold text-foreground"> isolated Docker container</span>,
  Each workspace which Uses static files to serve is exposed through a dedicated
  <span className="font-semibold text-foreground"> /project/{`{projectId}`}</span> route,
  where front-end projects using
  <span className="font-semibold text-foreground"> HTML</span>,
  <span className="font-semibold text-foreground"> CSS</span>, and
  <span className="font-semibold text-foreground"> JavaScript </span>
  are served as static assets directly from the container.
  Terminal input and output are managed using
  <span className="font-semibold text-foreground"> xterm</span> on the client and
  <span className="font-semibold text-foreground"> node-pty</span> on the server,
  with all execution events streamed bidirectionally over
  <span className="font-semibold text-foreground"> WebSocket connections </span>
  to ensure low-latency interaction and real-time feedback.
</p>


                    </div>
                  </div>
                </div>
              </FullBleed>
            </div>

            {/* Feature 3: File System Synchronization */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                03 — File System Synchronization
              </h3>
              <SyncedVideos srcA="/DevSync/FileCrud/2sharing.mp4" srcB="/DevSync/FileCrud/2recevieng.mp4" size="xl" lazyLoad={true} />
              <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-muted-foreground leading-relaxed">
  File operations including
  <span className="font-semibold text-foreground"> creation</span>,
  <span className="font-semibold text-foreground"> renaming</span>,
  <span className="font-semibold text-foreground"> content updates</span>,
  <span className="font-semibold text-foreground"> save actions</span>,
  and
  <span className="font-semibold text-foreground"> deletions </span>
  are tracked as structured events within the collaborative session.
  Destructive actions such as deletions require
  <span className="font-semibold text-foreground"> multi-user voting </span>
  to prevent accidental data loss.
  All validated file events are first sent to the
  <span className="font-semibold text-foreground"> primary backend </span>,
  which broadcasts updates to all online clients and persists file data and state in the database.
  The same events are then forwarded to a
  <span className="font-semibold text-foreground"> secondary execution backend </span>,
  responsible for mirroring the changes onto disk storage used by the runtime environment.
  When a resource file is added, the asset is uploaded to
  <span className="font-semibold text-foreground"> cloudinary </span>,
  and only the resulting
  <span className="font-semibold text-foreground"> URL reference </span>
  is stored in the database.
  Upon detecting such references, the execution backend interprets the URL and
  <span className="font-semibold text-foreground"> downloads the resource dynamically </span>
  into disk storage, ensuring the runtime workspace remains fully synchronized
  without storing binary files directly in the database.
</p>

              </div>
            </div>

            {/* Feature 4: Live Preview & GUI Execution */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                04 — Live Preview & GUI Execution
              </h3>
              <FullBleed>
                <div className="flex items-start p-8 gap-6">
                  <div className="space-y-4">
                    <DemoVideo src="/DevSync/TerminalMain/TerminalPreview.mp4" size="xl" hoverSpeedUp={true} />
                    <div className="bg-card border border-border rounded-xl p-4">
                    <p className="text-muted-foreground leading-relaxed">
  Frontend preview in DevSync is handled through a
  <span className="font-semibold text-foreground"> secure proxy-based execution flow </span>
  managed by the secondary backend.
  For backend or custom servers running inside the workspace, the execution backend dynamically
  <span className="font-semibold text-foreground"> creates a proxy middleware </span>
  and exposes a preview URL.
  Any request made to this URL from the client is
  <span className="font-semibold text-foreground"> authenticated using a token </span>,
  interpreted by the execution backend, and transparently forwarded to the corresponding
  <span className="font-semibold text-foreground"> local server running inside the container </span>.
  For frontend frameworks such as Vite, the application is first
  <span className="font-semibold text-foreground"> built through the terminal </span>,
  after which the generated preview URL is invoked from the client.
  The execution backend then
  <span className="font-semibold text-foreground"> rewrites asset imports </span>
  within the build output and establishes a
  <span className="font-semibold text-foreground"> proxy middleware </span>
  to serve the application securely.
  All preview traffic is routed through authenticated proxy layers, ensuring isolated system
</p>

                    </div>
                  </div>
                  <div className="space-y-4">
                    <DemoVideo src="/DevSync/TerminalMain/TerminalGui.mp4" size="xl" hoverSpeedUp={true} />
                    <div className="bg-card border border-border rounded-xl p-4">
                    <p className="text-muted-foreground leading-relaxed">
  GUI sessions in DevSync are managed entirely by the
  <span className="font-semibold text-foreground"> secondary execution backend </span>,
  where each connected user is assigned a
  <span className="font-semibold text-foreground"> dedicated GUI port </span>
  to ensure isolated visual sessions.
  Upon connection, a
  <span className="font-semibold text-foreground"> virtual display </span>
  is initialized using
  <span className="font-semibold text-foreground"> Xvfb </span>,
  while supporting services such as
  <span className="font-semibold text-foreground"> Fluxbox </span>,
  <span className="font-semibold text-foreground"> x11vnc </span>,
  and
  <span className="font-semibold text-foreground"> noVNC </span>
  are launched alongside it.
  Fluxbox acts as the
  <span className="font-semibold text-foreground"> window manager </span>,
  and x11vnc streams raw display data over
  <span className="font-semibold text-foreground"> TCP </span>,
  which cannot be consumed directly by browsers.
  To bridge this gap, noVNC
  <span className="font-semibold text-foreground"> transforms the TCP stream into a WebSocket connection </span>.
  When a user runs a GUI application from the terminal, such as a Java-based program,
  access to the GUI endpoint first undergoes
  <span className="font-semibold text-foreground"> token authentication </span>,
  after which the TCP stream is WebSocket-ified and a
  <span className="font-semibold text-foreground"> virtual screen is rendered in the browser </span>,
  allowing users to interact with the application as if it were running locally.
</p>

                    </div>
                  </div>
                </div>
              </FullBleed>
            </div>

            {/* Feature 5: Built-in Team Chat */}

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                05 — Built-in Team Chat
              </h3>
              <SyncedVideos srcA="/DevSync/TeamChat/3sharing.mp4" srcB="/DevSync/TeamChat/3recevieng.mp4" size="xl" lazyLoad={true} />
              <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-muted-foreground leading-relaxed">
  DevSync includes an integrated
  <span className="font-semibold text-foreground"> team chat </span>
  and
  <span className="font-semibold text-foreground"> direct messaging </span>
  system designed for real-time collaboration.
  One-to-one conversations support
  <span className="font-semibold text-foreground"> read receipts </span>,
  allowing users to track message delivery and visibility.
  When a recipient is
  <span className="font-semibold text-foreground"> online </span>,
  incoming messages trigger an
  <span className="font-semibold text-foreground"> in-app chat toast </span>
  for immediate attention.
  If the user is
  <span className="font-semibold text-foreground"> offline </span>,
  messages are stored and delivered as
  <span className="font-semibold text-foreground"> notifications </span>
  upon reconnection, ensuring no communication is missed across collaborative sessions.
</p>

              </div>
            </div>

            {/* Feature 6: Git Repository Import */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
                06 — Git Repository Import
              </h3>
              <FullBleed>
                <div className="grid md:grid-cols-2 gap-6 items-start p-8">
                  <DemoVideo src="/DevSync/gitClone/gitCloneRepo.mp4" size="xl" vignette={true} vignetteIntensity="light" hoverSpeedUp={true} />
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
              </FullBleed>
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