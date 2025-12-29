"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectProps {
  title: string;
  category: string;
  isFeatured: boolean;
  description: string;
  imageUrl: string;
  highlights: string[];
  tags: string[];
}

const FeaturedProject = ({
  title,
  category,
  isFeatured,
  description,
  imageUrl,
  highlights,
  tags,
}: FeaturedProjectProps) => {
  return (
    <section className="rounded-2xl bg-card border border-primary/30 shadow-glow overflow-hidden">

      {/* ================= Image (BIG, NO GAPS) ================= */}
      <div className="relative w-full aspect-[16/9] bg-black">
      <Image
  src={imageUrl}
  alt={title}
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 1200px"
  className="
    object-cover
    saturate-125
    contrast-110
    brightness-105
  "
/>


        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

        {/* Category badge */}
     { isFeatured && <span className="absolute bottom-3 right-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
          Featured Project
        </span>}
      </div>

      {/* ================= Content ================= */}
      <div className="p-10 grid lg:grid-cols-3 gap-10">

        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-heading text-3xl md:text-4xl font-bold">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-lg">
            {description}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href={"/projects/"+title}
              className="
                group inline-flex items-center gap-3
                rounded-xl px-8 py-4
                bg-primary text-primary-foreground
                font-semibold tracking-wide
                shadow-glow
                transition-all duration-300
                hover:scale-[1.05]
                hover:shadow-[0_0_80px_hsl(var(--primary)/0.35)]
              "
            >
              <span>Explore the system</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Side panel */}
        <div className="space-y-6">

          {/* Highlights */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {highlights.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-glow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (

                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
