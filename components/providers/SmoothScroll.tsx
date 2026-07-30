"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, type LenisRef } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Global smooth scrolling.
 *
 * Lenis and GSAP must share a single animation loop, otherwise ScrollTrigger
 * reads stale scroll positions and reveals fire at the wrong offsets. We
 * therefore disable Lenis' own rAF (`autoRaf: false`) and drive it from
 * `gsap.ticker`, then feed every scroll event back into ScrollTrigger.
 *
 * Visitors who ask for reduced motion get native scrolling: Lenis is unmounted
 * entirely rather than merely paused, so nothing intercepts their wheel events.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const update = (time: number) => {
      // gsap.ticker reports seconds, Lenis expects milliseconds.
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, [reducedMotion]);

  // The Lenis instance survives client-side navigation: reset the scroll
  // position ourselves, then re-measure every trigger on the new page.
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.05,
        lerp: 0.1,
        smoothWheel: true,
        // Native momentum on touch devices feels better than an emulated one.
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
