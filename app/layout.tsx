import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./../styles/globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { ProjectModalProvider } from "@/components/providers/ProjectModalProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig, contact } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  icons: { icon: "/docovery_logo.svg" },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Solutions Digitales Sur Mesure`,
    description:
      "Transformez votre vision en réalité digitale. Développement web, mobile, cloud & IA.",
    images: ["/docovery_logo.svg"],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Solutions Digitales Sur Mesure`,
    images: ["/docovery_logo.svg"],
    description:
      "Transformez votre vision en réalité digitale. Développement web, mobile, cloud & IA à Kinshasa.",
    locale: siteConfig.locale,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: contact.email,
  telephone: contact.phone.value,
  slogan: siteConfig.motto,
  address: {
    "@type": "PostalAddress",
    addressLocality: contact.office.city,
    addressCountry: "CD",
  },
  areaServed: "Worldwide",
  founder: [
    { "@type": "Person", name: "Omari Kayumba" },
    { "@type": "Person", name: "David Banitongwa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/*
          Anti-FOUC safety net: animated nodes start at opacity 0 so GSAP can
          take over cleanly. Without JavaScript that would hide the page, so we
          restore them here. (Reduced-motion users are covered in globals.css.)
        */}
        <noscript>
          <style>{`[data-anim]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Aller au contenu principal
        </a>

        <SmoothScroll>
          <ProjectModalProvider>
            <Navbar />
            <main id="contenu">{children}</main>
            <Footer />
          </ProjectModalProvider>
        </SmoothScroll>

        <Analytics />
      </body>
    </html>
  );
}
