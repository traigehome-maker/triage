"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./shared/config";

const EASE = [0.16, 1, 0.3, 1] as const;

const CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const ITEM = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function SnapshotHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[840px] flex items-center overflow-hidden bg-triage-navy pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background authentic hero photo & brand overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/snap-hero.JPG"
          alt="TriageHome Registered Nurse conducting health snapshot screening"
          fill
          priority
          className="object-cover object-center"
        />

        {/* 🔥 NAVY OVERLAY (PRIMARY BRAND MATCHING HOME & ABOUT) */}
        <div className="absolute inset-0 bg-triage-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-triage-navy/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Brand Hero Pitch */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Small Label */}
          <motion.div variants={ITEM} className="inline-flex items-center gap-3 mb-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-triage-lime" 
            />
            <p className="font-nunito text-triage-lime uppercase tracking-widest text-sm font-semibold">
              TriageHealth SnapShot
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={ITEM} className="text-4xl sm:text-5xl md:text-7xl font-raleway font-semibold leading-tight text-white mb-6">
            Know Your Numbers,
            <br />
            <span className="text-white">Protect Your Health</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={ITEM} className="text-base md:text-xl font-nunito text-white/80 leading-relaxed mb-8 max-w-xl">
            A certified Registered Nurse visits your home for 13 essential clinical screenings, blood glucose, and vitals leaving you with a personalized physical receipt and 24-hour Digital Health Snapshot.
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div variants={ITEM} className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-base inline-flex items-center justify-center gap-2 transition shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              Book a Session
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#inclusions"
              className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white font-nunito font-medium inline-flex items-center justify-center hover:border-triage-orange transition"
            >
              See What&apos;s Included →
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Authentic Floating Thermal Receipt Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="flex justify-center lg:justify-end items-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 0.4, 0, -0.4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03, y: -14 }}
            className="relative cursor-pointer"
          >
            <Image
              src="/images/hero/reciept.png"
              alt="TriageHome Health Snapshot Physical Thermal Receipt Slip"
              width={440}
              height={620}
              priority
              className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[410px] h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
