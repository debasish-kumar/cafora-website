import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Eye, Heart, MapPin, Sparkles, BookOpen, Coffee, Landmark, Palette } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState("Romantic");

  const steps: StepItem[] = [
    {
      number: "01",
      title: "Choose Your Mood",
      description: "Tell us how you feel whether you want something cozy, calm, aesthetic, or lively. We'll find cafes that match your vibe.",
      details: ["Cozy", "Work", "Date", "Chill", "Aesthetic"],
    },
    {
      number: "02",
      title: "Discover Cafes That Feel Right",
      description: "Explore handpicked cafes based on your mood not random lists, but places that actually match what you're looking for.",
      details: ["Curated Picks", "Real Vibes", "Popular Now", "Nearby Spots"],
    },
    {
      number: "03",
      title: "Save Places You Love",
      description: "Create your own collection of go-to spots for dates, work, chill time, or anything in between.",
      details: ["Save Places", "Your collections", "Share with Friends", "Go-to spots"],
    },
    {
      number: "04",
      title: "Go & Experience It",
      description: "Head to the place that fits your mood with the right vibe, the right crowd, and the right moment.",
      details: ["Easy directions", "Live crowd feel", "Quick Decisions", "Right place, right time"],
    },
  ];

  const previewMoods = [
    { name: "Cozy", icon: Coffee, color: "text-[#EAB168] bg-[#EAB168]/10", glow: "rgba(234, 177, 104, 0.25)" },
    { name: "Study/Focus", icon: BookOpen, color: "text-[#EAB168] bg-[#EAB168]/10", glow: "rgba(234, 177, 104, 0.25)" },
    { name: "Romantic", icon: Heart, color: "text-[#EAB168] bg-[#EAB168]/10", glow: "rgba(234, 177, 104, 0.25)" },
    { name: "Luxury", icon: Landmark, color: "text-[#EAB168] bg-[#EAB168]/10", glow: "rgba(234, 177, 104, 0.25)" },
    { name: "Artistic", icon: Palette, color: "text-[#EAB168] bg-[#EAB168]/10", glow: "rgba(234, 177, 104, 0.25)" },
  ];

  return (
    <section id="how-it-works" className="relative py-16 lg:py-28 bg-[#000000] text-white px-6 overflow-hidden border-b border-[#2B2B2B]">
      {/* Visual back glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[550px] h-[550px] bg-[#EAB168]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-20 flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#EAB168]/80 font-semibold uppercase mb-4">
            Curative Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-sans">
            How CAFORA Works
          </h2>
          <p className="text-zinc-500 text-sm max-w-md">
            Four simple stages towards experiencing physical places that resonate with your inner self.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Vertical timeline of Interactive Steps */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step, idx) => {
              const itemActive = idx === activeStep;
              return (
                <div
                  key={step.number}
                  className={`group relative p-4 sm:p-5 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    itemActive
                      ? "bg-[#1C1C1C] border-[#EAB168]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      : "bg-[#1C1C1C]/10 border-transparent hover:border-[#2B2B2B]"
                  }`}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="flex gap-3 sm:gap-4 md:gap-5 items-start">
                    {/* Number Indicator */}
                    <div
                      className={`font-mono text-xs sm:text-sm font-bold tracking-wider rounded-xl w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center shrink-0 border transition-all ${
                        itemActive
                          ? "bg-[#EAB168] text-black border-[#EAB168] shadow-[0_4px_12px_rgba(234,177,104,0.3)]"
                          : "bg-[#1C1C1C] text-zinc-500 border-[#2B2B2B] group-hover:text-[#EAB168]"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="text-left flex-1 min-w-0">
                      <h3
                        className={`text-base sm:text-lg font-bold font-sans tracking-wide transition-colors ${
                          itemActive ? "text-[#EAB168]" : "text-white group-hover:text-[#EAB168]/80"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-[11px] sm:text-xs md:text-sm mt-1 sm:mt-1.5 leading-relaxed font-normal">
                        {step.description}
                      </p>

                      {/* Expanding details on active step */}
                      <AnimatePresence>
                        {itemActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-[#2B2B2B] flex flex-wrap gap-1.5 md:gap-2 overflow-hidden"
                          >
                            {step.details.map((detail) => (
                              <span
                                key={detail}
                                className="px-2 py-0.5 md:px-2.5 md:py-1 bg-[#000000] text-zinc-400 border border-[#2B2B2B] text-[9px] sm:text-[10px] font-mono font-medium rounded-md uppercase tracking-wider whitespace-normal sm:whitespace-nowrap break-words inline-block"
                              >
                                {detail}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview Simulator Mockup Box */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center">
            <div className="w-full max-w-[420px] aspect-square rounded-3xl bg-[#1C1C1C]/90 border border-[#2B2B2B] shadow-3xl p-6 flex flex-col justify-between overflow-hidden relative glass-panel">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#EAB168]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Status Header */}
              <div className="flex justify-between items-center z-10 border-b border-[#2B2B2B] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EAB168] animate-pulse" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                    CAFORA SIMULATOR
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-[#000000] text-zinc-400 border border-[#2B2B2B] px-2.5 py-1 rounded-md">
                  Active Vibe: Step {activeStep + 1}
                </span>
              </div>

              {/* Content Space that Swaps according to current activeStep of user */}
              <div className="flex-1 py-6 flex items-center justify-center z-10">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div
                      key="step1-preview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col text-left gap-4"
                    >
                      <h4 className="text-sm font-bold text-zinc-300 font-mono uppercase tracking-wider">
                        Configure Your Aura Profile
                      </h4>
                      <p className="text-zinc-500 text-xs">
                        Select a mood node to adapt your recommendations feed globally:
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2.5 mt-2">
                        {previewMoods.map((mood) => {
                          const MoodIcon = mood.icon;
                          const isSel = selectedMood === mood.name;
                          return (
                            <button
                              key={mood.name}
                              onClick={() => setSelectedMood(mood.name)}
                              className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-[11px] font-medium font-mono uppercase tracking-wider transition-all ${
                                isSel
                                  ? "bg-[#EAB168]/10 border-[#EAB168] text-[#EAB168] shadow-[0_0_15px_rgba(234,177,104,0.15)]"
                                  : "bg-[#000000] border-[#2B2B2B] text-zinc-400 hover:border-[#2B2B2B]/80"
                              }`}
                            >
                              <div className={`p-1 rounded-lg shrink-0 ${mood.color}`}>
                                <MoodIcon className="w-3.5 h-3.5" />
                              </div>
                              <span>{mood.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      key="step2-preview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col text-left gap-3.5"
                    >
                      <div className="rounded-2xl overflow-hidden border border-[#2B2B2B] bg-[#000000] p-3 flex gap-4 shadow-xl">
                        <img
                          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400"
                          alt="Soho roast"
                          className="w-24 h-24 object-cover rounded-xl shrink-0"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[8px] font-mono bg-[#1C1C1C] border border-[#2B2B2B] text-[#EAB168] px-1.5 py-0.5 rounded">
                              Warm Vintage
                            </span>
                            <h4 className="text-sm font-bold text-white mt-1.5">Leopold Cafe</h4>
                            <p className="text-[10px] text-zinc-500 mt-1 font-mono">Calm vibe. Not Crowded. Great for slow coffee</p>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2 border-t border-[#2B2B2B] mt-1">
                            <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Chill (Empty)
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">9.8 Index</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl overflow-hidden border border-[#2B2B2B]/65 bg-[#000000]/40 opacity-60 p-2.5 flex gap-4 select-none">
                        <div className="w-16 h-12 bg-[#1C1C1C] rounded-lg shrink-0" />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="h-3 bg-[#1C1C1C] rounded w-1/2" />
                          <div className="h-2 bg-[#1C1C1C] rounded w-1/3" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step3-preview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col text-left gap-3.5"
                    >
                      <h4 className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-widest mb-1">
                        Saved for later (2)
                      </h4>

                      <div className="space-y-2.5">
                        <div className="p-3 bg-gradient-to-r from-neutral-900 to-[#121212] rounded-xl border border-[#2B2B2B] flex items-center justify-between hover:border-[#EAB168]/25 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#EAB168]/10 flex items-center justify-center text-[#EAB168] border border-[#EAB168]/25">
                              <Heart className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <h5 className="text-xs font-bold text-white">Sunday Reading Spots</h5>
                              <p className="text-[9px] text-zinc-500 font-mono">2 locations saved</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#EAB168]">View Folder</span>
                        </div>

                        <div className="p-3 bg-[#000000]/40 rounded-xl border border-[#2B2B2B] flex items-center justify-between opacity-85">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#EAB168]/5 flex items-center justify-center text-[#EAB168]/80 border border-[#2B2B2B]">
                              <BookOpen className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <h5 className="text-xs font-bold text-white">Work Corner</h5>
                              <p className="text-[9px] text-zinc-500 font-mono">5 locations saved</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-650">View Folder</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      key="step4-preview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col text-left gap-4"
                    >
                      <div className="p-4 bg-[#000000] border border-[#EAB168]/30 rounded-2xl flex flex-col gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] font-mono uppercase tracking-widest text-[#EAB168]">
                            Aura Navigation
                          </span>
                          <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded">
                            Fastest Path
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-extrabold text-white">En Route: Leopold Cafe</h4>
                          <p className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-[#EAB168]" />
                            <span className="font-mono">0.4 mi away &bull; 4 mins walk</span>
                          </p>
                        </div>

                        <div className="h-1.5 w-full bg-[#1C1C1C] rounded-full overflow-hidden mt-1.5">
                          <motion.div
                            className="h-full bg-[#EAB168]"
                            initial={{ width: "0%" }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                        </div>

                        <p className="text-[9px] text-zinc-500 leading-normal font-mono">
                          Live traffic: light. High desk availability confirmed.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Prompt */}
              <div className="border-t border-[#2B2B2B] pt-4 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <span>Vibe matching precision</span>
                <span className="text-[#EAB168]">99.8% accurate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
