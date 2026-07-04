"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { JOURNEY_STEPS } from "./shared/config";
import { FadeUp } from "./shared/motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const LINE_DURATION = 1.7;

/** Blends two hex colors at t (0 to 1). Used so each step's marker takes
 *  on the exact color the progress line has reached by the time it gets
 *  there, orange at the start of the journey, teal by the end. */
function lerpColor(a: string, b: string, t: number): string {
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 255, ag = (ah >> 8) & 255, ab = ah & 255;
  const br = (bh >> 16) & 255, bg = (bh >> 8) & 255, bb = bh & 255;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1)}`;
}

/**
 * The Peace of Mind Journey.
 *
 * Background: a deep navy gradient on its own angle (distinct from the
 * hero's), with an orange glow and a low-opacity wash of the brand's own
 * purple to lime gradient, the one the brand book reserves specifically
 * for "innovation, vitality, progressive technology", which is exactly
 * what a step by step process diagram is.
 *
 * Signature choreography: the connecting line sweeps left to right once,
 * orange fading into teal, and each step marker lights up in the exact
 * color the sweep has reached the instant it arrives there, then a small
 * light keeps travelling the line afterward, since the relationship
 * (unlike the onboarding steps) never actually ends.
 */
export default function Journey() {
  const reduce = !!useReducedMotion();
  const [lineActive, setLineActive] = useState(false);
  const count = JOURNEY_STEPS.length;
  const stepDelay = count > 1 ? LINE_DURATION / (count - 1) : 0;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 px-5 sm:px-6">
      {/* deep brand gradient, its own angle so it doesn't just repeat the hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061428] via-[#02385a] to-[#0a0f1e]" />

      <motion.div
        animate={reduce ? undefined : { x: [0, 26, 0], y: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-6%] top-[10%] h-80 w-80 rounded-full bg-[#aa7130]/20 blur-[120px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -22, 0], y: [0, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] bottom-[-10%] h-96 w-96 rounded-full opacity-[0.09] blur-[130px]"
        style={{ background: "linear-gradient(135deg, #b745d8, #a6d200)" }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay pointer-events-none" aria-hidden="true">
        <filter id="journeyGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#journeyGrain)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="text-center mb-16 sm:mb-20">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            The Peace of Mind Journey
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] mx-auto tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", maxWidth: 520 }}
          >
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #ffbf00 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className={reduce ? "" : "animate-[shimmer_6s_ease-in-out_infinite]"}
            >
              From first call to ongoing care.
            </span>
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0" style={{ top: "27px" }}>
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                onViewportEnter={() => setLineActive(true)}
                viewport={{ once: true, amount: 0.4 }}
                transition={reduce ? { duration: 0.01 } : { duration: LINE_DURATION, ease: EASE }}
                style={{ transformOrigin: "left", background: "linear-gradient(90deg, #aa7130, #00b99d)" }}
                className="absolute inset-y-0 left-0 w-full rounded-full"
              />
            </div>

            {/* a small light keeps travelling the line once the sweep completes,
                the journey doesn't end at step six, ongoing care does not stop */}
            {lineActive && !reduce && (
              <motion.div
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ delay: LINE_DURATION * 0.4, duration: 3.2, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b99d] shadow-[0_0_14px_3px_rgba(0,185,157,0.65)]"
              />
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {JOURNEY_STEPS.map((step, i) => {
              const color = lerpColor("#aa7130", "#00b99d", count > 1 ? i / (count - 1) : 0);
              return (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-5">
                      <motion.div
                        initial={{ backgroundColor: "rgba(255,255,255,0.04)", scale: 1, boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                        whileInView={{
                          backgroundColor: color,
                          scale: [1, 1.14, 1],
                          boxShadow: `0 0 18px 3px ${color}66`,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          delay: reduce ? 0 : i * stepDelay,
                          duration: 0.55,
                          ease: EASE,
                        }}
                        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/15 font-raleway font-semibold text-sm text-white"
                      >
                        {step.number}
                      </motion.div>
                    </div>
                    <p className="font-raleway font-semibold text-white text-sm mb-2 leading-tight">
                      {step.title}
                    </p>
                    <p className="text-white/45 text-xs leading-relaxed font-nunito">{step.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}