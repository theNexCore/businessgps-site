import {
  legend,
  markers,
  quarters,
  WEEKS_IN_QUARTER,
  WEEKS_IN_YEAR,
  YEAR_CLOSES,
  YEAR_OPENS,
} from "@/data/year";

/**
 * The year wheel: four thirteen-week quarters, the socials and givebacks that
 * sit inside them, the annual growth event near year-end, and leadership
 * turnover on the year boundary.
 *
 * Sibling of the meeting wheel — hand-built inline SVG, proportional arcs, no
 * chart library. Structure only; it never prints calendar dates.
 */

const SIZE = 360;
const CENTER = SIZE / 2;
const OUTER = 146;
const INNER = 88;
// Sits inside the band with room for the stacked two-line label: a diagonal
// label is drawn horizontally, so it needs more radial clearance than the
// midpoint alone would suggest.
const LABEL_RADIUS = 117;
const MARKER_RADIUS = 164;
const GAP_DEGREES = 2.6;

function polar(radius: number, angleDegrees: number) {
  const radians = ((angleDegrees - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  };
}

function annularSector(startAngle: number, endAngle: number) {
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  const outerStart = polar(OUTER, startAngle);
  const outerEnd = polar(OUTER, endAngle);
  const innerEnd = polar(INNER, endAngle);
  const innerStart = polar(INNER, startAngle);

  return [
    "M " + outerStart.x + " " + outerStart.y,
    "A " + OUTER + " " + OUTER + " 0 " + largeArc + " 1 " + outerEnd.x + " " + outerEnd.y,
    "L " + innerEnd.x + " " + innerEnd.y,
    "A " + INNER + " " + INNER + " 0 " + largeArc + " 0 " + innerStart.x + " " + innerStart.y,
    "Z",
  ].join(" ");
}

/** A four-point star, used to mark the annual growth event. */
function starPath(cx: number, cy: number, outer: number) {
  const inner = outer * 0.4;
  const points: string[] = [];
  for (let i = 0; i < 8; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = (i * 45 - 90) * (Math.PI / 180);
    points.push(cx + radius * Math.cos(angle) + " " + (cy + radius * Math.sin(angle)));
  }
  return "M " + points.join(" L ") + " Z";
}

export function YearWheel({ className = "" }: { className?: string }) {
  const sweep = 360 / quarters.length;

  const description =
    "The BusinessGPS year: four quarters of " +
    WEEKS_IN_QUARTER +
    " weeks, opening " +
    YEAR_OPENS +
    " and closing " +
    YEAR_CLOSES +
    ". Each quarter carries a social and a giveback; the annual growth event falls near year-end; leadership turns over on " +
    YEAR_CLOSES +
    ".";

  return (
    <svg
      viewBox={"0 0 " + SIZE + " " + SIZE}
      role="img"
      aria-label={description}
      className={"h-auto w-full max-w-[420px] " + className}
    >
      {quarters.map((quarter, index) => {
        const start = index * sweep + GAP_DEGREES / 2;
        const end = (index + 1) * sweep - GAP_DEGREES / 2;
        const mid = index * sweep + sweep / 2;
        const label = polar(LABEL_RADIUS, mid);

        return (
          <g key={quarter.number}>
            <path d={annularSector(start, end)} fill={quarter.hex} />
            <text
              x={label.x}
              y={label.y - 7}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="18"
              fontWeight="800"
              fill="#FFFFFF"
            >
              {quarter.label}
            </text>
            <text
              x={label.x}
              y={label.y + 11}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="10"
              fontWeight="700"
              fill="rgba(255,255,255,0.75)"
            >
              {quarter.weeks}
            </text>
          </g>
        );
      })}

      {markers.map((marker, index) => {
        const point = polar(MARKER_RADIUS, marker.at * 360);
        if (marker.kind === "annual") {
          return (
            <path
              key={"marker-" + index}
              d={starPath(point.x, point.y, 12)}
              fill={marker.hex}
            />
          );
        }
        return <circle key={"marker-" + index} cx={point.x} cy={point.y} r="7.5" fill={marker.hex} />;
      })}

      {/* The year boundary, at the top: leadership turns over here. */}
      <line
        x1={polar(INNER - 8, 0).x}
        y1={polar(INNER - 8, 0).y}
        x2={polar(MARKER_RADIUS + 12, 0).x}
        y2={polar(MARKER_RADIUS + 12, 0).y}
        stroke="#001749"
        strokeWidth="2.5"
        strokeDasharray="4 3"
      />
      <circle cx={polar(MARKER_RADIUS, 0).x} cy={polar(MARKER_RADIUS, 0).y} r="9" fill="#FFFFFF" stroke="#001749" strokeWidth="2.5" />

      <text x={CENTER} y={CENTER - 20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#001749">
        ONE YEAR
      </text>
      <text x={CENTER} y={CENTER + 2} textAnchor="middle" fontSize="19" fontWeight="800" fill="#001749">
        FOUR QUARTERS
      </text>
      <text x={CENTER} y={CENTER + 24} textAnchor="middle" fontSize="12" fontWeight="700" fill="#005FFE">
        {WEEKS_IN_YEAR} WEEKS
      </text>
    </svg>
  );
}

/** Legend that sits beside the year wheel. */
export function YearLegend({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="space-y-4">
        {legend.map((entry) => (
          <li key={entry.label} className="flex gap-4">
            {entry.kind === "annual" ? (
              <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                <path
                  d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z"
                  fill={entry.hex}
                />
              </svg>
            ) : entry.kind === "turnover" ? (
              <span
                className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] bg-white"
                style={{ borderColor: entry.hex }}
                aria-hidden="true"
              />
            ) : (
              <span
                className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: entry.hex }}
                aria-hidden="true"
              />
            )}
            <div>
              <p className="font-bold tracking-tight text-navy">{entry.label}</p>
              <p className="text-sm text-navy/70">{entry.detail}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="prose-body mt-7 text-navy/70">
        The year opens {YEAR_OPENS} and closes {YEAR_CLOSES}.
      </p>
    </div>
  );
}
