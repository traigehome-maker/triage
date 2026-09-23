"use client";

import { motion } from "framer-motion";

export default function JoinTriageSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌍 OUTER BACKGROUND */}
      <div className="absolute inset-0 bg-triage-gray-50" />

      {/* 🧊 CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          {/* 🔷 NAVY BASE (PRIMARY) */}
          <div className="absolute inset-0 bg-triage-navy" />

          {/* 🌌 SUBTLE BRAND TEXTURE */}
          <div className="absolute inset-0">

            {/* soft lime radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.06),transparent_70%)]" />

            {/* subtle grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />

          </div>

          {/* ✨ CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-10 md:p-16 text-white">

            {/* 📝 TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >

              {/* label */}
              <p className="text-triage-lime text-sm uppercase tracking-widest mb-4 font-raleway font-semibold">
                TriageHome Care
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight font-raleway">
                Join TriageHome
              </h2>

              <p className="mt-6 text-white/80 text-lg max-w-md leading-relaxed font-nunito">
                Experience a smarter, more connected way to access home healthcare.  
                Built for comfort, speed, and peace of mind, right where you are.
              </p>

              {/* 📱 STORE BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">

                {/* GOOGLE PLAY */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-triage-orange transition">
                  <img
                    src="/icons/google-play.png"
                    alt="Google Play"
                    className="w-7 h-7 object-contain"
                  />
                  <div>
                    <p className="text-xs text-white/60 font-nunito">Coming soon on</p>
                    <p className="text-lg font-semibold font-raleway">Google Play</p>
                  </div>
                </div>

                {/* APP STORE */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-triage-orange transition">
                  <img
                    src="/icons/app-store.png"
                    alt="App Store"
                    className="w-7 h-7 object-contain"
                  />
                  <div>
                    <p className="text-xs text-white/60 font-nunito">Coming soon on</p>
                    <p className="text-lg font-semibold font-raleway">App Store</p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* 🖼️ IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* subtle glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-triage-teal/10 blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

                <img
                  src="images/blog/11.webp"
                  alt="Triage Home Care"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}