"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Clock3,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Plan from "../components/plans";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    description:
      "Confidence knowing your loved ones receive trusted care, attention, and professional wellness support when they need it most.",
  },
  {
    icon: HeartPulse,
    title: "Personalized Care",
    description:
      "Healthcare support designed around real human needs, from recovery care to long-term wellness and assisted support.",
  },
  {
    icon: Clock3,
    title: "Faster Access",
    description:
      "Reduce delays and gain priority access to coordinated support, monitoring, and professional home healthcare services.",
  },
];

export default function AccessPlansPage() {
  const scrollToPlans = () => {
    document
      .getElementById("plans")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative overflow-hidden bg-[#F9FFFE]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F7FBFA] to-[#EEF7F6]" />

        <div className="absolute top-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-[#02385A]/10 blur-[120px]" />

        <div className="absolute right-[-80px] top-[20%] h-[260px] w-[260px] rounded-full bg-[#AA7130]/10 blur-[100px]" />

        <div className="absolute bottom-0 left-[20%] h-[300px] w-[300px] rounded-full bg-emerald-200/20 blur-[120px]" />
      </div>
{/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#011E31] via-[#02385A] to-[#012A43] px-5 pt-32 pb-24 sm:px-6 md:pt-40 lg:px-8 lg:pb-32">
  {/* PREMIUM BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* GOLD GLOW */}
    <div className="absolute top-[10%] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#AA7130]/20 blur-[120px] lg:h-[500px] lg:w-[500px]" />

    {/* BLUE GLOW */}
    <div className="absolute left-[-120px] top-[20%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[120px] lg:h-[420px] lg:w-[420px]" />

    {/* BOTTOM GLOW */}
    <div className="absolute bottom-[-150px] left-[20%] h-[280px] w-[280px] rounded-full bg-emerald-300/10 blur-[130px] lg:h-[420px] lg:w-[420px]" />

    {/* PREMIUM OVERLAY */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_20%)]" />

    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.08))]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* EYEBROW */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-[#D4A373]" />

          <span className="text-sm font-medium tracking-wide text-white/90">
            Healthcare Access
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="max-w-4xl text-[2.9rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4.5rem] lg:text-[6rem]">
          Care that feels{" "}
          <span className="text-[#D4A373]">
            personal,
          </span>{" "}
          trusted and always within reach.
        </h1>

        {/* SUBTEXT */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-[20px]">
          Discover healthcare access plans designed to support
          wellness, recovery, and peace of mind, all from the
          comfort of home.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={scrollToPlans}
            className="group relative overflow-hidden rounded-[24px] bg-[#AA7130] px-8 py-5 font-medium text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(170,113,48,0.35)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#AA7130] via-[#C88A45] to-[#AA7130]" />

            <div className="relative flex items-center justify-center gap-2">
              Explore Access Plans

              <ChevronDown className="h-5 w-5 transition duration-300 group-hover:translate-y-1" />
            </div>
          </button>
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* GLOW */}
        <div className="absolute inset-0 scale-[0.95] rounded-[40px] bg-gradient-to-br from-[#AA7130]/20 to-cyan-300/10 blur-[80px]" />

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-3xl lg:p-5">
          <img
            src="/images/hero/plan.webp"
            alt="Healthcare support"
            className="h-auto w-full rounded-[28px] object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:bottom-8 lg:left-8 lg:right-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white/60">
                  Trusted Home Healthcare
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                  Wellness, Recovery & Peace of Mind
                </h3>
              </div>

              <div className="inline-flex w-fit rounded-full bg-[#AA7130] px-5 py-3 text-sm font-medium text-white shadow-lg">
                Premium Care
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* BENEFITS */}
      <section className="relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-[#02385A]/5 px-4 py-2 text-sm font-medium text-[#02385A]">
              Why Families Choose TriageHome
            </div>

            <h2 className="text-[2.4rem] font-semibold leading-tight text-[#02385A] sm:text-5xl">
              More than healthcare, a better care experience.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#5E737B] sm:text-lg">
              Our access plans are designed around comfort,
              dignity, faster support, and trusted care
              coordination for families and loved ones.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/75 p-8 shadow-[0_20px_60px_rgba(2,56,90,0.06)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(2,56,90,0.1)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#02385A]/5 text-[#02385A] transition duration-500 group-hover:bg-[#02385A] group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#02385A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[#60747C]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACCESS PLANS */}
      <section id="plans" className="relative z-10">
        <Plan />
      </section>
    </main>
  );
}