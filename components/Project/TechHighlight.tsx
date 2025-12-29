import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TechHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function TechHighlight({ icon: Icon, title, description, className }: TechHighlightProps) {
  return (
    <div
      className={cn(
        "group p-5 rounded-xl bg-card border border-border",
        "hover:border-primary/30 hover:bg-surface-elevated",
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
