import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import CTASection from "@/components/sections/CTASection";
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

      <CTASection
        eyebrow="Des questions ?"
        title="Nous répondons à vos demandes sur vos données."
        description="Si vous avez des questions concernant notre politique de confidentialité, n'hésitez pas à nous contacter."
      />
    </>
  );
}
