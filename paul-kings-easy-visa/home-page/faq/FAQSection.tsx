"use client";
import { useEffect, useRef } from "react";
import { faqHtml } from "./content";

export default function FAQSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = Array.from(rootRef.current?.querySelectorAll<HTMLElement>(".faq-item") ?? []);
    if (!items.length) return;
    const mobileQuery = window.matchMedia("(max-width: 720px)");
    const updateItem = (item: HTMLElement, open: boolean) => {
      const button = item.querySelector<HTMLButtonElement>(".faq-mobile-head");
      const icon = item.querySelector<HTMLElement>(".faq-mobile-toggle");
      item.classList.toggle("is-open", open);
      button?.setAttribute("aria-expanded", open ? "true" : "false");
      if (icon) icon.textContent = open ? "−" : "+";
    };
    const handlers = items.map((item) => {
      const button = item.querySelector<HTMLButtonElement>(".faq-mobile-head");
      const handler = () => {
        if (!mobileQuery.matches) return;
        const shouldOpen = !item.classList.contains("is-open");
        items.forEach((other) => updateItem(other, false));
        if (shouldOpen) updateItem(item, true);
      };
      button?.addEventListener("click", handler);
      return { button, handler };
    });
    const sync = () => {
      if (!mobileQuery.matches) items.forEach((item) => item.querySelector(".faq-mobile-head")?.setAttribute("aria-expanded", "true"));
      else if (!items.some((item) => item.classList.contains("is-open"))) updateItem(items[0], true);
    };
    mobileQuery.addEventListener?.("change", sync);
    sync();
    return () => {
      handlers.forEach(({ button, handler }) => button?.removeEventListener("click", handler));
      mobileQuery.removeEventListener?.("change", sync);
    };
  }, []);
  return <div ref={rootRef} className="pk-faq-scope" dangerouslySetInnerHTML={{ __html: faqHtml }} />;
}
