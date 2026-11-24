"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  HeartHandshake,
  Globe2,
  Plane,
  ShieldCheck,
  Gift,
  Network,
  Cpu,
  Activity,
  ClipboardList,
  CheckCircle2,
  CalendarClock,
  Layers,
  FlaskConical,
  Repeat,
  Send,
  Mail,
  Phone,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const ACCENTS = ["#aa7130", "#00b99d"] as const;

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function SpotlightCard({
  index,
  variant = "light",
  children,
  className = "",
}: {
  index: number;
  variant?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  const accent = ACCENTS[index % ACCENTS.length];
  const isDark = variant === "dark";

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      style={{
        ["--gx" as string]: "50%",
        ["--gy" as string]: "50%",
        ["--accent" as string]: accent,
      }}
      className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-white/10 bg-white/[0.03] hover:border-white/20"
          : "border-slate-200/80 bg-white shadow-xs hover:border-slate-300/90 hover:shadow-md"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(150px circle at var(--gx) var(--gy), ${hexToRgba(
            accent,
            isDark ? 0.22 : 0.1,
          )}, transparent 70%)`,
        }}
      />

      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ background: accent }}
      />

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-2 right-3 font-raleway text-6xl font-black leading-none transition-colors duration-300 ${
          isDark
            ? "text-white/[0.05] group-hover:text-white/[0.09]"
            : "text-triage-navy/[0.08] group-hover:text-triage-navy/[0.13]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}

function SpotlightIcon({
  icon: Icon,
  index,
  variant = "light",
}: {
  icon: React.ComponentType<{ className?: string }>;
  index: number;
  variant?: "light" | "dark";
}) {
  const accent = ACCENTS[index % ACCENTS.length];
  const isDark = variant === "dark";
  const iconHoverClass =
    index % 2 === 0
      ? "group-hover:text-[#aa7130]"
      : "group-hover:text-[#00b99d]";

  return (
    <div
      className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
        isDark ? "bg-white/10" : "bg-slate-100/80"
      }`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: hexToRgba(accent, isDark ? 0.2 : 0.14),
          boxShadow: `0 0 20px 2px ${hexToRgba(accent, isDark ? 0.4 : 0.22)}`,
        }}
      />
      <Icon
        className={`relative h-6 w-6 transition-colors duration-300 ${
          isDark ? "text-white/80" : "text-triage-navy"
        } ${iconHoverClass}`}
      />
    </div>
  );
}

const PARTNERSHIP_MODEL = [
  {
    number: "01",
    title: "Access",
    subtitle: "Bringing Healthcare Closer",
    desc: "Connects people with registered nurses, health assistants, and medical doctors through mobile services and local access points.",
    icon: Network,
    accent: "text-triage-teal",
    bgAccent: "bg-triage-teal/10",
  },
  {
    number: "02",
    title: "Infrastructure",
    subtitle: "Coordinating Delivery",
    desc: "Combines verified clinicians, Peace of Mind Representatives, equipment, scheduling, and digital workflows to run reliable care.",
    icon: Layers,
    accent: "text-triage-orange",
    bgAccent: "bg-triage-orange/10",
  },
  {
    number: "03",
    title: "Continuity",
    subtitle: "Care Beyond the Visit",
    desc: "Delivers structured Health Snapshots, follow up coordination, and agreed programme reporting across your network.",
    icon: Activity,
    accent: "text-triage-navy",
    bgAccent: "bg-triage-navy/10",
  },
];

const DELIVERABLES = [
  {
    title: "Workplace Wellness",
    desc: "Health checks and wellness programmes for employees, supported by Health Snapshots and programme insights.",
    href: "/triage-pods",
    linkLabel: "Explore Workplace Wellness",
    icon: Building2,
  },
  {
    title: "Community & Public Health",
    desc: "Organised screenings, health education, and outreach programmes where people live and gather.",
    href: "/triage-pods",
    linkLabel: "Explore Community Programmes",
    icon: Globe2,
  },
  {
    title: "TriagePods",
    desc: "Coordinated clinical stations for workplaces, communities, conferences, and agreed locations.",
    href: "/triage-pods",
    linkLabel: "Discover TriagePods",
    icon: HeartHandshake,
  },
  {
    title: "Travel & Conference Support",
    desc: "Planned clinical cover for travelling teams, executives, delegates, and organised events.",
    href: "#enquiry",
    linkLabel: "Arrange Event Support",
    icon: Plane,
  },
  {
    title: "Healthcare Access & TriageConcierge",
    desc: "Dedicated clinical access for employees, executives, and eligible beneficiaries.",
    href: "/triage-concierge",
    linkLabel: "View TriageConcierge",
    icon: ShieldCheck,
  },
  {
    title: "Gift of Peace of Mind",
    desc: "Thoughtful health gifts and clinical care packages for employees and valued stakeholders.",
    href: "/gift-peace-of-mind",
    linkLabel: "Explore Health Gifting",
    icon: Gift,
  },
];

