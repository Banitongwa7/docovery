import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional slot rendered on the right on desktop (CTA, note…). */
  aside?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The recurring section masthead: numbered eyebrow, split-reveal title and an
 * optional supporting column. Keeps every section on the same rhythm.
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

  return (
    <div
      className={cn(
        "mb-14 sm:mb-18",
        centered ? "mx-auto max-w-3xl text-center" : "",
        className,
      )}
    >
      <Reveal
        className={cn(
          "flex items-center gap-3",
          centered && "justify-center",
          tone === "dark" ? "text-white/45" : "text-muted",
        )}
        y={12}
        duration={0.6}
      >
        <span
          className={cn(
            "h-px w-8",
            tone === "dark" ? "bg-white/20" : "bg-line",
          )}
          aria-hidden="true"
        />
        <span className="eyebrow text-current">{eyebrow}</span>
      </Reveal>

      <div
        className={cn(
          "mt-6 gap-x-16 gap-y-6",
          !centered && aside ? "lg:flex lg:items-end lg:justify-between" : "",
        )}
      >
        <SplitHeading
          as="h2"
          trigger="scroll"
          className={cn(
            "display text-[2rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.25rem]",
            !centered && aside ? "lg:max-w-[58%]" : "max-w-4xl",
            centered && "mx-auto",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </SplitHeading>

        {(description || aside) && (
          <Reveal
            y={20}
            delay={0.1}
            className={cn(
              "text-[1.0625rem] leading-relaxed",
              !centered && aside ? "lg:max-w-sm lg:shrink-0" : "mt-5 max-w-2xl",
              centered && "mx-auto",
              tone === "dark" ? "text-white/60" : "text-muted",
            )}
          >
            {description}
            {aside}
          </Reveal>
        )}
      </div>
    </div>
  );
}
