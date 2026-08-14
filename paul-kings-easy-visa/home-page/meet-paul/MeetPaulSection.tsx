"use client";
import { useEffect, useRef } from "react";
import { meetPaulHtml } from "./content";

export default function MeetPaulSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    const targets = [
      root?.querySelector<HTMLElement>(".meet-card"),
      root?.querySelector<HTMLElement>(".promise-panel"),
      root?.querySelector<HTMLElement>(".legal-services"),
    ].filter((item): item is HTMLElement => Boolean(item));
    if (!targets.length) return;
    const reveal = (element: HTMLElement) => element.classList.add("is-visible");
    if (!("IntersectionObserver" in window)) { targets.forEach(reveal); return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { reveal(entry.target as HTMLElement); observer.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return <div ref={rootRef} className="pk-meet-scope" dangerouslySetInnerHTML={{ __html: meetPaulHtml }} />;
}
