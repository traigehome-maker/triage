"use client";

import { motion } from "framer-motion";
import { UserCheck, FileText, TrendingUp, Building2 } from "lucide-react";
import { WHATSAPP_WORKFORCE_LINK } from "./shared/config";

const STEPS = [
  {
    step: "01",
    title: "Nurse Encounter",
    desc: "A licensed Registered Nurse visits your home or office with full clinical diagnostic equipment.",
    icon: <UserCheck className="w-5 h-5 text-[#00b99d]" />,
  },
  {
    step: "02",
    title: "Digital Snapshot",
    desc: "Receive your immediate physical slip and an encrypted 24-hour digital record with clinical review.",
    icon: <FileText className="w-5 h-5 text-triage-orange" />,
  },
  {
    step: "03",
    title: "Longitudinal Trends",
    desc: "Repeated periodic checks reveal meaningful patterns in blood pressure, glucose, and biometric health.",
    icon: <TrendingUp className="w-5 h-5 text-triage-lime" />,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const STEP_ANIM = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function ContinuityJourney() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-triage-navy tracking-tight mb-3">
            More than a result. A starting point for continuity.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-nunito">
            A single screening captures a moment. Consistent follow-ups build a permanent health trajectory you can share with your doctors.
          </p>
        </motion.div>

        {/* 3-Step Journey Cards with Staggered Motion */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={STEP_ANIM}
              whileHover={{ y: -6, scale: 1.015 }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-200 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-slate-400 font-raleway">STEP {item.step}</span>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow transition-all duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-raleway font-bold text-base text-triage-navy mb-2 group-hover:text-[#00b99d] transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-nunito leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Calm Corporate & Workforce Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-triage-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-triage-lime uppercase tracking-wider font-nunito mb-1">
              <Building2 className="w-4 h-4" />
              For Organisations &amp; Corporate Teams
            </div>
            <h4 className="text-base sm:text-lg font-semibold font-raleway text-white">
              Workforce Screening &amp; Aggregated Health Intelligence
            </h4>
            <p className="text-xs sm:text-sm text-white/80 font-nunito mt-1 max-w-xl">
              Equip your HR and HSE leadership with anonymized, NDPR-compliant participation and risk distribution reporting across departments.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_WORKFORCE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-sm transition whitespace-nowrap shadow inline-flex items-center gap-2"
          >
            Discuss Workforce Programme &rarr;
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
