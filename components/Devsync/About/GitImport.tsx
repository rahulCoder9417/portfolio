import { GitBranch } from "lucide-react";
import { FlowStep } from "../FeatureCard";
import { FeatureCard } from "../FeatureCard";
import { TechBadge } from "../FeatureBadge";
import { Cloud } from "lucide-react";
import { Zap } from "lucide-react";

export const GitImportDetail = () => (
    <div className="space-y-6 max-w-5xl">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-zinc-100">Repository Import Pipeline</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          SSE-driven workflow executes on primary backend for importing external repositories. 
          Pipeline handles authentication, downloads archives, extracts in memory with size enforcement, 
          and selectively persists source files while uploading binaries to cloud storage.
        </p>
      </div>
  
      <div>
        <h3 className="text-base font-bold text-zinc-100 mb-4">Import Flow</h3>
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
          <FlowStep
            number={1}
            title="Authentication & Download"
            description="Validate credentials, resolve target folder, download repository archive from source"
            techs={["Auth Validation", "Archive Download"]}
          />
          <FlowStep
            number={2}
            title="In-Memory Extraction"
            description="Extract archive in memory with size constraint enforcement before processing"
            techs={["Memory Extraction", "Size Limits"]}
          />
          <FlowStep
            number={3}
            title="Selective Persistence"
            description="Source files stored as database records, binary resources uploaded to cloud storage"
            techs={["Database Storage", "Cloud Upload"]}
          />
          <FlowStep
            number={4}
            title="Progress Streaming"
            description="SSE events stream incremental progress to Next.js client, project available without reload"
            techs={["SSE", "Real-time Updates"]}
          />
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard 
          icon={GitBranch}
          title="Repository Support"
          description="Import from GitHub, GitLab, and other Git hosting platforms"
        />
        <FeatureCard 
          icon={Cloud}
          title="Smart Storage"
          description="Source code in database, binary assets in cloud with URL references"
        />
        <FeatureCard 
          icon={Zap}
          title="Live Progress"
          description="SSE streaming provides real-time import status without page refresh"
        />
      </div>
  
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          <h3 className="text-base font-bold text-zinc-100">Technology Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <TechBadge>Server-Sent Events</TechBadge>
          <TechBadge>Archive Extraction</TechBadge>
          <TechBadge>Cloud Storage</TechBadge>
          <TechBadge>Next.js Client</TechBadge>
        </div>
      </div>
    </div>
  );