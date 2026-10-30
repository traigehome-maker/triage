"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type Provider = {
  id: number;
  fullName: string;
  displayName: string;
  firstName: string;
  initials: string;
  bio: string;
  languages: string[];
  title: string;
  qualifications: string;
  experience: string;
  state: string;
  licenseNumber: string;
  employeeNumber: string;
  imageSlug: string;
};

type RawProvider = Omit<Provider, "id" | "displayName" | "initials">;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildProviders(raw: RawProvider[]): Provider[] {
  return raw.map((p, i) => {
    const parts = p.fullName.trim().split(/\s+/);
    const lastInitial = parts[parts.length - 1]?.[0] ?? "";
    const initials = (p.firstName[0] + lastInitial).toUpperCase();
    const displayName = `${p.firstName} ${lastInitial}.`;
    return { ...p, id: i + 1, displayName, initials };
  });
}

/** Shared everywhere a credential list is rendered, so the card grid and
 *  the modal always parse "RN, RM" style strings identically. */
function getCredentials(provider: Provider): string[] {
  return provider.qualifications
    .split(",")
    .map((q) => q.trim())
    .filter(Boolean);
}

function isHealthAssistant(provider: Provider): boolean {
  return provider.title === "Health Assistant";
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// imageSlug must match exactly the filename in /public/images/providers/
// e.g. imageSlug: "zuliyat" => /public/images/providers/zuliyat.jpg

const PROVIDERS: Provider[] = buildProviders([
  {
    fullName: "Zuliyat Abdulkareem",
    firstName: "Zuliyat",
    imageSlug: "zuliyat",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-001",
    licenseNumber: "84759/2023/L",
    bio: "Zuliyat believes that every person has a unique story worth listening to. A deep lover of books, she easily gets lost in fiction and turns to motivational reading to constantly grow and see the world through fresh eyes. This passion for learning makes Zuliyat an incredible conversationalist and an even better provider. She doesn't just look after physical health, she sits down, connects, and builds genuine friendships. She brings an uplifting, warm energy into every home, turning quiet days into bright, meaningful moments for her clients and their families.",
    languages: ["English", "Yoruba", "Hausa"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Eunice Oyewale",
    firstName: "Eunice",
    imageSlug: "Oyewale",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-002",
    licenseNumber: "RN245602",
    bio: "Some people naturally make others feel safe the moment they walk into a room, and that's exactly the kind of care Eunice brings. Calm, attentive, and kind-hearted, she believes clients deserve more than treatment, they deserve patience, respect, and genuine support. With strong clinical knowledge and a thoughtful approach to care, Eunice takes pride in helping people feel comfortable, reassured, and cared for during their most vulnerable moments.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  // {
  //   fullName: "Blessing Afuape",
  //   firstName: "Blessing",
  //   imageSlug: "afuape",
  //   title: "RN",
  //   qualifications: "BSC, RM",
  //   employeeNumber: "CPN-26-003",
  //   licenseNumber: "RM151963",
  //   bio: "You know that feeling when you're pregnant and every little thing scares you? That's where Blessing shines. She's a registered midwife who actually listens, with no rushing and no judgment. From antenatal checkups to delivery day and those messy, beautiful weeks after, she's got your back. Trained in BLS, ACLS, newborn resuscitation, and family planning, her background in Microbiology adds an extra layer of care. But more than her credentials, she offers something simple: kindness, patience, and the reassurance that you're never alone.",
  //   languages: ["English", "Yoruba"],
  //   experience: "1 – 3 years",
  //   state: "Lagos",
  // },
  {
    fullName: "Taiwo Alayo",
    firstName: "Taiwo",
    imageSlug: "alayo",
    title: "RN",
    qualifications: "RN, RM",
    employeeNumber: "CPN-26-004",
    licenseNumber: "INT/25/245930",
    bio: "Growing up in Edo State, Taiwo always knew she wanted a career that genuinely mattered. That spark led her to Igbinedion University, Okada, where she earned her BNSc along with her RN, RM, and RPHN qualifications. Driven by a deep, restless curiosity, she views every single day as a fresh chance to learn and grow. You will often find her at community health outreaches, not out of obligation, but because she believes healthcare should meet people exactly where they are.",
    languages: ["English", "Yoruba"],
    experience: "Less than 1 year",
    state: "Lagos",
  },
  {
    fullName: "Simbiat Oladimeji",
    firstName: "Simbiat",
    imageSlug: "simbiat",
    title: "RN",
    qualifications: "RN, RM",
    employeeNumber: "CPN-26-005",
    licenseNumber: "RN224377",
    bio: "When Simbiat isn't on the hospital floor, her passion for care takes her on the road. She loves travelling for community health outreaches, packing up her skills to reach people in remote areas who need medical attention the most. Whether navigating a busy city ER or setting up a temporary clinic in a distant village, she thrives on adapting to new environments. For her, nursing isn't confined to hospital walls; it's a journey of bringing peace of mind, comfort, and a listening ear to whoever needs it, wherever they are.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Kemisola Ipaye",
    firstName: "Kemisola",
    imageSlug: "ipaye",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-006",
    licenseNumber: "RN204920",
    bio: "Long before nursing became a profession, caring for people was already part of who Kemisola is. From community health outreach and volunteer support to years of hands-on clinical experience, she has built a reputation for showing up with calmness, compassion, and professionalism when people need it most. With over 4 years of experience in patient assessment, triage, and home-care support, Kemisola knows how to identify red flags quickly while still making clients feel comfortable, heard, and reassured.",
    languages: ["English", "Yoruba"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Afolakemi Olusemo",
    firstName: "Afolakemi",
    imageSlug: "olusemo",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-007",
    licenseNumber: "RN267820",
    bio: "A graduate of Sacred Heart College of Nursing Sciences, Afolakemi currently practises at Reddington Hospital. Known for bringing calm energy, compassion, and professionalism into every client interaction, she believes great care is about making people feel safe, respected, and genuinely looked after. Whether supporting recovery, offering reassurance, or simply listening, Afolakemi approaches nursing not as a job, but as a calling.",
    languages: ["English"],
    experience: "Less than 1 year",
    state: "Lagos",
  },
  // {
  //   fullName: "Albert Nduaguba",
  //   firstName: "Albert",
  //   imageSlug: "nduaguba",
  //   title: "RN",
  //   qualifications: "RN, RCTN",
  //   employeeNumber: "CPN-26-008",
  //   licenseNumber: "RCTN641",
  //   bio: "Meet Albert, a Lagos-based provider with a passion for helping people better understand their bodies. With experience in cardiothoracic care and hypertension management, he combines strong clinical knowledge with a personality that makes healthcare feel less intimidating. Whether caring for clients or sharing practical wellness tips, Albert believes health education should be simple, relatable, and engaging. Warm, adaptable, and community-driven, he is committed to helping everyday Nigerians make informed health decisions, one conversation at a time.",
  //   languages: ["English", "Igbo", "French"],
  //   experience: "4 – 7 years",
  //   state: "Lagos",
  // },
  {
    fullName: "Oluwaseun Adebajo",
    firstName: "Oluwaseun",
    imageSlug: "adebajo",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-009",
    licenseNumber: "RN240140",
    bio: "Oluwaseun delivers 360° care, attending not just to symptoms, but to the whole person: body, mind, and dignity. Calm and compassionate, she partners with clients and colleagues alike to ensure no aspect of care is overlooked. In a field where technology evolves rapidly, she prioritises continuous learning as non-negotiable. Staying current isn't optional; it is how she protects lives. She studies new tools, refines old skills, and adapts without losing the human touch. For her, excellent care means growing every single day.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos, Ogun",
  },
  {
    fullName: "Nosakhare Ero",
    firstName: "Nosakhare",
    imageSlug: "ero",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-010",
    licenseNumber: "RN203851",
    bio: "A passionate clinical provider dedicated to delivering quality health services with empathy and excellence. Her heart beats for people, and she believes everyone deserves access to good healthcare no matter their background. As an SDG advocate, she champions quality education and good health for both young children and adults. Beyond the hospital, she volunteers her time to community health outreaches. She loves to travel and explore new cultures, which broadens how she connects with and cares for people. At her core, she is driven by compassion, service, and the belief that health is a right, not a privilege.",
    languages: ["English", "Yoruba"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Rebecca Olori",
    firstName: "Rebecca",
    imageSlug: "rebecca",
    title: "RN",
    qualifications: "RN, RM",
    employeeNumber: "CPN-26-011",
    licenseNumber: "RM144587",
    bio: "Sweet, cheerful, and respectful, Rebecca brings calm energy into every home she visits. She values honesty, discipline, and treating every client with dignity. For her, nursing is a calling. She will sit with you, listen, and never make you feel rushed or judged. When life gets hard, she shows up anyway. No fancy words, just a provider who genuinely cares.",
    languages: ["English"],
    experience: "Less than 1 year",
    state: "Lagos, Ogun",
  },
  {
    fullName: "Ngozi Ekokwu",
    firstName: "Ngozi",
    imageSlug: "ekokwu",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-012",
    licenseNumber: "RN203566",
    bio: "Ngozi has a real gift for catching the tiny details that completely change how a client recovers. With over 4 years of clinical experience, she is the provider you want handling head-to-toe assessments and organising care plans, because she stays ten steps ahead. Her real strength is patient education: she can sit down with a stressed family and explain health management so clearly that they instantly feel in control. Currently pursuing her BNSc, she keeps growing while bringing empathy into everything she does.",
    languages: ["English", "Igbo"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Kehinde Adegbenro",
    firstName: "Kehinde",
    imageSlug: "adegbenro",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-013",
    licenseNumber: "RN263777",
    bio: "Whether managing a busy clinic or providing one-on-one care in a client's living room, Kehinde keeps his head completely cool. He has a gift for breaking down complex medical talk into plain English, making sure clients and their families always understand their care. Highly adaptable and passionate about learning the latest healthcare practices, he advocates strongly for the people under his watch. For him, an excellent day means delivering expert care while making sure every client feels safe, heard, and comfortable.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Olufunto Akinlade",
    firstName: "Olufunto",
    imageSlug: "olufunto",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-014",
    licenseNumber: "RN224417",
    bio: "The first thing most people notice about Olufunto is how calm she is. In moments where clients feel anxious or overwhelmed, she has a way of slowing things down, listening carefully, asking the right questions, and making clients feel heard before anything else. She pays attention to the little details others may miss: a worried glance, discomfort hidden behind a smile, the need for reassurance before treatment begins. Thoughtful, steady, and deeply attentive, she believes great care is not only about clinical skill but about how clients feel in your presence long after you leave.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  // {
  //   fullName: "Blessing Alagha",
  //   firstName: "Blessing",
  //   imageSlug: "alagha",
  //   title: "RN",
  //   qualifications: "RN, RPHN",
  //   employeeNumber: "CPN-26-015",
  //   licenseNumber: "RN220149",
  //   bio: "For Blessing, nursing is far more than a profession; it is a calling built on patience, listening, and healing the whole person, not just the symptoms. She believes true care follows you beyond hospital walls. That is why you will find her at community health outreaches, meeting people where they are. Quietly watching how technology can bring healthcare to the last mile, because for Blessing, no one should be too far to be cared for.",
  //   languages: ["English", "Yoruba"],
  //   experience: "1 – 3 years",
  //   state: "Lagos",
  // },
  {
    fullName: "Yetunde Akande",
    firstName: "Yetunde",
    imageSlug: "akande",
    title: "Health Assistant",
    qualifications: "BSC (Health Assistant)",
    employeeNumber: "HA-26-001",
    licenseNumber: "N/A",
    bio: "Yetunde speaks three languages: English, Yoruba, and French. But her favourite one? Kindness. As a nursing science graduate and health assistant, she shows up with a warm smile, a listening ear, and a calm presence that puts clients at ease. Whether helping with daily care, calming a worried family, or breaking down information in a local dialect, she makes sure no one feels lost or alone. Her superpower? Making clients feel seen, heard, and never alone.",
    languages: ["English", "Yoruba", "Pidgin", "French"],
    experience: "Less than 1 year",
    state: "Lagos",
  },
  {
    fullName: "Temitope Ahmed",
    firstName: "Temitope",
    imageSlug: "ahmed",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-002",
    licenseNumber: "N/A",
    bio: "Temitope is from Ondo State and speaks English, Hausa, and Yoruba. Over the years she has gained experience in maternal care, emergency response, ward management, and patient health education. She has supported deliveries, managed unexpected situations, and helped families understand their health in clear terms. What she really offers is trust. When you are in her care, you can breathe easier: no rushing, no guesswork. Just competence, honesty, and the peace of mind that comes from knowing you are in good hands.",
    languages: ["English", "Yoruba", "Hausa"],
    experience: "8 – 15 years",
    state: "Lagos",
  },
  {
    fullName: "Faith Agboma",
    firstName: "Faith",
    imageSlug: "faith",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-003",
    licenseNumber: "N/A",
    bio: "A dedicated health assistant committed to delivering compassionate, client-centered support. Brings warmth and professionalism to every care engagement.",
    languages: ["English"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Kingsley Odok",
    firstName: "Kingsley",
    imageSlug: "kingsley",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-004",
    licenseNumber: "N/A",
    bio: "Hailing from Boki, Cross River State, Kingsley brings a unique mix of problem-solving and organisational skills to caregiving. With his background in facility management, he knows exactly how to keep a home running smoothly, safely, and reliably. But what truly sets Kingsley apart is his heart for people. He provides genuine companionship, always thinking ahead to make sure his clients feel comfortable and completely supported. He brings absolute peace of mind to every home he enters.",
    languages: ["English"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
]);
// ─── Constants ────────────────────────────────────────────────────────────────

const TITLES = ["All", "RN", "Health Assistant"];

const GRADIENT_PAIRS: [string, string][] = [
  ["#02385a", "#00b99d"],
  ["#aa7130", "#02385a"],
  ["#00b99d", "#a6d200"],
  ["#b745d8", "#02385a"],
  ["#02385a", "#aa7130"],
  ["#00b99d", "#02385a"],
  ["#aa7130", "#00b99d"],
  ["#a6d200", "#02385a"],
];

function getGradient(id: number): string {
  const pair = GRADIENT_PAIRS[(id - 1) % GRADIENT_PAIRS.length];
  return `linear-gradient(135deg, ${pair[0]} 0%, ${pair[1]} 100%)`;
}

// ─── Title Badge ──────────────────────────────────────────────────────────────

function TitleBadge({ title }: { title: string }) {
  const cls =
    title === "Health Assistant"
      ? "bg-teal-50 text-teal-700"
      : "bg-emerald-50 text-emerald-800";
  return (
    <span
      className={`inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full font-raleway ${cls}`}
    >
      {title}
    </span>
  );
}

// ─── TriageVerified Badge ─────────────────────────────────────────────────────
// The trust signal requested for every provider, card and modal alike: a
// small filled checkmark badge, the same visual language as a verified
// social profile, not a generic outline check.

function VerifiedBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const px = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <span
      className={`inline-flex ${px} flex-shrink-0 items-center justify-center rounded-full bg-[#00b99d] ring-2 ring-white`}
      title="TriageVerified provider"
      aria-label="TriageVerified provider"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-[62%] h-[62%]">
        <path
          d="M5 12.5l4.5 4.5L19 7"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function VerifiedLabel() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-[#00897a] font-raleway">
      <VerifiedBadge size="sm" />
      TriageVerified
    </span>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
// object-top + scale-[1.8] + translate-y-[10%] zooms into the face/headshot area

function ProviderAvatar({
  provider,
  size = "sm",
}: {
  provider: Provider;
  size?: "sm" | "lg";
}) {
  const [imgError, setImgError] = useState(false);
  const isLg = size === "lg";
  const sizeClass = isLg ? "w-24 h-24" : "w-16 h-16";
  const px = isLg ? 96 : 64;

  const inner = imgError ? (
    <div
      className="w-full h-full rounded-2xl flex items-center justify-center"
      style={{ background: getGradient(provider.id) }}
    >
      <span
        className={`${isLg ? "text-2xl" : "text-lg"} font-bold tracking-wide text-white font-raleway`}
      >
        {provider.initials}
      </span>
    </div>
  ) : (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100">
      <Image
        src={`/images/providers/${provider.imageSlug}.jpg`}
        alt={`${provider.displayName} headshot`}
        fill
        className="object-cover"
        sizes={`${px}px`}
        onError={() => setImgError(true)}
      />
    </div>
  );

  return (
    <div
      className={`relative ${sizeClass} flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
    >
      <div
        className="w-full h-full rounded-2xl p-[2px] shadow-md"
        style={{
          background: "linear-gradient(135deg, #02385a, #00b99d, #aa7130)",
        }}
      >
        {inner}
      </div>
      <span className="absolute -bottom-1 -right-1">
        <VerifiedBadge size={isLg ? "md" : "sm"} />
      </span>
    </div>
  );
}
// ─── Detail Card ──────────────────────────────────────────────────────────────

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-slate-400 font-raleway">
          {label}
        </span>
      </div>
      <span className="font-nunito font-bold text-sm text-[#02385a]">
        {value}
      </span>
    </div>
  );
}

// ─── Filter Pill ──────────────────────────────────────────────────────────────

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold font-raleway px-4 py-2 rounded-xl transition-all duration-200 focus:outline-none ${
        active
          ? "bg-[#02385a] text-white shadow-md shadow-[#02385a]/20 scale-[1.02]"
          : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-[#02385a]"
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
            active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

// ─── Provider Card ────────────────────────────────────────────────────────────

function ProviderCard({
  provider,
  onClick,
}: {
  provider: Provider;
  onClick: () => void;
}) {
  const credentials = getCredentials(provider);
  const isNurse = !isHealthAssistant(provider);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left w-full bg-white rounded-3xl border border-slate-200/90 hover:border-[#aa7130]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(2,56,90,0.09)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#aa7130]"
    >
      {/* Top Banner with Location & Code */}
      <div className="relative h-20 w-full bg-gradient-to-r from-[#02385a]/10 via-[#00b99d]/10 to-[#aa7130]/10 p-4 flex items-start justify-between overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/40 blur-xl pointer-events-none" />
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 font-nunito bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/60 shadow-xs">
          <svg
            className="w-3 h-3 text-[#aa7130]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21s-6-5.333-6-10a6 6 0 0112 0c0 4.667-6 10-6 10z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="11"
              r="2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          {provider.state}
        </span>

        <span className="text-[10px] font-mono tracking-wider text-slate-400 bg-white/70 px-2 py-0.5 rounded-md border border-slate-200/50">
          {provider.employeeNumber}
        </span>
      </div>

      {/* Main Body */}
      <div className="p-6 pt-0 flex flex-col flex-1">
        {/* Avatar positioned over the header boundary */}
        <div className="-mt-10 mb-3.5 flex items-end justify-between">
          <ProviderAvatar provider={provider} size="sm" />
          <TitleBadge title={provider.title} />
        </div>

        {/* Identity & Verified Status */}
        <div className="mb-3">
          <h3 className="font-raleway font-extrabold text-[#02385a] text-lg leading-snug group-hover:text-[#aa7130] transition-colors">
            {provider.displayName}
          </h3>

          <div className="mt-1 flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-700 font-nunito">
            <svg
              className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m9 12 2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="truncate">
              {isNurse
                ? `NMCN Verified • ${provider.licenseNumber}`
                : "Triage Certified Health Assistant"}
            </span>
          </div>
        </div>

        {/* Qualifications Badges */}
        {credentials.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {credentials.map((q) => (
              <span
                key={q}
                className="bg-slate-50 border border-slate-200/80 text-[#02385a] font-bold text-[10.5px] px-2.5 py-0.5 rounded-lg font-nunito"
              >
                {q}
              </span>
            ))}
          </div>
        )}

        {/* Bio Preview */}
        <p className="font-nunito text-[13px] text-slate-600 leading-relaxed line-clamp-3 flex-1 mb-4">
          {provider.bio}
        </p>

        {/* Experience & Languages */}
        <div className="border-t border-slate-100 pt-3.5 flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11.5px] font-nunito text-slate-500">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#aa7130]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-semibold text-slate-700">
                {provider.experience}
              </span>
            </div>

            <span className="text-[11px] truncate max-w-[140px] text-slate-400">
              {provider.languages.join(", ")}
            </span>
          </div>
        </div>

        {/* Action Cue */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[#aa7130] font-raleway font-bold text-xs tracking-wider uppercase">
          <span>View Clinical Profile</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProviderModal({
  provider,
  onClose,
}: {
  provider: Provider;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const assistant = isHealthAssistant(provider);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  const credentials = getCredentials(provider);

  // Health Assistants are support staff, not individually bookable the way
  // a licensed RN is: the CTA books the service through TriageHome rather
  // than requesting that specific person by name.
  const ctaHeading = assistant
    ? "Book a home health assistant visit"
    : `Book an appointment with ${provider.firstName}`;

  const ctaMessage = assistant
    ? `Hi TriageHome, I would like to book a home health assistant visit.`
    : `Hi Triage, I would like to book an appointment with ${provider.firstName}.`;

  const ctaLabel = assistant ? "Book with TriageHome" : "Book an Appointment";

  const ctaHref = `https://wa.me/2349134664547?text=${encodeURIComponent(ctaMessage)}`;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021c2e]/75 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-[#02385a] px-8 pt-8 pb-7 relative overflow-hidden flex-shrink-0">
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
          <div className="absolute -bottom-12 right-10 w-28 h-28 rounded-full bg-[#00b99d]/10 pointer-events-none" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex items-end gap-5 relative z-10">
            <ProviderAvatar provider={provider} size="lg" />
            <div>
              <h2 className="font-raleway font-extrabold text-white text-xl leading-snug mb-2">
                {provider.displayName}
              </h2>
              <div className="flex flex-wrap items-center gap-2.5">
                <TitleBadge title={provider.title} />
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-[#5eead4] font-raleway">
                  <VerifiedBadge size="sm" />
                  TriageVerified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-8 py-7 flex flex-col gap-6">
          {/* About */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#aa7130] font-raleway mb-2.5">
              About
            </p>
            <p className="font-nunito text-[15px] text-slate-700 leading-[1.8]">
              {provider.bio}
            </p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <DetailCard
              icon={
                <svg
                  className="w-4 h-4 text-[#00b99d]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              label="Experience"
              value={provider.experience}
            />
            <DetailCard
              icon={
                <svg
                  className="w-4 h-4 text-[#aa7130]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              label="License Number"
              value={provider.licenseNumber}
            />
            <DetailCard
              icon={
                <svg
                  className="w-4 h-4 text-[#02385a]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 9h8M8 13h5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              label="Employee Number"
              value={provider.employeeNumber}
            />
            <DetailCard
              icon={
                <svg
                  className="w-4 h-4 text-[#aa7130]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              }
              label="State of Practice"
              value={provider.state}
            />
          </div>

          {/* Professional Credentials */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#aa7130] font-raleway mb-2.5">
              Professional Credentials
            </p>
            <div className="flex flex-wrap gap-2">
              {credentials.map((q) => (
                <span
                  key={q}
                  className="bg-slate-50 border border-slate-200 text-[#02385a] font-bold text-[13px] px-4 py-1 rounded-full font-nunito"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#aa7130] font-raleway mb-2.5">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {provider.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-slate-50 border border-slate-200 text-[#02385a] font-bold text-[13px] px-4 py-1 rounded-full font-nunito"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* CTA: tailored so a Health Assistant visit books through
              TriageHome generally, never as a named, individually
              requested provider the way an RN can be */}
          <div className="bg-gradient-to-r from-[#02385a] to-[#024a78] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-raleway font-bold text-white text-base mb-1">
                {ctaHeading}
              </p>
              <p className="font-nunito text-sm text-white/60">
                #HomeHealth, Powered by People
              </p>
            </div>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#aa7130] hover:bg-[#8c5c22] text-white font-raleway font-bold text-[13px] tracking-wide px-6 py-3 rounded-xl transition-colors flex-shrink-0"
            >
              {ctaLabel}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClinicalProvidersPage() {
  const [selected, setSelected] = useState<Provider | null>(null);
  const [activeTitle, setActiveTitle] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PROVIDERS.filter((p) => {
    const matchesTitle =
      activeTitle === "All"
        ? true
        : activeTitle === "RN"
          ? !isHealthAssistant(p)
          : isHealthAssistant(p);

    const q = search.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      p.fullName.toLowerCase().includes(q) ||
      p.displayName.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.qualifications.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.licenseNumber.toLowerCase().includes(q) ||
      p.languages.some((l) => l.toLowerCase().includes(q));

    return matchesTitle && matchesSearch;
  });

  const rnCount = PROVIDERS.filter((p) => !isHealthAssistant(p)).length;
  const haCount = PROVIDERS.filter((p) => isHealthAssistant(p)).length;

  return (
    <>
      <div className="min-h-screen bg-[#fcfdfd] font-nunito text-slate-800 selection:bg-[#aa7130]/20 selection:text-[#aa7130]">
        {/* 🌟 LUXURY HERO SECTION */}
        <section className="relative px-6 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#011e33] via-[#022c4a] to-[#02385a] text-white">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full bg-[#00b99d]/10 blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-[420px] h-[420px] rounded-full bg-[#aa7130]/15 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <VerifiedBadge size="sm" />
              <span className="font-raleway font-bold text-xs tracking-[0.14em] uppercase text-amber-300">
                TriageVerified™ Clinical Directory
              </span>
            </div>

            {/* Title & Narrative */}
            <h1 className="font-raleway font-extrabold text-white leading-[1.12] mb-6 text-4xl sm:text-5xl lg:text-6xl max-w-3xl tracking-tight">
              The Clinicians Behind Your Peace of Mind.
            </h1>

            <p className="font-nunito text-white/80 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl font-normal">
              Every TriageHome clinical provider is individually licensed by the
              Nursing and Midwifery Council of Nigeria (NMCN),
              background vetted, and committed to hospital grade care right in
              your living room.
            </p>

            {/* Quick Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-4xl">
              {[
                {
                  value: `${PROVIDERS.length}+`,
                  label: "Vetted Clinicians",
                  sub: "RNs & Specialists",
                },
                {
                  value: "100%",
                  label: "NMCN Verified",
                  sub: "Direct License Registry",
                },
                {
                  value: "Lagos & Beyond",
                  label: "Coverage Reach",
                  sub: "Direct Home Dispatch",
                },
                { value: "5.0 ★", label: "Family Trust", sub: "Bedside Score" },
              ].map((s) => (
                <div key={s.label} className="p-3">
                  <p className="font-raleway font-extrabold text-white text-2xl sm:text-3xl leading-none mb-1 text-amber-200">
                    {s.value}
                  </p>
                  <p className="font-raleway font-bold text-white text-xs tracking-wide">
                    {s.label}
                  </p>
                  <p className="font-nunito text-white/50 text-[11px] mt-0.5">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔍 STICKY FILTER & SEARCH BAR */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] px-6 py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="m21 21-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, qualification, or language…"
                className="w-full pl-11 pr-10 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm text-[#02385a] font-nunito placeholder:text-slate-400 focus:outline-none focus:border-[#aa7130] focus:bg-white focus:ring-3 focus:ring-[#aa7130]/15 transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
              <FilterPill
                label="All Providers"
                count={PROVIDERS.length}
                active={activeTitle === "All"}
                onClick={() => setActiveTitle("All")}
              />
              <FilterPill
                label="Registered Nurses (RN)"
                count={rnCount}
                active={activeTitle === "RN"}
                onClick={() => setActiveTitle("RN")}
              />
              <FilterPill
                label="Health Assistants"
                count={haCount}
                active={activeTitle === "Health Assistant"}
                onClick={() => setActiveTitle("Health Assistant")}
              />
            </div>
          </div>
        </div>

        {/* 🗂️ PROVIDERS GRID */}
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-24">
          <div className="flex items-center justify-between mb-8">
            <p className="font-raleway font-bold text-xs tracking-wider uppercase text-slate-400">
              Showing {filtered.length} of {PROVIDERS.length} Verified
              Clinicians
            </p>
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-xs text-[#aa7130] hover:underline font-semibold font-nunito"
              >
                Clear search filter
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#aa7130] flex items-center justify-center mx-auto mb-4 text-2xl">
                🔍
              </div>
              <h3 className="font-raleway font-bold text-xl text-[#02385a] mb-2">
                No matching providers found
              </h3>
              <p className="font-nunito text-slate-500 text-sm max-w-md mx-auto mb-6">
                We couldn't find any clinical providers matching "{search}". Try
                searching by another name, credential, or specialty.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveTitle("All");
                }}
                className="px-6 py-2.5 bg-[#02385a] text-white rounded-xl text-sm font-semibold hover:bg-[#aa7130] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onClick={() => setSelected(provider)}
                />
              ))}
            </div>
          )}
        </div>

        {/* 🛡️ 4-PILLAR CLINICAL STANDARDS */}
        <section className="bg-slate-100/70 border-t border-slate-200/80 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#aa7130] font-raleway font-bold text-xs tracking-widest uppercase mb-3">
                The Triage Standard
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02385a] font-raleway">
                Why Families Trust Our Clinical Network
              </h2>
              <p className="mt-4 text-slate-600 font-nunito text-base leading-relaxed">
                Inviting a healthcare professional into your home requires
                complete confidence. Here is how we safeguard every interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "NMCN Direct Verification",
                  desc: "Every nurse and midwife's license is authenticated directly with the Nursing and Midwifery Council of Nigeria.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-[#02385a]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Background & Identity Vetted",
                  desc: "Multi-point criminal background verification, guarantor confirmation, and residence checks prior to client dispatch.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-[#00b99d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: "BLS & Emergency Trained",
                  desc: "Certified in Basic Life Support (BLS), vitals monitoring, infection control, and rapid emergency escalation.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-[#aa7130]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Empathetic Bedside Manner",
                  desc: "Selected not just for technical skill, but for kindness, patience, and profound respect for your family's dignity.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-pink-600"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5 border border-slate-100">
                    {p.icon}
                  </div>
                  <h3 className="font-raleway font-bold text-[#02385a] text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="font-nunito text-slate-500 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 💼 CLINICAL RECRUITMENT BANNER */}
        <section className="bg-gradient-to-r from-[#02385a] via-[#024a78] to-[#aa7130] px-6 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 font-raleway font-bold text-xs uppercase tracking-widest mb-5">
              Healthcare Providers
            </span>
            <h2 className="font-raleway font-extrabold text-white text-3xl sm:text-4xl mb-4 leading-tight">
              Are you a licensed healthcare professional?
            </h2>
            <p className="font-nunito text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join our growing network of verified Registered Nurses, Midwives,
              and Health Assistants delivering trusted, dignified care to
              families across Nigeria.
            </p>
            <a
              href="https://wa.me/2349134664547?text=Hello%2C%20I%20am%20interested%20in%20joining%20Triage%20as%20a%20healthcare%20provider.%20Please%20share%20the%20application%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#02385a] hover:bg-amber-50 font-raleway font-extrabold text-sm tracking-wide px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Apply to Join Our Clinical Network</span>
              <svg
                className="w-4 h-4 text-[#aa7130]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {selected !== null && (
        <ProviderModal provider={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
