"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROTOCOL_PILLARS } from "./shared/config";
import { DiscretionIcons, DiscretionIconKey } from "./shared/icons";
import { FadeUp } from "./shared/motion";

const ACCENTS = ["#aa7130", "#00b99d", "#ffbf00"] as const;

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Private Client Protocol.
 * Sits directly after Access Plans. Three principles, not a numbered
 * process, so no 01/02/03 markers, these aren't sequential steps.
 *
 * Background: three soft, color-matched lights sit low behind the three
 * cards, one warm orange, one teal, one amber, echoing that these are
 * three distinct, co-equal principles rather than stages of a process.
 * Each card's own hover spotlight uses the same color as the light
 * already glowing behind it, so hovering feels like turning that one
 * principle up rather than introducing a new color into the scene.
 */
function PillarCard({
  title,
  desc,
  icon,
  accent,
}: {
  title: string;
  desc: string;
  icon: string;
  accent: string;
}) {
  const Icon = DiscretionIcons[icon as DiscretionIconKey];

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(200px circle at var(--gx) var(--gy), ${hexToRgba(accent, 0.18)}, transparent 70%)` }}
      />

      <div className="relative mb-6 h-1 w-8 rounded-full" style={{ background: accent }} />

      <div
        className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 group-hover:scale-110"
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: hexToRgba(accent, 0.16), boxShadow: `0 0 20px 2px ${hexToRgba(accent, 0.35)}` }}
        />
        <div className="relative h-6 w-6 text-white/80">
          <Icon />
        </div>
      </div>

      <p className="relative font-raleway font-semibold text-white text-base mb-2">{title}</p>
      <p className="relative text-white/45 text-[13px] leading-relaxed font-nunito">{desc}</p>
    </div>
  );
}

export default function PrivateClientProtocol() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 px-5 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061428] via-[#0a1c33] to-[#061428]" />

      {/* three low, color-matched lights, one per pillar, none dominant over the others */}
      <motion.div
        animate={reduce ? undefined : { x: [0, 14, 0], y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] bottom-[-10%] h-72 w-72 rounded-full blur-[110px]"
        style={{ background: hexToRgba(ACCENTS[0], 0.14) }}
      />
      <motion.div
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 bottom-[-14%] h-72 w-72 -translate-x-1/2 rounded-full blur-[110px]"
        style={{ background: hexToRgba(ACCENTS[1], 0.12) }}
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[6%] bottom-[-10%] h-72 w-72 rounded-full blur-[110px]"
        style={{ background: hexToRgba(ACCENTS[2], 0.14) }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay pointer-events-none" aria-hidden="true">
        <filter id="protocolGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#protocolGrain)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="text-center mb-14 sm:mb-16">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            Private Client Protocol
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] mx-auto tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              maxWidth: 560,
              background: "linear-gradient(90deg, #ffffff 0%, #ffbf00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Three principles behind every engagement.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROTOCOL_PILLARS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <PillarCard title={p.title} desc={p.desc} icon={p.icon} accent={ACCENTS[i % ACCENTS.length]} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}