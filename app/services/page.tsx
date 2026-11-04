import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  services,
  engagementModels,
  engagementIncluded,
  servicesFaq,
} from "@/lib/services";
import { audiences } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import Process from "@/components/sections/Process";
import ProjectCTA from "@/components/ui/ProjectCTA";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web et mobile, cloud, bases de données, sécurité, IA, formation et maintenance : l'expertise complète de Docovery pour les startups fintech, plateformes SaaS et institutions financières.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Huit expertises, une seule équipe."
        description="De la première ligne de code jusqu'à l'exploitation en production, pour les startups fintech, les éditeurs SaaS et les institutions financières."
        image="/media/v2/abstrait-vert-courbe.jpg"
        actions={
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <ProjectCTA label="Démarrer un projet" className="shine" />
            <a href="#modeles-engagement" className="btn-ghost btn-lg">
              Voir les modèles d&apos;engagement
            </a>
          </div>
        }
        meta={
          <ul className="flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink"
              >
                {audience}
              </li>
            ))}
          </ul>
        }
      />

      {/* Service cards */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
          <Stagger
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.07}
            y={40}
          >
            {services.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                data-anim
                className="group flex scroll-mt-28 flex-col gap-4 rounded-[1.25rem] bg-surface p-3 transition-[background-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:bg-canvas hover:shadow-[0_24px_48px_-28px_rgba(10,77,71,0.45),0_0_0_1px_var(--color-line)]"
              >
                <div className="relative h-[11.25rem] overflow-hidden rounded-[0.875rem] bg-line">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 290px"
                    className="img-zoom object-cover"
                  />
                  <span className="absolute top-3 left-3 grid size-9 place-items-center rounded-full bg-canvas/90 text-accent backdrop-blur">
                    <service.icon className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-2.5 pb-3">
                  <h2 className="font-display text-[1.3125rem] leading-tight font-medium text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft/90">
                    {service.description}
                  </p>
                  <ul className="mt-3.5 flex flex-col gap-[0.4375rem]">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-[7px] shrink-0 rounded-full bg-brand"
                        />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3.5 text-[0.8125rem] text-muted">
                    Stack : {service.stack.join(", ")}
                  </p>
                  <div className="mt-auto pt-4">
                    <ProjectCTA
                      label="En parler"
                      service={service.title}
                      variant="ghost"
                      size="md"
                      className="w-full"
                    />
                  </div>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Engagement models */}
      <section
        id="modeles-engagement"
        className="scroll-mt-24 bg-canvas pb-20 sm:pb-28"
      >
        <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
          <SectionHeader
            eyebrow="Modèles d'engagement"
            title="Trois façons de travailler avec nous."
            description="Choisissez selon l'avancement de votre projet. Vous pouvez commencer par un cadrage, puis enchaîner développement et maintenance avec la même équipe."
          />

          <Stagger className="grid items-stretch gap-4 lg:grid-cols-3" y={50}>
            {engagementModels.map((model) => {
              const dark = Boolean(model.featured);
              return (
                <article
                  key={model.title}
                  data-anim
                  className={cn(
                    "flex flex-col rounded-panel p-7 transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5",
                    dark
                      ? "bg-accent text-white shadow-[0_30px_60px_-30px_rgba(10,77,71,0.8)]"
                      : "bg-surface text-ink hover:shadow-[0_24px_48px_-28px_rgba(10,77,71,0.45)]",
                  )}
                >
                  <span
                    className={cn(
                      "self-start rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium",
                      dark ? "bg-white/14 text-white" : "bg-canvas text-accent",
                    )}
                  >
                    {model.moment}
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-tight font-medium">
                    {model.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-[0.9375rem] leading-relaxed",
                      dark ? "text-white/82" : "text-ink-soft/90",
                    )}
                  >
                    {model.description}
                  </p>
                  <div
                    className={cn(
                      "mt-6 border-y py-[1.125rem]",
                      dark ? "border-white/22" : "border-line",
                    )}
                  >
                    <p className="font-display text-2xl font-medium">
                      {model.price}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-sm",
                        dark ? "text-white/82" : "text-ink-soft/90",
                      )}
                    >
                      {model.unit}
                    </p>
                  </div>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {model.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[0.9375rem] leading-normal"
                      >
                        <Check
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 size-4 shrink-0 stroke-[2.4]",
                            dark ? "text-mint" : "text-brand",
                          )}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ProjectCTA
                    label={model.cta}
                    service={model.service}
                    variant={dark ? "invert" : "primary"}
                    className="shine mt-7 w-full"
                  />
                </article>
              );
            })}
          </Stagger>

          <Reveal
            y={16}
            className="mt-4 flex flex-col gap-3 rounded-[1.25rem] border border-line px-6 py-[1.125rem] lg:flex-row lg:items-center lg:gap-8"
          >
            <p className="shrink-0 font-display text-base font-medium text-ink">
              Inclus dans tous les modèles
            </p>
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-ink-soft">
              {engagementIncluded.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 stroke-[2.4] text-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Process />

      {/* FAQ */}
      <section className="bg-canvas pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-[77.5rem] gap-10 px-5 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <Reveal y={12} duration={0.6}>
              <p className="eyebrow">FAQ</p>
            </Reveal>
            <Reveal y={18} delay={0.05}>
              <h2 className="display mt-3 text-[2rem] text-ink sm:text-[2.5rem]">
                Questions fréquentes
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft/90">
                Une autre question ? L&apos;équipe technique vous répond sous
                24h ouvrées.
              </p>
              <Link href="/contact" className="btn-ghost btn-md mt-6">
                Nous écrire
              </Link>
            </Reveal>
          </div>
          <Reveal y={24} delay={0.1}>
            <FaqAccordion items={servicesFaq} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
