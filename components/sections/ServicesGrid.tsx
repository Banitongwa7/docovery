import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Stagger } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesGrid({
  limit,
  className = "bg-canvas py-20 sm:py-28",
}: {
  limit?: number;
  className?: string;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className={className}>
      <div className="container-x">
        <SectionHeader
          eyebrow="Services informatiques"
          title="Une gamme complète de services informatiques professionnels."
          description="Des solutions complètes adaptées aux exigences techniques et opérationnelles de votre entreprise."
          aside={
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              Voir toute l&apos;expertise
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          }
        />

        <Stagger
          className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {list.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              data-anim
              className="group relative flex flex-col bg-canvas p-7 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <service.icon className="size-5" />
                </span>
                <span className="font-mono text-[0.6875rem] text-muted/70">
                  {service.index}
                </span>
              </div>

              <h3 className="mt-6 text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                Détails
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
