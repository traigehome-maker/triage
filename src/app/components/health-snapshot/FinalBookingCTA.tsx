"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, PhoneCall } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "./shared/config";

export default function FinalBookingCTA() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-triage-navy text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-triage-navy via-[#012644] to-triage-navy pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 bottom-[-30%] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-triage-orange blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-semibold text-white tracking-tight leading-[1.15] mb-4"
        >
          Bring clarity to your next health interaction.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/80 text-base sm:text-lg font-nunito leading-relaxed max-w-xl mx-auto mb-8"
        >
          Start with an in-home wellness check. Receive a permanent record. Build a clearer health picture over time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-base transition shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            Book a Session on WhatsApp
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${WHATSAPP_NUMBER}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white font-nunito font-medium text-base transition hover:border-triage-orange"
          >
            <PhoneCall className="w-4 h-4 text-triage-lime" />
            Call {WHATSAPP_DISPLAY}
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-white/60 font-nunito"
        >
          Strict clinical confidentiality &middot; Flexible scheduling &middot; 24h Digital Delivery
        </motion.p>
      </div>
    </section>
  );
}
