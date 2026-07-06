"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PLANS, PERSONA_COPY, PERSONAS } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp } from "./shared/motion";

type PersonaKey = "myself" | "household" | "someone";

// Kept local rather than assumed to already exist in shared/config, so this
// file works standalone. If shared/config already exports a WHATSAPP_NUMBER
// or buildWhatsAppLink helper, swap this for that import instead of having
// the number defined in two places.
const WHATSAPP_NUMBER = "2349134664547";

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Builds the exact message the CTA sends, from the plan and persona the
 *  visitor actually chose. Direct: this is someone subscribing, not
 *  someone requesting a call to think it over. */
function buildPlanMessage(planName: string, personaLabel: string) {
  return `Hello TriageConcierge, I'd like to subscribe to the ${planName} plan for ${personaLabel}.`;
}

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Persona switcher: a pill physically slides between options instead of
 *  each button hard-swapping its own background, matching the same
 *  pattern used for the segment tabs elsewhere on the site. */
function PersonaTabs({
  persona,
  onSelect,
}: {
  persona: PersonaKey;
  onSelect: (p: PersonaKey) => void;
}) {
  return (
    <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
      {PERSONAS.map((p) => {
        const isActive = persona === p.key;
        return (
          <button
            key={p.key}
            type="button"
            onClick={() => onSelect(p.key as PersonaKey)}
            className="relative rounded-full px-5 py-2 font-raleway text-[13px] font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa7130]"
          >
            {isActive && (
              <motion.span
                layoutId="persona-pill"
                className="absolute inset-0 rounded-full bg-[#02385a]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-500 hover:text-slate-700"}`}>
              {p.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({
  plan,
  lead,
  tagline,
  personaLabel,
  reduce,
}: {
  plan: (typeof PLANS)[number];
  lead: string;
  tagline: string;
  personaLabel: string;
  reduce: boolean;
}) {
  const features = [...plan.features];
  features[0] = lead;
  const spotlightColor = plan.featured ? "#ffbf00" : plan.accent;

  // this is the actual point of the exercise: the link is rebuilt whenever
  // the persona tab changes, so whatever the visitor clicks always matches
  // what they were just looking at
  const waLink = buildWhatsAppLink(buildPlanMessage(plan.name, personaLabel));

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
    >
      <div
        className="absolute inset-0 rounded-2xl transition-shadow duration-300"
        style={{
          background: plan.featured ? "#02385a" : "white",
          border: plan.featured ? "none" : "1px solid #e2e8f0",
          boxShadow: plan.featured
            ? "0 32px 64px rgba(2,56,90,0.28)"
            : "0 2px 16px rgba(0,0,0,0.04)",
        }}
      />

      {/* cursor-tracked spotlight, colored per plan */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(220px circle at var(--gx) var(--gy), ${hexToRgba(spotlightColor, plan.featured ? 0.14 : 0.08)}, transparent 70%)` }}
      />

      {/* slow sheen loop across the featured card only */}
      {plan.featured && !reduce && (
        <motion.div
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        />
      )}

      <div
        className="relative h-[3px] w-full"
        style={{ background: plan.featured ? "linear-gradient(90deg, #aa7130, #ffbf00)" : `${plan.accent}50` }}
      />

      <div className="relative p-8 flex flex-col flex-1">
        <div className="mb-6">
          <span
            className="inline-block text-[10px] font-raleway font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3"
            style={{
              background: plan.featured ? "rgba(170,113,48,0.2)" : `${plan.accent}12`,
              color: plan.featured ? "#d4a050" : plan.accent,
            }}
          >
            {plan.tag}
          </span>
          <h3
            className="font-raleway font-bold text-2xl mb-1"
            style={{ color: plan.featured ? "white" : "#0f172a" }}
          >
            {plan.name}
          </h3>
          <AnimatePresence mode="wait">
            <motion.p
              key={tagline}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-sm"
              style={{ color: plan.featured ? "rgba(255,255,255,0.5)" : "#94a3b8" }}
            >
              {tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        <div
          className="mb-8 pb-8 border-b"
          style={{ borderColor: plan.featured ? "rgba(255,255,255,0.1)" : "#f1f5f9" }}
        >
          <span
            className="font-raleway font-bold"
            style={{ fontSize: "2.25rem", color: plan.featured ? "white" : "#0f172a", lineHeight: 1 }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm ml-1" style={{ color: plan.featured ? "rgba(255,255,255,0.4)" : "#94a3b8" }}>
              {plan.period}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 flex-1 mb-8">
          {features.map((f, fi) => (
            <div key={fi === 0 ? f : `static-${fi}`} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: plan.featured ? "rgba(170,113,48,0.25)" : `${plan.accent}15`,
                  color: plan.featured ? "#d4a050" : plan.accent,
                }}
              >
                <Icons.Check />
              </div>
              {fi === 0 ? (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={f}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="text-[13px]"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "#475569" }}
                  >
                    {f}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <span className="text-[13px]" style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "#475569" }}>
                  {f}
                </span>
              )}
            </div>
          ))}
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--bx", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--by", `${e.clientY - rect.top}px`);
          }}
          style={{ ["--bx" as string]: "50%", ["--by" as string]: "50%" }}
          className="group/cta relative flex items-center justify-center gap-2 w-full overflow-hidden py-3.5 rounded-xl font-raleway font-semibold text-sm tracking-wide transition-all duration-300"
        >
          <span
            className="absolute inset-0 rounded-xl transition-colors duration-300"
            style={{
              background: plan.featured ? "linear-gradient(135deg, #aa7130, #8c5c22)" : `${plan.accent}12`,
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
            style={{ background: `radial-gradient(90px circle at var(--bx) var(--by), ${plan.featured ? "rgba(255,255,255,0.28)" : hexToRgba(plan.accent, 0.18)}, transparent 70%)` }}
          />
          <span className="relative" style={{ color: plan.featured ? "white" : plan.accent }}>
            Subscribe to {plan.name}
          </span>
          <motion.span
            className="relative flex"
            style={{ color: plan.featured ? "white" : plan.accent }}
            initial={false}
            variants={{ rest: { x: 0 }, hover: { x: 4 } }}
            animate="rest"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <Icons.ArrowRight />
          </motion.span>
        </a>
      </div>
    </div>
  );
}

