import { CompassPoint } from "./BrandGeometry";

/**
 * Assess → Evolve → Grow, and back to Assess. The return arrow is the point,
 * so the loop is drawn closed rather than as a three-step line.
 *
 * Inline SVG on desktop; on narrow screens the three nodes stack vertically
 * with a return arrow, since a circle that small stops being readable.
 */

const NODES = [
  {
    label: "Assess.",
    body: "Honestly look at your situation — what works, what doesn't, and what needs to change.",
  },
  { label: "Evolve.", body: "Make the changes." },
  {
    label: "Grow.",
    body: "And that growth brings you back — to reassess, to evolve again. The cycle repeats.",
  },
];

const TEAL = "#01A6C2";
const NAVY = "#001749";

const SIZE = 460;
const C = SIZE / 2;
const R = 148;

function point(angleDeg: number, radius = R) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: C + radius * Math.cos(rad), y: C + radius * Math.sin(rad) };
}

/** Arc from one node to the next, stopping short of both so arrowheads clear. */
function arc(fromDeg: number, toDeg: number) {
  const gap = 26;
  const a = point(fromDeg + gap, R);
  const b = point(toDeg - gap, R);
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${R} ${R} 0 0 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

export function GrowthCycle() {
  const angles = [0, 120, 240];

  return (
    <div>
      {/* Desktop: the closed loop. */}
      <div className="hidden justify-center lg:flex">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label="Assess, then Evolve, then Grow — and growth returns you to Assess. The cycle repeats."
          className="h-auto w-full max-w-[460px]"
        >
          <defs>
            <marker id="gc-head" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M1 1 L11 6 L1 11 z" fill={TEAL} />
            </marker>
          </defs>

          {angles.map((from, i) => (
            <path
              key={from}
              d={arc(from, angles[(i + 1) % angles.length] + (i === angles.length - 1 ? 360 : 0))}
              fill="none"
              stroke={TEAL}
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#gc-head)"
            />
          ))}

          {angles.map((angle, i) => {
            const p = point(angle);
            return (
              <g key={NODES[i].label}>
                <circle cx={p.x} cy={p.y} r="46" fill="#FFFFFF" stroke={TEAL} strokeWidth="2.5" />
                <text
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="19"
                  fontWeight="800"
                  fill={NAVY}
                >
                  {NODES[i].label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* The copy, and on mobile the stacked version of the loop. */}
      <ol className="mt-10 space-y-5 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        {NODES.map((node, i) => (
          <li key={node.label} className="rounded-2xl border border-faint bg-white p-7">
            <div className="flex items-center gap-3">
              <CompassPoint tone="teal" />
              <h3 className="text-xl font-extrabold tracking-tight text-navy">{node.label}</h3>
            </div>
            <p className="prose-body mt-3 text-navy/75">{node.body}</p>
            {i === NODES.length - 1 ? (
              <p className="mt-4 flex items-center gap-2 text-sm font-bold text-tealink lg:hidden">
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
    </div>
  );
}
