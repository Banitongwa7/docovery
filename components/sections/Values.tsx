import { values } from "@/lib/company";
import { Stagger } from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

/** "Nos valeurs" — a deep-teal band with four numbered cells (V2). */
export default function Values({
  eyebrow = "Nos valeurs",
  title = "Propulser l'innovation vers l'avenir.",
  description = "Chez Docovery, nous combinons l'expertise technique avec une vision créative pour livrer des solutions qui transforment les entreprises et créent un impact durable dans le paysage digital.",
  className = "bg-canvas pb-20 sm:pb-28 lg:pb-32",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("px-3 sm:px-4", className)}>
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-panel bg-accent px-6 py-10 text-white sm:px-12 sm:py-14 lg:px-16">
        <div
          aria-hidden="true"
          className="orb pointer-events-none absolute -top-40 right-[-8rem] size-[28rem] rounded-full bg-brand/30 blur-[110px]"
        />

        <div className="relative">
          <SectionHeader
            tone="dark"
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-9 sm:mb-10"
          />

          <Stagger className="grid gap-px overflow-hidden rounded-2xl bg-white/18 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-anim
                className="group relative bg-accent p-6 transition-colors duration-500 hover:bg-accent-dark"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-mint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <value.icon
                    aria-hidden="true"
                    className="size-5 text-mint/70 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-2.5 font-display text-[1.1875rem] font-medium">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {value.description}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
