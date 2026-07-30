"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/lib/gsap";
import SplitHeading from "@/components/motion/SplitHeading";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import ProjectCTA from "@/components/ui/ProjectCTA";
import { audiences } from "@/lib/site";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-anim]", { opacity: 1, y: 0 });
        return;
      }

      // Cadenced entrance: everything after the headline arrives in sequence.
      gsap
        .timeline({ defaults: { ease: EASE, duration: 0.9 } })
        .fromTo("[data-hero-badge]", { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, 0)
        .fromTo("[data-hero-lede]", { opacity: 0, y: 22 }, { opacity: 1, y: 0 }, 0.45)
        .fromTo("[data-hero-cta]", { opacity: 0, y: 22 }, { opacity: 1, y: 0 }, 0.58)
        .fromTo(
          "[data-hero-audience]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.7 },
          0.7,
        )
        .fromTo(
          panel.current,
          { opacity: 0, y: 56, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 },
          0.5,
        )
        .fromTo(
          "[data-hero-float]",
          { opacity: 0, y: 20, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12 },
          1.1,
        );

      // Slow parallax inside the frame while the panel travels up the page.
      gsap.to(image.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: panel.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-canvas pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Structure cues */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] grid-lines-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] size-[42rem] rounded-full blur-[130px]"
        style={{ background: "rgb(37 99 235 / 0.08)" }}
      />

      <div className="container-x relative">
        <div className="max-w-4xl">
          <div
            data-anim
            data-hero-badge
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-canvas px-4 py-1.5"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-ink-soft">
              Services IT &amp; logiciels · Kinshasa
            </span>
          </div>

          <SplitHeading
            as="h1"
            className="display mt-8 text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[5.75rem]"
          >
            Transformez votre vision en{" "}
            <span className="text-accent">réalité.</span>
          </SplitHeading>

          <p
            data-anim
            data-hero-lede
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty"
          >
            Nous concevons des solutions digitales sur mesure qui transforment
            vos idées en applications performantes, propulsant votre entreprise
            vers l&apos;avenir.
          </p>

          <div
            data-anim
            data-hero-cta
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ProjectCTA />
            <Link href="/services" className="btn-ghost btn-lg group">
              Explorer les services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span
              data-anim
              data-hero-audience
              className="eyebrow mr-1"
            >
              Nous accompagnons
            </span>
            {audiences.map((audience) => (
              <span
                key={audience}
                data-anim
                data-hero-audience
                className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Visual panel */}
        <div ref={panel} data-anim className="relative mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface">
            <div ref={image} className="relative aspect-16/10 w-full sm:aspect-21/9">
              <BackgroundVideo
                src="/media/hero-loop.mp4"
                poster="/media/hero-meeting.jpg"
                posterAlt="Équipe de professionnels analysant les données d'un projet digital autour d'un ordinateur portable"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="scale-105"
              />
            </div>
          </div>

          {/* Floating indicators */}
          <div
            data-anim
            data-hero-float
            className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-canvas/95 px-5 py-4 shadow-[0_18px_40px_-24px_rgba(11,13,18,0.45)] backdrop-blur sm:left-8"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
              <TrendingUp className="size-5" />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-[-0.02em] text-ink">
                98%
              </span>
              <span className="block text-xs text-muted">
                Satisfaction client
              </span>
            </span>
          </div>

          <div
            data-anim
            data-hero-float
            className="absolute -top-5 right-4 hidden rounded-2xl border border-line bg-canvas/95 px-5 py-4 shadow-[0_18px_40px_-24px_rgba(11,13,18,0.45)] backdrop-blur sm:block sm:right-8"
          >
            <span className="eyebrow">Disponibilité</span>
            <span className="mt-1 block text-lg font-semibold tracking-[-0.02em] text-ink">
              99,9%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
