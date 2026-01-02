import { SectionHeader } from "./SectionHeader"
import { FeatureCard } from "./FeatureCard";
import { TechBadge } from "./TechBadge";
import { Search, BookOpen, RotateCcw, CheckCircle } from "lucide-react";

export function LibrarySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-right">
            <SectionHeader
              number="01"
              title="Library Experience"
              subtitle="An intuitive interface designed for seamless book discovery, borrowing, and management with real-time availability tracking."
            />
            
            <div className="flex flex-wrap gap-2">
              <TechBadge>Next.js</TechBadge>
              <TechBadge>NextAuth.js</TechBadge>
              <TechBadge>Drizzle</TechBadge>
              <TechBadge>ImageKit</TechBadge>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={Search}
                title="Smart Search"
                description="Full-text search with filters for genre, author, and availability status."
              />
              <FeatureCard
                icon={BookOpen}
                title="Book Borrowing"
                description="One-click borrowing with automatic due date assignment and notifications."
              />
              <FeatureCard
                icon={RotateCcw}
                title="Easy Returns"
                description="Streamlined return process with overdue tracking ."
              />
              <FeatureCard
                icon={CheckCircle}
                title="Eligibility Check"
                description="Real-time verification of borrowing limits and account standing."
              />
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-left delay-200">
            <div className="project-image-container project-glow">
              <img 
                src={"/Bookwise/library.png"} 
                alt="BookWise library interface showing book catalog" 
                className="w-full"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 px-4 py-2 rounded-lg bg-card border border-border shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Many Books Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
