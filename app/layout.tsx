import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import './../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './../styles/globals.css';
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Docovery | Solutions Digitales Sur Mesure - Développement Web & Mobile",
    template: "%s | Docovery",
  },
  description: "Docovery transforme vos idées en solutions digitales performantes. Développement web, applications mobiles, solutions cloud et IA à Kinshasa, RD Congo.",
  keywords: ["Docovery", "développement web", "application mobile", "solutions digitales", "Kinshasa", "RD Congo", "React", "Next.js", "cloud", "IA", "intelligence artificielle", "formation informatique"],
  authors: {
    name: "David BANITONGWA",
  },
  metadataBase: new URL("https://www.docovery.net"),
  icons: {
    icon: "/docovery_logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docovery | Solutions Digitales Sur Mesure",
    description: "Transformez votre vision en réalité digitale. Développement web, mobile, cloud & IA.",
    images: ["/docovery_logo.svg"]
  },
  openGraph: {
    type: "website",
    url: "https://www.docovery.net",
    siteName: "Docovery",
    title: "Docovery | Solutions Digitales Sur Mesure",
    images: ["/docovery_logo.svg"],
    description: "Transformez votre vision en réalité digitale. Développement web, mobile, cloud & IA à Kinshasa.",
    locale: "fr_FR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
