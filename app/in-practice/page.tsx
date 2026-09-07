import type { Metadata } from "next";
import { BrandArc, CompassPoint, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { MeetingBlocks } from "@/components/MeetingBlocks";
import { MeetingWheel } from "@/components/MeetingWheel";
import { NestedYear } from "@/components/NestedYear";
import { PhotoTile } from "@/components/PhotoTile";
import { StatCards } from "@/components/StatCards";
import { YearLegend, YearWheel } from "@/components/YearWheel";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { TOTAL_MINUTES } from "@/data/meeting";
import { photoSets } from "@/data/photos";

export const metadata: Metadata = {
  title: "In Practice",
  description:
    "What it looks like in practice: the meeting and the year. Seventy minutes hard stop, thirteen-week cycles, four quarters.",
  alternates: { canonical: "/in-practice" },
};

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
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* 21 — the summary block that replaced the two scroll buttons */}
      <Band tone="white">
        <p className="max-w-4xl text-balance text-2xl font-extrabold leading-[1.3] tracking-tight text-navy sm:text-3xl">
          BusinessGPS is a structured weekly meeting designed to build authentic relationships and
          create intentional growth, leading to immeasurable results &mdash; both personally and
          professionally.
        </p>
        <TealArc className="mt-8 w-40" />

        <div className="mt-12">
          <NestedYear />
        </div>

        {/* The visual lays out the system; the quote lands it. */}
        <figure className="mt-12 max-w-3xl border-l-4 border-teal pl-7 sm:pl-10">
          <blockquote>
            <p className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
              &ldquo;You do not rise to the level of your goals. You fall to the level of your
              systems.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-navy/70">
            James Clear
          </figcaption>
        </figure>
      </Band>

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

      {/* The dial sits left and enlarged; the blocks stack to its right. */}
      <Band tone="wash">
        <Eyebrow>The meeting</Eyebrow>
        <SectionHeading className="max-w-2xl">Five blocks, in this order.</SectionHeading>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <MeetingWheel maxWidth="max-w-[420px] lg:max-w-[460px]" />
          </div>
          <MeetingBlocks />
        </div>

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

      {/* ---------- THE YEAR ---------- */}
      <Band tone="wash" id="the-year">
        <BrandArc position="top-left" tone="navy" size={520} />
        <Eyebrow>The year</Eyebrow>
        <SectionHeading className="max-w-3xl">Four quarters, thirteen weeks each.</SectionHeading>
        <TealArc className="mt-5 w-40" />
        <p className="prose-body mt-8 max-w-3xl text-lg text-navy/80">
          The same curriculum at any BusinessGPS chapter at any given time.
        </p>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <YearWheel />
          </div>
          <YearLegend />
        </div>
      </Band>

      {/* The chapter-mechanics row from the home page, kept well clear of the
          summary run at the top so the two do not collide. */}
      <Band tone="white">
        <Eyebrow>Chapter mechanics</Eyebrow>
        <SectionHeading className="mb-10 max-w-2xl">The shape of a chapter.</SectionHeading>
        <StatCards />
      </Band>

      {/* 22 — closing statement */}
      <Band tone="wash">
        <p className="max-w-4xl text-balance text-2xl font-extrabold leading-[1.3] tracking-tight text-navy sm:text-3xl">
          Lifelong relationships. Lifelong results. Do these things and it will change your life.
          That&rsquo;s a bold claim.{" "}
          <span className="text-blue">
            It&rsquo;s also the one you&rsquo;ll be making a year from the day you join. Just like
            everyone else does.
          </span>
        </p>
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
