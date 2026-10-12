"use client";

import { motion } from "framer-motion";
import { Building2, Users, PieChart, ShieldAlert, BarChart3, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_WORKFORCE_LINK } from "./shared/config";

const WORKFORCE_METRICS = [
  {
    title: "Participation & Screening Coverage",
    desc: "Understand exactly how many staff participated across departments, which assessments were completed, and overall company health engagement.",
    icon: <Users className="w-5 h-5 text-[#00b99d]" />,
  },
  {
    title: "Flagged Reading Proportions",
    desc: "Gain visibility into the percentage of participants with elevated blood pressure, pre-diabetic glucose levels, or BMI risks without exposing individual names.",
    icon: <PieChart className="w-5 h-5 text-[#aa7130]" />,
  },
  {
    title: "Common Education & Follow-Up Priorities",
    desc: "Identify the top lifestyle and medical themes where targeted wellness workshops, ergonomic adjustments, or HMO consultations will make the greatest impact.",
    icon: <ShieldAlert className="w-5 h-5 text-[#00b99d]" />,
  },
  {
    title: "Multi-Round Cohort Comparisons",
    desc: "Track health improvements across screening quarters. Measure how targeted workforce wellness interventions reduce chronic disease risk over time.",
    icon: <BarChart3 className="w-5 h-5 text-[#02385a]" />,
  },
];

export default function WorkforceWellness() {
  return (
    <section id="workforce" className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-raleway font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4 text-[#00b99d]" />
            Workforce Health Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-extrabold text-[#02385a] tracking-tight leading-[1.15] mb-5">
            A Clearer Picture of Organisational Wellness
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
            Screening 300 employees should leave an organisation with more than 300 isolated numbers. It should empower leadership with actionable insight into workforce health risks and productivity drivers.
          </p>
        </div>

        {/* 2-Column Split: Interactive Dashboard Teaser + Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left: Aggregated Sample Intelligence Preview */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 font-raleway">Aggregated Executive Report</span>
                <h4 className="text-base font-extrabold text-[#02385a] font-raleway">Q3 Workforce Screening Summary</h4>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                N = 240 Staff
              </span>
            </div>

            {/* Simulated Aggregated Metrics */}
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center text-xs font-nunito mb-1.5">
                  <span className="font-bold text-slate-700">Participation Rate</span>
                  <span className="font-extrabold text-[#00b99d]">92% (240/260)</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00b99d] rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center text-xs font-nunito mb-1.5">
                  <span className="font-bold text-slate-700">Normotensive Blood Pressure</span>
                  <span className="font-extrabold text-teal-700">68% Normal</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-teal-500" style={{ width: "68%" }} />
                  <div className="h-full bg-amber-400" style={{ width: "22%" }} />
                  <div className="h-full bg-rose-500" style={{ width: "10%" }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-nunito">
                  <span>68% Optimal</span>
                  <span>22% Pre-HTN</span>
                  <span>10% Elevated</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center text-xs font-nunito mb-1.5">
                  <span className="font-bold text-slate-700">Fasting Blood Glucose</span>
                  <span className="font-extrabold text-teal-700">84% In Range</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-teal-500" style={{ width: "84%" }} />
                  <div className="h-full bg-amber-400" style={{ width: "16%" }} />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-nunito text-slate-500">
              <span>Zero Individual Identifiers</span>
              <span className="text-teal-700 font-bold">NDPR Compliant</span>
            </div>
          </div>

          {/* Right: 4 Value Pillars of Corporate Screening */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WORKFORCE_METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 shadow-sm transition"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                  {metric.icon}
                </div>
                <h4 className="text-sm font-extrabold text-[#02385a] font-raleway mb-1.5">
                  {metric.title}
                </h4>
                <p className="text-xs text-slate-600 font-nunito leading-relaxed">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corporate Booking Action */}
        <div className="text-center">
          <a
            href={WHATSAPP_WORKFORCE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#02385a] hover:bg-[#012644] text-white font-raleway font-extrabold text-sm sm:text-base shadow-xl transition"
          >
            <MessageCircle className="w-5 h-5 text-[#c9e265]" />
            Discuss a Workforce Screening Programme
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
