import { Database, Cloud, Lock } from "lucide-react";
import { FeatureCard, FlowStep } from "../FeatureCard";
import { FolderSync } from "lucide-react";

export const FileSystemSyncDetail = () => (
    <div className="space-y-6">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <FolderSync className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-zinc-100">File Operation Pipeline</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          All file operations are tracked as structured events within the collaborative session. 
          Destructive actions require multi-user voting to prevent accidental data loss. 
          Events flow through primary backend for broadcasting and persistence, then to secondary backend for disk synchronization.
        </p>
      </div>
  
      <div>
        <h3 className="text-base font-bold text-zinc-100 mb-4">Synchronization Flow</h3>
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
          <FlowStep
            number={1}
            title="Event Tracking"
            description="File operations (create, rename, update, delete) tracked as structured events with multi-user voting for destructive actions"
            techs={["Event Tracking", "Multi-user Voting"]}
          />
          <FlowStep
            number={2}
            title="Primary Backend Broadcast"
            description="Validated events sent to primary backend which broadcasts to all clients and persists to database"
            techs={["WebSocket Broadcast", "Database Persistence"]}
          />
          <FlowStep
            number={3}
            title="Secondary Backend Mirroring"
            description="Events forwarded to execution backend to mirror changes onto disk storage used by runtime"
            techs={["Disk Sync", "Runtime Mirror"]}
          />
          <FlowStep
            number={4}
            title="Resource Handling"
            description="Binary assets uploaded to Cloudinary, only URL references stored in database, execution backend downloads dynamically"
            techs={["Cloudinary", "URL References", "Dynamic Download"]}
          />
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard 
          icon={Lock}
          title="Safe Deletions"
          description="Multi-user voting prevents accidental data loss from destructive operations"
        />
        <FeatureCard 
          icon={Database}
          title="State Persistence"
          description="File data and state persisted in database for recovery and history"
        />
        <FeatureCard 
          icon={Cloud}
          title="Cloud Assets"
          description="Binary resources stored in Cloudinary, downloaded dynamically by runtime"
        />
      </div>
    </div>
  );
  