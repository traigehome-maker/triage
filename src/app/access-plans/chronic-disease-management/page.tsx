// app/chronic-disease-management/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import PeaceOfMindSection from "../../components/peace";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title:
    "Chronic Disease Management in Lagos & Nigeria | Home Healthcare | TriageHome",

  description:
    "TriageHome provides professional chronic disease management services in Lagos and across Nigeria. Get personalized home healthcare support for diabetes, hypertension, heart conditions, medication monitoring, wellness tracking, and long term care management from trusted healthcare professionals.",

  keywords: [
    "chronic disease management Lagos",
    "chronic disease management Nigeria",
    "diabetes care Nigeria",
    "hypertension management Lagos",
    "home healthcare Nigeria",
    "long term care Nigeria",
    "home nursing services Lagos",
    "wellness monitoring Nigeria",
    "professional providers Lagos",
    "home medical support Nigeria",
    "chronic illness care",
    "heart disease management Nigeria",
    "blood pressure monitoring Lagos",
    "diabetes monitoring at home",
    "healthcare at home Nigeria",
    "elderly chronic care Lagos",
    "medication monitoring Nigeria",
    "in-home client care",
    "trusted healthcare providers Nigeria",
    "professional home nursing Nigeria",
  ],

  openGraph: {
    title:
      "Chronic Disease Management | TriageHome",

    description:
      "Personalized chronic disease management and home healthcare support for diabetes, hypertension, and long term conditions delivered directly to your home.",

    url: "https://www.triage-home.com/access-plans/chronic-disease-management",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Chronic Disease Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Chronic Disease Management At Home | TriageHome",

    description:
      "Professional home healthcare support for diabetes, hypertension, medication monitoring, and long term care.",

    images: ["https://www.triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical:
      "https://www.triage-home.com/access-plans/chronic-disease-management",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "/icons/heart.png",
    title: "Blood Pressure Monitoring",
    desc: "Regular blood pressure monitoring and wellness tracking from home.",
  },
  {
    icon: "/icons/clipboard.png",
    title: "Diabetes Management",
    desc: "Personalized support for diabetes monitoring, routines, and care.",
  },
  {
    icon: "/icons/diagnose.png",
    title: "Medication Monitoring",
    desc: "Helping clients stay consistent with medications and treatment plans.",
  },
  {
    icon: "/icons/health-care.png",
    title: "Home Healthcare Support",
    desc: "Professional healthcare support tailored to long term conditions.",
  },
];
const benefits = [
  "Personalized long term care",
  "Professional healthcare monitoring",
  "Comfortable home-based support",
  "Reduced hospital visits",
  "Medication and wellness tracking",
  "Trusted healthcare professionals",
];

export const dynamic = "force-static";

export default function ChronicDiseaseManagementPage() {
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
             
              Trusted Chronic Disease Management
            </div>

            <h1 className="mt-8 text-white text-5xl lg:text-7xl font-semibold leading-tight tracking-tight font-raleway">

              long term
              <span className="block text-[#aa7130]">
                Healthcare
              </span>

              Support At Home

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 font-nunito">

              Professional chronic disease management and home healthcare
              support designed to help clients manage long term conditions
              safely, comfortably, and consistently from home.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book Healthcare Support
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
               
                Diabetes Monitoring
              </div>

              <div className="flex items-center gap-2">
               
                Blood Pressure Tracking
              </div>

              <div className="flex items-center gap-2">
              
                Medication Monitoring
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src="/images/blog/4.webp"
                alt="Professional chronic disease management services"
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
              Healthcare Support Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight font-raleway text-[#02385a]">

              Personalized Chronic Care Management

            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-nunito">

              Professional healthcare support designed to help
              clients manage chronic conditions confidently and consistently.

            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {services.map((service, i) => {
         

              return (
                <div
                  key={i}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
                >

                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#aa7130]/10">

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
              alt="Professional healthcare support"
              className="rounded-[36px] object-cover w-full h-[620px] shadow-xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Why TriageHome
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-[#02385a] font-raleway">

              Consistent Healthcare Support Built Around Everyday Life

            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-nunito">

              TriageHome helps clients manage chronic conditions
              with professional healthcare support delivered directly
              to their homes, improving comfort, consistency,
              and overall quality of life.

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

              Chronic Disease Management In Lagos & Nigeria

            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 font-nunito">

              <p>
                TriageHome provides professional chronic disease
                management services in Lagos and across Nigeria,
                helping clients manage long term conditions
                safely and comfortably from home.
              </p>

              <p>
                Our healthcare professionals support clients
                with diabetes management, hypertension monitoring,
                medication tracking, wellness support,
                and personalized healthcare routines.
              </p>

              <p>
                Through consistent home healthcare support,
                TriageHome helps improve client comfort,
                reduce unnecessary hospital visits,
                and encourage healthier long term outcomes.
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
                  Trusted Home Healthcare
                </p>

                <h2 className="mt-4 text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-tight font-raleway">

                  Better long term Healthcare Starts At Home

                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed font-nunito">

                  Book trusted chronic disease management
                  and professional healthcare support today.

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
      < PeaceOfMindSection />

    </main>
  );
}