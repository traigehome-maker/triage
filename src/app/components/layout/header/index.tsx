"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Activity,
  HandHeart,
  ShieldCheck,
  HeartPulse,
  Droplets,
  Heart,
  ScanLine,
  Bandage,
} from "lucide-react";

export const servicesList = [
  { name: "Health Snapshot", href: "/hs", icon: Activity },
  { name: "Elderly Care", href: "/access-plans/elderly-care", icon: HandHeart },
  { name: "Post-Surgery Care", href: "/access-plans/post-surgery-care", icon: ShieldCheck },
  { name: "Chronic Disease Management", href: "/access-plans/chronic-disease-management", icon: HeartPulse },
  { name: "IV Therapy", href: "/access-plans/iv-therapy", icon: Droplets },
  { name: "Wellness Check", href: "/access-plans/wellness-check", icon: Heart },
  { name: "Health Screenings", href: "/access-plans/health-screening", icon: ScanLine },
  { name: "Wound Care", href: "/access-plans/wound-care", icon: Bandage },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Access Plans", href: "/access-plans" },
  { name: "TriagePods", href: "/triage-pods" },
  { name: "TriageApp", href: "/triage-app" },
  { name: "Services", href: "/access-plans", isDropdown: true },
  { name: "TriageConcierge", href: "/triage-concierge" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Contact", href: "/contact" },
];

export default function PremiumNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const checkIsActive = (item: { name: string; href: string; isDropdown?: boolean }) => {
    if (item.name === "Home") {
      return pathname === "/";
    }
    if (item.isDropdown) {
      return pathname.startsWith("/access-plans/");
    }
    if (item.name === "Access Plans") {
      return pathname === "/access-plans";
    }
    return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
  };

  return (
    <>
      {/* GLASSMORPHIC NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/70 shadow-[0_10px_35px_-10px_rgba(2,56,90,0.08),0_1px_1px_0_rgba(0,0,0,0.04)] py-3 sm:py-3.5"
            : "bg-[#022842]/45 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/th.svg"
              alt="TriageHome Logo"
              width={140}
              height={40}
              priority
              className={`transition-all duration-500 ${
                scrolled
                  ? "filter-none opacity-100"
                  : "brightness-0 invert opacity-95"
              }`}
            />
          </Link>

          {/* DESKTOP NAV ITEMS (SHIFTED TO RIGHT WITH ELEGANT UNDERLINES) */}
          <nav className="hidden lg:flex items-center gap-5 lg:gap-6 xl:gap-7 ml-auto" aria-label="Main Navigation">
            {navItems.map((item, i) => {
              const isActive = checkIsActive(item);

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
                      className={`relative py-1.5 font-nunito text-[13.5px] xl:text-[14px] transition-colors duration-200 flex items-center gap-1 cursor-pointer focus:outline-none group ${
                        scrolled
                          ? isActive
                            ? "text-triage-orange font-bold"
                            : "text-slate-700 hover:text-triage-navy"
                          : isActive
                          ? "text-white font-bold"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>

                      {/* Dropdown Chevron */}
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center"
                      >
                        <ChevronDown size={13} className="opacity-75" />
                      </motion.span>

                      {/* Underline Indicator */}
                      <span
                        className={`absolute -bottom-1 h-[2px] bg-triage-orange transition-all duration-300 ${
                          isActive
                            ? "w-full left-0"
                            : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                        }`}
                      />
                    </button>

                    {/* SERVICES GLASSMORPHIC DROPDOWN */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full right-0 w-80 pt-3 z-50"
                        >
                          <div
                            className={`rounded-3xl p-3 shadow-2xl border backdrop-blur-3xl transition-all ${
                              scrolled
                                ? "bg-white/90 border-white/80 ring-1 ring-slate-200/80 text-triage-navy shadow-[0_20px_50px_rgba(2,56,90,0.14)]"
                                : "bg-[#022842]/90 border-white/15 text-white ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
                            }`}
                          >
                            <div className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider font-raleway border-b mb-1.5 flex items-center justify-between ${
                              scrolled ? "border-slate-200/60 text-slate-400" : "border-white/10 text-white/50"
                            }`}>
                              <span>Healthcare Services</span>
                              <span className="text-[10px] text-triage-teal font-semibold">Verified Clinical</span>
                            </div>

                            <div className="space-y-0.5">
                              {servicesList.map((service, sIndex) => {
                                const isServiceActive = pathname === service.href;
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={sIndex}
                                    href={service.href}
                                    onClick={() => setServicesOpen(false)}
                                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-200 group/link ${
                                      scrolled
                                        ? isServiceActive
                                          ? "bg-triage-orange/10 text-triage-orange font-semibold"
                                          : "text-slate-700 hover:bg-slate-100 hover:text-triage-navy"
                                        : isServiceActive
                                        ? "bg-white/15 text-triage-lime font-semibold"
                                        : "text-white/85 hover:bg-white/10 hover:text-white"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div
                                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/link:scale-110 ${
                                          scrolled
                                            ? isServiceActive
                                              ? "bg-triage-orange/15 text-triage-orange"
                                              : "bg-slate-100 text-slate-700 group-hover/link:bg-triage-orange/10 group-hover/link:text-triage-orange"
                                            : isServiceActive
                                            ? "bg-triage-lime/20 text-triage-lime"
                                            : "bg-white/10 text-white/90 group-hover/link:bg-white/20 group-hover/link:text-white"
                                        }`}
                                      >
                                        <Icon size={14} strokeWidth={2.2} />
                                      </div>
                                      <span className="truncate">{service.name}</span>
                                    </div>
                                    <ArrowRight
                                      size={12}
                                      className={`transition-all text-triage-orange flex-shrink-0 ml-1.5 ${
                                        isServiceActive
                                          ? "opacity-100 translate-x-0"
                                          : "opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                                      }`}
                                    />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`relative py-1.5 font-nunito text-[13.5px] xl:text-[14px] transition-colors duration-200 flex items-center group ${
                    scrolled
                      ? isActive
                        ? "text-triage-orange font-bold"
                        : "text-slate-700 hover:text-triage-navy"
                      : isActive
                      ? "text-white font-bold"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>

                  {/* Underline Indicator */}
                  <span
                    className={`absolute -bottom-1 h-[2px] bg-triage-orange transition-all duration-300 ${
                      isActive
                        ? "w-full left-0"
                        : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <div
            className={`lg:hidden cursor-pointer p-2.5 rounded-xl transition-colors backdrop-blur-md ${
              scrolled
                ? "bg-slate-100/80 text-triage-navy hover:bg-slate-200"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-5 h-[2px] rounded-full transition-colors ${scrolled ? "bg-triage-navy" : "bg-white"}`} />
              <span className={`w-5 h-[2px] rounded-full transition-colors ${scrolled ? "bg-triage-navy" : "bg-white"}`} />
            </div>
          </div>

        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-2xl z-50 flex flex-col justify-start px-8 pt-24 pb-12 overflow-y-auto"
          >

            <div className="w-full max-w-sm mx-auto flex flex-col gap-5">
              {navItems.map((item, i) => {
                const isActive = checkIsActive(item);

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
                        className={`flex items-center justify-between text-2xl font-semibold text-left w-full ${
                          isActive ? "text-triage-orange" : "text-triage-navy"
                        }`}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={20} className={isActive ? "text-triage-orange" : "text-slate-400"} />
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
                            {servicesList.map((service, sIndex) => {
                              const isServiceActive = pathname === service.href;
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={sIndex}
                                  href={service.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-2.5 text-sm font-medium transition py-1.5 ${
                                    isServiceActive
                                      ? "text-triage-orange font-semibold"
                                      : "text-slate-600 hover:text-triage-orange"
                                  }`}
                                >
                                  <div className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 p-0.5 flex items-center justify-center flex-shrink-0">
                                    <Icon size={14} strokeWidth={2.2} />
                                  </div>
                                  <span>{service.name}</span>
                                </Link>
                              );
                            })}
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
                      className={`text-2xl font-semibold block ${
                        isActive ? "text-triage-orange" : "text-triage-navy"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/access-plans"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-triage-orange hover:bg-[#e04e10] text-white font-raleway font-bold text-base shadow-lg shadow-triage-orange/25 transition"
                >
                  <span>Book Care Plan</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
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