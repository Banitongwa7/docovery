"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Splits "98%" into "" / "98" / "%", or "×4" into "×" / "4" / "".
 * Values without digits ("AA") are returned untouched and never animate.
 */
function parse(value: string) {
  const match = value.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, number, suffix] = match;
  const decimals = (number.split(/[.,]/)[1] ?? "").length;

  return {
    prefix,
    suffix,
    target: Number(number.replace(",", ".")),
    decimals,
    separator: number.includes(",") ? "," : ".",
  };
}

/** Counts a metric up from zero the first time it scrolls into view. */
export default function Counter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !parsed) return;

      if (prefersReducedMotion()) {
        el.textContent = value;
        return;
      }

      const format = (n: number) =>
        parsed.decimals
          ? n.toFixed(parsed.decimals).replace(".", parsed.separator)
          : Math.round(n).toString();

      // The real figure is server-rendered for crawlers; we only drop to the
      // zero-state once we know the animation is actually going to run.
      el.textContent = `${parsed.prefix}${format(0)}${parsed.suffix}`;

      const state = { n: 0 };

      gsap.to(state, {
        n: parsed.target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${parsed.prefix}${format(state.n)}${parsed.suffix}`;
        },
        onComplete: () => {
          el.textContent = value;
        },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
