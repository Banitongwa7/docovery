"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, SplitText, prefersReducedMotion } from "@/lib/gsap";

type SplitHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** Play on mount (hero) or when scrolled into view (section titles). */
  trigger?: "load" | "scroll";
};

/**
 * Line-by-line masked reveal built on GSAP SplitText.
 *
 * `mask: "lines"` wraps every line in an overflow-hidden container so the text
 * slides up from behind its own baseline. `autoSplit` re-splits — and replays —
 * when the webfont finishes loading or the element reflows, which is what keeps
 * the effect correct with `next/font`.
 */
export default function SplitHeading({
  children,
  className,
  as: Tag = "h1",
  delay = 0,
  trigger = "load",
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      // The element itself becomes visible immediately; the masked lines
      // inside it are what animates, so there is no flash of raw text.
      gsap.set(el, { opacity: 1 });

      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        linesClass: "split-line",
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 115,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.085,
            delay,
            ...(trigger === "scroll"
              ? { scrollTrigger: { trigger: el, start: "top 88%", once: true } }
              : {}),
          }),
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-anim className={className}>
      {children}
    </Tag>
  );
}
