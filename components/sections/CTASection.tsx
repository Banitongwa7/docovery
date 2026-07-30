import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import ProjectCTA from "@/components/ui/ProjectCTA";

export default function CTASection({
  eyebrow = "Passons à l'action",
  title = "Prêt à transformer votre entreprise ?",
  description = "Rejoignez les entreprises qui nous font confiance pour leurs projets digitaux. Commençons ensemble votre transformation digitale dès aujourd'hui.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-canvas pb-20 sm:pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-panel bg-night px-6 py-16 text-white sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 grid-lines" />
          <div
            className="pointer-events-none absolute -top-32 left-1/2 size-[34rem] -translate-x-1/2 rounded-full blur-[130px]"
            style={{ background: "rgb(37 99 235 / 0.22)" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal y={12} duration={0.6}>
              <span className="eyebrow text-white/45">{eyebrow}</span>
            </Reveal>

            <SplitHeading
              as="h2"
              trigger="scroll"
              className="display mx-auto mt-6 text-[2.25rem] text-white sm:text-[3.25rem]"
            >
              {title}
            </SplitHeading>

            <Reveal y={18} delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/60 text-pretty">
                {description}
              </p>
            </Reveal>

            <Reveal
              y={18}
              delay={0.18}
              className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <ProjectCTA />
              <Link href="/contact" className="btn-invert btn-lg group">
                Nous contacter
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>

            <Reveal
              y={14}
              delay={0.26}
              className="mt-12 flex flex-col items-center justify-center gap-x-10 gap-y-3 border-t border-night-line pt-8 text-sm sm:flex-row"
            >
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-accent" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.value}`}
                className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-accent" />
                {contact.phone.label}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
