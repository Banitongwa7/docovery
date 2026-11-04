import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Social share card (1200×630) in the V2 identity: the same inset, rounded
 * deep-teal panel as the site's hero, with the Docovery "D" blown up and
 * cropped on the right — a quiet mint tint with its data points in full
 * colour, the one memorable element. Everything else stays restrained:
 * Poppins only, white title, mint context line.
 *
 * Rendered by Satori (next/og): every element with several children needs
 * `display: flex`, and fonts must be TTF/OTF — hence assets/fonts/.
 */

export const OG_SIZE = { width: 1200, height: 630 };

const TEAL = "#0A4D47";
const MINT = "#9FE0D6";
const BRAND = "#01A297";

const MARK_PATH =
  "M344.498 301.927C322.734 333.73 295.044 356.693 261.427 370.817C227.811 384.941 176.43 392.002 107.285 392H8C3.58173 392 0 388.418 0 384V327.998C0 323.58 3.58172 319.998 8 319.998H120.843C177.209 319.998 218.131 309.689 243.611 289.07C271.898 266.133 286.045 233.871 286.051 192.287C286.051 165.268 280.11 142.516 268.228 124.029C256.346 105.543 241.067 92.3912 222.39 84.5739C203.716 76.7524 173.645 72.8417 132.178 72.8417H100.252C95.8334 72.8417 92.2517 69.26 92.2517 64.8417V7.99999C92.2517 3.58172 95.8334 0 100.252 0H108.912C170.525 0 213.828 3.20297 238.822 9.60891C263.815 16.0148 287.028 27.5579 308.461 44.2382C329.899 60.9329 346.703 81.9412 358.874 107.263C371.045 132.585 377.132 160.344 377.134 190.538C377.134 233.002 366.255 270.131 344.498 301.927Z";

const DOTS: [number, number][] = [
  [37.5, 222.4],
  [22.5, 252.4],
  [52.5, 252.4],
  [7.5, 237.4],
  [67.6, 237.4],
  [37.5, 192.4],
  [7.5, 297.5],
  [52.5, 312.5],
  [22.5, 282.5],
  [67.6, 117.3],
  [7.5, 57.2],
  [52.5, 147.3],
];

async function loadFonts() {
  const dir = join(process.cwd(), "assets", "fonts");
  const [medium, regular] = await Promise.all([
    readFile(join(dir, "Poppins-Medium.ttf")),
    readFile(join(dir, "Poppins-Regular.ttf")),
  ]);
  return [
    { name: "Poppins", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Poppins", data: regular, weight: 400 as const, style: "normal" as const },
  ];
}

/** Smaller type for longer titles so every card keeps two to three lines. */
function titleSize(title: string) {
  if (title.length > 90) return 42;
  if (title.length > 60) return 48;
  return 62;
}

export async function renderOgImage({
  kicker,
  title,
}: {
  /** Short context line, e.g. "Réalisation fintech". */
  kicker: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          padding: 20,
          fontFamily: "Poppins",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: 32,
            overflow: "hidden",
            padding: "52px 64px 56px",
            color: "#ffffff",
            backgroundColor: TEAL,
            backgroundImage:
              "radial-gradient(circle at 88% 18%, rgba(1,162,151,0.55) 0%, rgba(10,77,71,0) 55%), radial-gradient(circle at 0% 100%, rgba(6,46,42,0.9) 0%, rgba(10,77,71,0) 60%)",
          }}
        >
          {/* The giant cropped mark */}
          <svg
            width="662"
            height="686"
            viewBox="0 0 378 392"
            style={{ position: "absolute", left: 760, top: -40 }}
          >
            <path d={MARK_PATH} fill="rgba(159,224,214,0.10)" />
            {DOTS.map(([cx, cy], index) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="7.5"
                fill={index % 3 === 0 ? MINT : BRAND}
              />
            ))}
          </svg>

          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="40" height="42" viewBox="0 0 378 392">
              <path d={MARK_PATH} fill="#ffffff" />
              {DOTS.map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7.5" fill={MINT} />
              ))}
            </svg>
            <div
              style={{
                fontSize: 30,
                fontWeight: 500,
                letterSpacing: 2,
              }}
            >
              DOCOVERY
            </div>
          </div>

          {/* Title block */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
            <div style={{ fontSize: 28, fontWeight: 400, color: MINT }}>
              {kicker}
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: titleSize(title),
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 24,
                fontWeight: 400,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              docovery.net
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}
