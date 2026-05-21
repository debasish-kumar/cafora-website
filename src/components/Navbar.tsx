import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram } from "lucide-react";
import CaforaLogo from "./CaforaLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "What is CAFORA", href: "#what-is-cafora" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Chaos Meter™", href: "#chaos-meter" },
  ];

  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      id="brand-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans ${
        isScrolled
          ? "py-3 bg-[#000000]/80 backdrop-blur-md border-b border-[#2B2B2B] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollToSection(e, "#top")}
          className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <CaforaLogo size={24} showText={true} showTagline={true} />
        </a>

        {/* Desktop Navigation Link */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-[15px] font-bold text-white hover:text-white/80 tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[1px] after:bg-[#EAB168] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:after:transition-transform hover:after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Instagram Drawer link */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://instagram.com/cafora.vibes"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl hover:bg-[#1C1C1C] border border-transparent hover:border-[#2B2B2B] flex items-center justify-center text-white hover:text-white/80 transition-all"
            aria-label="Instagram Page"
          >
            <Instagram className="w-4.5 h-4.5" />
          </a>
          <a
            href="#join-waitlist"
            onClick={(e) => handleScrollToSection(e, "#join-waitlist")}
            className="px-5 py-2.5 text-[14px] font-bold text-[#000000] bg-[#EAB168] rounded-xl hover:shadow-[0_0_20px_rgba(234,177,104,0.35)] hover:scale-[1.02] transition-all duration-300 tracking-wider uppercase font-sans"
          >
            Join Exclusive Waitlist
          </a>
        </div>

        {/* Mobile Menu Open Control */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 border border-[#2B2B2B] bg-[#1C1C1C] rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Grid */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-[69px] left-0 right-0 bg-[#000000]/95 backdrop-blur-xl border-b border-[#2B2B2B] shadow-2xl z-30 px-6 py-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-base font-semibold text-zinc-300 hover:text-[#EAB168] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join-waitlist"
                onClick={(e) => handleScrollToSection(e, "#join-waitlist")}
                className="w-full text-center py-3 text-sm font-bold text-[#000000] bg-[#EAB168] rounded-xl hover:shadow-[0_0_15px_rgba(234,177,104,0.25)] transition-all uppercase tracking-wider font-sans block mt-2"
              >
                Join Waitlist
              </a>
              <div className="h-[1px] bg-[#2B2B2B] my-1" />
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-xs">Follow our journey</span>
                <a
                  href="https://instagram.com/cafora.vibes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 text-sm hover:text-[#EAB168] font-medium font-mono"
                >
                  <Instagram className="w-4 h-4 text-[#EAB168]" /> @cafora.vibes
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
