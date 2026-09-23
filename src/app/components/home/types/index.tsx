"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WaitlistModal from "../../waitlist"; // adjust path if needed

const offers = [
  {
    title: "Standard Care",
    desc: "Book a qualified nurse instantly through our app. Get reliable, professional care at home, with transparent pricing and seamless management.",
    cta: "Join the waitlist",
    image: "images/blog/3.webp",
  },
  {
    title: "TriageConcierge",
    desc: "Your personal health expert manages everything. Enjoy discreet, priority care with dedicated coordination wherever you are.",
    cta: "Join the waitlist",
    image: "images/blog/10.webp",
  },
  {
    title: "Partnerships",
    desc: "We support hospitals with on-demand clinical staff and help organizations deliver better healthcare experiences to their people.",
    cta: "Join the waitlist",
    image: "images/blog/9.webp",
  },
];

export default function WhatWeOffer() {
  const [open, setOpen] = useState(false); // ✅ moved state here

  return (
    <section className="relative py-36 px-6 overflow-hidden text-white bg-triage-navy">
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.05),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-semibold text-white font-raleway">
            What We Offer
          </h2>

          <p className="mt-4 text-white/70 text-lg font-nunito">
            Designed to meet you wherever you are, from everyday care to elite support.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-40">
          {offers.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className="relative grid md:grid-cols-2 gap-16 items-center"
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${isLeft ? "order-1" : "order-2"} relative`}
                >
                  <div className="absolute inset-0 -z-10 rounded-[32px] bg-triage-teal/10 blur-2xl" />

                  <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[420px] object-cover"
                    />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`${isLeft ? "order-2" : "order-1"} relative`}
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-10">
                    {/* accent line */}
                    <div className="w-14 h-[2px] bg-triage-orange mb-6" />

                    <h3 className="text-3xl md:text-4xl font-semibold text-white font-raleway">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-white/75 text-lg leading-relaxed font-nunito">
                      {item.desc}
                    </p>

                    {/* ✅ CTA FIXED */}
                    <div
                      onClick={() => setOpen(true)}
                      className="mt-8 inline-flex items-center gap-2 font-medium text-triage-orange cursor-pointer group font-nunito"
                    >
                      <span>{item.cta}</span>

                      <span className="relative w-5 h-5 overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-6">
                          →
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center -translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ MODAL (global, clean) */}
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}