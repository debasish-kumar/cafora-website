import React, { useState } from "react";
import { Mail, Instagram, ChevronDown, Heart } from "lucide-react";
import { FAQS } from "../data";
import CaforaLogo from "./CaforaLogo";

export default function Footer() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const menuItems = [
    { label: "What is Cafora", href: "#what-is-cafora" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Chaos Meter™", href: "#chaos-meter" },
    { label: "Join Waitlist", href: "#join-waitlist" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-[#2B2B2B] text-white font-sans px-6 pt-24 pb-12 overflow-hidden">
      {/* Back ambient lighting */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-[#EAB168]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* FAQs Segment */}
        <div className="max-w-3xl mx-auto mb-24 text-left">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#EAB168]/80 uppercase font-semibold mb-3">
              Faq Database
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              Got Questions?
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2B2B2B] bg-[#1C1C1C]/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-stone-200 hover:text-white transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#EAB168] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[200px] border-t border-[#2B2B2B]" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand & Map Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#2B2B2B] pt-16 pb-12 items-start text-left">
          
          {/* Main info card */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <a href="#top" onClick={(e) => handleScrollTo(e, "#top")} className="flex items-center gap-2.5 group transition-transform hover:scale-[1.01]">
              <CaforaLogo size={24} showText={true} showTagline={true} />
            </a>
            
            <p className="text-zinc-500 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Discover cafes that match how you feel so you spend less time searching and more time enjoying the right place.
            </p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/cafora.vibes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1C1C1C] hover:bg-[#2B2B2B] flex items-center justify-center text-zinc-400 hover:text-white border border-transparent hover:border-[#2B2B2B] transition-all"
                aria-label="Instagram Profile Link"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:cafora04@gmail.com"
                className="w-9 h-9 rounded-xl bg-[#1C1C1C] hover:bg-[#2B2B2B] flex items-center justify-center text-zinc-400 hover:text-white border border-transparent hover:border-[#2B2B2B] transition-all"
                aria-label="Email Client"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links list column */}
          <div className="md:col-start-8 md:col-span-2 flex flex-col items-start gap-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="text-xs text-zinc-400 hover:text-[#EAB168] tracking-wide transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Inquiry column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold">
              Corporate Desk
            </span>
            <div className="flex flex-col gap-2 shadow-inner">
              <span className="text-xs text-zinc-400">Media & Partner Relations</span>
              <a href="mailto:cafora04@gmail.com" className="text-xs text-[#EAB168] hover:underline hover:text-[#EAB168]/80 font-mono tracking-tight font-semibold mt-0.5">
                hello@cafora.vibes
              </a>
              <span className="text-[10px] text-zinc-400 font-mono mt-3">CAFORA. <br />Guwahati, Assam.</span>
            </div>
          </div>
        </div>

        {/* Sub terms footer base bar */}
        <div className="border-t border-[#2B2B2B] pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-wide text-zinc-500 uppercase select-none">
          <div className="flex gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-300 cursor-pointer">Accessibility</span>
          </div>

          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} CAFORA CORP.</span>
            <span>Made with</span>
            <Heart className="w-3 h-3 text-[#EAB168] fill-[#EAB168]/10 inline" />
            <span>For cafe lovers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
