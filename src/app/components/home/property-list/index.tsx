"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Professionals",
    desc: "Every provider is carefully vetted, trained, and certified for quality care.",
    icon: "/icons/shield.png",
  },
  {
    title: "Fast Response",
    desc: "Get matched with a healthcare professional in minutes.",
    icon: "/icons/high-quality.png",
  },
  {
    title: "Safe & Reliable",
    desc: "Consistent, secure care you can depend on every time.",
    icon: "/icons/like.png",
  },
  {
    title: "Real-Time Matching",
    desc: "We connect you with the closest available provider instantly.",
    icon: "/icons/medical-professional.png",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-triage-navy">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 z-0">

        {/* clean light background */}
        <div className="absolute inset-0 bg-triage-gray-50" />

        {/* subtle radial accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(166,210,0,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,185,157,0.05),transparent_50%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl md:text-5xl font-raleway font-semibold tracking-tight text-triage-navy">
            Care you can trust, every time
          </h2>

          <p className="mt-4 text-lg text-triage-gray-600 font-nunito">
            Verified professionals. Reliable response. Peace of mind.
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2">

          {features.map((feature, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative rounded-2xl border border-triage-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >

                {/* subtle hover overlay */}
                <div className="absolute inset-0 bg-[#aa7130]/[0.03] opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* CONTENT */}
                <div className="relative z-10 flex gap-5">

                  {/* ICON */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#aa7130]/10">

                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-6 w-6 object-contain brightness-0"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                      }}
                    />

                  </div>

                  {/* TEXT */}
                  <div>

                    <h3 className="text-lg font-raleway font-semibold text-triage-navy">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-triage-gray-600 font-nunito">
                      {feature.desc}
                    </p>

                  </div>

                </div>

                {/* border hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent transition duration-500 group-hover:border-[#aa7130]/30" />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}