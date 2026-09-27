"use client";

import { motion } from "framer-motion";
import Who from "../components/about/who";
import Care from "../components/about/care";
import Value from "../components/about/value";
import Team from "../components/about/team";
import Cta from "../components/home/testimonial";

export default function AboutHero({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden text-white">
        {/* 🌌 FIXED BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <img
          //  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
            src="/images/hero/pmx.png"
            alt="Healthcare"
            className="w-full h-full object-cover"
          />

          {/* 🔷 NAVY OVERLAY */}
          <div className="absolute inset-0 bg-triage-navy/70" />

          {/* subtle lime radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />
        </div>

        {/* 🌊 FLOATING ELEMENTS (SUBTLE BRAND ONLY) */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute w-72 h-72 bg-triage-lime/10 blur-[120px] rounded-full top-20 left-10"
          />

          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute w-96 h-96 bg-triage-teal/10 blur-[140px] rounded-full bottom-10 right-10"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* SMALL LABEL */}
            <p className="font-nunito text-triage-lime uppercase tracking-widest text-sm mb-6">
              About TriageHome
            </p>

            {/* HEADLINE */}
            <h1 className="font-raleway text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              <span className="text-white">Redefining how care</span>

              <br />

              {/* subtle brand accent (no gradient) */}
              <span className="text-triage-lime">reaches you</span>
            </h1>

            {/* SUBTEXT */}
            <p className="font-nunito mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              At TriageHome, we’re building a smarter, more human way to
              experience healthcare, one that comes to you, adapts to you, and
              works around your life.
            </p>

            {/* MICROCOPY */}
            <p className="font-nunito mt-4 text-white/50 italic">
              No waiting rooms. No uncertainty. Just care, where you are.
            </p>
          </motion.div>

          {/* ⬇️ SCROLL INDICATOR */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-white/60"
          >
            <span className="font-nunito text-xs tracking-widest uppercase">
              Scroll
            </span>

            <div className="w-[2px] h-10 bg-white/40" />
          </motion.div>
        </div>

        {/* NEXT SECTIONS */}
        <div className="relative z-10"></div>
      </section>

      <Who />
      <Care />
      <Value />
      <Team />
      <Cta />
    </>
  );
}
