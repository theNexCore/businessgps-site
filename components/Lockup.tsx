import Link from "next/link";
import { brandAspect, brandSvg, type BrandAsset, type BrandTone } from "@/lib/brand";

/**
 * The supplied lockup artwork, inlined so it can be recoloured for navy
 * panels. Server component — see lib/brand.ts for the recolouring rules.
 *
 * Wordmark rules: BusinessGPS is one word, camel case, "GPS" red italic.
 * For an inline mention inside a paragraph use <BizGPS /> instead.
 */

type LockupProps = {
  /** "light" = for navy panels. "dark" = for light backgrounds. */
  tone?: BrandTone;
  size?: "sm" | "md" | "lg" | "xl";
  /** "lockup" = horizontal compass + wordmark. "mark" = square lockup. */
  asset?: BrandAsset;
  className?: string;
};

const widths: Record<NonNullable<LockupProps["size"]>, string> = {
  sm: "w-[136px]",
  md: "w-[148px]",
  lg: "w-[190px] sm:w-[240px]",
  xl: "w-[250px] sm:w-[340px]",
};

export function Lockup({ tone = "dark", size = "md", asset = "lockup", className = "" }: LockupProps) {
  return (
    <span
      role="img"
      aria-label="BusinessGPS"
      className={`block shrink-0 ${widths[size]} ${className}`}
      style={{ aspectRatio: String(brandAspect[asset]) }}
      dangerouslySetInnerHTML={{ __html: brandSvg(asset, tone) }}
    />
  );
}

/** The lockup as a link home — used in the header and footer. */
export function LockupLink({ tone = "dark", size = "md", asset = "lockup", className = "" }: LockupProps) {
  return (
    <Link href="/" className={`inline-flex rounded-md ${className}`} aria-label="BusinessGPS, home">
      <span
        aria-hidden="true"
        className={`block shrink-0 ${widths[size]}`}
        style={{ aspectRatio: String(brandAspect[asset]) }}
        dangerouslySetInnerHTML={{ __html: brandSvg(asset, tone) }}
      />
    </Link>
  );
}

/**
 * Inline mention of the name in running prose — HTML styling only, per the
 * brand rules. Never rebuild the full wordmark inside a paragraph.
 */
export function BizGPS({ tone = "dark" }: { tone?: BrandTone }) {
  return (
    <span className="font-semibold">
      <span className={tone === "light" ? "text-white" : "text-navy"}>Business</span>
      <span className="text-redink italic">GPS</span>
    </span>
  );
}
