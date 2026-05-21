import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Mail, User, Sparkles, CheckCircle, Flame, ServerCrash, Loader2, ArrowRight } from "lucide-react";
import { CAFE_VIBES } from "../data";
import { supabase } from "../lib/supabase";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vibePreference, setVibePreference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Successful registration state
  const [registeredSpot, setRegisteredSpot] = useState<number | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Stats state
  const [liveCounter, setLiveCounter] = useState<number>(0); //changes1

  useEffect(() => {
    async function loadStats() {
      const { count, error } = await supabase
        .from("waitlist")
        .select("id", {
          count: "exact",
          head: true,
        });

      if (error) {
        console.error("Counter fetch failed:", error.message);
        return;
      }

      setLiveCounter(count || 0);
    }

    loadStats();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage(null);

    // Validation
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!vibePreference) {
      setErrorMessage("Please select your preferred cafe aura.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("waitlist")
        .insert([
          {
            full_name: name.trim() || null,
            email: email.trim().toLowerCase(),
            vibe_preference: vibePreference,
          },
        ])
        .select();

      // Database errors
      if (error) {
        console.error("Supabase Error:", error);

        // Duplicate email
        if (error.code === "23505") {
          setErrorMessage(
            "This email is already registered on the waitlist."
          );
        }

        // RLS issues
        else if (
          error.message.toLowerCase().includes("row-level security")
        ) {
          setErrorMessage(
            "Database permission issue detected. Please contact support."
          );
        }

        // Missing columns
        else if (
          error.message.toLowerCase().includes("column")
        ) {
          setErrorMessage(
            "Database configuration issue detected."
          );
        }

        // Generic DB error
        else {
          setErrorMessage(error.message);
        }

        return;
      }

      // Success state
      setRegisteredSpot(liveCounter + 1);

      setSuccessMsg(
        "Welcome to the CAFORA Inner Circle."
      );

      setLiveCounter((prev) => prev + 1);

    } catch (err) {
      console.error("Unexpected Error:", err);

      setErrorMessage(
        "Network error detected. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join-waitlist" className="relative py-28 bg-[#000000] text-white px-6 overflow-hidden border-b border-[#2B2B2B]">
      {/* Background Glowing Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-[#EAB168]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-[#EAB168]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Dynamic line vector art background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Block - CTA Hype */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAB168]/10 border border-[#EAB168]/20 rounded-full text-[10px] font-mono font-bold text-[#EAB168] uppercase tracking-widest mb-6 select-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited VIP Cohort</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 leading-tight font-display text-white">
              Get early access to Cafora<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#EAB168] font-serif italic font-light drop-shadow-[0_2px_10px_rgba(234,177,104,0.1)]">
                Be among the first to try it
              </span>
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              We&apos;re launching soon, and you can be part of it early. Join a small group of people who get first access, early features, and a better way to choose cafes.
            </p>

            <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] w-full flex flex-col text-left gap-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 leading-none">
                People already waiting
              </span>
              <span className="text-2xl font-bold font-mono tracking-tight text-[#EAB168] mt-1">
                {liveCounter.toLocaleString()}
              </span>
              <p className="text-[10px] text-zinc-500 mt-1 font-mono">
                Join now. People already exploring Cafora.
              </p>
            </div>
          </div>

          {/* Right Block - Interactive Form Container */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!registeredSpot ? (
                /* Core Input Form */
                <motion.div
                  key="vibe-waitlist-form"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 sm:p-10 rounded-[32px] bg-[#1C1C1C]/90 border border-[#2B2B2B] shadow-3xl flex flex-col gap-6 relative overflow-hidden glass-panel"
                >
                  {/* Decorative glowing gradient path inside */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAB168]/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white tracking-wide font-sans">
                      Join early access
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-1">
                      Be the first to discover cafes that match your vibe.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                    {/* Error Alerts */}
                    {errorMessage && (
                      <motion.div
                        className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center gap-2 font-mono"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ServerCrash className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* Full Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                        Full Name <span className="text-zinc-650 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                          id="form-name"
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#000000] border border-[#2B2B2B] text-stone-200 text-sm focus:outline-none focus:border-[#EAB168]/50 focus:ring-1 focus:ring-[#EAB168]/30 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-email" className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                        Email Address <span className="text-[#EAB168]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                          id="form-email"
                          type="email"
                          placeholder="you@email.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#000000] border border-[#2B2B2B] text-stone-200 text-sm focus:outline-none focus:border-[#EAB168]/50 focus:ring-1 focus:ring-[#EAB168]/30 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Vibe selection dropdown list */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-vibe" className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                        Preferred Cafe Aura <span className="text-[#EAB168]">*</span>
                      </label>
                      <div className="relative">
                        <Coffee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                        <select
                          id="form-vibe"
                          required
                          value={vibePreference}
                          onChange={(e) => setVibePreference(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#000000] border border-[#2B2B2B] text-stone-200 text-sm focus:outline-none focus:border-[#EAB168]/50 focus:ring-1 focus:ring-[#EAB168]/30 transition-all appearance-none cursor-pointer font-sans"
                        >
                          <option value="" disabled className="text-zinc-600 bg-black">
                            What are you usually looking for?
                          </option>
                          {CAFE_VIBES.map((vibe) => (
                            <option key={vibe.id} value={vibe.name} className="text-white bg-black">
                              {vibe.name} — ({vibe.mood})
                            </option>
                          ))}
                        </select>
                        {/* Custom caret sign */}
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Privacy clause */}
                    <p className="text-[10px] text-zinc-500 font-normal leading-normal leading-relaxed">
                      * No spam. Just updates when we launch.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 rounded-xl bg-[#EAB168] text-black font-extrabold shadow-[0_4px_20px_rgba(234,177,104,0.25)] hover:shadow-[0_4px_30px_rgba(234,177,104,0.45)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider text-[12px] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Aura Certificate...</span>
                        </>
                      ) : (
                        <>
                          <span>Get early access</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* Queue spot Confirmation receipt */
                <motion.div
                  key="vibe-success-card"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 sm:p-10 rounded-[32px] bg-[#1C1C1C] border border-[#EAB168]/30 shadow-[0_0_50px_rgba(234,177,104,0.15)] flex flex-col gap-6 text-center relative overflow-hidden text-left"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAB168]/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#EAB168]/10 border border-[#EAB168]/20 flex items-center justify-center text-[#EAB168] mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#EAB168] font-bold uppercase mb-2">
                      Exclusive Inner Circle Spot Secured
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-display mb-3">
                      You are on the list!
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mb-8">
                      {successMsg} Share with your aesthetic friends to move up the priority ladder.
                    </p>

                    {/* Premium Ticket Graphic */}
                    <div className="w-full max-w-[340px] bg-[#000000] border border-[#2B2B2B] rounded-3xl p-5 shadow-inner relative flex flex-col gap-4 font-mono select-none">
                      {/* Side Ticket punches */}
                      <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-7 h-7 bg-[#1C1C1C] border-r border-[#2B2B2B] rounded-full z-10" />
                      <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 bg-[#1C1C1C] border-l border-[#2B2B2B] rounded-full z-10" />

                      <div className="flex justify-between items-center text-[9px] text-zinc-500 border-b border-[#2B2B2B] pb-3">
                        <span>FOUNDING MEMBER</span>
                        <span>COHORT B-2026</span>
                      </div>

                      <div className="flex flex-col gap-1 items-center py-2">
                        <span className="text-[9px] tracking-wider text-zinc-500 uppercase">Your Priority Spot Index</span>
                        <span className="text-3xl font-black text-[#EAB168] tracking-tight">
                          #{registeredSpot.toLocaleString()}
                        </span>
                      </div>

                      <div className="border-t border-dashed border-[#2B2B2B] pt-3 flex justify-between text-[8px] text-zinc-500">
                        <div className="flex flex-col items-start uppercase">
                          <span>NAME</span>
                          <span className="text-white font-bold mt-0.5 truncate max-w-[100px]">{name ? name : "FOUNDER"}</span>
                        </div>
                        {/* <div className="flex flex-col items-center uppercase">
                          <span>AURA</span>
                          <span className="text-[#EAB168] font-bold mt-0.5">{vibePreference.split(" ")[0]}</span>
                        </div> */}
                        <div className="flex flex-col items-end uppercase">
                          <span>STATUS</span>
                          <span className="text-green-500 font-bold mt-0.5">COMPLETED</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setRegisteredSpot(null);
                        setName("");
                        setEmail("");
                        setVibePreference("");
                      }}
                      className="mt-8 text-xs font-mono text-zinc-500 hover:text-[#EAB168] transition-colors underline uppercase tracking-wider"
                    >
                      Register another email &rarr;
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
