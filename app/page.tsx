import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesGrid />
      <Process />
      <CaseStudiesPreview />
      <Values className="bg-canvas pb-20 sm:pb-28" />
      <Testimonials />
      <CTASection />
    </>
  );
}
