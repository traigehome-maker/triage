"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  Users,
  HeartHandshake,
  Calendar,
  ClipboardList,
  Stethoscope,
  FileCheck2,
  RefreshCw,
  Phone,
  MessageCircle,
  X,
  Sparkles,
  MapPin,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Expand,
  Star,
  Check,
} from "lucide-react";

// ==========================================
// DATA: WHERE WE DEPLOY (4 CORE SETTINGS)
// ==========================================
const DEPLOYMENT_SETTINGS = [
  {
    id: "workplaces",
    title: "Workplaces",
    subtitle: "Corporate & Enterprise",
    description:
      "Structured workplace wellness programmes, executive medical checkups, and occupational health screenings delivered directly to corporate offices and business hubs.",
    image: "/images/pod/pod2.webp",
    features: [
      "Executive and employee vitals screening",
      "Ergonomic & occupational health advisory",
      "Confidential digital employee health summaries",
    ],
  },
  {
    id: "estates",
    title: "Residential Estates",
    subtitle: "Gated Communities & HOAs",
    description:
      "Bespoke community health days for estate residents and families. We set up professional clinical screening stations inside estate clubhouses or designated common areas.",
    image: "/images/pod/pod3.webp",
    features: [
      "Family & elderly preventive checkups",
      "Chronic disease & cardiovascular profiling",
      "Convenient healthcare access without traffic",
    ],
  },
  {
    id: "conferences",
    title: "Conferences & Gatherings",
    subtitle: "Summits, Expos & Live Events",
    description:
      "Dedicated onsite medical posts and delegate wellness suites for high-profile summits, trade expos, and conventions (including NOG, GiTEX, and industry forums).",
    image: "/images/pod/podA.webp",
    features: [
      "Onsite clinician presence for VIPs & delegates",
      "Rapid diagnostic assessments & first aid support",
      "Elevated attendee care experience",
    ],
  },
  {
    id: "community",
    title: "Faith & Community Spaces",
    subtitle: "Congregations & Public Gatherings",
    description:
      "High-throughput screening activations for community markets, faith congregations, and civic assemblies, bringing trusted care directly to where people assemble.",
    image: "/images/pod/podM.webp",
    features: [
      "High-capacity preventive wellness screening",
      "Blood pressure, glucose, and BMI screening",
      "Doctor and nurse one-on-one consultations",
    ],
  },
];

// ==========================================
// DATA: TRIAGEPODS IN ACTION (REAL DEPLOYMENTS)
// ==========================================
const ACTIVATIONS = [
  {
    id: "atlantic-view",
    name: "Atlantic View Estate",
    category: "Residential Estate Activation",
    location: "Lekki, Lagos",
    summary:
      "Comprehensive onsite health screenings, vital monitoring, and clinical consultations delivered directly to estate residents and families.",
    images: [
      "/images/pod/pod6.webp",
      "/images/pod/pod7.webp",
      "/images/pod/pod8.webp",
      "/images/pod/pod9.webp",
      "/images/pod/pod10.webp",
    ],
    // highlights: ["Over 120 residents screened", "Multi-point vitals & blood work", "Resident association partner"],
  },
  {
    id: "frsc",
    name: "Federal Road Safety Corps (FRSC)",
    category: "Institutional & Personnel Care",
    location: "Command Headquarters",
    summary:
      "Specialised cardiovascular wellness assessments, biometric screenings, and medical profiling for FRSC officers and command personnel.",
    images: [
      "/images/pod/pod13.webp",
      "/images/pod/pod14.webp",
      "/images/pod/podD.webp",
      "/images/pod/podE.webp",
      "/images/pod/podF.webp",
      "/images/pod/podG.webp",
      "/images/pod/podH.webp",
    ],
    // highlights: ["Officer wellness profiling", "Onsite physician evaluations", "Official institutional partnership"],
  },
  {
    id: "nog",
    name: "Nigeria Oil & Gas (NOG) Summit",
    category: "Energy Industry Summit Station",
    location: "International Conference Centre, Abuja",
    summary:
      "Executive delegate health post providing rapid vitals assessment, clinical support, and wellness advisory for energy sector leadership.",
    images: [
      "/images/pod/podJ.webp",
      "/images/pod/podK.webp",
      "/images/pod/podL.webp",
    ],
    // highlights: ["Executive wellness post", "Rapid turnaround vitals", "International summit standard"],
  },
  {
    id: "gitex",
    name: "GiTEX Global Tech Expo",
    category: "International Exhibition Medical Post",
    location: "Exhibition Centre, Lagos",
    summary:
      "Onsite clinical station and delegate triage post delivering vital monitoring and emergency preparedness for international delegates.",
    images: [
      "/images/pod/podA.webp",
      "/images/pod/podB.webp",
      "/images/pod/podC.webp",
      "/images/pod/podI.webp",
    ],
    // highlights: ["VIP & delegate care posts", "High-throughput expo support", "Onsite clinician presence"],
  },
  {
    id: "community-gatherings",
    name: "Sura MarketDays & Community Gatherings",
    category: "Community & Market Outreach",
    location: "Lagos Island & Mainland",
    summary:
      "High-impact preventive health screenings, chronic risk checks, and medical guidance for marketplace traders and community congregations.",
    images: [
      "/images/pod/podM.webp",
      // "/images/pod/podH.webp",
      // "/images/pod/pod11.webp",
      // "/images/pod/pod1.webp",
    ],
    highlights: ["Accessible grassroots care", "Community trust & education", "Preventive cardiovascular checks"],
  },
];

