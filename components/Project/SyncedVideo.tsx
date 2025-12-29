"use client";

import { useEffect, useRef } from "react";
import { DemoVideo } from "./DemoVideo";
import { cn } from "@/lib/utils";
import { FullBleed } from "./MaxWidth";

export function SyncedVideos({
  srcA,
  srcB,
  size = "lg",
}: {
  srcA: string;
  srcB: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const videos = [leftRef.current, rightRef.current].filter(Boolean) as HTMLVideoElement[];

    let ready = 0;

    const handleCanPlay = () => {
      ready++;
      if (ready === videos.length && !startedRef.current) {
        startedRef.current = true;

        videos.forEach(v => {
          v.currentTime = 0;
          v.play().catch(() => {});
        });
      }
    };

    videos.forEach(v => {
      if (v.readyState >= 3) {
        handleCanPlay();
      } else {
        v.addEventListener("canplay", handleCanPlay, { once: true });
      }
    });

    return () => {
      videos.forEach(v =>
        v.removeEventListener("canplay", handleCanPlay)
      );
    };
  }, []);

  return (
    <FullBleed>
    <div className="flex gap-8 items-start ">

      <DemoVideo ref={leftRef} src={srcA} size={size} />
      <DemoVideo ref={rightRef} src={srcB} size={size} />
    </div>
    </FullBleed>
  );
}
