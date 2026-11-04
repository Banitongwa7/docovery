"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/lib/gsap";
import SplitHeading from "@/components/motion/SplitHeading";
import ProjectCTA from "@/components/ui/ProjectCTA";
import { audiences } from "@/lib/site";

/**
 * V2 hero — an inset, rounded photo panel with the headline sitting on the
 * image, bottom-left. Motion: the panel opens from a narrow rounded window,
 * the photo settles from a slight zoom, the copy rises line by line, and on
 * scroll the photo drifts while the panel tucks itself in.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-anim]", { opacity: 1, y: 0 });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: EASE } });

      // The panel opening and photo zoom are pure CSS (.hero-open / .hero-zoom)
      // so the photo — the LCP element — paints on the very first frame,
      // before any JavaScript runs. GSAP only choreographs the copy.
      intro
        .fromTo(
          "[data-hero-lede]",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.15,
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
          1.25,
        )
        .fromTo(
          "[data-hero-audience]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.06 },
          1.35,
        );

      // Scroll: the photo drifts down slower than the page (parallax) while
      // the panel shrinks slightly and the copy fades — a depth cue.
      const scroll = {
        trigger: "[data-hero-panel]",
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      };
      gsap.to("[data-hero-image]", { yPercent: 14, ease: "none", scrollTrigger: scroll });
      gsap.to("[data-hero-copy]", { yPercent: -18, opacity: 0.2, ease: "none", scrollTrigger: scroll });
      gsap.to("[data-hero-panel]", { scale: 0.96, ease: "none", scrollTrigger: scroll });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-canvas pt-[4.75rem]">
      <div className="px-3 sm:px-4">
        <div
          data-hero-panel
          data-tone="dark"
          className="hero-open relative mx-auto h-[min(42rem,calc(100svh-6rem))] min-h-[34rem] max-w-[88rem] overflow-hidden rounded-panel bg-[#12201f] will-change-transform"
        >
          <div data-hero-image className="absolute inset-0 will-change-transform">
            <Image
              src="/media/v2/abstrait-sarcelle-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1408px) 100vw, 1408px"
              className="hero-zoom object-cover object-[center_35%]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[rgb(7_18_17/0.85)] via-[rgb(7_18_17/0.32)] to-[rgb(7_18_17/0.05)]"
          />

          {/* Copy */}
          <div
            data-hero-copy
            className="absolute inset-x-6 bottom-7 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 sm:inset-x-10 sm:bottom-10 lg:inset-x-14 lg:bottom-13"
          >
            <div className="max-w-[47.5rem]">
              <SplitHeading
                as="h1"
                delay={0.75}
                className="display text-[2.375rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-[3.25rem] lg:text-[4.125rem]"
              >
                Transformez votre vision en réalité.
              </SplitHeading>

              <p
                data-anim
                data-hero-lede
                className="mt-4 max-w-[37.5rem] text-base leading-relaxed text-white/90 text-pretty sm:text-[1.0625rem]"
              >
                Nous concevons des solutions digitales sur mesure qui
                transforment vos idées en applications performantes, propulsant
                votre entreprise vers l&apos;avenir.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <div data-anim data-hero-cta>
                <ProjectCTA
                  label="Démarrer un projet"
                  variant="invert"
                  className="shine"
                />
              </div>
              <div data-anim data-hero-cta>
                <Link href="/services" className="btn-outline-invert btn-lg group">
                  Explorer les services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audiences */}
      <div className="container-x mt-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-3.5">
        <p data-anim data-hero-audience className="text-[0.9375rem] text-ink-soft">
          Nous accompagnons
        </p>
        <ul className="flex flex-1 flex-wrap gap-2 lg:justify-end">
          {audiences.map((audience) => (
            <li
              key={audience}
              data-anim
              data-hero-audience
              className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-soft hover:text-accent"
            >
              {audience}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
