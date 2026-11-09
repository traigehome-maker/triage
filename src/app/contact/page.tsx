"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "+234 913 466 4547",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "support@triage-home.com",
  },
  {
    icon: MapPin,
    title: "Visit",
    desc: "No 14, Chief Yesufu Abiodun Oniru Rd. V.I, Lagos",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-white px-6">

        <div className="absolute inset-0 -z-10">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
            alt="Healthcare background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-triage-navy/85" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />

        </div>

        <div className="text-center max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            <span className="text-white">
              Let’s talk about your care
            </span>
            <br />
            <span className="text-triage-teal">
              We’re here to help
            </span>
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            Whether you need immediate care, ongoing support, or have a question, our team is ready to assist you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/2349134664547?text=Hello%20Triage%2C%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-triage-orange text-white font-medium flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <a
              href="#form"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-triage-orange transition"
            >
              Send a Message
            </a>

          </div>

        </div>
      </section>

      {/* ================= CONTACT OPTIONS ================= */}
      <section className="py-24 px-6 bg-triage-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {contactItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-triage-gray-200 shadow-sm text-center bg-white"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-triage-teal text-white mb-4">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-triage-navy text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-triage-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="form" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-triage-navy">
              Send us a message
            </h2>

            <p className="mt-4 text-triage-gray-600">
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <form
            className="bg-white p-8 rounded-2xl shadow-lg border border-triage-gray-200 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              const text = `New Contact Message:
Name: ${name}
Email: ${email}
Message: ${message}`;

              const whatsappUrl = `https://wa.me/2349134664547?text=${encodeURIComponent(text)}`;

              window.open(whatsappUrl, "_blank");

              form.reset();
            }}
          >

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-lg border border-gray-200 outline-none focus:border-triage-teal"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-lg border border-gray-200 outline-none focus:border-triage-teal"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-4 rounded-lg border border-gray-200 outline-none focus:border-triage-teal"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-triage-orange text-white font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 px-6 text-center text-white">

        <div className="absolute inset-0 bg-triage-navy" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Need Care or Health Support?
          </h2>

          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our team is available on WhatsApp to help you access the right TriageHome service.
          </p>

          <p className="mt-3 text-white/80 text-sm sm:text-base font-medium">
            Operating Hours: 7 AM – 9 PM daily.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-white/60">
            For medical emergencies, please proceed to your nearest hospital.
          </p>

          <a
            href="https://wa.me/2349134664547?text=Hello%20TriageHome%2C%20I%20need%20care%20or%20health%20support."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-medium transition shadow-lg"
          >
            Send A Message
          </a>

        </div>
      </section>

    </main>
  );
}