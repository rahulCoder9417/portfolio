import { cn } from "@/lib/utils";

interface ArchitectureDiagramProps {
  className?: string;
}

export function ArchitectureDiagram({ className }: ArchitectureDiagramProps) {
  return (
    <div
      className={cn(
        "w-full aspect-[21/9] rounded-xl bg-surface-overlay border border-border",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-8">
          {/* Client */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center">
              <span className="text-xs project-font-mono text-muted-foreground">Client</span>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="w-12 h-px bg-gradient-to-r from-border to-primary/50" />
          
          {/* WebSocket */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-xs project-font-mono text-primary">WebSocket</span>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-border" />
          
          {/* Server */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center">
              <span className="text-xs project-font-mono text-muted-foreground">Server</span>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="w-12 h-px bg-border" />
          
          {/* Docker */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center">
              <span className="text-xs project-font-mono text-muted-foreground">Docker</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Label */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-50">
        <span className="text-xs project-font-mono text-muted-foreground">architecture-overview.svg</span>
      </div>
    </div>
  );
}
