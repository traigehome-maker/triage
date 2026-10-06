"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WHATSAPP } from "./shared/config";
import { Icons, DiscretionIcons } from "./shared/icons";
import { FadeUp, FadeIn } from "./shared/motion";

const PLEDGE_POINTS = [
  "Your PM Rep and clinical team operate on a strict need-to-know basis, and sign multi-layered non disclosure agreements before working on your case.",
  "Your identity is not shared with a provider until you approve the match.",
  "No health record leaves our systems without your explicit, case-by-case consent.",
  "You choose exactly who is updated on your care, and at what level of detail.",
];

const TEASERS = ["Need-to-know only", "NDA-bound team", "Consent-based sharing", "You control visibility"];

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Absolute Discretion.
 * Imagery brief: replace the panel background with a softly blurred luxury
 * home exterior, or a side-profile of a suited executive with their face
 * slightly obscured. No literal padlock iconography anywhere on this page.
 *
 * Signature idea: discretion is shown, not just described. The pledge
 * lines in the lightbox render as redacted text, each one unmasked by a
 * bar wiping away left to right, the way a declassified document reveals
 * itself. The orbit around the silhouette reuses the same teal used for
 * "live monitoring" in the hero, so "always watched over, never exposed"
 * reads as one idea across the whole site rather than two unrelated
 * decorations.
 */

function RedactedLine({
  text,
  delay,
  reduce,
}: {
  text: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <div className="relative flex items-start gap-3">
      <div
        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-triage-teal"
        style={{ background: "rgba(0,185,157,0.15)" }}
      >
        <Icons.Check />
      </div>
      <div className="relative flex-1 overflow-hidden rounded-md">
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-nunito">{text}</p>
        <motion.div
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={reduce ? { duration: 0.01, delay: 0 } : { duration: 0.65, delay, ease: EASE }}
          style={{ transformOrigin: "right" }}
          className="absolute inset-0 bg-[#0f172a] rounded-md"
        />
      </div>
    </div>
  );
}

/** Outline button, dark-background variant: cursor-tracked glow, arrow
 *  ease, matching the family used across the rest of the site. */
function GhostCTA({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-triage-lime/50 px-7 sm:px-8 py-3.5 sm:py-4 font-raleway text-sm sm:text-base font-bold text-triage-lime transition-colors duration-300 hover:border-triage-lime hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbf00]"
      style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(90px circle at var(--gx) var(--gy), rgba(201,226,101,0.35), transparent 70%)" }}
      />
      {icon && <span className="relative w-4 h-4">{icon}</span>}
      <span className="relative">{children}</span>
    </button>
  );
}

/** Silhouette wrapped in the same "quiet, constant oversight" visual
 *  language as the hero: slow rotating rings, one orbiting point in the
 *  live-monitoring teal. */
function DiscretionVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#aa7130]/10 blur-3xl" />

      <motion.div
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 rounded-full border border-white/10"
      />
      <motion.div
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-8 rounded-full border border-dashed border-white/[0.08]"
      />

      {!reduce && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4"
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#00b99d] shadow-[0_0_14px_3px_rgba(0,185,157,0.55)]" />
        </motion.div>
      )}

      <div className="relative w-full h-full text-[#aa7130]">
        <DiscretionIcons.SilhouetteCircle />
      </div>
    </div>
  );
}

export default function AbsoluteDiscretion() {
  const [showNDA, setShowNDA] = useState(false);
  const reduce = !!useReducedMotion();

  useEffect(() => {
    if (!showNDA) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowNDA(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [showNDA]);

  return (
    <>
      <section id="discretion" className="relative bg-[#02385a] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#012644] via-[#02385a] to-[#012644]" />
        </div>

        {/* fine grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay" aria-hidden="true">
          <filter id="discretionGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#discretionGrain)" />
        </svg>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.9fr,1.1fr] gap-12 lg:gap-16 items-center">
          <FadeIn className="flex justify-center lg:justify-start">
            <DiscretionVisual reduce={reduce} />
          </FadeIn>

          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                  className="w-8 h-[2px] bg-triage-lime"
                />
                <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-triage-lime">
                  Absolute Discretion
                </span>
              </div>

              <h2
                className="font-raleway font-extrabold text-white leading-[1.14] mb-6 tracking-tight text-2xl sm:text-4xl lg:text-5xl"
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
                  Your health is your most sensitive business asset.
                </span>
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-7 max-w-lg font-nunito font-medium">
                TriageConcierge operates on a strict need-to-know protocol. Your PM Rep and
                clinical team are bound by multi-layered NDAs. No records are shared with
                insurers, employers, or personal contacts without your explicit, case-by-case
                consent.
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {TEASERS.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold font-nunito text-white"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#00b99d]" />
                    {t}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.14}>
              <GhostCTA onClick={() => setShowNDA(true)} icon={<DiscretionIcons.NDA className="w-full h-full" />}>
                Review Our Confidentiality Pledge
              </GhostCTA>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* NDA / confidentiality pledge lightbox */}
      <AnimatePresence>
        {showNDA && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Confidentiality Pledge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-5 sm:px-6"
            onClick={() => setShowNDA(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="relative px-7 sm:px-8 py-6 bg-[#02385a] flex items-center justify-between overflow-hidden">
                {!reduce && (
                  <motion.div
                    animate={{ x: ["-30%", "130%"] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
                <div className="relative flex items-center gap-3">
                  <div className="w-5 h-5 text-white">
                    <DiscretionIcons.NDA className="w-full h-full" />
                  </div>
                  <p className="font-raleway font-bold text-white text-base">Confidentiality Pledge</p>
                </div>
                <motion.button
                  onClick={() => setShowNDA(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="relative text-white/70 hover:text-white"
                  aria-label="Close"
                >
                  <Icons.Close />
                </motion.button>
              </div>

              <div className="p-7 sm:p-8 flex flex-col gap-5">
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-nunito italic">
                  This is a plain language summary of our client confidentiality standard. A
                  full agreement is provided directly to every client at the start of
                  engagement.
                </p>

                <div className="flex flex-col gap-4">
                  {PLEDGE_POINTS.map((point, i) => (
                    <RedactedLine key={i} text={point} delay={0.15 + i * 0.12} reduce={reduce} />
                  ))}
                </div>

                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-triage-navy hover:bg-triage-navy/90 text-white font-raleway font-bold text-sm px-6 py-3 transition shadow-md"
                  >
                    <span>Request the Full Agreement</span>
                    <Icons.ArrowRight />
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowNDA(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold font-raleway transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </>
  );
}