export default function AccessPlans() {
  const [persona, setPersona] = useState<PersonaKey>("household");
  const reduce = !!useReducedMotion();
  const personaLabel = PERSONAS.find((p) => p.key === persona)?.label ?? "";

  return (
    <section id="plans" className="relative overflow-hidden border-y border-slate-100 py-24 sm:py-28 px-5 sm:px-6">
      {/* white, flowing into a soft navy wash at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#e7eef4]" />
      <motion.div
        animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-6%] top-[10%] h-72 w-72 rounded-full bg-[#aa7130]/[0.06] blur-[120px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -18, 0], y: [0, 16, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-6%] bottom-[-4%] h-72 w-72 rounded-full bg-[#02385a]/[0.05] blur-[120px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.02] mix-blend-multiply pointer-events-none" aria-hidden="true">
        <filter id="plansGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#plansGrain)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="text-center mb-10">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            Access Plans
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] mx-auto mb-4 tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              background: "linear-gradient(90deg, #02385a 0%, #aa7130 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Find the plan that fits your life.
          </h2>
          <p className="text-slate-500 text-[15px] sm:text-[16px] max-w-lg mx-auto font-nunito">
            Every plan includes a dedicated PM Rep, verified providers, and
            access to the TriageSnapshot health summary.
          </p>
        </FadeUp>

        <FadeUp className="flex flex-col items-center gap-3 mb-14">
          <p className="text-slate-400 text-[12px] font-raleway font-semibold tracking-[0.14em] uppercase">
            I need care for
          </p>
          <PersonaTabs persona={persona} onSelect={setPersona} />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => {
            const override = PERSONA_COPY[persona][plan.key];
            return (
              <FadeUp key={plan.key} delay={i * 0.1}>
                <PlanCard
                  plan={plan}
                  lead={override.lead}
                  tagline={override.tagline}
                  personaLabel={personaLabel}
                  reduce={reduce}
                />
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}