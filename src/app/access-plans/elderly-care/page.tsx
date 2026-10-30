// app/elderly-care/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import PeaceOfMindSection from "../../components/peace";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title:
    "Elderly Care Services in Lagos & Nigeria | Professional Home Care | TriageHome",

  description:
    "TriageHome provides trusted elderly care services in Lagos and across Nigeria. Get professional providers, home nursing, wellness support, medication assistance, companionship, and personalized in-home healthcare for seniors.",

  keywords: [
    "elderly care Lagos",
    "elderly care Nigeria",
    "elderly home care services",
    "senior care Nigeria",
    "caregiver for elderly Lagos",
    "professional providers Nigeria",
    "elderly support services",
    "home nursing for seniors",
    "senior home healthcare",
    "elderly wellness support",
    "private providers Lagos",
    "elderly assistance at home",
    "home healthcare for seniors",
    "elderly client care",
    "post hospital elderly care",
    "companion care Nigeria",
    "trusted providers Lagos",
    "home care for aging parents",
    "in-home elderly support",
    "elderly monitoring services",
  ],

  openGraph: {
    title: "Professional Elderly Care Services in Lagos & Nigeria | TriageHome",

    description:
      "Trusted in-home elderly care and professional providers for seniors. Personalized support, wellness monitoring, companionship, and home healthcare services delivered with compassion.",

    url: "https://www.triage-home.com/access-plans/elderly-care",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Elderly Care Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Trusted Elderly Care Services in Nigeria | TriageHome",

    description:
      "Professional elderly care, home nursing, and caregiver support delivered directly to your home.",

    images: ["https://www.triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical: "https://www.triage-home.com/access-plans/elderly-care",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "/Icons/heart.png",
    title: "Daily Wellness Support",
    desc: "Professional support for mobility, hygiene, feeding, and everyday comfort.",
  },
  {
    icon: "/Icons/care.png",
    title: "Home Nursing Care",
    desc: "Skilled nurses providing personalized elderly healthcare at home.",
  },
  {
    icon: "/Icons/compassion.png",
    title: "Medication Assistance",
    desc: "Helping seniors stay consistent with medication schedules and monitoring.",
  },
  {
    icon: "/Icons/noun.svg",
    title: "Companionship Care",
    desc: "Emotional support and companionship for elderly individuals living alone.",
  },
];
const benefits = [
  "Verified and trained clinical providers",
  "Personalized elderly support plans",
  "Comfortable home-based care",
  "Flexible care schedules",
  "Professional wellness monitoring",
  "Trusted support for families",
];

export default function ElderlyCarePage() {
  return (
    <main className="bg-white overflow-hidden text-[#02385a]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#02385a] text-white">
        {/* PATTERN */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

        {/* GRADIENT GLOW */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#b745d8] via-[#00b99d] to-[#a6d200] blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
              <img
                src="/Icons/shield.png"
                alt="Shield"
                className="w-4 h-4 object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                }}
              />
              Trusted Elderly Care Services
            </div>

            <h1 className="mt-8 text-5xl text-white lg:text-7xl font-semibold leading-tight tracking-tight font-raleway">
              Compassionate
              <span className="block text-[#aa7130]">Elderly Care</span>
              At Home
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 font-nunito">
              Professional clinical providers and home healthcare support
              designed to help seniors live comfortably, safely, and
              independently in the place they know best, home.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book Elderly Care
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                Verified Clinical Providers
              </div>

              <div className="flex items-center gap-2">
                Home Nursing Support
              </div>

              <div className="flex items-center gap-2">
                Personalized Care Plans
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/images/blog/elderly-care.webp"
                alt="Professional elderly care services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Elderly Care Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight font-raleway text-[#02385a]">
              Comprehensive In-Home Support For Seniors
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-nunito">
              Our elderly care services are designed to help seniors live
              safely, comfortably, and independently while receiving
              professional care directly at home.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, i) => {
              return (
                <div
                  key={i}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#aa7130]/10 text-[#aa7130]">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-7 h-7 object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                      }}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#02385a] font-raleway">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600 font-nunito">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TRIAGEHOME */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div>
            <img
              src="/images/blog/5.webp"
              alt="Trusted providers and elderly support services"
              className="rounded-[36px] object-cover w-full h-[620px] shadow-xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Why Families Trust Us
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-[#02385a] font-raleway">
              Trusted Elderly Care Designed Around Comfort & Dignity
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-nunito">
              We understand the importance of compassionate support for aging
              loved ones. TriageHome combines professional healthcare with
              warmth, patience, and personalized care.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-slate-200"
                >
                  <p className="text-slate-700 leading-relaxed font-nunito">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[40px] border border-slate-200 bg-white p-10 lg:p-16 shadow-sm">
            <h2 className="text-4xl font-semibold tracking-tight text-[#02385a] font-raleway">
              Elderly Care Services In Lagos & Nigeria
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 font-nunito">
              <p>
                TriageHome provides trusted elderly care services in Lagos and
                across Nigeria, helping seniors receive professional support
                without leaving the comfort of home.
              </p>

              <p>
                Families looking for reliable providers for elderly parents can
                trust TriageHome to provide trained and verified professionals
                who deliver compassionate and respectful care.
              </p>

              <p>
                Whether you need short-term recovery support after
                hospitalization or long term elderly care at home, our
                healthcare professionals are ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-[#02385a] px-8 py-16 lg:px-16 text-white">
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <p className="text-[#aa7130] uppercase tracking-[0.2em] text-sm font-semibold">
                  Compassionate Home Healthcare
                </p>

                <h2 className="mt-4 text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-tight font-raleway">
                  Give Your Loved Ones The Comfort Of Professional Care At Home
                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed font-nunito">
                  Book trusted elderly care services, home nursing, and
                  caregiver support with TriageHome today.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book A Consultation
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PeaceOfMindSection />
    </main>
  );
}
