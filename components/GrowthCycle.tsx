import { CompassPoint } from "./BrandGeometry";

/**
 * Assess → Evolve → Grow, and back to Assess.
 *
 * Copy only. The Focus10 artwork on this page already carries the cycle
 * imagery, so a built diagram alongside it would state the same thing twice.
 * The return to Assess is carried by the Grow copy and the marker beneath it.
 */

const NODES = [
  {
    label: "Assess.",
    body: "Honestly look at your situation — what works, what doesn't, and what needs to change.",
  },
  { label: "Evolve.", body: "Make the changes — no matter how difficult." },
  {
    label: "Grow.",
    body: "And that growth brings you back — to reassess, to evolve again. The cycle repeats.",
  },
];

export function GrowthCycle() {
  return (
    <ol className="space-y-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
      {NODES.map((node, index) => (
        <li key={node.label} className="rounded-2xl border border-faint bg-white p-7">
          <div className="flex items-center gap-3">
            <CompassPoint tone="teal" />
            <h3 className="text-xl font-extrabold tracking-tight text-navy">{node.label}</h3>
          </div>
          <p className="prose-body mt-3 text-navy/75">{node.body}</p>
          {index === NODES.length - 1 ? (
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-tealink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M20 11a8 8 0 1 0-2.3 5.7M20 5v6h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Assess
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
