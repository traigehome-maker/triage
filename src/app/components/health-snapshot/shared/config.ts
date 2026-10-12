export const WHATSAPP_NUMBER = "+2349134664547";
export const WHATSAPP_DISPLAY = "+234 913 466 4547";
export const WHATSAPP_LINK = `https://wa.me/2349134664547?text=${encodeURIComponent(
  "Hello TriageHome, I would like to book a TriageHealth Snapshot session."
)}`;

export const WHATSAPP_WORKFORCE_LINK = `https://wa.me/2349134664547?text=${encodeURIComponent(
  "Hello TriageHome, I am interested in discussing a Workforce Screening & Health Snapshot programme for our organization."
)}`;

export const SNAPSHOT_PRICING = {
  sharedVisit: {
    title: "Shared Family Visit",
    price: 100000,
    priceFormatted: "₦100,000",
    unit: "Up to 4 People",
    tag: "Most Popular · Best Value",
    highlight: true,
    effectivePerPerson: "₦25,000 / person",
    description: "Ideal for households, couples, and multi-generational families. A certified Registered Nurse visits your home.",
  },
  soloVisit: {
    title: "Individual Solo Visit",
    price: 75000,
    priceFormatted: "₦75,000",
    unit: "For 1 Person Only",
    tag: "Solo Assessment",
    highlight: false,
    effectivePerPerson: "₦75,000",
    description: "Comprehensive in-home or in-office personal health assessment and biometric screening by a Registered Nurse.",
  },
  additionalPerson: {
    title: "Additional Person",
    price: 30000,
    priceFormatted: "₦30,000",
    unit: "Per extra person",
    tag: "Add-on to Shared Visit",
    highlight: false,
    description: "Easily add more family members, domestic staff, or guests to your shared home visit.",
  },
  underFive: {
    title: "Children Under 5",
    price: 0,
    priceFormatted: "Free",
    unit: "Complimentary",
    tag: "Family Courtesy",
    highlight: false,
    description: "Pediatric baseline observations included at no extra cost during any scheduled family visit.",
  },
};

export const CLINICAL_INCLUSIONS = [
  {
    id: "rn-visit",
    title: "RN home visit.",
    desc: "A licensed Registered Nurse visits your residence or office with sterile diagnostic equipment.",
    badge: "Core",
  },
  {
    id: "bp-screening",
    title: "Blood pressure screening.",
    desc: "Multi-reading systolic, diastolic, and pulse pressure check to monitor cardiovascular health.",
    badge: "Essential",
  },
  {
    id: "blood-glucose",
    title: "Blood glucose screening.",
    desc: "Point-of-care capillary blood sugar testing to detect pre-diabetes or glycemic trends.",
    badge: "Essential",
  },
  {
    id: "temp-spo2",
    title: "Temperature & Oxygen saturation.",
    desc: "Digital thermometry and pulse oximetry (SpO2) to monitor respiratory levels and detect subclinical issues.",
    badge: "Essential",
  },
  {
    id: "weight-bmi",
    title: "Weight and BMI assessment.",
    desc: "Accurate anthropometric measurements to compute Body Mass Index and assess healthy weight balance.",
    badge: "Essential",
  },
  {
    id: "ear-throat",
    title: "Ear & Throat examination.",
    desc: "Otoscopic ear canal inspection and throat check to identify common ENT concerns.",
    badge: "Clinical",
  },
  {
    id: "urinalysis",
    title: "Basic urinalysis.",
    desc: "Multistick reagent urine screening checking for protein, glucose, ketones, blood, and hydration markers.",
    badge: "Diagnostic",
  },
  {
    id: "malaria-rdt",
    title: "Malaria Rapid Diagnostic Test (where clinically indicated).",
    desc: "Rapid diagnostic test administered by your RN when symptoms or clinical indicators warrant testing.",
    badge: "Targeted",
  },
  {
    id: "med-review",
    title: "Medication Review & Health Education.",
    desc: "Thorough review of prescriptions, supplements, dosages, and personalized lifestyle health guidance.",
    badge: "Counseling",
  },
  {
    id: "digital-snapshot",
    title: "Digital Family Health Snapshot delivered within 24 hours.",
    desc: "Encrypted, structured digital health record delivered directly to your phone to keep and share with doctors.",
    badge: "Permanent",
  },
  {
    id: "findings-review",
    title: "Clinical review of findings and next steps.",
    desc: "Nurse debriefing explaining your results clearly, lifestyle recommendations, and physician referrals if needed.",
    badge: "Actionable",
  },
  {
    id: "breast-exam",
    title: "Breast Examination.",
    desc: "Gentle preventative screening performed by your Registered Nurse with client consent.",
    badge: "Preventative",
  },
  {
    id: "under5-free",
    title: "Children Under 5 complimentary.",
    desc: "Free pediatric baseline health observations included with any scheduled family check.",
    badge: "Complimentary",
  },
];

export const SAMPLE_CLIENT_RECORD = {
  name: "Joseph Kings",
  age: "30 yrs",
  gender: "Male",
  date: "08 Oct 2026",
  encounterId: "TH-SNP-84920",
  nurse: "Nurse A. Adebayo, RN",
  location: "Lekki Phase 1, Lagos",
  vitals: [
    { label: "TEMPERATURE", value: "36.3", unit: "°C", status: "Normal", color: "teal" },
    { label: "BLOOD PRESSURE", value: "101/68", unit: "mmHg", status: "Optimal", color: "teal" },
    { label: "PULSE RATE", value: "70", unit: "bpm", status: "Normal", color: "teal" },
    { label: "RESPIRATION", value: "18", unit: "b/min", status: "Normal", color: "teal" },
    { label: "FASTING BLOOD SUGAR (FBS)", value: "61", unit: "mg/dL", status: "Optimal", color: "teal" },
    { label: "OXYGEN SATURATION (SpO2)", value: "95", unit: "%", status: "Normal", color: "teal" },
    { label: "WEIGHT", value: "55", unit: "kg", status: "Recorded", color: "slate" },
    { label: "HEIGHT", value: "158", unit: "cm (5'2\")", status: "Recorded", color: "slate" },
    { label: "BMI", value: "22", unit: "kg/m²", status: "Normal Weight", color: "lime" },
  ],
  observations: [
    "Cardiovascular and respiratory parameters within healthy baseline ranges.",
    "Capillary blood glucose optimal. Routine dietary balance advised.",
    "ENT and urinalysis unremarkable.",
    "Reassessment recommended in 6 months for longitudinal trend tracking.",
  ],
};
