"use client";

import { useState, forwardRef, useEffect, useRef, useCallback } from "react";
import { RotateCcw, FastForward } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoVideoProps {
  src: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  className?: string;
  onLoop?: () => void;
  lazyLoad?: boolean;
  vignette?: boolean;
  vignetteIntensity?: "light" | "medium" | "heavy";
  hoverSpeedUp?: boolean;
  speedLevels?: number[];
  cycleSpeed?: boolean; // New: whether to cycle back to 1x or stay at max
}

export const DemoVideo = forwardRef<HTMLVideoElement, DemoVideoProps>(
  ({ 
    src, 
    size = "md", 
    priority = false, 
    className, 
    onLoop, 
    lazyLoad = true,
    vignette = true,
    vignetteIntensity = "light",
    hoverSpeedUp = false,
    speedLevels = [1, 1.5, 2, 3],
    cycleSpeed = false // Default: stay at max speed
  }, ref) => {
    const [isLooping, setIsLooping] = useState(false);
    const [isInView, setIsInView] = useState(!lazyLoad);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [currentSpeedIndex, setCurrentSpeedIndex] = useState(0);
    const [showHint, setShowHint] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const sizeClasses = {
      sm: "max-w-[420px]",
      md: "max-w-[640px]",
      lg: "max-w-[860px]",
      xl: "max-w-[1200px]",
    };

    const vignetteStyles = {
      light: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.3) 100%)",
      medium: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.5) 100%)",
      heavy: "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.7) 100%)",
    };

    // Combine refs
    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(videoRef.current);
        } else {
          ref.current = videoRef.current;
        }
      }
    }, [ref]);

    // Intersection Observer for lazy loading
    useEffect(() => {
      if (!lazyLoad || !containerRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasLoaded) {
              setIsInView(true);
              setHasLoaded(true);
            }
          });
        },
        {
          rootMargin: "200px",
          threshold: 0.1,
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, [lazyLoad, hasLoaded]);

    // Cleanup timeouts on unmount
    useEffect(() => {
      return () => {
        if (loopTimeoutRef.current) {
          clearTimeout(loopTimeoutRef.current);
        }
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      };
    }, []);

    const handleMouseEnter = useCallback(() => {
      if (!hoverSpeedUp) return;
      setIsHovering(true);
      setShowHint(false); // Hide hint once user hovers
    }, [hoverSpeedUp]);

    const handleMouseLeave = useCallback(() => {
      if (!hoverSpeedUp) return;
      setIsHovering(false);
      setCurrentSpeedIndex(0);
      if (videoRef.current) {
        videoRef.current.playbackRate = speedLevels[0];
      }
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setShowHint(true); // Show hint again when mouse leaves
    }, [hoverSpeedUp, speedLevels]);

    // Speed cycling effect
    useEffect(() => {
      if (!hoverSpeedUp || !isHovering) return;

      const maxIndex = speedLevels.length - 1;
      
      // If already at max speed and not cycling, don't set timeout
      if (currentSpeedIndex === maxIndex && !cycleSpeed) {
        return;
      }

      // Clear existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      // Set up next speed change
      hoverTimeoutRef.current = setTimeout(() => {
        setCurrentSpeedIndex((prev) => {
          let nextIndex;
          if (cycleSpeed) {
            // Cycle back to 0 after reaching max
            nextIndex = (prev + 1) % speedLevels.length;
          } else {
            // Stop at max speed
            nextIndex = Math.min(prev + 1, maxIndex);
          }
          
          if (videoRef.current) {
            videoRef.current.playbackRate = speedLevels[nextIndex];
          }
          return nextIndex;
        });
      }, 2000);

      return () => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      };
    }, [isHovering, currentSpeedIndex, hoverSpeedUp, speedLevels, cycleSpeed]);

    const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = e.currentTarget;
      
      if (video.duration - video.currentTime < 0.5 && video.currentTime > 0) {
        if (!isLooping) {
          setIsLooping(true);
          onLoop?.();
          
          if (loopTimeoutRef.current) {
            clearTimeout(loopTimeoutRef.current);
          }
          
          loopTimeoutRef.current = setTimeout(() => {
            setIsLooping(false);
          }, 800);
        }
      }
    };

    const currentSpeed = speedLevels[currentSpeedIndex];
    const showSpeedIndicator = hoverSpeedUp && isHovering && currentSpeed !== speedLevels[0];
    const isAtMaxSpeed = currentSpeedIndex === speedLevels.length - 1;

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative w-full aspect-video overflow-hidden rounded-xl",
          "bg-black border border-gray-700 shadow-lg",
          hoverSpeedUp && "cursor-pointer",
          sizeClasses[size],
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Brightness overlay */}
        <div className="absolute inset-0 bg-white opacity-10 pointer-events-none z-10" />
        
        {/* Only render video when in view or priority */}
        {(isInView || priority) ? (
          <video
            ref={videoRef}
            src={src}
            muted
            autoPlay
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
            onTimeUpdate={handleTimeUpdate}
            style={{
              willChange: 'transform',
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-gray-600 text-sm">Loading...</div>
          </div>
        )}

        {/* Vignette overlay */}
        {vignette && (
          <div 
            className="absolute inset-0 pointer-events-none z-15"
            style={{
              background: vignetteStyles[vignetteIntensity],
            }}
          />
        )}

        {/* Speed indicator */}
        {showSpeedIndicator && (
          <div className="absolute top-4 right-4 pointer-events-none z-20">
            <div className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm transition-colors duration-300",
              isAtMaxSpeed && !cycleSpeed
                ? "bg-green-500/20 border-2 border-green-400/60"
                : "bg-black/70 border border-blue-400/60"
            )}>
              <FastForward className={cn(
                "w-4 h-4",
                isAtMaxSpeed && !cycleSpeed ? "text-green-400" : "text-blue-400"
              )} />
              <span className={cn(
                "font-semibold text-sm",
                isAtMaxSpeed && !cycleSpeed ? "text-green-300" : "text-white"
              )}>
                {currentSpeed}x
              </span>
            </div>
          </div>
        )}

        {/* Hover hint */}
        {hoverSpeedUp && !isHovering && showHint && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <div className="
              px-3 py-1.5 rounded-full
              bg-black/70 border border-gray-500/60
              backdrop-blur-sm
              animate-pulse
            ">
              <span className="text-gray-300 text-xs">
                Hover to speed up
              </span>
            </div>
          </div>
        )}

        {/* Loop indicator */}
        {isLooping && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="
              flex items-center justify-center
              w-16 h-16 rounded-full
              bg-blue-500/30 border-2 border-blue-400/60
              backdrop-blur-sm
              animate-ping
            ">
              <RotateCcw className="w-7 h-7 text-white absolute" />
            </div>
          </div>
        )}
      </div>
    );
  }
);

DemoVideo.displayName = "DemoVideo";