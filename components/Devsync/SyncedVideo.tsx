"use client";

import { useEffect, useRef, useState } from "react";
import { DemoVideo } from "./DemoVideo";
import { cn } from "@/lib/utils";
import { FullBleed } from "./MaxWidth";

export function SyncedVideos({
  srcA,
  srcB,
  size = "lg",
  lazyLoad = true, // New prop
}: {
  srcA: string;
  srcB: string;
  size?: "sm" | "md" | "lg" | "xl";
  lazyLoad?: boolean;
}) {
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);
  const syncIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isInView, setIsInView] = useState(!lazyLoad);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading the pair
  useEffect(() => {
    if (!lazyLoad || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [lazyLoad]);

  useEffect(() => {
    // Only sync if in view or not lazy loading
    if (!isInView && lazyLoad) return;

    const videos = [leftRef.current, rightRef.current].filter(Boolean) as HTMLVideoElement[];
    if (videos.length !== 2) return;

    let loadedCount = 0;
    const handlersAdded = new Set<HTMLVideoElement>();

    const handleCanPlay = () => {
      loadedCount++;
      if (loadedCount === videos.length) {
        // Reset both videos to start
        videos.forEach(v => {
          v.currentTime = 0;
        });

        // Start playing with a slight delay to ensure sync
        setTimeout(() => {
          Promise.all(videos.map(v => v.play().catch(() => {})))
            .then(() => {
              // Set up periodic sync check with longer interval
              syncIntervalRef.current = setInterval(() => {
                const [left, right] = videos;
                
                // Only sync if both videos are actually playing
                if (left.paused || right.paused) return;
                
                const timeDiff = Math.abs(left.currentTime - right.currentTime);
                
                // If videos drift apart by more than 0.2 seconds, resync
                if (timeDiff > 0.2) {
                  const targetTime = Math.max(left.currentTime, right.currentTime);
                  videos.forEach(v => {
                    v.currentTime = targetTime;
                  });
                }
              }, 2000); // Check every 2 seconds instead of 1 (less CPU usage)
            });
        }, 100);
      }
    };

    videos.forEach(v => {
      if (v.readyState >= 3) {
        handleCanPlay();
      } else {
        v.addEventListener("canplay", handleCanPlay, { once: true });
        handlersAdded.add(v);
      }
    });

    return () => {
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
      }
      handlersAdded.forEach(v => {
        v.removeEventListener("canplay", handleCanPlay);
      });
    };
  }, [isInView, lazyLoad]);

  return (
    <FullBleed>
      <div 
        ref={containerRef}
        className="flex gap-8 items-start justify-center p-8"
      >
        <DemoVideo 
          ref={leftRef} 
          src={srcA} 
          size={size} 
          lazyLoad={false} // Don't double lazy load
          priority={!lazyLoad} // If parent isn't lazy loading, these should be priority
        />
        <DemoVideo 
          ref={rightRef} 
          src={srcB} 
          size={size} 
          lazyLoad={false}
          priority={!lazyLoad}
        />
      </div>
    </FullBleed>
  );
}