import { meetingBlocks, TOTAL_MINUTES, type MeetingBlock } from "@/data/meeting";

/**
 * The meeting wheel: five proportional arcs, numbered chips, hard-stop centre.
 *
 * Hand-built inline SVG — no chart library. Arc size comes from `weight` in
 * data/meeting.ts. The wheel shows DURATIONS ONLY; it must never display a
 * clock time.
 */

const SIZE = 240;
const CENTER = SIZE / 2;
const OUTER = 108;
const INNER = 68;
const CHIP_RADIUS = (OUTER + INNER) / 2;
const GAP_DEGREES = 2.4;

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
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER} ${OUTER} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER} ${INNER} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

type Slice = { block: MeetingBlock; path: string; chip: { x: number; y: number } };

function buildSlices(): Slice[] {
  const total = meetingBlocks.reduce((sum, block) => sum + block.weight, 0);
  let cursor = 0;

  return meetingBlocks.map((block) => {
    const sweep = (block.weight / total) * 360;
    const start = cursor + GAP_DEGREES / 2;
    const end = cursor + sweep - GAP_DEGREES / 2;
    cursor += sweep;

    return {
      block,
      path: annularSector(start, end),
      chip: polar(CHIP_RADIUS, cursor - sweep / 2),
    };
  });
}

export function MeetingWheel({
  className = "",
  maxWidth = "max-w-[340px]",
}: {
  className?: string;
  /** Own prop, not a className override: competing max-w utilities resolve by
   *  stylesheet order rather than class order. */
  maxWidth?: string;
}) {
  const slices = buildSlices();
  const description = meetingBlocks
    .map((block) => `${block.name}, ${block.duration}`)
    .join("; ");

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label={`How a ${TOTAL_MINUTES}-minute BusinessGPS meeting runs: ${description}. Hard stop at ${TOTAL_MINUTES} minutes.`}
      className={`h-auto w-full ${maxWidth} ${className}`}
    >
      {slices.map((slice) => (
        <path key={slice.block.number} d={slice.path} fill={slice.block.hex} />
      ))}

      {slices.map((slice) => (
        <g key={`chip-${slice.block.number}`}>
          <circle cx={slice.chip.x} cy={slice.chip.y} r="13" fill="#FFFFFF" />
          <text
            x={slice.chip.x}
            y={slice.chip.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="14"
            fontWeight="800"
            fill={slice.block.hex}
          >
            {slice.block.number}
          </text>
        </g>
      ))}

      <text
        x={CENTER}
        y={CENTER - 12}
        textAnchor="middle"
        fontSize="34"
        fontWeight="800"
        fill="#001749"
        letterSpacing="-1"
      >
        {TOTAL_MINUTES}
      </text>
      <text x={CENTER} y={CENTER + 8} textAnchor="middle" fontSize="11" fontWeight="700" fill="#001749">
        MINUTES
      </text>
      <text x={CENTER} y={CENTER + 26} textAnchor="middle" fontSize="11" fontWeight="800" fill="#ED0000">
        HARD STOP
      </text>
    </svg>
  );
}

/** Legend that sits beside the wheel. Durations only. */
export function MeetingLegend({ className = "" }: { className?: string }) {
  return (
    <ol className={`space-y-4 ${className}`}>
      {meetingBlocks.map((block) => (
        <li key={block.number} className="flex gap-4">
          <span
            className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-sm"
            style={{ backgroundColor: block.hex }}
            aria-hidden="true"
          />
          <div>
            <p className="font-bold tracking-tight text-navy">
              {block.name}{" "}
              <span className="font-semibold text-navy/65">({block.duration})</span>
            </p>
            <p className="text-sm text-navy/65">{block.short}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
