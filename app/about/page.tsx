import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { metrics, capabilities } from "@/lib/company";
import { contact, audiences } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Docovery, studio digital basé à Kinshasa : notre équipe, nos valeurs et les chiffres qui mesurent notre engagement envers l'excellence.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Construire des solutions, façonner l'avenir."
        description="Chez Docovery, nous combinons l'expertise technique avec une vision créative pour livrer des solutions qui transforment les entreprises et créent un impact durable dans le paysage digital."
        meta={
          <div className="flex items-center gap-2.5 rounded-full border border-line px-4 py-2">
            <MapPin className="size-4 text-accent" />
            <span className="text-sm text-ink-soft">{contact.office.full}</span>
          </div>
        }
      />

      {/* Story + office */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal y={24}>
              <h2 className="display text-[1.75rem] sm:text-[2.25rem]">
                Une équipe technique à Kinshasa, des projets sans frontières.
              </h2>
            </Reveal>

            <Reveal y={22} delay={0.08} className="mt-6 space-y-5">
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                Docovery est né d&apos;un constat simple : beaucoup
                d&apos;entreprises savent précisément ce qu&apos;elles veulent
                accomplir, mais peinent à trouver une équipe capable de le
                construire correctement — et de le maintenir ensuite.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                Nous intervenons sur des systèmes où l&apos;erreur coûte cher :
                paiements, données financières, plateformes SaaS en production.
                Cela impose une discipline particulière — du code revu, une
                architecture documentée, des déploiements réversibles et une
                traçabilité exploitable en audit.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                Basés à {contact.office.city}, nous travaillons avec des
                startups fintech, des éditeurs SaaS et des institutions
                financières, en local comme à distance.
              </p>
            </Reveal>

            <Reveal y={18} delay={0.14} className="mt-8 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft"
                >
                  {audience}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal y={30} delay={0.1} className="lg:col-span-5">
            <div className="relative aspect-4/3 overflow-hidden rounded-panel border border-line bg-surface">
              <Image
                src="/media/about-team.jpg"
                alt="L'équipe Docovery en session de travail"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.label}
                  className="flex items-center gap-3 rounded-card border border-line px-4 py-4"
                >
                  <capability.icon className="size-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-ink">
                    {capability.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-line bg-surface py-14">
        <div className="container-x">
          <Stagger className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} data-anim>
                <Counter
                  value={metric.value}
                  className="block text-[2.75rem] font-semibold tracking-[-0.04em] text-ink tabular-nums"
                />
                <p className="mt-1 text-sm font-medium text-ink">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {metric.caption}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <Values
        eyebrow="Nos valeurs"
        title="Quatre principes, appliqués sur chaque mission."
        description="Ce ne sont pas des slogans : ils déterminent la façon dont nous cadrons, construisons et livrons."
      />

      <Testimonials />

      <CTASection
        eyebrow="Travaillons ensemble"
        title="Envie d'en savoir plus sur notre façon de travailler ?"
        description="Prenez rendez-vous : nous vous montrerons concrètement comment nous cadrons un projet avant d'écrire la première ligne de code."
      />
    </>
  );
}
