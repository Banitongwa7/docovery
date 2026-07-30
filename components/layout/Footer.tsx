import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import {
  siteConfig,
  contact,
  socials,
  footerNav,
  links,
} from "@/lib/site";
import { brandIcons } from "@/components/ui/BrandIcons";
import NewsletterForm from "@/components/forms/NewsletterForm";
import ScrollToTop from "@/components/layout/ScrollToTop";

const year = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full blur-[140px]"
        style={{ background: "rgb(37 99 235 / 0.12)" }}
      />

      <div className="container-x relative">
        {/* Newsletter band */}
        <div className="grid gap-10 border-b border-night-line py-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="display text-[1.75rem] sm:text-[2.25rem]">
              Recevez nos analyses tech,
              <br />
              une fois par mois.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              Rejoignez notre communauté pour recevoir nos dernières actualités
              et conseils tech. Pas de spam, désinscription en un clic.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Main columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-[1.35rem] font-semibold tracking-[-0.04em] text-white"
            >
              Docovery<span className="text-accent">.</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {siteConfig.motto}. Nous transformons vos idées les plus
              ambitieuses en réalité digitale performante et scalable.
            </p>

            <div className="mt-7 flex gap-2">
              {socials.map((social) => {
                const Icon =
                  brandIcons[social.label as keyof typeof brandIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-night-line text-white/55 transition-all duration-300 hover:border-white/25 hover:text-white"
                  >
                    {Icon ? <Icon className="size-4" /> : social.label}
                  </a>
                );
              })}
            </div>
          </div>

          {footerNav.map((column) => (
            <nav key={column.title} className="lg:col-span-2" aria-label={column.title}>
              <h3 className="eyebrow text-white/40">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-2">
            <h3 className="eyebrow text-white/40">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/55 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a
                  href={`tel:${contact.phone.value}`}
                  className="text-white/55 transition-colors hover:text-white"
                >
                  {contact.phone.label}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-white/55">{contact.office.label}</span>
              </li>
            </ul>

            <a
              href={links.meeting}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white"
            >
              Prendre rendez-vous
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Legal line */}
        <div className="flex flex-col gap-4 border-t border-night-line py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year()} Docovery. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-white"
            >
              Conditions d&apos;Utilisation
            </Link>
            <span>{contact.office.full}</span>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
