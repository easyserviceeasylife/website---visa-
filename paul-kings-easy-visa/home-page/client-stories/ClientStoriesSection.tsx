"use client";
import { useEffect, useRef } from "react";
import { clientStoriesHtml } from "./content";

export default function ClientStoriesSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stories = Array.from(rootRef.current?.querySelectorAll<HTMLElement>(".journey-story") ?? []);
    if (!stories.length) return;
    const reveal = (story: HTMLElement) => story.classList.add("is-visible");
    if (!("IntersectionObserver" in window)) { stories.forEach(reveal); return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { reveal(entry.target as HTMLElement); observer.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.16 });
    stories.forEach((story) => observer.observe(story));
    return () => observer.disconnect();
  }, []);
  return <div ref={rootRef} className="pk-client-scope" dangerouslySetInnerHTML={{ __html: clientStoriesHtml }} />;
}
