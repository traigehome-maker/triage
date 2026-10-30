"use client";

import Link from "next/link";
import { Compass, Layers, Rocket } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "../components/ConsultationModal";

export default function EmergingPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="overflow-hidden">
      {/* ================= HERO (DARK GRADIENT) ================= */}
      <section className="relative min-h-[95vh] flex items-center px-6 md:px-20 text-white bg-[radial-gradient(circle_at_top,rgba(194,65,12,0.15),transparent_40%),linear-gradient(to_bottom,#0a0a0a,#000)]">
        {/* glow */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

        <div className="max-w-3xl relative z-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            Emerging Brands
          </p>

          <h1 className="text-4xl md:text-6xl font-medium leading-tight bg-gradient-to-r from-[#e5e5e5] via-white to-[#c2410c] bg-clip-text text-transparent">
            Enter the market properly.
            <br />
            Not something you fix later.
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-xl">
            We guide serious brands to build with clarity, structure, and a
            presence that is right from the start.
          </p>

          <div className="mt-10">
            <button
              onClick={() => setOpenModal(true)}
              className="group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden"
            >
              <span className="relative z-10 text-sm tracking-wide">
                Start With Strategy Session
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c2410c] group-hover:w-full transition-all duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM (CENTERED BREAK) ================= */}
      <section className="py-32 px-6 md:px-20 bg-[#0a0a0a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-white/70 md:text-5xl font-medium leading-tight">
            Most brands don’t fail.
            <br />
            They start wrong.
          </h2>

          <p className="mt-6 text-white/60 text-lg">
            Without structure, clarity, and direction, everything that follows
            becomes reactive.
          </p>
        </div>
      </section>

      {/* ================= DIAGONAL SPLIT (CREATIVE LAYOUT) ================= */}
      <section className="relative py-40 bg-gradient-to-b from-white to-[#f2f2f2] text-black overflow-hidden">
        <div className="absolute inset-0 -skew-y-3 bg-white origin-top-left" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium">What we build</h2>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <Compass className="text-black/50 mt-1" />
              <div>
                <h3 className="text-xl text-black/70">Direction</h3>
                <p className="mt-2 text-black/60">
                  Clear positioning and how your brand exists in the market.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Layers className="text-black/50 mt-1" />
              <div>
                <h3 className="text-xl text-black/70">Foundation</h3>
                <p className="mt-2 text-black/60">
                  A structured system for your brand and digital presence.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Rocket className="text-black/50 mt-1" />
              <div>
                <h3 className="text-xl text-black/70">Launch</h3>
                <p className="mt-2 text-black/60">
                  A controlled and confident market entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUTCOME (FLOATING CARDS) ================= */}
      <section className="bg-[#0a0a0a] text-white py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {["Clarity", "Structure", "Confidence"].map((item, i) => (
            <div
              key={i}
              className="p-10 border border-white/10 hover:border-white/30 transition relative"
            >
              <div className="text-5xl text-white/10 mb-6">0{i + 1}</div>
              <h3 className="text-xl">{item}</h3>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c2410c] hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= QUALIFICATION (STACKED + OFFSET) ================= */}
      <section className="py-40 px-6 md:px-20 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-medium">
              This is for you if
            </h2>

            <div className="space-y-4 text-black/60">
              <p> You’re building something serious</p>
              <p> You want to enter correctly</p>
              <p> You value clarity</p>
              <p> You think long term</p>
            </div>
          </div>

          <div className="space-y-6 md:mt-20">
            <h2 className="text-2xl text-black/70">This is not for</h2>

            <div className="space-y-4 text-black/40">
              <p> Side projects</p>
              <p> Guesswork</p>
              <p> Quick wins</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 px-6 md:px-20 text-center text-white bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,65,12,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl text-white md:text-5xl font-medium">
            Start it properly.
          </h2>

          <p className="mt-6 text-white/50">
            We work with a select number of emerging brands.
          </p>

          <div className="mt-10">
            <button
              onClick={() => setOpenModal(true)}
              className="group relative px-10 py-4 border border-white/20 rounded-full overflow-hidden"
            >
              <span className="relative z-10 text-sm tracking-wide">
                Request Private Consultation
              </span>

              {/* underline */}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c2410c] group-hover:w-full transition-all duration-500" />
            </button>
          </div>
        </div>
      </section>
      <ConsultationModal open={openModal} setOpen={setOpenModal} />
    </main>
  );
}
