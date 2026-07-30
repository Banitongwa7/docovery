import { values } from "@/lib/company";
import { Stagger } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Values({
  eyebrow = "Nos valeurs",
  title = "Propulser l'innovation vers l'avenir.",
  description = "Chez Docovery, nous combinons l'expertise technique avec une vision créative pour livrer des solutions qui transforment les entreprises et créent un impact durable dans le paysage digital.",
  className = "bg-canvas py-20 sm:py-28",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container-x">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <Stagger className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={value.title} data-anim className="bg-canvas p-7">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-surface text-ink">
                  <value.icon className="size-5" />
                </span>
                <span className="font-mono text-[0.6875rem] text-muted/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
