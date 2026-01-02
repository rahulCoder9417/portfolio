import { Youtube, ExternalLink, Code, Mail, Shield, Play } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function CreditsSection() {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Origin Story */}

          <div className="text-center space-y-6 mb-12">
            <Link href={"https://www.youtube.com/watch?v=EZajJGOMWas"} target="_blank">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20">
              <Youtube className="w-5 h-5 text-[#EF4444]" />
              <span className="text-sm font-medium text-[#EF4444]">Extended from Tutorial</span>
            </div>
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold mt-5">
              <span className="project-gradient-text">Built Beyond the Basics</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This project is a continuation from a YouTube tutorial. The free version only covered 
              the <span className="text-foreground font-medium">user-side library</span> and{" "}
              <span className="text-foreground font-medium">NextAuth integration</span>.Below Funtions are implemented By me.
            </p>
          </div>

          {/* My Contributions */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Admin Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Complete admin panel with user management and book controls
              </p>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Email Workflows</h3>
              <p className="text-sm text-muted-foreground">
                Automated email system with QStash background jobs
              </p>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Overdue Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Smart reminder emails for overdue book returns
              </p>
            </div>
          </div>

          {/* Test Credentials */}
          <div className="p-6 rounded-xl bg-surface-elevated border border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-2">Want to explore the admin panel?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sign in with these credentials to gain admin access:
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Email:</span>
                    <code className="px-2 py-1 rounded bg-muted text-foreground font-mono">10@10.com</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Password:</span>
                    <code className="px-2 py-1 rounded bg-muted text-foreground font-mono">1234567890</code>
                  </div>
                </div>
              </div>
              
              <Link href={"https://library-beta-seven.vercel.app/"} target="_blank">
           <Button
             variant="glow"
             size="default"
             className="project-font-mono font-bold"
           >
             <Play className="w-4 h-4" />
             Try It Out
           </Button>
         </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
