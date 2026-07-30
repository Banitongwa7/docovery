"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/ui/BrandIcons";

export default function ShareLinks({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permission denied — the share links below still work.
    }
  };

  const targets = [
    {
      label: "Partager sur LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      Icon: LinkedInIcon,
    },
    {
      label: "Partager sur X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      Icon: XIcon,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 inline-flex items-center gap-2 text-sm text-muted">
        <Share2 className="size-4" />
        Partager
      </span>

      {targets.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink/25 hover:text-ink"
        >
          <Icon className="size-3.5" />
        </a>
      ))}

      <button
        type="button"
        onClick={copy}
        aria-label="Copier le lien de l'article"
        className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink/25 hover:text-ink"
      >
        {copied ? (
          <Check className="size-3.5 text-positive" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Lien copié" : ""}
      </span>
    </div>
  );
}
