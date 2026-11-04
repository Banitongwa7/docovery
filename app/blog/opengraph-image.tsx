import { renderOgImage } from "@/lib/og";

export const alt = "Le blog de Docovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "Blog",
    title: "Actualités et innovations tech.",
  });
}
