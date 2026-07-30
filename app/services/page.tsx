import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/services";
import { audiences } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import Process from "@/components/sections/Process";
import CTASection from "@/components/sections/CTASection";
import ProjectCTA from "@/components/ui/ProjectCTA";

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
        title={
          <>
            Huit domaines d&apos;expertise, un seul interlocuteur.
          </>
        }
        description="Des solutions complètes adaptées aux exigences techniques et opérationnelles de votre entreprise — de la première ligne de code jusqu'à l'exploitation en production."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <ProjectCTA />
            <a href="#developpement-web" className="btn-ghost btn-lg">
              Parcourir les services
            </a>
          </div>
        }
        meta={
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4">
            <div>
              <dt className="eyebrow">Services</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-[-0.03em] text-ink">
                08
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Garantie</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-[-0.03em] text-ink">
                100%
              </dd>
            </div>
          </dl>
        }
      />

      {/* Audience strip */}
      <section className="border-b border-line bg-surface py-6">
        <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="eyebrow">Pour qui</span>
          {audiences.map((audience) => (
            <span key={audience} className="text-sm text-ink-soft">
              {audience}
            </span>
          ))}
        </div>
      </section>

      {/* Detailed services */}
      <section className="bg-canvas">
        <div className="container-x">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 border-b border-line py-16 last:border-b-0 sm:py-20"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className="lg:col-span-4" y={24}>
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
                      <service.icon className="size-6" />
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {service.index}
                    </span>
                  </div>

                  <h2 className="display mt-6 text-[1.75rem] sm:text-[2.25rem]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.6875rem] text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <div className="lg:col-span-8">
                  <Reveal y={24} delay={0.08}>
                    <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                      {service.detail}
                    </p>
                  </Reveal>

                  <Stagger
                    className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2"
                    stagger={0.05}
                  >
                    {service.deliverables.map((deliverable) => (
                      <div
                        key={deliverable}
                        data-anim
                        className="flex items-start gap-3 bg-canvas px-5 py-4"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span className="text-sm text-ink-soft">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </Stagger>

                  <Reveal y={16} delay={0.12} className="mt-8">
                    <ProjectCTA
                      label={`Discuter d'un projet ${service.title.toLowerCase()}`}
                      service={service.title}
                      variant="ghost"
                      size="md"
                    />
                  </Reveal>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <CTASection
        eyebrow="Un besoin précis ?"
        title="Décrivez-nous votre contexte."
        description="Nous revenons vers vous sous 24h ouvrées avec une première lecture technique de votre projet et une estimation de charge."
      />
    </>
  );
}
