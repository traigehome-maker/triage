"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, Globe, RefreshCcw } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "../components/ConsultationModal";

export default function EstablishedPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="overflow-hidden">
      {/* ================= HERO (DARK) ================= */}
      <section className="relative min-h-[100vh] flex items-center px-6  md:px-20 md:py-20  bg-[#0a0a0a] text-white">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c2410c]/10 blur-[180px]" />

        <div className="max-w-4xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight bg-gradient-to-r from-[#e5e5e5] via-white to-[#c2410c] bg-clip-text text-transparent">
            Your business is already working.
            <br />
            It just needs to be seen properly.
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-xl">
            We refine and structure how established companies are experienced
            digitally.
          </p>

          <div className="mt-10">
            <button
              onClick={() => setOpenModal(true)}
              className="group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden"
            >
              <span className="relative z-10 text-sm tracking-wide">
                Request Private Consultation
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c2410c] group-hover:w-full transition-all duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM (LIGHT / EDITORIAL SPLIT) ================= */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="bg-white text-black flex items-center px-10 md:px-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight">
              The gap isn’t your business.
              <br />
              It’s how it’s presented.
            </h2>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#f5f5f5] to-[#eaeaea] flex items-center px-10 md:px-20">
          <p className="text-black/60 text-lg leading-relaxed max-w-md">
            Many companies operate at a high level offline, but their digital
            presence lacks the same clarity and structure.
            <br />
            <br />
            That gap affects perception.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE HANDLE (CARDS) ================= */}
      <section className="bg-[#0a0a0a] text-white py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white md:text-5xl font-medium">
            What we handle
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="p-8 border border-white/10 hover:border-white/30 transition">
              <Layers className="mb-6 text-white/60" />
              <h3 className="text-xl">Brand</h3>
              <p className="mt-4 text-white/60">
                We refine how your brand appears across every touchpoint.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-8 border border-white/10 hover:border-white/30 transition">
              <Globe className="mb-6 text-white/60" />
              <h3 className="text-xl">Digital</h3>
              <p className="mt-4 text-white/60">
                We structure your platforms to reflect clarity and level.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-8 border border-white/10 hover:border-white/30 transition">
              <RefreshCcw className="mb-6 text-white/60" />
              <h3 className="text-xl">Continuity</h3>
              <p className="mt-4 text-white/60">
                We ensure everything stays aligned as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUTCOME (LIGHT CENTERED) ================= */}
      <section className="py-32 px-6 md:px-20 text-center bg-gradient-to-b from-white to-[#f2f2f2] text-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium">The result</h2>

          <div className="mt-10 space-y-4 text-black/60 text-lg">
            <p>A clearer digital presence</p>
            <p>A brand that reflects your level</p>
            <p>Consistency across all touchpoints</p>
          </div>
        </div>
      </section>

      {/* ================= QUALIFICATION (DARK SPLIT) ================= */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="bg-[#0a0a0a] text-white px-10 md:px-20 flex items-center">
          <div>
            <h2 className="text-3xl text-white/70 md:text-4xl font-medium">
              This is for you if
            </h2>

            <div className="mt-8 space-y-4 text-white/60">
              <p> You’re already established</p>
              <p> You operate at a high level</p>
              <p> You value clarity and structure</p>
              <p> You want alignment across everything</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] text-white px-10 md:px-20 flex items-center">
          <div>
            <h2 className="text-3xl  md:text-4xl font-medium text-white/80">
              This is not for
            </h2>

            <div className="mt-8 space-y-4 text-white/40">
              <p> Early-stage businesses</p>
              <p> Quick fixes</p>
              <p> Short-term thinking</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA (CLEAN + FOCUSED) ================= */}
      <section className="bg-[#0a0a0a] text-white py-32 px-6 md:px-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-white md:text-5xl font-medium">
            If this aligns, we can explore it.
          </h2>

          <p className="mt-6 text-white/50">
            We work with a select number of companies.
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
