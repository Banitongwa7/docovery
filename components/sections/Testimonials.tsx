import { Star } from "lucide-react";
import { testimonials, initialsOf } from "@/lib/company";
import { Stagger } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

/** "Ce que disent nos clients." — grey quote cards, the middle one offset. */
export default function Testimonials({
  className = "bg-canvas pb-20 sm:pb-28 lg:pb-32",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[77.5rem] px-5 sm:px-10">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ce que disent nos clients."
          description="La satisfaction de nos clients est notre plus grande récompense."
        />

        <Stagger className="grid items-start gap-5 md:grid-cols-3" y={50}>
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              data-anim
              className={cn(
                "group rounded-[1.25rem] bg-surface p-[1.625rem] transition-[background-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:bg-canvas hover:shadow-[0_24px_48px_-28px_rgba(10,77,71,0.45),0_0_0_1px_var(--color-line)]",
                index === 1 && "md:mt-8",
              )}
            >
              <span
                role="img"
                aria-label={`Note : ${testimonial.rating} sur 5`}
                className="flex gap-0.5 text-brand"
              >
                {Array.from({ length: testimonial.rating }).map((_, star) => (
                  <Star
                    key={star}
                    aria-hidden="true"
                    className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${star * 40}ms` }}
                  />
                ))}
              </span>
              <blockquote className="mt-4 text-base leading-relaxed text-ink-soft">
                « {testimonial.text} »
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-[0.8125rem] font-semibold text-white"
                >
                  {initialsOf(testimonial.name)}
                </span>
                <span>
                  <span className="block text-[0.9375rem] font-semibold text-ink">
                    {testimonial.name}
                  </span>
                  <span className="block text-[0.8125rem] text-muted">
                    {testimonial.position}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
