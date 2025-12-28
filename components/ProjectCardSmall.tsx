"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardSmallProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectCardSmall = ({
  title,
  category,
  description,
  imageUrl,
  tags,
}: ProjectCardSmallProps) => {
  return (
    <div
      className="
        group
        h-full
        rounded-2xl
        border border-border
        bg-card
        overflow-hidden
        transition-all duration-300
        hover:border-primary/40
      "
    >
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-64rem)]">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {category}
        </span>

        <h4 className="mt-2 font-heading text-xl font-semibold text-foreground">
          {title}
        </h4>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">
          <button
            className="
              inline-flex items-center gap-2
              cursor-pointer
              text-sm font-medium
              text-muted-foreground
              border border-border
              rounded-lg
              px-4 py-2
              transition-all
              group-hover:text-primary
              group-hover:border-primary/50
            "
          >
            Know more
           <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSmall;