// ==========================================
// DATA: HOW IT WORKS (5 STEPS)
// ==========================================
const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    name: "Enquire",
    icon: ClipboardList,
    description: "Tell us about your organisation, location, expected attendance, and specific health objectives.",
  },
  {
    step: "02",
    name: "Plan",
    icon: Calendar,
    description: "Our clinical operations team develops a tailored service plan, staffing matrix, and formal quotation.",
  },
  {
    step: "03",
    name: "Deploy",
    icon: Stethoscope,
    description: "Verified doctors, nurses, and diagnostics technicians arrive with certified medical equipment.",
  },
  {
    step: "04",
    name: "Screen & Document",
    icon: FileCheck2,
    description: "Services are professionally delivered, and relevant clinical findings are securely documented.",
  },
  {
    step: "05",
    name: "Follow Up",
    icon: RefreshCw,
    description: "Our medical team coordinates results, physician recommendations, and ongoing care continuity.",
  },
];

// ==========================================
// DATA: CLIENT FEEDBACK & TESTIMONIALS
// ==========================================
const TESTIMONIALS = [
  {
    author: "Shina Akande",
    role: "Client",
    quote:
      "Excellent service delivery. Appreciate the support and response of the attendants and particularly Nurse, Kemisola.",
    context: "Atlantic View Estate Activation",
  },
  {
    author: "Wellness Operations Command",
    role: "Institutional Coordinator",
    quote:
      "A seamless operation for our officers. Having doctors and nurses equipped with modern diagnostic tools directly at our command post saved critical time and provided actionable health insights for our personnel.",
    context: "Federal Road Safety Corps (FRSC)",
  },
  {
    author: "Event Operations Director",
    role: "Executive Committee",
    quote:
      "Having a dedicated TriagePod at our summit gave our international and local delegates total peace of mind. Highly organized, discreet, and exceptionally professional from setup to tear-down.",
    context: "Nigeria Oil & Gas (NOG) Summit",
  },
];

