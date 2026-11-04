import type { Metadata } from "next";
import { Info } from "lucide-react";
import { caseStudies, caseStudiesDisclaimer } from "@/lib/case-studies";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import CaseStudiesExplorer from "@/components/case-studies/CaseStudiesExplorer";

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
        image="/media/v2/abstrait-vert-soie.jpg"
        title="Des cas concrets, du cadrage à la production."
        description="Chaque dossier décrit le problème rencontré, les décisions techniques prises et ce qui a changé une fois la plateforme en service."
        meta={
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4">
            <div>
              <dt className="eyebrow">Dossiers</dt>
              <dd className="mt-1 font-display text-3xl font-medium text-accent tabular-nums">
                {String(caseStudies.length).padStart(2, "0")}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Secteurs</dt>
              <dd className="mt-1 font-display text-3xl font-medium text-accent">
                04
              </dd>
            </div>
          </dl>
        }
      />

      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
          <Reveal
            y={16}
            className="mb-8 flex items-start gap-3 rounded-2xl bg-surface px-5 py-4"
          >
            <Info className="mt-0.5 size-4 shrink-0 text-muted" />
            <p className="text-sm leading-relaxed text-muted">
              {caseStudiesDisclaimer}
            </p>
          </Reveal>

          <CaseStudiesExplorer />
        </div>
      </section>

    </>
  );
}
