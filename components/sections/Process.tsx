"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { processSteps } from "@/lib/company";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCTA from "@/components/ui/ProjectCTA";
import { Reveal } from "@/components/motion/Reveal";

/**
 * "Notre processus, clair et transparent." — five grey cards. A teal rail
 * draws itself across them as the section scrolls, and each step's number
 * lights up as the rail reaches it.
 */
export default function Process() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-step]");
      const dots = gsap.utils.toArray<HTMLElement>("[data-step-dot]");

      if (prefersReducedMotion()) {
        gsap.set(cards, { opacity: 1, y: 0 });
        gsap.set("[data-rail]", { scaleX: 1 });
        return;
      }

      gsap.fromTo(
        cards,
        { opacity: 0, y: 48, rotateX: -12 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        },
      );

      const progress = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      });
      progress.fromTo("[data-rail]", { scaleX: 0 }, { scaleX: 1, ease: "none", duration: dots.length }, 0);
      dots.forEach((dot, index) => {
        progress.fromTo(
          dot,
          { backgroundColor: "#d9e3e1", color: "#0a4d47" },
          { backgroundColor: "#0a4d47", color: "#ffffff", duration: 0.3 },
          index,
        );
      });
    },
    { scope: root },
  );

  return (
    <section className="bg-canvas pb-20 sm:pb-28 lg:pb-32">
      <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
        <SectionHeader
          eyebrow="Notre méthode"
          title="Notre processus, clair et transparent."
          description="Cinq étapes, des livrables identifiés et une visibilité permanente sur l'avancement. Vous savez toujours où en est votre projet."
        />

        <div ref={root} className="relative [perspective:1200px]">
          {/* Progress rail (desktop) */}
          <span
            aria-hidden="true"
            className="absolute top-[2.4rem] right-[10%] left-[10%] hidden h-0.5 rounded-full bg-line lg:block"
          />
          <span
            data-rail
            aria-hidden="true"
            className="absolute top-[2.4rem] right-[10%] left-[10%] hidden h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent to-brand lg:block"
          />

          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li
                key={step.index}
                data-step
                data-anim
                className="group rounded-[1.125rem] bg-surface p-[1.375rem] transition-[background-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:bg-canvas hover:shadow-[0_24px_48px_-28px_rgba(10,77,71,0.45),0_0_0_1px_var(--color-line)]"
              >
                <span className="flex items-center justify-between gap-2">
                  <span
                    data-step-dot
                    className="relative z-10 grid size-[2.125rem] place-items-center rounded-full bg-accent font-display text-[0.8125rem] font-medium text-white"
                  >
                    {step.index}
                  </span>
                  <span className="text-xs font-semibold text-accent">
                    {step.duration}
                  </span>
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/90">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <Reveal
          y={16}
          className="mt-5 flex flex-col items-start gap-4 rounded-[1.25rem] border border-line px-6 py-[1.125rem] sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[38.75rem] text-[0.9375rem] leading-relaxed text-ink-soft">
            Chaque étape est cadrée par écrit avant de commencer. Pas d&apos;effet
            tunnel, pas de mauvaise surprise en fin de projet.
          </p>
          <ProjectCTA label="Cadrer mon projet" size="md" className="shine" />
        </Reveal>
      </div>
    </section>
  );
}
