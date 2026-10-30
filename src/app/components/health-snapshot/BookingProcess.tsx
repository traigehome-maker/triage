"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  CalendarCheck,
  Stethoscope,
  FileCheck,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
} from "./shared/config";

const EASE = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    step: "01",
    title: "Request Your Session",
    desc: "Connect on WhatsApp or call our team. Choose your preferred date, time, and address anywhere in Lagos for yourself or your family.",
    icon: <CalendarCheck className="w-6 h-6 text-triage-teal" />,
  },
  {
    step: "02",
    title: "In-Home Clinical Screening",
    desc: "A licensed Registered Nurse arrives at your home with sterile diagnostic equipment to conduct all 13 essential checks comfortably in 30–45 minutes.",
    icon: <Stethoscope className="w-6 h-6 text-triage-orange" />,
  },
  {
    step: "03",
    title: "Immediate Slip & 24h Digital Record",
    desc: "Receive your physical results slip immediately, a lifestyle debriefing from the nurse, and an encrypted Digital Health Snapshot delivered within 24 hours.",
    icon: <FileCheck className="w-6 h-6 text-triage-lime" />,
  },
];

const CARD_ANIM = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: EASE,
    },
  }),
};

export default function BookingProcess() {
  return (
    <section
      id="booking-process"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-raleway font-bold uppercase tracking-wider mb-3">
            Simple 3-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-triage-navy tracking-tight mb-3">
            How Your Health Snapshot Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-nunito">
            Effortless clinical care brought straight to your doorstep, with no
            hospital queues and no waiting rooms.
          </p>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={CARD_ANIM}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-black text-slate-400 font-raleway">
                    STEP {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-raleway font-bold text-lg text-triage-navy mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-nunito leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 sm:p-10 rounded-3xl bg-triage-navy text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
        >
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-semibold text-triage-lime uppercase tracking-wider font-nunito block mb-2">
              Ready to Know Your Numbers?
            </span>
            <h3 className="text-2xl sm:text-3xl font-raleway font-bold text-white mb-2">
              Book a Session with a Registered Nurse
            </h3>
            <p className="text-white/80 text-sm font-nunito leading-relaxed">
              Available across Lagos for individuals, couples, and entire
              households. Send a direct WhatsApp enquiry to pick your slot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-sm sm:text-base inline-flex items-center justify-center gap-2 transition shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              Book a Session on WhatsApp
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${WHATSAPP_NUMBER}`}
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-white/20 text-white font-nunito font-medium text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:border-triage-orange transition whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-triage-lime" />
              Call {WHATSAPP_DISPLAY}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
