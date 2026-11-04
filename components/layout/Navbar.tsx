"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { navItems, contact } from "@/lib/site";
import { useProjectModal } from "@/components/providers/ProjectModalProvider";
import Logo from "@/components/ui/Logo";
import ProjectCTA from "@/components/ui/ProjectCTA";
import SocialLinks from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const items = [{ href: "/", label: "Accueil" }, ...navItems];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openProjectModal } = useProjectModal();
  const lastY = useRef(0);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  // Hide on the way down, come back as soon as the visitor scrolls up — the
  // bar never covers content that is being read, but is one flick away.
  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - lastY.current;
    lastY.current = y;
    setScrolled(y > 12);
    if (Math.abs(delta) < 6) return;
    setHidden(delta > 0 && y > 420);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-canvas/90 backdrop-blur-xl transition-shadow duration-500",
          scrolled && "shadow-[0_1px_0_var(--color-line),0_10px_30px_-20px_rgba(10,77,71,0.35)]",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex h-[4.5rem] w-full max-w-[88rem] items-center justify-between gap-8 px-5 sm:px-8 lg:px-10"
        >
          <Link href="/" aria-label="Docovery — Accueil" className="logo-link">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex min-h-11 items-center text-[0.9375rem] transition-colors duration-300",
                      active
                        ? "font-semibold text-ink"
                        : "text-ink-soft hover:text-accent",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 bottom-1.5 h-0.5 rounded-full bg-brand"
                        transition={{ duration: 0.45, ease: EASE }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ProjectCTA
              label="Démarrer un projet"
              size="md"
              className="hidden sm:inline-flex"
            />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="relative grid size-11 place-items-center rounded-full bg-surface text-ink transition-colors hover:bg-accent-soft lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Reading progress. */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="h-0.5 origin-left bg-gradient-to-r from-accent via-brand to-mint"
        />
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "circle(0% at calc(100% - 2.6rem) 2.25rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.6rem) 2.25rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.6rem) 2.25rem)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-canvas pt-[4.5rem] lg:hidden"
            data-lenis-prevent
          >
            <nav aria-label="Navigation mobile" className="px-5 pt-5 sm:px-8">
              <ul>
                {items.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.18 + index * 0.05,
                        duration: 0.55,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-16 items-center justify-between font-display text-[1.75rem] font-medium",
                          active ? "text-accent" : "text-ink",
                        )}
                      >
                        {item.label}
                        {active && (
                          <span
                            aria-hidden="true"
                            className="size-2.5 rounded-full bg-brand"
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
              data-tone="dark"
              className="mx-3 mt-auto mb-3 rounded-[1.375rem] bg-accent p-6 text-white"
            >
              <p className="font-display text-xl font-medium">
                Un projet à construire ?
              </p>
              <p className="mt-1.5 text-sm text-white/85">
                {contact.hours.responseTime} ouvrées.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openProjectModal();
                }}
                className="btn-invert btn-lg mt-4 w-full"
              >
                Démarrer un projet
              </button>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                >
                  <Mail aria-hidden="true" className="size-4 text-mint" />
                  {contact.email}
                </a>
                <SocialLinks tone="dark" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
