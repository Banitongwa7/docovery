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
  title: "Docovery",
  description: "Building solutions, Shaping the future",
  keywords: ["Docovery", "Software", "Development", "Solutions", "Future", "Tech"],
  authors: {
    name: "David BANITONGWA",
  },
  icons: {
    icon: "/docovery_logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docovery",
    description: "Building solutions, Shaping the future",
    images: ["/docovery_logo.svg"]
  },
  openGraph: {
    type: "website",
    title: "Docovery",
    images: ["/docovery_logo.svg"],
    description: "Building solutions, Shaping the future",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
