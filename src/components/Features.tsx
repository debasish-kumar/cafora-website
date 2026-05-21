import React from "react";
import { motion } from "motion/react";
import { 
  SlidersHorizontal, 
  Flame, 
  Star, 
  Utensils, 
  FolderOpen, 
  MessageSquare, 
  Laptop, 
  Camera 
} from "lucide-react";

interface FeatureDisplay {
  title: string;
  badge: string;
  description: string;
  icon: React.ComponentType<any>;
}

export default function Features() {
  const list: FeatureDisplay[] = [
    {
      title: "Find your vibe",
      badge: "AI Powered",
      description: "We match you with cafes based on how you feel so every place just feels right.",
      icon: SlidersHorizontal,
    },
    {
      title: "Know the crowd before you go",
      badge: "Real-Time Telemetry",
      description: "See if a cafe is calm, busy, or buzzing so you never walk into the wrong vibe.",
      icon: Flame,
    },
    {
      title: "Aesthetic Ratings",
      badge: "Pinterest Grade",
      description: "From cozy corners to aesthetic spaces know what a place actually feels like before you go.",
      icon: Star,
    },
    {
      title: "Explore what they serve",
      badge: "Curated Drinks",
      description: "Check out drinks, menu highlights, and what the place is known for.",
      icon: Utensils,
    },
    {
      title: "Save your favorite spots",
      badge: "Personal Safe",
      description: "Create your own list of cafes for work, dates, or chill time.",
      icon: FolderOpen,
    },
    {
      title: "Real opinions, not noise",
      badge: "Strictly Editorial",
      description: "See honest reviews from real people no clutter, no fake hype.",
      icon: MessageSquare,
    },
    {
      title: "Find what fits your plan",
      badge: "Productive",
      description: "Need a work spot? Quiet place? Good coffee? Filter cafes based on what matters to you.",
      icon: Laptop,
    },
    {
      title: "See before you go",
      badge: "Verified Media",
      description: "Browse real photos and get a feel of the place just like being there.",
      icon: Camera,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#000000] text-[#FFFFFF] px-6 overflow-hidden border-b border-[#2B2B2B]">
      {/* Visual background gradient lights */}
      <div className="absolute top-[5%] left-[5%] w-[350px] h-[350px] bg-[#EAB168]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] bg-[#EAB168]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#EAB168]/80 font-bold mb-4">
            Aesthetic Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 font-sans">
            Made for people who care about <br />
            <span className="font-serif italic font-light text-[#EAB168]">where they go</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
            Whether you&apos;re working, relaxing, or meeting someone find cafes that actually match your vibe.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative rounded-2xl p-6 bg-[#1C1C1C] border border-[#2B2B2B] overflow-hidden transition-all duration-300 hover:border-[#EAB168]/20 flex flex-col justify-between cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#2B2B2B] flex items-center justify-center text-[#EAB168] group-hover:scale-110 group-hover:bg-[#EAB168]/10 group-hover:border-[#EAB168]/30 transition-all duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider font-semibold text-zinc-500 uppercase">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 tracking-wide group-hover:text-[#EAB168] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle border glowing indicators */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#EAB168]/0 to-transparent group-hover:via-[#EAB168]/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
