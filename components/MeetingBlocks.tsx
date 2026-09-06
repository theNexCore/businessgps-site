"use client";

import { useState } from "react";
import { meetingBlocks } from "@/data/meeting";

/**
 * The five meeting blocks, stacked beside the dial.
 *
 * At rest only the labels and durations show. Descriptions reveal on hover on
 * a pointer device and on tap everywhere else — the same button drives both,
 * so it is keyboard-operable and screen readers get a real expanded state.
 */
export function MeetingBlocks() {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <ol className="space-y-px overflow-hidden rounded-2xl border border-faint bg-faint">
      {meetingBlocks.map((block) => {
        const revealed = open === block.number || hovered === block.number;
        return (
          <li key={block.number} className="bg-white">
            <button
              type="button"
              aria-expanded={revealed}
              aria-controls={`block-${block.number}`}
              onClick={() => setOpen(open === block.number ? null : block.number)}
              onMouseEnter={() => setHovered(block.number)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(block.number)}
              onBlur={() => setHovered(null)}
              className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-wash sm:px-7"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                style={{ backgroundColor: block.hex }}
                aria-hidden="true"
              >
                {block.number}
              </span>
              <span className="flex-1">
                <span className="block text-lg font-extrabold tracking-tight text-navy">
                  {block.name}
                </span>
              </span>
              <span className="shrink-0 text-sm font-bold uppercase tracking-[0.12em] text-navy/65">
                {block.duration}
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 shrink-0 text-navy/45 transition-transform ${
                  revealed ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path
                  d="M5 8.5 12 15.5 19 8.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              id={`block-${block.number}`}
              hidden={!revealed}
              onMouseEnter={() => setHovered(block.number)}
              onMouseLeave={() => setHovered(null)}
              className="px-6 pb-6 sm:px-7"
            >
              <p className="prose-body max-w-2xl pl-13 text-navy/75">{block.detail}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
