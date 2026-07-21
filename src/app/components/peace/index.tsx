"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PeaceOfMindSection() {
  return (
    <section className="relative overflow-hidden bg-[#02385a] py-28 lg:py-36 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* soft pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

        {/* glow */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-3xl" />

        {/* subtle gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02385a]/20 to-[#02385a]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">

              <img
                src="/Icons/heart.png"
                alt="Peace of mind"
                className="w-4 h-4 object-contain brightness-0 invert"
              />

              <span className="text-sm tracking-wide text-white/80">
                Peace Of Mind, Built Around People
              </span>

            </div>

            {/* HEADING */}
            <h2 className="mt-8 text-white text-5xl lg:text-7xl leading-[1.05] tracking-tight font-semibold font-raleway">

              Care should not feel
              <span className="block text-[#aa7130]">
                uncertain.
              </span>

            </h2>

            {/* BODY */}
            <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-white/72 font-nunito">

              <p>
                TriageHome was designed for the moments families quietly carry the most.
                The late night worry. The unanswered calls. The feeling of being far away
                when someone important needs support.
              </p>

              <p>
                We combine trusted clinical providers, structured coordination,
                and consistent communication to help families feel informed,
                supported, and connected every step of the way.
              </p>

              <p>
                Because true care is not only about treatment.
                It is about knowing someone reliable is there when it matters most.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Speak With TriageHome
              </Link>

              

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* ambient blur */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-3xl" />

            {/* card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

              <img
                src="/images/hero/bg2.webp"
                alt="TriageHome clinical provider supporting a client at home"
                className="h-[620px] w-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02385a] via-[#02385a]/10 to-transparent" />

              {/* floating card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#aa7130]">

                    <img
                      src="/Icons/shield.png"
                      alt="Trust"
                      className="w-6 h-6 object-contain brightness-0 invert"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold font-raleway text-white">
                      Trusted support, consistently delivered
                    </h3>

                    <p className="mt-2 text-white/70 leading-relaxed font-nunito">
                      Structured communication, professional oversight,
                      and reliable follow-through designed to give families confidence.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}