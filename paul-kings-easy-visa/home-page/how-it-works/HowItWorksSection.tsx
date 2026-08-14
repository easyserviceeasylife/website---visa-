"use client";
import { useEffect, useRef } from "react";
import { howItWorksHtml } from "./content";

export default function HowItWorksSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    const steps = Array.from(root?.querySelectorAll<HTMLElement>(".process-step") ?? []);
    const progressFill = root?.querySelector<HTMLElement>("#progressFill");
    if (!steps.length || !progressFill) return;
    let ticking = false;
    let currentActiveStep = -1;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
    const update = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.72;
      const anchors = steps.map((step) => {
        const rect = step.getBoundingClientRect();
        return window.scrollY + rect.top + Math.min(110, rect.height * 0.18);
      });
      const denominator = anchors[anchors.length - 1] - anchors[0];
      const progress = denominator === 0 ? 100 : clamp(((triggerY - anchors[0]) / denominator) * 100, 0, 100);
      progressFill.style.height = `${progress}%`;
      let activeStep = 0;
      anchors.forEach((anchor, index) => { if (triggerY >= anchor) activeStep = index; });
      if (activeStep !== currentActiveStep) {
        currentActiveStep = activeStep;
        steps.forEach((step, index) => step.classList.toggle("is-active", index <= activeStep));
      }
      ticking = false;
    };
    const requestUpdate = () => { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } };
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);
  return <div ref={rootRef} className="pk-process-scope" dangerouslySetInnerHTML={{ __html: howItWorksHtml }} />;
}
