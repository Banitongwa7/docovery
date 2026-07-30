import { Fragment } from "react";

/**
 * Renders the stored article text.
 *
 * The source format is deliberately minimal — paragraphs separated by blank
 * lines, with `**…**` marking a lead-in. Paragraphs that open with a bold
 * segment are rendered as a titled block so long articles stay scannable.
 */
export default function ArticleBody({ content }: { content: string }) {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const segments = block.split("**");
        const hasLeadIn = block.startsWith("**") && segments.length > 2;

        if (hasLeadIn) {
          const [, heading, ...rest] = segments;
          const body = rest.join("").replace(/^\s*—\s*/, "");

          return (
            <div key={index} className="border-l-2 border-accent/25 pl-5">
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                {heading}
              </h2>
              <p className="mt-2 text-[1.0625rem] leading-[1.75] text-ink-soft text-pretty">
                {body}
              </p>
            </div>
          );
        }

        return (
          <p
            key={index}
            className="text-[1.0625rem] leading-[1.75] text-ink-soft text-pretty"
          >
            {segments.map((segment, segmentIndex) =>
              segmentIndex % 2 === 1 ? (
                <strong key={segmentIndex} className="font-semibold text-ink">
                  {segment}
                </strong>
              ) : (
                <Fragment key={segmentIndex}>{segment}</Fragment>
              ),
            )}
          </p>
        );
      })}
    </div>
  );
}
