"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contact, links } from "@/lib/site";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/lib/gsap";
import SplitHeading from "@/components/motion/SplitHeading";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  {
    label: "Téléphone",
    value: contact.phone.label,
    href: `tel:${contact.phone.value}`,
  },
  { label: "Bureau", value: `${contact.office.city}, sur rendez-vous` },
  { label: "Horaires", value: contact.hours.weekdays },
];

/**
 * Left half of the V2 contact page: a tall photo panel carrying the title,
 * the four contact channels as frosted tiles, and the booking link.
 */
export default function ContactPanel() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-anim]", { opacity: 1, y: 0 });
        return;
      }
      gsap
        .timeline({ defaults: { ease: EASE } })
        .fromTo(
          root.current,
          { opacity: 1, clipPath: "inset(6% 6% 6% 6% round 40px)" },
          { clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.3, ease: "expo.inOut" },
          0,
        )
        .fromTo("[data-cp-image]", { scale: 1.3 }, { scale: 1.05, duration: 2, ease: "expo.out" }, 0)
        .fromTo("[data-cp-lede]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 0.9)
        .fromTo(
          "[data-cp-tile]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          1,
        )
        .fromTo("[data-cp-cta]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, 1.3);
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      data-anim
      className="relative min-h-[38rem] overflow-hidden rounded-panel bg-[#12201f] text-white lg:min-h-[40rem]"
    >
      <div data-cp-image className="absolute inset-0">
        <Image
          src="/media/v2/spirale-sarcelle.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgb(7_18_17/0.9)] via-[rgb(7_18_17/0.45)] to-[rgb(7_18_17/0.15)]"
      />

      <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
        <SplitHeading
          as="h1"
          delay={0.6}
          className="display text-[2.125rem] leading-[1.14] text-white sm:text-[3rem]"
        >
          Donnons vie à votre projet.
        </SplitHeading>
        <p
          data-anim
          data-cp-lede
          className="mt-3.5 max-w-[29rem] text-base leading-relaxed text-white/88"
        >
          Une personne de l&apos;équipe technique vous répond sous 24h ouvrées.
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {channels.map((channel) => {
            const body = (
              <>
                <span className="block text-xs text-white/75">
                  {channel.label}
                </span>
                <span className="mt-0.5 block text-[0.9375rem] font-medium">
                  {channel.value}
                </span>
              </>
            );
            return (
              <li key={channel.label} data-anim data-cp-tile>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="block rounded-[0.875rem] bg-white/12 px-4 py-3.5 backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="rounded-[0.875rem] bg-white/12 px-4 py-3.5 backdrop-blur-md">
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <a
          data-anim
          data-cp-cta
          href={links.meeting}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 inline-flex h-[3.125rem] items-center gap-2.5 rounded-full bg-white pr-2 pl-[1.375rem] text-[0.9375rem] font-semibold text-accent transition-colors hover:bg-mint"
        >
          Réserver un appel de 30 min
          <span className="grid size-[2.125rem] place-items-center rounded-full bg-accent text-white transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="size-3.5" />
          </span>
        </a>
      </div>
    </div>
  );
}
