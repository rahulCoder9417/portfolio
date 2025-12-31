import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
interface VideoPlaceholderProps {
  className?: string;
  showPlayButton?: boolean;
   aspectRatio?: "video" | "square" | "wide";
   size?: "sm" | "md" | "lg";
}
 export function VideoPlaceholder({ className, showPlayButton = true, aspectRatio = "video", size = "md" }: VideoPlaceholderProps) {
   const aspectClasses = { video: "aspect-video", square: "aspect-square", wide: "aspect-[21/9]", }; 
const sizeClasses = { sm: "min-h-[120px]", md: "min-h-[180px]", lg: "min-h-[280px]", }; const playButtonSizes = { sm: "w-10 h-10", md: "w-14 h-14", lg: "w-16 h-16", }; const playIconSizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6", }; return (<div className={cn("project-video-placeholder group cursor-pointer", aspectClasses[aspectRatio], sizeClasses[size], "hover:border-primary/30 transition-all duration-300", className)} > {showPlayButton && (<div className="absolute inset-0 flex items-center justify-center"> <div className={cn("rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300", playButtonSizes[size])}> 
<Play className={cn("text-primary ml-0.5", playIconSizes[size])} /> </div> </div>)} <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-50"> <div className="w-2 h-2 rounded-full bg-primary" /> <span className="text-xs font-mono text-muted-foreground">demo.mp4</span> </div> </div>); }