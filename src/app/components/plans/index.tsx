"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    title: "Assure Plan",
    price: "₦120,000",
    duration: "/month",
    description:
      "Premium in-home wellness support designed to provide peace of mind, proactive monitoring, and compassionate care.",
    tag: "Most Popular",
    image: "/images/hero/assureplan.JPG",
    features: [
      "Routine wellness checks",
      "Medication reminders",
      "Home caregiver support",
      "Priority health coordination",
      "Monthly care monitoring",
    ],
  },
  {
    title: "TriagePostOp",
    price: "Tailored",
    duration: "Pricing",
    description:
      "Post-surgical recovery support built around safe healing, professional monitoring, and personalized assistance.",
    tag: "Recovery Care",
    image: "/images/hero/postopp.jpg",
    features: [
      "Post-operative monitoring",
      "Medication assistance",
      "Wound care support",
      "Recovery wellness tracking",
      "Personalized care coordination",
    ],
  },
  {
    title: "TriagePassport",
    price: "₦450,000",
    duration: "/month",
    description:
      "A premium concierge-style healthcare access plan delivering elevated support, coordination, and comfort.",
    tag: "Premium Access",
    image: "/images/hero/triagepassport.jpg",
    features: [
      "Priority care coordination",
      "Premium home visits",
      "Dedicated care support",
      "Fast response healthcare access",
      "Wellness and monitoring assistance",
    ],
  },
];

export default function AccessPlansSection() {
  const whatsappNumber = "2349134664547";

  const handleWhatsapp = (plan: string) => {
    const text = `Hello, I got this from the website and I want access to the ${plan} plan.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F9FFFE] py-20 sm:py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F5FAF9] to-[#EDF7F6]" />

        <div className="absolute top-0 left-[-100px] h-[240px] w-[240px] sm:h-[420px] sm:w-[420px] rounded-full bg-[#02385A]/10 blur-[120px]" />

        <div className="absolute bottom-[-100px] right-[-50px] h-[220px] w-[220px] sm:h-[380px] sm:w-[380px] rounded-full bg-[#AA7130]/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-7xl px-5 sm:px-6 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-[#02385A]/10 bg-white/80 px-4 py-2 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-nunito font-medium text-[#02385A]">
                Premium Healthcare Access
              </span>
            </div>

            <h2 className="max-w-5xl text-[2rem] font-raleway font-semibold leading-[1.05] tracking-tight text-[#02385A] sm:text-5xl lg:text-6xl">
              Healthcare plans designed around care, comfort, and peace of
              mind.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#49606B] sm:text-base lg:text-lg font-nunito">
              Choose a care experience tailored to your needs, from proactive
              wellness support to premium recovery and concierge healthcare
              access.
            </p>
          </motion.div>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/50 bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,56,90,0.08)] transition-all duration-700 hover:shadow-[0_30px_80px_rgba(2,56,90,0.12)] lg:rounded-[34px]">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#02385A]/[0.03] via-transparent to-[#AA7130]/[0.05] opacity-0 transition duration-700 group-hover:opacity-100" />

                {/* IMAGE */}
                <div className="relative overflow-hidden bg-[#F6FAF9]">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-auto object-contain transition duration-[1400ms] group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#001623]/40 via-transparent to-transparent" />

                  <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                    <div className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-nunito font-semibold text-[#02385A] shadow-md backdrop-blur-xl sm:px-4 sm:text-xs">
                      {plan.tag}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-5 sm:p-6 lg:p-7">
                  <div className="mb-5">
                    <h3 className="text-2xl font-raleway font-semibold leading-tight text-[#02385A] sm:text-[28px] lg:text-[30px]">
                      {plan.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#5B717A] sm:text-[15px] font-nunito">
                      {plan.description}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="mb-7 flex flex-wrap items-end gap-2">
                    <span className="text-[2rem] font-raleway font-semibold tracking-tight text-[#02385A] sm:text-[40px] lg:text-[42px]">
                      {plan.price}
                    </span>

                    <span className="mb-2 text-sm text-[#738992] font-nunito">
                      {plan.duration}
                    </span>
                  </div>

                  {/* FEATURES */}
                  <div className="mb-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-[2px] shrink-0 text-[#AA7130]"
                        />

                        <span className="text-sm leading-relaxed text-[#4D646E] font-nunito">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleWhatsapp(plan.title)}
                    className="group/button relative w-full overflow-hidden rounded-[20px] bg-[#02385A] px-5 py-4 text-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(2,56,90,0.28)] sm:rounded-[22px] sm:px-6 sm:py-5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#02385A] to-[#0A4A70]" />

                    <div className="relative flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[15px] font-nunito font-semibold sm:text-[16px]">
                          Get Access
                        </p>

                        <p className="text-xs text-white/70 sm:text-sm font-nunito">
                          Speak with TriageHome
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-500 group-hover/button:translate-x-1 sm:h-12 sm:w-12">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}