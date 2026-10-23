// app/iv-therapy/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import PeaceOfMindSection from "../../components/peace";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title:
    "IV Therapy Services in Lagos & Nigeria | Mobile IV Drip | TriageHome",

  description:
    "TriageHome provides professional IV therapy services in Lagos and across Nigeria. Get hydration therapy, wellness drips, vitamin infusions, recovery support, and professional in-home IV treatment delivered safely and conveniently to your home.",

  keywords: [
    "IV therapy Lagos",
    "IV therapy Nigeria",
    "mobile IV therapy Lagos",
    "IV drip at home",
    "hydration therapy Nigeria",
    "vitamin infusion Lagos",
    "wellness IV drip",
    "professional IV therapy",
    "home healthcare Nigeria",
    "IV treatment at home",
    "recovery drip Lagos",
    "wellness therapy Nigeria",
    "in-home IV services",
    "medical IV support Lagos",
    "hydration support Nigeria",
    "healthcare at home Nigeria",
    "vitamin drip Lagos",
    "trusted healthcare providers Nigeria",
    "professional nurses Lagos",
    "home nursing services Nigeria",
  ],

  openGraph: {
    title:
      "Professional IV Therapy Services | TriageHome",

    description:
      "Safe and professional IV therapy, hydration drips, vitamin infusions, and wellness support delivered directly to your home.",

    url: "https://www.triage-home.com/access-plans/iv-therapy",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome IV Therapy Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Professional IV Therapy At Home | TriageHome",

    description:
      "Professional hydration therapy, wellness drips, and IV support delivered safely to your home.",

    images: ["https://www.triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical: "https://www.triage-home.com/access-plans/iv-therapy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "/icons/iv.png",
    title: "Hydration Therapy",
    desc: "Professional IV hydration support to help restore fluids and improve wellness.",
  },
  {
    icon: "/icons/drip.png",
    title: "Wellness Drips",
    desc: "Vitamin and wellness infusions designed to support recovery and energy levels.",
  },
  {
    icon: "/icons/heart.png",
    title: "Recovery Support",
    desc: "Professional IV therapy support for fatigue, recovery, and general wellness.",
  },
  {
    icon: "/icons/health-care.png",
    title: "Professional Administration",
    desc: "IV therapy administered safely by trained healthcare professionals.",
  },
];

const benefits = [
  "Professional in-home IV therapy",
  "Safe and hygienic administration",
  "Convenient home-based care",
  "Hydration and wellness support",
  "Experienced healthcare professionals",
  "Comfortable treatment environment",
];

export const dynamic = "force-static";

export default function IVTherapyPage() {
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
  src="/icons/shield.png"
  alt="Shield"
  className="w-4 h-4 object-contain"
  style={{
    filter:
      "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
  }}
/>
              IV Therapy Services
            </div>

            <h1 className="mt-8 text-5xl text-white lg:text-7xl font-semibold leading-tight tracking-tight font-raleway">

              
              <span className="block text-[#aa7130]">
                IV Therapy
              </span>

              At Home

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 font-nunito">

              Safe and professional IV therapy services
              delivered directly to your home for hydration,
              wellness support, recovery, and overall well-being.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book IV Therapy
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
            
                Hydration Therapy
              </div>

              <div className="flex items-center gap-2">
            
                Wellness Drips
              </div>

              <div className="flex items-center gap-2">
              
                Recovery Support
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src="/images/blog/iv.webp"
                alt="Professional IV therapy services"
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
              IV Therapy Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight font-raleway text-[#02385a]">

              Hydration & Wellness Support Delivered To You

            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-nunito">

              Professional IV therapy services designed to support
              hydration, recovery, wellness, and overall health
              from the comfort of your home.

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
              alt="Professional IV therapy support"
              className="rounded-[36px] object-cover w-full h-[620px] shadow-xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Why TriageHome
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-[#02385a] font-raleway">

              Safe, Comfortable & Professional IV Therapy

            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-nunito">

              TriageHome delivers professional IV therapy services
              safely and conveniently at home, helping clients
              access hydration and wellness support comfortably.

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

              IV Therapy Services In Lagos & Nigeria

            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 font-nunito">

              <p>
                TriageHome provides professional IV therapy services
                in Lagos and across Nigeria, helping clients access
                hydration, wellness support, and recovery care
                conveniently from home.
              </p>

              <p>
                Our trained healthcare professionals administer
                IV hydration therapy, wellness drips,
                vitamin infusions, and recovery support
                safely and professionally in a comfortable environment.
              </p>

              <p>
                Whether you need hydration support,
                wellness therapy, or recovery assistance,
                TriageHome makes professional IV therapy
                more accessible and convenient for clients.
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
                  Professional Home Healthcare
                </p>

                <h2 className="mt-4 text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-tight font-raleway">

                  Wellness & Recovery Support Delivered To Your Home

                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed font-nunito">

                  Book trusted IV therapy and hydration support
                  with TriageHome today.

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