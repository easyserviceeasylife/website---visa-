"use client";
import { useEffect, useRef } from "react";
import { howWeHelpHtml } from "./content";

export default function HowWeHelpSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveal = () => root.classList.add("is-in-view");
    if (!("IntersectionObserver" in window)) { reveal(); return; }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { reveal(); observer.disconnect(); }
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);
  return <div ref={rootRef} className="pk-help-scope" dangerouslySetInnerHTML={{ __html: howWeHelpHtml }} />;
}
