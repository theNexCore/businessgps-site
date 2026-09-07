import Link from "next/link";

/**
 * The year as one system at increasing zoom: one meeting → thirteen weeks →
 * four quarters → fifty-two weeks, each row proving the one above it.
 *
 * Every row uses the same cell size, so the nesting is a real proportion
 * rather than a decorative one — thirteen cells is visibly thirteen times one,
 * and the four quarter blocks visibly add up to the fifty-two below them.
 *
 * Two enclosures wrap the whole thing, inner to outer: community impact, then
 * the annual growth workshop. Rounded rectangles rather than circles, because
 * they hug a wide grid without wasting the corners.
 *
 * Cell size is a single CSS variable, so the grid shrinks on narrow screens
 * and wraps without the nesting logic breaking.
 */

const WEEKS_IN_QUARTER = 13;
const QUARTERS = 4;
const WEEKS_IN_YEAR = 52;

function Cells({ count, tone }: { count: number; tone: "red" | "blue" }) {
  const fill = tone === "red" ? "bg-red" : "bg-blue";
  return (
    <div className="flex flex-wrap gap-[var(--cell-gap)]">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`block h-[var(--cell)] w-[var(--cell)] rounded-[2px] ${fill}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Row({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {href ? (
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-blue underline underline-offset-4"
        >
          {label}
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      ) : (
        <p className="text-sm font-bold tracking-tight text-navy">{label}</p>
      )}
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

/** A label that sits on an enclosure's edge, knocking a gap in the stroke. */
function EdgeLabel({ children, tone }: { children: string; tone: "teal" | "navy" }) {
  const color = tone === "teal" ? "text-tealink" : "text-navy";
  return (
    <span
      className={`absolute -top-[0.7rem] left-6 bg-white px-3 text-xs font-bold uppercase tracking-[0.16em] ${color}`}
    >
      {children}
    </span>
  );
}

export function NestedYear() {
  return (
    <div
      className="[--cell:11px] [--cell-gap:3px] sm:[--cell:14px] sm:[--cell-gap:4px]"
      role="img"
      aria-label={
        "One weekly meeting, thirteen weeks to a quarter, four quarters a year, fifty-two weeks of " +
        "showing up — all of it inside community impact, and inside the annual growth workshop."
      }
    >
      {/* Outer enclosure: the annual growth workshop. */}
      <div className="relative rounded-3xl border-2 border-navy/25 px-5 pb-7 pt-9 sm:px-8 sm:pb-9 sm:pt-10">
        <EdgeLabel tone="navy">Annual growth workshop</EdgeLabel>

        {/* Inner enclosure: community impact. */}
        <div className="relative rounded-2xl border-2 border-tealink/45 px-4 pb-6 pt-8 sm:px-7 sm:pb-8 sm:pt-9">
          <EdgeLabel tone="teal">Community impact</EdgeLabel>

          <div className="space-y-6 sm:space-y-7">
            <Row label="One weekly meeting" href="#the-meeting">
              <Cells count={1} tone="red" />
            </Row>

            <Row label="Thirteen weeks at a time">
              <Cells count={WEEKS_IN_QUARTER} tone="blue" />
            </Row>

            <Row label="Four quarters a year">
              {/* Tight group gap so all four quarters sit on one line and read
                  as the same total width as the fifty-two below them. */}
              <div className="flex flex-wrap gap-x-3 gap-y-2.5">
                {Array.from({ length: QUARTERS }, (_, index) => (
                  <Cells key={index} count={WEEKS_IN_QUARTER} tone="blue" />
                ))}
              </div>
            </Row>

            <Row label="Fifty-two weeks of showing up">
              <Cells count={WEEKS_IN_YEAR} tone="blue" />
            </Row>
          </div>
        </div>
      </div>

      {/* The anchor the old scroll button carried, kept reachable in the flow. */}
      <p className="sr-only">
        <Link href="/in-practice#the-meeting">Jump to the meeting</Link>
      </p>
    </div>
  );
}
