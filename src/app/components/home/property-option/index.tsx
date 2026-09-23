"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Request Care",
    desc: "Tell us what you need and where you are. It takes less than a minute.",
    icon: "/icons/care.png",
  },
  {
    title: "Get Matched",
    desc: "We instantly connect you with a verified healthcare professional near you.",
    icon: "/icons/nurse.png",
  },
  {
    title: "Receive Care",
    desc: "A qualified provider arrives at your doorstep, fast, safe, and reliable.",
    icon: "/icons/first.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-white md:px-6 md:py-32">
      
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        
        {/* NAVY BASE */}
        <div className="absolute inset-0 bg-triage-navy" />

        {/* subtle radial accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(166,210,0,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,185,157,0.08),transparent_50%)]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 text-center md:mb-20">

          <h2 className="text-3xl font-raleway font-semibold tracking-tight text-white md:text-5xl">
            Care, in three simple steps
          </h2>

          <p className="mt-4 text-base text-white/70 md:text-lg font-nunito">
            From request to care, seamless, reliable, and fast.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* MOBILE LINE */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-[#aa7130]/40 md:hidden" />

          {/* DESKTOP LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#aa7130]/40 md:block" />

          <div className="space-y-12 md:space-y-20">

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative">

                  {/* MOBILE VERSION */}
                  <div className="flex items-start gap-6 md:hidden">

                    {/* DOT */}
                    <div className="relative z-10 mt-2">
                      <div className="h-4 w-4 rounded-full bg-[#aa7130] shadow-[0_0_15px_rgba(170,113,48,0.6)]" />
                    </div>

                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="group relative flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    >

                      {/* ICON */}
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white">

                        <img
                          src={step.icon}
                          alt={step.title}
                          className="h-6 w-6 object-contain brightness-0"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                          }}
                        />

                      </div>

                      <h3 className="text-xl font-raleway font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/70 font-nunito">
                        {step.desc}
                      </p>

                    </motion.div>

                  </div>

                  {/* DESKTOP VERSION */}
                  <div className="hidden items-center justify-between md:flex">

                    {/* LEFT */}
                    <div className="w-[45%]">

                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >

                          {/* ICON */}
                          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white">

                            <img
                              src={step.icon}
                              alt={step.title}
                              className="h-7 w-7 object-contain brightness-0"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                              }}
                            />

                          </div>

                          <h3 className="text-2xl font-raleway font-semibold">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-white/70 font-nunito">
                            {step.desc}
                          </p>

                        </motion.div>
                      )}

                    </div>

                    {/* CENTER DOT */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="h-5 w-5 rounded-full bg-[#aa7130] shadow-[0_0_20px_rgba(170,113,48,0.6)]" />
                    </div>

                    {/* RIGHT */}
                    <div className="w-[45%]">

                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >

                          {/* ICON */}
                          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white">

                            <img
                              src={step.icon}
                              alt={step.title}
                              className="h-7 w-7 object-contain brightness-0"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                              }}
                            />

                          </div>

                          <h3 className="text-2xl font-raleway font-semibold">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-white/70 font-nunito">
                            {step.desc}
                          </p>

                        </motion.div>
                      )}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}