export type MediaType = "video" | "press" | "article" | "podcast";

export type MediaCategory =
  | "All"
  | "Videos & TV"
  | "Press & News"
  | "TV Features"
  | "Interviews"
  | "Press Releases"
  | "Industry Insights"
  | "Podcasts"
  | (string & {});

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  category: MediaCategory;
  outlet: string;
  outletLogo?: string;
  date: string;
  duration?: string; // e.g., "6 mins watch" or "4 mins read"
  thumbnail?: string;
  videoUrl?: string; // e.g. "https://www.youtube.com/watch?v=..."
  youtubeId?: string;
  externalLink?: string;
  description: string;
  featured?: boolean;
}

// Helper to extract YouTube video ID from various YouTube URL formats
export function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

// Helper to get thumbnail automatically from YouTube if no custom thumbnail is provided
export function getMediaThumbnail(item: MediaItem): string {
  if (item.thumbnail) return item.thumbnail;
  const ytId = item.youtubeId || getYouTubeId(item.videoUrl);
  if (ytId) {
    return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  }
  return "/images/hero/bg1.webp"; // Default fallback brand thumbnail
}

export const mediaCategories = [
  "All",
  "Videos & TV",
  "Press & News",
  "Industry Insights",
  "Podcasts",
] as const;

export const mediaItems: MediaItem[] = [
  {
    id: "arise-news-feature",
    title: "TriageHome on Arise News: Redefining At-Home Urgent & Wellness Care Across Africa",
    type: "video",
    category: "TV Features",
    outlet: "Arise News",
    date: "Sept 2026",
    duration: "8:24 mins",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "An in-depth broadcast interview on how TriageHome is bridging the gap between hospital congestion and patient comfort through technology-enabled home visits.",
    featured: true,
  },
  {
    id: "techcabal-innovation",
    title: "How HealthTech Startup TriageHome is Bringing Doctors to Nigerian Doorsteps in Minutes",
    type: "press",
    category: "Press Releases",
    outlet: "TechCabal",
    date: "Aug 2026",
    duration: "4 mins read",
    thumbnail: "/images/hero/man.png",
    externalLink: "https://techcabal.com",
    description: "TechCabal explores the rapid expansion of TriageHome's on-demand dispatch network and its impact on emergency response times in urban centers.",
    featured: true,
  },
  {
    id: "channels-tv-interview",
    title: "Channels TV Sunrise Daily: The Rise of Home-Centric Healthcare in Nigeria",
    type: "video",
    category: "Interviews",
    outlet: "Channels TV",
    date: "Aug 2026",
    duration: "12:15 mins",
    youtubeId: "ysz5S6PUM-U",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    description: "TriageHome clinical leadership joins Sunrise Daily to discuss modern post-operative recovery care and routine geriatric home monitoring.",
    featured: false,
  },
  {
    id: "businessday-healthcare-economy",
    title: "Why Corporate Health Plans are Pivoting to In-Home Medical Access",
    type: "article",
    category: "Industry Insights",
    outlet: "BusinessDay",
    date: "Jul 2026",
    duration: "5 mins read",
    thumbnail: "/images/hero/pms.png",
    externalLink: "https://businessday.ng",
    description: "An economic review analyzing how corporate partnerships with TriageHome reduce employee sick days and elevate preventive wellness.",
    featured: false,
  },
  {
    id: "african-healthtech-podcast",
    title: "African Health Innovators Podcast: Building a Seamless Care Ecosystem",
    type: "podcast",
    category: "Podcasts",
    outlet: "HealthTech Africa",
    date: "Jul 2026",
    duration: "34:10 mins",
    youtubeId: "5qap5aO4i9A",
    videoUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    description: "A conversation with TriageHome founders on overcoming infrastructure hurdles and creating gold-standard concierge medical experiences.",
    featured: false,
  },
  {
    id: "guardian-iv-therapy-feature",
    title: "The Guardian: At-Home IV Therapy and Preventive Wellness on the Rise",
    type: "press",
    category: "Press Releases",
    outlet: "The Guardian",
    date: "Jun 2026",
    duration: "3 mins read",
    thumbnail: "/images/hero/fam.png",
    externalLink: "https://guardian.ng",
    description: "Examining the growing trend of personalized at-home hydration, wellness checks, and proactive biometric screening.",
    featured: false,
  },
  {
    id: "triage-app-demo-walkthrough",
    title: "Inside the TriageHome App: Fast Provider Dispatch & Real-Time Care Tracking",
    type: "video",
    category: "Videos & TV",
    outlet: "TriageMedia",
    date: "May 2026",
    duration: "4:45 mins",
    youtubeId: "L_LUpnjgPso",
    videoUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
    description: "A complete step-by-step walkthrough demonstrating how patients request certified healthcare workers in 60 seconds.",
    featured: false,
  },
  {
    id: "punch-nigeria-geriatric-care",
    title: "Punch News: Transforming Elderly Care and Chronic Disease Management at Home",
    type: "article",
    category: "Industry Insights",
    outlet: "Punch News",
    date: "Apr 2026",
    duration: "6 mins read",
    thumbnail: "/images/hero/pm.png",
    externalLink: "https://punchng.com",
    description: "Case studies and physician insights into how continuous in-home clinical monitoring prevents hospital re-admissions.",
    featured: false,
  },
];
