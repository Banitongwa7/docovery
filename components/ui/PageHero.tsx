import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Buttons, search field, meta row… */
  actions?: ReactNode;
  /** Right-hand column, e.g. a key figure or breadcrumb. */
  meta?: ReactNode;
  className?: string;
};

/** Shared masthead for every inner page — keeps the top of the site coherent. */
export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
  meta,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-canvas pt-32 pb-16 sm:pt-40 sm:pb-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 grid-lines-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-40 right-[-8%] size-[36rem] rounded-full blur-[130px]"
        style={{ background: "rgb(37 99 235 / 0.07)" }}
      />

      <div className="container-x relative">
        <Reveal y={12} duration={0.6} className="flex items-center gap-3">
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>

        <div className="mt-6 gap-x-16 lg:flex lg:items-end lg:justify-between">
          <SplitHeading
            as="h1"
            className="display max-w-4xl text-[2.5rem] leading-[1] sm:text-[3.5rem] lg:text-[4.25rem]"
          >
            {title}
          </SplitHeading>

          {meta && (
            <Reveal y={18} delay={0.15} className="mt-8 lg:mt-0 lg:shrink-0">
              {meta}
            </Reveal>
          )}
        </div>

        {description && (
          <Reveal y={20} delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              {description}
            </p>
          </Reveal>
        )}

        {actions && (
          <Reveal y={20} delay={0.2} className="mt-10">
            {actions}
          </Reveal>
        )}
      </div>
    </section>
  );
}
