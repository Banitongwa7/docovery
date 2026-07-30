import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { navItems } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-canvas pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 grid-lines-light opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container-x relative">
        <Reveal y={12} duration={0.6}>
          <span className="eyebrow">Erreur 404</span>
        </Reveal>

        <SplitHeading
          as="h1"
          className="display mt-6 max-w-3xl text-[2.5rem] leading-[1] sm:text-[4rem]"
        >
          Cette page n&apos;existe pas — ou plus.
        </SplitHeading>

        <Reveal y={20} delay={0.12}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Le lien que vous avez suivi est peut-être obsolète. Voici les pages
            principales du site.
          </p>
        </Reveal>

        <Reveal y={20} delay={0.2} className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary btn-lg group">
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Retour à l&apos;accueil
          </Link>
        </Reveal>

        <Reveal
          y={18}
          delay={0.26}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
