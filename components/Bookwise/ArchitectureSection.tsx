import { SectionHeader } from "./SectionHeader";
import { TechBadge } from "./TechBadge";
import { Database, Server, Globe, Lock, Zap, Cloud } from "lucide-react";

export function ArchitectureSection() {
  const layers = [
    {
      title: "Client Layer",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      items: ["Next.js 15 App Router", "React Server Components", "NextAuth.js Sessions"],
    },
    {
      title: "API Layer",
      icon: Server,
      color: "from-primary to-accent",
      items: ["Server Actions", "API Routes", "Middleware Protection"],
    },
    {
      title: "Service Layer",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      items: ["Upstash QStash", "Nodemailer", "Background Jobs"],
    },
    {
      title: "Data Layer",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      items: ["Neon PostgreSQL", "Drizzle ORM", "Type-safe Queries"],
    },
    {
      title: "Cache Layer",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      items: ["Upstash Redis", "Session Storage", "Rate Limit State"],
    },
    {
      title: "Security Layer",
      icon: Lock,
      color: "from-red-500 to-rose-500",
      items: ["JWT Tokens", "NextAuth.js Sessions","IP Blocking"],
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeader
            number="05"
            title="System Architecture"
            subtitle="A modular, scalable architecture built for production workloads with clear separation of concerns."
            className="text-center mx-auto"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 hover:glow-subtle animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${layer.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                  <layer.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{layer.title}</h3>
              </div>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Tech stack summary */}
        <div className="mt-16 p-8 rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card/40">
          <h4 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Complete Tech Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js ",
              "TypeScript",
              "NextAuth.js",
              "Neon PostgreSQL",
              "Drizzle ORM",
              "Upstash Redis",
              "Upstash QStash",
              "ImageKit",
              "Nodemailer",
              "Tailwind CSS",
              "Shadcn/ui",
            ].map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
