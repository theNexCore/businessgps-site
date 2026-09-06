import type { Metadata } from "next";
import Link from "next/link";
import { CTAPanel } from "@/components/CTAPanel";
import { FourSquares } from "@/components/FourSquares";
import { HistoryBand } from "@/components/HistoryBand";
import { IsntBox } from "@/components/IsntBox";
import { Lockup } from "@/components/Lockup";
import { MeetingLegend, MeetingWheel } from "@/components/MeetingWheel";
import { PhotoTile } from "@/components/PhotoTile";
import { PriceBlock } from "@/components/PriceBlock";
import { QuoteCards } from "@/components/QuoteCards";
import { StatCards } from "@/components/StatCards";
import { AccentStrip, Button, Container, Eyebrow, NavyPanel, Section, SectionHeading } from "@/components/ui";
import { photoPlacements } from "@/data/photos";

export const metadata: Metadata = {
  title: "BusinessGPS — Growing As Leaders. Together.",
  description:
    "BusinessGPS is a weekly growth community in St. Louis. We build people. People build relationships. Relationships build business. Visiting is free.",
  alternates: { canonical: "/" },
};

const asks = [
  {
    title: "Show up.",
    body: "Every week, same day, same time. The room only works when it's whole.",
  },
  {
    title: "Come to grow.",
    body: "Personally and professionally. If you're finished growing, this isn't your room.",
  },
  {
    title: "Give something.",
    body: "Your attention, your experience, your feedback. Everyone has something to teach. Everyone has something to learn.",
  },
  {
    title: "Be worth the seat.",
    body: "One member per industry. Your category is protected — earn that.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 4.1 Hero */}
      <Container className="pt-5 sm:pt-8">
        <NavyPanel className="px-6 py-16 sm:px-12 sm:py-24 lg:px-16 lg:py-28">
          <Lockup tone="light" size="xl" />
          <h1 className="mt-10 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Come here to grow. On purpose.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/80 sm:text-xl">
            BusinessGPS is a weekly growth community. We build people. People build relationships.
            Relationships build business.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/join" variant="red">
              Apply to join
            </Button>
            <Button href="/how-it-works" variant="ghost">
              See how it works
            </Button>
          </div>
          <p className="mt-6 text-sm font-bold text-white/60">Visiting is free. Always.</p>
          <AccentStrip tone="light" className="mt-14 max-w-[220px]" />
        </NavyPanel>
      </Container>

      {/* 4.2 The four numbers */}
      <Section bottom={false}>
        <Container>
          <StatCards />
        </Container>
      </Section>

      {/* 4.3 What's asked of you */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>What&rsquo;s asked of you</Eyebrow>
              <SectionHeading>This room asks something of you.</SectionHeading>
              <p className="prose-body mt-6 max-w-md text-navy/75">
                BusinessGPS is intentional. Structured. Protected. It works because every member agrees
                to the same things:
              </p>
              <p className="mt-8 text-xl font-extrabold tracking-tight text-redink sm:text-2xl">
                If that reads like a filter, it is.
              </p>
              <PhotoTile
                photo={photoPlacements.homeAsks}
                className="mt-10 aspect-[2/1] w-full"
                sizes="(max-width: 1024px) 92vw, 440px"
              />
            </div>

            <ul className="space-y-8">
              {asks.map((ask) => (
                <li key={ask.title} className="border-l-4 border-faint pl-6">
                  <p className="text-xl font-extrabold tracking-tight text-navy">{ask.title}</p>
                  <p className="prose-body mt-2 text-navy/75">{ask.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 4.4 The four verbs */}
      <Section className="bg-wash">
        <Container>
          <Eyebrow>The four practices</Eyebrow>
          <SectionHeading className="mb-10 max-w-2xl">
            Everyone has something to teach. Everyone has something to learn.
          </SectionHeading>
          <FourSquares />
        </Container>
      </Section>

      {/* 4.5 How a meeting runs (teaser) */}
      <Section>
        <Container>
          <Eyebrow>How a meeting runs</Eyebrow>
          <SectionHeading className="max-w-2xl">Seventy minutes. Hard stop.</SectionHeading>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <MeetingWheel />
            </div>
            <div>
              <MeetingLegend />
              <Link
                href="/how-it-works"
                className="mt-8 inline-flex font-bold text-blue underline underline-offset-4"
              >
                See the whole meeting
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4.6 What this isn't */}
      <Section top={false}>
        <Container>
          <IsntBox />
        </Container>
      </Section>

      {/* §9 History band */}
      <Section top={false}>
        <Container>
          <HistoryBand />
        </Container>
      </Section>

      {/* 4.7 Member voices */}
      <Section>
        <Container>
          <Eyebrow>Member voices</Eyebrow>
          <SectionHeading className="mb-10 max-w-2xl">People who were in the room.</SectionHeading>
          <QuoteCards />
        </Container>
      </Section>

      {/* 4.8 The price */}
      <Section top={false}>
        <Container>
          <PriceBlock />
        </Container>
      </Section>

      {/* 4.9 Founder quote */}
      <Section top={false}>
        <Container>
          <figure className="max-w-3xl border-l-4 border-teal pl-7 sm:pl-9">
            <blockquote className="prose-body text-xl text-navy sm:text-2xl">
              <p>
                &ldquo;The relationships built in that first year of BusinessGPS are some of my strongest
                business relationships today. And that was nearly ten years ago.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-navy/60">
              Jim Shelvy &middot; Founder
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* 4.10 Final CTA */}
      <Section top={false}>
        <Container>
          <CTAPanel
            heading="Ready, or just curious?"
            body="Visit a meeting, apply to join, or tell us you'd like to start a chapter of your own."
            primary={{ href: "/join", label: "Apply to join" }}
            secondary={{ href: "/chapters", label: "Find a chapter" }}
          />
        </Container>
      </Section>
    </>
  );
}
