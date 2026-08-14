"use client";

import { useEffect, useRef } from "react";
import { heroHtml } from "./content";

export default function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const slider = root?.querySelector<HTMLElement>("#destination-slider");
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll<HTMLElement>(".destination-slide"));
    const dots = Array.from(slider.querySelectorAll<HTMLButtonElement>(".slider-dot"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const showSlide = (index: number) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, i) => {
        const active = i === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
      });
      const activeCopy = slides[current]?.querySelector<HTMLElement>(".destination-copy");
      const name = activeCopy?.querySelector("h2")?.textContent?.trim() || "";
      const visa = activeCopy?.querySelector("p")?.textContent?.trim() || "";
      const number = activeCopy?.querySelector(".destination-number")?.textContent?.trim() || "";
      const nameTarget = slider.querySelector("#active-destination-name");
      const visaTarget = slider.querySelector("#active-destination-visa");
      const numberTarget = slider.querySelector("#active-destination-number");
      if (nameTarget) nameTarget.textContent = name;
      if (visaTarget) visaTarget.textContent = visa;
      if (numberTarget) numberTarget.textContent = number;
    };
    const stop = () => { if (timer) clearInterval(timer); };
    const start = () => { if (!reducedMotion) { stop(); timer = setInterval(() => showSlide(current + 1), 3600); } };
    const handlers = dots.map((dot, index) => {
      const handler = () => { showSlide(index); start(); };
      dot.addEventListener("click", handler);
      return { dot, handler };
    });
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);
    showSlide(0); start();
    return () => {
      stop();
      handlers.forEach(({ dot, handler }) => dot.removeEventListener("click", handler));
      slider.removeEventListener("mouseenter", stop);
      slider.removeEventListener("mouseleave", start);
      slider.removeEventListener("focusin", stop);
      slider.removeEventListener("focusout", start);
    };
  }, []);

  return <div id="top" ref={rootRef} className="pk-hero-scope" dangerouslySetInnerHTML={{ __html: heroHtml }} />;
}
