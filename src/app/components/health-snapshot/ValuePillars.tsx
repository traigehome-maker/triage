"use client";

import { motion } from "framer-motion";
import { BookOpen, FileCheck2, ArrowUpRight, History, Shield } from "lucide-react";

const PILLARS = [
  {
    icon: <BookOpen className="w-6 h-6 text-[#00b99d]" />,
    title: "Understand Your Results",
    desc: "See your key health indicators brought together with plain-language guidance from your Registered Nurse. No medical jargon without clear explanations.",
    accent: "teal",
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-[#aa7130]" />,
    title: "Keep a Useful Record",
    desc: "Retain a structured digital and physical record that empowers meaningful conversations with your family doctor, specialist, or HMO.",
    accent: "gold",
  },
  {
    icon: <ArrowUpRight className="w-6 h-6 text-[#00b99d]" />,
    title: "Support Clinical Follow-Up",
    desc: "Use actionable nurse-reviewed next steps to guide timely reassessments, lifestyle adjustments, or specialist referrals before issues escalate.",
    accent: "teal",
  },
  {
    icon: <History className="w-6 h-6 text-[#02385a]" />,
    title: "Build Your Health History",
    desc: "Repeated periodic checks create a clear longitudinal trajectory, revealing how your cardiovascular and metabolic markers change over time.",
    accent: "navy",
  },
];

export default function ValuePillars() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#00897a] text-xs sm:text-sm font-raleway font-bold uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4" />
            More Than a Result &middot; A Starting Point for Continuity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-extrabold text-[#02385a] tracking-tight leading-[1.15] mb-5">
            Four Ways the Health Snapshot Empowers You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
            Your Health Snapshot helps you move from receiving isolated numbers to truly understanding what to do next.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-3xl bg-slate-50/80 hover:bg-white p-6 sm:p-7 border border-slate-200/80 hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#02385a] font-raleway mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-nunito leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-teal-700 font-raleway">
                <span>Pillar 0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
