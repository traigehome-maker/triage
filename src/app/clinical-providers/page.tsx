"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Search,
  X,
  ShieldCheck,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import {
  PROVIDERS,
  isDoctor,
  isNurse,
  isHealthAssistant,
  getProviderRoleLabel,
} from "./providersData";
import { ProviderPortrait } from "./ProviderPortrait";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ClinicalProvidersPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTitle, setActiveTitle] = useState("All");
  const [search, setSearch] = useState("");

  const [apptName, setApptName] = useState("");
  const [apptEmail, setApptEmail] = useState("");
  const [apptDate, setApptDate] = useState("");
  const [apptTime, setApptTime] = useState("");
  const [apptSubmitted, setApptSubmitted] = useState(false);

  const filtered = PROVIDERS.filter((p) => {
    const matchesTitle =
      activeTitle === "All"
        ? true
        : activeTitle === "Doctor"
          ? isDoctor(p)
          : activeTitle === "RN"
            ? isNurse(p)
            : isHealthAssistant(p);

    const q = search.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      p.fullName.toLowerCase().includes(q) ||
      p.displayName.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.qualifications.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.licenseNumber.toLowerCase().includes(q) ||
      p.languages.some((l) => l.toLowerCase().includes(q));

    return matchesTitle && matchesSearch;
  });

  const docCount = PROVIDERS.filter(isDoctor).length;
  const rnCount = PROVIDERS.filter(isNurse).length;
  const haCount = PROVIDERS.filter(isHealthAssistant).length;

  const handleBannerBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Clinical Appointment Request*
• *Name:* ${apptName}
• *Email:* ${apptEmail}
• *Preferred Date:* ${apptDate || "Flexible"}
• *Preferred Time:* ${apptTime || "Flexible"}`;

    window.open(
      `https://wa.me/2349134664547?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setApptSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white font-nunito text-slate-800">
      <section className="relative flex min-h-[78vh] w-full items-center overflow-hidden bg-triage-navy pt-28 pb-20 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/team2.webp"
            alt="TriageHome Clinical Team"
            className="h-full w-full object-cover object-[center_12%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02385a]/95 via-[#02385a]/75 to-[#02385a]/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-xl"
          >
            <h1 className="font-raleway text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Clinicians
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              Our clinical team of verified doctors, nurses, and health
              assistants delivers safe, responsive care directly in your home.
            </p>

            <div className="mt-8">
              <a
                href="#directory"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-raleway text-sm font-bold text-triage-navy shadow-lg transition hover:bg-slate-100"
              >
                <span>Start a Checkup Now</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="directory" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-raleway text-3xl font-bold tracking-tight text-triage-navy sm:text-4xl md:text-5xl">
              Meet Our Clinicians
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              Our clinicians work closely with you to understand your needs,
              address your concerns, and achieve your overall health goals.
            </p>
          </div>

          <div className="mb-10 flex flex-col items-center justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row">
            <div className="relative w-full md:w-80">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, role, or language..."
                className="w-full rounded-full border border-slate-200 bg-slate-50/70 py-2.5 pl-11 pr-10 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:bg-white focus:outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto pb-1 md:w-auto md:pb-0">
              {[
                { key: "All", label: "All", count: PROVIDERS.length },
                { key: "Doctor", label: "Doctors", count: docCount },
                { key: "RN", label: "Registered Nurses", count: rnCount },
                {
                  key: "Health Assistant",
                  label: "Health Assistants",
                  count: haCount,
                },
              ].map((tab) => {
                const active = activeTitle === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTitle(tab.key)}
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 font-raleway text-xs font-bold transition ${
                      active
                        ? "bg-triage-navy text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-triage-navy"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 px-6 py-20 text-center">
              <h3 className="font-raleway text-xl font-bold text-triage-navy">
                No matching clinicians found
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                We couldn&apos;t find any providers matching &ldquo;{search}
                &rdquo;. Try adjusting your search or filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveTitle("All");
                }}
                className="mt-6 rounded-full bg-triage-navy px-6 py-2.5 font-raleway text-xs font-bold uppercase tracking-wider text-white transition hover:bg-triage-orange"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((provider, idx) => (
                <motion.div
                  key={provider.id}
                  initial={
                    shouldReduceMotion ? undefined : { opacity: 0, y: 18 }
                  }
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(idx * 0.04, 0.25),
                    ease: EASE,
                  }}
                >
                  <Link
                    href={`/clinical-providers/${provider.id}`}
                    className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#eef4fc] shadow-xs transition-shadow duration-300 hover:shadow-xl"
                  >
                    <ProviderPortrait
                      provider={provider}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02385a]/95 via-[#02385a]/50 to-transparent" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-triage-navy shadow-xs backdrop-blur-sm">
                      <ShieldCheck className="h-3.5 w-3.5 text-triage-teal" />
                      <span>TriageVerified</span>
                    </div>

                    <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-triage-navy/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                      <MapPin className="h-3 w-3 text-triage-lime" />
                      <span>{provider.state}</span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                      <div>
                        <h3 className="font-raleway text-xl font-bold leading-snug text-white">
                          {provider.fullName}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-white/85">
                          {getProviderRoleLabel(provider)}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-triage-navy">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="book-appointment" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#02385a] via-[#044d7a] to-[#02385a] px-6 py-16 text-white shadow-xl sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-triage-teal/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-triage-lime/15 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-5xl">
              <h2 className="text-center font-raleway text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Book Appointment
              </h2>

              <p className="mt-10 font-raleway text-sm font-bold text-white/95 sm:text-base">
                Book Your Appointment Today
              </p>

              {apptSubmitted ? (
                <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm sm:flex-row">
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-triage-lime" />
                    <div>
                      <p className="font-raleway text-sm font-bold text-white">
                        Appointment Request Prepared
                      </p>
                      <p className="text-xs text-white/80">
                        Thank you, {apptName}. Our care coordinator will
                        confirm your visit shortly.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setApptSubmitted(false);
                      setApptName("");
                      setApptEmail("");
                      setApptDate("");
                      setApptTime("");
                    }}
                    className="rounded-full bg-white px-5 py-2 font-raleway text-xs font-bold text-triage-navy transition hover:bg-slate-100"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleBannerBooking}
                  className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12"
                >
                  <input
                    type="text"
                    required
                    value={apptName}
                    onChange={(e) => setApptName(e.target.value)}
                    placeholder="Your name"
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/70 focus:border-white focus:bg-white/15 focus:outline-none lg:col-span-3"
                  />

                  <input
                    type="email"
                    required
                    value={apptEmail}
                    onChange={(e) => setApptEmail(e.target.value)}
                    placeholder="Your email"
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/70 focus:border-white focus:bg-white/15 focus:outline-none lg:col-span-3"
                  />

                  <input
                    type="date"
                    required
                    value={apptDate}
                    onChange={(e) => setApptDate(e.target.value)}
                    aria-label="Appointment Date"
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white [color-scheme:dark] focus:border-white focus:bg-white/15 focus:outline-none lg:col-span-2"
                  />

                  <input
                    type="time"
                    required
                    value={apptTime}
                    onChange={(e) => setApptTime(e.target.value)}
                    aria-label="Appointment Time"
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white [color-scheme:dark] focus:border-white focus:bg-white/15 focus:outline-none lg:col-span-2"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-raleway text-sm font-bold text-triage-navy shadow-md transition hover:bg-slate-100 lg:col-span-2"
                  >
                    <span>Submit Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
