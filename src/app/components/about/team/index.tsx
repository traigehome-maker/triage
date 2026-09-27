"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Ifunanya Nwokedi",
    title: "Founder & Chief Executive Officer (CEO)",
    degree: "Ph.D.",
    image: "images/blog/ifunanya.webp",
    linkedin:
      "https://www.linkedin.com/in/ifunanya-nwokedi-ph-d-b30a3815?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "text-triage-teal",
    bg: "bg-triage-teal/5",
  },
  {
    name: "Femi Akinpelu",
    title: "Legal Advisor",
    degree: "LL.B, LL.M",
    image: "images/blog/femi.webp",
    linkedin: "https://linkedin.com/in/femi-akinpelu-5a4024a5",
    color: "text-triage-purple",
    bg: "bg-triage-purple/5",
  },
  {
    name: "Babatunde Oduola-Owoo",
    title: "Medical Advisor",
    degree: "M.D.",
    image: "images/blog/tunde.webp",
    linkedin:
      "https://www.linkedin.com/in/babatunde-oduola-owoo-m-d-104a64147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "text-triage-navy",
    bg: "bg-triage-navy/5",
  },
];

export default function ExecutiveTeam() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-triage-navy">
      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0 bg-triage-gray-50" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-raleway text-4xl md:text-5xl font-semibold text-triage-navy">
            Leadership
          </h2>

          <p className="font-nunito mt-6 text-triage-gray-600 max-w-2xl mx-auto text-lg">
            Meet the people shaping the future of home healthcare through
            innovation, expertise, and vision.
          </p>
        </div>

        {/* TEAM */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative rounded-3xl overflow-hidden border border-triage-gray-200 bg-white shadow-md"
            >
              {/* subtle hover overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ${member.bg}`}
              />

              {/* IMAGE */}
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-[1.09] transition duration-700 group-hover:scale-[1.12]"
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6">
                {/* DEGREE */}
                <p
                  className={`font-nunito text-sm font-semibold ${member.color}`}
                >
                  {member.degree}
                </p>

                {/* NAME */}
                <h3 className="font-raleway text-xl font-bold mt-1 text-triage-navy">
                  {member.name}
                </h3>

                {/* TITLE */}
                <p className="font-nunito text-sm text-triage-gray-600 mt-1">
                  {member.title}
                </p>

                {/* LINKEDIN */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nunito mt-5 inline-flex items-center gap-2 text-sm font-medium text-triage-navy hover:text-triage-orange transition"
                >
                  <Linkedin size={16} />
                  View Profile
                </a>
              </div>

              {/* border hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-triage-orange/30 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
