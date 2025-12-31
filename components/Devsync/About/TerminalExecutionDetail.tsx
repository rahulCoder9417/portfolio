import { Cpu, Network, Terminal } from "lucide-react";
import { FeatureCard, FlowStep } from "../FeatureCard";

export const TerminalExecutionDetail = () => (
    <div className="space-y-6">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-zinc-100">Execution Architecture</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          DevSync's terminal runs inside isolated Docker containers, providing real execution environments 
          . All terminal events are streamed bidirectionally over WebSocket 
          connections, ensuring low-latency command execution and seamless synchronization.
        </p>
      </div>
  
      <div>
        <h3 className="text-base font-bold text-zinc-100 mb-4">Execution Flow</h3>
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
          <FlowStep
            number={1}
            title="Container Isolation"
            description="Each workspace runs isolated, which is Synced with Client Browser"
            techs={["Docker"]}
          />
          <FlowStep
            number={2}
            title="Terminal Interface"
            description="Client uses xterm for rendering, server uses node-pty for shell session management"
            techs={["xterm", "node-pty", "PTY"]}
          />
          <FlowStep
            number={3}
            title="Bidirectional Streaming"
            description="Input and output streamed over WebSocket with real-time synchronization across all users"
            techs={["WebSocket", "Real-time Sync"]}
          />
          <FlowStep
            number={4}
            title="Static File Serving"
            description="Projects exposed through /project/{projectId} routes, serving HTML/CSS/JS as static assets"
            techs={["Static Routing", "Asset Serving"]}
          />
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard    
          icon={Cpu}
          title="Persistent Storage"
          description="DB storage preserves files, dependencies, and build artifacts across sessions"
        />
        <FeatureCard 
          icon={Network}
          title="Low-Latency I/O"
          description="WebSocket-based streaming ensures instant command execution and output display"
        />
      </div>
    </div>
  );
  