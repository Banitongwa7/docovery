import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

// The closing call-to-action ("Prêt à transformer votre entreprise ?") lives
// in the green footer band — see `footerCtas` in lib/site.ts.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesGrid />
      <Process />
      <CaseStudiesPreview />
      <Values />
      <Testimonials />
    </>
  );
}
