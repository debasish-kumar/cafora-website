export interface WaitlistForm {
  name: string;
  email: string;
  vibe_preference: string;
}

export interface WaitlistSuccessResponse {
  success: boolean;
  message: string;
  spotNumber: number;
}

export interface CafeVibe {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bgGradient: string;
  icon: string; // Lucide icon name
  mood: string;
  badge: string;
  image: string; // Curated aesthetic Unsplash picture
}

export interface CafeMockup {
  id: string;
  name: string;
  vibe: string;
  aestheticRating: number;
  crowdLevel: "Chill" | "Buzzing" | "Packed";
  rating: number;
  distance: string;
  signatureDish: string;
  description: string;
  image: string;
  features: string[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  caption: string;
  category: string;
}
