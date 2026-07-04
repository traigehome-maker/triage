"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WHATSAPP, SNAPSHOT_POINTS } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp, FadeIn } from "./shared/motion";

type DemoTab = "vitals" | "medications" | "history" | "notes";

const DEMO_TABS: { key: DemoTab; label: string }[] = [
  { key: "vitals", label: "Vitals" },
  { key: "medications", label: "Medications" },
  { key: "history", label: "Visits" },
  { key: "notes", label: "Notes" },
];

const VITALS = [
  { l: "Temp", v: "36.8°C" },
  { l: "BP", v: "118/76" },
  { l: "Pulse", v: "82 bpm" },
  { l: "Sugar", v: "105 mg/dL" },
  { l: "SpO₂", v: "98%" },
  { l: "BMI", v: "23.4" },
];

const MEDICATIONS = [
  { name: "Metformin 500mg", freq: "Twice daily, with meals" },
  { name: "Amlodipine 5mg", freq: "Once daily, morning" },
  { name: "Multivitamin", freq: "Once daily" },
];

const VISIT_HISTORY = [
  { date: "2 Jul 2026", note: "Routine wellness visit, all vitals within range." },
  { date: "14 Jun 2026", note: "Follow up on blood sugar, dietary plan issued." },
  { date: "30 May 2026", note: "Initial consultation and care plan set up." },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SnapshotTeaser() {
  const [showDemo, setShowDemo] = useState(false);
  const [demoTab, setDemoTab] = useState<DemoTab>("vitals");
  const reduce = !!useReducedMotion();

  useEffect(() => {
    if (!showDemo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowDemo(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [showDemo]);

  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-28 px-5 sm:px-6">
        {/* white, flowing into TriageSnapshot's own teal at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#e3f6f2]" />
        <motion.div
          animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -16, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-6%] top-[8%] h-80 w-80 rounded-full bg-[#00b99d]/[0.08] blur-[120px]"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, -16, 0], y: [0, 14, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-6%] bottom-[-6%] h-72 w-72 rounded-full bg-[#aa7130]/[0.06] blur-[120px]"
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.02] mix-blend-multiply pointer-events-none" aria-hidden="true">
          <filter id="snapshotGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#snapshotGrain)" />
        </svg>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-3 mb-7 sm:mb-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                  className="w-8 h-[1px] bg-[#00b99d]"
                />
                <span className="font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase text-[#00897a]">
                  TriageSnapshot
                </span>
              </div>
              <h2
                className="font-raleway font-light leading-[1.1] mb-5 tracking-tight"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                <span className="text-[#0f172a]">Your health story in</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #02385a 0%, #046657 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  one secure view.
                </span>
              </h2>
              <p className="text-slate-500 text-[15px] sm:text-[16px] leading-[1.85] mb-9 sm:mb-10 max-w-md font-nunito">
                A digital health summary that captures vital signs, medications,
                care history, assessments and visit records in one shareable format.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-3 mb-9 sm:mb-10">
                {SNAPSHOT_POINTS.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[#00897a]"
                      style={{ background: "rgba(0,185,157,0.1)" }}
                    >
                      <Icons.Check />
                    </div>
                    <span className="text-slate-600 text-sm font-nunito">{p}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
                }}
                style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#aa7130] px-7 py-3.5 font-raleway text-sm font-semibold text-white shadow-[0_6px_18px_-6px_rgba(170,113,48,0.5)] transition-shadow duration-500 hover:shadow-[0_12px_28px_-6px_rgba(170,113,48,0.8)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(100px circle at var(--gx) var(--gy), rgba(255,255,255,0.3), transparent 70%)" }}
                />
                <span className="relative">Included in all plans</span>
                <motion.span
                  className="relative flex"
                  initial={false}
                  variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                  animate="rest"
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <Icons.ArrowRight />
                </motion.span>
              </a>
            </FadeUp>
          </div>

          <FadeIn delay={0.15}>
            <div className="relative group">
              <div className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-[#aa7130]/25 via-[#00b99d]/20 to-[#b745d8]/15 blur-3xl pointer-events-none" />

              <button
                type="button"
                onClick={() => setShowDemo(true)}
                className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/0 transition-colors duration-300 sm:group-hover:bg-black/40"
                aria-label="Open interactive TriageSnapshot demo"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-raleway text-[13px] font-semibold text-[#02385a] shadow-xl transition-opacity duration-300 sm:opacity-0 sm:px-6 sm:py-3 sm:text-sm sm:group-hover:opacity-100">
                  <Icons.Expand /> Live Demo
                </span>
              </button>

              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="px-6 py-4 flex items-center justify-between" style={{ background: "#b45309" }}>
                  <div>
                    <p className="font-raleway font-bold text-white text-sm leading-none">TriageHome</p>
                    <p className="text-white/60 text-[10px] mt-0.5">Health Passport &middot; TriageSnapshot</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-[10px]">
                      {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                    </p>
                    <p className="text-white/40 text-[10px]">www.triage-home.com</p>
                  </div>
                </div>

                <div className="px-6 py-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-white/[0.04] rounded-xl px-4 py-3">
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Client</p>
                      <p className="text-white font-raleway font-bold">Adebayo Tunde</p>
                      <p className="text-white/40 text-[11px]">Male &middot; 42 yrs</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#aa7130]/20 flex items-center justify-center">
                      <div className="w-5 h-5 text-[#aa7130]">
                        <Icons.UserShield />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2 font-semibold">Vital Signs</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { l: "Temp", v: "36.8°C", ok: true },
                        { l: "BP", v: "118/76", ok: true },
                        { l: "Pulse", v: "82 bpm", ok: true },
                        { l: "Sugar", v: "105", ok: false },
                        { l: "SpO₂", v: "98%", ok: true },
                        { l: "BMI", v: "23.4", ok: true },
                      ].map((v) => (
                        <div key={v.l} className="bg-white/[0.04] rounded-lg px-2.5 py-2">
                          <p className="text-white/30 text-[9px] mb-0.5">{v.l}</p>
                          <p className="text-white font-raleway font-bold text-xs leading-none">{v.v}</p>
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1"
                            style={{ background: v.ok ? "#00b99d" : "#aa7130" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="rounded-xl px-4 py-3"
                    style={{ background: "rgba(170,113,48,0.1)", border: "1px solid rgba(170,113,48,0.2)" }}
                  >
                    <p className="text-[#aa7130] text-[10px] font-bold uppercase tracking-wider mb-1">Provider Note</p>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Blood sugar slightly elevated. Dietary review recommended. All other vitals normal.
                    </p>
                    <p className="text-white/25 text-[10px] mt-1.5">Kemisola I., RN, TriageHome</p>
                  </div>
                </div>

                <div className="px-6 py-3 text-center" style={{ background: "#1e2937" }}>
                  <p className="text-slate-500 text-[10px]">For informational purposes only. Consult a licensed professional.</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 z-30"
                style={{ border: "1px solid #e4ebf0" }}
              >
                <div className="w-5 h-5 text-[#00b99d]">
                  <Icons.Phone />
                </div>
                <div>
                  <p className="font-raleway font-bold text-[#02385a] text-[11px]">Sent to WhatsApp</p>
                  <p className="text-slate-400 text-[10px]">Instant delivery</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 z-30"
                style={{ border: "1px solid #e4ebf0" }}
              >
                <div className="w-5 h-5 text-[#aa7130]">
                  <Icons.Shield />
                </div>
                <div>
                  <p className="font-raleway font-bold text-[#02385a] text-[11px]">PDF Health Passport</p>
                  <p className="text-slate-400 text-[10px]">Ready to download</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Live demo lightbox: phone-framed, tabbed, TriageSnapshot you can actually click through */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="TriageSnapshot live demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-5 sm:px-6"
            onClick={() => setShowDemo(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0f172a] rounded-[2rem] overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* phone-style status notch, purely decorative, sells the "this is the app" idea */}
              <div className="flex justify-center pt-2.5">
                <div className="h-1 w-10 rounded-full bg-white/15" />
              </div>

              <div className="relative overflow-hidden px-6 pt-3 pb-4 flex items-center justify-between" style={{ background: "#b45309" }}>
                {!reduce && (
                  <motion.div
                    animate={{ x: ["-30%", "130%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
                <p className="relative font-raleway font-bold text-white text-sm">TriageSnapshot, Live Demo</p>
                <motion.button
                  onClick={() => setShowDemo(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="relative text-white/70 hover:text-white"
                  aria-label="Close"
                >
                  <Icons.Close />
                </motion.button>
              </div>

              <div className="relative flex border-b border-white/10">
                {DEMO_TABS.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setDemoTab(t.key)}
                    className="relative flex-1 py-3 text-[12px] font-raleway font-semibold transition-colors"
                    style={{ color: demoTab === t.key ? "#d4a050" : "rgba(255,255,255,0.4)" }}
                  >
                    {t.label}
                    {demoTab === t.key && (
                      <motion.div
                        layoutId="demo-tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#aa7130]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={demoTab}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    {demoTab === "vitals" && (
                      <div className="grid grid-cols-3 gap-2">
                        {VITALS.map((v, i) => (
                          <motion.div
                            key={v.l}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="bg-white/[0.04] rounded-lg px-2.5 py-3"
                          >
                            <p className="text-white/30 text-[9px] mb-1">{v.l}</p>
                            <p className="text-white font-raleway font-bold text-sm">{v.v}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {demoTab === "medications" && (
                      <div className="flex flex-col gap-2.5">
                        {MEDICATIONS.map((m, i) => (
                          <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                            className="bg-white/[0.04] rounded-lg px-4 py-3"
                          >
                            <p className="text-white font-raleway font-semibold text-[13px]">{m.name}</p>
                            <p className="text-white/40 text-[11px] mt-0.5">{m.freq}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {demoTab === "history" && (
                      <div className="flex flex-col gap-3">
                        {VISIT_HISTORY.map((h, i) => (
                          <motion.div
                            key={h.date}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07, duration: 0.3 }}
                            className="flex gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00b99d] mt-1.5 flex-shrink-0" />
                            <div>
                              <p className="text-white/40 text-[10px] uppercase tracking-wide">{h.date}</p>
                              <p className="text-white/70 text-[13px] leading-relaxed">{h.note}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {demoTab === "notes" && (
                      <div
                        className="rounded-xl px-4 py-3"
                        style={{ background: "rgba(170,113,48,0.1)", border: "1px solid rgba(170,113,48,0.2)" }}
                      >
                        <p className="text-[#aa7130] text-[10px] font-bold uppercase tracking-wider mb-1">Provider Note</p>
                        <p className="text-white/60 text-[13px] leading-relaxed">
                          Blood sugar slightly elevated at last visit. Dietary review recommended.
                          All other vitals normal. Next check in scheduled for two weeks.
                        </p>
                        <p className="text-white/25 text-[10px] mt-2">Kemisola I., RN, TriageHome</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* quiet progress dots, so it reads as a demo you're moving through, not a static tab set */}
              <div className="flex justify-center gap-1.5 pb-4">
                {DEMO_TABS.map((t) => (
                  <div
                    key={t.key}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: demoTab === t.key ? 16 : 6,
                      background: demoTab === t.key ? "#aa7130" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}