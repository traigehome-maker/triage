"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, FileText, Activity, TrendingUp, CheckCircle, Shield, Share2, Printer, ArrowRight } from "lucide-react";
import { SAMPLE_CLIENT_RECORD, WHATSAPP_LINK } from "./shared/config";

export default function InteractiveReceipt() {
  const [viewMode, setViewMode] = useState<"receipt" | "digital" | "trends">("receipt");

  return (
    <section id="receipt-preview" className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-b border-slate-100 overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef4f8]" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00b99d]/10 border border-[#00b99d]/30 text-[#00897a] text-xs sm:text-sm font-raleway font-bold uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4" />
            Interactive Record Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-extrabold text-[#02385a] tracking-tight leading-[1.15] mb-5">
            Your Health Information, Brought Together
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
            A wellness check captures a moment. A Health Snapshot gives that moment a permanent, structured record you can understand, retain, and share with your doctors.
          </p>

          {/* Interactive View Mode Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-8 gap-1">
            <button
              type="button"
              onClick={() => setViewMode("receipt")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-raleway font-bold transition-all ${
                viewMode === "receipt"
                  ? "bg-[#02385a] text-white shadow-md"
                  : "text-slate-600 hover:text-[#02385a] hover:bg-slate-50"
              }`}
            >
              <FileText className="w-4 h-4" />
              Thermal Receipt Slip
            </button>

            <button
              type="button"
              onClick={() => setViewMode("digital")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-raleway font-bold transition-all ${
                viewMode === "digital"
                  ? "bg-[#02385a] text-white shadow-md"
                  : "text-slate-600 hover:text-[#02385a] hover:bg-slate-50"
              }`}
            >
              <Activity className="w-4 h-4" />
              Digital Family Dashboard
            </button>

            <button
              type="button"
              onClick={() => setViewMode("trends")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-raleway font-bold transition-all ${
                viewMode === "trends"
                  ? "bg-[#02385a] text-white shadow-md"
                  : "text-slate-600 hover:text-[#02385a] hover:bg-slate-50"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Longitudinal Trends
            </button>
          </div>
        </div>

        {/* Dynamic Display Stage */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* VIEW 1: AUTHENTIC THERMAL RECEIPT SLIP */}
            {viewMode === "receipt" && (
              <motion.div
                key="receipt"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center"
              >
                {/* The Thermal Receipt Graphic */}
                <div className="relative w-full max-w-md bg-white rounded-t-xl shadow-2xl border-x border-t border-slate-200 p-6 sm:p-8 font-mono text-slate-900 overflow-hidden">
                  {/* Watermark Logo Header */}
                  <div className="text-center border-b border-dashed border-slate-300 pb-5 mb-5">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-[#02385a] text-white flex items-center justify-center font-bold font-raleway text-xl shadow-sm mb-3">
                      T
                    </div>
                    <h3 className="font-extrabold text-lg tracking-wider uppercase text-slate-900">TRIAGEHOME</h3>
                    <p className="text-[11px] text-slate-500 font-sans">Patient-Centered Care and Mind, delivered to your doorstep.</p>
                  </div>

                  {/* Client Metadata */}
                  <div className="text-center mb-6 pb-4 border-b border-dashed border-slate-300">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">CLIENT RECORD</p>
                    <p className="text-base font-black text-slate-900 mt-1">{SAMPLE_CLIENT_RECORD.name}</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Age: {SAMPLE_CLIENT_RECORD.age} &middot; Gender: {SAMPLE_CLIENT_RECORD.gender}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">Date: {SAMPLE_CLIENT_RECORD.date} &middot; {SAMPLE_CLIENT_RECORD.encounterId}</p>
                  </div>

                  {/* Vitals Signs List */}
                  <div className="mb-6 pb-4 border-b border-dashed border-slate-300">
                    <p className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">VITAL SIGNS</p>
                    
                    <div className="space-y-2 text-xs">
                      {SAMPLE_CLIENT_RECORD.vitals.slice(0, 6).map((v, i) => (
                        <div key={i} className="flex justify-between items-center py-0.5">
                          <span className="text-slate-600">{v.label}</span>
                          <span className="font-bold text-slate-900">{v.value} {v.unit}</span>
                        </div>
                      ))}
                      
                      <div className="pt-2 border-t border-dotted border-slate-200">
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-slate-600">WEIGHT</span>
                          <span className="font-bold text-slate-900">55 kg</span>
                        </div>
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-slate-600">HEIGHT</span>
                          <span className="font-bold text-slate-900">158 cm (5&apos;2&quot;)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BMI Calculation Block */}
                  <div className="mb-6 pb-5 border-b border-dashed border-slate-300 text-center">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">BMI RESULT</p>
                    <p className="text-2xl font-black text-slate-900">22 kg/m²</p>
                    <p className="text-xs font-bold text-teal-700 mt-0.5 uppercase tracking-wide">Category: Normal Weight</p>
                  </div>

                  {/* Booking & Nurse CTA */}
                  <div className="text-center pt-2">
                    <p className="text-xs font-bold text-slate-800">Ready for professional care at home?</p>
                    <p className="text-[11px] text-slate-600 mt-1">Book a certified nurse visit for tests, IV drips, wound care &amp; more.</p>
                    <p className="text-xs font-bold text-[#02385a] mt-2">WhatsApp: +234 913 466 4547</p>

                    {/* QR Code Graphic Box */}
                    <div className="mt-4 inline-flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <QrCode className="w-20 h-20 text-slate-900" />
                      <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-1">SCAN TO BOOK VISIT</span>
                    </div>

                    <p className="text-[10px] text-slate-400 mt-4 italic">Thank you for choosing TriageHome.</p>
                  </div>

                  {/* Sawtooth / Receipt Jagged Edge Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#fafafa]"
                    style={{
                      maskImage: "radial-gradient(circle at 6px bottom, transparent 6px, black 7px)",
                      maskSize: "12px 100%",
                      WebkitMaskImage: "radial-gradient(circle at 6px bottom, transparent 6px, black 7px)",
                      WebkitMaskSize: "12px 100%",
                    }}
                  />
                </div>

                <div className="mt-6 flex items-center gap-4 text-xs font-nunito text-slate-500">
                  <span>Physical &amp; PDF receipt format provided after every home visit</span>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: DIGITAL FAMILY DASHBOARD */}
            {viewMode === "digital" && (
              <motion.div
                key="digital"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00b99d] font-raleway">Digital Health Record</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#02385a] font-raleway mt-0.5">
                      {SAMPLE_CLIENT_RECORD.name} &middot; Comprehensive Snapshot
                    </h3>
                    <p className="text-xs text-slate-500 font-nunito mt-0.5">Assessed by {SAMPLE_CLIENT_RECORD.nurse} &middot; {SAMPLE_CLIENT_RECORD.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200">
                      Verified Encrypted
                    </span>
                  </div>
                </div>

                {/* Vitals Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
                  {SAMPLE_CLIENT_RECORD.vitals.map((v, i) => (
                    <div key={i} className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-raleway">{v.label}</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-lg sm:text-xl font-extrabold text-[#02385a] font-raleway">{v.value}</span>
                        <span className="text-xs text-slate-500 font-nunito">{v.unit}</span>
                      </div>
                      <span className="inline-block mt-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Clinical Notes Box */}
                <div className="rounded-2xl bg-slate-50 p-4 sm:p-5 border border-slate-200 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#02385a] font-raleway mb-2.5 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#00b99d]" />
                    Registered Nurse Clinical Observations
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-nunito">
                    {SAMPLE_CLIENT_RECORD.observations.map((obs, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00b99d] font-bold mt-0.5">&bull;</span>
                        <span>{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm font-nunito">
                  <span className="text-slate-500">Delivered within 24 hours of nurse visit to your secure portal and email.</span>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#02385a] text-white font-raleway font-bold px-5 py-2.5 hover:bg-[#012644] transition"
                  >
                    Book Your Snapshot Visit
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: LONGITUDINAL TRENDS */}
            {viewMode === "trends" && (
              <motion.div
                key="trends"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl"
              >
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#aa7130] font-raleway">Longitudinal Health Intelligence</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#02385a] font-raleway mt-0.5">
                    From a Single Snapshot to Actionable Health Trends
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-nunito mt-1">
                    A single check captures a moment. Multiple comparable visits reveal whether your blood pressure, weight, or glucose are improving, stabilizing, or requiring medical review.
                  </p>
                </div>

                {/* Milestone Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Encounter 1 &middot; Jan 2026</span>
                    <p className="text-sm font-extrabold text-[#02385a] mt-1 font-raleway">Initial Baseline</p>
                    <div className="mt-3 space-y-1.5 text-xs font-nunito">
                      <div className="flex justify-between"><span>Blood Pressure:</span><strong className="text-amber-700">138/88 mmHg</strong></div>
                      <div className="flex justify-between"><span>Glucose:</span><strong>98 mg/dL</strong></div>
                      <div className="flex justify-between"><span>BMI:</span><strong>26.4 kg/m²</strong></div>
                    </div>
                    <p className="mt-3 text-[11px] text-amber-700 font-semibold bg-amber-50 p-2 rounded-lg">Pre-hypertension flagged; diet &amp; hydration guidance given.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Encounter 2 &middot; May 2026</span>
                    <p className="text-sm font-extrabold text-[#02385a] mt-1 font-raleway">4-Month Follow-Up</p>
                    <div className="mt-3 space-y-1.5 text-xs font-nunito">
                      <div className="flex justify-between"><span>Blood Pressure:</span><strong className="text-teal-700">122/80 mmHg</strong></div>
                      <div className="flex justify-between"><span>Glucose:</span><strong>90 mg/dL</strong></div>
                      <div className="flex justify-between"><span>BMI:</span><strong>25.1 kg/m²</strong></div>
                    </div>
                    <p className="mt-3 text-[11px] text-teal-700 font-semibold bg-teal-50 p-2 rounded-lg">Positive systolic drop (-16 mmHg); lifestyle adherence noted.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#00b99d]/10 border border-[#00b99d]/30">
                    <span className="text-[11px] font-bold text-teal-800 uppercase">Encounter 3 &middot; Oct 2026</span>
                    <p className="text-sm font-extrabold text-[#02385a] mt-1 font-raleway">Current Review</p>
                    <div className="mt-3 space-y-1.5 text-xs font-nunito">
                      <div className="flex justify-between"><span>Blood Pressure:</span><strong className="text-teal-700">118/76 mmHg</strong></div>
                      <div className="flex justify-between"><span>Glucose:</span><strong>86 mg/dL</strong></div>
                      <div className="flex justify-between"><span>BMI:</span><strong>24.2 kg/m²</strong></div>
                    </div>
                    <p className="mt-3 text-[11px] text-teal-800 font-semibold bg-white p-2 rounded-lg shadow-sm">Optimal blood pressure restored. Healthy BMI achieved.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#02385a] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-raleway font-bold text-sm text-[#c9e265]">Start Building Your Health Timeline</h4>
                    <p className="text-xs text-white/80 font-nunito">Periodic checks build peace of mind for you, your parents, and your team.</p>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-5 py-2.5 rounded-full bg-[#c9e265] text-[#02385a] font-raleway font-extrabold text-xs hover:bg-white transition"
                  >
                    Schedule Home Visit
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
