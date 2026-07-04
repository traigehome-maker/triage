"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WHY_ICON_KEYS } from "./shared/config";
import { Icons, DiscretionIcons, IconKey, DiscretionIconKey } from "./shared/icons";
import { FadeUp } from "./shared/motion";

const ACCENTS = ["#aa7130", "#00b99d"] as const;

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Some entries reference the neutral Icons set, others (like the discretion
// card) reference the custom DiscretionIcons set. Resolve whichever matches.
function resolveIcon(key: string) {
  if (key in Icons) return Icons[key as IconKey];
  if (key in DiscretionIcons) return DiscretionIcons[key as DiscretionIconKey];
  return Icons.Shield;
}

/**
 * Why TriageConcierge.
 *
 * Background: a deep vignette rather than the hero's diagonal wash or the
 * journey's top-to-bottom flow, dark at both edges, a quiet glow gathered
 * behind the grid itself, like the cards are lit from a single source
 * rather than sitting on a flat gradient.
 *
 * Cards alternate between only two accent colors (burnt orange, bright
 * teal), never more, per the brand book's cap on simultaneous secondary
 * hues. Each card's highlight is a soft light that actually follows the
 * cursor while hovering it, not a canned border color swap.
 */
function WhyCard({
  icon,
  title,
  desc,
  anchor,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  anchor?: string;
  index: number;
}) {
  const Icon = resolveIcon(icon);
  const accent = ACCENTS[index % ACCENTS.length];
  const iconHoverClass = index % 2 === 0 ? "group-hover:text-[#aa7130]" : "group-hover:text-[#00b99d]";

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  const content = (
    <div
      onMouseMove={handleMove}
      style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%", ["--accent" as string]: accent }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      {/* cursor-tracked spotlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(140px circle at var(--gx) var(--gy), ${hexToRgba(accent, 0.22)}, transparent 70%)` }}
      />

      {/* top accent line, draws in on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ background: accent }}
      />

      {/* ghost index number, editorial detail */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-3 font-raleway text-6xl font-black leading-none text-white/[0.04]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:scale-110">
        <div
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: hexToRgba(accent, 0.18), boxShadow: `0 0 20px 2px ${hexToRgba(accent, 0.4)}` }}
        />
        <div className={`relative h-5 w-5 text-white/70 transition-colors duration-300 ${iconHoverClass}`}>
          <Icon />
        </div>
      </div>

      <p className="relative font-raleway font-semibold text-white text-sm mb-2">{title}</p>
      <p className="relative text-white/45 text-[13px] leading-relaxed font-nunito">{desc}</p>
    </div>
  );

  return anchor ? (
    <a href={anchor} className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
}

export default function WhyConcierge() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 px-5 sm:px-6">
      {/* deep vignette: dark at both edges, a quiet glow gathered behind the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#02385a] to-[#0a0f1e]" />
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b99d]/[0.06] blur-[140px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, 24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-[#aa7130]/[0.12] blur-[110px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay pointer-events-none" aria-hidden="true">
        <filter id="whyGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#whyGrain)" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <FadeUp className="mb-14 sm:mb-16">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            Why TriageConcierge
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] max-w-xl tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              background: "linear-gradient(90deg, #ffffff 0%, #ffbf00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The difference is in the detail.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_ICON_KEYS.map(({ icon, title, desc, anchor }, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <WhyCard icon={icon} title={title} desc={desc} anchor={anchor} index={i} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}