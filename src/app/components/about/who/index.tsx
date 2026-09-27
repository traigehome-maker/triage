"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "images/blog/11.webp",
  "images/blog/8.webp",
  "images/blog/2.webp",
];

export default function WhoWeAre() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0 bg-triage-gray-50" />

      {/* 🌀 ORBIT SYSTEM */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* Rings */}
        {[300, 450, 600].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-triage-teal/10"
            style={{ width: size, height: size }}
          />
        ))}

        {/* Moving particle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute w-[450px] h-[450px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-triage-lime rounded-full shadow-[0_0_20px_rgba(166,210,0,0.6)]" />
        </motion.div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🖼️ LEFT SLIDESHOW */}
        <div className="relative">

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Healthcare"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  opacity: i === index ? 1 : 0,
                  scale: i === index ? 1 : 1.05,
                }}
                transition={{ duration: 1 }}
              />
            ))}

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20" />

          </div>

          {/* subtle glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-triage-teal/10 blur-[80px] rounded-full" />

        </div>

        {/* ✍️ RIGHT TEXT */}
        <div className="max-w-xl">

          <h2 className="font-raleway text-4xl md:text-5xl font-semibold leading-tight">

            <span className="text-triage-navy">
              Healthcare,
            </span>

            <br />

            <span className="text-triage-teal">
              redesigned for real life
            </span>

          </h2>

          <p className="font-nunito mt-6 text-triage-gray-600 text-lg leading-relaxed">
            TriageHome is a modern healthcare platform built to make quality care accessible at home.
          </p>

          <p className="font-nunito mt-4 text-triage-gray-600 text-lg leading-relaxed">
            We combine technology, clinical expertise, and human-centered design to remove the friction people experience when trying to access healthcare.
          </p>

          <p className="font-nunito mt-4 text-triage-gray-600 text-lg leading-relaxed">
            Whether it’s immediate care, ongoing support, or long-term wellness, we bring trusted professionals directly to you, when you need them.
          </p>

          {/* divider */}
          <div className="mt-8 w-20 h-[2px] bg-triage-orange" />

        </div>

      </div>

    </section>
  );
}
