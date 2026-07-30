"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, links, contact } from "@/lib/site";
import { cn } from "@/lib/utils";

const PANEL_EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  // Lenis scrolls the window in root mode, so the native value stays accurate.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-line bg-canvas/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="container-x flex h-18 items-center justify-between gap-6"
      >
        <Link
          href="/"
          aria-label="Docovery — Accueil"
          className="text-[1.35rem] font-semibold tracking-[-0.04em] text-ink"
        >
          Docovery<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-surface"
                      transition={{ duration: 0.4, ease: PANEL_EASE }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${contact.phone.value}`}
            className="hidden text-sm text-muted transition-colors hover:text-ink xl:block"
          >
            {contact.phone.label}
          </a>

          <motion.a
            href={links.meeting}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="btn-dark btn-md group hidden sm:inline-flex"
          >
            Prendre Rendez-vous
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Reading progress — a quiet finance-dashboard cue. */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="h-px origin-left bg-accent"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: PANEL_EASE }}
            className="overflow-hidden border-t border-line bg-canvas lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 + index * 0.05,
                    duration: 0.45,
                    ease: PANEL_EASE,
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-4 text-lg tracking-[-0.01em]",
                      isActive(item.href) ? "text-accent" : "text-ink",
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="size-4 text-muted" />
                  </Link>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.06 + navItems.length * 0.05,
                  duration: 0.45,
                  ease: PANEL_EASE,
                }}
                className="pt-6 pb-2"
              >
                <a
                  href={links.meeting}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg w-full"
                >
                  Prendre Rendez-vous
                  <ArrowUpRight className="size-4" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
