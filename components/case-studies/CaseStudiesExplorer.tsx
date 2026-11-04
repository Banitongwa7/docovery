"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, caseStudySectors } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Alternating tall / short photos give the two columns a masonry rhythm. */
const HEIGHTS = ["h-[26rem]", "h-[21rem]", "h-[21rem]", "h-[26rem]"] as const;

export default function CaseStudiesExplorer() {
  const [sector, setSector] = useState<string>("Tous");
  const visible =
    sector === "Tous"
      ? caseStudies
      : caseStudies.filter((study) => study.sector === sector);

  return (
    <LayoutGroup>
      <div
        role="tablist"
        aria-label="Filtrer par secteur"
        className="flex flex-wrap gap-2"
      >
        {caseStudySectors.map((item) => {
          const active = item === sector;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSector(item)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                active ? "text-white" : "bg-surface text-ink hover:bg-accent-soft",
              )}
            >
              {active && (
                <motion.span
                  layoutId="sector-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              <span className="relative">{item}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-8 grid items-start gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((study, index) => (
            <motion.li
              key={study.slug}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: EASE }}
              className={cn(index % 2 === 1 && visible.length > 1 && "md:mt-14")}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[1.25rem] bg-[#12201f]",
                    HEIGHTS[index % HEIGHTS.length],
                  )}
                >
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="img-zoom object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[rgb(7_18_17/0.88)] via-[rgb(7_18_17/0.2)] to-transparent"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
                    {study.sector}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white text-accent transition-transform duration-500 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                  <dl className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
                    {study.results.slice(0, 3).map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl bg-white/12 px-3 py-2.5 text-white backdrop-blur-md"
                      >
                        <dt className="sr-only">{result.label}</dt>
                        <dd>
                          <span className="block font-display text-lg leading-none font-medium tabular-nums">
                            {result.value}
                          </span>
                          <span className="mt-1 block text-[0.6875rem] leading-tight text-white/80">
                            {result.label}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="px-1 pt-5">
                  <p className="text-sm text-muted">
                    {study.client} · {study.year} · {study.duration}
                  </p>
                  <h2 className="mt-2 font-display text-[1.375rem] leading-snug font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                    {study.title}
                  </h2>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft/90 text-pretty">
                    {study.summary}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
