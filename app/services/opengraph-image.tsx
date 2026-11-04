import { renderOgImage } from "@/lib/og";

export const alt = "Les services de Docovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "Services",
    title: "Huit expertises, une seule équipe.",
  });
}
