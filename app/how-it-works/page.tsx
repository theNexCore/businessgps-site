import type { Metadata } from "next";
import { CTAPanel } from "@/components/CTAPanel";
import { MeetingWheel } from "@/components/MeetingWheel";
import { PhotoTile } from "@/components/PhotoTile";
import { AccentStrip, Container, Eyebrow, NavyPanel, Section, SectionHeading } from "@/components/ui";
import { meetingBlocks, TOTAL_MINUTES } from "@/data/meeting";
import { photoPlacements } from "@/data/photos";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Seventy minutes, hard stop. Five blocks, a thirteen-week cycle, and what is — and isn't — asked of a guest.",
  alternates: { canonical: "/how-it-works" },
};

const beyond = [
  { name: "Quarterly Social", body: "No agenda." },
  { name: "Quarterly Giveback", body: "The chapter votes." },
  { name: "Annual Workshop", body: "All chapters together." },
];

const guestPoints = [
  "Nothing is asked of a guest.",
  "No pitch. No sales table.",
  "Visit two or three times.",
  "Unannounced is fine.",
];

export default function HowItWorksPage() {
  return (
    <>
      <Container className="pt-5 sm:pt-8">
        <NavyPanel className="px-6 py-14 sm:px-12 sm:py-20">
          <Eyebrow tone="light">How it works</Eyebrow>
          <SectionHeading as="h1" tone="light" className="max-w-3xl">
            Seventy minutes. Hard stop. Every week.
          </SectionHeading>
          <p className="prose-body mt-6 max-w-2xl text-white/75">
            The structure is the point. It protects the working part of the meeting, and it means the
            room ends when it says it will end.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </NavyPanel>
      </Container>

      {/* 1. Show up early */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <Eyebrow>Before the meeting</Eyebrow>
              <SectionHeading>Show up early.</SectionHeading>
              <p className="prose-body mt-6 max-w-xl text-navy/75">
                Doors open a half hour before. Coffee, conversation, no agenda. It is never required,
                and it is always worth it.
              </p>
            </div>
            <PhotoTile
              photo={photoPlacements.showUpEarly}
              className="aspect-[2/1] w-full"
              sizes="(max-width: 1024px) 92vw, 460px"
            />
          </div>
        </Container>
      </Section>

      {/* 2. The wheel and the five blocks */}
      <Section className="bg-wash">
        <Container>
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
        </Container>
      </Section>

      {/* 3. The 13-week cycle */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>The cycle</Eyebrow>
              <SectionHeading>Thirteen weeks, everywhere at once.</SectionHeading>
            </div>
            <div>
              <p className="prose-body text-navy/75">
                BusinessGPS runs on a thirteen-week growth cycle. Every chapter runs the same
                curriculum in the same week. Visit another city, and you&rsquo;ll recognize the room
                immediately &mdash; while every chapter keeps its own personality.
              </p>
              <div className="mt-8 flex flex-wrap gap-1.5" aria-hidden="true">
                {Array.from({ length: 13 }, (_, index) => (
                  <span
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-wash text-xs font-bold text-navy/60"
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Beyond the meeting */}
      <Section top={false}>
        <Container>
          <Eyebrow>Beyond the meeting</Eyebrow>
          <SectionHeading className="mb-10 max-w-2xl">The year around the room.</SectionHeading>
          <ul className="grid gap-5 md:grid-cols-3">
            {beyond.map((item) => (
              <li key={item.name} className="rounded-2xl border border-faint bg-wash p-8">
                <h3 className="text-xl font-extrabold tracking-tight text-navy">{item.name}</h3>
                <p className="prose-body mt-2 text-navy/70">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5. Guest expectations */}
      <Section top={false}>
        <Container>
          <NavyPanel className="px-6 py-12 sm:px-12 sm:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-16">
              <div>
                <SectionHeading tone="light">If you&rsquo;re visiting.</SectionHeading>
                <ul className="mt-9 space-y-5">
                  {guestPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span
                        className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-teal"
                        aria-hidden="true"
                      />
                      <span className="text-lg font-bold tracking-tight text-white">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="prose-body mt-9 text-white/70">
                  Visiting is free. Always. Come see the room, and come back until you know.
                </p>
              </div>
              <PhotoTile
                photo={photoPlacements.guestPanel}
                className="aspect-[2/1] w-full"
                sizes="(max-width: 1024px) 92vw, 420px"
              />
            </div>
          </NavyPanel>
        </Container>
      </Section>

      <Section top={false}>
        <Container>
          <CTAPanel
            heading="Find a room near you."
            body="Chapters meet weekly across St. Louis. Pick one, or tell us you'd like to start your own."
            primary={{ href: "/chapters", label: "Find a chapter" }}
            secondary={{ href: "/join", label: "Apply to join" }}
          />
        </Container>
      </Section>
    </>
  );
}
