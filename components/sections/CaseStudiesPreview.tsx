"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

/** Staggered card heights give the row its editorial rhythm (V2 mockup). */
const SHAPES = [
  "h-[20rem]",
  "h-[25rem]",
  "h-[21.25rem] lg:mt-[3.75rem]",
] as const;

export default function CaseStudiesPreview() {
  const root = useRef<HTMLElement>(null);
  const [viewport, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  // Cards rise in sequence the first time the row enters the viewport.
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-case]");
      if (prefersReducedMotion()) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: { trigger: "[data-case-row]", start: "top 82%", once: true },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="overflow-hidden bg-canvas pb-20 sm:pb-28 lg:pb-32">
      <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
        <SectionHeader
          eyebrow="Réalisations"
          title="Des systèmes qui tiennent la charge, la conformité et le temps."
          description="Missions fintech, SaaS et institutions financières, présentées de façon anonymisée."
          aside={
            <div className="mt-5 flex items-center gap-2.5">
              <Link
                href="/case-studies"
                className="mr-2 inline-flex min-h-11 items-center text-[0.9375rem] font-semibold text-accent underline underline-offset-4 transition-colors hover:text-brand"
              >
                Tous les dossiers
              </Link>
              <button
                type="button"
                onClick={() => embla?.scrollPrev()}
                aria-label="Dossier précédent"
                className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => embla?.scrollNext()}
                aria-label="Dossier suivant"
                className="grid size-11 place-items-center rounded-full bg-accent text-white transition-colors duration-300 hover:bg-accent-dark"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          }
        />

        <div
          ref={viewport}
          data-case-row
          className="-mx-5 overflow-hidden px-5 sm:mx-0 sm:px-0"
          aria-roledescription="carrousel"
        >
          <div className="-ml-5 flex touch-pan-y items-start">
            {caseStudies.map((study, index) => (
              <div
                key={study.slug}
                className="min-w-0 flex-[0_0_85%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                role="group"
                aria-roledescription="diapositive"
                aria-label={`${index + 1} sur ${caseStudies.length}`}
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  data-anim
                  data-case
                  className={cn(
                    "group relative block overflow-hidden rounded-[1.125rem] bg-[#12201f] text-white",
                    SHAPES[index % SHAPES.length],
                  )}
                >
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 400px"
                    className="img-zoom object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[rgb(7_18_17/0.9)] via-[rgb(7_18_17/0.25)] to-transparent transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <span className="absolute top-[1.125rem] left-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
                    {study.sector}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 grid size-10 translate-y-2 scale-75 place-items-center rounded-full bg-white text-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                  <span className="absolute inset-x-5 bottom-[1.125rem]">
                    <span className="block font-display text-[1.0625rem] leading-snug font-medium">
                      {study.title}
                    </span>
                    <span className="mt-2 block text-[0.8125rem] text-white/88">
                      <strong className="text-base font-semibold text-white">
                        {study.results[0].value}
                      </strong>{" "}
                      {study.results[0].label}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          {caseStudies.map((study, index) => (
            <span
              key={study.slug}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === selected ? "w-8 bg-accent" : "w-1.5 bg-line",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
