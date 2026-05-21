import { CafeVibe, CafeMockup, InstagramPost } from "./types";
import instagramBotanical from "./assets/images/post1.png";
import instagramMinimalist from "./assets/images/post2.png";
import instagramMoodyIntimate from "./assets/images/post3.png";
import instagramWarmVintage from "./assets/images/post4.png";

export const CAFE_VIBES: CafeVibe[] = [
  {
    id: "cozy",
    name: "Cozy Sanctuary",
    tagline: "Warm lights, plush velvet, and leather-bound stories.",
    description: "Designed for endless conversations, rainy days, and hot chocolates that feel like a hug.",
    bgGradient: "from-amber-900/40 to-stone-900/60",
    icon: "Coffee",
    mood: "Cozy & Reading",
    badge: "9.8 Vintage",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "study",
    name: "The Deep Focus Room",
    tagline: "Minimalist oak, soft white-noise, and charging ports everywhere.",
    description: "A sanctuary for writers, creators, and high-frequency builders craving uninterrupted flow.",
    bgGradient: "from-neutral-800/40 to-slate-900/60",
    icon: "BookOpen",
    mood: "Productive & Focus",
    badge: "9.5 Work-Friendly",
    image: "https://images.unsplash.com/photo-1522207182008-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "romantic",
    name: "Midnight Indigo Aura",
    tagline: "Low-lit jazz lounge vibes, single-origin drips, and candle shadows.",
    description: "The ultimate rendezvous. Deep conversations and golden lighting that soft-focuses the world.",
    bgGradient: "from-purple-950/30 to-zinc-950/60",
    icon: "Heart",
    mood: "Romantic & Intimate",
    badge: "9.9 Ambiance",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "luxury",
    name: "The Marbled Pavilion",
    tagline: "High-contrast architectural design, gold trim, and flawless service.",
    description: "For luxury seekers. Expect Michelin-grade pastries, imported ceramics, and curated client meetings.",
    bgGradient: "from-yellow-950/30 to-stone-950/60",
    icon: "Sparkles",
    mood: "Luxury & Editorial",
    badge: "9.7 High Aesthetics",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "artistic",
    name: "Greenhouse Galleria",
    tagline: "Cascading botanical canopies, concrete columns, and indie galleries.",
    description: "A sanctuary of living design. Where creative pulses align with local art and organic roasts.",
    bgGradient: "from-emerald-950/30 to-neutral-900/60",
    icon: "Palette",
    mood: "Creative & Greenery",
    badge: "9.6 Avant-Garde",
    image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&q=80&w=800",
  },
];

export const CAFE_MOCKUPS: CafeMockup[] = [
  {
    id: "mock-1",
    name: "Leopold Cafe",
    vibe: "Cozy Sanctuary",
    aestheticRating: 9.8,
    crowdLevel: "Buzzing",
    rating: 4.9,
    distance: "0.4 miles away",
    signatureDish: "Smoked Rose Cardamom Latte",
    description: "An underground brick cellar converted into a soft jazz sanctuary.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    features: ["Velvet Couches", "Vintage Vinyl", "Dim Warm Lights", "No-Laptop Tables"],
  },
  {
    id: "mock-2",
    name: "Krypton Labs",
    vibe: "The Deep Focus Room",
    aestheticRating: 9.5,
    crowdLevel: "Chill",
    rating: 4.8,
    distance: "1.2 miles away",
    signatureDish: "Cold Brew Tonic #4",
    description: "Stark industrial styling, ultra-fast fiber Internet, and sound-insulated booths.",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800",
    features: ["Noise-Canceling Pods", "Ergonomic Chairs", "10Gbps Wi-Fi", "USB-C Outlets"],
  },
  {
    id: "mock-3",
    name: "August Dusk",
    vibe: "Midnight Indigo Aura",
    aestheticRating: 9.9,
    crowdLevel: "Packed",
    rating: 5.0,
    distance: "2.1 miles away",
    signatureDish: "Espresso Crème Brûlée Tart",
    description: "Sensory dark interiors, shadows cast by live fire, and curated French acoustic sets.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    features: ["Candlelit Seating", "Live Acoustic Harp", "Velvet Drapes", "Curated Wine Menu"],
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "insta-1",
    imageUrl: instagramBotanical,
    likes: "4.3k",
    comments: "148",
    caption: "How do you usually choose a cafe?Instagram? Reviews? Random guess?What if you could just pick your mood and go? That’s Cafora ✨",
    category: "Botanical",
  },
  {
    id: "insta-2",
    imageUrl: instagramMinimalist,
    likes: "8.1k",
    comments: "329",
    caption: "Not sure which cafe to go today? 👀We’ve all been there scrolling, checking reviews, still confused. Cafora helps you find the right one ✨No more guessing. Just better plans.",
    category: "Minimalist",
  },
  {
    id: "insta-3",
    imageUrl: instagramMoodyIntimate,
    likes: "5.6k",
    comments: "255",
    caption: "It’s never just coffee. It’s the vibe. The mood. The moment. And finding the right place? That’s where Cafora comes in ✨ Discover cafes that feel right every time.",
    category: "Moody Intimate",
  },
  {
    id: "insta-4",
    imageUrl: instagramWarmVintage,
    likes: "6.7k",
    comments: "189",
    caption: "It’s not just about coffee. It’s about how a place feels. Cafora helps you find cafes that match your vibe ✨",
    category: "Warm Vintage",
  },
];

export const FAQS = [
  {
    question: "How is CAFORA different from any other apps?",
    answer: "Cafora helps you choose cafes based on vibe, mood, and real-time crowd—so instead of guessing from reviews, you always find a place that actually feels right.",
  },
  {
    question: "When will the mobile application be released?",
    answer: "Our invitation-only Beta releases in Q3 2026. Waitlist members will get early VIP access tokens and priority reservation privileges.",
  },
  {
    question: "Is there a fee to join the waitlist?",
    answer: "Absolutely not. The waitlist is 100% free and secures your lifetime status as a CAFORA Founding Member.",
  },
  {
    question: "Can I register my own cafe on CAFORA?",
    answer: "Yes! We partner with independent, premium, design-forward cafes. Please complete the waitlist and join our Instagram page. We will connect back to you.",
  },
];
