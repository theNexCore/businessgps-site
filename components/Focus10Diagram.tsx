import Image from "next/image";

/**
 * The Focus10 outline.
 *
 * Swappable slot: an SVG redraw will replace this later. When it lands, swap
 * the <Image> below for the inline SVG — nothing outside this component
 * changes.
 */
export function Focus10Diagram({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/focus10.png"
      alt="The Focus10 framework: you at the centre, with the Core, Expression and Influence layers around you."
      width={1600}
      height={1600}
      priority
      sizes="(max-width: 1024px) 90vw, 620px"
      className={`h-auto w-full ${className}`}
    />
  );
}
