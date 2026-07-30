import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { contact } from "@/lib/site";
import type { LegalSection } from "@/lib/legal";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";

/** Turns the company email inside legal copy into a real mailto link. */
function linkify(text: string): ReactNode {
  const parts = text.split(contact.email);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <a
          href={`mailto:${contact.email}`}
          className="text-accent underline underline-offset-2"
        >
          {contact.email}
        </a>
      )}
    </Fragment>
  ));
}

export default function LegalDocument({
  eyebrow,
  title,
  intro,
  sections,
  updatedAt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  updatedAt: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        meta={
          <dl>
            <dt className="eyebrow">Dernière mise à jour</dt>
            <dd className="mt-1 text-lg font-medium text-ink">{updatedAt}</dd>
          </dl>
        }
      />

      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Table of contents */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Sommaire</p>
              <nav aria-label="Sommaire du document">
                <ol className="mt-5 space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-3 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
                      >
                        <span className="font-mono text-xs text-muted/70">
                          {section.index}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-8 rounded-card border border-line bg-surface p-5">
                <p className="text-sm font-medium text-ink">
                  Une question sur ce document ?
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  Notre équipe répond aux demandes liées à vos données et à nos
                  conditions.
                </p>
                <Link href="/contact" className="btn-ghost btn-md mt-4 w-full">
                  Nous contacter
                </Link>
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-8">
            {sections.map((section) => (
              <Reveal
                key={section.id}
                y={22}
                as="section"
                className="scroll-mt-28 border-b border-line py-8 first:pt-0 last:border-b-0"
              >
                <div id={section.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {section.index}
                    </span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, index) =>
                      block.type === "p" ? (
                        <p
                          key={index}
                          className="text-[0.9375rem] leading-relaxed text-ink-soft text-pretty"
                        >
                          {linkify(block.text)}
                        </p>
                      ) : (
                        <ul key={index} className="space-y-2">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2.5 size-1 shrink-0 rounded-full bg-accent"
                              />
                              <span>{linkify(item)}</span>
                            </li>
                          ))}
                        </ul>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
