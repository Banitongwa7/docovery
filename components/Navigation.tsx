"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "@/utils/socialTeam";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#home", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "À Propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Sections that live on the landing page (hash-based)
const LANDING_SECTIONS = ["home", "services", "about"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Track which landing-page section is currently visible
  const [activeSection, setActiveSection] = useState<string>("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver: highlight nav link matching the visible section
  useEffect(() => {
    if (!isLandingPage) return;

    const observers: IntersectionObserver[] = [];
    // Map section id -> how much of the viewport it covers
    const visibilityMap: Record<string, number> = {};

    LANDING_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio;
          // Pick the section with the highest visibility ratio
          const best = Object.entries(visibilityMap).reduce(
            (max, [key, ratio]) => (ratio > max.ratio ? { key, ratio } : max),
            { key: "home", ratio: 0 }
          );
          if (best.ratio > 0) setActiveSection(best.key);
        },
        // Observe multiple thresholds for smooth tracking
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], rootMargin: "-80px 0px -20% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isLandingPage]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /**
   * Determine whether a nav item should be highlighted:
   * - Hash links (/#section) → match activeSection when on landing page
   * - Other routes (/blog, /contact) → match pathname
   */
  const isActiveLink = useCallback(
    (href: string) => {
      if (href.startsWith("/#")) {
        if (!isLandingPage) return false;
        const section = href.slice(2); // strip "/#"
        return activeSection === section;
      }
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname, activeSection, isLandingPage]
  );

  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${isScrolled ? "pt-4" : "pt-6"}`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full ${
          isScrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-100 px-6"
            : "bg-transparent px-2"
        }`}
      >
        <div className="flex justify-between h-16 sm:h-20 items-center gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Docovery - Accueil"
          >
            <div className="flex items-center space-x-2.5 relative">
              <span className={`text-xl sm:text-2xl font-bold tracking-tighter relative z-10 transition-all duration-300 ${isScrolled ? "text-gray-900" : "text-gray-900"}`}>
                Docovery<span className="text-blue-600">.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    active
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {/* Active / hover subtle indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 bg-blue-500 rounded-full transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href={Links.meeting}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <span>Prendre Rendez-vous</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 flex-shrink-0 text-gray-900 hover:bg-gray-100`}
          >
            <span className="sr-only">{isOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <div className="relative w-6 h-6">
              <LuMenu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                aria-hidden="true"
              />
              <LuX
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                aria-hidden="true"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Menu de navigation mobile"
        aria-modal="true"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden absolute w-[calc(100%-2rem)] mx-4 left-0 mt-4 z-40 ${isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } bg-white border border-gray-100 shadow-xl rounded-2xl`}
      >
        <div className="px-4 py-5 space-y-1">
          {/* Nav Links */}
          {navItems.map((item, index) => {
            const active = isActiveLink(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                )}
                <span className={active ? "" : "ml-[18px]"}>{item.label}</span>
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <div className="pt-3 pb-1">
            <Link
              href={Links.meeting}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group relative flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3.5 rounded-xl font-medium text-base hover:bg-blue-700 shadow-md transition-all duration-300 focus:outline-none"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
