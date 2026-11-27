export type Provider = {
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

export type RawProvider = Omit<Provider, "id" | "displayName" | "initials">;

function buildProviders(raw: RawProvider[]): Provider[] {
  return raw.map((p, i) => {
    const parts = p.fullName.trim().split(/\s+/);
    const lastInitial = parts[parts.length - 1]?.[0] ?? "";
    const initials = (p.firstName[0] + lastInitial).toUpperCase();
    const displayName = `${p.firstName} ${lastInitial}.`;
    const normalizedLanguages = p.languages
      .flatMap((l) => l.split(","))
      .map((l) => l.trim())
      .filter(Boolean);
    return {
      ...p,
      id: i + 1,
      displayName,
      initials,
      languages: normalizedLanguages,
    };
  });
}

export function getCredentials(provider: Provider): string[] {
  return provider.qualifications
    .split(",")
    .map((q) => q.trim())
    .filter(Boolean);
}

export function isHealthAssistant(provider: Provider): boolean {
  return provider.title === "Health Assistant";
}

export function isDoctor(provider: Provider): boolean {
  return (
    provider.title === "Medical Doctor" ||
    provider.licenseNumber.startsWith("MDCN")
  );
}

export function isNurse(provider: Provider): boolean {
  return provider.title === "RN";
}

export function getProviderRoleLabel(provider: Provider): string {
  if (isDoctor(provider)) return "General Medicine / Obs & Gynae";
  if (isNurse(provider)) return "Registered Nurse (RN)";
  return "Certified Health Assistant";
}

export function getProviderRegistrySummary(provider: Provider): string {
  if (isDoctor(provider)) return `MDCN Verified • ${provider.licenseNumber}`;
  if (isNurse(provider)) return `NMCN Verified • ${provider.licenseNumber}`;
  return `Triage Certified • ${provider.employeeNumber}`;
}

export function getProviderById(id: string | number): Provider | undefined {
  const numericId = typeof id === "string" ? Number(id) : id;
  if (!Number.isInteger(numericId)) return undefined;
  return PROVIDERS.find((p) => p.id === numericId);
}

export const PROVIDERS: Provider[] = buildProviders([
  {
    fullName: "Zainab Olakunle Oduwole",
    firstName: "Zainab",
    imageSlug: "zainab",
    title: "Medical Doctor",
    qualifications: "General Medicine, Obstetrics & Gynaecology",
    employeeNumber: "DR-26-001",
    licenseNumber: "MDCN/R/93838",
    bio: "I like to think of myself as an introverted extrovert, a realistic optimist. I’m passionate about women’s sexual and reproductive health. In my spare time, you can catch me curled up somewhere reading a book, watching a TV show (I love those), or lifting weights.",
    languages: ["English"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
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
    fullName: "Mofoluwake Olugboji",
    firstName: "Mofoluwake",
    imageSlug: "mofoluwake",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-014",
    licenseNumber: "RN266758",
    bio: "I’m a Registered Nurse who genuinely enjoys caring for people and making a difference in their health journeys. I’m passionate about wellness, preventive care, and helping people feel comfortable, heard, and supported. I value creating positive patient experiences, paying attention to the little details, and continually learning to become better at what I do. For me, good healthcare goes beyond treatment; it’s also about compassion, trust, and making people feel cared for.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Chima Success",
    firstName: "Chima",
    imageSlug: "chima",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-015",
    licenseNumber: "RN245782",
    bio: "I am a dedicated and compassionate Registered Nurse with a strong passion for healthcare, continuous learning, and making a positive difference in people’s lives. I am hardworking, responsible, adaptable, and committed to delivering quality patient-centred care. Beyond my professional life, I enjoy music, drawing, meeting new people, and exploring opportunities for personal and professional growth. I believe in integrity, teamwork, self-development, and striving for excellence in everything I do. My goal is to keep growing, making meaningful contributions, and achieving greater success in life.",
    languages: ["English", "Igbo"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
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
    bio: "Odok Kingsley from Cross River State, Boki Local Government. As a caregiver, I'm always dedicated to my duties and being active to my job is my biggest priority.",
    languages: ["English"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Chiamaka Josiah",
    firstName: "Chiamaka",
    imageSlug: "chiamaka",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-005",
    licenseNumber: "N/A",
    bio: "Warm, attentive, and deeply empathetic, Chiamaka believes that high-quality home care begins with genuine human connection. With a keen eye for patient comfort, daily living assistance, and proactive wellness monitoring, she brings reassurance into every home, making care routines smooth, dignified, and stress-free for clients and their families.",
    languages: ["English"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Destiny Sunday",
    firstName: "Destiny",
    imageSlug: "sunday",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-006",
    licenseNumber: "N/A",
    bio: "I am a trained Healthcare Assistant and Caregiver with a strong passion for providing compassionate, safe and quality patient care. I have training in healthcare assistance, First Aid and Basic Life Support (BLS), dementia care, medication management and other essential patient support skills. I am empathetic, patient, attentive to detail and committed to maintaining the dignity, comfort and wellbeing of those under my care. With a background in customer service, I also possess excellent communication, interpersonal and problem-solving skills. I am dedicated to continuous learning, teamwork and delivering professional, person-centred care while making a positive difference in people's lives.",
    languages: ["English", "Igbo"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
]);
