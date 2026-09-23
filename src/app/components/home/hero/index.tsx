"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Healthcare, at your doorstep",
    desc: "Experience intelligent, on-demand care delivered to your home.",
    cta: "Get Care Now",
    image: "/images/hero/bg1.webp",
    link: "https://wa.me/2349134664547?text=Hi%20Triage%2C%20I%20need%20care%20immediately.%20Please%20send%20a%20healthcare%20professional%20to%20my%20location.",
  },
  {
    title: "Care for the people you love",
    desc: "Trusted professionals for your family, whenever it matters most.",
    cta: "Book Care",
    image: "/images/hero/bg2.webp",
    link: "https://wa.me/2349134664547?text=Hello%20Triage%2C%20I%E2%80%99m%20looking%20for%20care%20for%20a%20loved%20one.%20Please%20guide%20me.",
  },
  {
    title: "Smarter healthcare for businesses",
    desc: "Elevate employee wellbeing with seamless medical access.",
    cta: "Partner With Us",
    image: "/images/hero/bg3.webp",
    link: "https://wa.me/2349134664547?text=Hi%2C%20I%E2%80%99d%20like%20to%20discuss%20healthcare%20solutions%20for%20my%20company.",
  },
];

const AUTO_DELAY = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    let start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = (elapsed / AUTO_DELAY) * 100;

      if (percent >= 100) {
        setIndex((prev) => (prev + 1) % slides.length);
        start = Date.now();
        setProgress(0);
      } else {
        setProgress(percent);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className=" inset-0 z-0">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.image}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img src={slide.image} className="w-full h-full object-cover" />

            {/* 🔥 NAVY OVERLAY (PRIMARY BRAND) */}
            <div className="absolute inset-0 bg-triage-navy/80" />
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >

            <h1 className="text-4xl md:text-7xl font-raleway font-semibold leading-tight text-white">
              {slides[index].title}
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-xl font-nunito text-white/80">
              {slides[index].desc}
            </p>

            <div className="mt-8 md:mt-10 flex gap-4 flex-wrap">

              {/* 🔥 PRIMARY CTA (ORANGE) */}
              <a
                href={slides[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium inline-block transition"
              >
                {slides[index].cta}
              </a>

              {/* SECONDARY CTA */}
              <a
                href="/about"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white font-nunito font-medium inline-block hover:border-triage-orange transition"
              >
                Learn More →
              </a>

            </div>

          </motion.div>

        </div>
      </div>

      {/* DESKTOP ARROWS */}
      <div className="hidden md:flex absolute inset-y-0 w-full justify-between items-center px-6 z-20 pointer-events-none">

        <button
          onClick={prevSlide}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-triage-orange transition"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-triage-orange transition"
        >
          →
        </button>

      </div>

      {/* MOBILE ARROWS */}
      <div className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-20">

        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
        >
          →
        </button>

      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[4px] rounded-full ${
              i === index ? "w-14 bg-triage-orange" : "w-6 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}