"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  MapPin,
  Clock,
  Globe,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";
import {
  Provider,
  getCredentials,
  getProviderRoleLabel,
  getProviderRegistrySummary,
  isHealthAssistant,
  isDoctor,
} from "../providersData";
import { ProviderPortrait } from "../ProviderPortrait";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProviderDetailClient({
  provider,
}: {
  provider: Provider | undefined;
}) {
  const shouldReduceMotion = useReducedMotion();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!provider) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-28 pb-20 text-center font-nunito">
        <div className="max-w-md rounded-3xl border border-slate-200 bg-[#f1f6fd] p-10">
          <h1 className="font-raleway text-2xl font-bold text-triage-navy">
            Clinician Not Found
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            The clinical provider profile you requested could not be found.
          </p>
          <Link
            href="/clinical-providers"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-triage-navy px-6 py-3 font-raleway text-xs font-bold uppercase tracking-wider text-white transition hover:bg-triage-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Clinical Directory</span>
          </Link>
        </div>
      </main>
    );
  }

  const assistant = isHealthAssistant(provider);
  const doctor = isDoctor(provider);
  const credentials = getCredentials(provider);
  const roleLabel = getProviderRoleLabel(provider);
  const registrySummary = getProviderRegistrySummary(provider);

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const requestType = assistant
      ? "Home Health Assistant Visit"
      : doctor
        ? `Medical Consultation with Dr. ${provider.fullName}`
        : `Clinical Visit with ${provider.fullName}`;

    const message = `*New Appointment Request*
• *Provider:* ${provider.fullName} (${provider.employeeNumber})
• *Service Type:* ${requestType}
• *Client Name:* ${fullName}
• *Email:* ${email}
• *Phone:* ${phone}
• *Preferred Date:* ${date || "Flexible"}
• *Notes:* ${notes || "None provided"}`;

    window.open(
      `https://wa.me/2349134664547?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-24 font-nunito text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/clinical-providers"
            className="inline-flex items-center gap-2 font-raleway text-sm font-bold text-triage-navy transition hover:text-triage-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Clinicians</span>
          </Link>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 font-mono text-xs font-semibold text-slate-500">
            {provider.employeeNumber}
          </span>
        </div>

        <motion.section
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-stretch"
        >
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#f4efe8] shadow-xs sm:min-h-[500px] lg:col-span-5">
            <ProviderPortrait
              provider={provider}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-[#f1f6fd] p-8 sm:p-10 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h1 className="font-raleway text-3xl font-bold tracking-tight text-triage-navy sm:text-4xl">
                    {provider.fullName}
                  </h1>
                  <p className="mt-1 font-raleway text-sm font-bold text-triage-orange sm:text-base">
                    {roleLabel}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-raleway text-xs font-bold text-emerald-700 shadow-xs">
                  <ShieldCheck className="h-4 w-4 text-triage-teal" />
                  <span>TriageVerified</span>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-triage-navy">
                  <Clock className="h-3.5 w-3.5 text-triage-orange" />
                  <span>{provider.experience}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-triage-navy">
                  <MapPin className="h-3.5 w-3.5 text-triage-teal" />
                  <span>{provider.state}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-triage-navy">
                  <Globe className="h-3.5 w-3.5 text-triage-navy" />
                  <span>{provider.languages.join(", ")}</span>
                </span>
              </div>

              <div className="mt-6 space-y-1.5">
                <p className="font-raleway text-sm font-bold text-triage-navy sm:text-base">
                  {credentials.join(" • ")}
                </p>
                <p className="font-raleway text-sm font-bold text-triage-navy sm:text-base">
                  {registrySummary}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {provider.bio}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-slate-200/70 pt-6">
              <a
                href="https://wa.me/2349134664547"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3.5 text-sm font-bold text-triage-navy transition hover:text-triage-orange"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-triage-navy text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+234 913 466 4547</span>
              </a>

              <a
                href="mailto:support@triage-home.com"
                className="flex w-fit items-center gap-3.5 text-sm font-bold text-triage-navy transition hover:text-triage-orange"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-triage-navy text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <span>support@triage-home.com</span>
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-8 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-stretch"
        >
          <div className="flex flex-col justify-center rounded-2xl bg-[#f1f6fd] p-8 sm:p-10 lg:col-span-6">
            <h2 className="font-raleway text-3xl font-bold leading-tight text-triage-navy sm:text-4xl">
              Book an
              <br />
              appointment
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {assistant
                ? "Schedule a verified home health assistant visit coordinated through TriageHome."
                : `Schedule an in-home clinical visit or consultation with ${provider.fullName}.`}
            </p>

            {submitted ? (
              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-7 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-raleway text-lg font-bold text-triage-navy">
                  Appointment Request Prepared
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Your booking request for{" "}
                  <span className="font-bold text-triage-navy">
                    {provider.fullName}
                  </span>{" "}
                  is ready on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 rounded-full border border-slate-200 px-5 py-2 font-raleway text-xs font-bold uppercase tracking-wider text-triage-navy transition hover:bg-slate-50"
                >
                  Book Another Time
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookAppointment} className="mt-7 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="mb-1.5 block font-raleway text-xs font-bold text-triage-navy"
                    >
                      Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="mb-1.5 block font-raleway text-xs font-bold text-triage-navy"
                    >
                      Email
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="mb-1.5 block font-raleway text-xs font-bold text-triage-navy"
                    >
                      Phone
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-date"
                      className="mb-1.5 block font-raleway text-xs font-bold text-triage-navy"
                    >
                      Date
                    </label>
                    <input
                      id="client-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-triage-navy focus:border-triage-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-notes"
                    className="mb-1.5 block font-raleway text-xs font-bold text-triage-navy"
                  >
                    Care Notes
                  </label>
                  <textarea
                    id="client-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share your location, preferred time, or care needs..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-triage-navy placeholder:text-slate-400 focus:border-triage-teal focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-triage-navy px-6 py-3.5 font-raleway text-sm font-bold text-white shadow-md transition hover:bg-triage-orange"
                >
                  <span>Book An Appointment</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-slate-100 shadow-xs sm:min-h-[520px] lg:col-span-6">
            <img
              src="/images/hero/fam.png"
              alt="TriageHome Family Clinical Care"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-triage-navy/80 via-triage-navy/25 to-transparent p-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                <Stethoscope className="h-3.5 w-3.5 text-triage-lime" />
                <span>Home Health, Powered by People</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
