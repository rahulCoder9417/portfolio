import { cn } from "@/lib/utils";

interface FeatureBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureBadge({ children, className }: FeatureBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium project-font-mono",
        "bg-secondary border border-border rounded-full",
        "text-muted-foreground hover:text-foreground hover:border-primary/50",
        "transition-colors duration-200",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-project-glow" />
      {children}
    </span>
  );
}


export const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-0.5 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium">
    {children}
  </span>
);
