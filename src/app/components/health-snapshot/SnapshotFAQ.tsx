"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How does the home visit work?",
    a: "A licensed TriageHome Registered Nurse arrives at your home or office with clinical testing kits. In a comfortable, private setting, they complete all 13 checks in about 30–45 minutes and review the immediate results with you.",
  },
  {
    q: "Can I book a session for my family or loved ones?",
    a: "Yes. You can book an individual session or a shared family appointment for up to 4 adults. Each participant receives their own full 13-point examination and separate confidential digital record. Children under 5 are included free.",
  },
  {
    q: "When do I receive my Health Snapshot?",
    a: "You receive your physical printed slip immediately at the end of the visit. Your finalized, encrypted Digital Health Snapshot PDF is delivered securely within 24 hours.",
  },
  {
    q: "What if an abnormal reading or high blood pressure is found?",
    a: "Your nurse will explain the finding clearly, repeat the check under relaxed conditions, and provide guidance on next steps, lifestyle measures, or medical referrals if necessary.",
  },
];

export default function SnapshotFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-b border-slate-100 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-raleway font-semibold text-triage-navy tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-nunito">
            Quick answers about booking, visits, and clinical records.
          </p>
        </motion.div>

        <div className="space-y-3 mb-10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-colors hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-raleway font-bold text-sm text-triage-navy">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[#00b99d]" : "text-slate-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 font-nunito leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
