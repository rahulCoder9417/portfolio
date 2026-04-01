import { Briefcase, Calendar, MapPin } from "lucide-react";
import { config } from "@/utils/config";

const experiences = config.experience;
const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-left space-y-4">
          <span className="text-sm uppercase tracking-widest text-primary">
            Career Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-bold">
            My Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative md:pl-16 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-2 hidden md:flex items-center justify-center">
                <span
                  className={`h-4 w-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary shadow-glow"
                      : "bg-card border-border"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card hover:border-primary/30 transition-all duration-300">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <span className="h-2 w-2 mt-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
