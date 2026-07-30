import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "ghost" | "invert";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "btn-primary",
  dark: "btn-dark",
  ghost: "btn-ghost",
  invert: "btn-invert",
};

const SIZES: Record<Size, string> = {
  md: "btn-md",
  lg: "btn-lg",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const classes = ({ variant = "primary", size = "md", className }: BaseProps) =>
  cn(VARIANTS[variant], SIZES[size], className);

/** Internal / external link styled as a button. */
export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
  ...rest
}: BaseProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes({ children, variant, size, className })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes({ children, variant, size, className })}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant,
  size,
  className,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button
      className={classes({ children, variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  );
}
