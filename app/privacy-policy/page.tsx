import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import LegalDocument from "@/components/legal/LegalDocument";
import { privacyIntro, privacySections } from "@/lib/legal";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description:
    "Comment Docovery collecte, utilise, partage et protège vos données personnelles, et comment exercer vos droits RGPD.",
  path: "/privacy-policy",
});

/** Rendered at build time so the date is stable for every visitor. */
const updatedAt = new Date().toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Politique de confidentialité", path: "/privacy-policy" }])} />
      <LegalDocument
        title="Politique de confidentialité."
        intro={privacyIntro}
        sections={privacySections}
        updatedAt={updatedAt}
      />

    </>
  );
}
