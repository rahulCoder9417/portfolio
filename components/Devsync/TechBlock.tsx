interface TechBlockProps {
    title: string;
    items: string[];
  }
  
export  function TechBlock({ title, items }: TechBlockProps) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 hover:bg-muted/40 transition">
        <h3 className="font-semibold text-lg mb-4">
          {title}
        </h3>
  
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-md bg-muted text-sm text-muted-foreground project-font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }
  