"use client";

import { useState, useEffect } from "react";
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
  SlidersHorizontal,
  X,
  Compass,
  CreditCard,
  CalendarCheck,
  Users,
  Briefcase,
  AlertCircle,
  Plane,
  Home,
  MessageSquare,
  Award,
  Layers,
  HelpCircle,
  Clock,
  Check,
} from "lucide-react";

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState("section-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  // const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Table of Contents list with 33 sections
  const tocItems = [
    {
      id: "section-1",
      title: "1. Acceptance of these Terms",
      icon: CheckCircle2,
      short: "Acceptance",
    },
    {
      id: "section-2",
      title: "2. About TriageHome",
      icon: Stethoscope,
      short: "About Platform",
    },
    {
      id: "section-3",
      title: "3. Definitions",
      icon: BookOpen,
      short: "Definitions",
    },
    {
      id: "section-4",
      title: "4. Eligibility",
      icon: UserCheck,
      short: "Eligibility",
    },
    {
      id: "section-5",
      title: "5. User Accounts",
      icon: Lock,
      short: "User Accounts",
    },
    {
      id: "section-6",
      title: "6. Services",
      icon: HeartPulse,
      short: "Services",
    },
    {
      id: "section-7",
      title: "7. Bookings & Assisted Check-In",
      icon: CalendarCheck,
      short: "Appointments",
    },
    {
      id: "section-8",
      title: "8. Payments, Pricing & Refunds",
      icon: CreditCard,
      short: "Payments",
    },
    {
      id: "section-9",
      title: "9. Client Responsibilities",
      icon: Users,
      short: "Client Duties",
    },
    {
      id: "section-10",
      title: "10. Provider Responsibilities",
      icon: ShieldCheck,
      short: "Provider Duties",
    },
    {
      id: "section-11",
      title: "11. Clinical Limitations",
      icon: AlertTriangle,
      short: "Limitations",
    },
    {
      id: "section-12",
      title: "12. Conduct & Corporate Accounts",
      icon: Briefcase,
      short: "Conduct & Safety",
    },
    {
      id: "section-13",
      title: "13. Acceptable Use",
      icon: Shield,
      short: "Acceptable Use",
    },
    {
      id: "section-14",
      title: "14. AI & Digital Tools",
      icon: Cpu,
      short: "AI & Tools",
    },
    {
      id: "section-15",
      title: "15. TriageConcierge & Travel Health",
      icon: Plane,
      short: "Concierge & Travel",
    },
    {
      id: "section-16",
      title: "16. Companion & Live-In Services",
      icon: Home,
      short: "Live-In Services",
    },
    {
      id: "section-17",
      title: "17. Communications & Notifications",
      icon: Bell,
      short: "Communications",
    },
    {
      id: "section-18",
      title: "18. Third-Party Services",
      icon: Share2,
      short: "Third Parties",
    },
    {
      id: "section-19",
      title: "19. Feedback & Improvement",
      icon: MessageSquare,
      short: "Feedback",
    },
    {
      id: "section-20",
      title: "20. Promotions, Gifts & Offers",
      icon: Award,
      short: "Promotions",
    },
    {
      id: "section-21",
      title: "21. Intellectual Property",
      icon: Sparkles,
      short: "IP & Content",
    },
    {
      id: "section-22",
      title: "22. Suspension & Termination",
      icon: AlertCircle,
      short: "Termination",
    },
    {
      id: "section-23",
      title: "23. Changes to Services",
      icon: RefreshCw,
      short: "Service Changes",
    },
    {
      id: "section-24",
      title: "24. Accessibility",
      icon: Smartphone,
      short: "Accessibility",
    },
    {
      id: "section-25",
      title: "25. Limitation of Liability",
      icon: Scale,
      short: "Liability",
    },
    {
      id: "section-26",
      title: "26. Indemnity",
      icon: Shield,
      short: "Indemnity",
    },
    {
      id: "section-27",
      title: "27. Force Majeure",
      icon: Globe,
      short: "Force Majeure",
    },
    {
      id: "section-28",
      title: "28. Privacy & Health Information",
      icon: Lock,
      short: "Privacy",
    },
    {
      id: "section-29",
      title: "29. Changes to these Terms",
      icon: FileText,
      short: "Terms Updates",
    },
    {
      id: "section-30",
      title: "30. Governing Law & Disputes",
      icon: Scale,
      short: "Dispute Resolution",
    },
    {
      id: "section-31",
      title: "31. General Provisions",
      icon: Layers,
      short: "General",
    },
    {
      id: "section-32",
      title: "32. Entire Agreement",
      icon: BookOpen,
      short: "Entire Agreement",
    },
    {
      id: "section-33",
      title: "33. Contact Us & Commitment",
      icon: Mail,
      short: "Contact",
    },
  ];

  // Track scroll position & active section
  useEffect(() => {
    // const handleScroll = () => {
    //   // Calculate scroll progress percentage
    //   const totalHeight =
    //     document.documentElement.scrollHeight - window.innerHeight;
    //   const currentProgress = (window.scrollY / totalHeight) * 100;
    //   setScrollProgress(Math.min(100, Math.max(0, currentProgress)));

    //   setShowBackToTop(window.scrollY > 400);

    //   // Section detection
    //   const scrollPosition = window.scrollY + 220;
    //   for (const item of tocItems) {
    //     const el = document.getElementById(item.id);
    //     if (el) {
    //       const top = el.offsetTop;
    //       const height = el.offsetHeight;
    //       if (scrollPosition >= top && scrollPosition < top + height) {
    //         setActiveSection(item.id);
    //         break;
    //       }
    //     }
    //   }
    // };

    // window.addEventListener("scroll", handleScroll, { passive: true });
    // return () => window.removeEventListener("scroll", handleScroll);
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
      {/* 🌌 HERO HEADER */}
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
            <span>Platform Governance • Version 2.0</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-raleway leading-tight tracking-tight text-white"
          >
            Platform <span className="text-triage-teal">Terms of Use</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2"
          >
            The legal terms, service boundaries, and mutual commitments
            governing your access to and use of TriageHome digital platforms,
            clinical healthcare coordination, TriagePods, and concierge services.
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
                Version: <strong>2.0</strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <Clock size={13} className="text-triage-teal" />
              <span>
                Effective: <strong>August 2026</strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <RefreshCw size={13} className="text-triage-lime" />
              <span>
                Last Updated: <strong>January 2026</strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <Building size={13} className="text-triage-orange" />
              <span>
                Owner: <strong>Governance &amp; Compliance</strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
              <Globe size={13} className="text-sky-300" />
              <span>
                Classification: <strong>Public</strong>
              </span>
            </div>
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
            TriageHome coordinates healthcare access and care delivery but{" "}
            <em>is not intended for emergency medical situations</em>. If you
            believe you or another person requires urgent medical attention,
            please contact your local emergency services or proceed immediately
            to the nearest emergency healthcare facility.
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
                    Terms Navigation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Select any of the 33 sections below
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
                    placeholder="Search sections (e.g. Concierge, Refund, Live-In)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-triage-teal/30 text-slate-800"
                  />
                </div>
              </div>

              {/* Sections List */}
              <div className="overflow-y-auto p-3 space-y-1 divide-y divide-slate-50 flex-1">
                {filteredToc.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left p-3 rounded-xl flex items-center gap-3 text-xs transition ${
                        isActive
                          ? "bg-triage-navy text-white font-bold"
                          : "text-slate-700 hover:bg-slate-50 font-medium"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={isActive ? "text-triage-lime" : "text-slate-400"}
                      />
                      <span className="flex-1 truncate">{item.title}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-triage-lime" />
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
      {/* 📑 MAIN CONTENT CONTAINER (SIDEBAR + 33 SECTIONS) */}
      {/* ===================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ===================================================== */}
          {/* 📌 DESKTOP STICKY SIDEBAR TABLE OF CONTENTS */}
          {/* ===================================================== */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm max-h-[calc(100vh-8rem)] flex flex-col">
              {/* Header */}
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-triage-navy/5 flex items-center justify-center text-triage-navy">
                    <FileText size={15} className="text-triage-teal" />
                  </div>
                  <h3 className="font-raleway font-bold text-triage-navy text-sm">
                    Table of Contents
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  33 Sections
                </span>
              </div>

              {/* Live Search Input */}
              <div className="mt-3 relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={13}
                />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-triage-teal/30 text-slate-800"
                />
              </div>

              {/* Scrollable List */}
              <div className="mt-3 overflow-y-auto pr-1.5 space-y-1 flex-1 custom-scrollbar">
                {filteredToc.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-6">
                    No sections match &quot;{searchQuery}&quot;
                  </p>
                ) : (
                  filteredToc.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl flex items-center gap-2.5 text-xs transition-all ${
                          isActive
                            ? "bg-triage-navy text-white font-bold shadow-sm translate-x-1"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                        }`}
                      >
                        <Icon
                          size={14}
                          className={`flex-shrink-0 ${
                            isActive ? "text-triage-lime" : "text-slate-400"
                          }`}
                        />
                        <span className="flex-1 truncate">{item.title}</span>
                        {isActive && (
                          <ChevronRight
                            size={12}
                            className="text-triage-lime flex-shrink-0"
                          />
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Scope Footer Pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Applies to: All Services</span>
                <Link
                  href="/privacy"
                  className="text-triage-teal hover:underline font-semibold"
                >
                  Privacy Policy &rarr;
                </Link>
              </div>
            </div>
          </aside>

          {/* ===================================================== */}
          {/* 📄 MAIN LEGAL TEXT CONTENT (33 SECTIONS) */}
          {/* ===================================================== */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-8 sm:space-y-12">
            {/* -------------------------------------------------- */}
            {/* SECTION 1: Acceptance of these Terms */}
            {/* -------------------------------------------------- */}
            <section
              id="section-1"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Acceptance of these Terms
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  These Platform Terms of Use (&quot;Terms&quot;) govern your
                  access to and use of the TriageHome website, mobile
                  applications, digital platforms and related services
                  (collectively referred to as the &quot;Platform&quot;).
                </p>
                <p>
                  By creating an account, accessing, browsing or using any part
                  of the Platform, you acknowledge that you have read, understood
                  and agree to comply with these Terms together with the{" "}
                  <Link
                    href="/privacy"
                    className="text-triage-teal font-semibold hover:underline"
                  >
                    TriageHome Privacy &amp; Health Information Policy
                  </Link>{" "}
                  and any additional policies referenced within these Terms.
                </p>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-red-950 text-xs sm:text-sm font-medium">
                  <strong>Notice:</strong> If you do not agree with these Terms,
                  you should not access or use the Platform.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm flex items-center gap-3">
                  <FileText className="text-triage-navy flex-shrink-0" size={18} />
                  <span>
                    Electronic acceptance of these Terms has the same legal effect
                    as a written signature.
                  </span>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 2: About TriageHome */}
            {/* -------------------------------------------------- */}
            <section
              id="section-2"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Stethoscope size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    About TriageHome
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome is a digital healthcare access and care
                  coordination platform that enables individuals, families and
                  organisations to access trusted healthcare services wherever
                  they live, work, travel and recover.
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
                  qualified and authorised healthcare professionals and health
                  assistants engaged or approved by TriageHome in accordance with
                  their respective roles, applicable laws, professional
                  standards and TriageHome policies.
                </p>

                {/* Digital Ecosystem Cards */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="font-raleway font-bold text-triage-navy text-sm sm:text-base mb-3">
                    Our Digital Ecosystem Includes:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-triage-navy text-xs font-raleway block">
                        TriageAccess
                      </span>
                      <span className="text-xs text-slate-600">
                        Client web and mobile application
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-triage-navy text-xs font-raleway block">
                        Triage Practitioners / Providers
                      </span>
                      <span className="text-xs text-slate-600">
                        Clinical provider and health assistant application
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-triage-navy text-xs font-raleway block">
                        Admin Platform
                      </span>
                      <span className="text-xs text-slate-600">
                        Internal operational and governance platform
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-triage-navy text-xs font-raleway block">
                        TriageDesk
                      </span>
                      <span className="text-xs text-slate-600">
                        Operational workspace supporting appointments, assisted
                        check-in, wellness activations and service coordination
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 sm:col-span-2">
                      <span className="font-bold text-triage-navy text-xs font-raleway block">
                        TriagePods
                      </span>
                      <span className="text-xs text-slate-600">
                        Temporary or permanent healthcare access points
                        operating in estates, workplaces, corporate offices,
                        hospitality settings, conferences, airports and
                        community locations.
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic mt-2">
                  TriageHome coordinates healthcare access by connecting clients
                  with qualified healthcare professionals while supporting
                  appointment management, clinical documentation, operational
                  coordination and continuous service improvement. Healthcare
                  services are delivered by qualified healthcare professionals
                  authorised or engaged by TriageHome in accordance with
                  applicable laws, professional standards and organisational
                  policies.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 3: Definitions */}
            {/* -------------------------------------------------- */}
            <section
              id="section-3"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Definitions
                  </h2>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                For the purposes of these Terms, the following terms have the
                meanings set forth below:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Client
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    Any individual requesting or receiving services through
                    TriageHome.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Provider
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    An individual authorised by TriageHome to deliver services
                    through the Platform and may include a Clinical Provider or
                    Health Assistant.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Clinical Provider
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    A healthcare professional appropriately licensed or
                    registered to practise in Nigeria, such as a Medical Doctor,
                    Registered Nurse or Registered Midwife providing services
                    through TriageHome.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Health Assistant (HA)
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    A trained TriageHome service provider who provides
                    non-licensed supportive care, companion services and
                    assistance with activities within the role authorised by
                    TriageHome. A Health Assistant does not independently
                    diagnose, prescribe, make clinical decisions or perform
                    activities reserved for licensed healthcare professionals.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Corporate Client
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    An organisation engaging TriageHome to provide healthcare
                    services for employees, contractors, members or
                    beneficiaries.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Platform
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    The TriageHome website, Triage Access, Triage Providers, Admin
                    Platform, TriageDesk and related digital services.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    Health Snapshot
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    TriageHome&apos;s nurse-led health assessment and
                    personalised health summary.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    TriagePod
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    A temporary or permanent healthcare delivery location
                    operated or supported by TriageHome.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-triage-navy font-raleway text-sm block">
                    TriageDesk
                  </strong>
                  <span className="text-slate-700 text-xs sm:text-sm">
                    The operational module within the Admin Platform used to
                    coordinate appointments, assisted check-in, registrations,
                    payments and operational workflows.
                  </span>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 4: Eligibility */}
            {/* -------------------------------------------------- */}
            <section
              id="section-4"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-lime/20 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <UserCheck size={20} className="text-triage-navy" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Eligibility
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>You may use the Platform if you:</p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-1 flex-shrink-0"
                    />
                    <span>
                      Are at least eighteen (18) years of age, or access
                      services through a parent or legal guardian where permitted
                      by law.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-1 flex-shrink-0"
                    />
                    <span>
                      Have the legal capacity to enter into binding agreements or
                      through an authorized representative.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-1 flex-shrink-0"
                    />
                    <span>Provide accurate registration information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-1 flex-shrink-0"
                    />
                    <span>Agree to comply with these Terms and all applicable laws.</span>
                  </li>
                </ul>

                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong>Corporate Accounts:</strong> Corporate organisations
                  may register through authorised representatives acting on behalf
                  of their organisation.
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 5: User Accounts */}
            {/* -------------------------------------------------- */}
            <section
              id="section-5"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Lock size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    User Accounts
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Certain Platform features require registration. When creating
                  an account you agree to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                    &bull; Provide accurate, complete and current information.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                    &bull; Maintain accurate records.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                    &bull; Protect your login credentials.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                    &bull; Notify TriageHome immediately of suspected unauthorised access.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm sm:col-span-2">
                    &bull; Accept responsibility for activities conducted through your account.
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-red-50/70 border border-red-200">
                  <h4 className="font-raleway font-bold text-red-900 text-xs sm:text-sm mb-2">
                    You must not:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-red-950">
                    <li>&times; Share your login credentials.</li>
                    <li>&times; Create fraudulent accounts.</li>
                    <li>&times; Impersonate another individual or organisation.</li>
                    <li>&times; Register multiple accounts for deceptive purposes.</li>
                  </ul>
                </div>

                <p className="text-xs text-slate-600">
                  TriageHome reserves the right to suspend or restrict accounts
                  where information is inaccurate, fraudulent or where these
                  Terms have been breached.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 6: Services */}
            {/* -------------------------------------------------- */}
            <section
              id="section-6"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Services
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Depending on location, operational capacity and provider
                  availability, TriageHome may provide:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Home nursing and healthcare services</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Health Assistant services</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Companion and daily living support</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Extended-hour and live-in support arrangements</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Post-hospital and post-operative recovery support</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Maternal and newborn support</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Chronic disease monitoring and support</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>TriageHealth Snapshot assessments</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Corporate wellness programmes</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Residential estate healthcare services</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>TriagePods and wellness activations</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>TriageConcierge and personalised healthcare coordination</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Travel health support and coordination</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Appointment, referral and follow-up coordination</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2 sm:col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-triage-teal" />
                    <span>Health education and approved access services</span>
                  </div>
                </div>

                {/* Concierge & Travel Health Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-triage-navy/5 border border-triage-navy/10 space-y-2 mt-4">
                  <h4 className="font-raleway font-bold text-triage-navy text-sm flex items-center gap-2">
                    <Plane size={16} className="text-triage-teal" />
                    <span>TriageConcierge &amp; Travel Health</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    TriageConcierge may provide personalised healthcare
                    coordination for clients requiring additional support at
                    home, at work or while travelling. Depending on the service
                    selected, this may include appointment coordination,
                    pre-travel health preparation, medication planning support,
                    healthcare provider coordination, travel accompaniment or
                    support, destination healthcare information, care continuity
                    and assistance coordinating healthcare if a client becomes
                    unwell while travelling.
                  </p>
                  <p className="text-xs text-slate-600">
                    TriageHome does not control airlines, hotels, hospitals,
                    immigration authorities, emergency services or other
                    independent third parties and cannot guarantee their
                    availability, response or performance. Clients remain
                    responsible for passports, visas, travel insurance, entry
                    requirements and other non-health travel requirements unless
                    expressly included in a written TriageHome service agreement.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  The scope, duration, frequency and provider or health assistant
                  assigned to a service will depend on the service selected,
                  assessed needs and agreed service arrangements. Health
                  Assistants provide non-physician support within their authorised
                  role and TriageHome protocols. Health Assistant, companion and
                  live-in services do not replace medical or nursing care where
                  assessment or treatment by a licensed healthcare professional
                  is required.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 italic">
                  Service availability may vary based on geography, provider
                  availability, operational capacity, weather, public health
                  events or other circumstances beyond TriageHome&apos;s
                  reasonable control. Nothing in these Terms guarantees that
                  every service will be available at all times or in every
                  location.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 7: Bookings, Appointments & Assisted Check-In */}
            {/* -------------------------------------------------- */}
            <section
              id="section-7"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-orange/10 text-triage-orange flex items-center justify-center flex-shrink-0">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Bookings, Appointments &amp; Assisted Check-In
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Appointments may be scheduled through TriageAccess or through
                  authorised TriageHome personnel.
                </p>
                <p>
                  Clients attending TriagePods, corporate wellness programmes,
                  residential estate clinics or community activations may
                  complete registration through TriageDesk using an assisted
                  check-in process where appropriate.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-raleway font-bold text-triage-navy text-xs sm:text-sm mb-2">
                    Assisted check-in may include:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium">
                      Identity verification
                    </span>
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium">
                      Registration
                    </span>
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium">
                      Consent
                    </span>
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium">
                      Appointment creation
                    </span>
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium">
                      Payment confirmation
                    </span>
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium">
                      Clinical documentation
                    </span>
                    <span className="p-2 bg-white rounded-lg border border-slate-200/80 text-center font-medium col-span-2">
                      Generation of a Health Snapshot
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  Clients are responsible for ensuring the information provided
                  during registration is accurate. Appointment times represent
                  scheduled service windows. Reasonable delays may occasionally
                  occur due to emergencies, traffic conditions, weather or
                  operational circumstances. Where practical, affected clients
                  will be notified.
                </p>

                <p className="text-xs sm:text-sm text-slate-700">
                  If an assigned provider becomes unavailable, TriageHome may
                  assign another appropriately qualified provider to support
                  continuity of care.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 8: Payments, Pricing & Refunds */}
            {/* -------------------------------------------------- */}
            <section
              id="section-8"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Payments, Pricing &amp; Refunds
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-3 text-emerald-950 text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>TriageHome operates a cashless payment model.</span>
                </div>

                <p>
                  Payments may be completed through approved electronic payment
                  methods including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center font-bold text-triage-navy">
                    Paystack
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center font-bold text-triage-navy">
                    Bank Transfer
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center font-bold text-triage-navy">
                    QR Payments
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center font-bold text-triage-navy">
                    Digital Methods
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  Corporate clients may be invoiced separately under their
                  contractual agreement. Service fees will normally be
                  communicated before confirmation.
                </p>

                <p className="text-xs sm:text-sm text-slate-700">
                  If a pricing error occurs due to a technical or administrative
                  issue, TriageHome reserves the right to correct the error
                  before confirming the booking.
                </p>

                <p className="text-xs sm:text-sm text-slate-700">
                  Refunds, appointment credits and rescheduling will be managed
                  in accordance with applicable law and TriageHome&apos;s Refund
                  Policy.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 9: Client Responsibilities */}
            {/* -------------------------------------------------- */}
            <section
              id="section-9"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Client Responsibilities
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Clients contribute directly to safe, effective healthcare
                  delivery. Clients agree to:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Provide accurate and complete health information.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Update significant changes to their health where appropriate.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Provide a safe environment for providers and during live-in arrangements.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Treat providers, staff and other users respectfully.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Secure domestic pets and animals where necessary.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Inform TriageHome of known hazards that may affect safe service delivery.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Attend appointments or provide reasonable notice of cancellation.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Check size={16} className="text-triage-teal mt-0.5 flex-shrink-0" />
                    <span>Follow reasonable clinical recommendations provided by healthcare professionals.</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic mt-2">
                  Failure to provide accurate information may affect the quality
                  or availability of services.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 10: Provider & Health Assistant Responsibilities */}
            {/* -------------------------------------------------- */}
            <section
              id="section-10"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-lime/20 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-triage-navy" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Provider &amp; Health Assistant Responsibilities
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Healthcare professionals and Health Assistants using
                  TriageHome systems must:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain any registration, qualification or authorisation required for their role.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Work only within their authorised scope and responsibilities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain professional boundaries and conduct.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Protect client confidentiality.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Complete required service and clinical documentation accurately and promptly.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Escalate health or safety concerns to an appropriate healthcare professional or TriageHome representative.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Follow applicable TriageHome policies, care plans and safety procedures.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Respect the client&apos;s home, property, privacy and personal circumstances.</span>
                  </li>
                </ul>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm">
                  <strong>Scope Boundary:</strong> Clients must not require a
                  Provider or Health Assistant to perform activities outside the
                  agreed service scope or their authorised role.
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  TriageHome may reassess, modify, substitute or discontinue an
                  arrangement where client needs materially change, a higher
                  level of care becomes necessary, or continued service would
                  create an unreasonable clinical, professional or safety risk.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 11: Healthcare Services & Clinical Limitations */}
            {/* -------------------------------------------------- */}
            <section
              id="section-11"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Healthcare Services &amp; Clinical Limitations
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome facilitates healthcare access and care
                  coordination. Healthcare services are delivered by qualified
                  healthcare professionals using their independent professional
                  judgement.
                </p>
                <p>
                  TriageHome does not guarantee specific treatment outcomes.
                  Where a provider determines that additional assessment,
                  specialist review or emergency care is required, clients may be
                  introduced to another healthcare provider or healthcare
                  facility.
                </p>
                <p>
                  Acceptance of clinical recommendations remains the
                  responsibility of the client except where immediate action is
                  reasonably necessary to protect life or safety.
                </p>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-red-950 text-xs sm:text-sm font-medium">
                  <strong>Emergency Disclaimer:</strong> The Platform is not
                  intended for emergency medical situations. If you believe you
                  or another person requires urgent medical attention, contact
                  your local emergency services or proceed immediately to the
                  nearest emergency healthcare facility.
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 12: Professional Conduct, Safety & Corporate Accounts */}
            {/* -------------------------------------------------- */}
            <section
              id="section-12"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Professional Conduct, Safety &amp; Corporate Accounts
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome is committed to maintaining a safe, respectful and
                  professional environment. Abusive, threatening, discriminatory,
                  violent or inappropriate behaviour towards clients, providers,
                  staff or other users will not be tolerated.
                </p>
                <p>
                  Providers may withdraw from a visit where they reasonably
                  believe their safety or the safety of others is at risk.
                </p>
                <p>
                  Corporate organisations may appoint authorised administrators
                  to coordinate healthcare services on behalf of their
                  organisation. Authorised representatives may only access
                  information appropriate to their role and in accordance with
                  applicable agreements and the TriageHome Privacy &amp; Health
                  Information Policy. Individual health information will not be
                  disclosed to corporate clients except where authorised by the
                  client, required by law or permitted under applicable
                  agreements.
                </p>

                {/* Home & Live-In Safety */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 mt-4">
                  <h4 className="font-raleway font-bold text-triage-navy text-sm flex items-center gap-2">
                    <Home size={16} className="text-triage-teal" />
                    <span>Home &amp; Live-In Safety</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Where services involve extended-hour, companion or live-in
                    arrangements, the client or authorised representative must
                    provide reasonable and safe conditions for the agreed
                    service.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    The specific duties, working arrangements, duration and
                    boundaries of a live-in or companion service will be
                    defined by the applicable service plan or agreement.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    A live-in arrangement does not mean that a health assistant
                    or provider is continuously on clinical duty or available
                    without reasonable rest periods. Working arrangements must
                    comply with agreed schedules, safety requirements and
                    applicable law.
                  </p>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 13: Acceptable Use */}
            {/* -------------------------------------------------- */}
            <section
              id="section-13"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Acceptable Use
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  The Platform must be used lawfully, safely and for its
                  intended purpose. You must not:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Provide false, misleading or fraudulent information.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Misrepresent your identity, qualifications or authority.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Make fraudulent bookings, payments, claims or requests.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Attempt unauthorised access to accounts, data or systems.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Interfere with Platform security, availability or operation.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Introduce malicious software or harmful content.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Use information obtained for an unauthorised purpose.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &times; Harass, threaten, discriminate against or abuse any person.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                    &times; Request a provider or HA to perform services outside their authorised role.
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  TriageHome may investigate suspected misuse and take
                  appropriate action, including restricting or suspending access
                  to the Platform.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 14: Artificial Intelligence, Automation & Digital Tools */}
            {/* -------------------------------------------------- */}
            <section
              id="section-14"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Artificial Intelligence, Automation &amp; Digital Tools
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may use artificial intelligence, automation and
                  other digital technologies to support functions such as
                  appointment scheduling, service coordination, communications,
                  operational workflows, reporting, analytics, fraud detection,
                  quality improvement and Platform performance.
                </p>

                <div className="p-4 rounded-2xl bg-triage-navy/5 border border-triage-navy/10 text-xs sm:text-sm space-y-2">
                  <div className="font-bold text-triage-navy flex items-center gap-2">
                    <Sparkles size={16} className="text-triage-teal" />
                    <span>Clinical Decision Safeguard</span>
                  </div>
                  <p>
                    These tools are intended to support TriageHome&apos;s
                    operations and service delivery. They do not replace the
                    professional judgement of an appropriately licensed clinical
                    provider.
                  </p>
                  <p>
                    <strong>
                      TriageHome does not rely solely on artificial intelligence
                      to independently diagnose a client, prescribe medication or
                      make clinical treatment decisions.
                    </strong>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  Where automated tools are used in ways that may materially
                  affect an individual, TriageHome will maintain appropriate
                  safeguards and human oversight in accordance with applicable
                  law and our Privacy &amp; Health Information Policy.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 15: TriageConcierge & Travel Health Services */}
            {/* -------------------------------------------------- */}
            <section
              id="section-15"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Plane size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 15
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    TriageConcierge &amp; Travel Health Services
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageConcierge provides personalised healthcare access and
                  coordination for clients who may require additional support at
                  home, at work, while travelling or across multiple healthcare
                  settings.
                </p>

                <p className="text-xs sm:text-sm font-semibold text-triage-navy">
                  Depending on the service arrangement, TriageConcierge may include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Healthcare appointment coordination
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Pre-travel health planning and preparation
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Coordination of medications or travel health requirements
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Travel health support
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Health Assistant or companion support during approved travel
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Coordination with Clinical Providers &amp; facilities
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Continuity-of-care support before, during or after travel
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Destination healthcare navigation &amp; other agreed concierge services
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  The precise scope of a concierge engagement will depend on the
                  service purchased or separately agreed with the client.
                  TriageHome does not control airlines, hotels, hospitals,
                  laboratories, pharmacies, immigration authorities, emergency
                  services or other independent third parties and cannot
                  guarantee their availability or performance.
                </p>

                <p className="text-xs text-slate-600">
                  Unless expressly included in an agreed service arrangement,
                  Clients remain responsible for passports, visas, travel
                  insurance, entry requirements and other non-health travel
                  arrangements.
                </p>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 font-medium">
                  <strong>Medical Fitness Disclaimer:</strong> Travel health
                  information and recommendations do not guarantee that a client
                  is medically fit to travel. Where medical clearance or
                  specialist assessment is required, the Client may be referred
                  to an appropriately qualified Clinical Provider.
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 16: Companion, Extended-Hour & Live-In Services */}
            {/* -------------------------------------------------- */}
            <section
              id="section-16"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-lime/20 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Home size={20} className="text-triage-navy" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 16
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Companion, Extended-Hour &amp; Live-In Services
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may arrange health assistant support for
                  companionship, daily living assistance, extended-hour support
                  and live-in arrangements. The specific responsibilities,
                  schedule and duration of these services will be determined by
                  the client&apos;s needs and the agreed service arrangement.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-raleway font-bold text-triage-navy text-xs sm:text-sm mb-2">
                    Health Assistant support may include approved activities such as:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    <li>&bull; Companionship and general wellbeing support</li>
                    <li>&bull; Assistance with activities of daily living</li>
                    <li>&bull; Mobility and movement support</li>
                    <li>&bull; Meal and hydration reminders or assistance</li>
                    <li>&bull; Medication reminders where appropriate</li>
                    <li>&bull; Accompaniment to appointments or activities</li>
                    <li>&bull; Observation and reporting of changes or concerns</li>
                    <li>&bull; Other agreed non-clinical supportive care</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs sm:text-sm text-red-950 font-medium space-y-1">
                  <strong>Clinical Scope Restriction:</strong> Health assistants
                  are not licensed clinical providers and must not independently
                  diagnose, prescribe, make clinical decisions or perform
                  procedures reserved for licensed healthcare professionals.
                  Where a client requires nursing, medical assessment or
                  another clinical intervention, the matter will be escalated to
                  an appropriate clinical provider.
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  A live-in arrangement does not mean that a health assistant is
                  continuously on duty without reasonable rest. Working hours,
                  rest periods, responsibilities and service boundaries will be
                  governed by the applicable service arrangement and TriageHome
                  requirements.
                </p>

                <p className="text-xs text-slate-600">
                  TriageHome may reassess or modify an arrangement where a
                  client&apos;s needs materially change, the required level of
                  care exceeds the agreed service scope, or continuing the
                  arrangement creates an unreasonable health, safety or
                  professional risk.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 17: Communications & Notifications */}
            {/* -------------------------------------------------- */}
            <section
              id="section-17"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Bell size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 17
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Communications &amp; Notifications
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may communicate with you through appropriate
                  channels, including: In-app notifications, Push notifications,
                  Email, SMS, Telephone, and WhatsApp or other approved
                  communication channels.
                </p>
                <p>
                  Communications may relate to appointments, payments, provider
                  arrival or scheduling, Health Snapshot availability,
                  follow-up, account security, service updates and other
                  matters connected with your use of TriageHome.
                </p>
                <p>
                  Marketing communications will be managed in accordance with
                  your communication preferences and our Privacy &amp; Health
                  Information Policy.
                </p>
                <p className="text-xs text-slate-500 italic">
                  You may manage certain notifications through your device or
                  account settings. Disabling some operational notifications may
                  affect your ability to receive timely service information.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 18: Third-Party Services */}
            {/* -------------------------------------------------- */}
            <section
              id="section-18"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Share2 size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 18
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Third-Party Services
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may use or integrate with approved third-party
                  services to support functions such as payment processing,
                  banking and electronic transfers, cloud hosting, maps and
                  location services, communications, analytics, identity
                  verification, laboratories and other healthcare operations.
                </p>
                <p>
                  Third-party services may be subject to their own terms and
                  privacy practices.
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  Where a third party delivers a service independently,
                  TriageHome is not responsible for matters outside its
                  reasonable control. This does not exclude any responsibility
                  TriageHome is required to retain under applicable law.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 19: Feedback, Reviews & Continuous Improvement */}
            {/* -------------------------------------------------- */}
            <section
              id="section-19"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-orange/10 text-triage-orange flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 19
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Feedback, Reviews &amp; Continuous Improvement
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome is committed to continuously improving the
                  quality, safety, accessibility and experience of its services.
                </p>
                <p>
                  Clients, providers and organisational partners may be invited
                  to provide feedback through surveys, service reviews,
                  interviews, Google Reviews or other quality-improvement
                  channels. Participation is voluntary. Feedback may be used to
                  improve services, technology, training, workflows and Client
                  experience.
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  Where you voluntarily submit ideas, suggestions or general
                  feedback about the Platform, TriageHome may use that feedback
                  for service improvement without an obligation to compensate
                  you, provided that personal or confidential information
                  continues to be handled in accordance with our Privacy &amp;
                  Health Information Policy.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 20: Promotions, Gifts & Access Offers */}
            {/* -------------------------------------------------- */}
            <section
              id="section-20"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 20
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Promotions, Gifts &amp; Access Offers
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may from time to time offer promotional programmes,
                  referral initiatives, gift healthcare experiences, introductory
                  services or other Access offers. Individual promotions may be
                  subject to additional eligibility criteria, validity periods,
                  redemption conditions or campaign terms.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                  <p>
                    <strong>Unless otherwise stated:</strong>
                  </p>
                  <ul className="space-y-1 text-slate-700">
                    <li>&bull; Offers are not redeemable for cash.</li>
                    <li>&bull; An offer may not be combined with another promotion.</li>
                    <li>&bull; Expired offers may not be accepted.</li>
                    <li>&bull; TriageHome may modify or withdraw an offer that has not already been validly purchased or redeemed.</li>
                  </ul>
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Where a healthcare service is purchased as a gift for another
                  person, the recipient retains the right to decide whether to
                  receive the service and must provide any consent required
                  before healthcare or health information processing takes place.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 21: Intellectual Property */}
            {/* -------------------------------------------------- */}
            <section
              id="section-21"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Sparkles size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 21
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Intellectual Property
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  The Platform and TriageHome&apos;s proprietary materials are
                  protected by applicable intellectual property laws. Unless
                  otherwise stated, TriageHome or its licensors retain rights in
                  materials including:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Software and digital products
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Website and application content
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Names, logos and brand assets
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Service methodologies
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Health Snapshot formats and templates
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Reports and document templates
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Clinical and operational frameworks
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Training programmes and materials
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 sm:col-span-2">
                    &bull; Educational materials, images, graphics, videos and original content
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  Clients retain rights in their own personal information and
                  clinical information as provided by applicable law. Receiving a
                  Health Snapshot or other client-specific report does not
                  transfer ownership of TriageHome&apos;s underlying proprietary
                  format, methodology or technology.
                </p>

                <p className="text-xs text-slate-600">
                  Nothing in these Terms grants permission to reproduce,
                  commercially exploit, modify or distribute TriageHome
                  intellectual property without prior authorisation, except as
                  permitted by law.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 22: Account Suspension & Termination */}
            {/* -------------------------------------------------- */}
            <section
              id="section-22"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 22
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Account Suspension &amp; Termination
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may restrict, suspend or terminate access to all or
                  part of the Platform where reasonably necessary to:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Protect clients, clinical Providers, health assistants or staff
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Address abusive or unsafe conduct
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Prevent fraud or misuse
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Protect Platform or information security
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Investigate suspected unlawful activity
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    &bull; Address material breaches of these Terms
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 sm:col-span-2">
                    &bull; Comply with legal, regulatory or professional obligations
                  </li>
                </ul>

                <p className="text-xs sm:text-sm text-slate-700">
                  Where appropriate and reasonably practicable, TriageHome may
                  provide notice or an opportunity to address the issue before
                  permanent termination. Users may request account closure at any
                  time.
                </p>

                <p className="text-xs text-slate-600">
                  Account closure does not automatically require deletion of
                  health, financial, transactional or other records that
                  TriageHome is legally or professionally required to retain.
                  Information following account closure will be handled in
                  accordance with the Privacy &amp; Health Information Policy.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 23: Changes to Services & Platform Availability */}
            {/* -------------------------------------------------- */}
            <section
              id="section-23"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 23
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Changes to Services &amp; Platform Availability
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Healthcare needs, technology and TriageHome&apos;s operating
                  model will continue to evolve. TriageHome may therefore
                  introduce, modify, replace, suspend or discontinue services,
                  Platform features, operating processes or service locations
                  where reasonably necessary.
                </p>
                <p>
                  We may also conduct maintenance, testing and upgrades that
                  temporarily affect Platform availability.
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  Where a material change significantly affects an existing paid
                  service or confirmed booking, TriageHome will take reasonable
                  steps to communicate the change and provide an appropriate
                  alternative, credit or refund where applicable.
                </p>
                <p className="text-xs text-slate-500 italic">
                  TriageHome does not guarantee uninterrupted or error-free
                  availability of the Platform.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 24: Accessibility */}
            {/* -------------------------------------------------- */}
            <section
              id="section-24"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-lime/20 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Smartphone size={20} className="text-triage-navy" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 24
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Accessibility
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome is committed to improving access to its services
                  for Clients with different digital, physical and communication
                  needs.
                </p>
                <p>
                  Where a client cannot independently use Triage Access or
                  another digital service, TriageHome may, where available,
                  support registration, booking or check-in through authorised
                  personnel and TriageDesk.
                </p>
                <p className="text-xs text-slate-500 italic">
                  The availability of assisted services may depend on the
                  location and nature of the service.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 25: Limitation of Liability */}
            {/* -------------------------------------------------- */}
            <section
              id="section-25"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Scale size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 25
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Limitation of Liability
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Nothing in these Terms excludes or limits any liability that
                  cannot lawfully be excluded or limited.
                </p>
                <p>
                  To the fullest extent permitted by applicable law, TriageHome
                  will not be liable for indirect, incidental, special or
                  consequential loss arising solely from use of or inability to
                  access the Platform.
                </p>
                <p>
                  TriageHome does not guarantee a particular healthcare outcome
                  merely because a client uses the Platform or receives a
                  service.
                </p>
                <p>
                  TriageHome is not responsible for loss resulting from
                  information that a client knowingly or negligently fails to
                  disclose where that information was reasonably necessary for
                  safe service delivery.
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold pt-2 border-t border-slate-100">
                  Nothing in this section removes TriageHome&apos;s
                  responsibilities under applicable Nigerian law or the
                  professional responsibilities of Clinical Providers.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 26: Indemnity */}
            {/* -------------------------------------------------- */}
            <section
              id="section-26"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 26
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Indemnity
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  To the extent permitted by applicable law, you agree to
                  indemnify TriageHome, its directors, officers, employees and
                  authorised representatives against claims, losses or
                  reasonable expenses arising directly from:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &bull; Your material breach of these Terms
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &bull; Your fraudulent or unlawful use of the Platform
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &bull; Your intentional infringement of another person&apos;s rights
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    &bull; Information or content you knowingly provide unlawfully
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  This section does not require a client to indemnify TriageHome
                  for TriageHome&apos;s own negligence, unlawful conduct or
                  obligations that cannot legally be excluded.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 27: Force Majeure */}
            {/* -------------------------------------------------- */}
            <section
              id="section-27"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Globe size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 27
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Force Majeure
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome will not be responsible for a delay or failure to
                  perform an obligation where performance is prevented by
                  circumstances beyond its reasonable control. These may include:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Flooding / severe weather
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Natural disasters
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Epidemics / public health
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Civil unrest
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Government restrictions
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Industrial action
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Significant utility failures
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Internet outages
                  </span>
                  <span className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
                    Transport disruption
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  Where such an event affects a confirmed healthcare service,
                  TriageHome will make reasonable efforts to communicate with
                  affected Clients and, where feasible, reschedule or provide an
                  appropriate alternative.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 28: Privacy & Health Information */}
            {/* -------------------------------------------------- */}
            <section
              id="section-28"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Lock size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 28
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Privacy &amp; Health Information
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome&apos;s collection, use, storage, disclosure,
                  retention and protection of personal and health information is
                  governed by the{" "}
                  <Link
                    href="/privacy"
                    className="text-triage-teal font-semibold hover:underline"
                  >
                    TriageHome Privacy &amp; Health Information Policy
                  </Link>
                  . That Policy forms part of the governance framework
                  supporting your use of the Platform.
                </p>
                <p>
                  Where companion, live-in, TriageConcierge or travel health
                  services require additional information for safe service
                  coordination, such information will be handled in accordance
                  with the Privacy &amp; Health Information Policy and
                  applicable Nigerian data protection requirements (NDPA 2023).
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 29: Changes to these Terms */}
            {/* -------------------------------------------------- */}
            <section
              id="section-29"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 29
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Changes to these Terms
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TriageHome may update these Terms to reflect changes in law or
                  regulation, healthcare services, technology, Platform
                  functionality, safety requirements or business operations.
                </p>
                <p>
                  Material changes will be communicated through an appropriate
                  channel where required. The current version will be made
                  available through the Platform and will state its effective
                  date.
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                  Your continued use of the Platform following the effective date
                  of revised Terms constitutes acceptance of those Terms where
                  permitted by law.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 30: Governing Law & Dispute Resolution */}
            {/* -------------------------------------------------- */}
            <section
              id="section-30"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-lime/20 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <Scale size={20} className="text-triage-navy" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 30
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-medium text-slate-800 text-xs sm:text-sm">
                  These Terms are governed by the laws of the{" "}
                  <strong>Federal Republic of Nigeria</strong>.
                </div>

                <p>
                  If a dispute arises, the parties should first make reasonable
                  efforts to resolve the matter through good-faith discussions.
                </p>
                <p>
                  Where a dispute cannot be resolved informally, the parties may
                  pursue mediation, arbitration or another appropriate dispute
                  resolution mechanism where agreed or required before commencing
                  court proceedings.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Nothing in this section prevents either party from seeking
                  urgent relief from a court of competent jurisdiction where
                  necessary.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 31: General Provisions */}
            {/* -------------------------------------------------- */}
            <section
              id="section-31"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Layers size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 31
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    General Provisions
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-triage-navy text-xs sm:text-sm block mb-1">
                      Severability
                    </strong>
                    <span className="text-xs text-slate-600">
                      If any provision of these Terms is found to be invalid or
                      unenforceable, the remaining provisions will continue in
                      effect.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-triage-navy text-xs sm:text-sm block mb-1">
                      No Waiver
                    </strong>
                    <span className="text-xs text-slate-600">
                      Failure by TriageHome to enforce a provision of these
                      Terms does not constitute a waiver of that provision or
                      any other right.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-triage-navy text-xs sm:text-sm block mb-1">
                      Assignment
                    </strong>
                    <span className="text-xs text-slate-600">
                      You may not transfer your rights or obligations without
                      prior written consent. TriageHome may transfer its rights
                      or obligations as part of a restructuring, merger,
                      acquisition or transfer of business.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-triage-navy text-xs sm:text-sm block mb-1">
                      Language
                    </strong>
                    <span className="text-xs text-slate-600">
                      These Terms are provided in English. Where a translated
                      version is provided, the English version will govern in the
                      event of an inconsistency.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 32: Entire Agreement */}
            {/* -------------------------------------------------- */}
            <section
              id="section-32"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-navy/5 text-triage-navy flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-triage-teal" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 32
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Entire Agreement
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  These Platform Terms of Use, together with the{" "}
                  <Link
                    href="/privacy"
                    className="text-triage-teal font-semibold hover:underline"
                  >
                    TriageHome Privacy &amp; Health Information Policy
                  </Link>
                  , any service-specific terms agreed with you and any other
                  policy expressly incorporated by reference, constitute the
                  entire agreement governing your use of the Platform and
                  relevant TriageHome services.
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  Where a separately executed corporate, concierge, live-in or
                  other service agreement contains terms specifically negotiated
                  for that service, those specific terms will apply to the
                  extent of any inconsistency with these general Terms.
                </p>
              </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 33: Contact Us & Our Commitment */}
            {/* -------------------------------------------------- */}
            <section
              id="section-33"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-triage-teal uppercase tracking-wider font-raleway block">
                    Section 33
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-raleway text-triage-navy">
                    Contact Us &amp; Our Commitment
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Questions, complaints or concerns regarding these Terms or your
                  use of the Platform may be directed to:
                </p>

                {/* Contact Information Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-triage-teal/10 flex items-center justify-center text-triage-teal flex-shrink-0">
                      <Building size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                        Headquarters
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-triage-navy">
                        TriageHome, Lagos, Nigeria
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-triage-teal/10 flex items-center justify-center text-triage-teal flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                        Support Email
                      </span>
                      <a
                        href="mailto:support@triage-home.com"
                        className="text-xs sm:text-sm font-semibold text-triage-teal hover:underline"
                      >
                        support@triage-home.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-triage-teal/10 flex items-center justify-center text-triage-teal flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                        Telephone
                      </span>
                      <a
                        href="tel:+2349164664547"
                        className="text-xs sm:text-sm font-semibold text-triage-navy hover:text-triage-teal"
                      >
                        +234 916 466 4547
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-triage-teal/10 flex items-center justify-center text-triage-teal flex-shrink-0">
                      <Globe size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                        Website
                      </span>
                      <a
                        href="https://triage-home.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-semibold text-triage-teal hover:underline"
                      >
                        triage-home.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Commitment Banner */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-triage-navy text-white relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-triage-teal/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-triage-lime text-xs font-bold font-raleway uppercase tracking-wider">
                      <HeartPulse size={14} className="text-triage-teal" />
                      <span>Our Commitment</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-raleway text-white">
                      Making Trusted Healthcare Accessible Everywhere
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      TriageHome exists to make trusted healthcare more
                      accessible through exceptional people, thoughtful
                      technology and responsible governance. We are committed to
                      creating a safe, professional and transparent experience
                      for clients, clinical providers, health assistants and
                      organisations that rely on TriageHome, whether care is
                      delivered at home, at work, through a TriagePod or
                      coordinated through TriageConcierge.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* 🚀 BACK TO TOP FLOATING BUTTON */}
      {/* ===================================================== */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-triage-navy hover:bg-triage-navy/90 text-white shadow-xl flex items-center justify-center border border-white/20 transition-transform active:scale-90"
            aria-label="Back to top"
          >
            <Compass size={18} className="text-triage-teal" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}