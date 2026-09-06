import Image from "next/image";
import { photosAvailable, type Photo } from "@/data/photos";

/**
 * A photo that dissolves into the page instead of sitting in a box.
 *
 * Two masks do the work: a horizontal ramp so the left edge (where the text
 * sits) disappears completely, and a radial falloff so the top, right and
 * bottom edges feather out. There is no border, radius or shadow — anything
 * that draws an edge defeats the point.
 *
 * It renders behind its container's content and is inert to pointer and
 * assistive tech, so overlapping text always wins.
 */
export function FeatheredPhoto({
  photo,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 780px",
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
}) {
  if (!photosAvailable) return null;

  // Three ramps, intersected: horizontal (clears the text side), vertical
  // (stops the band edges cutting a hard line), and a radial falloff that
  // rounds the whole thing off. Any one of them alone still leaves an edge.
  const mask =
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.16) 34%, #000 74%, rgba(0,0,0,0.9) 92%, transparent 100%), " +
    "linear-gradient(to bottom, transparent 0%, #000 22%, #000 74%, transparent 100%), " +
    "radial-gradient(110% 88% at 74% 50%, #000 30%, rgba(0,0,0,0.6) 60%, transparent 86%)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 right-0 select-none ${className}`}
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={`/photos/${photo.file}`}
          alt=""
          fill
          sizes={sizes}
          className="photo-archive object-cover"
        />
        {/* The standard navy duotone wash, same as every other photo surface. */}
        <div className="absolute inset-0 bg-navy/22 mix-blend-multiply" />
      </div>
    </div>
  );
}
