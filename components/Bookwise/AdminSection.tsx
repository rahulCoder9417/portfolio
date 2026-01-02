import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
import { TechBadge } from "./TechBadge";
import { ImageSlider } from "./ImageSlider"
import { Users, Shield, BookPlus, Settings, Receipt } from "lucide-react";

export function AdminSection() {
  const sliderImages = [
    { src: "/Bookwise/adminMain.png", alt: "Admin dashboard with user management" },
    { src: "/Bookwise/admin1.png", alt: "Book management interface" },
    {src:"/Bookwise/admin2.png", alt:"Admin dashboard with user management"},
    {src:"/Bookwise/admin3.png", alt:"Admin dashboard with user management"},
    {src:"/Bookwise/admin4.png", alt:"Admin dashboard with user management"},
    {src:"/Bookwise/admin5.png", alt:"Admin dashboard with user management"},
    
    
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Slider - Left side */}
          <div className="relative order-2 lg:order-1 animate-slide-right delay-200">
            <ImageSlider images={sliderImages} className="project-glow" />
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 md:-right-8 px-4 py-2 rounded-lg bg-card border border-border shadow-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Admin Only</span>
              </div>
            </div>
          </div>
          
          {/* Content - Right side */}
          <div className="space-y-8 order-1 lg:order-2 animate-slide-left">
            <SectionHeader
              number="02"
              title="Admin Dashboard"
              subtitle="Complete administrative control with role-based access, user approval workflows, and comprehensive book inventory management."
            />
            
            <div className="flex flex-wrap gap-2">
              <TechBadge>Protected Routes</TechBadge>
              <TechBadge>ImageKit</TechBadge>
              <TechBadge>Server Actions</TechBadge>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={Users}
                title="User Management"
                description="Approve, revoke, or manage user accounts with detailed activity logs."
              />
              <FeatureCard
                icon={Shield}
                title="Access Control"
                description="Role-based permissions with admin-only routes and middleware protection."
              />
              <FeatureCard
                icon={BookPlus}
                title="Inventory Control"
                description="Add, edit, or remove books with cover uploads and metadata management."
              />
              <FeatureCard
                icon={Receipt}
                title="Recipt"
                description="Generate recipts for each Borrowing."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
