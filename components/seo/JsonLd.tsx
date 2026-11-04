/**
 * Renders one or more schema.org objects as a JSON-LD script tag.
 * `<` is escaped so a value can never close the script element early.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
