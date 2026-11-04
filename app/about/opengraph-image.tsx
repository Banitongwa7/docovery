import { renderOgImage } from "@/lib/og";

export const alt = "À propos de Docovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "À propos",
    title: "Construire des solutions, façonner l'avenir.",
  });
}
