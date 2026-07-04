export const WHATSAPP =
  "https://wa.me/2349134664547?text=Hello%20TriageConcierge%2C%20I%20would%20like%20to%20learn%20more.";

// CTA copy is intentionally varied per touchpoint on this page, per comms guidance.
export const CTA = {
  heroPrimary: "Executive Consultation",
  heroSecondary: "Explore TriageConcierge",
  talkToRep: "Speak with a Peace of Mind Representative",
  designPlan: "Design a Personalized Care Plan",
  privateConsult: "Schedule a Private Consultation",
  footer: "Book a Complimentary Consultation",
};

export const SEGMENTS = [
  {
    tag: "Individuals & Households Abroad",
    headline: "Trusted oversight for the people who matter to you.",
    body: "You live abroad. Someone important to you is here in Lagos. A phone call is not enough. You need a verified team, regular health updates, and a representative who escalates when it matters.",
    services: ["Regular health snapshots", "Emergency escalation", "Verified provider visits", "Reporting to your approved contacts", "Care coordination from anywhere"],
    image: "/images/hero/ss.png",
  },
  {
    tag: "Executives & Professionals",
    headline: "Healthcare that works around your schedule.",
    body: "Your diary is full. Your health should not suffer for it. A dedicated coordinator arranges everything: diagnostics, specialist referrals, travel health, post-op recovery, without interrupting your day.",
    services: ["Personal healthcare coordinator", "Home diagnostics", "Priority specialist referrals", "Travel health support", "Medication management"],
    image: "/images/hero/man.png",
  },
  {
    tag: "Family Offices & HNIs",
    headline: "A trusted healthcare partner for your entire household.",
    body: "Your household's health is too important to leave to chance. One partner. One coordinator. Complete oversight for everyone in your care, from annual wellness planning to live-in support.",
    services: ["Multi-member access plans", "Elder care oversight", "Household health records", "Annual wellness planning", "Live-in care coordination"],
    image: "/images/hero/fam.png",
    showCircleBuilder: true,
  },
];

export const PM_REP_DUTIES_KEYS = [
  { icon: "Calendar", text: "Arranges appointments and manages your calendar" },
  { icon: "UserShield", text: "Coordinates nurses, doctors, and specialists" },
  { icon: "Pulse", text: "Tracks health updates and vital records" },
  { icon: "Bell", text: "Escalates emergencies immediately" },
  { icon: "Globe", text: "Provides regular reports to your approved contacts" },
  { icon: "Shield", text: "Ensures care plans are followed precisely" },
];

export const JOURNEY_STEPS = [
  { number: "01", title: "Consultation", desc: "A private assessment of your lifestyle, medical history, and care needs." },
  { number: "02", title: "Care Assessment", desc: "We evaluate your health baseline and identify priorities." },
  { number: "03", title: "Personalised Plan", desc: "A care plan built around your schedule, location, and preferences." },
  { number: "04", title: "Provider Matching", desc: "Your PM Rep and clinical team are carefully selected for you." },
  { number: "05", title: "Ongoing Monitoring", desc: "Regular check-ins, health snapshots, and proactive oversight." },
  { number: "06", title: "Circle Reporting", desc: "Regular updates to your approved contacts, wherever they are." },
];

export const CITIES = [
  { name: "Lagos", x: 46, y: 52, primary: true },
  { name: "Abuja", x: 48, y: 48 },
  { name: "London", x: 47, y: 22 },
  { name: "Houston", x: 20, y: 38 },
  { name: "Atlanta", x: 23, y: 37 },
  { name: "Toronto", x: 25, y: 30 },
  { name: "Doha", x: 60, y: 40 },
  { name: "Dubai", x: 62, y: 42 },
  { name: "New Delhi", x: 66, y: 38 },
  { name: "Johannesburg", x: 52, y: 66 },
];

// Simplified, stylised continent silhouettes, viewBox 0 0 100 70, illustrative not survey-accurate.
export const CONTINENTS = [
  { name: "North America", d: "M12,14 20,11 27,14 30,20 28,27 31,33 26,39 22,43 17,44 13,40 9,33 8,24 9,17 Z" },
  { name: "South America", d: "M22,45 27,47 30,54 28,61 25,68 21,66 18,58 19,50 Z" },
  { name: "Europe", d: "M38,9 46,7 53,10 51,16 44,18 39,16 Z" },
  { name: "Africa", d: "M40,21 50,19 57,25 59,34 56,44 53,52 51,60 46,66 42,60 40,50 38,39 39,29 Z" },
  { name: "Asia", d: "M53,7 66,4 79,7 86,15 89,24 82,30 74,28 68,34 60,32 55,25 51,17 Z" },
  { name: "Australia", d: "M76,55 86,53 93,57 91,64 82,66 76,62 Z" },
];

