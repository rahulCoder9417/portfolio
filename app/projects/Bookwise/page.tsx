import { HeroSection } from "@/components/Bookwise/HeroSection";
import { LibrarySection } from "@/components/Bookwise/LibrarySection";
import { AdminSection } from "@/components/Bookwise/AdminSection";
import { EmailSection } from "@/components/Bookwise/EmailSection";
import { SecuritySection } from "@/components/Bookwise/SecuritySection";
import { ArchitectureSection } from "@/components/Bookwise/ArchitectureSection";
import { CreditsSection } from "@/components/Bookwise/CreditSection";
import ProjectFooter from "@/components/ProjectFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="project-section-divider" />
     <LibrarySection />
     <div className="project-section-divider" />
   <AdminSection />
   <div className="project-section-divider" />
       <EmailSection />
       <div className="project-section-divider" />
       <SecuritySection />
       <div className="project-section-divider" />
  <ArchitectureSection />
  <div className="project-section-divider" />
  <CreditsSection />
  <div className="project-section-divider" />
   <ProjectFooter githubLink="library" />
    </main>
  );
};

export default Index;
