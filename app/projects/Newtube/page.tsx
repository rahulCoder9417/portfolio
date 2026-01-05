import {HeroSection} from "@/components/Newtube/HeroSection";
import FeaturesContainer from "@/components/Newtube/FeatureContainer";
import ProjectFooter from "@/components/ProjectFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <div className="project-section-divider" />
     <FeaturesContainer  />
     <div className="project-section-divider" />
     <ProjectFooter githubLink="3-Newtube" />
    </main>
  );
};

export default Index;
