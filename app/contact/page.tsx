import type { Metadata } from "next";
import { contact } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import ContactPanel from "@/components/contact/ContactPanel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Docovery à Kinshasa : email, téléphone, prise de rendez-vous et formulaire de projet. Réponse sous 24h ouvrées.",
  alternates: { canonical: "/contact" },
};

// V2 split layout: photo panel with every channel on the left, the form on
// the right. The footer stays compact here (see `footerCtas`).
export default function ContactPage() {
  return (
    <section className="bg-canvas px-3 pt-[4.75rem] pb-16 sm:px-4 sm:pb-24">
      <div className="mx-auto grid max-w-[88rem] gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <ContactPanel />

        <Reveal y={32} delay={0.2}>
          <ContactForm />
          <p className="mt-4 px-2 text-[0.8125rem] leading-relaxed text-muted">
            Nous recevons sur rendez-vous à {contact.office.city} et
            travaillons à distance. Fuseau {contact.office.timezone}, qui
            recouvre les heures ouvrées européennes et africaines.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
