import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  showTagline?: boolean;
  darkIcon?: boolean; // if true, draws elements in gold background but icons inside can be styled
}

export default function CaforaLogo({
  className = "",
  size = 40,
  showText = false,
  showTagline = false,
  darkIcon = false,
}: LogoProps) {
  // SVG size values computed dynamically
  const aspectWidth = size;
  const aspectHeight = size * 1.5;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={aspectWidth}
        height={aspectHeight}
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_4px_12px_rgba(234,177,104,0.15)]"
      >
        {/* Arch shape in Accent Gold #EAB168 */}
        <path
          d="M 10 140 V 50 A 40 40 0 0 1 90 50 V 140 H 10 Z"
          fill="#EAB168"
        />

        {/* Hanging wire in Black #000000 */}
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="62"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Lamp shade (dome shape curved upwards) in Black #000000 */}
        <path
          d="M 34 62 A 16 16 0 0 1 66 62 Z"
          fill="#000000"
        />

        {/* Coffee cup / bowl at the bottom in Black #000000 */}
        <path
          d="M 22 105 A 28 28 0 0 0 78 105 Z"
          fill="#000000"
        />
      </svg>

      {(showText || showTagline) && (
        <div className="flex flex-col text-left">
          {showText && (
            <span className="text-xl font-bold tracking-[0.2em] text-white leading-none uppercase font-sans">
              CAFORA
            </span>
          )}
          {showTagline && (
            <span className="text-[9px] tracking-[0.25em] text-[#EAB168] font-mono font-bold uppercase mt-1">
              Find your vibe.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
