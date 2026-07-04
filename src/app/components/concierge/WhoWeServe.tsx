"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { SEGMENTS, WHATSAPP, CTA } from "./shared/config";
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

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

/** Segment switcher: an animated pill slides between tabs (shared layout
 *  animation) instead of each button hard-swapping its own background. */
function SegmentTabs({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mb-10 inline-flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
      {SEGMENTS.map((seg, i) => {
        const isActive = active === i;
        return (
          <button
            key={seg.tag}
            type="button"
            onClick={() => onSelect(i)}
            className="relative rounded-full px-5 py-2.5 font-raleway text-[13px] font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa7130]"
          >
            {isActive && (
              <motion.span
                layoutId="segment-pill"
                className="absolute inset-0 rounded-full bg-[#02385a]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-500 hover:text-slate-700"}`}>
              {seg.tag}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** The "talk to a rep" link: an arrow that eases out and an underline
 *  that draws in from the left, so it feels intentional on hover rather
 *  than just changing color. */
function TalkToRepLink() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex w-fit items-center gap-2.5 font-raleway text-sm font-semibold text-[#aa7130] transition-colors duration-300 hover:text-[#8c5c22]"
    >
      <span className="relative">
        {CTA.talkToRep}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
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
    <section className="bg-[#fafafa] border-y border-slate-100 py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-12 sm:mb-14">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            Who We Serve
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] max-w-xl tracking-tight"
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              background: "linear-gradient(90deg, #02385a 0%, #aa7130 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Supporting executives, organisations and professionals across continents.
          </h2>
        </FadeUp>

        <SegmentTabs active={activeSegment} onSelect={setActiveSegment} />

        <div className="relative rounded-3xl border border-slate-200 overflow-hidden">
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
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[500px] overflow-hidden">
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
                  className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4"
                >
                  {seg.tag}
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15, ease: EASE }}
                  className="font-raleway font-light text-[#0f172a] leading-[1.2] mb-5 tracking-tight"
                  style={{ fontSize: "clamp(21px, 2.5vw, 32px)" }}
                >
                  {seg.headline}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
                  className="text-slate-500 text-[15px] leading-[1.85] mb-8 font-nunito"
                >
                  {seg.body}
                </motion.p>

                <motion.div
                  variants={listStagger}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-3 mb-6"
                >
                  {seg.services.map((s) => (
                    <motion.div key={s} variants={listItem} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[#aa7130]"
                        style={{ background: "rgba(170,113,48,0.1)" }}
                      >
                        <Icons.Check />
                      </div>
                      <span className="text-slate-600 text-sm font-nunito">{s}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Customize Your Circle: interactive mock, only shown on the segment
                    that mentions circle/dashboard reporting (Family Offices & HNIs). */}
                {seg.showCircleBuilder && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3, ease: EASE }}
                    className="mb-8 rounded-2xl border border-slate-200 bg-[#fafafa] p-5"
                  >
                    <p className="font-raleway font-semibold text-[#0f172a] text-[13px] mb-1">
                      Customize Your Circle
                    </p>
                    <p className="text-slate-400 text-[12px] mb-4 leading-relaxed font-nunito">
                      You decide who sees what. Set access levels for each contact on your account.
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {CIRCLE_ROWS.map((row) => (
                        <div
                          key={row.key}
                          className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 transition-colors duration-200 hover:border-[#aa7130]/40"
                        >
                          <span className="text-slate-600 text-[12px] font-medium">{row.label}</span>
                          <select
                            value={circleAccess[row.key]}
                            onChange={(e) =>
                              setCircleAccess((prev) => ({ ...prev, [row.key]: e.target.value }))
                            }
                            className="rounded-md border border-slate-200 bg-transparent px-2 py-1 font-raleway text-[12px] font-semibold text-[#02385a] transition-colors duration-200 focus:outline-none focus:border-[#aa7130]"
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
                  <TalkToRepLink />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}