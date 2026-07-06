"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Local, self-contained fade-up, so this component has no dependency on
 *  a sibling ./shared/motion module that may live in a different folder
 *  than wherever this file gets placed. If your project already has a
 *  shared FadeUp you'd rather reuse, swap this back out for that import. */
function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Why Organizations Trust TriageHome.
 *
 * "Countdown" here means the numbers actually tick, a count-up from zero
 * to the real figure the instant the section scrolls into view, not a
 * static "350+" sitting there doing nothing. A literal countdown to zero
 * doesn't make sense for stats you want people to remember, so this is
 * the reading that actually serves the brief: numbers that feel alive.
 *
 * Background: white dominant, flowing into navy at the bottom, same
 * family as the other light sections on the site. Each stat's number
 * renders in its own two-color brand gradient rather than flat navy,
 * three different pairings across three cards, never more than two
 * hues in any single card, per the brand book's cap.
 */

type StatDef = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  gradient: [string, string];
};

const STATS: StatDef[] = [
  { target: 350, suffix: "+", label: "People Screened", gradient: ["#02385a", "#aa7130"] },
  { target: 20, suffix: "+", label: "Verified Providers", gradient: ["#02385a", "#00b99d"] },
  { target: 100, suffix: "%", label: "Background Checked", gradient: ["#aa7130", "#ffbf00"] },
];

type BadgeDef = {
  label: string;
  icon: React.ReactNode;
};

const ShieldIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
    <path
      d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoltIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
    <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const PinIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
    <path
      d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const BADGES: BadgeDef[] = [
  { label: "HEFAMAA Registered", icon: ShieldIcon },
  { label: "Rapid Response", icon: BoltIcon },
  { label: "Available across Lagos", icon: PinIcon },
];

function useCountUp(target: number, trigger: boolean, reduce: boolean, duration = 1700) {
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!trigger || reduce) return;
    let start: number | null = null;
    let raf: number;

    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration, reduce]);

  return value;
}

function StatCard({ stat, reduce }: { stat: StatDef; reduce: boolean }) {
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(stat.target, triggered, reduce);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onViewportEnter={() => setTriggered(true)}
      viewport={{ once: true, amount: 0.6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at var(--gx) var(--gy), ${stat.gradient[0]}12, transparent 70%)`,
        }}
      />

      <p
        className="relative font-raleway font-extrabold leading-none tabular-nums"
        style={{
          fontSize: "clamp(40px, 5vw, 56px)",
          background: `linear-gradient(135deg, ${stat.gradient[0]}, ${stat.gradient[1]})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <div className="relative mx-auto mt-4 mb-3 h-[2px] w-8 rounded-full" style={{ background: stat.gradient[1] }} />
      <p className="relative font-raleway text-sm font-semibold text-slate-600">{stat.label}</p>
    </motion.div>
  );
}

function TrustBadge({ badge, delay }: { badge: BadgeDef; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#aa7130]/40 hover:shadow-md"
    >
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#02385a]/[0.06] text-[#02385a] transition-colors duration-300 group-hover:bg-[#aa7130]/10 group-hover:text-[#aa7130]">
        <span className="h-4 w-4">{badge.icon}</span>
      </span>
      <span className="font-raleway text-[13px] font-semibold text-slate-700">{badge.label}</span>
    </motion.div>
  );
}

export default function WhyOrganizationsTrust() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 px-5 sm:px-6">
      {/* white, flowing into navy at the bottom, same family as the rest of the site */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#0a1c33]" />
      <motion.div
        animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-6%] top-[8%] h-80 w-80 rounded-full bg-[#aa7130]/[0.07] blur-[120px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -16, 0], y: [0, 14, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-6%] bottom-[6%] h-72 w-72 rounded-full bg-[#00b99d]/[0.08] blur-[120px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.02] mix-blend-multiply pointer-events-none" aria-hidden="true">
        <filter id="trustGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#trustGrain)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="text-center mb-14 sm:mb-16">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            Why Organizations Trust Us
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] mx-auto tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              maxWidth: 620,
              background: "linear-gradient(90deg, #02385a 0%, #6b8f00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why organizations trust TriageHome.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 sm:mb-12">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} reduce={reduce} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {BADGES.map((badge, i) => (
            <TrustBadge key={badge.label} badge={badge} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}