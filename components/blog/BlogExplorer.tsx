"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { posts, postCategories } from "@/lib/posts";
import { Stagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export default function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesQuery =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        post.tags.some((tag) => tag.toLowerCase().includes(needle));

      const matchesCategory = category === "Tous" || post.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-18 z-30 border-b border-line bg-canvas/90 backdrop-blur-xl">
        <div className="container-x flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" />
            <label htmlFor="blog-search" className="sr-only">
              Rechercher un article
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un article…"
              className="field h-11 rounded-full py-0 pl-11"
            />
          </div>

          <div
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0"
            role="group"
            aria-label="Filtrer par catégorie"
          >
            {postCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300",
                  category === item
                    ? "border-ink bg-ink text-white"
                    : "border-line text-muted hover:border-ink/25 hover:text-ink",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-x">
          <p className="eyebrow mb-8" aria-live="polite">
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
            {category !== "Tous" && ` · ${category}`}
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-card border border-dashed border-line px-6 py-20 text-center">
              <p className="text-lg text-ink">Aucun article trouvé.</p>
              <p className="mt-2 text-sm text-muted">
                Essayez un autre mot-clé ou revenez à toutes les catégories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("Tous");
                }}
                className="btn-ghost btn-md mt-6"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <Stagger
              // Re-running the reveal on every filter change keeps new cards visible.
              key={`${category}-${query}`}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              stagger={0.07}
              y={22}
            >
              {filtered.map((post) => (
                <article key={post.id} data-anim>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-16/10 overflow-hidden rounded-card border border-line bg-surface">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-canvas/90 px-3 py-1 text-[0.6875rem] font-medium text-ink backdrop-blur">
                        {post.category}
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span className="size-1 rounded-full bg-line" />
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {post.excerpt}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                        Lire l&apos;article
                        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </Stagger>
          )}
        </div>
      </section>
    </>
  );
}
