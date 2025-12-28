import { config } from "@/utlis/config";
import FeaturedProject from "./FeaturedProject";
import ProjectCardSmall from "./ProjectCardSmall";
const featuredProject =config.FeaturedProject
const SecondaryProject = config.SecondaryProject
const ThirdProject = config.ThirdProject

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
      
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-bold">
            Projects
          </h2>
          
        </div>

        {/* Featured Project */}
        <FeaturedProject {...featuredProject} />
        <FeaturedProject {...SecondaryProject} />
        <FeaturedProject {...ThirdProject} />

      </div>
    </section>
  );
};

export default Projects;
