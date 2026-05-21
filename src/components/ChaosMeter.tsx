import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Sparkles, HelpCircle, Flame, Timer, Wifi } from "lucide-react";

type ChaosState = "Chill" | "Buzzing" | "Packed";

interface StateProps {
  id: ChaosState;
  color: string;
  gradient: string;
  accentColor: string;
  bgLight: string;
  description: string;
  occupancy: string;
  needleAngle: number; // Angle on a semi-circle gauge (e.g., -90 to +90)
}

export default function ChaosMeter() {
  const [currentState, setCurrentState] = useState<ChaosState>("Chill");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const hasAnimatedRef = useRef(false);

  const statesConfig: Record<ChaosState, StateProps> = {
    Chill: {
      id: "Chill",
      color: "text-emerald-500",
      accentColor: "#10b981",
      gradient: "from-emerald-500 to-teal-400",
      bgLight: "bg-emerald-500/10 border-emerald-500/20",
      description: "Calm right now. Plenty of space. Quiet vibe. Perfect for work or slow coffee.",
      occupancy: "0–30% busy",
      needleAngle: -60,
    },
    Buzzing: {
      id: "Buzzing",
      color: "text-[#EAB168]",
      accentColor: "#EAB168",
      gradient: "from-[#EAB168] to-[#EAB168]/80",
      bgLight: "bg-[#EAB168]/10 border-[#EAB168]/20",
      description: "Buzzing right now. Good energy, a bit lively. Great for conversations or casual meetups.",
      occupancy: "30–75% busy",
      needleAngle: 0,
    },
    Packed: {
      id: "Packed",
      color: "text-rose-500",
      accentColor: "#f43f5e",
      gradient: "from-rose-600 to-red-400",
      bgLight: "bg-rose-500/10 border-rose-500/20",
      description: "Packed right now. Very busy and active. Best for quick stops, not for sitting long.",
      occupancy: "75–100% busy",
      needleAngle: 60,
    },
  };

  // Run cycle sequence once when scrolled into view: Chill -> Buzzing -> Packed -> Buzzing
  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      
      const sequence = async () => {
        // Start Chill
        setCurrentState("Chill");
        
        // Go Buzzing
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setCurrentState("Buzzing");
        
        // Go Packed
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setCurrentState("Packed");
        
        // Settle on Buzzing
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setCurrentState("Buzzing");
      };

      sequence();
    }
  }, [isInView]);

  const activeConf = statesConfig[currentState];

  return (
    <section id="chaos-meter" className="relative py-28 bg-[#000000] text-white px-6 overflow-hidden border-b border-[#2B2B2B]">
      {/* Background Gradients */}
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] bg-[#EAB168]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-[#1C1C1C]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col text-left items-start max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAB168]/5 border border-[#EAB168]/25 text-[#EAB168] font-mono text-[10px] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB168] animate-ping" />
              <span>Live Crowd Insights</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-display leading-[1.12]">
              Know before you go. <br />
              <span className="font-serif italic font-light text-[#EAB168]">Introducing the Chaos Meter™</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Skip the guesswork. See how busy a cafe is before you step in so you always pick the right vibe.
            </p>

            {/* Interactive State Legend Selection Blocks */}
            <div className="space-y-4 w-full">
              {Object.keys(statesConfig).map((key) => {
                const conf = statesConfig[key as ChaosState];
                const isActive = currentState === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      hasAnimatedRef.current = true; // halt auto cycle if clicked
                      setCurrentState(key as ChaosState);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#1C1C1C] border-[#EAB168]/40 shadow-[0_0_20px_rgba(234,177,104,0.1)]"
                        : "bg-[#1C1C1C]/40 border-[#2B2B2B] hover:border-[#2B2B2B]/80"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <div
                        className={`w-3.5 h-3.5 rounded-full relative ${
                          key === "Chill"
                            ? "bg-emerald-500"
                            : key === "Buzzing"
                            ? "bg-[#EAB168]"
                            : "bg-rose-500"
                        }`}
                      >
                        {isActive && (
                          <span
                            className={`animate-ping absolute inset-0 inline-flex rounded-full opacity-75 ${
                              key === "Chill"
                                ? "bg-emerald-400"
                                : key === "Buzzing"
                                ? "bg-[#EAB168]/80"
                                : "bg-rose-400"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          {key}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono tracking-wide mt-0.5">
                          {conf.occupancy}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-zinc-500 text-right pr-2">
                      {isActive ? (
                        <span className="text-[#EAB168] font-bold">SELECTED &rarr;</span>
                      ) : (
                        <span>CHOOSE VIBE &bull;</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Block: Gauge Widget (Custom Interactive SVG visualizer representing high tech) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[32px] bg-[#1C1C1C] border border-[#2B2B2B] shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
              {/* Premium dark glow background mirroring current telemetry state color */}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)] transition-all duration-700"
                style={{
                  backgroundImage: `radial-gradient(circle_at_center, ${activeConf.accentColor}11 0%, transparent 65%)`,
                }}
              />

              {/* Card Meta details */}
              <div className="flex justify-between items-center z-10 text-[10px] font-mono text-zinc-500">
                <div className="flex gap-1.5 items-center">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB168]/50 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#EAB168]"></span>
                  </span>
                  <span>LIVE NOW</span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                    <Timer className="w-3 h-3 text-[#EAB168]" /> Updated in real-time
                  </span>
                </div>
              </div>

              {/* Gauge Circle Ring Section with Sweep needle */}
              <div className="flex-1 flex flex-col items-center justify-center relative mt-6 z-10 select-none">
                <div className="relative w-[230px] h-[125px] flex justify-center items-end select-none">
                  {/* Gauge Ring Path (Semi-circle ring) */}
                  <svg className="absolute bottom-[10px] left-0 w-full h-[115px]" viewBox="0 0 200 100">
                    {/* Background Arc */}
                    <path
                      d="M20,100 A80,80 0 0,1 180,100"
                      fill="none"
                      stroke="#0D0D0D"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Green zone segment (Chill) */}
                    <path
                      d="M20,100 A80,80 0 0,1 60,30.7"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="12"
                      strokeLinecap="round"
                      opacity="0.3"
                    />

                    {/* Yellow zone segment (Buzzing) */}
                    <path
                      d="M60,30.7 A80,80 0 0,1 140,30.7"
                      fill="none"
                      stroke="#EAB168"
                      strokeWidth="12"
                      strokeLinecap="round"
                      opacity="0.3"
                    />

                    {/* Red zone segment (Packed) */}
                    <path
                      d="M140,30.7 A80,80 0 0,1 180,100"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="12"
                      strokeLinecap="round"
                      opacity="0.3"
                    />

                    {/* Active highlight arc segment */}
                    {currentState === "Chill" && (
                      <path
                        d="M20,100 A80,80 0 0,1 60,30.7"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                    )}
                    {currentState === "Buzzing" && (
                      <path
                        d="M60,30.7 A80,80 0 0,1 140,30.7"
                        fill="none"
                        stroke="#EAB168"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                    )}
                    {currentState === "Packed" && (
                      <path
                        d="M140,30.7 A80,80 0 0,1 180,100"
                        fill="none"
                        stroke="#f43f5e"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                    )}
                  </svg>

                  {/* Meter Hub center point */}
                  <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-black border-4 border-[#2B2B2B] shadow-2xl flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EAB168]" />
                  </div>

                  {/* Sweeping Meter Needle */}
                  <motion.div
                    className="absolute bottom-[10px] left-[calc(50%-1.5px)] w-[3px] h-[84px] bg-gradient-to-t from-[#2B2B2B] via-[#EAB168] to-[#EAB168] origin-bottom z-10"
                    style={{
                      borderTopRightRadius: "3px",
                      borderTopLeftRadius: "3px",
                    }}
                    animate={{ rotate: activeConf.needleAngle }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  />
                </div>

                {/* State Caption Indicator */}
                <div className="mt-4 flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentState}
                      className={`text-2xl font-extrabold uppercase tracking-widest leading-none ${activeConf.color}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentState}
                    </motion.span>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeConf.occupancy}
                      className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mt-1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {activeConf.occupancy}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dynamic status feedback box below */}
              <div className="hidden sm:block mt-4 p-4 rounded-2xl bg-[#000000] border border-[#2B2B2B] text-left z-10">
                <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                  {activeConf.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
