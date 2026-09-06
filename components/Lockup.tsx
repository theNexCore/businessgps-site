import Link from "next/link";
import { brandAspect, brandSvg, type BrandAsset } from "@/lib/brand";

/**
 * The BusinessGPS lockup — always full-colour, on white or light backgrounds.
 * There is no inverted variant by design; for branding on a dark surface use
 * <BizGPS />, which is typography rather than artwork.
 *
 * The artwork's own proportions are preserved (the wordmark cap height matches
 * the compass outer ring), so sizing only ever sets the overall width.
 */

type LockupProps = {
  size?: "sm" | "md" | "lg" | "xl";
  asset?: BrandAsset;
  className?: string;
};

const widths: Record<NonNullable<LockupProps["size"]>, string> = {
  sm: "w-[168px]",
  md: "w-[240px]",
  lg: "w-[300px] sm:w-[340px]",
  xl: "w-[320px] sm:w-[400px]",
};

export function Lockup({ size = "md", asset = "lockup", className = "" }: LockupProps) {
  return (
    <span
      role="img"
      aria-label="BusinessGPS"
      className={`block shrink-0 ${widths[size]} ${className}`}
      style={{ aspectRatio: String(brandAspect[asset]) }}
      dangerouslySetInnerHTML={{ __html: brandSvg(asset) }}
    />
  );
}

/** The lockup as a link home. */
export function LockupLink({ size = "md", asset = "lockup", className = "" }: LockupProps) {
  return (
    <Link href="/" className={`inline-flex rounded-md ${className}`} aria-label="BusinessGPS, home">
      <span
        aria-hidden="true"
        className={`block shrink-0 ${widths[size]}`}
        style={{ aspectRatio: String(brandAspect[asset]) }}
        dangerouslySetInnerHTML={{ __html: brandSvg(asset) }}
      />
    </Link>
  );
}

/**
 * The name set as type — for inline mentions in prose, and for branding on
 * dark surfaces where the artwork itself must not be inverted.
 */
export function BizGPS({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      <span className={tone === "light" ? "text-white" : "text-navy"}>Business</span>
      <span className="text-red italic">GPS</span>
    </span>
  );
}
