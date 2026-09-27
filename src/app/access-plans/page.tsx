"use client";

import { motion } from "framer-motion";
import History from "../components/home/history";
import Types from "../components/home/types";
import CTA from "../components/home/testimonial";
import Plan from "../components/plans";

export default function ServicesHero({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="relative min-h-[100svh] w-full overflow-hidden text-white flex items-center py-20">
        {/* 🔷 BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero/acess2.png"
            alt="Healthcare at home"
            className="w-full h-full object-cover object-center"
          />

          {/* NAVY OVERLAY */}
          <div className="absolute inset-0 bg-triage-navy/70" />

          {/* subtle lime glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 w-full">
            {/* TEXT CONTAINER WITH GENEROUS BREATHING ROOM */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl lg:max-w-4xl"
            >
              {/* LABEL */}
              <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <p className="font-nunito text-triage-lime uppercase tracking-widest text-xs sm:text-sm font-semibold">
                  Our Services
                </p>
              </div>

              {/* HEADLINE */}
              <h1 className="font-raleway text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                <span className="text-triage-teal">Healthcare, delivered</span>

                <br />

                <span className="text-white">to your home</span>
              </h1>

              {/* SUBTEXT */}
              <p className="font-nunito mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl text-white/85 leading-relaxed">
                From everyday wellness to urgent care, we bring trusted
                professionals directly to you, quickly, safely, and reliably.
              </p>

              {/* CTA */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
                {/* PRIMARY CTA */}
                <button className="font-nunito px-8 py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-medium flex items-center gap-2 transition shadow-lg shadow-triage-orange/20">
                  Get Care Now →
                </button>

                {/* SECONDARY CTA */}
                <button className="font-nunito px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white/90 hover:border-triage-orange transition flex items-center gap-2">
                  Speak to Concierge →
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="font-nunito text-xs tracking-widest uppercase">Scroll</span>

          <div className="w-[2px] h-10 bg-white/40 animate-pulse" />
        </div>
      </section>

      <History />
      <Plan />

      <Types />
      <CTA />
    </>
  );
}
