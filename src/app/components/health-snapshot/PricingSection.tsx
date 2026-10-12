"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { WHATSAPP_NUMBER } from "./shared/config";

const EASE = [0.16, 1, 0.3, 1] as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: EASE,
    },
  }),
};

export default function PricingSection() {
  const [adults, setAdults] = useState<number>(4);

  const calculateTotal = (count: number) => {
    if (count <= 1) return 75000;
    if (count <= 4) return 100000;
    return 100000 + (count - 4) * 30000;
  };

  const totalPrice = calculateTotal(adults);

  return (
    <section id="pricing" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-b border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-triage-navy tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-nunito">
            No hidden clinic fees. Certified Registered Nurse home visit, 13 clinical screenings, and 24h digital snapshot record included.
          </p>
        </motion.div>

        {/* 2 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Card 1: Individual */}
          <motion.div
            custom={0}
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-raleway">Solo Visit</span>
              <h3 className="text-xl font-bold text-triage-navy font-raleway mt-1 mb-3">Individual Assessment</h3>
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                <span className="text-3xl sm:text-4xl font-black text-triage-navy font-raleway">₦75,000</span>
                <span className="text-xs text-slate-500 font-nunito">/ single person</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-nunito mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00b99d]" />
                  <span>Licensed Registered Nurse home/office visit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00b99d]" />
                  <span>13 vital checks, blood glucose &amp; malaria RDT</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00b99d]" />
                  <span>Personalized Digital Health Snapshot in 24 hours</span>
                </li>
              </ul>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello TriageHome, I would like to book an Individual Health Snapshot Visit (₦75,000)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full border border-triage-navy text-triage-navy hover:bg-triage-navy hover:text-white font-nunito font-medium text-sm text-center transition block"
            >
              Book Individual Visit
            </motion.a>
          </motion.div>

          {/* Card 2: Shared Family (Featured) */}
          <motion.div
            custom={1}
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-triage-navy text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative border-2 border-triage-orange hover:shadow-2xl transition-shadow"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-triage-orange text-white text-[11px] font-black uppercase tracking-wider font-raleway shadow"
            >
              Best Value
            </motion.div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-triage-lime font-nunito">Shared Visit</span>
              <h3 className="text-xl font-bold text-white font-raleway mt-1 mb-3">Family &amp; Household (Up to 4)</h3>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/15">
                <span className="text-3xl sm:text-4xl font-black text-white font-raleway">₦100,000</span>
                <span className="text-xs text-triage-lime font-nunito font-bold">(₦25,000 / person)</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 font-nunito mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-triage-lime" />
                  <span>Covers up to 4 adults in 1 coordinated visit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-triage-lime" />
                  <span>Children under 5 complimentary</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-triage-lime" />
                  <span>Individual digital snapshots for each member</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-triage-lime" />
                  <span>Add extra persons for ₦30,000 each</span>
                </li>
              </ul>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello TriageHome, I would like to book a Shared Family Health Snapshot Visit (₦100,000 for up to 4 people)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-sm sm:text-base text-center transition shadow block"
            >
              Book Family Visit (₦100,000)
            </motion.a>
          </motion.div>
        </div>

        {/* Compact Interactive Calculator Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center text-xs font-bold font-raleway text-slate-700 mb-2">
              <span>Adjust Household Size:</span>
              <span className="text-triage-navy font-bold text-sm bg-slate-100 px-2.5 py-0.5 rounded-full">
                {adults} {adults === 1 ? "person" : "people"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full accent-[#00b99d] h-2.5 bg-slate-100 rounded-lg cursor-pointer transition-all"
            />
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 font-bold uppercase block font-nunito">Total Visit Fee</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={totalPrice}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="text-xl sm:text-2xl font-black text-triage-navy font-raleway block"
                >
                  ₦{totalPrice.toLocaleString()}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello TriageHome, I would like to book a Health Snapshot visit for ${adults} person(s). Total estimate: ₦${totalPrice.toLocaleString()}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-sm transition shadow inline-flex items-center"
            >
              Book Now →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
