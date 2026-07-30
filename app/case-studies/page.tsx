import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { caseStudies, caseStudiesDisclaimer } from "@/lib/case-studies";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Dossiers fintech, SaaS et institutions financières : comment Docovery conçoit des plateformes qui tiennent la charge, la conformité et le temps.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des cas concrets, du cadrage à la production."
        description="Chaque dossier décrit le problème rencontré, les décisions techniques prises et ce qui a changé une fois la plateforme en service."
        meta={
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4">
            <div>
              <dt className="eyebrow">Dossiers</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-[-0.03em] text-ink tabular-nums">
                {String(caseStudies.length).padStart(2, "0")}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Secteurs</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-[-0.03em] text-ink">
                04
              </dd>
            </div>
          </dl>
        }
      />

      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-x">
          <Reveal
            y={16}
            className="mb-12 flex items-start gap-3 rounded-card border border-line bg-surface px-5 py-4"
          >
            <Info className="mt-0.5 size-4 shrink-0 text-muted" />
            <p className="text-sm leading-relaxed text-muted">
              {caseStudiesDisclaimer}
            </p>
          </Reveal>

          <Stagger className="space-y-6" stagger={0.1}>
            {caseStudies.map((study, index) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                data-anim
                className="group grid overflow-hidden rounded-panel border border-line bg-canvas transition-shadow duration-500 hover:shadow-[0_32px_70px_-46px_rgba(11,13,18,0.45)] lg:grid-cols-2"
              >
                <div
                  className={`relative aspect-16/10 overflow-hidden bg-surface lg:aspect-auto lg:min-h-[24rem] ${
                    index % 2 === 1 ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted">
                        {study.index}
                      </span>
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.6875rem] font-medium text-accent">
                        {study.sector}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {study.year}
                      </span>
                    </div>

                    <p className="mt-6 text-sm text-muted">{study.client}</p>
                    <h2 className="display mt-2 text-[1.5rem] leading-snug sm:text-[1.875rem]">
                      {study.title}
                    </h2>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                      {study.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.scope.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line px-3 py-1 text-[0.6875rem] text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex items-end justify-between gap-6 border-t border-line pt-6">
                    <dl className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
                      {study.results.slice(0, 3).map((result) => (
                        <div key={result.label}>
                          <dt className="sr-only">{result.label}</dt>
                          <dd>
                            <span className="block text-xl font-semibold tracking-[-0.03em] text-ink tabular-nums">
                              {result.value}
                            </span>
                            <span className="mt-0.5 block text-[0.6875rem] leading-tight text-muted">
                              {result.label}
                            </span>
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <ArrowUpRight className="size-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Votre projet"
        title="Le prochain dossier peut être le vôtre."
        description="Décrivez-nous votre contexte : nous vous dirons honnêtement si nous sommes la bonne équipe pour le construire."
      />
    </>
  );
}
