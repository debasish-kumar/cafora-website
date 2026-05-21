import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Activity, Coffee, Store, Flame } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  badge: string;
  glowColor: string;
}

export default function WhatIsCafora() {
  const features: FeatureCard[] = [
    {
      title: "Find by mood, not just name",
      description: "Stop scrolling endless lists. Pick how you feel and discover cafes that match your vibe instantly.",
      icon: Compass,
      badge: "Vibe Matcher",
      glowColor: "rgba(234,177,104,0.15)",
    },
    {
      title: "Match your kind of vibe",
      description: "From cozy corners to aesthetic spaces find places that actually feel like you.",
      icon: Sparkles,
      badge: "High Aesthetics",
      glowColor: "rgba(234,177,104,0.12)",
    },
    {
      title: "Know the crowd before you go",
      description: "See if a cafe is calm, busy, or buzzing so you never walk into the wrong vibe.",
      icon: Activity,
      badge: "Exclusive Tech",
      glowColor: "rgba(234,177,104,0.12)",
    },
    {
      title: "Feel it before you visit",
      description: "Get a real sense of the place from ambience to vibe, before you even step in.",
      icon: Coffee,
      badge: "Real Feel",
      glowColor: "rgba(234,177,104,0.12)",
    },
    {
      title: "Grow your cafe with Cafora",
      description: "Get discovered by people who are already looking for a place like yours.",
      icon: Store,
      badge: "Partner Program",
      glowColor: "rgba(234,177,104,0.12)",
    },
  ];

  return (
    <section id="what-is-cafora" className="relative py-24 bg-[#000000] text-[#FFFFFF] px-6 overflow-hidden border-b border-[#2B2B2B]">
      {/* Background Glowing Gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#EAB168]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#EAB168]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            className="flex items-center gap-1 bg-[#2B2B2B] border border-[#2B2B2B] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#EAB168] uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>The Aura Paradigm</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Maps show places. <br />
            <span className="font-serif italic font-light text-[#EAB168]">Cafora shows how they feel.</span>
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide max-w-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Because where you go isn&apos;t just about cafe it&apos;s about how that place makes you feel.
          </motion.p>
        </div>

        {/* Feature Cards Grid (Custom architecture with masonry-like bento presentation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative rounded-3xl p-8 bg-[#1C1C1C] border border-[#2B2B2B] transition-all duration-300 hover:border-[#EAB168]/35 flex flex-col justify-between overflow-hidden shadow-2xl cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 0 35px ${feature.glowColor}`,
                }}
              >
                {/* Floating micro glow */}
                <div
                  className="absolute -right-10 -top-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: feature.glowColor.replace("0.1", "0.3") }}
                />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#2B2B2B] flex items-center justify-center text-[#EAB168] group-hover:scale-110 group-hover:bg-[#EAB168]/10 group-hover:border-[#EAB168]/30 transition-all duration-300 shadow-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#EAB168] border border-[#2B2B2B] px-3 py-1 rounded-md group-hover:border-[#EAB168]/20 transition-all bg-[#000000]">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-zinc-50 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 text-[13px] sm:text-sm leading-relaxed tracking-wide font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Aesthetic link cue */}
                <div className="mt-8 pt-4 border-t border-[#2B2B2B]/70 flex justify-end">
                  <span className="text-[10px] font-mono select-none uppercase tracking-widest text-[#EAB168]/40 group-hover:text-[#EAB168] group-hover:translate-x-1.5 transition-all">
                    AURA PROFILE &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
