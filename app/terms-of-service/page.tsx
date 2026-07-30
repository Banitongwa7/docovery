import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import CTASection from "@/components/sections/CTASection";
import { termsIntro, termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation",
  description:
    "Les conditions d'utilisation du site et des services Docovery : services fournis, obligations, propriété intellectuelle, garanties et droit applicable.",
  alternates: { canonical: "/terms-of-service" },
};

/** Rendered at build time so the date is stable for every visitor. */
const updatedAt = new Date().toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function TermsOfServicePage() {
  return (
    <>
      <LegalDocument
        eyebrow="Conditions légales"
        title="Conditions d'utilisation."
        intro={termsIntro}
        sections={termsSections}
        updatedAt={updatedAt}
      />

      <CTASection
        eyebrow="Besoin de clarifications ?"
        title="Nous restons disponibles pour vos questions."
        description="Pour toute question concernant ces conditions d'utilisation, notre équipe vous répond sous 24h ouvrées."
      />
    </>
  );
}
