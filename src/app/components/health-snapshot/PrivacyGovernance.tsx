"use client";

import { Shield, Lock, EyeOff, UserCheck } from "lucide-react";

export default function PrivacyGovernance() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-raleway font-bold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5 text-[#00b99d]" />
                Privacy &amp; Data Ethics
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#02385a] font-raleway tracking-tight mb-3">
                Personal Records. Responsible Reporting.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-nunito leading-relaxed">
                Individual Health Snapshots support personal care and clinical
                continuity. Organisational reporting focuses strictly on
                aggregated insights, with rigorous privacy safeguards.
              </p>
            </div>

            {/* Right: 3 Key Guarantees */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <Lock className="w-5 h-5 text-[#00b99d] mb-2.5" />
                <h4 className="text-sm font-extrabold text-[#02385a] font-raleway mb-1">
                  Individual Confidentiality
                </h4>
                <p className="text-xs text-slate-600 font-nunito leading-relaxed">
                  Your personal health data is shared solely with you and the
                  care providers you explicitly authorize.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <EyeOff className="w-5 h-5 text-[#aa7130] mb-2.5" />
                <h4 className="text-sm font-extrabold text-[#02385a] font-raleway mb-1">
                  Anonymized Group Insights
                </h4>
                <p className="text-xs text-slate-600 font-nunito leading-relaxed">
                  Corporate reports suppress small cell sizes (&lt;5) to prevent
                  accidental identification within small teams.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <UserCheck className="w-5 h-5 text-[#02385a] mb-2.5" />
                <h4 className="text-sm font-extrabold text-[#02385a] font-raleway mb-1">
                  Consent-First Protocols
                </h4>
                <p className="text-xs text-slate-600 font-nunito leading-relaxed">
                  Every testincluding optional exams like breast checksis
                  conducted with explicit, informed client consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
