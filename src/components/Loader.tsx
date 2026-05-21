import { useState, useEffect } from "react";
import { motion } from "motion/react";
import CaforaLogo from "./CaforaLogo";

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small pause at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="brand-loader"
      className="fixed inset-0 bg-[#000000] z-50 flex flex-col items-center justify-center font-sans select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,177,104,0.06)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center max-w-xs text-center px-4">
        {/* Animated Brand Logo Vector */}
        <motion.div
          className="mb-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.8, 1.1, 1], scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <CaforaLogo size={36} />
        </motion.div>

        {/* Brand Logo and Subtitle */}
        <motion.h1
          className="text-3xl font-extrabold tracking-[0.25em] text-white font-sans uppercase mb-1 relative"
          initial={{ letterSpacing: "0.1em", opacity: 0 }}
          animate={{ letterSpacing: "0.25em", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          CAFORA
        </motion.h1>

        <motion.p
          className="text-[9px] uppercase tracking-[0.4em] text-[#EAB168] font-mono mb-8 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Find your vibe.
        </motion.p>

        {/* Clean Progress Meter */}
        <div className="w-48 h-[1px] bg-neutral-900 rounded-full overflow-hidden relative mb-4">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-[#EAB168]"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <motion.span
          className="font-mono text-[10px] text-zinc-500 tracking-wider"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {Math.min(progress, 100)}% Vibe Loaded...
        </motion.span>
      </div>

      {/* Luxury aesthetic citation in footer of preloader */}
      <div className="absolute bottom-6 flex flex-col items-center">
        <span className="font-mono text-[9px] text-zinc-650 tracking-widest uppercase">
          EST. 2026 — CAFORA MEDIA INC.
        </span>
      </div>
    </motion.div>
  );
}
