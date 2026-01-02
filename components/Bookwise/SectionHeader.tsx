import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeader({ number, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-4">
        <span className="project-number-badge">{number}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="project-gradient-text">{title}</span>
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
}
