import React from 'react'
import { SectionTitle } from '../SectionTitle'

import { Code2 } from 'lucide-react'
import { FileCode } from 'lucide-react'
import { Users } from 'lucide-react'
import { Layers } from 'lucide-react'
import { Zap } from 'lucide-react'
import { TerminalExecutionDetail } from './TerminalExecutionDetail'
import { DemoVideo } from '../DemoVideo'
import { SyncedVideos } from '../SyncedVideo'
import { FeatureCard } from '../FeatureCard'
import { TechBadge } from '../FeatureBadge'
import { FullBleed } from '../MaxWidth'
import { FileSystemSyncDetail } from './FileSystemSync'
import { GUIExecutionDetail } from './GuiExecution'
import { LivePreviewDetail } from './LivePreview'
import { TeamChatDetail } from './TeamChat'
import { GitImportDetail } from './GitImport'

const DevSyncAbout = () => {
  return (
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
          <SyncedVideos srcA="/DevSync/videos/CodeSharing/1sharing.mp4" srcB="/DevSync/videos/CodeSharing/1recieving.mp4" size="xl" lazyLoad={false} />

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-zinc-100">Synchronization Engine</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Real-time code synchronization forms the foundation of DevSync's collaborative engine.
              Multiple users can work on the same file in parallel, with consistent, conflict-free document state
              eliminating refreshes, locks, and manual coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              icon={FileCode}
              title="Code Changes Streaming"
              description="Code modifications are streamed instantly to all connected clients as users type"
            />
            <FeatureCard
              icon={Users}
              title="Context Preservation"
              description="Cursor positions, text selections, and scroll state continuously synchronized"
            />
            <FeatureCard
              icon={Layers}
              title="Parallel Editing"
              description="Multiple users work simultaneously with automatic conflict resolution"
            />
            <FeatureCard
              icon={Zap}
              title="Zero Latency"
              description="Instant propagation without manual refreshes or coordination overhead"
            />
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-orange-400" />
              <h3 className="text-base font-bold text-zinc-100">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <TechBadge>WebSocket</TechBadge>
              <TechBadge>CRDT</TechBadge>
              <TechBadge>Operational Transform</TechBadge>
              <TechBadge>Yjs</TechBadge>
            </div>
          </div>
        </div>

        {/* Feature 2: Integrated Terminal Execution */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
            02 — Integrated Terminal Execution
          </h3>
          <FullBleed>
            <div className="flex items-start p-8 gap-6">
              <DemoVideo src="/DevSync/videos/TerminalBasic/TerminalBasicOp.mp4" size="xl" hoverSpeedUp={true} />


              <DemoVideo src="/DevSync/videos/TerminalBasic/TerminalStaticWebsite.mp4" size="xl" hoverSpeedUp={true} />

            </div>
          </FullBleed>
          <TerminalExecutionDetail />
        </div>

        {/* Feature 3: File System Synchronization */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
            03 — File System Synchronization
          </h3>
          <SyncedVideos srcA="/DevSync/videos/FileCrud/2sharing.mp4" srcB="/DevSync/videos/FileCrud/2recevieng.mp4" size="xl" lazyLoad={true} />
          <FileSystemSyncDetail />
        </div>

        {/* Feature 4: GUI Execution */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
            04 — GUI Execution
          </h3>
          <FullBleed>
            <div className="space-y-4 flex flex-col items-center justify-center">
              <DemoVideo src="/DevSync/videos/TerminalMain/TerminalGui1.mp4" size="xl" hoverSpeedUp={true} />
              <GUIExecutionDetail />
            </div>

          </FullBleed>
        </div>
        {/* feature 5 Live preview */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
            05 — Live Preview
          </h3>
          <FullBleed>
            <div className="space-y-4 flex flex-col items-center justify-center">
              <DemoVideo src="/DevSync/videos/TerminalMain/TerminalPreview1.mp4" size="xl" hoverSpeedUp={true} />
              <LivePreviewDetail />
            </div>
          </FullBleed>
        </div>
        {/* Feature 6: Built-in Team Chat */}

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
            06 — Built-in Team Chat
          </h3>
          <SyncedVideos srcA="/DevSync/videos/TeamChat/3sharing.mp4" srcB="/DevSync/videos/TeamChat/3recevieng.mp4" size="xl" lazyLoad={true} />

          <TeamChatDetail />
        </div>

        {/* Feature 7: Git Repository Import */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground project-font-mono tracking-wide">
            07 — Git Repository Import
          </h3>
          <FullBleed>
            <div className="flex gap-6 flex-col  items-center justify-center p-8">
              <DemoVideo src="/DevSync/videos/gitClone/gitClone.mp4" size="xl" vignette={true} vignetteIntensity="light" hoverSpeedUp={true} />
              <GitImportDetail />
            </div>
          </FullBleed>
        </div>
      </div>
    </div>
  )
}

export default DevSyncAbout
