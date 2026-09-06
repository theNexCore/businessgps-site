/**
 * Brand geometry: the logo's shapes reused as structural page elements.
 *
 * These echo the compass mark — its rings, its red arrow, its four-point star.
 * Used sparingly: at least one per page, never more than three. They are
 * decorative, so every one of them is aria-hidden.
 */

/**
 * The compass mark, meant to bleed off a section corner.
 *
 * Always drawn with its four points: rings on their own read as random
 * circles rather than as the brand's mark, so the star is not optional here.
 * `position` picks the corner; the mark is clipped by the section's overflow.
 */
export function BrandArc({
  position = "top-right",
  tone = "navy",
  size = 460,
  core = false,
  className = "",
}: {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  tone?: "navy" | "teal" | "white";
  size?: number;
  /** Draws the blue centre element, so the mark reads on a light ground. */
  core?: boolean;
  className?: string;
}) {
  const stroke =
    tone === "white" ? "rgba(255,255,255,0.16)" : tone === "teal" ? "rgba(1,166,194,0.35)" : "rgba(0,23,73,0.10)";
  const points =
    tone === "white" ? "rgba(255,255,255,0.13)" : tone === "teal" ? "rgba(1,166,194,0.28)" : "rgba(0,23,73,0.08)";

  // Fixed offsets, not percentages: on a tall section a percentage offset
  // drifts the mark into the middle of the copy instead of hugging the corner.
  const corner = {
    "top-right": "-top-40 -right-40",
    "top-left": "-top-40 -left-40",
    "bottom-right": "-bottom-40 -right-40",
    "bottom-left": "-bottom-40 -left-40",
  }[position];

  // Four-point star reaching the outer ring, plus shorter diagonal points.
  const star =
    "M100 2 L112 88 L198 100 L112 112 L100 198 L88 112 L2 100 L88 88 Z";
  const diagonals =
    "M100 100 L152 48 L128 118 Z M100 100 L48 152 L72 82 Z M100 100 L152 152 L82 128 Z M100 100 L48 48 L118 72 Z";

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
      <path d={diagonals} fill={points} />
      <path d={star} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {core ? (
        <>
          <circle cx="100" cy="100" r="22" fill="rgba(0,95,254,0.22)" />
          <circle cx="100" cy="100" r="22" fill="none" stroke="rgba(0,95,254,0.55)" strokeWidth="2" />
        </>
      ) : null}
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
