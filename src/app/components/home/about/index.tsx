"use client";

import { motion } from "framer-motion";

const routes = [
  {
    title: "Get Care Now",
    desc: "A healthcare professional at your doorstep within minutes.",
    cta: "Book Now",
    color: "bg-triage-teal",
    image: "/images/blog/4.webp",
    link: "https://wa.me/2349134664547?text=Hi%20Triage%2C%20I%20need%20care%20immediately.%20Please%20send%20a%20healthcare%20professional%20to%20my%20location.",
  },
  {
    title: "Care for a Loved One",
    desc: "Reliable ongoing care for your family members.",
    cta: "Start Care",
    color: "bg-triage-purple",
    image: "/images/blog/2.webp",
    link: "https://wa.me/2349134664547?text=Hello%20Triage%2C%20I%E2%80%99m%20looking%20for%20ongoing%20care%20for%20a%20loved%20one.%20Can%20you%20guide%20me%20on%20the%20next%20steps%3F",
  },
  {
    title: "For My Company",
    desc: "Give your team access to seamless healthcare support.",
    cta: "Partner With Us",
    color: "bg-triage-navy",
    image: "/images/blog/10.webp",
    link: "https://wa.me/2349134664547?text=Hi%2C%20I%E2%80%99d%20like%20to%20explore%20healthcare%20solutions%20for%20my%20company.%20Can%20we%20discuss%20partnership%20options%3F",
  },
  {
    title: "Join as a Provider",
    desc: "Work with TriageHome and reach more clients.",
    cta: "Apply Now",
    color: "bg-triage-orange",
    image: "/images/blog/5.webp",
    link: "https://wa.me/2349134664547?text=Hello%2C%20I%E2%80%99m%20interested%20in%20joining%20Triage%20as%20a%20healthcare%20provider.%20Please%20share%20the%20application%20process.",
  },
];

export default function RoutingSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-triage-gray-50" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* floating boxes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white shadow-xl rounded-xl"
              style={{
                width: `${50 + i * 8}px`,
                height: `${50 + i * 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%) rotate(20deg)",
                opacity: 0.08,
              }}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-raleway font-semibold tracking-tight text-triage-navy">
            How can we help you today?
          </h2>

          <p className="mt-4 text-triage-gray-600 text-lg font-nunito">
            Choose what you need, we’ll take care of the rest.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {routes.map((route, i) => (
            <a key={i} href={route.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >

                {/* IMAGE */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* SOLID COLOR CONTENT */}
                <div className={`${route.color} p-6 text-white`}>

                  <h3 className="text-xl font-raleway font-semibold">
                    {route.title}
                  </h3>

                  <p className="mt-2 text-white/85 text-sm leading-relaxed font-nunito">
                    {route.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-2 font-nunito font-medium">

                    <span>{route.cta}</span>

                    <span className="relative w-5 h-5 overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-6">
                        →
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center -translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                        →
                      </span>
                    </span>

                  </div>

                </div>

              </motion.div>
            </a>
          ))}

        </div>

      </div>

    </section>
  );
}