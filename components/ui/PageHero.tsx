"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/lib/gsap";
import SplitHeading from "@/components/motion/SplitHeading";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Buttons, search field… — rendered on white, under the banner. */
  actions?: ReactNode;
  /** Key figure, date, location… — rendered on white, under the banner. */
  meta?: ReactNode;
  /** Banner photo (V2, no people). */
  image?: string;
  imagePosition?: string;
  className?: string;
};

/**
 * V2 inner-page masthead: an inset rounded photo banner with the title in
 * white at the bottom-left, plus an optional white strip for actions/meta.
 * Same motion grammar as the home hero, just shorter.
 */
export default function PageHero({
  title,
  description,
  actions,
  meta,
  image = "/media/v2/abstrait-vert-couches.jpg",
  imagePosition = "center 35%",
  className,
}: PageHeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-anim]", { opacity: 1, y: 0 });
        return;
      }

      gsap
        .timeline({ defaults: { ease: EASE } })
        .fromTo(
          "[data-ph-panel]",
          { opacity: 1, clipPath: "inset(8% 5% 8% 5% round 40px)" },
          { clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.3, ease: "expo.inOut" },
          0,
        )
        .fromTo("[data-ph-image]", { scale: 1.25 }, { scale: 1.06, duration: 2, ease: "expo.out" }, 0)
        .fromTo("[data-ph-lede]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 1)
        .fromTo("[data-ph-strip]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 1.1);

      gsap.to("[data-ph-image]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-ph-panel]",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className={cn("bg-canvas pt-[4.75rem]", className)}>
      <div className="px-3 sm:px-4">
        <div
          data-anim
          data-ph-panel
          className="relative mx-auto h-[clamp(21rem,30vw,26.25rem)] max-w-[88rem] overflow-hidden rounded-panel bg-[#12201f]"
        >
          <div data-ph-image className="absolute inset-0 will-change-transform">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 1408px) 100vw, 1408px"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[rgb(7_18_17/0.85)] via-[rgb(7_18_17/0.38)] to-[rgb(7_18_17/0.1)]"
          />

          <div className="absolute inset-x-6 bottom-7 text-white sm:inset-x-10 sm:bottom-10 lg:inset-x-14 lg:bottom-12">
            <SplitHeading
              as="h1"
              delay={0.6}
              className="display max-w-[45rem] text-[2.125rem] leading-[1.14] text-white text-balance sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              {title}
            </SplitHeading>
            {description && (
              <p
                data-anim
                data-ph-lede
                className="mt-3.5 max-w-[35rem] text-base leading-relaxed text-white/88 text-pretty sm:text-[1.0625rem]"
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {(actions || meta) && (
        <div
          data-anim
          data-ph-strip
          className="mx-auto mt-6 flex max-w-[77.5rem] flex-col gap-x-10 gap-y-5 px-5 sm:px-10 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between"
        >
          <div>{actions}</div>
          {meta && <div>{meta}</div>}
        </div>
      )}
    </section>
  );
}
