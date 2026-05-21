import React, { useState, useEffect } from "react";
import { Coffee, Sparkles, ArrowRight, MapPin, Users, Heart, Bookmark } from "lucide-react";
import { motion } from "motion/react";

const heroBg = new URL("../assets/images/resized_background_1779276931739.png", import.meta.url).href;

export default function Hero() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for parallax effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once at start
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch live waitlist status counter
  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("/api/waitlist/status");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.count) {
            setWaitlistCount(data.count);
          }
        }
      } catch (err) {
        console.warn("Could not fetch real-time waitlist counts", err);
      }
    }
    fetchStatus();
    // Poll every 15 seconds to keep it live
    const interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToJoin = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("join-waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToVision = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("what-is-cafora");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#000000] text-[#FFFFFF] px-4 md:px-12 lg:px-16 font-sans"
    >
      {/* Cinematic Ambient Background Image and subtle shadows */}
      <div 
        id="hero-parallax-bg"
        className="absolute -top-24 -bottom-24 inset-x-0 z-0 overflow-hidden will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      >
        <img
          src={heroBg}
          alt="Caforia Vibe Cafe background"
          className="w-full h-full object-cover object-[68%_50%] md:object-center opacity-85 scale-105 select-none transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Subtle vignette layer to ensure high-contrast readability without altering the image's original feel */}
        <div className="absolute inset-0 bg-[#000000]/40 md:bg-[#000000]/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent pointer-events-none" />
      </div>

      {/* Decorative Brand Glows - Gold color matching #EAB168 */}
      <div className="absolute top-[20%] left-[25%] -translate-x-1/2 w-[450px] h-[450px] bg-[#EAB168]/5 rounded-full blur-[150px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl w-full mx-auto z-10 relative">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] w-full py-6 md:py-12">
          {/* Centered UI overlay text with premium glass/transparent card for ultimate contrast and luxury look */}
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            <div className="w-full p-6 sm:p-10 md:p-0 md:bg-transparent md:border-0 md:shadow-none md:backdrop-blur-none rounded-[32px] bg-black/45 sm:bg-black/35 backdrop-blur-md border border-[#2B2B2B]/30 shadow-2xl flex flex-col items-center text-center">
              {/* Tagline Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1C]/90 backdrop-blur-md border border-[#2B2B2B] text-[#EAB168] font-mono text-[10px] tracking-widest uppercase mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse text-[#EAB168]" />
                <span>Introducing Cafe Discovery 2.0</span>
              </motion.div>

              {/* Luxury Headings */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.12] mb-6 font-sans w-full text-center"
                initial={{ opacity: 0, y: 30, filter: "brightness(0.9)" }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: ["brightness(0.9)", "brightness(1.25)", "brightness(1)"],
                  textShadow: [
                    "0 0 0px rgba(234,177,104,0)",
                    "0 0 25px rgba(234,177,104,0.45)",
                    "0 0 0px rgba(234,177,104,0)"
                  ]
                }}
                transition={{ 
                  duration: 2.0, 
                  delay: 0.1,
                  ease: "easeInOut"
                }}
              >
                Find cafes that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EAB168] to-[#EAB168] drop-shadow-[0_4px_16px_rgba(234,177,104,0.2)]">
                  match your vibe.
                </span>
              </motion.h1>

              <motion.p
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-300 font-normal leading-relaxed tracking-wide mb-8 w-full max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                More than cafe. It&apos;s an aura. Discover cafes that match your mood, vibe, and the kind of moment you&apos;re looking for.
              </motion.p>

              {/* Action Trigger Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={handleScrollToJoin}
                  className="px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold bg-[#EAB168] text-[#000000] shadow-[0_4px_20px_rgba(234,177,104,0.25)] hover:shadow-[0_4px_35px_rgba(234,177,104,0.45)] hover:scale-[1.03] transform transition-all duration-300 flex items-center justify-center gap-2 tracking-wide uppercase text-[11px] md:text-xs lg:text-sm cursor-pointer font-sans animate-pulse"
                >
                  <span>Join Exclusive Waitlist</span>
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </button>
                
                <button
                  onClick={handleScrollToVision}
                  className="px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold bg-[#1C1C1C] hover:bg-[#2B2B2B] border border-[#2B2B2B] text-[#FFFFFF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-[11px] md:text-xs lg:text-sm uppercase tracking-wide cursor-pointer font-sans"
                >
                  <span>Explore Vision</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
