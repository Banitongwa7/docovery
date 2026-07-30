import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { Stagger } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Réalisations"
          title="Des systèmes qui tiennent la charge, la conformité et le temps."
          description="Missions fintech, SaaS et institutions financières, présentées de façon anonymisée."
          aside={
            <Link
              href="/case-studies"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              Tous les dossiers
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          }
        />

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {featured.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              data-anim
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-canvas transition-shadow duration-500 hover:shadow-[0_28px_60px_-40px_rgba(11,13,18,0.4)]"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-surface">
                <Image
                  src={study.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-canvas/90 px-3 py-1 text-[0.6875rem] font-medium text-ink backdrop-blur">
                  {study.sector}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{study.client}</p>
                <h3 className="mt-3 text-lg leading-snug font-semibold tracking-[-0.02em] text-ink">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>

                <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                  <div>
                    <span className="block text-2xl font-semibold tracking-[-0.03em] text-accent tabular-nums">
                      {study.results[0].value}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {study.results[0].label}
                    </span>
                  </div>
                  <ArrowUpRight className="size-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
              </div>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
