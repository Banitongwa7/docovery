import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import {
  caseStudies,
  getCaseStudy,
  caseStudiesDisclaimer,
} from "@/lib/case-studies";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Counter from "@/components/motion/Counter";
import CTASection from "@/components/sections/CTASection";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return { title: "Dossier introuvable" };

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [study.image],
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const others = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-canvas pt-32 pb-14 sm:pt-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 grid-lines-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="container-x relative">
          <Reveal y={12} duration={0.6}>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Toutes les réalisations
            </Link>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.6875rem] font-medium text-accent">
              {study.sector}
            </span>
            <span className="font-mono text-xs text-muted">{study.year}</span>
            <span className="text-muted/40" aria-hidden="true">
              ·
            </span>
            <span className="font-mono text-xs text-muted">
              {study.duration}
            </span>
          </div>

          <SplitHeading
            as="h1"
            className="display mt-6 max-w-4xl text-[2.25rem] leading-[1.02] sm:text-[3.25rem]"
          >
            {study.title}
          </SplitHeading>

          <Reveal y={20} delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              {study.summary}
            </p>
          </Reveal>

          <Reveal
            y={20}
            delay={0.18}
            className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3"
          >
            <div>
              <p className="eyebrow">Client</p>
              <p className="mt-2 text-sm text-ink">{study.client}</p>
            </div>
            <div>
              <p className="eyebrow">Périmètre</p>
              <p className="mt-2 text-sm text-ink">{study.scope.join(" · ")}</p>
            </div>
            <div>
              <p className="eyebrow">Stack</p>
              <p className="mt-2 text-sm text-ink">{study.stack.join(" · ")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-canvas pt-12">
        <div className="container-x">
          <Reveal y={30}>
            <div className="relative aspect-16/9 overflow-hidden rounded-panel border border-line bg-surface sm:aspect-21/9">
              <Image
                src={study.image}
                alt=""
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-x">
          <Stagger className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {study.results.map((result) => (
              <div key={result.label} data-anim className="bg-canvas px-6 py-8">
                <Counter
                  value={result.value}
                  className="block text-[2.25rem] font-semibold tracking-[-0.04em] text-ink tabular-nums"
                />
                <p className="mt-2 text-sm text-muted">{result.label}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Challenge + approach */}
      <section className="bg-canvas pb-16 sm:pb-20">
        <div className="container-x">
          <div className="grid gap-12 border-t border-line pt-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4" y={24}>
              <h2 className="display text-[1.75rem] sm:text-[2rem]">
                Le point de départ
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-8" y={24} delay={0.08}>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                {study.challenge}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 border-t border-line pt-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4" y={24}>
              <h2 className="display text-[1.75rem] sm:text-[2rem]">
                Notre approche
              </h2>
            </Reveal>

            <Stagger className="space-y-px lg:col-span-8">
              {study.approach.map((step, index) => (
                <div
                  key={step.title}
                  data-anim
                  className="flex gap-6 border-b border-line py-7 first:pt-0 last:border-b-0"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </Stagger>
          </div>

          <Reveal
            y={16}
            className="mt-14 flex items-start gap-3 rounded-card border border-line bg-surface px-5 py-4"
          >
            <Info className="mt-0.5 size-4 shrink-0 text-muted" />
            <p className="text-sm leading-relaxed text-muted">
              {caseStudiesDisclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Next studies */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-x">
          <h2 className="eyebrow">Autres dossiers</h2>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                data-anim
                className="group flex items-start justify-between gap-6 rounded-card border border-line bg-canvas p-7 transition-colors hover:border-ink/20"
              >
                <div>
                  <span className="eyebrow">{item.sector}</span>
                  <h3 className="mt-3 text-lg leading-snug font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </Link>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Projet similaire ?"
        title="Discutons de votre contexte."
        description="Nous commençons toujours par comprendre votre métier avant de proposer une architecture."
      />
    </>
  );
}
