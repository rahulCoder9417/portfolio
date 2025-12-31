import { Monitor } from "lucide-react";
import { FlowStep } from "../FeatureCard";

export const LivePreviewDetail = () => (
    <div className="space-y-6 max-w-5xl">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Monitor className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-zinc-100">Preview Architecture</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Frontend preview handled through secure proxy-based execution flow. Backend servers get dynamic 
          proxy middleware with token authentication. Frontend frameworks like Vite are built and served 
          with rewritten asset imports through authenticated proxy layers.
        </p>
      </div>
  
      <div>
        <h3 className="text-base font-bold text-zinc-100 mb-4">Preview Flow</h3>
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
          <FlowStep
            number={1}
            title="Proxy Creation"
            description="Execution backend creates proxy middleware for servers running inside container workspace"
            techs={["Proxy Middleware", "Dynamic Routing"]}
          />
          <FlowStep
            number={2}
            title="Token Authentication"
            description="All preview URL requests authenticated via token before forwarding to local container server"
            techs={["Token Auth", "Security Layer"]}
          />
          <FlowStep
            number={3}
            title="Frontend Build"
            description="Vite apps built through terminal, execution backend rewrites asset imports in build output"
            techs={["Vite", "Asset Rewriting"]}
          />
          <FlowStep
            number={4}
            title="Secure Serving"
            description="All traffic routed through authenticated proxy layers ensuring isolated system access"
            techs={["Proxy Layer", "Isolation"]}
          />
        </div>
      </div>
    </div>
  );
  
  