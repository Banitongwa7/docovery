"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { contact, socials, footerNav, footerCtas, links } from "@/lib/site";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import NewsletterForm from "@/components/forms/NewsletterForm";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SplitHeading from "@/components/motion/SplitHeading";
import ProjectCTA from "@/components/ui/ProjectCTA";
import { LogoMark } from "@/components/ui/Logo";

const year = new Date().getFullYear();

function ctaFor(pathname: string) {
  const match = footerCtas
    .filter(({ prefix }) =>
      prefix === "/" ? true : pathname === prefix || pathname.startsWith(prefix),
    )
    .sort((a, b) => b.prefix.length - a.prefix.length)[0];
  return match?.cta ?? null;
}

const company = footerNav.find((column) => column.title === "Entreprise");
const expertise = footerNav.find((column) => column.title === "Expertise");

export default function Footer() {
  const pathname = usePathname();
  const cta = ctaFor(pathname);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const band = root.current?.querySelector<HTMLElement>("[data-band]");
      const card = root.current?.querySelector<HTMLElement>("[data-card]");
      if (!band || !card || prefersReducedMotion()) return;

      // The green band "opens" from a narrower rounded shape as it arrives…
      gsap.fromTo(
        band,
        { clipPath: "inset(4% 3% 0% 3% round 40px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          ease: "none",
          scrollTrigger: {
            trigger: band,
            start: "top bottom",
            end: "top 35%",
            scrub: 0.6,
          },
        },
      );

      // …and the white card rises into place inside it.
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 92%", once: true },
      });

      gsap.from("[data-orb]", {
        scale: 0.6,
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: band, start: "top 80%", once: true },
      });
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <footer
      ref={root}
      id="pied-de-page"
      className="bg-canvas px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div
        data-band
        className="relative mx-auto max-w-[88rem] overflow-hidden rounded-panel bg-accent text-white"
      >
        {/* Ambient light — two soft orbs drifting behind the content */}
        <div
          aria-hidden="true"
          data-orb
          className="orb pointer-events-none absolute -top-48 -left-32 size-[34rem] rounded-full bg-brand/35 blur-[120px]"
        />
        <div
          aria-hidden="true"
          data-orb
          className="orb orb-slow pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-mint/20 blur-[120px]"
        />

        <div
          className={
            cta
              ? "relative px-4 pt-16 pb-4 sm:px-8 sm:pt-24 sm:pb-8 lg:px-10"
              : "relative p-4 sm:p-8 lg:p-10"
          }
        >
          {cta && (
            <div className="mx-auto max-w-3xl text-center">
              {cta.eyebrow && <p className="eyebrow-invert">{cta.eyebrow}</p>}
              <SplitHeading
                key={pathname}
                as="h2"
                trigger="scroll"
                className="display mx-auto mt-3.5 text-[2rem] text-white text-balance sm:text-[2.75rem]"
              >
                {cta.title}
              </SplitHeading>
              {cta.description && (
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 text-pretty">
                  {cta.description}
                </p>
              )}
              <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row">
                <ProjectCTA label="Démarrer un projet" variant="invert" />
                <Link href="/contact" className="btn-outline-invert btn-lg">
                  Nous contacter
                </Link>
              </div>
            </div>
          )}

          <div
            data-card
            className={
              cta
                ? "mx-auto mt-16 max-w-[74rem] rounded-[1.25rem] bg-canvas p-6 text-ink sm:p-10"
                : "mx-auto max-w-[74rem] rounded-[1.25rem] bg-canvas p-6 text-ink sm:p-10"
            }
          >
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <Link
                  href="/"
                  aria-label="Docovery — Accueil"
                  className="inline-flex items-center gap-2.5 text-accent"
                >
                  <LogoMark className="h-6" />
                  <span className="font-display text-xl font-semibold tracking-[0.03em]">
                    DOCOVERY
                  </span>
                </Link>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted">
                  Studio logiciel basé à {contact.office.label}.
                </p>
                <p className="mt-4 flex flex-col gap-1 text-sm">
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-underline w-fit"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.value}`}
                    className="link-underline w-fit"
                  >
                    {contact.phone.label}
                  </a>
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="font-display text-lg font-medium">
                  Recevez nos analyses tech, une fois par mois.
                </p>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                  Rejoignez notre communauté pour recevoir nos dernières
                  actualités et conseils tech. Pas de spam, désinscription en
                  un clic.
                </p>
                <div className="mt-4">
                  <NewsletterForm tone="light" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:col-span-2 lg:col-span-5">
                {company && (
                  <nav aria-label={company.title}>
                    <p className="text-[0.8125rem] font-semibold text-accent">
                      {company.title}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {company.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="link-underline">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                {expertise && (
                  <nav aria-label={expertise.title}>
                    <p className="text-[0.8125rem] font-semibold text-accent">
                      {expertise.title}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {expertise.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="link-underline">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                <nav aria-label="Réseaux sociaux">
                  <p className="text-[0.8125rem] font-semibold text-accent">
                    Suivez-nous
                  </p>
                  <ul className="mt-3 space-y-2">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={links.meeting}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 whitespace-nowrap font-medium text-accent"
                      >
                        Rendez-vous
                        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
              <span>Copyright © {year} Docovery. Tous droits réservés.</span>
              <span className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-accent"
                >
                  Confidentialité
                </Link>
                <span aria-hidden="true">|</span>
                <Link
                  href="/terms-of-service"
                  className="transition-colors hover:text-accent"
                >
                  Conditions d&apos;utilisation
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
