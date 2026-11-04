import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import LegalDocument from "@/components/legal/LegalDocument";
import { termsIntro, termsSections } from "@/lib/legal";

export const metadata: Metadata = pageMetadata({
  title: "Conditions d'utilisation",
  description:
    "Les conditions d'utilisation du site et des services Docovery : services fournis, obligations, propriété intellectuelle, garanties et droit applicable.",
  path: "/terms-of-service",
});

/** Rendered at build time so the date is stable for every visitor. */
const updatedAt = new Date().toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Conditions d'utilisation", path: "/terms-of-service" }])} />
      <LegalDocument
        title="Conditions d'utilisation."
        intro={termsIntro}
        sections={termsSections}
        updatedAt={updatedAt}
      />

    </>
  );
}
