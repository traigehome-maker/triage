"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function TriageVideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-28 px-6 bg-triage-gray-50">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-triage-navy font-raleway">
            See how TriageHome works
          </h2>

          <p className="mt-4 text-triage-gray-600 text-lg font-nunito">
            Experience a smarter, faster, and more human way to access care.
          </p>
        </motion.div>

        {/* VIDEO CONTAINER */}
        <div className="mt-16">
  <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
    
    {/* ▶️ THUMBNAIL */}
    {!play && (
      <div
        className="relative cursor-pointer group"
        onClick={() => setPlay(true)}
      >
        {/* Thumbnail image */}
        <img
          src="/images/hero/bg1.webp"
          alt="Triage Video"
          className="w-full h-[500px] object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-triage-navy/60 group-hover:bg-triage-navy/50 transition" />

        {/* play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-triage-orange flex items-center justify-center shadow-xl group-hover:scale-110 transition">
            <Play size={28} className="text-white ml-1" />
          </div>
        </div>
      </div>
    )}

    {/* 🎬 VIMEO PLAYER */}
    {play && (
      <div style={{ padding: "75% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/1184597300?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="Triage Video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    )}

  </div>
</div>
      </div>

    </section>
  );
}