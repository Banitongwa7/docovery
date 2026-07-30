/** Tiny class-name joiner — keeps conditional Tailwind lists readable. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