export default function TriagePodsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Proposal modal form state
  const [orgName, setOrgName] = useState("");
  const [settingType, setSettingType] = useState("Workplace / Corporate");
  const [attendeeCount, setAttendeeCount] = useState("50 - 100 people");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hero background slideshow (matching home page hero style)
  const heroSlides = [
    {
      title: "Healthcare, Where People Gather.",
      desc: "TriagePod brings professional healthcare services directly to workplaces, residential estates, conferences and community gatherings.",
      cta: "Book a TriagePod",
      image: "/images/pod/pod1.webp",
    },
    {
      title: "Workplace Wellness, Onsite.",
      desc: "Executive health screenings, vitals monitoring, and occupational medical profiling delivered directly to corporate offices.",
      cta: "Book a TriagePod",
      image: "/images/pod/podE.webp",
    },
    {
      title: "Residential Estate Health Days",
      desc: "Bespoke community health activations bringing certified doctors and nurses directly to estate clubhouses and common areas.",
      cta: "Book a TriagePod",
      image: "/images/pod/pod3.webp",
    },
    {
      title: "Conferences, Summits & Gatherings",
      desc: "Dedicated onsite clinical stations and delegate triage posts providing rapid medical assessments and attendee care.",
      cta: "Book a TriagePod",
      image: "/images/pod/podM.webp",
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  // Auto-advance hero slides every 6.5s (matching home hero)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevHeroSlide = () => {
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextHeroSlide = () => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*New TriagePod Proposal Request:*
• *Organization / Group:* ${orgName || "Not specified"}
• *Setting Type:* ${settingType}
• *Expected Attendees:* ${attendeeCount}
• *Location:* ${locationAddress || "Not specified"}
• *Contact Name:* ${contactName || "Not specified"}
• *Phone / WhatsApp:* ${contactPhone || "Not specified"}`;

    window.open(`https://wa.me/2349134664547?text=${encodeURIComponent(message)}`, "_blank");
    setIsSubmitting(false);
    setModalOpen(false);
  };

  return (
    <main className="bg-white text-slate-900 overflow-hidden font-body">
      {/* ========================================================
          1. HERO BANNER (MATCHING HOME HERO BACKGROUND & DESIGN)
      ======================================================== */}
      <section className="relative h-screen w-full overflow-hidden text-white">

        {/* FULL-BLEED BACKGROUND SLIDESHOW WITH NAVY OVERLAY */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, i) => (
            <motion.div
              key={slide.image}
              animate={{
                opacity: i === heroIndex ? 1 : 0,
                scale: i === heroIndex ? 1 : 1.05,
              }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* NAVY OVERLAY (PRIMARY BRAND - MATCHING HOME HERO) */}
              <div className="absolute inset-0 bg-triage-navy/70" />
            </motion.div>
          ))}
        </div>

        {/* CONTENT (LEFT-ALIGNED TYPOGRAPHY LIKE HOME HERO) */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">

            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-raleway font-semibold leading-tight text-white tracking-tight">
                {heroSlides[heroIndex].title}
              </h1>

              <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-nunito text-white/80 leading-relaxed max-w-2xl">
                {heroSlides[heroIndex].desc}
              </p>

              <div className="mt-8 md:mt-10 flex gap-4 flex-wrap items-center">

                {/* PRIMARY CTA (ORANGE ROUNDED-FULL LIKE HOME) */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium inline-block transition cursor-pointer shadow-lg shadow-triage-orange/25"
                >
                  {heroSlides[heroIndex].cta}
                </button>

                {/* SECONDARY CTA (BORDER ROUNDED-FULL LIKE HOME) */}
                <a
                  href="#deployments"
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-white/20 text-white font-nunito font-medium inline-block hover:border-triage-orange transition"
                >
                  Explore Deployments →
                </a>

              </div>

            </motion.div>

          </div>
        </div>

        {/* DESKTOP ARROWS (MATCHING HOME HERO) */}
        <div className="hidden md:flex absolute inset-y-0 w-full justify-between items-center px-6 z-20 pointer-events-none">
          <button
            type="button"
            onClick={prevHeroSlide}
            aria-label="Previous slide"
            className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-triage-orange transition flex items-center justify-center text-white text-xl cursor-pointer"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextHeroSlide}
            aria-label="Next slide"
            className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-triage-orange transition flex items-center justify-center text-white text-xl cursor-pointer"
          >
            →
          </button>
        </div>

        {/* MOBILE ARROWS */}
        <div className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button
            type="button"
            onClick={prevHeroSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextHeroSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            →
          </button>
        </div>

        {/* INDICATOR BARS (MATCHING HOME HERO) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHeroIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[4px] rounded-full transition-all duration-300 cursor-pointer ${
                i === heroIndex ? "w-14 bg-triage-orange" : "w-6 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

      </section>

      {/* ========================================================
          2. WHERE WE DEPLOY (4 VISUAL SETTING TILES)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-triage-orange">
              Flexible Clinical Deployments
            </span>
            <h2 className="mt-3 font-raleway font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-triage-navy">
              Where We Deploy
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
              Flexible healthcare support designed around your environment, audience and needs.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {DEPLOYMENT_SETTINGS.map((setting) => (
              <div
                key={setting.id}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-triage-teal/40 transition-all duration-300 overflow-hidden"
              >
                {/* Photo container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={setting.image}
                    alt={setting.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 text-[11px] font-bold font-raleway tracking-wider uppercase bg-white/95 text-triage-navy px-2.5 py-1 rounded-full shadow-xs">
                    {setting.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-raleway font-bold text-xl text-triage-navy group-hover:text-triage-orange transition-colors">
                      {setting.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-nunito">
                      {setting.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {setting.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium font-nunito">
                        <CheckCircle2 size={14} className="text-triage-teal flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. TRIAGEPODS IN ACTION (REAL DEPLOYMENT EVIDENCE GALLERY)
      ======================================================== */}
      <section id="deployments" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-triage-teal">
              Proven Track Record
            </span>
            <h2 className="mt-3 font-raleway font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-triage-navy">
              TriagePods in Action
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
              A look at how TriageHome brings healthcare closer through real deployments and partnerships.
            </p>
          </div>

          {/* Activation Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ACTIVATIONS.map((act, idx) => (
              <button
                key={act.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-full font-raleway font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-triage-navy text-white shadow-md shadow-triage-navy/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {act.name}
              </button>
            ))}
          </div>

          {/* Active Activation Detailed Showcase */}
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold font-raleway text-triage-orange uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>{ACTIVATIONS[activeTab].location}</span>
                  <span>&middot;</span>
                  <span>{ACTIVATIONS[activeTab].category}</span>
                </div>
                <h3 className="mt-2 font-raleway font-extrabold text-2xl sm:text-3xl text-triage-navy">
                  {ACTIVATIONS[activeTab].name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-3xl font-nunito leading-relaxed">
                  {ACTIVATIONS[activeTab].summary}
                </p>
              </div>

              {/* Highlights Pill Badges */}
              {/* <div className="flex flex-wrap lg:flex-col gap-2 flex-shrink-0">
                {ACTIVATIONS[activeTab].highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs font-nunito"
                  >
                    <CheckCircle2 size={13} className="text-triage-teal" />
                    <span>{h}</span>
                  </span>
                ))}
              </div> */}
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
              {ACTIVATIONS[activeTab].images.map((imgSrc, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => setLightboxImage(imgSrc)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/80 cursor-pointer shadow-xs hover:shadow-lg transition-all"
                >
                  <Image
                    src={imgSrc}
                    alt={`${ACTIVATIONS[activeTab].name} deployment photo ${imgIdx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="p-2.5 rounded-full bg-white/90 text-triage-navy shadow-md">
                      <Expand size={16} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CLIENT FEEDBACK & TESTIMONIALS
      ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-triage-orange">
              Client &amp; Partner Experience
            </span>
            <h2 className="mt-3 font-raleway font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-triage-navy">
              Trusted by Organisations &amp; Communities
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
              Authentic feedback from estate leadership, command wellness coordinators, and event organizers.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 pt-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-8 sm:p-9 pt-10 rounded-[2.5rem] bg-gradient-to-b from-[#f8fafc] to-[#eef2f6]/80 border border-slate-100 shadow-[0_22px_50px_-15px_rgba(2,56,90,0.10),0_10px_20px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_28px_60px_-12px_rgba(2,56,90,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Brown Love Icon Badge on Top Right */}
                <div className="absolute -top-7 -right-3 sm:-top-8 sm:-right-4 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none select-none z-10 drop-shadow-md">
                  <Image
                    src="/images/heart-3d-badge.webp"
                    alt="Recommendation Badge"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>

                <div>
                  {/* Author Header: Name + Verified Checkmark + Role (No Initials) */}
                  <div className="mb-4 pr-16">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="font-raleway font-bold text-slate-900 text-base sm:text-lg leading-tight">
                        {item.author}
                      </h4>
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#2daae1] text-white flex-shrink-0 shadow-2xs"
                        title="Verified Reviewer"
                      >
                        <Check size={10} strokeWidth={3.5} />
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 font-nunito mt-0.5">
                      {item.role}
                    </p>
                  </div>

                  {/* 5 Golden Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>

                  {/* Testimonial Write-Up */}
                  <p className="text-slate-800 text-sm sm:text-[15px] font-nunito leading-relaxed font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Context Footnote */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-triage-teal font-raleway">
                  <span>{item.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. HOW IT WORKS (APPROVED 5-STEP PROCESS)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-triage-teal">
              Streamlined Execution
            </span>
            <h2 className="mt-3 font-raleway font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-triage-navy">
              How It Works
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-nunito leading-relaxed">
              Our approved five-step service process for effortless onsite healthcare delivery.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical 5-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5 relative">
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col p-6 rounded-3xl bg-slate-50/80 border border-slate-200/70 hover:border-triage-teal/50 hover:bg-white transition-all shadow-2xs hover:shadow-lg group"
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-triage-teal/10 text-triage-teal flex items-center justify-center group-hover:bg-triage-teal group-hover:text-white transition-colors duration-300">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <span className="font-mono font-bold text-sm text-slate-400 group-hover:text-triage-orange transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title & Copy */}
                  <h3 className="font-raleway font-bold text-lg text-triage-navy mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-nunito leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOOK A TRIAGEPOD / FINAL CTA
      ======================================================== */}
      <section id="book" className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#022842] via-[#02385a] to-[#012239] text-white">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-64 bg-triage-teal/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">

          <h2 className="font-raleway font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
            <span className="text-white">Bring A TriagePod </span>
            <span className="bg-gradient-to-r from-triage-teal via-[#5eead4] to-triage-lime bg-clip-text text-transparent">
              to Your Location.
            </span>
          </h2>

          <p className="mt-6 text-white/80 text-base sm:text-xl max-w-2xl mx-auto font-nunito leading-relaxed">
            Planning a workplace wellness programme, estate healthcare initiative or organised gathering? Speak with our team about a TriagePod designed for your needs.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-triage-orange text-white font-raleway font-bold text-base sm:text-lg shadow-xl shadow-triage-orange/30 hover:bg-[#e04e10] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Request a Proposal
            </button>

            <a
              href="https://wa.me/2349134664547?text=Hello%20TriageHome,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20TriagePod%20for%20our%20location."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-emerald-600/90 text-white font-raleway font-bold text-base sm:text-lg border border-emerald-400/30 hover:bg-emerald-600 transition-all duration-200 flex items-center gap-2.5 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white/70 text-xs sm:text-sm font-nunito">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-triage-lime" />
              <span>+234 913 466 4547</span>
            </div>
            <div className="flex items-center gap-2">
              <span>contact@triage-home.com</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-triage-teal" />
              <span>Fully Licensed &amp; Verified Health Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. PROPOSAL / BOOKING MODAL
      ======================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 border border-slate-100 my-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="font-raleway font-bold text-xs uppercase tracking-wider text-triage-orange">
                  Direct Enquiry
                </span>
                <h3 className="font-raleway font-extrabold text-2xl text-triage-navy mt-1">
                  Request a TriagePod Proposal
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-nunito leading-relaxed">
                  Tell us about your location and event. Our operations team will respond promptly with a structured plan and quotation.
                </p>
              </div>

              <form onSubmit={handleProposalSubmit} className="space-y-4 text-left font-nunito">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-raleway">
                    Organisation or Estate Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chevron Nigeria / Carlton Gate Estate"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-triage-teal focus:ring-2 focus:ring-triage-teal/20 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-raleway">
                      Setting Type
                    </label>
                    <select
                      value={settingType}
                      onChange={(e) => setSettingType(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-hidden focus:border-triage-teal"
                    >
                      <option>Workplace / Corporate</option>
                      <option>Residential Estate</option>
                      <option>Conference / Expo</option>
                      <option>Faith / Community Space</option>
                      <option>Other Gathering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-raleway">
                      Expected Attendance
                    </label>
                    <select
                      value={attendeeCount}
                      onChange={(e) => setAttendeeCount(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-hidden focus:border-triage-teal"
                    >
                      <option>Under 50 people</option>
                      <option>50 - 150 people</option>
                      <option>150 - 300 people</option>
                      <option>300 - 500 people</option>
                      <option>500+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-raleway">
                    Location &amp; City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Victoria Island, Lagos"
                    value={locationAddress}
                    onChange={(e) => setLocationAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-triage-teal"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-raleway">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contact person"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-triage-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-raleway">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="080 1234 5678"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-triage-teal"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-triage-orange text-white font-raleway font-bold text-base hover:bg-[#e04e10] transition shadow-lg shadow-triage-orange/20 cursor-pointer"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Proposal Request"}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-400 font-nunito">
                    Opens directly to WhatsApp for rapid confirmation with our clinical coordinator.
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          8. LIGHTBOX PREVIEW MODAL
      ======================================================== */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            >
              <X size={24} />
            </button>
            <div className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightboxImage}
                alt="Enlarged activation view"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}