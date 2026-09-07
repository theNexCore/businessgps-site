import { brandSvg, compassBox } from "@/lib/brand";

/**
 * The BusinessGPS compass mark, drawn from the real artwork.
 *
 * Every path comes from public/brand/compass.svg, generated from the supplied
 * mark.svg with the wordmark stripped and each element tagged
 * data-part="arrow|rings|core". Nothing is redrawn, restyled, stretched or
 * approximated — the only transform applied is proportional scaling, and the
 * only variation is which tagged parts are shown.
 *
 * `part`:
 *   "full"      the whole mark
 *   "no-arrow"  rings and four-point star, arrow omitted
 *   "core"      the centre core alone, cropped to it
 *   "arrow"     the red arrow alone, cropped to it
 *
 * Parts are hidden by injecting an inline style onto the tagged elements
 * rather than by scoped CSS, so the component needs no generated ids and two
 * marks on one page cannot collide.
 *
 * For the scroll reveal, "full" keeps the arrow in the markup and lets
 * <ArrowReveal> fade it in — the arrow occupies its layout box either way, so
 * nothing shifts when it appears.
 */

type CompassMarkProps = {
  part?: "full" | "no-arrow" | "core" | "arrow";
  className?: string;
  /** Decorative by default; pass a label to expose it to assistive tech. */
  label?: string;
};

const CROP = {
  full: compassBox.full,
  "no-arrow": compassBox.full,
  core: compassBox.core,
  arrow: compassBox.arrow,
} as const;

const HIDDEN: Record<NonNullable<CompassMarkProps["part"]>, string[]> = {
  full: [],
  "no-arrow": ["arrow"],
  core: ["arrow", "rings"],
  arrow: ["core", "rings"],
};

function hidePart(markup: string, part: string) {
  return markup.replace(
    new RegExp(`(<[a-zA-Z]+[^>]*\\sdata-part="${part}")`, "g"),
    '$1 style="display:none"',
  );
}

export function CompassMark({ part = "full", className = "", label }: CompassMarkProps) {
  let markup = brandSvg("compass").replace(/viewBox="[^"]*"/, `viewBox="${CROP[part]}"`);
  for (const hidden of HIDDEN[part]) markup = hidePart(markup, hidden);

  return (
    <span
      className={`block ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
