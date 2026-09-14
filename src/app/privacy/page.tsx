"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  HeartPulse,
  Lock,
  FileText,
  UserCheck,
  Scale,
  Cpu,
  Globe,
  AlertTriangle,
  Mail,
  Phone,
  Building,
  CheckCircle2,
  ChevronRight,
  Search,
  BookOpen,
  Database,
  Smartphone,
  Share2,
  Bell,
  RefreshCw,
  Stethoscope,
  Sparkles,
  Printer,
  ChevronDown,
  ArrowUp,
  SlidersHorizontal,
  X,
  Compass,
  Check,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("section-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Table of Contents list with 23 sections
  const tocItems = [
    {
      id: "section-1",
      title: "1. Our Commitment",
      icon: HeartPulse,
      short: "Commitment",
    },
    {
      id: "section-2",
      title: "2. About TriageHome & Escalation",
      icon: Stethoscope,
      short: "About & Safety",
    },
    {
      id: "section-3",
      title: "3. Scope & Applicability",
      icon: Globe,
      short: "Scope",
    },
    {
      id: "section-4",
      title: "4. Privacy Principles",
      icon: ShieldCheck,
      short: "Principles",
    },
    {
      id: "section-5",
      title: "5. Key Definitions",
      icon: BookOpen,
      short: "Definitions",
    },
    {
      id: "section-6",
      title: "6. Information We Collect",
      icon: Database,
      short: "Data Collected",
    },
    {
      id: "section-7",
      title: "7. How We Use Data & AI",
      icon: Cpu,
      short: "Data Use & AI",
    },
    {
      id: "section-8",
      title: "8. Legal Basis for Processing",
      icon: Scale,
      short: "Legal Bases",
    },
    {
      id: "section-9",
      title: "9. Health Data & Confidentiality",
      icon: Lock,
      short: "Confidentiality",
    },
    {
      id: "section-10",
      title: "10. Sharing Your Information",
      icon: Share2,
      short: "Data Sharing",
    },
    {
      id: "section-11",
      title: "11. Consent Management",
      icon: UserCheck,
      short: "Consent",
    },
    {
      id: "section-12",
      title: "12. Security & Communications",
      icon: Shield,
      short: "Security",
    },
    {
      id: "section-13",
      title: "13. Retention & Safeguards",
      icon: RefreshCw,
      short: "Retention",
    },
    {
      id: "section-14",
      title: "14. International Transfers",
      icon: Globe,
      short: "Cross-Border",
    },
    {
      id: "section-15",
      title: "15. Your Privacy Rights",
      icon: CheckCircle2,
      short: "Your Rights",
    },
    {
      id: "section-16",
      title: "16. Breach & Incident Response",
      icon: AlertTriangle,
      short: "Incidents",
    },
    {
      id: "section-17",
      title: "17. Children's Privacy",
      icon: HeartPulse,
      short: "Minors",
    },
    {
      id: "section-18",
      title: "18. Cookies & App Permissions",
      icon: Smartphone,
      short: "Permissions",
    },
    {
      id: "section-19",
      title: "19. Marketing Communications",
      icon: Bell,
      short: "Marketing",
    },
    {
      id: "section-20",
      title: "20. Suspension & Termination",
      icon: Scale,
      short: "Termination",
    },
    {
      id: "section-21",
      title: "21. Policy Changes",
      icon: RefreshCw,
      short: "Updates",
    },
    {
      id: "section-22",
      title: "22. Contact Us & DPO",
      icon: Mail,
      short: "Contact & DPO",
    },
    {
      id: "section-23",
      title: "23. NDPA 2023 Compliance",
      icon: Building,
      short: "Compliance",
    },
  ];

  // Track scroll position & active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));

      setShowBackToTop(window.scrollY > 400);

      // Section detection
      const scrollPosition = window.scrollY + 220;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileDrawerOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
  };

  const activeItemObj =
    tocItems.find((item) => item.id === activeSection) || tocItems[0];

  const filteredToc = tocItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.short.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="bg-[#F8FAFC] text-[#0A2540] min-h-screen font-nunito selection:bg-triage-teal/20 selection:text-triage-navy relative">
      {/* ===================================================== */}
      {/* 📊 TOP READING PROGRESS BAR */}
      {/* ===================================================== */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-slate-200/50">
        <motion.div
          className="h-full bg-gradient-to-r from-triage-teal via-triage-lime to-triage-orange"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ===================================================== */}
      {/* 🌌 HERO HEADER (MOBILE-FIRST REFINED) */}
      {/* ===================================================== */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-triage-navy text-white">
        {/* Subtle Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-triage-teal/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-10 -left-10 w-64 sm:w-80 h-64 sm:h-80 bg-triage-lime/15 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] opacity-40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Compliance Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-triage-lime text-[10px] sm:text-xs uppercase tracking-widest font-raleway font-bold mb-5 backdrop-blur-md"
          >
            <ShieldCheck size={14} className="text-triage-teal flex-shrink-0" />
            <span>Healthcare Privacy • NDPA 2023</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-raleway leading-tight tracking-tight text-white"
          >
            Privacy &{" "}
            <span className="text-triage-teal">Health Information</span> Policy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2"
          >
            How TriageHome protects, collects, and manages your personal and
            sensitive clinical health records with medical confidentiality
            across all our digital platforms, providers, and care models.
          </motion.p>

          {/* Meta Information Cards / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-white/80"
          >
            <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                Version: <strong>2026.1</strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <Scale size={13} className="text-triage-lime" />
              <span>
                Law: <strong>NDPA 2023 (Nigeria)</strong>
              </span>
            </div>
            {/* <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition flex items-center gap-1.5 active:scale-95"
              title="Print Policy"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button> */}
          </motion.div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ⚠️ EMERGENCY MEDICAL NOTICE BANNER */}
      {/* ===================================================== */}
      <div className="bg-amber-500/10 border-y border-amber-500/20 px-4 sm:px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex items-start gap-3 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed">
          <AlertTriangle
            size={18}
            className="text-amber-600 flex-shrink-0 mt-0.5"
          />
          <p>
            <strong className="text-amber-900">Non-Emergency Notice:</strong>{" "}
            TriageHome coordinates scheduled and on-demand home healthcare
            access but <em>does not replace emergency medical services</em>. If
            you are experiencing a life-threatening emergency, please contact
            emergency response or proceed immediately to the nearest hospital.
          </p>
        </div>
      </div>

      {/* ===================================================== */}
      {/* 📱 FLOATING MOBILE NAVIGATION BAR & BUTTON */}
      {/* ===================================================== */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm flex items-center justify-between">
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="flex items-center gap-2 text-left flex-1 min-w-0 pr-2"
        >
          <div className="w-7 h-7 rounded-lg bg-triage-navy text-white flex items-center justify-center flex-shrink-0">
            <Compass size={14} className="text-triage-teal" />
          </div>
          <div className="truncate">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-raleway">
              Current Section
            </span>
            <span className="text-xs font-bold text-triage-navy truncate block font-raleway">
              {activeItemObj.title}
            </span>
          </div>
        </button>

        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 font-raleway flex-shrink-0 transition active:scale-95"
        >
          <SlidersHorizontal size={12} />
          <span>Jump to...</span>
        </button>
      </div>

      {/* ===================================================== */}
      {/* 📱 SLIDE-OVER MOBILE TABLE OF CONTENTS DRAWER */}
      {/* ===================================================== */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Bottom Sheet Modal */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative z-10 bg-white rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-raleway font-bold text-triage-navy text-base">
                    Policy Navigation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Select any of the 23 sections below
                  </p>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Search Inside Drawer */}
              <div className="p-3 bg-slate-50 border-b border-slate-100">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={14}
                  />
                  <input
                    type="text"
                    placeholder="Search sections (e.g. Consent, AI, HA)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-triage-teal/30 text-slate-800"
                  />
                </div>
              </div>

              {/* Sections List */}
              <div className="p-3 overflow-y-auto flex-1 space-y-1.5 scrollbar-thin">
                {filteredToc.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-xs transition active:scale-[0.99] ${
                        isActive
                          ? "bg-triage-navy text-white font-bold shadow-sm"
                          : "bg-slate-50/70 hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          size={14}
                          className={
                            isActive ? "text-triage-teal" : "text-slate-400"
                          }
                        />
                        <span className="truncate">{item.title}</span>
                      </div>
                      {isActive && (
                        <Check
                          size={14}
                          className="text-triage-teal flex-shrink-0 ml-2"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ===================================================== */}
      {/* 📖 MAIN BODY: SIDEBAR + CONTENT */}
      {/* ===================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ========================================= */}
          {/* 📌 STICKY NAVIGATION SIDEBAR (DESKTOP) */}
          {/* ========================================= */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 space-y-4 max-h-[calc(100vh-140px)] flex flex-col">
              {/* Search Bar */}
              <div className="relative">
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={15}
                />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-triage-teal/30 focus:border-triage-teal text-slate-700 placeholder-slate-400 shadow-sm"
                />
              </div>

              {/* TOC List Container */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2.5 overflow-y-auto flex-1 space-y-1 scrollbar-thin">
                <div className="px-3 py-2 text-[10px] font-bold tracking-wider uppercase text-slate-400 font-raleway flex items-center justify-between">
                  <span>Sections</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                    {tocItems.length} Total
                  </span>
                </div>

                {filteredToc.length === 0 ? (
                  <p className="text-xs text-slate-400 p-3 italic">
                    No matching sections.
                  </p>
                ) : (
                  filteredToc.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs transition-all duration-200 ${
                          isActive
                            ? "bg-triage-navy text-white font-bold shadow-sm"
                            : "text-slate-600 hover:bg-slate-50 hover:text-triage-navy font-medium"
                        }`}
                      >
                        <Icon
                          size={14}
                          className={
                            isActive ? "text-triage-teal" : "text-slate-400"
                          }
                        />
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* DPO Sidebar Widget */}
              <div className="bg-gradient-to-br from-triage-navy to-[#043350] text-white p-5 rounded-2xl shadow-md border border-white/10 text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-triage-lime font-bold font-raleway uppercase tracking-wider text-[11px]">
                  <Mail size={13} />
                  <span>DPO Assistance</span>
                </div>
                <p className="text-white/80 text-[11.5px] leading-relaxed">
                  Questions regarding your sensitive clinical data or wishing to
                  exercise your statutory privacy rights?
                </p>
                <a
                  href="mailto:support@traige-home.com"
                  className="inline-flex items-center gap-1 text-triage-teal font-bold hover:underline text-xs"
                >
                  support@traige-home.com →
                </a>
              </div>
            </div>
          </aside>

          {/* ========================================= */}
          {/* 📜 MAIN DOCUMENT CONTENT */}
          {/* ========================================= */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8 sm:space-y-10">
            {/* ---------------------------------------------------------------- */}
            {/* 1. OUR COMMITMENT */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-1"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-50 text-triage-teal flex items-center justify-center border border-teal-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <HeartPulse size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 01
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    1. Our Commitment
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p className="text-sm sm:text-base font-semibold text-slate-900">
                  At TriageHome, trust is the foundation of every relationship
                  we build.
                </p>
                <p>
                  Whether you access our services through{" "}
                  <strong>TriageAccess</strong>, receive care from one of our{" "}
                  <strong>Providers</strong>, attend a{" "}
                  <strong>TriagePod</strong>, participate in a corporate
                  wellness programme or interact with our team through another
                  TriageHome service, you trust us with personal and health
                  information.
                </p>
                <p>
                  We recognise that this information is among your most
                  sensitive information. Protecting it is fundamental to the way
                  we deliver healthcare.
                </p>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 my-4">
                  <p className="font-bold text-triage-navy mb-2.5 font-raleway text-xs sm:text-sm">
                    This Privacy & Health Information Policy explains:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {[
                      "What information we collect.",
                      "Why we collect it.",
                      "How we use and protect it.",
                      "When we may share it.",
                      "How long we retain it.",
                      "Your rights and choices.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-triage-teal flex-shrink-0"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-medium text-triage-navy">
                  Our objective is to support safe, coordinated and high-quality
                  healthcare while protecting your privacy and complying with
                  applicable laws.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 2. ABOUT TRIAGEHOME */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-2"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-50 text-[#02385A] flex items-center justify-center border border-blue-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Stethoscope size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 02
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    2. About TriageHome
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  <strong>TriageHome</strong> is a digital healthcare access and
                  care coordination platform that enables individuals, families
                  and organisations to access trusted healthcare services
                  wherever they live, work, travel and recover.
                </p>
                <p>
                  TriageHome coordinates healthcare access by connecting clients
                  with appropriately qualified and authorised healthcare
                  professionals and Health Assistants while supporting
                  appointment management, care coordination, clinical
                  documentation, operational support and continuous service
                  improvement.
                </p>
                <p>
                  Depending on the service selected, care may be provided
                  through scheduled visits, extended-hour support, companion
                  services, live-in arrangements, corporate or community
                  programmes, or TriageConcierge services.
                </p>
                <p>
                  Healthcare and support services are delivered by appropriately
                  qualified and authorised healthcare professionals and Health
                  Assistants engaged or approved by TriageHome in accordance
                  with their respective roles, applicable laws, professional
                  standards and TriageHome policies.
                </p>

                {/* Digital Ecosystem */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 my-3">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-2.5 flex items-center gap-2">
                    <Smartphone size={15} className="text-triage-teal" />
                    Our Digital Ecosystem Currently Includes:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-triage-teal mt-1.5 flex-shrink-0" />
                      <span>
                        <strong>Triage Access:</strong> Client application for
                        bookings, health records, and family care.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-triage-teal mt-1.5 flex-shrink-0" />
                      <span>
                        <strong>Triage Providers / Practitioners:</strong>{" "}
                        Dedicated app for registered nurses and providers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-triage-teal mt-1.5 flex-shrink-0" />
                      <span>
                        <strong>Admin Platform & TriageDesk:</strong> Central
                        operational workspace supporting appointments, assisted
                        check-in, wellness activations, and service
                        coordination.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Clinical Findings & Escalation */}
                <div className="border-l-4 border-amber-500 bg-amber-50/60 p-4 sm:p-5 rounded-r-xl sm:rounded-r-2xl space-y-2.5">
                  <h4 className="font-bold text-amber-950 text-xs sm:text-sm font-raleway flex items-center gap-2">
                    <AlertTriangle size={15} className="text-amber-600" />
                    Clinical Findings, Escalation & Emergency Protocols
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-950">
                    TriageHome facilitates healthcare access and care
                    coordination but does not replace emergency medical
                    services. Where a TriageHome clinical provider identifies
                    signs, symptoms, observations or findings during service
                    provision that may require urgent medical attention, the
                    provider may take reasonable steps:
                  </p>
                  <ul className="list-disc pl-4 text-xs sm:text-sm space-y-1 text-amber-900">
                    <li>
                      Stopping or modifying the planned service where necessary
                      for safety;
                    </li>
                    <li>
                      Conducting appropriate immediate observations or
                      assessments within scope;
                    </li>
                    <li>
                      Escalating to TriageHome's designated clinical personnel
                      where appropriate;
                    </li>
                    <li>
                      Advising or facilitating referral to an appropriate
                      healthcare facility or emergency service; and
                    </li>
                    <li>
                      Documenting the finding, action taken, and clinical
                      handover.
                    </li>
                  </ul>
                  <p className="text-[11px] sm:text-xs text-amber-900 italic pt-1">
                    Where circumstances reasonably indicate that immediate
                    escalation is necessary to protect life or safety,
                    TriageHome or its clinical providers may take appropriate
                    action without waiting for completion of the scheduled
                    service. TriageHome does not guarantee the availability,
                    response time, or outcome of any third-party emergency
                    healthcare facility.
                  </p>
                </div>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 3. SCOPE */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-3"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Globe size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 03
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    3. Scope & Applicability
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  This Policy also applies to information processed in
                  connection with companion services, extended-hour and live-in
                  arrangements, TriageConcierge services and travel health
                  support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                  <div className="bg-slate-50 p-4 rounded-xl sm:rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-2.5">
                      Applies to touchpoints including:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                      {[
                        "Website (triage-home.com)",
                        "Triage Access App",
                        "Triage Providers App",
                        "Admin Platform / TriageDesk",
                        "TriagePods",
                        "Community activations",
                        "Residential estate clinics",
                        "Corporate wellness programmes",
                        "Customer support",
                        "Phone, email & WhatsApp",
                        "Any authorised service",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2
                            size={12}
                            className="text-triage-teal flex-shrink-0"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl sm:rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-2.5">
                      Applies to all parties:
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {[
                        "Clients (individuals receiving care)",
                        "Parents, legal guardians or authorized representatives",
                        "Providers (Clinical Providers & Health Assistants)",
                        "Corporate clients & institutional partners",
                        "Business partners & contracted vendors",
                        "Prospective clients & general website visitors",
                      ].map((party, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <UserCheck
                            size={13}
                            className="text-triage-orange flex-shrink-0"
                          />
                          <span>{party}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 4. PRIVACY PRINCIPLES */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-4"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-50 text-triage-teal flex items-center justify-center border border-teal-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 04
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    4. Privacy Principles
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  TriageHome is committed to processing all personal and health
                  information in strict accordance with the following nine core
                  governance principles:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 my-3">
                  {[
                    {
                      title: "Lawfulness",
                      desc: "Processing is always grounded in valid lawful bases.",
                    },
                    {
                      title: "Fairness",
                      desc: "Handled ethically, without deception or harmful bias.",
                    },
                    {
                      title: "Transparency",
                      desc: "Clear, plain communication on how data is used.",
                    },
                    {
                      title: "Accountability",
                      desc: "Continuous governance, auditing, and oversight.",
                    },
                    {
                      title: "Data Minimisation",
                      desc: "Only collecting what is strictly needed for care.",
                    },
                    {
                      title: "Accuracy",
                      desc: "Keeping clinical records complete and up-to-date.",
                    },
                    {
                      title: "Confidentiality",
                      desc: "Strict medical secrecy across all staff & providers.",
                    },
                    {
                      title: "Security",
                      desc: "End-to-end technical, physical and logical controls.",
                    },
                    {
                      title: "Privacy by Design",
                      desc: "Baked directly into new software and workflows.",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                        <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway">
                          {p.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 italic">
                  Privacy considerations are incorporated into the design and
                  development of every new product, feature, algorithm, and
                  clinical workflow.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 5. DEFINITIONS */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-5"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-purple-50 text-triage-purple flex items-center justify-center border border-purple-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 05
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    5. Definitions
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm leading-relaxed">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Client
                  </h4>
                  <p className="text-slate-600">
                    Any individual requesting or receiving healthcare services
                    through TriageHome.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Provider
                  </h4>
                  <p className="text-slate-600">
                    An individual authorised by TriageHome to deliver services
                    through the Platform (Clinical Provider or Health
                    Assistant).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Clinical Provider
                  </h4>
                  <p className="text-slate-600">
                    A healthcare professional licensed in Nigeria, such as a
                    Medical Doctor, Registered Nurse (RN), or Registered Midwife
                    (RM).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200">
                  <h4 className="font-bold text-teal-950 text-xs sm:text-sm font-raleway mb-1">
                    Health Assistant (HA)
                  </h4>
                  <p className="text-teal-900">
                    A trained service provider who provides non-licensed
                    supportive care and companion services.{" "}
                    <em>
                      An HA does not independently diagnose, prescribe, or make
                      clinical decisions.
                    </em>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Corporate Client
                  </h4>
                  <p className="text-slate-600">
                    An organisation engaging TriageHome to provide healthcare
                    services for its employees, members or beneficiaries.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Health Information
                  </h4>
                  <p className="text-slate-600">
                    Information relating to physical or mental health, clinical
                    observations, medications, investigations, or care plans.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Personal Information
                  </h4>
                  <p className="text-slate-600">
                    Information that identifies or can reasonably identify an
                    individual (name, contact, NIN, location).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-1">
                    Processing
                  </h4>
                  <p className="text-slate-600">
                    Collecting, storing, organising, using, sharing, updating,
                    transferring, archiving or securely disposing of
                    information.
                  </p>
                </div>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 6. INFORMATION WE COLLECT */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-6"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-amber-50 text-triage-orange flex items-center justify-center border border-amber-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Database size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 06
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    6. Information We Collect
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-4">
                <p>
                  Depending on the services you use, TriageHome collects
                  information reasonably necessary to ensure clinical safety and
                  care coordination under data minimisation:
                </p>

                {/* Personal Information Box */}
                <div className="border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-slate-50">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-2.5 flex items-center gap-2">
                    <UserCheck size={16} className="text-triage-teal" />
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
                    {[
                      "Full name",
                      "Date of birth & Gender",
                      "Phone number & Email",
                      "Residential address",
                      "Emergency contacts",
                      "Authorized representative details",
                      "Government ID (where required)",
                      "Profile photo (voluntarily provided)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Health Information Box */}
                <div className="border border-teal-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-teal-50/40">
                  <h4 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-2 flex items-center gap-2">
                    <HeartPulse size={16} className="text-triage-teal" />
                    Clinical & Health Information
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mb-2.5">
                    Forms part of your healthcare record managed under
                    professional medical standards:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-800">
                    {[
                      "Medical history and existing health conditions",
                      "Allergies and current medications",
                      "Vital signs (BP, glucose, SpO2, temp, weight, BMI)",
                      "Ear and throat assessment findings",
                      "Urinalysis findings and interpretation",
                      "Malaria Rapid Diagnostic Test (RDT) results",
                      "Vaccination records",
                      "Wound assessments and dressing records",
                      "Chronic disease monitoring information",
                      "Clinical observations and provider notes",
                      "Care coordination notes and handover records",
                      "Referral information and facility transfers",
                      "Laboratory test results where available",
                      "Clinical photos (with consent where needed)",
                      "TriageHealth Snapshot reports and recommendations",
                      "Appointment history and healthcare interaction logs",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2
                          size={12}
                          className="text-triage-teal mt-0.5 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Provider, Corporate, Payment & Telemetry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <h5 className="font-bold text-triage-navy font-raleway mb-1.5 flex items-center gap-1.5">
                      <Stethoscope size={14} className="text-triage-orange" />
                      Provider Data
                    </h5>
                    <p className="text-slate-600">
                      Licences, qualifications, employment screening, guarantor
                      details, banking for payouts, and scheduling availability.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <h5 className="font-bold text-triage-navy font-raleway mb-1.5 flex items-center gap-1.5">
                      <Building size={14} className="text-triage-teal" />
                      Corporate & Payment
                    </h5>
                    <p className="text-slate-600">
                      Organisational contacts and programme info. Payments are
                      handled via approved PCI-DSS gateways (no raw card data
                      stored).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <h5 className="font-bold text-triage-navy font-raleway mb-1.5 flex items-center gap-1.5">
                      <Smartphone size={14} className="text-triage-purple" />
                      Device & Telemetry
                    </h5>
                    <p className="text-slate-600">
                      Device model, OS, IP, crash logs, and GPS location (used
                      only with permission to dispatch providers and optimize
                      arrival).
                    </p>
                  </div>
                </div>

                {/* Concierge, Companion, Live-In & Travel Box */}
                <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-triage-navy text-xs sm:text-sm font-raleway mb-2 flex items-center gap-2">
                    <Globe size={15} className="text-triage-orange" />
                    Concierge, Companion, Live-In & Travel Information
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {[
                      "Preferred care arrangements and schedules",
                      "Household and access protocols for safe service delivery",
                      "Mobility and daily living support requirements",
                      "Relevant care routines and support needs",
                      "Travel dates, destinations and itineraries",
                      "Accommodation or temporary location details",
                      "Relevant medication and healthcare requirements during travel",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-triage-orange mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              id="section-7"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 07
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    7. How We Use Information & AI Tools
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  We use information to execute healthcare operations, provide
                  clinical safety, and improve your care experience:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 text-xs text-slate-700">
                  {[
                    "Deliver healthcare services and coordinate care",
                    "Schedule appointments and match with providers",
                    "Maintain clinical documentation and handover notes",
                    "Process payments and refunds where applicable",
                    "Support customer service and service quality monitoring",
                    "Meet contractual, legal and regulatory obligations",
                    "Verify provider credentials and maintain service quality",
                    "Generate Health Snapshot reports and recommendations",
                    "Detect fraudulent or suspicious activity",
                    "Improve operational efficiency using de-identified analytics",
                  ].map((use, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-triage-teal flex-shrink-0"
                      />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>

                {/* AI & Automated Tools Callout */}
                <div className="border border-indigo-100 bg-indigo-50/50 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-2">
                  <h4 className="font-bold text-indigo-950 font-raleway text-xs sm:text-sm flex items-center gap-2">
                    <Sparkles size={15} className="text-indigo-600" />
                    Artificial Intelligence & Automated Tools
                  </h4>
                  <p className="text-xs sm:text-[13px] text-indigo-900 leading-relaxed">
                    TriageHome may use artificial intelligence and automated
                    technologies to improve appointment scheduling, client
                    communications, and platform performance.{" "}
                    <strong>
                      These technologies support administrative processes only
                      and do not replace the independent clinical judgement of
                      qualified healthcare professionals.
                    </strong>{" "}
                    Where automated processing materially affects individuals,
                    human oversight is rigorously maintained in accordance with
                    law.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="section-8"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Scale size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 08
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    8. Legal Basis for Processing
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  We process personal and health information on the basis of:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-triage-navy font-raleway mb-1">
                      1. Explicit Consent
                    </h4>
                    <p className="text-slate-600">
                      Where given for healthcare services, clinical photography,
                      or communications.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-triage-navy font-raleway mb-1">
                      2. Performance of a Contract
                    </h4>
                    <p className="text-slate-600">
                      Necessary to fulfill our service agreement and dispatch
                      requested care providers.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-triage-navy font-raleway mb-1">
                      3. Provision of Healthcare
                    </h4>
                    <p className="text-slate-600">
                      Processing health information for clinical care under
                      professional medical secrecy.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-triage-navy font-raleway mb-1">
                      4. Legal Obligations & Vital Interests
                    </h4>
                    <p className="text-slate-600">
                      Compliance with statutory regulations or protecting life
                      in emergency circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="section-9"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Lock size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 09
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    9. Health Information & Confidentiality
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p className="font-semibold text-slate-900">
                  Health information is treated as sensitive personal
                  information.
                </p>
                <p>
                  TriageHome maintains strict confidentiality supported by
                  role-based access controls, least-privilege access, immutable
                  audit logs, clinical documentation standards, secure storage,
                  and mandatory confidentiality obligations for all staff and
                  providers.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl sm:rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <p className="font-bold text-triage-navy font-raleway mb-1">
                    In-Home & Private Setting Confidentiality:
                  </p>
                  <p className="text-slate-600">
                    Providers and Health Assistants may become aware of
                    personal, household, or lifestyle information while
                    providing services in a client's home or private
                    environment. Such information must be treated as strictly
                    confidential and may not be accessed, recorded,
                    photographed, used or disclosed except where reasonably
                    necessary for authorised service delivery, safety, or legal
                    compliance.
                  </p>
                </div>
              </div>
            </section>
            <section
              id="section-10"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-50 text-triage-teal flex items-center justify-center border border-teal-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Share2 size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 10
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    10. Sharing Your Information
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold text-xs sm:text-sm">
                  ✓ We do not sell personal or health information.
                </div>

                <p>Information may be shared only where appropriate with:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    "Assigned healthcare providers and assistants",
                    "Approved third-party payment processors",
                    "Technology and encrypted cloud hosting providers",
                    "Professional clinical and legal advisers",
                    "Healthcare regulators and law enforcement (when required)",
                    "Emergency responders where necessary to protect life or safety",
                  ].map((party, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-triage-teal flex-shrink-0" />
                      <span>{party}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-600 pt-1">
                  Corporate clients generally receive aggregated or
                  de-identified reports. Formal{" "}
                  <strong>Data Processing Agreements (DPAs)</strong> govern all
                  partner sharing.
                </p>
              </div>
            </section>
            <section
              id="section-11"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-amber-50 text-triage-orange flex items-center justify-center border border-amber-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <UserCheck size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 11
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    11. Consent Management
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  We obtain consent where required for healthcare services,
                  processing health information, clinical photography, marketing
                  communications, notifications, and client introductions.
                </p>
                <p className="text-xs text-slate-600">
                  Consent may be withdrawn where legally and clinically
                  appropriate. Withdrawal does not affect processing already
                  undertaken or information we are legally required to retain.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 12. SECURITY & COMMUNICATIONS */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-12"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-50 text-[#02385A] flex items-center justify-center border border-blue-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Shield size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 12
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    12. Security, Electronic Communications & Incident Response
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  TriageHome uses appropriate administrative, organisational,
                  physical and technical safeguards designed to protect personal
                  and health information. Access is restricted according to
                  authorised roles and legitimate clinical requirements.
                </p>
                <p className="text-xs text-slate-600">
                  By using our digital services, you acknowledge that we may
                  communicate with you electronically regarding service
                  coordination, appointments, and security notices.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 13. DATA RETENTION */}
            {/* ---------------------------------------------------------------- */}
            <section
              id="section-13"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-50 text-triage-teal flex items-center justify-center border border-teal-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <RefreshCw size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 13
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    13. Data Retention & Safeguards
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  TriageHome retains records only for as long as reasonably
                  necessary for care continuity, statutory medical records
                  compliance, and resolving disputes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 text-xs text-slate-800">
                  {[
                    "Encryption where appropriate (at rest and transit)",
                    "Secure multi-factor authentication",
                    "Role-based access & least privilege",
                    "Audit logging of all medical record access",
                    "Secure, redundant data backups",
                    "Information security staff training",
                    "Device security requirements",
                    "Cryptographic disposal procedures",
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-triage-teal flex-shrink-0"
                      />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section
              id="section-14"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Globe size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 14
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    14. International Data Transfers
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  Some technology providers supporting TriageHome may process
                  information outside Nigeria. Where cross-border transfers
                  occur, TriageHome implements safeguards consistent with the{" "}
                  <strong>Nigeria Data Protection Act 2023</strong>.
                </p>
                <p className="text-xs text-slate-600">
                  Travel health and concierge services may require information
                  to be communicated overseas at your request or where necessary
                  to coordinate care while travelling.
                </p>
              </div>
            </section>
            <section
              id="section-15"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 15
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    15. Your Privacy Rights
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>Subject to applicable law, you have the right:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                  {[
                    {
                      title: "Right of Access",
                      desc: "Request a copy of your personal & medical records.",
                    },
                    {
                      title: "Right to Rectification",
                      desc: "Correct inaccurate or incomplete information.",
                    },
                    {
                      title: "Right to Erasure",
                      desc: "Request deletion where legally permissible.",
                    },
                    {
                      title: "Right to Restriction",
                      desc: "Restrict specific processing activities.",
                    },
                    {
                      title: "Right to Object",
                      desc: "Object to processing for direct marketing.",
                    },
                    {
                      title: "Right to Human Review",
                      desc: "Not to be subject solely to automated decisions.",
                    },
                    {
                      title: "Right to Withdraw Consent",
                      desc: "Revoke consent given previously.",
                    },
                    {
                      title: "Right to Complain",
                      desc: "Lodge a complaint with TriageHome or the NDPC.",
                    },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <h4 className="font-bold text-triage-navy text-xs font-raleway mb-0.5">
                        {r.title}
                      </h4>
                      <p className="text-[11px] text-slate-600">{r.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 italic">
                  To exercise your rights, contact our Data Protection Officer
                  at{" "}
                  <a
                    href="mailto:support@traige-home.com"
                    className="text-triage-teal font-bold underline"
                  >
                    support@traige-home.com
                  </a>
                  . Identity verification may be required.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------------- */}
            {/* 16 - 21: REMAINING GOVERNANCE SECTIONS */}
            {/* ---------------------------------------------------------------- */}
            <div className="space-y-6">
              {/* 16. Incident Reporting */}
              <section
                id="section-16"
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="text-lg sm:text-xl font-bold font-raleway text-triage-navy mb-2 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-500" />
                  16. Incident Reporting & Data Breach Response
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  TriageHome maintains documented procedures for identifying,
                  containing, and responding to security incidents. Where a
                  reportable breach occurs, we will notify affected individuals
                  and regulatory authorities in accordance with applicable data
                  protection laws.
                </p>
              </section>

              {/* 17. Children */}
              <section
                id="section-17"
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="text-lg sm:text-xl font-bold font-raleway text-triage-navy mb-2 flex items-center gap-2">
                  <HeartPulse size={16} className="text-triage-teal" />
                  17. Children
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  Our services are generally intended for individuals aged 18
                  years and above. Where services are provided to minors,
                  information will generally be collected and processed with the
                  involvement of a parent, legal guardian, or authorized
                  representative.
                </p>
              </section>

              <section
                id="section-18"
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="text-lg sm:text-xl font-bold font-raleway text-triage-navy mb-2 flex items-center gap-2">
                  <Smartphone size={16} className="text-triage-purple" />
                  18. Cookies, Analytics & Mobile Permissions
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-2.5">
                  Mobile applications may request permissions (Camera,
                  Microphone, Location, Storage, Notifications) strictly where
                  needed to support healthcare delivery and features. You may
                  manage these in device settings.
                </p>
              </section>

              {/* 19. Marketing */}
              <section
                id="section-19"
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="text-lg sm:text-xl font-bold font-raleway text-triage-navy mb-2 flex items-center gap-2">
                  <Bell size={16} className="text-triage-orange" />
                  19. Marketing Communications
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  With your consent where required, TriageHome may provide
                  service updates and health education. You may opt out anytime.
                  Feedback surveys and Google Reviews are voluntary and never
                  impact the care you receive.
                </p>
              </section>

              {/* 20. Account Suspension */}
              <section
                id="section-20"
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="text-lg sm:text-xl font-bold font-raleway text-triage-navy mb-2 flex items-center gap-2">
                  <Scale size={16} className="text-rose-600" />
                  20. Account Suspension & Termination
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  TriageHome may suspend or terminate access where necessary to
                  protect clients, providers, or platform security, including in
                  cases involving fraud, misuse, or breaches of our Terms of
                  Use.
                </p>
              </section>

              {/* 21. Policy Changes */}
              <section
                id="section-21"
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
              >
                <h3 className="text-lg sm:text-xl font-bold font-raleway text-triage-navy mb-2 flex items-center gap-2">
                  <RefreshCw size={16} className="text-triage-teal" />
                  21. Changes to this Policy
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  We may update this Policy periodically to reflect changes in
                  law, technology, or healthcare services. Updated versions will
                  be published on our Platform with the revised effective date.
                </p>
              </section>
            </div>

            <section
              id="section-22"
              className="bg-gradient-to-br from-triage-navy to-[#032B45] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-xl scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/10 text-triage-lime flex items-center justify-center border border-white/10 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-lime">
                    Section 22
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-white">
                    22. Contact Us
                  </h2>
                </div>
              </div>

              <div className="text-white/85 text-xs sm:text-sm leading-relaxed space-y-4">
                <p>
                  If you have questions about this Policy or wish to exercise
                  your privacy rights, please contact our Data Protection
                  Officer:
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <p className="font-bold text-white text-sm sm:text-base font-raleway">
                      TriageHome
                    </p>
                    <p className="text-white/70">
                      Attention: <strong>Data Protection Officer</strong>
                    </p>
                    <p className="text-white/70">
                      No 14, Chief Yesufu Abiodun Oniru Rd, V.I, Lagos, Nigeria
                    </p>
                  </div>
                  <div className="space-y-1.5 sm:border-l sm:border-white/10 sm:pl-5">
                    <p className="flex items-center gap-2">
                      <Mail size={13} className="text-triage-teal" />
                      <span>
                        Email:{" "}
                        <a
                          href="mailto:support@traige-home.com"
                          className="text-triage-lime font-bold hover:underline"
                        >
                          support@traige-home.com
                        </a>
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Globe size={13} className="text-triage-teal" />
                      <span>
                        Website:{" "}
                        <a
                          href="http://www.triage-home.com"
                          className="text-triage-lime hover:underline"
                        >
                          www.triage-home.com
                        </a>
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={13} className="text-triage-teal" />
                      <span>
                        Phone:{" "}
                        <a
                          href="https://wa.me/2349134664547"
                          target="_blank"
                          className="text-triage-lime hover:underline"
                        >
                          +234 913 466 4547
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-white/50 pt-1">
                  Where required, complaints may also be referred to the
                  relevant data protection or regulatory authority.
                </p>
              </div>
            </section>
            <section
              id="section-23"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-start sm:items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-50 text-triage-teal flex items-center justify-center border border-teal-100 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Building size={18} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold font-raleway uppercase tracking-wider text-triage-orange">
                    Section 23
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway text-triage-navy">
                    23. Regulatory Compliance
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-3.5">
                <p>
                  TriageHome is committed to complying with the{" "}
                  <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and
                  other applicable Nigerian laws governing the protection of
                  personal information, digital services and healthcare
                  delivery. We continually review and update our privacy,
                  information governance and security practices to reflect
                  changes in legislation, regulatory guidance, technology and
                  the evolving needs of our clients and partners.
                </p>
                <p>
                  As our platform evolves, we may implement additional
                  safeguards, governance measures and compliance programmes to
                  support new healthcare services, enterprise partnerships and
                  digital innovations while maintaining the privacy and trust of
                  those we serve.
                </p>

                {/* Final Commitment Box */}
                <div className="bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/10 border border-teal-300/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center space-y-2 mt-5">
                  <h4 className="font-bold text-triage-navy font-raleway text-sm sm:text-base md:text-lg">
                    Our Commitment
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto italic">
                    "Protecting your information is fundamental to the trust you
                    place in TriageHome. We are committed to continually
                    strengthening our privacy, security and governance practices
                    as we expand access to safe, trusted and high-quality
                    healthcare across Nigeria and Africa."
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-triage-navy/90 hover:bg-triage-navy text-white shadow-xl border border-white/20 flex items-center justify-center backdrop-blur-md transition active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
