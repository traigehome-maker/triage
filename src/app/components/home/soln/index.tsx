"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "TriageApp",
    desc: "Connect clients with verified nurses, health assistants, and community health workers, delivering reliable, on-demand care right at home.",
    tag: "Available Soon",
    image:
      "images/blog/12.webp",
  },
  {
    title: "TriagePods",
    desc: "Prefab care units designed to reach the last mile, bringing structured, accessible healthcare services closer to underserved communities.",
    tag: "Coming Soon",
     image:
      "images/blog/13.webp",
  },
  {
    title: "TriageLiving",
    desc: "A 24/7 assisted-living model blending clinical care, wellness, and hospitality, creating a new standard for long-term living.",
    tag: "Coming Soon",
     image:
      "images/blog/3.webp",
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#F9FFFE]">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F0FDFA] to-[#ECFEFF]" />
        <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-teal-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 font-raleway">
            Our Solutions
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl font-nunito">
            A new healthcare infrastructure, designed to move care closer,
            respond faster, and elevate how people experience wellbeing.
          </p>
        </div>

        {/* 🧠 HORIZONTAL SCROLL (FIXED WIDTH) */}
        <div className="overflow-x-auto no-scrollbar">

          <div className="flex gap-8 px-6 md:px-12">

            {solutions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[420px]"
              >

                {/* CARD */}
                <div className="group relative rounded-[28px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                  {/* IMAGE */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition duration-[1000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 mb-4 font-nunito font-semibold">
                      {item.tag}
                    </div>

                    <h3 className="text-xl text-black/70 font-semibold text-gray-900 font-raleway">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed font-nunito">
                      {item.desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 flex items-center gap-2 text-teal-600 text-sm font-medium group cursor-pointer">
                     
                      
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}