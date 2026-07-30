import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, CalendarCheck } from "lucide-react";
import { contact, links } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Docovery à Kinshasa : email, téléphone, prise de rendez-vous et formulaire de projet. Réponse sous 24h ouvrées.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    value: contact.email,
    caption: contact.hours.responseTime,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: contact.phone.label,
    caption: contact.hours.weekdays,
    href: `tel:${contact.phone.value}`,
  },
  {
    icon: MapPin,
    title: "Bureau",
    value: contact.office.label,
    caption: contact.office.timezone,
  },
  {
    icon: Clock,
    title: "Horaires",
    value: contact.hours.weekdays,
    caption: contact.hours.weekend,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Donnons vie à votre projet."
        description="Notre équipe est là pour vous accompagner dans votre transformation digitale. Parlons ensemble de vos besoins et de vos objectifs."
        meta={
          <a
            href={links.meeting}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark btn-lg group"
          >
            <CalendarCheck className="size-4" />
            Réserver un créneau
          </a>
        }
      />

      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Channels */}
          <div className="lg:col-span-4">
            <Stagger className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel) => (
                <div key={channel.title} data-anim className="bg-canvas p-6">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <channel.icon className="size-4.5" />
                  </span>

                  <p className="eyebrow mt-5">{channel.title}</p>

                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="mt-2 block text-[0.9375rem] font-medium text-ink transition-colors hover:text-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-[0.9375rem] font-medium text-ink">
                      {channel.value}
                    </p>
                  )}

                  {channel.caption && (
                    <p className="mt-1 text-xs text-muted">{channel.caption}</p>
                  )}
                </div>
              ))}
            </Stagger>

            <Reveal
              y={20}
              delay={0.1}
              className="mt-6 rounded-card border border-line bg-surface p-6"
            >
              <h2 className="text-[0.9375rem] font-semibold text-ink">
                Vous préférez en parler de vive voix ?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Réservez directement un créneau de 30 minutes dans l&apos;agenda
                de l&apos;équipe — sans engagement.
              </p>
              <a
                href={links.meeting}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-md mt-5 w-full"
              >
                <CalendarCheck className="size-4" />
                Prendre rendez-vous
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal y={28} className="lg:col-span-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Office band */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal y={24}>
            <span className="eyebrow">Notre bureau</span>
            <h2 className="display mt-5 text-[1.75rem] sm:text-[2.25rem]">
              {contact.office.city}, {contact.office.country}.
            </h2>
            <p className="mt-4 max-w-lg text-[1.0625rem] leading-relaxed text-muted text-pretty">
              Nous recevons sur rendez-vous et travaillons à distance avec des
              clients hors de la RD Congo. Le fuseau {contact.office.timezone}{" "}
              recouvre les heures ouvrées européennes et africaines.
            </p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Jours ouvrés</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">
                  {contact.hours.weekdays}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Week-end</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">
                  {contact.hours.weekend}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal y={28} delay={0.1}>
            <div className="relative overflow-hidden rounded-panel bg-night p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute inset-0 grid-lines" />
              <div className="relative">
                <MapPin className="size-6 text-accent" />
                <p className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
                  {contact.office.full}
                </p>
                <p className="mt-3 text-sm text-white/50">
                  {contact.office.timezone}
                </p>

                <div className="mt-8 flex flex-col gap-3 border-t border-night-line pt-6 sm:flex-row">
                  <a
                    href={`mailto:${contact.email}`}
                    className="btn-invert btn-md"
                  >
                    <Mail className="size-4" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.value}`}
                    className="btn btn-md border border-night-line text-white hover:bg-white/5"
                  >
                    <Phone className="size-4" />
                    {contact.phone.label}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
