import Image from "next/image";
import { photosAvailable, type Photo } from "@/data/photos";

/**
 * Documentary photo tile. The archive photos always sit under a soft navy
 * overlay with a light desaturation so their era reads as intentional rather
 * than as poor image quality.
 *
 * Which photo goes where is decided in data/photos.ts (`photoPlacements`).
 */

type PhotoTileProps = {
  photo: Photo;
  className?: string;
  /** Layout hint for the image loader. Default suits a four-across strip. */
  sizes?: string;
  priority?: boolean;
};

export function PhotoTile({
  photo,
  className = "",
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px",
  priority = false,
}: PhotoTileProps) {
  if (!photosAvailable) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl bg-navy/90 ${className}`}
        role="img"
        aria-label={`${photo.alt} — photo pending`}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.16) 0 2px, transparent 2px 12px)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/45" aria-hidden="true">
            <rect x="3" y="6" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="13" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8.5 6l1.4-2h4.2l1.4 2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
            Chapter photo
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-navy ${className}`}>
      <Image
        src={`/photos/${photo.file}`}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="photo-archive object-cover"
      />
      {/* Soft navy overlay — documentary texture, not stock gloss. */}
      <div className="absolute inset-0 bg-navy/22 mix-blend-multiply" aria-hidden="true" />
    </div>
  );
}
