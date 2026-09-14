"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export const servicesList = [
  { name: "Elderly Care", href: "/access-plans/elderly-care" },
  { name: "Post-Surgery Care", href: "/access-plans/post-surgery-care" },
  { name: "Chronic Disease Management", href: "/access-plans/chronic-disease-management" },
  { name: "IV Therapy", href: "/access-plans/iv-therapy" },
  { name: "Wellness Check", href: "/access-plans/wellness-check" },
  { name: "Health Screenings", href: "/access-plans/health-screening" },
  { name: "Wound Care", href: "/access-plans/wound-care" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Access Plans", href: "/access-plans" },
  { name: "TriageApp", href: "/triage-app" },
  { name: "Services", href: "/access-plans", isDropdown: true },
  { name: "TriageConcierge", href: "/triage-concierge" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Contact", href: "/contact" },
];

export default function PremiumNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/th.svg"
              alt="TriageHome Logo"
              width={140}
              height={40}
              priority
              className={`transition-all duration-500 ${
                scrolled
                  ? "filter-none opacity-100"
                  : "brightness-0 invert opacity-90"
              }`}
            />
          </Link>

          {/* NAV ITEMS */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">

            {navItems.map((item, i) => {
              if (item.isDropdown) {
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center gap-1.5 text-sm font-medium transition py-2 relative group focus:outline-none ${
                        scrolled ? "text-triage-navy" : "text-white"
                      }`}
                    >
                      <span>{item.name}</span>

                      {/* Animated dropdown chevron */}
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center"
                      >
                        <ChevronDown size={14} className="opacity-80" />
                      </motion.span>

                      {/* underline on hover */}
                      <span className="absolute left-1/2 bottom-[2px] h-[2px] w-0 bg-triage-orange transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </button>

                    {/* SERVICES DROPDOWN DRAWER */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 z-50"
                        >
                          <div
                            className={`rounded-2xl p-2.5 shadow-2xl border backdrop-blur-2xl transition-all ${
                              scrolled
                                ? "bg-white/95 border-slate-200/80 text-triage-navy"
                                : "bg-[#022842]/95 border-white/15 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                            }`}
                          >
                            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider font-raleway opacity-60 border-b border-white/10 mb-1">
                              Healthcare Services
                            </div>

                            <div className="space-y-0.5">
                              {servicesList.map((service, sIndex) => (
                                <Link
                                  key={sIndex}
                                  href={service.href}
                                  onClick={() => setServicesOpen(false)}
                                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-200 group/link ${
                                    scrolled
                                      ? "text-slate-700 hover:bg-slate-100 hover:text-triage-navy"
                                      : "text-white/85 hover:bg-white/10 hover:text-white"
                                  }`}
                                >
                                  <span>{service.name}</span>
                                  <ArrowRight
                                    size={12}
                                    className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-triage-orange"
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link key={i} href={item.href} className="relative group py-2">
                  <div
                    className={`flex items-center gap-2 text-sm font-medium transition ${
                      scrolled ? "text-triage-navy" : "text-white"
                    }`}
                  >
                    {item.name}

                    {/* arrow */}
                    <motion.span
                      className="text-xs"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: -90 }}
                      transition={{ duration: 0.25 }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* underline */}
                  <span className="absolute left-1/2 bottom-[2px] h-[2px] w-0 bg-triage-orange transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              );
            })}

          </div>

          {/* MOBILE BUTTON */}
          <div
            className="md:hidden cursor-pointer p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-6 h-[2px] transition-colors ${scrolled ? "bg-black" : "bg-white"}`} />
              <span className={`w-6 h-[2px] transition-colors ${scrolled ? "bg-black" : "bg-white"}`} />
            </div>
          </div>

        </div>

        {/* CLEAN BORDER (NO GRADIENT) */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col justify-start px-8 pt-24 pb-12 overflow-y-auto"
          >

            <div className="w-full max-w-sm mx-auto flex flex-col gap-5">
              {navItems.map((item, i) => {
                if (item.isDropdown) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex flex-col border-b border-slate-100 pb-3"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between text-2xl font-semibold text-triage-navy text-left w-full"
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={20} className="text-slate-400" />
                        </motion.span>
                      </button>

                      {/* Mobile Accordion Drawer */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-3 pt-3 space-y-2.5"
                          >
                            {servicesList.map((service, sIndex) => (
                              <Link
                                key={sIndex}
                                href={service.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm font-medium text-slate-600 hover:text-triage-orange transition py-1"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-slate-100 pb-3"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-semibold text-triage-navy block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xl font-bold hover:bg-slate-200 transition"
              aria-label="Close mobile menu"
            >
              ✕
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}