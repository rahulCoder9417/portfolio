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
