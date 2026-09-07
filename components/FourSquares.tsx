/**
 * The L.I.N.K. blocks: Listen. Invest. Nurture. Kindle.
 *
 * The house style, used everywhere L.I.N.K. appears. Two things define it:
 *
 * 1. The four read as ONE continuous element — a single bar, no gaps and no
 *    separate borders, with a gradient flowing blue → teal → red → navy so the
 *    eye travels Listen → Invest → Nurture → Kindle without a break.
 * 2. The leading letter of each word is set at roughly twice the rest, in the
 *    same white, so the acronym reads out of the words themselves.
 */

const practices = [
  { initial: "L", rest: "isten." },
  { initial: "I", rest: "nvest." },
  { initial: "N", rest: "urture." },
  { initial: "K", rest: "indle." },
];

export function FourSquares({
  size = "default",
  caption = true,
}: {
  /** "large" is the hero treatment on /philosophy/link. */
  size?: "default" | "large";
  caption?: boolean;
}) {
  const word = size === "large" ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl";
  // ~2x the rest of the word.
  const initial = size === "large" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl lg:text-6xl";
  const pad = size === "large" ? "py-12 sm:py-16" : "py-10 sm:py-14";

  return (
    <div>
      {/* .link-bar carries the gradient (see globals.css); it flips direction
          with the layout so each word keeps its own colour when stacked. */}
      <div className="link-bar overflow-hidden rounded-2xl">
        <ul className="grid grid-cols-1 lg:grid-cols-4">
          {practices.map((practice) => (
            <li
              key={practice.initial}
              className={`flex items-center justify-center px-4 text-center ${pad}`}
            >
              <p className={`font-extrabold leading-none tracking-tight text-white ${word}`}>
                <span className={initial}>{practice.initial}</span>
                {practice.rest}
              </p>
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
