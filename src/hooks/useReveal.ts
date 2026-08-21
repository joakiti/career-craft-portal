import { useEffect, useRef, useState } from "react";

type Phase = "static" | "hidden" | "shown";

/**
 * Progressive scroll reveal that never hides content from crawlers or from
 * humans before JS runs: server markup and the first client render are fully
 * visible. Only elements still below the viewport once JS is live get hidden
 * and animated in when scrolled to.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;

    setPhase("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass =
    phase === "hidden"
      ? "opacity-0"
      : phase === "shown"
        ? "animate-slide-in-up"
        : "";

  return { ref, revealClass };
};
