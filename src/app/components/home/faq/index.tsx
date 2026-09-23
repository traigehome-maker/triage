"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How quickly can I get a clinical provider to my home?",
    answer:
      "Our response depends on your service level. For Standard Care, a qualified provider can typically arrive within a few hours depending on availability. TriageConcierge members receive priority, rapid response for immediate support.",
  },
  {
    question: "Are all your nurses qualified and vetted?",
    answer:
      "Yes. Every clinical provider is carefully vetted, licensed, and verified. We ensure they meet strict professional standards before being approved to deliver care through TriageHome.",
  },
  {
    question: "What happens if I need help outside of business hours?",
    answer:
      "TriageHome is designed for flexibility. Depending on your service plan, support is available beyond standard hours, with priority members receiving round-the-clock assistance.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payments are handled securely through our platform with full transparency. You’ll always see pricing upfront before confirming any service.",
  },
  {
    question:
      "Can you help with long-term care for an elderly family member?",
    answer:
      "Absolutely. We provide ongoing care plans tailored to long-term needs, ensuring consistent monitoring, companionship, and medical support at home.",
  },
  {
    question:
      "How does TriageHome ensure client and provider safety?",
    answer:
      "We maintain strict safety protocols, identity verification, and continuous monitoring to ensure a safe and trusted environment for both clients and providers.",
  },
  {
    question:
      "What partnerships are available for hospitals and corporate wellness?",
    answer:
      "We partner with hospitals and organizations to provide on-demand clinical staff and structured healthcare support for teams and clients.",
  },
  {
    question: "Is TriageHome a full-time salaried job?",
    answer:
      "TriageHome operates as a flexible and mobile healthcare network. Providers earn based on completed shifts, home visits, availability, location, and service type rather than a fixed monthly salary. This creates more flexibility and higher earning potential for healthcare professionals.",
  },
  {
    question: "Why does the onboarding and verification process take time?",
    answer:
      "Because TriageHome delivers healthcare directly to clients, every provider (medical doctor, nurse and health assistant) must pass a strict verification process including professional license verification, police clearance, identity checks, and mandatory medical fitness screening.\n\nSelected medical screening typically includes:\n\n• Full medical examination (general fitness to work)\n• Hepatitis B & C screening\n• HIV screening\n• Tuberculosis (TB) screening\n• Urinalysis and general lab tests\n• Drug and substance screening (where required)\n\nThese checks ensure client safety, clinical readiness, and professional standards before any provider is activated on the platform.",
  },
  {
    question: "Is training compulsory before I can start working?",
    answer:
      "Yes. All approved applicants must complete mandatory onboarding training focused on ethics, client safety, professionalism, technology usage, and TriageHome service standards before they begin accepting appointments.",
  },
  {
    question: "What is the salary or earning range?",
    answer:
      "TriageHome does not operate a fixed salary structure. Earnings depend on availability, experience, location, demand, and the number of completed appointments or home visits.\n\nOn average, clinical providers may earn:\n\n• Entry/mid-level nurses: ₦150,000 – ₦350,000+ monthly equivalent\n• Highly active or specialized providers: ₦400,000+\n• Per shift/home visit structure can range from ₦12,000 – ₦40,000 depending on complexity and duration\n\nAdditional earning opportunities include:\n\n• Flexible scheduling based on availability\n• Performance-based growth\n• Bonuses for reliability and patient satisfaction\n• Access to premium/private clients\n• Increased earnings during peak demand periods",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F0FDFA] to-[#ECFEFF]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (INTRO) */}
          <div>

            <h2 className="font-raleway text-4xl md:text-5xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="font-nunito mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
              Confused about how TriageHome works or need clarity on something?  
              Here are answers to the most common questions.
            </p>

            {/* subtle accent */}
            <div className="mt-8 w-20 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500" />

          </div>

          {/* RIGHT SIDE (FAQ LIST) */}
          <div className="space-y-4">

            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-black/5 rounded-2xl overflow-hidden shadow-sm"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <span className="font-raleway text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    className="text-2xl text-teal-600"
                  >
                    +
                  </motion.span>

                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                     <div className="font-nunito px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
  {faq.answer}
</div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}