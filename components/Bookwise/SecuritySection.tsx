import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
import { TechBadge } from "./TechBadge";
import { Shield, Ban, Clock, Activity } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Left side */}
          <div className="relative order-2 lg:order-1 animate-slide-right delay-200">
            <div className="project-image-container project-glow">
              <img 
                src={"/Bookwise/rateLimit.png"} 
                alt="Security dashboard with rate limiting and threat monitoring" 
                className="w-full"
              />
            </div>
            {/* Floating security indicator */}
            <div className="absolute -top-4 -left-4 md:-left-8 px-4 py-3 rounded-lg bg-card border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Protected</div>
                  <div className="text-xs text-muted-foreground">All systems secure</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content - Right side */}
          <div className="space-y-8 order-1 lg:order-2 animate-slide-left">
            <SectionHeader
              number="04"
              title="Security & Protection"
              subtitle="Enterprise-grade security with intelligent abuse prevention, ensuring system stability and protecting against malicious actors."
            />
            
            <div className="flex flex-wrap gap-2">
              <TechBadge>Upstash Redis</TechBadge>
              <TechBadge>Rate Limiting</TechBadge>
              <TechBadge>IP Blocking</TechBadge>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={Clock}
                title="Rate Limiting"
                description="IP-based request throttling to prevent API abuse and DDoS attacks."
              />
              <FeatureCard
                icon={Ban}
                title="Temporary Bans"
                description="Automatic temporary blocks for suspicious activity patterns."
              />
              <FeatureCard
                icon={Activity}
                title="Force Routing"
                description="Force routing to too-fast ."
              />
              <FeatureCard
                icon={Shield}
                title="Secure Sessions"
                description="JWT-based authentication with secure cookie handling with NextAuth."
              />
            </div>
            
            {/* Security stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<50ms", label: "Latency" },
                { value: "0", label: "Breaches" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-lg border border-border bg-card/50">
                  <div className="text-2xl font-bold project-gradient-text">{value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