const INSTITUTIONAL_ROLES = [
  {
    title: "Local Delivery Partner",
    desc: "Professional deployment and field healthcare delivery.",
    icon: Network,
  },
  {
    title: "Programme Implementation Partner",
    desc: "Planning, staffing, clinical delivery, and structured reporting.",
    icon: ClipboardList,
  },
  {
    title: "Consortium & Vendor Partner",
    desc: "Local clinical capacity supporting wider institutional programmes.",
    icon: Building2,
  },
  {
    title: "Digital Health Collaboration",
    desc: "Structured Health Snapshots and connected digital workflows.",
    icon: Cpu,
  },
];

const WAYS_TO_PARTNER = [
  {
    title: "Single Engagements",
    desc: "Workplace wellness days, health campaigns, and events.",
    icon: CalendarClock,
  },
  {
    title: "Pilot Programmes",
    desc: "Test a delivery model with a defined group or location.",
    icon: FlaskConical,
  },
  {
    title: "Ongoing Partnerships",
    desc: "Scheduled clinical access and agreed programme reporting.",
    icon: Repeat,
  },
  {
    title: "Implementation & Consortium",
    desc: "Defined local delivery within wider healthcare initiatives.",
    icon: Layers,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    desc: "Listen to your goals, population, and locations.",
  },
  {
    step: "02",
    title: "Agree",
    desc: "Define the clinical model, staffing, and reporting.",
  },
  {
    step: "03",
    title: "Deliver",
    desc: "Coordinate verified clinical teams on the ground.",
  },
  {
    step: "04",
    title: "Document & Review",
    desc: "Provide structured insights and plan next steps.",
  },
];

const PARTNERSHIP_INTERESTS = [
  "Workplace Wellness",
  "Community & Public Health",
  "TriagePods & Local Healthcare Delivery",
  "Travel Health & Conference Support",
  "Healthcare Access & TriageConcierge",
  "Gift of Peace of Mind",
  "Institutional / Consortium Partnership",
  "Digital Health Collaboration",
  "Pilot Programme",
  "Other Partnership Enquiry",
];

