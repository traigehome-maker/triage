export const dynamic = 'force-static';
import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Typess from "./components/home/types";
import Soln from "./components/home/soln";
import Faq from "./components/home/faq";
import Vid from "./components/home/vids";
import Trust from "./components/home/trust";
import Soon from "./components/soon";
import Plan from "./components/plans";


// Global components


/* -------------------------------------
   METADATA SPOTLITE AFRICA AGENCY
------------------------------------- */




export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title: {
    default:
      "TriageHome | Home Healthcare Services in Lagos & Nigeria",
    template: "%s | TriageHome",
  },

  description:
    "TriageHome provides trusted home healthcare services in Lagos and across Nigeria. Book verified nurses, providers, elderly care, IV therapy, post-surgery care, wellness checks, chronic disease management, and professional medical support delivered directly to your home.",

  keywords: [
    "home healthcare Nigeria",
    "home healthcare Lagos",
    "home care services Nigeria",
    "home care services Lagos",
    "nurse at home Lagos",
    "doctor home visit Nigeria",
    "caregiver services Lagos",
    "elderly care Nigeria",
    "elderly care Lagos",
    "post surgery care at home",
    "IV therapy Lagos",
    "wellness checks at home",
    "home nursing services",
    "medical care at home",
    "healthcare at home Nigeria",
    "professional providers Nigeria",
    "private nursing services Lagos",
    "chronic disease management Nigeria",
    "trusted healthcare providers Nigeria",
    "on demand healthcare Nigeria",
    "digital healthcare Nigeria",
    "in-home client care",
    "healthcare support services",
    "verified nurses Nigeria",
    "home medical assistance",
  ],

  authors: [
    {
      name: "TriageHome",
      url: "https://www.triage-home.com",
    },
  ],

  creator: "TriageHome",

  publisher: "TriageHome",

  category: "Healthcare",

  openGraph: {
    title:
      "TriageHome | Trusted Home Healthcare Services in Nigeria",

    description:
      "Professional healthcare delivered directly to your home. Book verified nurses, providers, wellness checks, elderly care, IV therapy, post-surgery care, and more with TriageHome.",

    url: "https://www.triage-home.com",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Home Healthcare Services in Nigeria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "TriageHome | Home Healthcare Services in Lagos & Nigeria",

    description:
      "Book trusted nurses, providers, elderly care, IV therapy, wellness checks, and professional healthcare services directly to your home.",

    images: [
      "https://www.triage-home.com/images/banner.jpg",
    ],

    creator: "@triagehome",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.triage-home.com",
  },

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};
/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome, brief, professional, plays once per visit */}
     

      {/* Core hero & positioning */}
      <Hero />
      <About />
      

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />
       <History />
        <Trust />
       <Plan />
       <Soon />
        <Typess />
        
        <Vid />
        
           <Soln />
              <Faq />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
     
      
    </main>
  );
}
