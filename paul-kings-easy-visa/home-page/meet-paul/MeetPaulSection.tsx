"use client";

import { useEffect, useMemo, useRef } from "react";
import { meetPaulHtml } from "./content";

function moveNameBadgeToCardFooter(html: string) {
  const badgeMatch = html.match(/<div class="name-badge">[\s\S]*?<\/div>/);
  if (!badgeMatch) return html;

  const badge = badgeMatch[0];
  const withoutBadge = html.replace(badge, "");

  // The promise panel starts immediately after the Meet Paul card.
  // Insert the Paul name bar just before that card closes so it can span
  // the full card width instead of being trapped inside the portrait column.
  return withoutBadge.replace(
    /<\/div>\s*<div class="promise-panel">/,
    `${badge}</div><div class="promise-panel">`,
  );
}

export default function MeetPaulSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const sectionHtml = useMemo(() => moveNameBadgeToCardFooter(meetPaulHtml), []);

  useEffect(() => {
    const root = rootRef.current;
    const targets = [
      root?.querySelector<HTMLElement>(".meet-card"),
      root?.querySelector<HTMLElement>(".promise-panel"),
      root?.querySelector<HTMLElement>(".legal-services"),
    ].filter((item): item is HTMLElement => Boolean(item));

    if (!targets.length) return;

    const reveal = (element: HTMLElement) => element.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="pk-meet-scope"
      dangerouslySetInnerHTML={{ __html: sectionHtml }}
    />
  );
}
