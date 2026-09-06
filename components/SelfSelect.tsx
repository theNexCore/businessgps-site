import { CompassPoint } from "./BrandGeometry";
import { SectionHeading } from "./ui";

/**
 * "Is BusinessGPS for you?" — the self-selection block.
 * Shared by the home page and /what-it-is.
 */

const wants = [
  "To grow.",
  "To be better.",
  "To be an active part of transforming your community.",
  "To build authentic relationships.",
  "Real opportunity that creates real, transformative results.",
];

const dontWants = [
  "To be forced to give referrals to people you wouldn't do business with.",
  "Made-up referrals wasting your time and everyone else's.",
  "The same elevator pitch, week after week, year after year.",
  "Another networking event.",
];

function Column({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "want" | "dont";
}) {
  return (
    <div className={tone === "want" ? "" : "lg:border-l lg:border-faint lg:pl-12"}>
      <h3 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h3>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3.5">
            {tone === "want" ? (
              <CompassPoint tone="teal" className="mt-1.5 shrink-0" />
            ) : (
              <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="#DF0000" strokeWidth="3.4" strokeLinecap="round" />
              </svg>
            )}
            <span className="prose-body text-navy/75">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SelfSelect({ heading = "Is BusinessGPS for you?" }: { heading?: string }) {
  return (
    <div>
      <SectionHeading className="max-w-2xl">{heading}</SectionHeading>
      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Column title="You want:" items={wants} tone="want" />
        <Column title="You don't want:" items={dontWants} tone="dont" />
      </div>
      <p className="mt-14 max-w-4xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
        We know &mdash; because that&rsquo;s what we wanted. When we couldn&rsquo;t find it, we built it
        from scratch. <span className="text-blue">Ten years running.</span>
      </p>
    </div>
  );
}
