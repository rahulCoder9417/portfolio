"use client";

import { useState, forwardRef } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoVideoProps {
  src: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  className?: string;
}

export const DemoVideo = forwardRef<HTMLVideoElement, DemoVideoProps>(
  ({ src, size = "md", priority = false, className }, ref) => {
    const [showPlay, setShowPlay] = useState(false);

    const sizeClasses = {
      sm: "max-w-[420px]",
      md: "max-w-[640px]",
      lg: "max-w-[860px]",
      xl: "max-w-[1200px]",
    };

    return (
      <div
        className={cn(
          "relative w-full aspect-video overflow-hidden rounded-xl",
          "bg-black border border-border shadow-card",
          sizeClasses[size],
          className
        )}
      >
        <video
          ref={ref}
          src={src}
          muted
          autoPlay
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => {
            // Show play icon
            setShowPlay(true);

            // Allow one frame to render before hiding again
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setShowPlay(false);
              });
            });
          }}
        />

        {showPlay && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="
              flex items-center justify-center
              w-14 h-14 rounded-full
              bg-primary/20 border border-primary/40
              backdrop-blur-sm
              animate-fade-in
            ">
              <Play className="w-6 h-6 text-primary ml-0.5" />
            </div>
          </div>
        )}
      </div>
    );
  }
);

DemoVideo.displayName = "DemoVideo";
