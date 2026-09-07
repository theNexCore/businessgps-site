"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The three-beat compass assembly on /what-it-is.
 *
 * 1. the centre core, as a bullet at the start of the first line
 * 2. the mark complete except the arrow, at the end of that line
 * 3. the mark with the arrow, which fades in on scroll beside the second line
 *
 * The arrow is present in the markup the whole time and only its opacity
 * changes, so its layout box is reserved from first paint and nothing shifts
 * when it appears. Fires once.
 *
 * The three marks are rendered on the server and handed in as children — the
 * SVGs are read off disk, which cannot cross the client boundary.
 */
export function CompassAssembly({
  core,
  markNoArrow,
  markWithArrow,
}: {
  core: ReactNode;
  markNoArrow: ReactNode;
  markWithArrow: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        window.setTimeout(() => setArmed(true), reduced ? 0 : 260);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-4xl">
      {/* Beat one: core at the head of the line, mark-without-arrow at its end. */}
      <p className="flex items-center gap-4 text-2xl font-extrabold leading-snug tracking-tight text-navy sm:gap-5 sm:text-3xl">
        <span className="inline-flex h-7 w-7 shrink-0 sm:h-9 sm:w-9">{core}</span>
        <span className="min-w-0 flex-1">
          A room of people committed to growth &mdash; their own, and everyone else&rsquo;s.
        </span>
        <span className="inline-flex h-12 w-12 shrink-0 sm:h-16 sm:w-16">{markNoArrow}</span>
      </p>

      {/* Beat two: the same mark with the arrow, which fades in on scroll. */}
      <p className="mt-10 flex items-center gap-4 text-2xl font-extrabold leading-snug tracking-tight text-navy sm:gap-5 sm:text-3xl">
        <span className="min-w-0 flex-1">
          What you walk out with is almost impossible to measure.
        </span>
        <span
          data-arrow-reveal={armed ? "shown" : "hidden"}
          className="inline-flex h-14 w-14 shrink-0 sm:h-20 sm:w-20"
        >
          {markWithArrow}
        </span>
      </p>
    </div>
  );
}
