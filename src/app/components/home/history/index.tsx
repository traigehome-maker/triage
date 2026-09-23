"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Elderly Care",
    slug: "elderly-care",
    desc: "Compassionate, dignified support for elderly or physically challenged clients, from daily assistance and companionship to medication management and regular health monitoring, helping them live independently at home.",
    image: "/images/blog/elderly-care.webp",
    color: "bg-triage-teal",
  },
  {
    title: "Post-Surgery Care",
    slug: "post-surgery-care",
    desc: "Professional recovery support with vital signs monitoring, surgical site care, medication reminders, and early detection of complications, ensuring a smooth and safe healing process.",
    image: "/images/blog/8.webp",
    color: "bg-triage-purple",
  },
  {
    title: "Chronic Disease Management",
    slug: "chronic-disease-management",
    desc: "Ongoing support for conditions like diabetes and hypertension, including regular monitoring, medication guidance, and client education to help maintain stability and improve quality of life.",
    image: "/images/blog/chronic-health.webp",
    color: "bg-triage-navy",
  },
  {
    title: "IV Therapy",
    slug: "iv-therapy",
    desc: "Safe administration of prescribed IV fluids, vitamins, and medications in the comfort of your home, delivered by trained healthcare professionals.",
    image: "/images/blog/iv.png",
    color: "bg-triage-orange",
  },
  {
    title: "Wellness Check",
    slug: "wellness-check",
    desc: "A complete health review including vital signs check, risk assessment, and lifestyle consultation, helping you stay proactive about your health.",
    image: "/images/blog/wellness-check.webp",
    color: "bg-triage-lime",
  },
  {
    title: "Health Screenings",
    slug: "health-screening",
    desc: "Quick and reliable on-the-spot tests including malaria, typhoid, HIV, blood pressure, glucose, and BMI, giving you clarity and peace of mind instantly.",
    image: "/images/blog/hs.png",
    color: "bg-[#ffbf00]",
  },
  {
    title: "Wound Care",
    slug: "wound-care",
    desc: "Expert wound assessment, cleaning, dressing, and infection monitoring, ensuring proper healing and reducing the risk of complications.",
    image: "/images/blog/7.webp",
    color: "bg-triage-teal",
  },
];

export default function WhatWeDoTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-triage-gray-50" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* FLOATING SHAPES */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(10)].map((_, i) => (

          <div
            key={i}
            className="absolute bg-white shadow-xl rounded-xl"
            style={{
              width: `${50 + i * 10}px`,
              height: `${50 + i * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%) rotate(20deg)",
              opacity: 0.06,
            }}
          />

        ))}

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-semibold text-triage-navy font-raleway">
            What We Do
          </h2>

          <p className="mt-4 text-triage-gray-600 text-lg font-nunito">
            Personalized healthcare services designed around your needs.
          </p>

        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">

          {services.map((tab, i) => (

            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-xl text-sm font-nunito font-medium transition-all duration-300 border
              ${
                active === i
                  ? `${tab.color} text-white border-transparent shadow-lg`
                  : "text-triage-gray-600 bg-white border-triage-gray-200 hover:border-triage-orange"
              }`}
            >
              {tab.title}
            </button>

          ))}

        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl p-8 md:p-12 ${services[active].color} text-white shadow-xl`}
          >

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* TEXT */}
              <div>

                <h3 className="text-3xl md:text-4xl font-semibold font-raleway">
                  {services[active].title}
                </h3>

                <p className="mt-5 text-white/90 text-lg leading-relaxed font-nunito">
                  {services[active].desc}
                </p>

                <div className="mt-6 w-16 h-[2px] bg-white/70" />

                {/* BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    href={`/access-plans/${services[active].slug}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-white text-triage-navy px-6 py-3 text-sm font-nunito font-semibold transition hover:scale-[1.02] hover:bg-white/90"
                  >
                    Learn More
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-nunito font-semibold text-white transition hover:bg-white/20"
                  >
                    Book Care
                  </Link>

                </div>

              </div>

              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">

                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}