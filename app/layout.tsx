import type { Metadata, Viewport } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./../styles/globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { ProjectModalProvider } from "@/components/providers/ProjectModalProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileProjectBar from "@/components/layout/MobileProjectBar";
import { siteConfig } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Docovery",
    "développement web",
    "application mobile",
    "solutions digitales",
    "Kinshasa",
    "RD Congo",
    "React",
    "Next.js",
    "cloud",
    "IA",
    "intelligence artificielle",
    "formation informatique",
    "fintech",
    "SaaS",
  ],
  authors: { name: siteConfig.author },
  creator: siteConfig.author,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  // Canonicals are set per page (see lib/seo.ts) — a layout-level canonical
  // would be inherited by every route that forgets its own.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  category: "technology",
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${poppins.variable}`}>
      <head>
        {/*
          Anti-FOUC safety net: animated nodes start at opacity 0 so GSAP can
          take over cleanly. Without JavaScript that would hide the page, so we
          restore them here. (Reduced-motion users are covered in globals.css.)
        */}
        <noscript>
          <style>{`[data-anim]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </head>
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Aller au contenu principal
        </a>

        <SmoothScroll>
          <ProjectModalProvider>
            <Navbar />
            <main id="contenu">{children}</main>
            <Footer />
            <MobileProjectBar />
          </ProjectModalProvider>
        </SmoothScroll>

        <Analytics />
      </body>
    </html>
  );
}
