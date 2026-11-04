"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/site";
import { useProjectModal } from "@/components/providers/ProjectModalProvider";

/**
 * Fixed "Démarrer un projet" pill for phones (V2).
 *
 * It only appears once the hero CTA has scrolled away, and steps aside as soon
 * as the footer — which carries the same call-to-action — enters the viewport,
 * so the two never compete. Hidden on the contact page, which is the form.
 */
export default function MobileProjectBar() {
  const { openProjectModal } = useProjectModal();
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("pied-de-page");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const visible = pastHero && !footerVisible && pathname !== "/contact";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Démarrer un projet"
          initial={{ y: 110, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 110, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed inset-x-3 bottom-3 z-30 rounded-[1.375rem] bg-canvas/95 p-2 shadow-[0_12px_32px_-10px_rgba(7,18,17,0.35),0_0_0_1px_rgba(7,18,17,0.06)] backdrop-blur-xl md:hidden"
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        >
          <button
            type="button"
            onClick={() => openProjectModal()}
            className="flex h-[3.25rem] w-full items-center justify-between gap-3 rounded-full bg-accent pr-2 pl-5 text-left text-white active:scale-[0.98]"
          >
            <span className="text-[0.9375rem] font-semibold leading-tight">
              Démarrer un projet
              <span className="block text-xs font-normal text-white/80">
                {contact.hours.responseTime} ouvrées
              </span>
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white text-accent">
              <ArrowRight className="size-4" />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
