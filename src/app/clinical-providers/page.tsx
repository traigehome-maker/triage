"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
const TAB_ORDER = ["All", "Doctor", "RN", "Health Assistant"] as const;

export default function ClinicalProvidersPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTitle, setActiveTitle] = useState("All");
  const [tabDirection, setTabDirection] = useState(1);
  const [search, setSearch] = useState("");

  const [apptName, setApptName] = useState("");
  const [apptEmail, setApptEmail] = useState("");
  const [apptDate, setApptDate] = useState("");
  const [apptTime, setApptTime] = useState("");
  const [apptSubmitted, setApptSubmitted] = useState(false);

  const handleTabChange = (nextTab: string) => {
    if (nextTab === activeTitle) return;
    const prevIdx = TAB_ORDER.indexOf(activeTitle as (typeof TAB_ORDER)[number]);
    const nextIdx = TAB_ORDER.indexOf(nextTab as (typeof TAB_ORDER)[number]);
    setTabDirection(nextIdx >= prevIdx ? 1 : -1);
    setActiveTitle(nextTab);
  };

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
      <section className="px-4 pt-24 pb-4 sm:px-6 sm:pt-28">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative mx-auto flex min-h-[480px] w-full max-w-7xl items-end overflow-hidden rounded-2xl sm:min-h-[540px] sm:rounded-3xl lg:min-h-[600px]"
        >
          <motion.img
            src="/images/hero/bg1.webp"
            alt="TriageHome Clinical Team"
            initial={shouldReduceMotion ? undefined : { scale: 1.05 }}
            animate={shouldReduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-transparent" />

          <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16">
            <div className="max-w-md text-left">
              <motion.h1
                initial={
                  shouldReduceMotion ? undefined : { opacity: 0, y: 20 }
                }
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
                className="font-raleway text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                Our Clinicians
              </motion.h1>

              <motion.p
                initial={
                  shouldReduceMotion ? undefined : { opacity: 0, y: 18 }
                }
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
                className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base"
              >
                Our medical team remains current through ongoing education and
                training, ensuring you receive safe, responsive care at home.
              </motion.p>

              <motion.div
                initial={
                  shouldReduceMotion ? undefined : { opacity: 0, y: 16 }
                }
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
                className="mt-7"
              >
                <motion.a
                  href="#directory"
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  className="group/cta inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-raleway text-sm font-bold text-triage-navy shadow-md transition-colors hover:bg-slate-100"
                >
                  <span>Start a Checkup Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="directory" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h2 className="font-raleway text-3xl font-bold tracking-tight text-triage-navy sm:text-4xl md:text-5xl">
              Meet Our Clinicians
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              Our clinicians work closely with you to understand your needs,
              address your concerns, and achieve your overall health goals.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="mb-10 flex flex-col items-center justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row"
          >
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
                  <motion.button
                    key={tab.key}
                    type="button"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                    onClick={() => handleTabChange(tab.key)}
                    className={`relative inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 font-raleway text-xs font-bold transition-colors ${
                      active
                        ? "text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-triage-navy"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeProviderTab"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-full bg-triage-navy shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                    <span
                      className={`relative z-10 rounded-full px-2 py-0.5 text-[11px] transition-colors ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {filtered.length === 0 ? (
                <motion.div
                  key={`${activeTitle}-empty`}
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: tabDirection * 24 }
                  }
                  animate={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                  }
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: tabDirection * -24 }
                  }
                  transition={{ duration: 0.25, ease: EASE }}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50/50 px-6 py-20 text-center"
                >
                  <h3 className="font-raleway text-xl font-bold text-triage-navy">
                    No matching clinicians found
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                    We couldn&apos;t find any providers matching &ldquo;{search}
                    &rdquo;. Try adjusting your search or filter.
                  </p>
                  <motion.button
                    type="button"
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.03 }
                    }
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                    onClick={() => {
                      setSearch("");
                      handleTabChange("All");
                    }}
                    className="mt-6 rounded-full bg-triage-navy px-6 py-2.5 font-raleway text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-triage-orange"
                  >
                    Reset Filters
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key={activeTitle}
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: tabDirection * 28 }
                  }
                  animate={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                  }
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: tabDirection * -28 }
                  }
                  transition={{ duration: 0.26, ease: EASE }}
                  className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {filtered.map((provider, idx) => (
                    <motion.div
                      key={provider.id}
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, x: tabDirection * 18, y: 10 }
                      }
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 1, x: 0, y: 0 }
                      }
                      whileHover={
                        shouldReduceMotion ? undefined : { y: -4 }
                      }
                      transition={{
                        duration: 0.36,
                        delay: Math.min(idx * 0.035, 0.22),
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

                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-triage-navy">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="book-appointment" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#02385a] via-[#044d7a] to-[#02385a] px-6 py-16 text-white shadow-xl sm:px-12 sm:py-20"
          >
            <motion.div
              animate={
                shouldReduceMotion ? undefined : { scale: [1, 1.1, 1] }
              }
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-triage-teal/20 blur-[100px]"
            />
            <motion.div
              animate={shouldReduceMotion ? undefined : { x: [0, 20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-triage-lime/15 blur-[100px]"
            />

            <div className="relative z-10 mx-auto max-w-5xl">
              <h2 className="text-center font-raleway text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Book Appointment
              </h2>

              <p className="mt-10 font-raleway text-sm font-bold text-white/95 sm:text-base">
                Book Your Appointment Today
              </p>

              <AnimatePresence mode="wait">
                {apptSubmitted ? (
                  <motion.div
                    key="banner-submitted"
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, scale: 0.96 }
                    }
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, scale: 1 }
                    }
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, scale: 0.96 }
                    }
                    transition={{ duration: 0.25, ease: EASE }}
                    className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm sm:flex-row"
                  >
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
                    <motion.button
                      type="button"
                      whileHover={
                        shouldReduceMotion ? undefined : { scale: 1.03 }
                      }
                      whileTap={
                        shouldReduceMotion ? undefined : { scale: 0.97 }
                      }
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
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="banner-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
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

                    <motion.button
                      type="submit"
                      whileHover={
                        shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }
                      }
                      whileTap={
                        shouldReduceMotion ? undefined : { scale: 0.97 }
                      }
                      className="group/submit inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-raleway text-sm font-bold text-triage-navy shadow-md transition-colors hover:bg-slate-100 lg:col-span-2"
                    >
                      <span>Submit Now</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/submit:translate-x-1" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