export default function PartnershipPage() {
  const shouldReduceMotion = useReducedMotion();
  const [organisation, setOrganisation] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(PARTNERSHIP_INTERESTS[0]);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 as const },
          transition: { duration: 0.5, delay, ease: EASE },
        };

  const handleInstitutionalClick = () => {
    setInterest("Institutional / Consortium Partnership");
    const el = document.getElementById("enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Partnership Proposal Request*
• *Organisation:* ${organisation}
• *Contact Person:* ${contactPerson}
• *Email:* ${email}
• *Phone:* ${phone}
• *Partnership Interest:* ${interest}
• *Brief Description:* ${description || "Not provided"}`;

    window.open(
      `https://wa.me/2349134664547?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  const handleHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--hx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--hy", `${e.clientY - rect.top}px`);
  };

  return (
    <main className="relative overflow-hidden bg-white font-nunito text-slate-800">
      <section
        onMouseMove={handleHeroMove}
        style={{ ["--hx" as string]: "50%", ["--hy" as string]: "50%" }}
        className="group/hero relative flex min-h-[84vh] w-full items-center overflow-hidden bg-triage-navy pt-32 pb-20 text-white"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(166,210,0,0.08),transparent_55%)]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
            style={{
              background:
                "radial-gradient(420px circle at var(--hx) var(--hy), rgba(0, 185, 157, 0.14), transparent 70%)",
            }}
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute left-10 top-20 h-72 w-72 rounded-full bg-triage-lime/10 blur-[120px]"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-triage-teal/15 blur-[140px]"
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-10">
          <div className="text-center lg:col-span-7 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-4 font-raleway text-xs font-bold uppercase tracking-[0.2em] text-triage-lime sm:text-sm"
            >
              One Connection. More Ways To Deliver Care
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-raleway text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Your Healthcare Partner.{" "}
              <span className="text-triage-lime">
                Beyond Conventional Facilities.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0"
            >
              TriageHome is a mobile healthcare access network partnering with
              HMOs, providers, businesses, and institutions to deliver
              coordinated clinical care in workplaces, homes, and communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <motion.a
                href="#partnership-model"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group/btn inline-flex items-center gap-3 rounded-full bg-triage-orange px-8 py-4 font-raleway text-sm font-bold tracking-wide text-white shadow-lg transition-colors hover:bg-[#8c5c22]"
              >
                <span>Explore Partnership Opportunities</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </motion.a>
              <motion.a
                href="#enquiry"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-raleway text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20"
              >
                Request a Proposal
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl transition-all duration-500 hover:border-triage-lime/40 hover:shadow-[0_24px_60px_rgba(0,185,157,0.2)]">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-20 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-triage-lime via-triage-teal to-triage-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <img
                src="/images/hero/team5.webp"
                alt="TriageHome Healthcare Partnerships"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-triage-navy/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-75" />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="partnership-model"
        className="border-b border-slate-100 bg-slate-50/70 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...reveal()}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="font-raleway text-xs font-bold uppercase tracking-[0.18em] text-triage-orange">
              Our Partnership Model
            </p>
            <h2 className="mt-3 font-raleway text-3xl font-bold text-triage-navy sm:text-4xl">
              Access. Infrastructure. Continuity.
            </h2>
            <p className="mt-3 text-base font-medium text-triage-teal">
              3 Connected Capabilities. One Healthcare Network.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {PARTNERSHIP_MODEL.map((item, idx) => (
              <motion.div key={item.number} {...reveal(idx * 0.06)}>
                <SpotlightCard index={idx} variant="light" className="p-7">
                  <SpotlightIcon icon={item.icon} index={idx} variant="light" />
                  <h3 className="font-raleway text-xl font-bold text-triage-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-raleway text-xs font-bold uppercase tracking-wider text-triage-orange">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...reveal()}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="font-raleway text-xs font-bold uppercase tracking-[0.18em] text-triage-orange">
              What We Deliver
            </p>
            <h2 className="mt-3 font-raleway text-3xl font-bold text-triage-navy sm:text-4xl">
              Different Needs. One Delivery Network.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From workplace wellness and on ground clinical teams to population
              health access.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((item, idx) => (
              <motion.div key={item.title} {...reveal(idx * 0.05)}>
                <SpotlightCard index={idx} variant="light" className="p-7">
                  <div className="flex-1">
                    <SpotlightIcon
                      icon={item.icon}
                      index={idx}
                      variant="light"
                    />
                    <h3 className="font-raleway text-lg font-bold text-triage-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 font-raleway text-xs font-bold uppercase tracking-wider text-triage-orange transition-colors group-hover:text-triage-navy"
                    >
                      <span>{item.linkLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#012644] via-[#02385a] to-[#012644] px-6 py-20 text-white sm:py-24">
        <motion.div
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b99d]/[0.06] blur-[140px]"
        />
        <motion.div
          animate={shouldReduceMotion ? undefined : { x: [0, 24, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="pointer-events-none absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-[#aa7130]/[0.12] blur-[110px]"
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div {...reveal()} className="lg:col-span-5">
              <p className="font-raleway text-xs font-bold uppercase tracking-[0.18em] text-triage-lime">
                Institutional &amp; Strategic Partnerships
              </p>
              <h2 className="mt-3 font-raleway text-3xl font-bold leading-tight text-white sm:text-4xl">
                Your Last Mile Healthcare Delivery Partner.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                We collaborate with governments, foundations, UN agencies,
                healthcare institutions, and private sector partners seeking
                dependable teams, coordinated services, and reliable
                documentation.
              </p>

              <div className="mt-8">
                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  onClick={handleInstitutionalClick}
                  className="inline-flex items-center gap-3 rounded-full bg-triage-orange px-7 py-3.5 font-raleway text-sm font-bold text-white shadow-lg transition hover:bg-[#8c5c22]"
                >
                  <span>Discuss an Institutional Partnership</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {INSTITUTIONAL_ROLES.map((role, idx) => (
                <motion.div key={role.title} {...reveal(idx * 0.06)}>
                  <SpotlightCard index={idx} variant="dark">
                    <SpotlightIcon
                      icon={role.icon}
                      index={idx}
                      variant="dark"
                    />
                    <h3 className="font-raleway text-base font-bold text-white sm:text-lg">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
                      {role.desc}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50/70 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...reveal()}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="font-raleway text-xs font-bold uppercase tracking-[0.18em] text-triage-orange">
              Ways to Partner
            </p>
            <h2 className="mt-3 font-raleway text-3xl font-bold text-triage-navy sm:text-4xl">
              Flexible Partnerships. Practical Delivery.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WAYS_TO_PARTNER.map((way, idx) => (
              <motion.div key={way.title} {...reveal(idx * 0.05)}>
                <SpotlightCard index={idx} variant="light">
                  <SpotlightIcon icon={way.icon} index={idx} variant="light" />
                  <h3 className="font-raleway text-base font-bold text-triage-navy">
                    {way.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {way.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...reveal()}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="font-raleway text-xs font-bold uppercase tracking-[0.18em] text-triage-orange">
              From Idea To Delivery
            </p>
            <h2 className="mt-3 font-raleway text-3xl font-bold text-triage-navy sm:text-4xl">
              You Have A Need. We Help Build the Response.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We listen to your goals, agree on the clinical model and
              reporting, deploy our team, and review outcomes together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div key={item.step} {...reveal(idx * 0.05)}>
                <SpotlightCard index={idx} variant="light">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-triage-navy font-raleway text-xs font-bold text-white">
                      {item.step}
                    </span>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-triage-orange lg:block" />
                    )}
                  </div>
                  <h3 className="font-raleway text-lg font-bold text-triage-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-5">
              <p className="font-raleway text-xs font-bold uppercase tracking-[0.18em] text-triage-orange">
                Start A Conversation
              </p>
              <h2 className="mt-3 font-raleway text-3xl font-bold leading-tight text-triage-navy sm:text-4xl">
                Let’s Put Healthcare Within Reach, Together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Share your goals and our team will prepare a tailored
                partnership proposal.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-triage-navy/5 text-triage-navy">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:support@triage-home.com"
                      className="font-semibold text-triage-navy hover:underline"
                    >
                      support@triage-home.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-triage-navy/5 text-triage-navy">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone / WhatsApp
                    </p>
                    <a
                      href="https://wa.me/2349134664547"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-triage-navy hover:underline"
                    >
                      +234 913 466 4547
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)} className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-lg sm:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="py-10 text-center"
                    >
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-raleway text-2xl font-bold text-triage-navy">
                        Partnership Enquiry Ready
                      </h3>
                      <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                        Your proposal details are ready. You can also reach us
                        directly at{" "}
                        <span className="font-semibold text-triage-navy">
                          support@triage-home.com
                        </span>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 rounded-full border border-slate-200 px-6 py-2.5 font-raleway text-xs font-bold uppercase tracking-wider text-triage-navy transition hover:bg-slate-50"
                      >
                        Submit Another Enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="organisation"
                            className="mb-1.5 block font-raleway text-xs font-bold uppercase tracking-wider text-slate-600"
                          >
                            Organisation *
                          </label>
                          <input
                            id="organisation"
                            type="text"
                            required
                            value={organisation}
                            onChange={(e) => setOrganisation(e.target.value)}
                            placeholder="e.g. Acme Corp / Foundation"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contactPerson"
                            className="mb-1.5 block font-raleway text-xs font-bold uppercase tracking-wider text-slate-600"
                          >
                            Contact Person *
                          </label>
                          <input
                            id="contactPerson"
                            type="text"
                            required
                            value={contactPerson}
                            onChange={(e) => setContactPerson(e.target.value)}
                            placeholder="Full name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block font-raleway text-xs font-bold uppercase tracking-wider text-slate-600"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@organisation.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1.5 block font-raleway text-xs font-bold uppercase tracking-wider text-slate-600"
                          >
                            Phone *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 ..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="mb-1.5 block font-raleway text-xs font-bold uppercase tracking-wider text-slate-600"
                        >
                          Partnership Interest *
                        </label>
                        <select
                          id="interest"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-triage-navy focus:border-triage-teal focus:bg-white focus:outline-none"
                        >
                          {PARTNERSHIP_INTERESTS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="mb-1.5 block font-raleway text-xs font-bold uppercase tracking-wider text-slate-600"
                        >
                          Brief Description
                        </label>
                        <textarea
                          id="description"
                          rows={4}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Tell us about your objectives, target group, locations, or timeline..."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:bg-white focus:outline-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={
                          shouldReduceMotion ? undefined : { scale: 1.01 }
                        }
                        whileTap={
                          shouldReduceMotion ? undefined : { scale: 0.98 }
                        }
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-triage-orange px-8 py-4 font-raleway text-sm font-bold tracking-wide text-white shadow-md transition hover:bg-[#8c5c22]"
                      >
                        <span>Request a Partnership Proposal</span>
                        <Send className="h-4 w-4" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
