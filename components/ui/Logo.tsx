import { cn } from "@/lib/utils";

/** The "D" of the Docovery mark — one closed path, drawn on a 378×392 box. */
const MARK_PATH =
  "M344.498 301.927C322.734 333.73 295.044 356.693 261.427 370.817C227.811 384.941 176.43 392.002 107.285 392H8C3.58173 392 0 388.418 0 384V327.998C0 323.58 3.58172 319.998 8 319.998H120.843C177.209 319.998 218.131 309.689 243.611 289.07C271.898 266.133 286.045 233.871 286.051 192.287C286.051 165.268 280.11 142.516 268.228 124.029C256.346 105.543 241.067 92.3912 222.39 84.5739C203.716 76.7524 173.645 72.8417 132.178 72.8417H100.252C95.8334 72.8417 92.2517 69.26 92.2517 64.8417V7.99999C92.2517 3.58172 95.8334 0 100.252 0H108.912C170.525 0 213.828 3.20297 238.822 9.60891C263.815 16.0148 287.028 27.5579 308.461 44.2382C329.899 60.9329 346.703 81.9412 358.874 107.263C371.045 132.585 377.132 160.344 377.134 190.538C377.134 233.002 366.255 270.131 344.498 301.927Z";

/** The scattered "data points" that complete the mark. */
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

export function LogoMark({
  className,
  tone = "teal",
}: {
  className?: string;
  tone?: "teal" | "white";
}) {
  return (
    <svg
      viewBox="0 0 378 392"
      aria-hidden="true"
      className={cn("h-[1.4rem] w-auto shrink-0", className)}
    >
      <path
        d={MARK_PATH}
        fill={tone === "white" ? "#ffffff" : "var(--color-accent)"}
      />
      <g fill={tone === "white" ? "var(--color-mint)" : "var(--color-brand)"}>
        {DOTS.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={7.5}
            className="logo-dot"
          />
        ))}
      </g>
    </svg>
  );
}

/** Mark + wordmark, as used in the navigation bar. */
export default function Logo({
  className,
  tone = "teal",
}: {
  className?: string;
  tone?: "teal" | "white";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "white" ? "text-white" : "text-accent",
        className,
      )}
    >
      <LogoMark tone={tone} />
      <span className="font-display text-[1.1875rem] font-semibold tracking-[0.03em]">
        DOCOVERY
      </span>
    </span>
  );
}
