// app/health-screening/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import PeaceOfMindSection from "../../components/peace";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title:
    "Health Screenings Services in Lagos & Nigeria | Home Health Tests | TriageHome",

  description:
    "TriageHome provides professional health screenings services in Lagos and across Nigeria. Get routine health tests, wellness screenings, preventive healthcare assessments, vital checks, and professional home health evaluations delivered directly to your home.",

  keywords: [
    "health screenings Lagos",
    "health screenings Nigeria",
    "home health screenings",
    "wellness screening Lagos",
    "preventive healthcare Nigeria",
    "health assessment at home",
    "medical screening Nigeria",
    "health tests Lagos",
    "routine health check Nigeria",
    "healthcare at home Nigeria",
    "vital signs check Lagos",
    "home healthcare services Nigeria",
    "blood pressure screening Lagos",
    "preventive health assessment",
    "professional health tests Nigeria",
    "mobile health screenings Lagos",
    "wellness monitoring Nigeria",
    "trusted healthcare providers Lagos",
    "health evaluation services Nigeria",
    "professional healthcare support",
  ],

  openGraph: {
    title:
      "Professional Health Screenings Services | TriageHome",

    description:
      "Professional health screenings, preventive healthcare assessments, wellness checks, and routine health evaluations delivered directly to your home.",

    url: "https://www.triage-home.com/access-plans/health-screening",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Health Screening Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Professional Health Screenings At Home | TriageHome",

    description:
      "Professional health screenings and preventive healthcare assessments delivered safely to your home.",

    images: ["https://www.triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical: "https://www.triage-home.com/access-plans/health-screening",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "/Icons/clipboard.png",
    title: "Routine Health Checks",
    desc: "Professional routine health assessments and wellness screenings from home.",
  },
  {
    icon: "/Icons/heart.png",
    title: "Vital Signs Monitoring",
    desc: "Monitoring blood pressure, pulse, temperature, and overall wellness indicators.",
  },
  {
    icon: "/Icons/health-care.png",
    title: "Preventive Health Screenings",
    desc: "Early health evaluations designed to support preventive healthcare and wellness.",
  },
  {
    icon: "/Icons/medical-professional.png",
    title: "Professional Healthcare Support",
    desc: "Health screenings delivered professionally by trained healthcare providers.",
  },
];
const benefits = [
  "Convenient home-based screening",
  "Professional health assessments",
  "Preventive healthcare support",
  "Wellness monitoring services",
  "Experienced healthcare professionals",
  "Comfortable and safe environment",
];

export const dynamic = "force-static";

export default function HealthScreeningPage() {
  return (
    <main className="bg-white overflow-hidden text-[#02385a]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#02385a] text-white">

        {/* PATTERN */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

        {/* GLOW */}
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
               Health Screenings Services
            </div>

            <h1 className="mt-8 text-white text-5xl lg:text-7xl font-semibold leading-tight tracking-tight font-raleway">

              
              <span className="block text-[#aa7130]">
                Health Screenings
              </span>

              At Home

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 font-nunito">

              Convenient and professional health screenings services
              designed to help individuals monitor their health,
              detect risks early, and stay proactive about wellness.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book Health Screenings
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
                
                Routine Health Checks
              </div>

              <div className="flex items-center gap-2">
               
                Preventive Screening
              </div>

              <div className="flex items-center gap-2">
           
                Wellness Monitoring
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src="/images/blog/hs.webp"
                alt="Professional health screenings services"
                loading="lazy"
                decoding="async"
                className="w-full h-[600px] object-cover object-center"
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
              Health Screenings Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight font-raleway text-[#02385a]">

              Preventive Healthcare & Wellness Monitoring

            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-nunito">

              Professional health screenings designed to support
              early detection, wellness monitoring, and healthier living.

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
              src="/images/blog/11.webp"
              alt="Professional preventive healthcare support"
              className="rounded-[36px] object-cover w-full h-[620px] shadow-xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Why TriageHome
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-[#02385a] font-raleway">

              Better Preventive Healthcare Starts With Early Monitoring

            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-nunito">

              TriageHome provides convenient health screenings
              and wellness monitoring services that help individuals
              stay proactive about their health from the comfort of home.

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

              Health Screenings Services In Lagos & Nigeria

            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 font-nunito">

              <p>
                TriageHome provides professional health screenings services
                in Lagos and across Nigeria, helping individuals access
                convenient preventive healthcare support from home.
              </p>

              <p>
                Our health screenings services include routine health checks,
                wellness monitoring, preventive health assessments,
                and vital signs evaluations delivered by trained healthcare professionals.
              </p>

              <p>
                Through professional health screenings and wellness support,
                TriageHome helps individuals stay informed about their health,
                identify potential risks early, and maintain healthier lifestyles.
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
                  Preventive Healthcare Support
                </p>

                <h2 className="mt-4 text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-tight font-raleway">

                  Stay Proactive About Your Health

                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed font-nunito">

                  Book trusted health screenings and wellness monitoring services with TriageHome today.

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