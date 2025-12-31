import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, className, align = "left" }: SectionTitleProps) {
  return (
    <div className={cn(
      "space-y-2 mb-10",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
