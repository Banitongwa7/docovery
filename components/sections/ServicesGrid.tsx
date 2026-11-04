"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/services";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Reveal } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

const left = services.slice(0, 4);
const right = services.slice(4, 8);

/**
 * "Une gamme complète de services" — eight expertises orbiting one photo.
 * The photo rises out of a pill-shaped mask while the two columns slide in
 * from either side; hovering an item pulls its chevron toward the photo.
 */
export default function ServicesGrid() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const photo = root.current?.querySelector("[data-photo]");
      const fromLeft = gsap.utils.toArray<HTMLElement>("[data-side='left']");
      const fromRight = gsap.utils.toArray<HTMLElement>("[data-side='right']");
      if (!photo) return;

      if (prefersReducedMotion()) {
        gsap.set([photo, ...fromLeft, ...fromRight], { opacity: 1 });
        return;
      }

      const trigger = { trigger: photo, start: "top 80%", once: true };

      gsap.fromTo(
        photo,
        { opacity: 1, clipPath: "inset(30% 22% 30% 22% round 999px)", y: 40 },
        {
          clipPath: "inset(0% 0% 0% 0% round 18px)",
          y: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: trigger,
        },
      );
      gsap.fromTo(
        fromLeft,
        { opacity: 0, x: -48 },
        { opacity: 1, x: 0, duration: 0.9, stagger: 0.08, ease: "power3.out", delay: 0.25, scrollTrigger: trigger },
      );
      gsap.fromTo(
        fromRight,
        { opacity: 0, x: 48 },
        { opacity: 1, x: 0, duration: 0.9, stagger: 0.08, ease: "power3.out", delay: 0.25, scrollTrigger: trigger },
      );

      // Gentle parallax inside the photo.
      gsap.fromTo(
        "[data-photo] img",
        { yPercent: -6, scale: 1.12 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: photo, start: "top bottom", end: "bottom top", scrub: 0.6 },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-canvas pb-20 sm:pb-28 lg:pb-32">
      <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
        <div className="mx-auto max-w-[42.5rem] text-center">
          <Reveal y={12} duration={0.6}>
            <p className="eyebrow">Nos services</p>
          </Reveal>
          <SplitHeading
            as="h2"
            trigger="scroll"
            className="display mt-3 text-[2rem] text-ink text-balance sm:text-[2.75rem]"
          >
            Une gamme complète de services informatiques professionnels.
          </SplitHeading>
          <Reveal y={16} delay={0.1}>
            <p className="mx-auto mt-4 max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink-soft/90">
              Des solutions complètes adaptées aux exigences techniques et
              opérationnelles de votre entreprise.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          <ul className="order-2 flex max-w-[22.5rem] flex-[1_1_17.5rem] flex-col gap-5 lg:order-1">
            {left.map((service) => (
              <li key={service.slug} data-anim data-side="left">
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex items-start gap-3.5 lg:flex-row-reverse lg:text-right"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-[1.375rem] shrink-0 place-items-center rounded-full bg-accent text-white transition-[transform,background-color] duration-500 group-hover:bg-brand lg:group-hover:translate-x-1.5"
                  >
                    <ChevronRight className="size-3 stroke-[3.2]" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] leading-normal text-muted">
                      {service.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            data-anim
            data-photo
            className="relative order-1 h-[22rem] w-full max-w-[19rem] flex-[0_1_19rem] overflow-hidden rounded-[1.125rem] bg-surface-2 sm:h-[26.25rem] lg:order-2"
          >
            <Image
              src="/media/v2/macbook-sarcelle.jpg"
              alt="MacBook à la coque sarcelle"
              fill
              sizes="304px"
              className="object-cover object-[70%_center]"
            />
          </div>

          <ul className="order-3 flex max-w-[22.5rem] flex-[1_1_17.5rem] flex-col gap-5">
            {right.map((service) => (
              <li key={service.slug} data-anim data-side="right">
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex items-start gap-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-[1.375rem] shrink-0 place-items-center rounded-full bg-accent text-white transition-[transform,background-color] duration-500 group-hover:bg-brand lg:group-hover:-translate-x-1.5"
                  >
                    <ChevronLeft className="hidden size-3 stroke-[3.2] lg:block" />
                    <ChevronRight className="size-3 stroke-[3.2] lg:hidden" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] leading-normal text-muted">
                      {service.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Reveal y={14} className="mt-10 text-center">
          <Link
            href="/services"
            className="btn-ghost btn-md border-ink hover:border-accent"
          >
            Voir toute l&apos;expertise
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
