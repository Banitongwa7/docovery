import { renderOgImage } from "@/lib/og";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export const alt = "Réalisation Docovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return renderOgImage({
    kicker: study ? study.sector : "Réalisations",
    title: study ? study.title : "Dossier introuvable",
  });
}
