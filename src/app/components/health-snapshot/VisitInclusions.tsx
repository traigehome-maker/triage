"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, MessageCircle } from "lucide-react";
import { CLINICAL_INCLUSIONS, WHATSAPP_LINK } from "./shared/config";

const EASE = [0.16, 1, 0.3, 1] as const;

const CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const CARD_ANIM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function VisitInclusions() {
  return (
    <section id="inclusions" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9333ea] text-white text-xs font-raleway font-bold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-white" />
              Visit Includes:
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-triage-navy tracking-tight leading-[1.15] mb-4">
              Comprehensive Health Checks Delivered at Your Doorstep
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-nunito leading-relaxed mb-6">
              A licensed TriageHome Registered Nurse comes directly to you with clinical testing equipment, conducting all 13 health checks in the comfort and privacy at your Doorstep.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-nunito mb-6 space-y-2">
              <p className="font-bold text-triage-navy font-raleway text-sm">Included with every visit:</p>
              <p>&bull; 13 clinical screenings per participant</p>
              <p>&bull; Immediate nurse debriefing &amp; lifestyle guidance</p>
              <p>&bull; 24-hour Digital Family Health Snapshot record</p>
              <p>&bull; Children under 5 included complimentary</p>
            </div>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-sm transition shadow"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              Book a Session
            </motion.a>
          </motion.div>

          {/* Right Checklist Column (Clean 2-Column Animated Grid) */}
          <motion.div
            variants={CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
          >
            {CLINICAL_INCLUSIONS.map((item) => (
              <motion.div
                key={item.id}
                variants={CARD_ANIM}
                whileHover={{ y: -4, scale: 1.015 }}
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-teal-200 hover:shadow-md transition-all duration-200 flex items-start gap-3.5 cursor-default group"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#00b99d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-teal-100 group-hover:bg-[#00b99d] group-hover:text-white transition-colors duration-200">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-raleway font-bold text-sm text-triage-navy group-hover:text-[#00b99d] transition-colors">
                      {item.title}
                    </h3>
                    {item.badge === "Complimentary" && (
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-lime-100 text-lime-800">
                        Free
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-nunito mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
