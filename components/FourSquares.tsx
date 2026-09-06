/**
 * The L.I.N.K. blocks: Listen. Invest. Nurture. Kindle.
 *
 * They must read as one continuous thing rather than four separate tiles, so a
 * thin thread runs behind the row from Listen through to Kindle and the blocks
 * sit on it without touching. Content is centred, and the emphasis lives on the
 * first letter *inside* each word — there are no floating letters above the
 * blocks.
 *
 * Used on the home page and on /philosophy/link; the treatment is defined here
 * once so the two can never drift.
 */

const practices = [
  { word: "isten.", initial: "L", surface: "bg-blue" },
  { word: "nvest.", initial: "I", surface: "bg-tealink" },
  { word: "urture.", initial: "N", surface: "bg-red" },
  { word: "indle.", initial: "K", surface: "bg-navy" },
];

export function FourSquares({
  size = "default",
  caption = true,
}: {
  /** "large" is the hero treatment on /philosophy/link. */
  size?: "default" | "large";
  caption?: boolean;
}) {
  const pad = size === "large" ? "p-7 sm:p-9" : "p-6 sm:p-7";
  const type = size === "large" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl";
  const initial = size === "large" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";

  return (
    <div>
      <div className="relative">
        {/* The thread: one line the eye travels from Listen to Kindle. */}
        <div
          className="absolute inset-x-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-navy/25 to-transparent lg:block"
          aria-hidden="true"
        />
        <ul className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {practices.map((practice) => (
            <li
              key={practice.initial}
              className={`flex aspect-square items-center justify-center rounded-2xl text-center ${pad} ${practice.surface}`}
            >
              <p className={`font-extrabold leading-none tracking-tight text-white ${type}`}>
                <span className={`align-baseline ${initial}`}>{practice.initial}</span>
                {practice.word}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {caption ? (
        <p className="prose-body mt-7 max-w-2xl text-navy/75">
          A lived philosophy taught in BusinessGPS rooms since 2017. It&rsquo;s the working muscle of
          everything we do.
        </p>
      ) : null}
    </div>
  );
}
