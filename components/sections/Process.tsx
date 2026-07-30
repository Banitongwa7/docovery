"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { processSteps } from "@/lib/company";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCTA from "@/components/ui/ProjectCTA";

/**
 * "Notre processus, clair et transparent."
 * A vertical rail whose progress line draws itself as the section scrolls —
 * the one place on the page where scrubbed motion earns its keep.
 */
export default function Process() {
  const root = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", root.current);

      if (prefersReducedMotion()) {
        gsap.set(steps, { opacity: 1, y: 0 });
        gsap.set(rail.current, { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        rail.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.5,
          },
        },
      );

      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            scrollTrigger: { trigger: step, start: "top 85%", once: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Notre méthode"
          title="Notre processus, clair et transparent."
          description="Cinq étapes, des livrables identifiés et une visibilité permanente sur l'avancement. Vous savez toujours où en est votre projet."
        />

        <div ref={root} className="relative">
          {/* Rail */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.9375rem] w-px bg-line md:left-[7.5rem]"
          />
          <span
            ref={rail}
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.9375rem] w-px origin-top scale-y-0 bg-accent md:left-[7.5rem]"
          />

          <ol className="space-y-px">
            {processSteps.map((step) => (
              <li
                key={step.index}
                data-step
                data-anim
                className="relative grid gap-x-10 gap-y-3 py-8 pl-11 md:grid-cols-[7.5rem_1fr] md:pl-0"
              >
                <div className="md:pr-10 md:text-right">
                  <span className="absolute top-9 left-[0.5625rem] size-[0.875rem] rounded-full border-2 border-accent bg-canvas md:left-[7.0625rem]" />
                  <span className="font-mono text-xs tracking-[0.1em] text-muted">
                    {step.duration}
                  </span>
                </div>

                <div className="md:pl-10">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {step.index}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[0.9375rem] text-muted">
            Chaque étape est cadrée par écrit avant de commencer. Pas d&apos;effet
            tunnel, pas de mauvaise surprise en fin de projet.
          </p>
          <ProjectCTA label="Cadrer mon projet" size="md" />
        </div>
      </div>
    </section>
  );
}
