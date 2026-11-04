import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { privacyIntro, privacySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Comment Docovery collecte, utilise, partage et protège vos données personnelles, et comment exercer vos droits RGPD.",
  alternates: { canonical: "/privacy-policy" },
};

/** Rendered at build time so the date is stable for every visitor. */
const updatedAt = new Date().toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalDocument
        eyebrow="Confidentialité"
        title="Politique de confidentialité."
        intro={privacyIntro}
        sections={privacySections}
        updatedAt={updatedAt}
      />

    </>
  );
}
