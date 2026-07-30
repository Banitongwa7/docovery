"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BackgroundVideoProps = {
  src: string;
  /** Still shown immediately — this is what the browser measures for LCP. */
  poster: string;
  posterAlt?: string;
  className?: string;
  /** Passed to the poster image; use on the hero only. */
  priority?: boolean;
  sizes?: string;
  /** Dims the footage so overlaid text stays readable. */
  overlay?: boolean;
};

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Decorative looping footage layered over an optimised poster image.
 *
 * The video file is only ever requested when all of these hold:
 *   · the viewport is desktop-sized      · the visitor allows motion
 *   · the element is actually in view    · the connection isn't metered/slow
 *
 * Everyone else simply keeps the poster, so mobile and reduced-motion visitors
 * never pay for a multi-megabyte download.
 */
export default function BackgroundVideo({
  src,
  poster,
  posterAlt = "",
  className,
  priority = false,
  sizes = "100vw",
  overlay = true,
}: BackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const wantsMotion = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const connection = (
      navigator as Navigator & { connection?: NetworkInformation }
    ).connection;
    const cheapConnection =
      !connection ||
      (!connection.saveData &&
        !/^(slow-)?2g$/.test(connection.effectiveType ?? ""));

    if (!wantsMotion || !isDesktop || !cheapConnection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Some browsers reject autoplay until the element is explicitly played.
  useEffect(() => {
    if (!shouldLoad) return;
    videoRef.current?.play().catch(() => setReady(false));
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0", className)}>
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />

      {shouldLoad && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-1000",
            ready ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/35 via-ink/5 to-transparent" />
      )}
    </div>
  );
}
