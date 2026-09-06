/**
 * Brand geometry: the logo's shapes reused as structural page elements.
 *
 * These echo the compass mark — its rings, its red arrow, its four-point star.
 * Used sparingly: at least one per page, never more than three. They are
 * decorative, so every one of them is aria-hidden.
 */

/**
 * A fragment of the compass ring, meant to bleed off a section corner.
 * `position` picks the corner; the arc is clipped by the section's overflow.
 */
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
  const stroke =
    tone === "white" ? "rgba(255,255,255,0.16)" : tone === "teal" ? "rgba(1,166,194,0.35)" : "rgba(0,23,73,0.10)";

  // Fixed offsets, not percentages: on a tall section a percentage offset
  // drifts the arc into the middle of the copy instead of hugging the corner.
  const corner = {
    "top-right": "-top-40 -right-40",
    "top-left": "-top-40 -left-40",
    "bottom-right": "-bottom-40 -right-40",
    "bottom-left": "-bottom-40 -left-40",
  }[position];

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none absolute ${corner} ${className}`}
    >
      <circle cx="100" cy="100" r="92" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="68" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="44" fill="none" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

/** The red arrow, rising left to right. Used as a divider motif. */
export function BrandArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" aria-hidden="true" className={`h-8 w-28 ${className}`}>
      <path d="M2 34 L96 8" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
      <path d="M78 4 L100 6 L96 27 Z" fill="#FF0000" />
    </svg>
  );
}

/**
 * The compass four-point star, small, for list bullets and section markers.
 *
 * Size is its own prop rather than something a caller squeezes into className:
 * two competing h-/w- utilities resolve by stylesheet order, not class order,
 * so an override in className would win or lose unpredictably.
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
 * The base class sets no width so a caller-supplied w-* never collides with it
 * (competing width utilities resolve by stylesheet order, not class order).
 */
export function TealArc({ className = "w-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 12" aria-hidden="true" className={`h-3 ${className}`} preserveAspectRatio="none">
      <path d="M2 10 Q80 -4 158 10" fill="none" stroke="#01A6C2" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
