"use client";

import { motion } from "framer-motion";

export default function PartnershipPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ===================================================== */}
      {/* 🟢 HERO */}
      {/* ===================================================== */}

      <section className="relative flex h-screen w-full items-center justify-center text-white">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <img
            src="images/blog/11.webp"
            className="h-full w-full object-cover"
          />

          {/* NAVY OVERLAY */}
          <div className="absolute inset-0 bg-triage-navy/85" />

          {/* subtle lime glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            <span className="text-white">Partnerships that</span>

            <br />

            <span className="text-triage-teal">
              extend care beyond boundaries
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-white/80">
            We collaborate with hospitals, organizations, and institutions to
            deliver seamless, high-quality healthcare wherever it’s needed.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=2349134664547&text=Hi%2C+I%E2%80%99d+like+to+explore+healthcare+solutions+for+my+company.+Can+we+discuss+partnership+options%3F&type=phone_number&app_absent=0"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full bg-triage-orange px-8 py-4 font-medium text-white transition hover:opacity-90"
            >
              Start a partnership conversation
              <img
                src="/icons/cursor.png"
                alt="Arrow Right"
                className="h-4 w-4 object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 🔵 VALUE SECTION */}
      {/* ===================================================== */}

      <section className="relative bg-triage-gray-50 px-6 py-32">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
          {[
            {
              icon: "/icons/home.png",
              title: "For Hospitals",
              desc: "Extend your reach beyond your facility and provide home-based care without increasing operational complexity.",
              color: "bg-triage-navy",
            },
            {
              icon: "/icons/institutional.png",
              title: "For Organizations",
              desc: "Support employee wellbeing with reliable, on demand healthcare services.",
              color: "bg-triage-teal",
            },
            {
              icon: "/icons/collaboration.png",
              title: "Strategic Partners",
              desc: "Collaborate with us to build innovative healthcare solutions.",
              color: "bg-triage-orange",
            },
          ].map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-triage-gray-200 bg-white p-8 shadow-sm"
              >
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain brightness-0 invert"
                  />
                </div>

                <h3 className="text-xl font-semibold text-triage-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-triage-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===================================================== */}
      {/* 🟣 STORY SECTION */}
      {/* ===================================================== */}

      <section className="relative bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl space-y-32">
          {[
            {
              title: "Expand your care beyond the hospital",
              desc: "Enable your clients to continue receiving professional care at home.",
              image: "images/blog/14.webp",
            },
            {
              title: "Empower your workforce",
              desc: "Give employees direct access to healthcare services.",
              image: "images/blog/10.webp",
            },
            {
              title: "Scale without operational strain",
              desc: "Grow your reach without additional infrastructure.",
              image: "images/blog/12.webp",
            },
          ].map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="grid items-center gap-16 md:grid-cols-2">
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`${isLeft ? "" : "md:order-2"}`}
                >
                  <div className="overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={item.image}
                      className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-3xl font-semibold text-triage-navy md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg text-triage-gray-600">
                    {item.desc}
                  </p>

                  <div className="mt-6 h-[2px] w-16 bg-triage-orange" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================== */}
      {/* 🔴 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative px-6 py-32 text-center text-white">
        <div className="absolute inset-0 bg-triage-navy" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Let’s build the future of healthcare together
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Partner with TriageHome to expand access and improve healthcare
            outcomes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=2349134664547&text=Hi%2C+I%E2%80%99d+like+to+explore+healthcare+solutions+for+my+company.+Can+we+discuss+partnership+options%3F&type=phone_number&app_absent=0"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full bg-triage-orange px-8 py-4 font-medium text-white transition hover:opacity-90"
            >
              Start a partnership conversation
              <img
                src="/icons/cursor.png"
                alt="Arrow Right"
                className="h-4 w-4 object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
