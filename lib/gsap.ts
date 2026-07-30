"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Plugins are registered exactly once, and only in the browser — registering
 * ScrollTrigger during SSR throws because it reaches for `document`.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  // `once` is deliberately NOT set globally — scrubbed parallax triggers must
  // keep firing. Entrance reveals opt in individually.
  ScrollTrigger.defaults({ start: "top 85%" });
}

/** Standard easing curve shared by every entrance animation. */
export const EASE = "power3.out";

/** Honours the OS "reduce motion" setting — animations become instant states. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, useGSAP, ScrollTrigger, SplitText };
