"use client";

import { useEffect } from "react";
import { sectionHtml } from "./sections";

export default function HomePage() {
  useEffect(() => {
    const cleanup: Array<() => void> = [];

    // Hero destination slideshow — same timing, fade, controls, pause and focus behaviour.
    const heroRoot = document.querySelector<HTMLElement>(".pk-hero-scope");
    const slider = heroRoot?.querySelector<HTMLElement>("#destination-slider");
    if (slider) {
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

      const stop = () => {
        if (timer) clearInterval(timer);
      };

      const start = () => {
        if (reducedMotion) return;
        stop();
        timer = setInterval(() => showSlide(current + 1), 3600);
      };

      const dotHandlers = dots.map((dot, index) => {
        const handler = () => {
          showSlide(index);
          start();
        };
        dot.addEventListener("click", handler);
        return { dot, handler };
      });

      slider.addEventListener("mouseenter", stop);
      slider.addEventListener("mouseleave", start);
      slider.addEventListener("focusin", stop);
      slider.addEventListener("focusout", start);

      showSlide(0);
      start();

      cleanup.push(() => {
        stop();
        dotHandlers.forEach(({ dot, handler }) => dot.removeEventListener("click", handler));
        slider.removeEventListener("mouseenter", stop);
        slider.removeEventListener("mouseleave", start);
        slider.removeEventListener("focusin", stop);
        slider.removeEventListener("focusout", start);
      });
    }

    // How We Help entrance animation — start when the section is actually visible.
    const helpRoot = document.querySelector<HTMLElement>(".pk-help-scope");
    if (helpRoot) {
      const revealHelp = () => helpRoot.classList.add("is-in-view");
      if (!("IntersectionObserver" in window)) {
        revealHelp();
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealHelp();
              observer.disconnect();
            }
          });
        }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
        observer.observe(helpRoot);
        cleanup.push(() => observer.disconnect());
      }
    }

    // How It Works scroll progress — same trigger point and activation sequence.
    const processRoot = document.querySelector<HTMLElement>(".pk-process-scope");
    const steps = Array.from(processRoot?.querySelectorAll<HTMLElement>(".process-step") ?? []);
    const progressFill = processRoot?.querySelector<HTMLElement>("#progressFill");
    if (steps.length && progressFill) {
      let ticking = false;
      let currentActiveStep = -1;
      const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

      const updateProcess = () => {
        const triggerY = window.scrollY + window.innerHeight * 0.72;
        const anchors = steps.map((step) => {
          const rect = step.getBoundingClientRect();
          const earlyOffset = Math.min(110, rect.height * 0.18);
          return window.scrollY + rect.top + earlyOffset;
        });

        const firstAnchor = anchors[0];
        const lastAnchor = anchors[anchors.length - 1];
        const denominator = lastAnchor - firstAnchor;
        const progress = denominator === 0
          ? 100
          : clamp(((triggerY - firstAnchor) / denominator) * 100, 0, 100);

        progressFill.style.height = `${progress}%`;

        let activeStep = 0;
        anchors.forEach((anchor, index) => {
          if (triggerY >= anchor) activeStep = index;
        });

        if (activeStep !== currentActiveStep) {
          currentActiveStep = activeStep;
          steps.forEach((step, index) => step.classList.toggle("is-active", index <= activeStep));
        }
        ticking = false;
      };

      const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateProcess);
      };

      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
      requestUpdate();

      cleanup.push(() => {
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
      });
    }

    // Client journey reveal animation.
    const clientRoot = document.querySelector<HTMLElement>(".pk-client-scope");
    const stories = Array.from(clientRoot?.querySelectorAll<HTMLElement>(".journey-story") ?? []);
    if (stories.length) {
      const reveal = (story: HTMLElement) => story.classList.add("is-visible");
      if (!("IntersectionObserver" in window)) {
        stories.forEach(reveal);
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: "0px 0px -12% 0px", threshold: 0.16 });
        stories.forEach((story) => observer.observe(story));
        cleanup.push(() => observer.disconnect());
      }
    }

    // Meet Paul reveal animation.
    const meetRoot = document.querySelector<HTMLElement>(".pk-meet-scope");
    const revealTargets = [
      meetRoot?.querySelector<HTMLElement>(".meet-card"),
      meetRoot?.querySelector<HTMLElement>(".promise-panel"),
      meetRoot?.querySelector<HTMLElement>(".legal-services"),
    ].filter((item): item is HTMLElement => Boolean(item));

    if (revealTargets.length) {
      const reveal = (element: HTMLElement) => element.classList.add("is-visible");
      if (!("IntersectionObserver" in window)) {
        revealTargets.forEach(reveal);
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
        revealTargets.forEach((target) => observer.observe(target));
        cleanup.push(() => observer.disconnect());
      }
    }

    // FAQ mobile accordion — same one-open-at-a-time behaviour.
    const faqRoot = document.querySelector<HTMLElement>(".pk-faq-scope");
    const faqItems = Array.from(faqRoot?.querySelectorAll<HTMLElement>(".faq-item") ?? []);
    if (faqItems.length) {
      const mobileQuery = window.matchMedia("(max-width: 720px)");

      const updateItem = (item: HTMLElement, open: boolean) => {
        const button = item.querySelector<HTMLButtonElement>(".faq-mobile-head");
        const icon = item.querySelector<HTMLElement>(".faq-mobile-toggle");
        item.classList.toggle("is-open", open);
        button?.setAttribute("aria-expanded", open ? "true" : "false");
        if (icon) icon.textContent = open ? "−" : "+";
      };

      const handlers = faqItems.map((item) => {
        const button = item.querySelector<HTMLButtonElement>(".faq-mobile-head");
        const handler = () => {
          if (!mobileQuery.matches) return;
          const shouldOpen = !item.classList.contains("is-open");
          faqItems.forEach((other) => updateItem(other, false));
          if (shouldOpen) updateItem(item, true);
        };
        button?.addEventListener("click", handler);
        return { button, handler };
      });

      const syncDesktopState = () => {
        if (!mobileQuery.matches) {
          faqItems.forEach((item) => item.querySelector(".faq-mobile-head")?.setAttribute("aria-expanded", "true"));
        } else if (!faqItems.some((item) => item.classList.contains("is-open"))) {
          updateItem(faqItems[0], true);
        }
      };

      mobileQuery.addEventListener?.("change", syncDesktopState);
      syncDesktopState();

      cleanup.push(() => {
        handlers.forEach(({ button, handler }) => button?.removeEventListener("click", handler));
        mobileQuery.removeEventListener?.("change", syncDesktopState);
      });
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div id="top" className="pk-hero-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.hero }} />
      <div className="pk-help-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.help }} />
      <div className="pk-process-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.process }} />
      <div className="pk-client-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.clients }} />
      <div className="pk-meet-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.meet }} />
      <div className="pk-faq-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.faq }} />
      <div className="pk-contact-scope" dangerouslySetInnerHTML={{ __html: sectionHtml.contact }} />
    </>
  );
}
