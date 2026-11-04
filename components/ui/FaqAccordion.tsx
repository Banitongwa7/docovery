"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

/**
 * Accessible FAQ (Radix Accordion: roving focus, aria-expanded, keyboard
 * arrows). The panel height animates through Radix's CSS variable — see the
 * `accordion-down/up` keyframes in globals.css.
 */
export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className="flex flex-col gap-2.5"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="group overflow-hidden rounded-2xl bg-surface transition-colors duration-300 data-[state=open]:bg-accent-soft"
        >
          <Accordion.Header asChild>
            <h3>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-[1.125rem] text-left text-base font-semibold text-ink sm:px-6">
                {item.question}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-canvas text-ink transition-all duration-500 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-accent group-data-[state=open]:text-white"
                >
                  <Plus className="size-4" />
                </span>
              </Accordion.Trigger>
            </h3>
          </Accordion.Header>
          <Accordion.Content className="accordion-content overflow-hidden">
            <p className="px-5 pb-5 text-[0.9375rem] leading-relaxed text-ink-soft sm:px-6">
              {item.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
