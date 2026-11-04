import { renderOgImage } from "@/lib/og";
import { getPost, posts } from "@/lib/posts";

export const alt = "Article du blog Docovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOgImage({
    kicker: post ? post.category : "Blog",
    title: post ? post.title : "Article introuvable",
  });
}
