import React from 'react'

const Basic = () => {
  return (
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
  )
}

export default Basic
