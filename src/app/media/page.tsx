"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Search,
  ExternalLink,
  Youtube,
  FileText,
  Video,
  Radio,
  Newspaper,
  X,
  Mail,
  Download,
  Calendar,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  mediaItems,
  mediaCategories,
  getYouTubeId,
  getMediaThumbnail,
  MediaItem,
} from "@/data/media";

export default function MediaCenterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);

  // Filtered Media List
  const filteredMedia = useMemo(() => {
    return mediaItems.filter((item) => {
      // Category Filter
      let matchesCategory = true;
      if (activeCategory === "Videos & TV") {
        matchesCategory = item.type === "video" || item.category === "TV Features" || item.category === "Videos & TV";
      } else if (activeCategory === "Press & News") {
        matchesCategory = item.type === "press" || item.category === "Press Releases";
      } else if (activeCategory === "Industry Insights") {
        matchesCategory = item.type === "article" || item.category === "Industry Insights";
      } else if (activeCategory === "Podcasts") {
        matchesCategory = item.type === "podcast" || item.category === "Podcasts";
      }

      // Search Query Filter
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.outlet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured Item (First featured or fallback)
  const featuredItem = useMemo(() => {
    return mediaItems.find((item) => item.featured) || mediaItems[0];
  }, []);

  const handleItemClick = (item: MediaItem) => {
    if (item.type === "video" || item.youtubeId || item.videoUrl) {
      setActiveVideo(item);
    } else if (item.externalLink) {
      window.open(item.externalLink, "_blank", "noopener,noreferrer");
    }
  };

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video size={14} className="text-triage-orange" />;
      case "podcast":
        return <Radio size={14} className="text-triage-teal" />;
      case "press":
        return <Newspaper size={14} className="text-triage-lime" />;
      default:
        return <FileText size={14} className="text-sky-400" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">

      {/* ===================================================== */}
      {/* 🔷 HERO SECTION */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden bg-triage-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,168,150,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(166,210,0,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011E31]/80 via-transparent to-[#011E31]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles size={14} className="text-triage-lime" />
              <span className="font-nunito text-xs sm:text-sm font-semibold tracking-wider uppercase text-triage-lime">
                TriageMedia & Press Center
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="font-raleway text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-white">
              News, Broadcasts & <br />
              <span className="text-triage-teal">Media Coverage</span>
            </h1>

            {/* SUBTEXT */}
            <p className="font-nunito mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              Explore our latest television features, press releases, medical leadership interviews, and insights on the future of at-home healthcare.
            </p>

            {/* QUICK CHANNELS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nunito inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-sm font-semibold transition shadow-md hover:scale-[1.02]"
              >
                <Youtube size={18} />
                Watch on YouTube
              </a>

              <a
                href="mailto:press@triagehome.com"
                className="font-nunito inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:border-triage-orange text-white text-sm font-medium transition"
              >
                <Mail size={16} className="text-triage-orange" />
                Press Inquiries
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 🌟 FEATURED SPOTLIGHT */}
      {/* ===================================================== */}
      {featuredItem && activeCategory === "All" && searchQuery === "" && (
        <section className="max-w-7xl mx-auto px-6 -mt-10 sm:-mt-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => handleItemClick(featuredItem)}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(2,56,90,0.08)] hover:shadow-[0_25px_60px_rgba(2,56,90,0.16)] transition duration-300 grid md:grid-cols-12"
          >
            {/* Thumbnail Left */}
            <div className="relative md:col-span-7 aspect-video md:aspect-auto min-h-[260px] md:min-h-[360px] overflow-hidden bg-slate-900">
              <img
                src={getMediaThumbnail(featuredItem)}
                alt={featuredItem.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-triage-orange text-white flex items-center justify-center shadow-2xl transition duration-300 group-hover:scale-110">
                  <Play size={28} className="fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Featured Badge */}
              <div className="absolute top-4 left-4">
                <span className="font-nunito px-3.5 py-1.5 rounded-full bg-triage-navy/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                  Featured Spotlight
                </span>
              </div>
            </div>

            {/* Content Right */}
            <div className="p-6 sm:p-8 md:p-10 md:col-span-5 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-nunito px-3 py-1 rounded-full bg-orange-50 text-triage-orange text-xs font-semibold border border-orange-100">
                    {featuredItem.outlet}
                  </span>
                  <span className="font-nunito text-xs text-slate-400 flex items-center gap-1">
                    <Calendar size={12} /> {featuredItem.date}
                  </span>
                </div>

                <h2 className="font-raleway text-2xl sm:text-3xl font-semibold text-triage-navy group-hover:text-triage-teal transition leading-tight mb-4">
                  {featuredItem.title}
                </h2>

                <p className="font-nunito text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredItem.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-nunito text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Clock size={13} /> {featuredItem.duration || "Watch Feature"}
                </span>

                <span className="font-nunito text-sm font-semibold text-triage-orange group-hover:translate-x-1 transition flex items-center gap-1">
                  Watch Now →
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ===================================================== */}
      {/* 🔍 FILTER & SEARCH TOOLBAR */}
      {/* ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-200 pb-6">

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {mediaCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-nunito px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-triage-navy text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-triage-navy"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search news, topics, outlets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-nunito w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-triage-teal focus:ring-2 focus:ring-triage-teal/10 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* 📰 MEDIA GRID */}
      {/* ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-6 pb-24">
        {filteredMedia.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <Newspaper size={40} className="mx-auto text-slate-300 mb-3" />
            <h3 className="font-raleway text-xl font-semibold text-triage-navy mb-2">
              No media found
            </h3>
            <p className="font-nunito text-slate-500 text-sm max-w-sm mx-auto">
              We couldn't find any media matching "{searchQuery}". Try a different keyword or reset your filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="font-nunito mt-5 px-5 py-2 rounded-full bg-triage-navy text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map((item, index) => {
              const isVideo = item.type === "video" || item.youtubeId || item.videoUrl;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  onClick={() => handleItemClick(item)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={getMediaThumbnail(item)}
                        alt={item.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />

                      {/* Video Play Button Overlay */}
                      {isVideo ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-triage-orange text-white flex items-center justify-center shadow-lg transition duration-300 group-hover:scale-115">
                            <Play size={18} className="fill-white translate-x-0.5" />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 shadow group-hover:bg-triage-teal group-hover:text-white transition">
                          <ArrowUpRight size={14} />
                        </div>
                      )}

                      {/* Category Tag on Card */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                        <span className="font-nunito px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1">
                          {getCategoryIcon(item.type)}
                          {item.outlet}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-nunito mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {item.date}
                        </span>
                        {item.duration && (
                          <span className="flex items-center gap-1 text-slate-500 font-medium">
                            <Clock size={12} /> {item.duration}
                          </span>
                        )}
                      </div>

                      <h3 className="font-raleway text-base font-semibold text-triage-navy group-hover:text-triage-teal transition leading-snug line-clamp-2 mb-2">
                        {item.title}
                      </h3>

                      <p className="font-nunito text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-5 pb-4 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-nunito font-semibold text-triage-orange group-hover:text-triage-teal transition">
                      <span>{isVideo ? "Watch Video" : "Read Coverage"}</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>

      {/* ===================================================== */}
      {/* 📢 PRESS INQUIRIES & MEDIA KIT FOOTER BANNER */}
      {/* ===================================================== */}
      <section className="bg-triage-navy text-white py-16 sm:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(0,168,150,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(166,210,0,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-raleway text-3xl sm:text-4xl font-semibold leading-tight mb-3 text-white">
              Media & Press Inquiries
            </h2>
            <p className="font-nunito text-white/85 text-sm sm:text-base leading-relaxed">
              Are you a journalist, broadcaster, or medical writer looking for executive commentary, healthcare statistics, or official TriageHome brand assets?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:press@triagehome.com"
              className="font-nunito px-7 py-3.5 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white text-sm font-semibold transition shadow-lg shadow-triage-orange/25 flex items-center gap-2"
            >
              <Mail size={16} /> Contact PR Team
            </a>

            <a
              href="/contact"
              className="font-nunito px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:border-triage-orange text-white text-sm font-semibold transition flex items-center gap-2"
            >
              General Inquiries →
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 🎬 INTERACTIVE VIDEO MODAL LIGHTBOX */}
      {/* ===================================================== */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/15 z-10"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-white/10 text-white">
                <div className="flex items-center gap-2.5">
                  <span className="font-nunito px-2.5 py-0.5 rounded bg-triage-orange text-[11px] font-bold uppercase tracking-wider text-white">
                    {activeVideo.outlet}
                  </span>
                  <h4 className="font-raleway text-sm sm:text-base font-semibold truncate max-w-md sm:max-w-lg">
                    {activeVideo.title}
                  </h4>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition ml-3"
                  aria-label="Close video player"
                >
                  <X size={18} />
                </button>
              </div>

              {/* 16:9 Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                {activeVideo.youtubeId || getYouTubeId(activeVideo.videoUrl) ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId || getYouTubeId(activeVideo.videoUrl)}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white/60 font-nunito text-sm">
                    Video unavailable
                  </div>
                )}
              </div>

              {/* Bottom Info Bar */}
              <div className="p-5 sm:p-6 bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="font-nunito text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-2xl">
                  {activeVideo.description}
                </p>

                {activeVideo.videoUrl && (
                  <a
                    href={activeVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-nunito shrink-0 text-xs font-semibold text-triage-orange hover:text-white transition flex items-center gap-1"
                  >
                    Open on YouTube <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
