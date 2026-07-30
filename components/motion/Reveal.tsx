"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Vertical travel in pixels. */
  y?: number;
  delay?: number;
  duration?: number;
  /** Scroll position at which the reveal fires. */
  start?: string;
};

/**
 * Reveals its own root element once it enters the viewport.
 * The root carries `data-anim`, so it is invisible until GSAP takes over
 * (see the anti-FOUC block in globals.css).
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 28,
  delay = 0,
  duration = 0.9,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: EASE,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-anim className={cn(className)}>
      {children}
    </Tag>
  );
}

type StaggerProps = Omit<RevealProps, "delay"> & {
  /** Delay between each child, in seconds. */
  stagger?: number;
  delay?: number;
};

/**
 * Staggers every descendant marked with `data-anim` — used for card grids,
 * lists and any "cadenced" entrance.
 */
export function Stagger({
  children,
  className,
  as: Tag = "div",
  y = 28,
  delay = 0,
  duration = 0.85,
  stagger = 0.09,
  start = "top 85%",
}: StaggerProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-anim]", el);
      if (!items.length) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: EASE,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
