import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional slot rendered under the description (CTA, link…). */
  aside?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * V2 section masthead: sentence-case teal label, Poppins title on the left
 * and the supporting paragraph pushed to the right on desktop — the same
 * rhythm as the mockup, on every section.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  aside,
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  const split = !centered && Boolean(description || aside);
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        centered && "mx-auto max-w-3xl text-center",
        split && "lg:flex lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className={cn(split && "lg:max-w-[38rem]")}>
        <Reveal y={12} duration={0.6}>
          <p className={dark ? "eyebrow-invert" : "eyebrow"}>{eyebrow}</p>
        </Reveal>

        <SplitHeading
          as="h2"
          trigger="scroll"
          className={cn(
            "display mt-3 text-[2rem] text-balance sm:text-[2.5rem] lg:text-[2.75rem]",
            centered && "mx-auto",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </SplitHeading>
      </div>

      {(description || aside) && (
        <Reveal
          y={20}
          delay={0.1}
          className={cn(
            "text-base leading-relaxed text-pretty",
            split ? "mt-5 max-w-md lg:mt-0 lg:shrink-0" : "mt-4 max-w-2xl",
            centered && "mx-auto",
            dark ? "text-white/85" : "text-ink-soft/90",
          )}
        >
          {description}
          {aside}
        </Reveal>
      )}
    </div>
  );
}
