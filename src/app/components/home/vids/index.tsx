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
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] aspect-video bg-triage-navy w-full">
            {/* ▶️ THUMBNAIL */}
            {!play && (
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setPlay(true)}
              >
                {/* Thumbnail image */}
                <img
                  src="/images/hero/bg1.webp"
                  alt="See how TriageHome works"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-triage-navy/55 group-hover:bg-triage-navy/40 transition duration-300" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-triage-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
                    <Play size={32} className="text-white ml-1.5 fill-white" />
                  </div>
                </div>
              </div>
            )}

            {/* 🎬 VIMEO PLAYER */}
            {play && (
              <iframe
                src="https://player.vimeo.com/video/1184597300?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="See how TriageHome works"
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>

    </section>
  );
}