"use client";

import { useEffect, useRef, useState } from "react";
import { quotes, type Quote } from "@/data/quotes";

/**
 * Member voices as a scrolling carousel.
 *
 * Built on native scroll-snap rather than a library: the cards are a plain
 * scrollable list, so it works before hydration, responds to trackpad swipe and
 * touch, and stays keyboard-reachable. The arrows and dots drive the same
 * scroll container.
 *
 * Adding a sixth voice is one object in data/quotes.ts — nothing here changes.
 */

function Card({ quote }: { quote: Quote }) {
  return (
    <li className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-2.5rem)/3)]">
      <figure className="flex h-full flex-col rounded-2xl border border-faint bg-white p-7 sm:p-8">
        {quote.live ? (
          <blockquote className="prose-body flex-1 text-navy">
            {/* Quotes ship verbatim, paragraph breaks included: the opening
                mark goes on the first, the closing mark on the last. */}
            {quote.quote.split("\n").map((paragraph, i, all) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {i === 0 ? "“" : ""}
                {paragraph}
                {i === all.length - 1 ? "”" : ""}
              </p>
            ))}
          </blockquote>
        ) : (
          <p className="prose-body flex-1 italic text-navy/45">
            Quote coming &mdash; {quote.name} has been asked.
          </p>
        )}
        <figcaption className="mt-7 border-t border-faint pt-5">
          <span className="block text-sm font-bold uppercase tracking-[0.12em] text-navy">
            {quote.name}
          </span>
          <span className="block text-sm text-navy/65">{quote.business}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export function QuoteCards() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 20;
      setIndex(Math.round(track.scrollLeft / step));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const clamped = Math.max(0, Math.min(target, quotes.length - 1));
    track.scrollTo({ left: clamped * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {quotes.map((quote) => (
          <Card key={quote.name} quote={quote} />
        ))}
      </ul>

      <div className="mt-7 flex items-center gap-4">
        <button
          type="button"
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous quote"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition-colors hover:border-navy disabled:opacity-35 disabled:hover:border-navy/20"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollTo(index + 1)}
          disabled={index >= quotes.length - 1}
          aria-label="Next quote"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition-colors hover:border-navy disabled:opacity-35 disabled:hover:border-navy/20"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <ul className="flex gap-2">
          {quotes.map((quote, i) => (
            <li key={quote.name}>
              {/* The visible dot is small; the button around it carries a
                  full-size touch target. */}
              <button
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${quote.name}`}
                aria-current={i === index ? "true" : undefined}
                className="flex h-11 w-6 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-blue" : "w-2 bg-navy/20"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