export const PLANS = [
  {
    key: "assure",
    name: "Assure",
    price: "₦120,000",
    period: "/month",
    tag: "Essentials",
    tagline: "Monthly oversight for peace of mind.",
    features: ["Monthly wellness oversight", "Care coordinator support", "Scheduled nurse check-ins", "Health reporting"],
    accent: "#00b99d",
    cta: CTA.privateConsult,
  },
  {
    key: "passport",
    name: "Passport",
    price: "₦450,000",
    period: "/month",
    tag: "Premium",
    tagline: "Full concierge. Complete coordination.",
    features: ["Everything in Assure", "Priority provider access", "Specialist coordination", "Circle reporting dashboard", "Concierge healthcare support"],
    accent: "#aa7130",
    cta: CTA.designPlan,
    featured: true,
  },
  {
    key: "postop",
    name: "PostOp",
    price: "Custom",
    period: "",
    tag: "Recovery",
    tagline: "Structured support after surgery.",
    features: ["Post-surgery home nursing", "Wound care management", "Medication monitoring", "Recovery milestone tracking", "PM Rep throughout recovery"],
    accent: "#02385a",
    cta: CTA.talkToRep,
  },
];

export const PERSONA_COPY: Record<string, Record<string, { tagline: string; lead: string }>> = {
  myself: {
    assure: { tagline: "Executive wellness oversight and performance tracking.", lead: "Monthly executive wellness oversight" },
    passport: { tagline: "Full concierge for your schedule. Complete coordination.", lead: "Everything in Assure, tuned to your calendar" },
    postop: { tagline: "Structured recovery support after your procedure.", lead: "Post-surgery home nursing" },
  },
  household: {
    assure: { tagline: "Monthly oversight for your household's peace of mind.", lead: "Monthly wellness oversight, household wide" },
    passport: { tagline: "Full concierge for every member of your household.", lead: "Everything in Assure, for the whole household" },
    postop: { tagline: "Structured recovery support for anyone in your household.", lead: "Post-surgery home nursing" },
  },
  someone: {
    assure: { tagline: "Monthly oversight for the person you are supporting.", lead: "Monthly wellness oversight, on your behalf" },
    passport: { tagline: "Full concierge care for the person who matters to you.", lead: "Everything in Assure, coordinated remotely" },
    postop: { tagline: "Structured recovery support you can oversee from anywhere.", lead: "Post-surgery home nursing" },
  },
};

export const PERSONAS = [
  { key: "myself", label: "Myself" },
  { key: "household", label: "My Household" },
  { key: "someone", label: "Someone I Support" },
];

export const WHY_ICON_KEYS = [
  { icon: "Shield", title: "Elite Clinical Network", desc: "Vetted providers with professional indemnity." },
  { icon: "Bell", title: "Single Point of Contact", desc: "Your PM Rep handles every moving part." },
  { icon: "Pulse", title: "Proactive, Not Reactive", desc: "Preventive oversight catches issues early." },
  { icon: "Globe", title: "Global Access", desc: "Coordinate care from anywhere in the world." },
  { icon: "SilhouetteCircle", title: "Absolute Discretion", desc: "Need-to-know protocol. See how it works below.", anchor: "#discretion" },
  { icon: "Home", title: "Care at Home", desc: "Clinical expertise delivered to your door." },
  { icon: "Phone", title: "Digital Reporting", desc: "Real-time updates via your TriageSnapshot." },
  { icon: "Calendar", title: "HMO Integration", desc: "Seamless coordination with your insurer." },
];

export const SNAPSHOT_POINTS = [
  "Vital signs captured at every visit",
  "Medications and dosage history",
  "Clinical assessments and provider notes",
  "Visit records and care timeline",
  "Shareable with approved contacts or specialists",
];

export const PROTOCOL_PILLARS = [
  { icon: "ZeroLog", title: "Zero-Log Data", desc: "Health records are encrypted and stored in a siloed, private cloud. Access is logged and audited." },
  { icon: "AnonymousMatch", title: "Anonymous Clinical Matching", desc: "Providers are briefed on your case without your full name or address until you approve the match." },
  { icon: "DiscreetVisit", title: "Discreet In-Home Care", desc: "Clinical teams arrive in unmarked vehicles, in plain attire unless scrubs are requested. Visits are scheduled around your calendar, not theirs." },
];