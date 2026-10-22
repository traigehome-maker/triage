"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Gift, Building2, ShieldCheck, ArrowRight, MessageCircle, HeartHandshake, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const PERKS = [
  {
    title: "Executive & Leadership Wellness",
    desc: "Discreet in-office or home clinical checks, health snapshots, and tailored care oversight for directors and senior management.",
  },
  {
    title: "High-Impact Corporate Appreciation",
    desc: "Reward key talent, board members, or clients with verified clinical care packages instead of generic corporate gifts.",
  },
  {
    title: "Dedicated Peace of Mind Coordinator",
    desc: "A verified coordinator schedules clinician visits, handles medication tracking, and manages 24/7 emergency escalation.",
  },
];

export default function GiftOfPeaceOfMind() {
  const whatsappHref = `https://wa.me/2349134664547?text=${encodeURIComponent(
    "Hello TriageConcierge, I would like to enquire about Corporate Health Gifting and Care Packages."
  )}`;

  return (
    <section
      id="gift-of-peace-of-mind"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fafafa] via-white to-[#f4f7f9] border-y border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b99d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#aa7130]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Messaging & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02385a]/5 border border-[#02385a]/15 text-[#02385a] text-xs sm:text-sm font-raleway font-bold uppercase tracking-wider mb-5 w-fit"
            >
              <Gift className="w-4 h-4 text-[#aa7130]" />
              <span>Corporate & Family Health Gifting</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-black text-[#02385a] tracking-tight leading-[1.15] mb-5"
            >
              The Gift of Peace of Mind
            </motion.h2>

            {/* Introduction to Corporate Health Gifting */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
              className="text-slate-700 text-base sm:text-lg font-nunito leading-relaxed mb-4"
            >
              Healthcare is the most meaningful investment an organisation or individual can make in the people who matter most. 
              With <strong className="font-semibold text-[#02385a]">Corporate Health Gifting</strong>, businesses can provide valued executives, 
              key employees, and strategic partners with comprehensive, in-person clinical oversight and verified wellness visits.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="text-slate-600 text-sm sm:text-base font-nunito leading-relaxed mb-8"
            >
              Equally available for families and diaspora sponsors who want structured medical oversight, regular health updates, 
              and priority hospital admission for parents and loved ones in Nigeria.
            </motion.p>

            {/* Three Pillar Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
              className="grid sm:grid-cols-3 gap-4 mb-9"
            >
              {PERKS.map((perk, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-4.5 shadow-xs transition hover:shadow-md hover:border-slate-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#02385a]/5 flex items-center justify-center text-[#aa7130] mb-2.5">
                    {i === 0 ? (
                      <Building2 className="w-4 h-4" />
                    ) : i === 1 ? (
                      <HeartHandshake className="w-4 h-4" />
                    ) : (
                      <ShieldCheck className="w-4 h-4" />
                    )}
                  </div>
                  <h4 className="font-raleway font-bold text-xs sm:text-sm text-[#02385a] mb-1 leading-snug">
                    {perk.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-nunito leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Link
                href="/triage-concierge#gift"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#02385a] hover:bg-[#012644] text-white font-raleway font-bold text-sm sm:text-base shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Corporate Gifting</span>
                <ArrowRight className="w-4 h-4 text-[#c9e265]" />
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 hover:border-[#aa7130] bg-white hover:bg-slate-50 text-[#02385a] font-raleway font-bold text-sm sm:text-base transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#aa7130]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-Quality Real Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100">
              <Image
                src="/images/hero/fam.webp"
                alt="The Gift of Peace of Mind - Healthcare Gifting"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
              />

              {/* Gentle bottom gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02385a]/85 via-transparent to-transparent pointer-events-none" />

              {/* Floating reassurance badge */}
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                <div className="flex items-center gap-2 text-[#00b99d] font-raleway font-bold text-xs uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinical Care • Total Discretion</span>
                </div>
                <p className="text-slate-800 text-xs sm:text-sm font-nunito font-semibold leading-snug">
                  Structured in-home and workplace wellness visits supervised by certified Nigerian clinicians.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
