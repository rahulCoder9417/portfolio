import { MessageSquare, Zap, Database, Users } from "lucide-react";
import { FeatureCard } from "../FeatureCard";
import { TechBadge } from "../FeatureBadge";

export const TeamChatDetail = () => (
    <div className="space-y-6">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-zinc-100">Communication System</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Integrated team chat and direct messaging designed for real-time collaboration. 
          One-to-one conversations support read receipts for tracking message delivery. 
          Smart notification system triggers in-app toasts for online users and stores messages for offline delivery.
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard 
          icon={MessageSquare}
          title="Direct Messaging"
          description="One-to-one conversations with read receipts tracking message delivery and visibility"
        />
        <FeatureCard 
          icon={Zap}
          title="Real-time Toasts"
          description="In-app chat notifications trigger instantly when recipient is online"
        />
        <FeatureCard 
          icon={Database}
          title="Offline Storage"
          description="Messages stored and delivered as notifications upon user reconnection"
        />
        <FeatureCard 
          icon={Users}
          title="Team Channels"
          description="Group chat channels for project-wide collaboration and discussions"
        />
      </div>
  
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          <h3 className="text-base font-bold text-zinc-100">Features</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <TechBadge>Read Receipts</TechBadge>
          <TechBadge>In-app Toasts</TechBadge>
          <TechBadge>Offline Delivery</TechBadge>
          <TechBadge>WebSocket Sync</TechBadge>
        </div>
      </div>
    </div>
  );
  