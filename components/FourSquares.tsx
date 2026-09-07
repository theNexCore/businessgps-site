/**
 * The L.I.N.K. blocks: Listen. Invest. Nurture. Kindle.
 *
 * The house style, used everywhere L.I.N.K. appears. The four read as ONE
 * continuous element: a single bar with no gaps and no separate borders, and a
 * left-to-right gradient flowing blue → teal → red → navy so the eye travels
 * Listen → Invest → Nurture → Kindle without a break. Content is centred; the
 * words themselves are untouched.
 *
 * Each block is transparent and sits on the shared gradient, so the colour
 * transitions *between* blocks rather than stopping at each edge.
 */

const practices = ["Listen.", "Invest.", "Nurture.", "Kindle."];

/*
 * blue → teal → red → navy, the four block colours, blended across one bar.
 * Interpolated in oklch: blending teal to red in sRGB passes through a muddy
 * grey, which reads as a printing fault rather than a gradient.
 */
const GRADIENT =
  "linear-gradient(in oklch to right, #005ffe 4%, #018197 33%, #ff0000 66%, #001749 97%)";

export function FourSquares({
  size = "default",
  caption = true,
}: {
  /** "large" is the hero treatment on /philosophy/link. */
  size?: "default" | "large";
  caption?: boolean;
}) {
  const type = size === "large" ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl";
  const pad = size === "large" ? "py-12 sm:py-16" : "py-10 sm:py-14";

  return (
    <div>
      <div className="overflow-hidden rounded-2xl" style={{ backgroundImage: GRADIENT }}>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {practices.map((word) => (
            <li
              key={word}
              className={`flex items-center justify-center px-4 text-center ${pad}`}
            >
              <p className={`font-extrabold leading-none tracking-tight text-white ${type}`}>{word}</p>
            </li>
          ))}
        </ul>
      </div>

      {caption ? (
        <p className="prose-body mt-7 max-w-2xl text-navy/75">
          Everyone has something to teach. Everyone has something to learn.
        </p>
      ) : null}
    </div>
  );
}
