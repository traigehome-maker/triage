"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Intelligence in Care",
    desc: "We use data and technology to make care smarter, faster, and more effective.",
    icon: "/icons/dataintelligence.svg",
    color: "bg-triage-purple",
  },
  {
    title: "Human-Centered Approach",
    desc: "We design every experience around real people, real needs, and real lives.",
    icon: "/icons/heart.png",
    color: "bg-triage-orange",
  },
  {
    title: "Trust & Accountability",
    desc: "We hold ourselves to the highest standards, ensuring every interaction is safe and reliable.",
    icon: "/icons/shield.png",
    color: "bg-triage-navy",
  },
  {
    title: "Speed & Responsiveness",
    desc: "We understand that time matters in healthcare, and we are built to respond quickly.",
    icon: "/icons/lightning.png",
    color: "bg-triage-teal",
  },
  {
    title: "Accessibility",
    desc: "We are committed to expanding access to quality healthcare, regardless of location.",
    icon: "/icons/localization.png",
    color: "bg-triage-lime",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden px-6 py-32 text-triage-navy">

      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0 bg-triage-gray-50" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ============================ */}
        {/* 🔷 MISSION & VISION */}
        {/* ============================ */}

        <div className="mb-32 grid items-center gap-16 md:grid-cols-2">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >

            {/* vertical line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-triage-orange" />

            <div className="pl-6">

              <p className="font-nunito mb-4 text-sm uppercase tracking-widest text-triage-orange">
                Our Mission
              </p>

              <h3 className="font-raleway text-3xl font-semibold leading-tight text-triage-navy md:text-4xl">
                Making healthcare
                <span className="block text-triage-teal">
                  accessible at home
                </span>
              </h3>

              <p className="font-nunito mt-6 text-lg leading-relaxed text-triage-gray-600">
                To make quality healthcare accessible at home, removing barriers, reducing delays, and improving lives through faster, smarter care.
              </p>

            </div>

          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >

            {/* vertical line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-triage-teal" />

            <div className="pl-6">

              <p className="font-nunito mb-4 text-sm uppercase tracking-widest text-triage-teal">
                Our Vision
              </p>

              <h3 className="font-raleway text-3xl font-semibold leading-tight text-triage-navy md:text-4xl">
                A world where care
                <span className="block text-triage-lime">
                  comes to you
                </span>
              </h3>

              <p className="font-nunito mt-6 text-lg leading-relaxed text-triage-gray-600">
                A world where healthcare is not a place you go, but a service that comes to you, seamlessly integrated into everyday life.
              </p>

            </div>

          </motion.div>

        </div>

        {/* ============================ */}
        {/* 💎 VALUES */}
        {/* ============================ */}

        <div className="mb-16 text-center">

          <h2 className="font-raleway text-4xl font-semibold text-triage-navy md:text-5xl">
            What drives us
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-20 bg-triage-orange" />

        </div>

        {/* VALUES GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {values.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-triage-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
              >

                {/* top line */}
                <div
                  className={`absolute left-0 top-0 h-[2px] w-full ${item.color}`}
                />

                {/* icon */}
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-5 w-5 object-contain brightness-0 invert"
                  />

                </div>

                <h3 className="font-raleway text-lg font-semibold text-triage-navy">
                  {item.title}
                </h3>

                <p className="font-nunito mt-3 text-sm leading-relaxed text-triage-gray-600">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
