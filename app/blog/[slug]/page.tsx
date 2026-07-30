import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { posts, getPost, getRelatedPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import ArticleBody from "@/components/blog/ArticleBody";
import ShareLinks from "@/components/blog/ShareLinks";
import CTASection from "@/components/sections/CTASection";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      publishedTime: post.datetime,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.datetime,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-line bg-canvas pt-32 pb-14 sm:pt-40">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-96 grid-lines-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

          <div className="container-x relative max-w-3xl">
            <Reveal y={12} duration={0.6}>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Retour au blog
              </Link>
            </Reveal>

            <Reveal y={14} delay={0.06} className="mt-10">
              <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.6875rem] font-medium text-accent">
                {post.category}
              </span>
            </Reveal>

            <SplitHeading
              as="h1"
              className="display mt-6 text-[2rem] leading-[1.05] sm:text-[2.875rem]"
            >
              {post.title}
            </SplitHeading>

            <Reveal
              y={18}
              delay={0.14}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4" />
                <time dateTime={post.datetime}>{post.date}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4" />
                {post.readTime} de lecture
              </span>
            </Reveal>
          </div>
        </header>

        <div className="bg-canvas pt-12">
          <div className="container-x">
            <Reveal y={30}>
              <div className="relative aspect-16/9 overflow-hidden rounded-panel border border-line bg-surface">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="bg-canvas py-16 sm:py-20">
          <div className="container-x max-w-3xl">
            <Reveal y={24}>
              <p className="border-l-2 border-ink pl-5 text-xl leading-relaxed text-ink text-pretty">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal y={24} delay={0.06} className="mt-10">
              <ArticleBody content={post.content} />
            </Reveal>

            <Reveal
              y={18}
              className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <ShareLinks url={url} title={post.title} />
            </Reveal>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-16 sm:py-20">
          <div className="container-x">
            <h2 className="eyebrow">À lire ensuite</h2>

            <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  data-anim
                  className="group flex flex-col rounded-card border border-line bg-canvas p-6 transition-colors hover:border-ink/20"
                >
                  <span className="eyebrow">{item.category}</span>
                  <h3 className="mt-3 flex-1 text-base leading-snug font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-accent">
                    {item.readTime}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Let's talk"
        title="Vous avez un projet en tête ?"
        description="Parlons-en ! Notre équipe est prête à transformer vos idées en solutions digitales performantes."
      />
    </>
  );
}
