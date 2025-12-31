import { Monitor, Network, Lock, Cpu, Layers, Zap } from "lucide-react";
import { FlowStep } from "../FeatureCard";
import { FeatureCard } from "../FeatureCard";
import { TechBadge } from "../FeatureBadge";


export
const GUIExecutionDetail = () => (
  <div className="space-y-6 max-w-5xl">
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-orange-400" />
        <h3 className="text-lg font-bold text-zinc-100">GUI Session Management</h3>
      </div>
      <p className="text-sm text-zinc-300 leading-relaxed">
        GUI sessions managed by secondary execution backend where each user gets a dedicated GUI port 
        for isolated visual sessions. Virtual displays initialized with Xvfb, with VNC streams converted 
        to WebSocket connections for browser compatibility.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FeatureCard 
        icon={Monitor}
        title="Virtual Display"
        description="Xvfb creates isolated virtual display for each user with dedicated GUI port"
      />
      <FeatureCard 
        icon={Network}
        title="Stream Conversion"
        description="noVNC transforms x11vnc TCP streams into WebSocket connections"
      />
      <FeatureCard 
        icon={Lock}
        title="Secure Access"
        description="Token authentication required before GUI endpoint access granted"
      />
      <FeatureCard 
        icon={Cpu}
        title="Window Management"
        description="Fluxbox provides lightweight window management for GUI applications"
      />
    </div>

    <div>
      <h3 className="text-base font-bold text-zinc-100 mb-4">GUI Execution Flow</h3>
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
        <FlowStep
          number={1}
          title="Port Assignment"
          description="Each connected user assigned dedicated GUI port with isolated session management"
          techs={["Port Allocation", "Session Isolation"]}
        />
        <FlowStep
          number={2}
          title="Display Initialization"
          description="Virtual display created via Xvfb with Fluxbox window manager and x11vnc streaming"
          techs={["Xvfb", "Fluxbox", "x11vnc"]}
        />
        <FlowStep
          number={3}
          title="Protocol Bridge"
          description="x11vnc streams over TCP, noVNC converts to WebSocket for browser compatibility"
          techs={["TCP", "noVNC", "WebSocket"]}
        />
        <FlowStep
          number={4}
          title="Browser Rendering"
          description="After token auth, virtual screen renders in browser enabling real-time GUI interaction"
          techs={["Token Auth", "Browser Rendering"]}
        />
      </div>
    </div>

    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-orange-400" />
        <h3 className="text-base font-bold text-zinc-100">Technology Stack</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <TechBadge>Xvfb</TechBadge>
        <TechBadge>Fluxbox</TechBadge>
        <TechBadge>x11vnc</TechBadge>
        <TechBadge>noVNC</TechBadge>
        <TechBadge>WebSocket</TechBadge>
        <TechBadge>TCP Streaming</TechBadge>
      </div>
    </div>
  </div>
);
