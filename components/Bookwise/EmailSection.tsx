import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
import { TechBadge } from "./TechBadge";
import { ImageSlider } from "./ImageSlider";
import { Mail, Bell, Calendar, AlertTriangle } from "lucide-react";


export function EmailSection() {
  const sliderImages = [
    { src: "/Bookwise/email1.png", alt: "Email automation dashboard" },
    { src: "/Bookwise/email2.png", alt: "Email templates and workflow" },
    { src: "/Bookwise/email3.png", alt: "Email templates and workflow" },
    { src: "/Bookwise/email4.png", alt: "Email templates and workflow" },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-right">
            <SectionHeader
              number="03"
              title="Email Automation"
              subtitle="Intelligent notification system with scheduled workflows, ensuring users stay informed about their library activities."
            />
            
            <div className="flex flex-wrap gap-2">
              <TechBadge>Nodemailer</TechBadge>
              <TechBadge>Upstash QStash</TechBadge>
              <TechBadge>Background Jobs</TechBadge>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={Mail}
                title="Welcome Emails"
                description="Automated onboarding emails on user registration and account approval."
              />
              <FeatureCard
                icon={Bell}
                title="Sign-in Alerts"
                description="Security notifications for new sign-ins with device and location info."
              />
              <FeatureCard
                icon={Calendar}
                title="Due Date Reminders"
                description="Scheduled reminders 2 days before and on the due date of borrowed books."
              />
              <FeatureCard
                icon={AlertTriangle}
                title="Overdue Notices"
                description="Automatic Email Send on Overdue"
              />
            </div>
            
            {/* Workflow diagram */}
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Workflow Pipeline</h4>
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
                {["Trigger", "QStash", "Process", "WorkflowStart", "SendEmail"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-mono text-primary">
                        {i + 1}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{step}</span>
                    </div>
                    {i < 4 && (
                      <div className="w-8 h-px bg-gradient-to-r from-primary/50 to-primary/20 animate-slide-indicator" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Slider */}
          <div className="relative animate-slide-left delay-200">
            <ImageSlider images={sliderImages} className="project-glow" />
            {/* Floating stats */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 px-4 py-3 rounded-lg bg-card border border-border shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold project-gradient-text">99.9%</div>
                <div className="text-xs text-muted-foreground">Delivery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
