"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "What happens there" — three lines whose qualifier arrives after the verb,
 * then a closing beat once all three have landed.
 *
 * Fires once, on scroll into view. Never loops.
 *
 * The stagger is tunable from REVEAL_DELAYS alone; nothing else encodes timing.
 */
const REVEAL_DELAYS = {
  learn: 500,
  build: 1250,
  grow: 2000,
  close: 2750,
} as const;

const lines = [
  { key: "learn", verb: "You learn", qualifier: "together." },
  { key: "build", verb: "You build", qualifier: "each other." },
  { key: "grow", verb: "You grow", qualifier: "intentionally." },
] as const;

export function HappensThere() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Someone who prefers reduced motion gets the finished state at once —
    // same code path, every delay collapsed to zero.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        for (const [key, delay] of Object.entries(REVEAL_DELAYS)) {
          timers.push(
            window.setTimeout(
              () => setShown((prev) => ({ ...prev, [key]: true })),
              reduced ? 0 : delay,
            ),
          );
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div ref={ref} className="max-w-4xl">
      <ul className="space-y-6 sm:space-y-8">
        {lines.map((line) => (
          <li
            key={line.key}
            className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl"
          >
            {line.verb}{" "}
            <span
              className="inline-block text-blue transition-all duration-700 ease-out"
              style={{
                opacity: shown[line.key] ? 1 : 0,
                transform: shown[line.key] ? "translateY(0)" : "translateY(0.35em)",
              }}
            >
              {line.qualifier}
            </span>
          </li>
        ))}
      </ul>

      <p
        className="mt-12 text-balance text-2xl font-extrabold leading-tight tracking-tight text-redink transition-all duration-700 ease-out sm:text-3xl"
        style={{
          opacity: shown.close ? 1 : 0,
          transform: shown.close ? "translateY(0)" : "translateY(0.35em)",
        }}
      >
        Nothing happens by accident.
      </p>
    </div>
  );
}
