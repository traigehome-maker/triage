"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PM_REP_DUTIES_KEYS } from "./shared/config";
import { Icons, IconKey } from "./shared/icons";
import { FadeUp, FadeIn } from "./shared/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Your PM Rep, our core product.
 * Headline and eyebrow are sized up from the rest of the page, this is the
 * single most important thing a visitor should walk away understanding.
 *
 * Replace the poster image and /videos/pm-rep-loop.mp4 with a real, silent,
 * looping 4 to 6 second clip: a professional PM Rep on a video call with a
 * client, or reviewing a tablet dashboard. Keep it understated, not stock-y.
 *
 * Background: white is the dominant surface (per brand guidelines, colour
 * usage should never overwhelm), flowing top to bottom into a soft navy
 * wash with a small warm burnt orange glow for depth, the two brand
 * primaries doing quiet work rather than a flat tinted panel.
 *
 * The teal pulse on the floating card intentionally reuses the exact color
 * and rhythm from the hero's "Coordinators active now" indicator and the
 * discretion section's orbit dot, so "someone is actually watching over
 * you right now" reads as one continuous idea across the site.
 */
export default function PMRep() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* flowing background: white dominant, navy wash bottom, warm orange glow for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#e7eef4]" />
        <motion.div
          animate={reduce ? undefined : { x: [0, 20, 0], y: [0, 24, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-[#02385a]/[0.06] blur-[120px]"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, -18, 0], y: [0, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-18%] left-[-10%] h-[460px] w-[460px] rounded-full bg-[#aa7130]/[0.09] blur-[130px]"
        />
        {/* fine grain, tuned for a light surface */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.025] mix-blend-multiply" aria-hidden="true">
          <filter id="pmRepGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#pmRepGrain)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[660px]">
        <div className="px-6 sm:px-10 py-16 sm:py-20 lg:px-16 flex flex-col justify-center">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{ transformOrigin: "left" }}
                className="w-8 h-[1px] bg-[#aa7130]"
              />
              <span className="font-raleway font-semibold text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#aa7130]">
                Your PM Rep, Our Core Service
              </span>
            </div>

            <h2
              className="font-raleway font-light leading-[1.1] mb-6 tracking-tight text-[#0f172a]"
              style={{ fontSize: "clamp(30px, 4.6vw, 56px)" }}
            >
              Think of them as your
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #02385a 0%, #aa7130 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className={reduce ? "" : "animate-[shimmer_6s_ease-in-out_infinite]"}
              >
                healthcare project manager.
              </span>
            </h2>

            <p className="text-slate-500 text-[15px] sm:text-[16px] leading-[1.85] mb-9 sm:mb-10 max-w-md font-nunito">
              Every TriageConcierge client is assigned a dedicated Peace of Mind
              Representative, your single point of contact for everything health related.
              They know your history, your preferences, and your circle.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PM_REP_DUTIES_KEYS.map(({ icon, text }, i) => {
              const Icon = Icons[icon as IconKey];
              return (
                <FadeUp key={i} delay={i * 0.06}>
                  <div className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#aa7130]/40 hover:shadow-md">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#aa7130]/10 text-[#aa7130] transition-colors duration-300 group-hover:bg-[#aa7130]/20">
                      <div className="h-4 w-4">
                        <Icon />
                      </div>
                    </div>
                    <span className="text-slate-600 text-[13px] leading-snug font-nunito">{text}</span>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        <FadeIn className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          {/* Silent looping PM Rep avatar. Replace poster + source with real footage. */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero/pmx.png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/pm-rep-loop.mp4" type="video/mp4" />
          </video>

          {/* blends the video into the light panel instead of a navy fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
          {/* keeps the corner brackets and floating card legible over real footage */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* quiet verification corners, echoing the discretion section's oversight motif without a literal frame */}
          {[
            "left-5 top-5 border-l border-t",
            "right-5 top-5 border-r border-t",
            "left-5 bottom-5 border-l border-b",
            "right-5 bottom-5 border-r border-b",
          ].map((pos) => (
            <motion.div
              key={pos}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className={`absolute h-6 w-6 border-white/40 ${pos}`}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
            }}
            style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
            className="group absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 lg:left-auto lg:right-8 lg:max-w-[240px] overflow-hidden rounded-2xl bg-white p-5 shadow-2xl"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(120px circle at var(--gx) var(--gy), rgba(170,113,48,0.12), transparent 70%)" }}
            />
            <p className="relative font-raleway font-semibold text-[#02385a] text-sm mb-1">Your PM Rep</p>
            <p className="relative text-slate-400 text-[12px] leading-relaxed font-nunito">
              One person. Every appointment, update, and emergency, coordinated.
            </p>
            <div className="relative mt-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b99d] opacity-60" />}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00b99d]" />
              </span>
              <span className="text-[11px] font-semibold text-[#00b99d] font-raleway">Available 24/7</span>
            </div>
          </motion.div>
        </FadeIn>
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