"use client";

import { useRef } from "react";
import Image from "next/image";
import { metrics, capabilities } from "@/lib/company";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Counter from "@/components/motion/Counter";

const collage = [
  {
    src: "/media/v2/macbook-code-sombre.jpg",
    alt: "MacBook affichant du code dans la pénombre",
    className: "left-0 top-20 h-[17rem] w-[74%] sm:h-[24rem]",
    speed: -6,
  },
  {
    src: "/media/v2/macbook-iphone-airpods.jpg",
    alt: "MacBook, iPhone et AirPods sur un bureau sombre",
    className:
      "right-0 top-0 h-32 w-[52%] border-[6px] border-canvas sm:h-[10.5rem]",
    speed: 14,
  },
  {
    src: "/media/v2/telephone-vague-verte.jpg",
    alt: "Smartphone affichant une interface verte",
    className:
      "-left-1.5 bottom-0 h-32 w-[38%] border-[6px] border-canvas sm:h-[10.5rem]",
    speed: 22,
  },
];

/** "Notre impact" — layered photo collage beside a 2×2 grid of counters. */
export default function Metrics() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tiles = gsap.utils.toArray<HTMLElement>("[data-tile]");
      if (prefersReducedMotion()) {
        gsap.set(tiles, { opacity: 1 });
        return;
      }

      // Each photo is unveiled by a wipe, then drifts at its own speed.
      tiles.forEach((tile, index) => {
        gsap.fromTo(
          tile,
          { opacity: 1, clipPath: "inset(100% 0% 0% 0% round 18px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 18px)",
            duration: 1.3,
            delay: index * 0.15,
            ease: "expo.out",
            scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
          },
        );
        const img = tile.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.25 },
            {
              scale: 1,
              duration: 1.8,
              delay: index * 0.15,
              ease: "expo.out",
              scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
            },
          );
        }
        gsap.to(tile, {
          yPercent: Number(tile.dataset.speed ?? 0),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="overflow-hidden bg-canvas py-20 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-[77.5rem] flex-wrap items-center gap-x-18 gap-y-14 px-5 sm:px-10">
        <div className="relative h-[24rem] w-full max-w-[36rem] flex-[1_1_28rem] sm:h-[32.5rem]">
          {collage.map((tile) => (
            <div
              key={tile.src}
              data-anim
              data-tile
              data-speed={tile.speed}
              className={`absolute overflow-hidden rounded-[1.125rem] bg-surface-2 ${tile.className}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
              />
            </div>
          ))}

          {/* Spinning badge on the collage */}
          <div
            aria-hidden="true"
            className="absolute right-[6%] bottom-[14%] hidden size-28 place-items-center rounded-full bg-accent text-white shadow-[0_20px_40px_-20px_rgba(10,77,71,0.7)] sm:grid"
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full [animation:spin-slow_22s_linear_infinite]"
            >
              <defs>
                <path
                  id="impact-ring"
                  d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0"
                />
              </defs>
              <text className="fill-mint text-[9.5px] font-medium tracking-[0.18em] uppercase">
                <textPath href="#impact-ring">
                  Qualité · Sécurité · Performance ·
                </textPath>
              </text>
            </svg>
            <span className="font-display text-xl font-medium">4+</span>
          </div>
        </div>

        <div className="flex-[1_1_26rem]">
          <Reveal y={12} duration={0.6}>
            <p className="eyebrow">Notre impact</p>
          </Reveal>
          <SplitHeading
            as="h2"
            trigger="scroll"
            className="display mt-3 max-w-[30rem] text-[2rem] text-ink sm:text-[2.875rem]"
          >
            Des résultats concrets, pas des promesses.
          </SplitHeading>
          <Reveal y={18} delay={0.1}>
            <p className="mt-4 max-w-[29rem] text-[1.0625rem] leading-relaxed text-ink-soft/90">
              Des chiffres qui démontrent notre engagement envers
              l&apos;excellence et l&apos;innovation, mesurés à la clôture de
              chaque mission.
            </p>
          </Reveal>

          <Stagger as="dl" className="mt-7 grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                data-anim
                className="group rounded-2xl bg-surface px-5 py-[1.125rem] transition-colors duration-500 hover:bg-accent"
              >
                <dt className="font-display text-[2rem] leading-none font-medium text-accent transition-colors duration-500 group-hover:text-white">
                  <Counter value={metric.value} className="tabular-nums" />
                </dt>
                <dd className="mt-2.5">
                  <span className="block text-[0.9375rem] font-semibold text-ink transition-colors duration-500 group-hover:text-white">
                    {metric.label}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] leading-snug text-muted transition-colors duration-500 group-hover:text-white/80">
                    {metric.caption}
                  </span>
                </dd>
              </div>
            ))}
          </Stagger>

          <Reveal y={12} delay={0.2}>
            <p className="mt-[1.125rem] flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-accent">
              {capabilities.map((capability) => (
                <span key={capability.label} className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
                  {capability.label}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
