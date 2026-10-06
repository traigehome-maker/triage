"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { SEGMENTS } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp } from "./shared/motion";

type CircleAccess = {
  primary: string;
  secondary: string;
  additional: string;
};

const CIRCLE_ROWS: { key: keyof CircleAccess; label: string }[] = [
  { key: "primary", label: "Primary Contact" },
  { key: "secondary", label: "Secondary Contact" },
  { key: "additional", label: "Additional Contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

// Kept local rather than assumed to already exist in shared/config, so this
// file works standalone. If shared/config already exports a WHATSAPP_NUMBER
// or buildWhatsAppLink helper, use that instead of having the number
// defined in more than one place.
const WHATSAPP_NUMBER = "2349134664547";

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Maps a segment to its own CTA label and its own WhatsApp message.
 *  Matched against the segment's tag text rather than array index, so
 *  this doesn't silently break if segments get reordered or renamed in
 *  shared/config later. Falls back to a safe default for any segment
 *  that doesn't match one of the three named audiences. */
function getSegmentCTA(tag: string): { label: string; message: string } {
  const t = tag.toLowerCase();

  if (t.includes("hni") || t.includes("family")) {
    return {
      label: "Explore TriageConcierge",
      message: `Hello TriageConcierge, I'd like to explore TriageConcierge for my family office.`,
    };
  }
  if (t.includes("executive")) {
    return {
      label: "Request an Executive Consultation",
      message: `Hello TriageConcierge, I'd like to request an executive consultation.`,
    };
  }
  if (t.includes("individual")) {
    return {
      label: "Design a Personalized Care Plan",
      message: `Hello TriageConcierge, I'd like to design a personalized care plan.`,
    };
  }
  return {
    label: "Speak with a Peace of Mind Representative",
    message: `Hello TriageConcierge, I'd like to speak with a Peace of Mind Representative about ${tag}.`,
  };
}

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

function SegmentTabs({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mb-10 inline-flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
      {SEGMENTS.map((seg, i) => {
        const isActive = active === i;
        return (
          <button
            key={seg.tag}
            type="button"
            onClick={() => onSelect(i)}
            className="relative rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-raleway text-sm sm:text-base font-bold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa7130]"
          >
            {isActive && (
              <motion.span
                layoutId="segment-pill"
                className="absolute inset-0 rounded-full bg-[#02385a]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-600 hover:text-slate-900"}`}>
              {seg.tag}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** The segment CTA: label and destination both change with the active
 *  segment. An arrow that eases out and an underline that draws in from
 *  the left, so it feels intentional on hover rather than just changing
 *  color. */
function SegmentCTA({ tag }: { tag: string }) {
  const { label, message } = getSegmentCTA(tag);
  const href = buildWhatsAppLink(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex w-fit items-center gap-2.5 font-raleway text-sm sm:text-base font-bold text-[#aa7130] transition-colors duration-300 hover:text-[#8c5c22]"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="relative"
        >
          {label}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="flex"
        initial={false}
        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        animate="rest"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <Icons.ArrowRight />
      </motion.span>
    </a>
  );
}

export default function WhoWeServe() {
  const [activeSegment, setActiveSegment] = useState(0);
  const [circleAccess, setCircleAccess] = useState<CircleAccess>({
    primary: "Full Updates",
    secondary: "Emergency Only",
    additional: "No Access",
  });
  const seg = SEGMENTS[activeSegment];

  return (
    <section className="bg-[#fafafa] border-y border-slate-100 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-triage-teal" />
            <p className="text-triage-navy font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase">
              Who We Serve
            </p>
          </div>
          <h2
            className="font-raleway font-extrabold leading-[1.15] max-w-3xl tracking-tight text-2xl sm:text-4xl lg:text-5xl text-triage-navy"
          >
            Supporting executives, organisations and professionals across continents.
          </h2>
        </FadeUp>

        <SegmentTabs active={activeSegment} onSelect={setActiveSegment} />

        <div className="relative rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid lg:grid-cols-2"
            >
              {/* Image */}
              <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image src={seg.image} alt={seg.tag} fill className="object-cover object-center" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
              </div>

              {/* Content */}
              <div className="bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-14 flex flex-col justify-center">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
                  className="text-triage-teal font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3"
                >
                  {seg.tag}
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15, ease: EASE }}
                  className="font-raleway font-bold text-triage-navy leading-[1.2] mb-4 tracking-tight text-xl sm:text-2xl md:text-3xl"
                >
                  {seg.headline}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
                  className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-nunito"
                >
                  {seg.body}
                </motion.p>

                <motion.div
                  variants={listStagger}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-3 mb-8"
                >
                  {seg.services.map((s) => (
                    <motion.div key={s} variants={listItem} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-triage-teal"
                        style={{ background: "rgba(0,185,157,0.15)" }}
                      >
                        <Icons.Check />
                      </div>
                      <span className="text-slate-800 text-sm sm:text-base font-semibold font-nunito">{s}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Customize Your Circle */}
                {seg.showCircleBuilder && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3, ease: EASE }}
                    className="mb-8 rounded-2xl border border-slate-200 bg-[#fafafa] p-5 sm:p-6"
                  >
                    <p className="font-raleway font-bold text-triage-navy text-sm sm:text-base mb-1">
                      Customize Your Circle
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed font-nunito">
                      You decide who sees what. Set access levels for each contact on your account.
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {CIRCLE_ROWS.map((row) => (
                        <div
                          key={row.key}
                          className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 transition-colors duration-200 hover:border-triage-teal/40 shadow-xs"
                        >
                          <span className="text-slate-700 text-xs sm:text-sm font-semibold">{row.label}</span>
                          <select
                            value={circleAccess[row.key]}
                            onChange={(e) =>
                              setCircleAccess((prev) => ({ ...prev, [row.key]: e.target.value }))
                            }
                            className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-raleway text-xs sm:text-sm font-bold text-triage-navy transition-colors duration-200 focus:outline-none focus:border-triage-teal"
                          >
                            <option>Full Updates</option>
                            <option>Emergency Only</option>
                            <option>No Access</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: EASE }}
                >
                  <SegmentCTA tag={seg.tag} />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}