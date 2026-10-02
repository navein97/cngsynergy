"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Tells its children how far the visitor has scrolled through it.
 *
 * It keeps a CSS variable, `--p`, on its own element: 0 when the block starts
 * coming into view, 1 once it has been scrolled through. Styles in
 * globals.css read `--p` to light up text, open photos, fill lines and so on.
 *
 * `from` and `to` are positions on the screen (0 = top edge, 1 = bottom edge).
 * The effect starts when the block's top reaches `from` and finishes when its
 * bottom reaches `to`.
 *
 * Without JavaScript, or with reduced motion switched on, `--p` stays at 1, so
 * everything simply shows in its finished state.
 */
export function ScrollProgress({
  children,
  className = "",
  from = 0.9,
  to = 0.6,
  style,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const start = window.innerHeight * from;
      const end = window.innerHeight * to;
      const distance = rect.height + start - end;
      const progress = distance > 0 ? (start - rect.top) / distance : 1;
      element.style.setProperty(
        "--p",
        Math.min(1, Math.max(0, progress)).toFixed(4),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      element.style.removeProperty("--p");
    };
  }, [from, to]);

  return (
    <div ref={ref} className={`scroll-scene ${className}`} style={style}>
      {children}
    </div>
  );
}
