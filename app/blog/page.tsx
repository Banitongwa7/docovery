import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import PageHero from "@/components/ui/PageHero";
import BlogExplorer from "@/components/blog/BlogExplorer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, conseils et analyses sur le développement web et mobile, le cloud, la sécurité et l'intelligence artificielle par l'équipe Docovery.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & insights"
        image="/media/v2/code-html-sombre.jpg"
        title="Actualités & innovations tech."
        description="Découvrez nos articles, conseils et analyses sur les dernières tendances du développement digital et de l'innovation technologique."
        meta={
          <dl>
            <dt className="eyebrow">Articles publiés</dt>
            <dd className="mt-1 font-display text-3xl font-medium text-accent tabular-nums">
              {String(posts.length).padStart(2, "0")}
            </dd>
          </dl>
        }
      />

      <BlogExplorer />

    </>
  );
}
