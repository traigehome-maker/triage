"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "TriageApp",
    desc: "Book, track, and manage care seamlessly in one place.",
    icon: "/icons/mobilephone.png",
    color: "bg-triage-teal",
    border: "border-triage-teal/30",
  },
  {
    title: "TriageConcierge",
    desc: "A dedicated expert managing your care end-to-end.",
    icon: "/icons/nurse.png",
    color: "bg-triage-purple",
    border: "border-triage-purple/30",
  },
  {
    title: "TriagePods",
    desc: "Extending care to underserved and last-mile communities.",
    icon: "/icons/map.png",
    color: "bg-triage-orange",
    border: "border-triage-orange/30",
  },
  {
    title: "TriageLiving",
    desc: "Wellness-focused assisted living with clinical care.",
    icon: "/icons/home.png",
    color: "bg-triage-navy",
    border: "border-triage-navy/30",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative overflow-hidden px-6 py-32 text-white">

      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-triage-navy" />

        {/* subtle radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.05),transparent_70%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">

          <h2 className="font-raleway text-4xl font-semibold leading-tight text-center md:text-5xl">

            <span className="block text-white">
              One system.
            </span>

            <span className="block text-triage-lime">
              Multiple ways to care.
            </span>

          </h2>

          <p className="font-nunito mt-6 max-w-2xl text-center text-lg text-white/70">
            We’ve built an integrated ecosystem designed to deliver care seamlessly across different needs and environments.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:bg-white/10"
              >

                {/* ICON */}
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-5 w-5 object-contain brightness-0 invert"
                  />

                </div>

                {/* TEXT */}
                <h3 className="font-raleway text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="font-nunito mt-3 text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>

                {/* HOVER BORDER */}
                <div
                  className={`absolute inset-0 rounded-2xl border opacity-0 transition group-hover:opacity-100 ${item.border}`}
                />

              </motion.div>
            );
          })}

        </div>

        {/* FOOTNOTE */}
        <p className="font-nunito mx-auto mt-16 max-w-xl text-center text-white/50">
          Every part of TriageHome works together, so your care is never fragmented.
        </p>

      </div>

    </section>
  );
}
