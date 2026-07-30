"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useProjectModal } from "@/components/providers/ProjectModalProvider";
import { cn } from "@/lib/utils";

// Static lookups — never build these class names by interpolation, or the
// Tailwind scanner cannot see them.
const VARIANTS = {
  primary: "btn-primary",
  dark: "btn-dark",
  ghost: "btn-ghost",
  invert: "btn-invert",
} as const;

const SIZES = { md: "btn-md", lg: "btn-lg" } as const;

/** Button that opens the shared project-request dialog. */
export default function ProjectCTA({
  label = "Démarrer un Projet",
  service,
  variant = "primary",
  size = "lg",
  className,
}: {
  label?: string;
  service?: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const { openProjectModal } = useProjectModal();

  return (
    <motion.button
      type="button"
      onClick={() => openProjectModal(service)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn(VARIANTS[variant], SIZES[size], "group", className)}
    >
      {label}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
}
