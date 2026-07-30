import { Star } from "lucide-react";
import { testimonials, initialsOf } from "@/lib/company";
import { Stagger } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ce que disent nos clients."
          description="La satisfaction de nos clients est notre plus grande récompense."
          align="center"
        />

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              data-anim
              className="flex flex-col rounded-card border border-line bg-canvas p-8"
            >
              <div
                className="flex gap-0.5"
                aria-label={`Note : ${testimonial.rating} sur 5`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-6 flex-1 text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                « {testimonial.text} »
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs text-white"
                >
                  {initialsOf(testimonial.name)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-muted">
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
