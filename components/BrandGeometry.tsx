import { CompassMark } from "./CompassMark";

/**
 * Brand geometry as structural page elements.
 *
 * The mark and the arrow are the REAL artwork (components/CompassMark.tsx →
 * public/brand/compass.svg) — never redrawn, never restyled, only scaled and
 * faded. The two small pieces below (a star bullet and an underline arc) are
 * UI furniture, not the mark, and stay hand-drawn.
 *
 * Used sparingly: at least one per page, never more than three. Decorative,
 * so every one of them is aria-hidden.
 */

/** The compass mark as a watermark bleeding off a section corner. */
export function BrandArc({
  position = "top-right",
  tone = "navy",
  size = 460,
  className = "",
}: {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  tone?: "navy" | "teal" | "white";
  size?: number;
  className?: string;
}) {
  // Fixed offsets, not percentages: on a tall section a percentage offset
  // drifts the mark into the middle of the copy instead of hugging the corner.
  // Pulled in far enough that the mark still reads as the mark; bled further
  // out it becomes an unidentifiable fragment.
  const corner = {
    "top-right": "-top-20 -right-24",
    "top-left": "-top-20 -left-24",
    "bottom-right": "-bottom-20 -right-24",
    "bottom-left": "-bottom-20 -left-24",
  }[position];

  // A watermark, so it is knocked well back; on navy it also needs lifting.
  const wash = tone === "white" ? "opacity-[0.10]" : "opacity-[0.07]";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${corner} ${wash} ${className}`}
      style={{ width: size, height: size }}
    >
      <CompassMark part="full" />
    </span>
  );
}

/**
 * The real red arrow, used as a divider motif and section accent.
 *
 * Size is its own prop: passing a width through className would replace the
 * default rather than add to it, and the SVG would then expand to fill its
 * container.
 */
export function BrandArrow({
  className = "",
  size = "w-24",
}: {
  className?: string;
  size?: string;
}) {
  return <CompassMark part="arrow" className={size + " " + className} />;
}

/**
 * The compass four-point star, small, for list bullets and section markers.
 *
 * A bullet, not the mark — so it stays hand-drawn. Size is its own prop
 * rather than something a caller squeezes into className: two competing
 * h-/w- utilities resolve by stylesheet order, not class order.
 */
export function CompassPoint({
  className = "",
  size = "h-3.5 w-3.5",
  tone = "navy",
}: {
  className?: string;
  size?: string;
  tone?: "navy" | "teal" | "red" | "white";
}) {
  const fill = { navy: "#001749", teal: "#01A6C2", red: "#FF0000", white: "#FFFFFF" }[tone];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${size} ${className}`}>
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill={fill} />
    </svg>
  );
}

/**
 * A thin teal arc that sits under a heading — the Nurture curve from the mark.
 * The base class sets no width so a caller-supplied w-* never collides with it.
 */
export function TealArc({ className = "w-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 12" aria-hidden="true" className={`h-3 ${className}`} preserveAspectRatio="none">
      <path d="M2 10 Q80 -4 158 10" fill="none" stroke="#01A6C2" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
