import { renderOgImage } from "@/lib/og";

export const alt = "Les réalisations de Docovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "Réalisations",
    title: "Des cas concrets, du cadrage à la production.",
  });
}
