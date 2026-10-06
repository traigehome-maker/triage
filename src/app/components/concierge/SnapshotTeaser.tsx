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
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
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
              <div className="inline-flex items-center gap-3 mb-6 sm:mb-7">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                  className="w-8 h-[2px] bg-[#00b99d]"
                />
                <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-[#00897a]">
                  TriageSnapshot
                </span>
              </div>
              <h2
                className="font-raleway font-extrabold leading-[1.12] mb-5 tracking-tight text-3xl sm:text-4xl lg:text-5xl"
              >
                <span className="text-[#0f172a]">Your health story in </span>
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
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-9 max-w-lg font-nunito">
                A digital health summary that captures vital signs, medications,
                care history, assessments and visit records in one shareable format.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-3.5 mb-9 sm:mb-10">
                {SNAPSHOT_POINTS.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[#00897a]"
                      style={{ background: "rgba(0,185,157,0.14)" }}
                    >
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base font-nunito font-medium">{p}</span>
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
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#aa7130] px-8 py-4 font-raleway text-sm sm:text-base font-bold text-white shadow-[0_6px_18px_-6px_rgba(170,113,48,0.5)] transition-shadow duration-500 hover:shadow-[0_12px_28px_-6px_rgba(170,113,48,0.8)]"
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
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-raleway text-sm font-bold text-[#02385a] shadow-xl transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  <Icons.Expand /> Live Demo
                </span>
              </button>

              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "#02385a", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div className="px-6 py-4 flex items-center justify-between" style={{ background: "#aa7130" }}>
                  <div>
                    <p className="font-raleway font-bold text-white text-base leading-none">TriageHome</p>
                    <p className="text-white/80 text-xs mt-1">Health Passport &middot; TriageSnapshot</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-xs">
                      {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                    </p>
                    <p className="text-white/60 text-[11px]">www.triage-home.com</p>
                  </div>
                </div>

                <div className="px-6 py-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-white/[0.08] rounded-xl px-4 py-3.5">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Client</p>
                      <p className="text-white font-raleway font-bold text-base">Adebayo Tunde</p>
                      <p className="text-white/70 text-xs">Male &middot; 42 yrs</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#aa7130]/25 flex items-center justify-center">
                      <div className="w-5 h-5 text-[#ffc870]">
                        <Icons.UserShield />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-bold font-raleway">Vital Signs</p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                      {[
                        { l: "Temp", v: "36.8°C", ok: true },
                        { l: "BP", v: "118/76", ok: true },
                        { l: "Pulse", v: "82 bpm", ok: true },
                        { l: "Sugar", v: "105", ok: false },
                        { l: "SpO₂", v: "98%", ok: true },
                        { l: "BMI", v: "23.4", ok: true },
                      ].map((v) => (
                        <div key={v.l} className="bg-white/[0.08] rounded-lg px-3 py-2.5">
                          <p className="text-white/60 text-[10px] mb-0.5 font-nunito">{v.l}</p>
                          <p className="text-white font-raleway font-bold text-sm leading-none">{v.v}</p>
                          <div
                            className="w-2 h-2 rounded-full mt-1.5"
                            style={{ background: v.ok ? "#00b99d" : "#aa7130" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="rounded-xl px-4 py-3.5"
                    style={{ background: "rgba(170,113,48,0.18)", border: "1px solid rgba(170,113,48,0.3)" }}
                  >
                    <p className="text-[#e6b060] text-xs font-bold uppercase tracking-wider mb-1 font-raleway">Provider Note</p>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-nunito">
                      Blood sugar slightly elevated. Dietary review recommended. All other vitals normal.
                    </p>
                    <p className="text-white/50 text-xs mt-1.5 font-nunito">Kemisola I., RN, TriageHome</p>
                  </div>
                </div>

                <div className="px-6 py-3 text-center" style={{ background: "#012644" }}>
                  <p className="text-slate-400 text-xs font-nunito">For informational purposes only. Consult a licensed professional.</p>
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
                  <p className="font-raleway font-bold text-[#02385a] text-xs">Sent to WhatsApp</p>
                  <p className="text-slate-500 text-[11px] font-nunito">Instant delivery</p>
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
                  <p className="font-raleway font-bold text-[#02385a] text-xs">PDF Health Passport</p>
                  <p className="text-slate-500 text-[11px] font-nunito">Ready to download</p>
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
              className="relative w-full max-w-md bg-[#02385a] rounded-[2rem] overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {/* phone-style status notch, purely decorative, sells the "this is the app" idea */}
              <div className="flex justify-center pt-2.5">
                <div className="h-1 w-10 rounded-full bg-white/15" />
              </div>

              <div className="relative overflow-hidden px-6 pt-3 pb-4 flex items-center justify-between" style={{ background: "#aa7130" }}>
                {!reduce && (
                  <motion.div
                    animate={{ x: ["-30%", "130%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
                <p className="relative font-raleway font-bold text-white text-base">TriageSnapshot, Live Demo</p>
                <motion.button
                  onClick={() => setShowDemo(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="relative text-white/80 hover:text-white"
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
                    className="relative flex-1 py-3 text-sm font-raleway font-bold transition-colors"
                    style={{ color: demoTab === t.key ? "#ffc870" : "rgba(255,255,255,0.6)" }}
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
                      <div className="grid grid-cols-3 gap-2.5">
                        {VITALS.map((v, i) => (
                          <motion.div
                            key={v.l}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="bg-white/[0.05] rounded-lg px-3 py-3"
                          >
                            <p className="text-white/60 text-xs mb-1 font-nunito">{v.l}</p>
                            <p className="text-white font-raleway font-bold text-base">{v.v}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {demoTab === "medications" && (
                      <div className="flex flex-col gap-3">
                        {MEDICATIONS.map((m, i) => (
                          <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                            className="bg-white/[0.05] rounded-lg px-4 py-3.5"
                          >
                            <p className="text-white font-raleway font-bold text-sm sm:text-base">{m.name}</p>
                            <p className="text-white/70 text-xs sm:text-sm mt-0.5 font-nunito">{m.freq}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {demoTab === "history" && (
                      <div className="flex flex-col gap-3.5">
                        {VISIT_HISTORY.map((h, i) => (
                          <motion.div
                            key={h.date}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07, duration: 0.3 }}
                            className="flex gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#00b99d] mt-1.5 flex-shrink-0" />
                            <div>
                              <p className="text-white/60 text-xs uppercase tracking-wide font-bold font-raleway">{h.date}</p>
                              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-nunito">{h.note}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {demoTab === "notes" && (
                      <div
                        className="rounded-xl px-4 py-3.5"
                        style={{ background: "rgba(170,113,48,0.12)", border: "1px solid rgba(170,113,48,0.25)" }}
                      >
                        <p className="text-[#e6b060] text-xs font-bold uppercase tracking-wider mb-1 font-raleway">Provider Note</p>
                        <p className="text-white/85 text-sm leading-relaxed font-nunito">
                          Blood sugar slightly elevated at last visit. Dietary review recommended.
                          All other vitals normal. Next check in scheduled for two weeks.
                        </p>
                        <p className="text-white/50 text-xs mt-2 font-nunito">Kemisola I., RN, TriageHome</p>
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
                      background: demoTab === t.key ? "#aa7130" : "rgba(255,255,255,0.25)",
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