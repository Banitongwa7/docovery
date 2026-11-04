import { socials } from "@/lib/site";
import { brandIcons } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

/**
 * Round icon buttons for Docovery's networks. The network name lives in
 * `aria-label` and `title`, so the icons stay accessible without visible text.
 */
export default function SocialLinks({
  tone = "light",
  className,
}: {
  /** "light" on white surfaces, "dark" on the teal bands / cards. */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("flex gap-2", className)}>
      {socials.map((social) => {
        const Icon = brandIcons[social.label as keyof typeof brandIcons];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Docovery sur ${social.label}`}
              title={social.label}
              className={cn(
                "grid size-10 place-items-center rounded-full transition-[background-color,color,translate] duration-300 hover:-translate-y-0.5",
                tone === "dark"
                  ? "bg-white/12 text-white hover:bg-white hover:text-accent"
                  : "bg-surface text-ink hover:bg-accent hover:text-white",
              )}
            >
              {Icon ? (
                <Icon className="size-4" />
              ) : (
                <span className="text-xs font-semibold">{social.label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
