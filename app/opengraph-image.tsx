import { renderOgImage } from "@/lib/og";

export const alt = "Docovery, développement web, mobile et cloud à Kinshasa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    kicker: "Studio logiciel à Kinshasa",
    title: "Transformez votre vision en réalité.",
  });
}
