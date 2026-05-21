import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsCafora from "./components/WhatIsCafora";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import ChaosMeter from "./components/ChaosMeter";
import WaitlistForm from "./components/WaitlistForm";
import InstagramJourney from "./components/InstagramJourney";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Brand custom loader shown on entry */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader-view" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Premium Layout */}
      {!isLoading && (
        <motion.div
          id="cafora-main-layout"
          className="min-h-screen bg-black text-stone-100 flex flex-col relative select-none selection:bg-amber-500/25 selection:text-amber-300 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Top Navigation Hook */}
          <Navbar />

          <main className="flex-1 w-full">
            {/* Sec 1: Hero Block */}
            <Hero />

            {/* Sec 2: What is CAFORA */}
            <WhatIsCafora />

            {/* Sec 3: Timeline How it Works */}
            <HowItWorks />

            {/* Sec 4: Core Features Bento Grid */}
            <Features />

            {/* Sec 5: Live Crowd Gauge Tracker */}
            <ChaosMeter />

            {/* Sec 6: Submit Waitlist Queue Block */}
            <WaitlistForm />

            {/* Sec 7: Instagram Community Hub Block */}
            <InstagramJourney />
          </main>

          {/* Sec 8: Corporate FAQs and Footnotes */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
