import type { Metadata } from "next";
import { BrandArc, CompassPoint, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { MeetingWheel } from "@/components/MeetingWheel";
import { PhotoTile } from "@/components/PhotoTile";
import { YearLegend, YearWheel } from "@/components/YearWheel";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { meetingBlocks, TOTAL_MINUTES } from "@/data/meeting";
import { photoSets } from "@/data/photos";
import { WEEKS_IN_QUARTER } from "@/data/year";

export const metadata: Metadata = {
  title: "In Practice",
  description:
    "What it looks like in practice: the meeting, the quarter, and the year. Seventy minutes hard stop, thirteen-week cycles, four quarters.",
  alternates: { canonical: "/in-practice" },
};

const anchors = [
  { href: "#the-meeting", label: "The Meeting" },
  { href: "#the-quarter", label: "The Quarter" },
  { href: "#the-year", label: "The Year" },
];

const guestPoints = [
  "Nothing is asked of a guest.",
  "No pitch. No sales table.",
  "Visit two or three times.",
  "Unannounced is fine.",
];

export default function InPracticePage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">In practice</Eyebrow>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What it looks like in practice.
          </h1>
          <ul className="mt-10 flex flex-wrap gap-3">
            {anchors.map((anchor) => (
              <li key={anchor.href}>
                <a
                  href={anchor.href}
                  className="inline-flex rounded-full border-2 border-white/30 px-5 py-2 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* ---------- THE MEETING ---------- */}
      <Band tone="white" id="the-meeting">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <Eyebrow>The meeting &middot; before it starts</Eyebrow>
            <SectionHeading>Show up early.</SectionHeading>
            <p className="prose-body mt-6 max-w-xl text-navy/80">
              Doors open a half hour before. Coffee, conversation, no agenda. It is never required,
              and it is always worth it.
            </p>
          </div>
          <PhotoTile
            photo={photoSets.showUpEarly}
            className="aspect-[2/1] w-full"
            sizes="(max-width: 1024px) 92vw, 460px"
          />
        </div>
      </Band>

      <Band tone="wash">
        <Eyebrow>The meeting</Eyebrow>
        <SectionHeading className="max-w-2xl">Five blocks, in this order.</SectionHeading>

        <div className="mt-12 flex justify-center">
          <MeetingWheel />
        </div>

        <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-faint bg-faint">
          {meetingBlocks.map((block) => (
            <li key={block.number} className="bg-white px-6 py-8 sm:px-9 sm:py-10">
              <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-extrabold text-white"
                    style={{ backgroundColor: block.hex }}
                    aria-hidden="true"
                  >
                    {block.number}
                  </span>
                  <div className="sm:w-52">
                    <h3 className="text-xl font-extrabold tracking-tight text-navy">{block.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-navy/65">
                      {block.duration}
                    </p>
                  </div>
                </div>
                <p className="prose-body text-navy/75">{block.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-lg font-extrabold tracking-tight text-redink">
          {TOTAL_MINUTES} minutes. Then the room ends.
        </p>
      </Band>

      {/* Guest expectations */}
      <Band tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-16">
          <div>
            <SectionHeading tone="light">If you&rsquo;re visiting.</SectionHeading>
            <ul className="mt-9 space-y-5">
              {guestPoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <CompassPoint tone="teal" className="mt-2 shrink-0" />
                  <span className="text-lg font-bold tracking-tight text-white">{point}</span>
                </li>
              ))}
            </ul>
            <p className="prose-body mt-9 text-white/75">
              Visiting is free. Always. Come see the room, and come back until you know.
            </p>
          </div>
          <PhotoTile
            photo={photoSets.guestPanel}
            className="aspect-[2/1] w-full"
            sizes="(max-width: 1024px) 92vw, 420px"
          />
        </div>
      </Band>

      {/* ---------- THE QUARTER ---------- */}
      <Band tone="white" id="the-quarter">
        <Eyebrow>The quarter</Eyebrow>
        <SectionHeading className="max-w-3xl">
          Thirteen weeks, everywhere at once.
        </SectionHeading>
        <TealArc className="mt-5 w-40" />

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="prose-body text-lg text-navy/80">
              BusinessGPS runs on a {WEEKS_IN_QUARTER}-week growth cycle. Every chapter runs the same
              curriculum in the same week. Visit another city, and you&rsquo;ll recognize the room
              immediately &mdash; while every chapter keeps its own personality.
            </p>
            <div className="mt-8 flex flex-wrap gap-1.5" aria-hidden="true">
              {Array.from({ length: WEEKS_IN_QUARTER }, (_, index) => (
                <span
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-wash text-xs font-bold text-navy/70"
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>

          <ul className="space-y-5">
            <li className="rounded-2xl border border-faint bg-wash p-7">
              <h3 className="text-xl font-extrabold tracking-tight text-navy">Quarterly social</h3>
              <p className="prose-body mt-2 text-navy/75">No agenda.</p>
            </li>
            <li className="rounded-2xl border border-faint bg-wash p-7">
              <h3 className="text-xl font-extrabold tracking-tight text-navy">Quarterly giveback</h3>
              <p className="prose-body mt-2 text-navy/75">
                A quarterly opportunity to be involved with the community. The chapter votes where it
                goes.
              </p>
            </li>
          </ul>
        </div>
      </Band>

      {/* ---------- THE YEAR ---------- */}
      <Band tone="wash" id="the-year">
        <BrandArc position="top-left" tone="navy" size={520} />
        <Eyebrow>The year</Eyebrow>
        <SectionHeading className="max-w-3xl">Four quarters, one turnover.</SectionHeading>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <YearWheel />
          </div>
          <YearLegend />
        </div>
      </Band>

      <Band tone="white" bottom={false}>
        <CTAPanel
          heading="Find a room near you."
          body="Chapters meet weekly across St. Louis. Pick one, or tell us you'd like to start your own."
          primary={{ href: "/chapters", label: "Find a chapter" }}
          secondary={{ href: "/join", label: "Apply to be a member" }}
        />
      </Band>
      <div className="h-16 bg-white sm:h-24" />
    </>
  );
}
