"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-40" id="contact">
      {/* Controlled Brand Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#461248] via-[#a93747] to-[#461248]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl text-white">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Headline */}
          <h2 className="text-4xl text-white md:text-5xl font-light leading-tight">
            Ready to Build a Digital System
            <span className="block mt-2 font-normal text-[#ffd6b6]">
              That Actually Grows Your Business?
            </span>
          </h2>

          {/* Supporting text */}
          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Whether you’re registering a new business, repositioning your brand,
            or scaling an existing operation, we’ll help you move with clarity,
            structure, and measurable intent.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="https://wa.me/2347048048164?text=Hello%20I’m%20interested%20in%20working%20with%20Spotlite%20Africa"
              target="_blank"
              className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-sm uppercase tracking-wide text-[#461248] transition hover:bg-[#ffd6b6]"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>

            <p className="text-sm text-white/60 max-w-sm">
              We work with serious founders, professionals, and businesses ready
              to invest in long term growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
