import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { posts } from "@/lib/posts";
import PageHero from "@/components/ui/PageHero";
import BlogExplorer from "@/components/blog/BlogExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Blog : développement, cloud, IA et sécurité",
  description:
    "Articles, conseils et analyses sur le développement web et mobile, le cloud, la sécurité et l'intelligence artificielle par l'équipe Docovery.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
      <PageHero
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
