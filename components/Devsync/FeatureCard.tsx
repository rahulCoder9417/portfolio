import { TechBadge } from "./FeatureBadge";

export const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-orange-500/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      <div className="relative flex gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
          <Icon className="w-5 h-5 text-orange-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-zinc-100 mb-1">{title}</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
  
  
    export const FlowStep = ({ number, title, description, techs }: { number: number, title: string, description: string, techs?: string[] }) => (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center text-orange-400 font-bold text-sm">
          {number}
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent mt-2" />
      </div>
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-orange-500/20 transition-colors">
        <h4 className="text-sm font-semibold text-zinc-100 mb-2">{title}</h4>
        <p className="text-xs text-zinc-400 leading-relaxed mb-3">{description}</p>
        {techs && (
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <TechBadge key={i}>{tech}</TechBadge>
            ))}
          </div>
        )}
      </div>
    </div>
  );