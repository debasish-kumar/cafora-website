import { motion } from "motion/react";
import { Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { INSTAGRAM_POSTS } from "../data";

export default function InstagramJourney() {
  return (
    <section id="instagram-journey" className="relative py-24 bg-[#000000] text-white px-6 overflow-hidden border-b border-[#2B2B2B]">
      {/* Background Gradients */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-[#EAB168]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#EAB168]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="inline-flex items-center gap-1 bg-[#EAB168]/10 border border-[#EAB168]/20 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#EAB168] uppercase tracking-widest mb-4">
              <Instagram className="w-3.5 h-3.5" />
              <span>Social Ambiance Feed</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-sans">
              The Aesthetic Journal
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We update our editorial feed daily with physical micro-documentations, minimalist cafes, and cozy nooks. Align your feed with true design aesthetics.
            </p>
          </div>

          <a
            href="https://instagram.com/cafora.vibes"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#1C1C1C]/80 border border-[#2B2B2B] text-zinc-300 hover:text-white transition-all flex items-center gap-2 text-xs uppercase tracking-wider font-bold whitespace-nowrap self-start md:self-auto hover:border-[#EAB168]/30 group"
          >
            <span>Follow our journey</span>
            <Instagram className="w-4 h-4 text-[#EAB168] group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Visual Instagram Mockup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/cafora.vibes"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl aspect-square overflow-hidden bg-[#1C1C1C] border border-[#2B2B2B] shadow-2xl block"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              {/* Picture asset */}
              <img
                src={post.imageUrl}
                alt={`Instagram image`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Blur Glass Overlay on hover representing interactions metrics */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-between p-6 text-left">
                {/* Upper metrics arrow */}
                <div className="flex justify-between items-center text-zinc-400">
                  <span className="text-[10px] font-mono tracking-widest uppercase">@cafora.vibes</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#EAB168] transition-colors" />
                </div>

                {/* Central micro caption */}
                <div className="text-stone-300 text-xs font-normal leading-relaxed line-clamp-3 my-auto font-sans">
                  {post.caption}
                </div>
              </div>
            </motion.a>
          ))}
        </div>


      </div>
    </section>
  );
}
