import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ClientProviders from "./ClientProviders";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title: {
    default: "TriageHome | Home Healthcare Services in Lagos & Nigeria",
    template: "%s | TriageHome",
  },

  description:
    "TriageHome provides trusted on demand home healthcare services in Lagos and across Nigeria. Book verified nurses, providers, and healthcare professionals for elderly care, post-surgery care, wellness checks, chronic disease management, IV therapy, and in-home medical support.",

  keywords: [
    "home healthcare Nigeria",
    "home healthcare Lagos",
    "home care services Lagos",
    "nurse at home Nigeria",
    "doctor home visit Lagos",
    "elderly care Nigeria",
    "caregiver services Lagos",
    "post surgery care at home",
    "in-home healthcare services",
    "professional providers Nigeria",
    "home nursing services",
    "healthcare at home",
    "digital healthcare Nigeria",
    "IV therapy Lagos",
    "wellness checks at home",
    "chronic disease management Nigeria",
    "medical care at home",
    "private nursing services Lagos",
    "trusted healthcare providers Nigeria",
    "on demand healthcare",
  ],

  authors: [{ name: "TriageHome" }],

  creator: "TriageHome",

  publisher: "TriageHome",

  openGraph: {
    title: "TriageHome | Trusted Home Healthcare Services in Nigeria",

    description:
      "Professional healthcare delivered to your home. Book verified nurses, providers, wellness checks, elderly care, post-surgery care, IV therapy, and more with TriageHome.",

    url: "https://www.triage-home.com",

    siteName: "TriageHome",

    images: [
      {
        url: "https://triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Home Healthcare Services",
      },
    ],

    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TriageHome | on demand Home Healthcare Services",

    description:
      "Book trusted nurses, providers, and healthcare professionals directly to your home in Lagos and across Nigeria.",

    images: ["https://triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical: "https://www.triage-home.com",
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

  category: "Healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        {/* ⚡ FAST CONTENT */}
        <Header />

        <ClientProviders>{children}</ClientProviders>

        <Footer />
      </body>
    </html>
  );
}
