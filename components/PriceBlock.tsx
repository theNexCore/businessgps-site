import type { ReactNode } from "react";

const includes: { text: ReactNode; emphasis?: boolean }[] = [
  { text: "Same price for every member" },
  { text: "No processing fee, no initiation fee" },
  { text: "No contract — month to month" },
  { text: "No renewal date, no expiring term" },
  { text: "All chapter materials provided" },
  { text: "Visiting is free. Always.", emphasis: true },
];

function Tick({ emphasis }: { emphasis?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0" aria-hidden="true">
      <path
        d="M4 12.5l5 5L20 6.5"
        fill="none"
        stroke={emphasis ? "#FF0000" : "#005FFE"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PriceBlock() {
  return (
    <div className="grid items-center gap-10 rounded-panel border border-faint bg-wash px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="flex items-start font-extrabold leading-none tracking-tighter text-navy">
          <span className="text-6xl sm:text-7xl">$</span>
          <span className="text-8xl sm:text-9xl">59</span>
          <span className="mt-2 text-4xl text-redink sm:mt-3 sm:text-5xl">95</span>
        </p>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.24em] text-navy/60">Per month</p>
      </div>

      <ul className="space-y-4">
        {includes.map((item, index) => (
          <li key={index} className="flex gap-3.5">
            <Tick emphasis={item.emphasis} />
            <span
              className={`text-lg tracking-tight ${
                item.emphasis ? "font-bold text-redink" : "font-semibold text-navy"
              }`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
