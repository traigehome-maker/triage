"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PLANS, PERSONA_COPY, PERSONAS } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp } from "./shared/motion";

const accessPlans = [
   {
    title: "TriagePassport",
    price: "₦450,000",
    duration: "/month",
    description:
      "A premium concierge-style healthcare access plan delivering elevated support, coordination, and comfort.",
    tag: "Premium Access",
    image: "/images/plans/passport.webp",
    features: [
      "Priority care coordination",
      "Premium home visits",
      "Dedicated care support",
      "Fast response healthcare access",
      "Wellness and monitoring assistance",
    ],
  },
  {
    title: "Assure Plan",
    price: "₦120,000",
    duration: "/month",
    description:
      "Premium in-home wellness support designed to provide peace of mind, proactive monitoring, and compassionate care.",
    tag: "Most Popular",
    image: "/images/plans/assure.webp",
    features: [
      "Routine wellness checks",
      "Medication reminders",
      "Home caregiver support",
      "Priority health coordination",
      "Monthly care monitoring",
    ],
  },
  {
    title: "TriagePostOp",
    price: "Tailored",
    duration: "Pricing",
    description:
      "Post-surgical recovery support built around safe healing, professional monitoring, and personalized assistance.",
    tag: "Recovery Care",
    image: "/images/plans/postop.webp",
    features: [
      "Post-operative monitoring",
      "Medication assistance",
      "Wound care support",
      "Recovery wellness tracking",
      "Personalized care coordination",
    ],
  },
];

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
    <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
      {PERSONAS.map((p) => {
        const isActive = persona === p.key;
        return (
          <button
            key={p.key}
            type="button"
            onClick={() => onSelect(p.key as PersonaKey)}
            className="relative rounded-full px-5 sm:px-6 py-2.5 font-raleway text-sm sm:text-base font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa7130]"
          >
            {isActive && (
              <motion.span
                layoutId="persona-pill"
                className="absolute inset-0 rounded-full bg-[#02385a]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-600 hover:text-slate-900"}`}>
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
        className="relative h-1 w-full"
        style={{ background: plan.featured ? "linear-gradient(90deg, #aa7130, #ffbf00)" : `${plan.accent}80` }}
      />

      <div className="relative p-7 sm:p-8 flex flex-col flex-1">
        <div className="mb-6">
          <span
            className="inline-block text-xs font-raleway font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full mb-3.5"
            style={{
              background: plan.featured ? "rgba(170,113,48,0.25)" : `${plan.accent}15`,
              color: plan.featured ? "#e6b060" : plan.accent,
            }}
          >
            {plan.tag}
          </span>
          <h3
            className="font-raleway font-bold text-2xl sm:text-3xl mb-2"
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
              className="text-sm sm:text-base font-nunito leading-relaxed"
              style={{ color: plan.featured ? "rgba(255,255,255,0.8)" : "#475569" }}
            >
              {tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        <div
          className="mb-8 pb-7 border-b"
          style={{ borderColor: plan.featured ? "rgba(255,255,255,0.15)" : "#e2e8f0" }}
        >
          <span
            className="font-raleway font-extrabold text-3xl sm:text-4xl"
            style={{ color: plan.featured ? "white" : "#0f172a", lineHeight: 1 }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm sm:text-base ml-1.5 font-nunito font-semibold" style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "#64748b" }}>
              {plan.period}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3.5 flex-1 mb-8">
          {features.map((f, fi) => (
            <div key={fi === 0 ? f : `static-${fi}`} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: plan.featured ? "rgba(170,113,48,0.3)" : `${plan.accent}18`,
                  color: plan.featured ? "#ffc870" : plan.accent,
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
                    className="text-sm sm:text-base font-nunito leading-snug"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.92)" : "#334155" }}
                  >
                    {f}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <span className="text-sm sm:text-base font-nunito leading-snug" style={{ color: plan.featured ? "rgba(255,255,255,0.92)" : "#334155" }}>
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
          className="group/cta relative flex items-center justify-center gap-2 w-full overflow-hidden py-4 rounded-xl font-raleway font-bold text-sm sm:text-base tracking-wide transition-all duration-300"
        >
          <span
            className="absolute inset-0 rounded-xl transition-colors duration-300"
            style={{
              background: plan.featured ? "linear-gradient(135deg, #aa7130, #8c5c22)" : `${plan.accent}15`,
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
            style={{ background: `radial-gradient(90px circle at var(--bx) var(--by), ${plan.featured ? "rgba(255,255,255,0.28)" : hexToRgba(plan.accent, 0.18)}, transparent 70%)` }}
          />
          <span className="relative font-bold" style={{ color: plan.featured ? "white" : plan.accent }}>
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

  const handleWhatsapp = (planTitle: string) => {
    const text = `Hello TriageConcierge, I got this from the website and I want access to the ${planTitle}${personaLabel ? ` for ${personaLabel}` : ""}.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="plans" className="relative overflow-hidden border-y border-slate-100 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
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
        style={{ willChange: "transform" }}
        className="absolute left-[-6%] bottom-[-4%] h-72 w-72 rounded-full bg-[#02385a]/[0.05] blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto">
        <FadeUp className="text-center mb-10 sm:mb-12">
          <p className="text-[#aa7130] font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-4">
            Access Plans
          </p>
          <h2
            className="font-raleway font-extrabold leading-[1.15] mx-auto mb-4 tracking-tight text-3xl sm:text-4xl lg:text-5xl"
            style={{
              background: "linear-gradient(90deg, #02385a 0%, #aa7130 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Find the plan that fits your life.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-nunito leading-relaxed">
            Every plan includes a dedicated PM Rep, verified providers, and
            access to the TriageSnapshot health summary.
          </p>
        </FadeUp>

        <FadeUp className="flex flex-col items-center gap-3 mb-14">
          <p className="text-slate-500 text-xs sm:text-sm font-raleway font-bold tracking-[0.14em] uppercase">
            I need care for
          </p>
          <PersonaTabs persona={persona} onSelect={setPersona} />
        </FadeUp>

        {/* ========================================================
            PLANS FROM ACCESS PLANS PAGE
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accessPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(2,56,90,0.06)] transition-all duration-700 hover:shadow-[0_30px_80px_rgba(2,56,90,0.12)] hover:border-slate-300 lg:rounded-[34px]">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#02385A]/[0.03] via-transparent to-[#AA7130]/[0.05] opacity-0 transition duration-700 group-hover:opacity-100 pointer-events-none" />

                <div>
                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-[#F6FAF9]">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain transition duration-[1400ms] group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#001623]/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                      <div className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-nunito font-semibold text-[#02385A] shadow-md backdrop-blur-xl sm:px-4 sm:text-xs">
                        {plan.tag}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative p-5 sm:p-6 lg:p-7">
                    <div className="mb-5">
                      <h3 className="text-2xl font-raleway font-semibold leading-tight text-[#02385A] sm:text-[28px] lg:text-[30px]">
                        {plan.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#5B717A] sm:text-[15px] font-nunito">
                        {plan.description}
                      </p>
                    </div>

                    {/* PRICE */}
                    <div className="mb-7 flex flex-wrap items-end gap-2">
                      <span className="text-[2rem] font-raleway font-semibold tracking-tight text-[#02385A] sm:text-[40px] lg:text-[42px]">
                        {plan.price}
                      </span>

                      <span className="mb-2 text-sm text-[#738992] font-nunito">
                        {plan.duration}
                      </span>
                    </div>

                    {/* FEATURES */}
                    <div className="mb-8 space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-[2px] shrink-0 text-[#AA7130]"
                          />

                          <span className="text-sm leading-relaxed text-[#4D646E] font-nunito">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA BUTTON */}
                <div className="p-5 pt-0 sm:p-6 sm:pt-0 lg:p-7 lg:pt-0">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleWhatsapp(plan.title)}
                    className="group/button relative w-full overflow-hidden rounded-[20px] bg-[#02385A] px-5 py-4 text-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(2,56,90,0.28)] sm:rounded-[22px] sm:px-6 sm:py-5 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#02385A] to-[#0A4A70]" />

                    <div className="relative flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[15px] font-nunito font-semibold sm:text-[16px]">
                          Get Access
                        </p>

                        <p className="text-xs text-white/70 sm:text-sm font-nunito">
                          Speak with TriageHome
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-500 group-hover/button:translate-x-1 sm:h-12 sm:w-12">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            PREVIOUS CONCIERGE CARDS (COMMENTED OUT)
        ======================================================== */}
        {/*
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PLANS.map((plan, i) => {
            const override = PERSONA_COPY[persona]?.[plan.key] || {
              tagline: plan.tagline,
              lead: plan.features[0] || plan.tagline,
            };
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
        */}
      </div>
    </section>
  );
}