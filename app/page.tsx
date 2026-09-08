import type { Metadata } from "next";
import Link from "next/link";
import { BrandArc, BrandArrow } from "@/components/BrandGeometry";
import { FeatheredPhoto } from "@/components/FeatheredPhoto";
import { FourSquares } from "@/components/FourSquares";
import { HistoryBand } from "@/components/HistoryBand";
import { IsntBox } from "@/components/IsntBox";
import { MeetingLegend, MeetingWheel } from "@/components/MeetingWheel";
import { PhotoTile } from "@/components/PhotoTile";
import { PriceBlock } from "@/components/PriceBlock";
import { PullQuote } from "@/components/PullQuote";
import { QuoteCards } from "@/components/QuoteCards";
import { SelfSelect } from "@/components/SelfSelect";
import { StatCards } from "@/components/StatCards";
import { AccentStrip, Band, Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { photoSets } from "@/data/photos";

export const metadata: Metadata = {
  title: "BusinessGPS — Come here to grow. On purpose.",
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
      {/* 3.1 Hero — full bleed navy, no lockup (it is centred in the header above) */}
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={620} />
        <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
          <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Come here to grow. On purpose.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85 sm:text-xl">
            BusinessGPS is a weekly growth community. We build people. People build relationships.
            Relationships build business.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/join" variant="red">
              Apply to be a member
            </Button>
            <Button href="/what-it-is" variant="ghost">
              What is BusinessGPS?
            </Button>
          </div>
          <p className="mt-6 text-sm font-bold text-white/70">Visiting is free. Always.</p>
          <AccentStrip tone="light" className="mt-14 max-w-[220px]" />
        </Container>
      </section>

      {/* Bold claim, directly under the hero */}
      <Band tone="white" bottom={false}>
        <p className="max-w-4xl text-balance text-2xl font-extrabold leading-[1.25] tracking-tight text-navy sm:text-3xl">
          Do these things and it will change your life. That&rsquo;s a bold claim.{" "}
          <span className="text-blue">
            It&rsquo;s also the one you&rsquo;ll be making a year from the day you join. Just like
            everyone else does.
          </span>
        </p>
      </Band>

      {/* 3.2 The hook */}
      <Band
        tone="white"
        backdrop={
          <FeatheredPhoto
            photo={photoSets.hook}
            className="w-[86%] opacity-35 sm:opacity-60 lg:w-[60%] lg:opacity-100"
            sizes="(max-width: 1024px) 80vw, 860px"
          />
        }
      >
        <p className="relative z-10 max-w-4xl text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-6xl">
          This is not a networking group.
        </p>
        <BrandArrow className="relative z-10 mt-8" />
        <p className="prose-body relative z-10 mt-6 max-w-3xl text-lg text-navy/80">
          Of course we network. But if you&rsquo;re looking for just a networking group, this
          isn&rsquo;t it. It&rsquo;s a launch pad for growth.
        </p>
        <Button href="/join" variant="red" className="relative z-10 mt-9">
          Apply to be a member
        </Button>
      </Band>

      {/* 3.3 Is BusinessGPS for you? */}
      <Band tone="wash">
        <SelfSelect />
      </Band>

      {/* 3.4 This room asks something of you */}
      <Band tone="white">
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
              photo={photoSets.homeRequirements}
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
      </Band>

      {/* 3.5 The four practices */}
      <Band tone="wash">
        <Eyebrow>How the whole thing works</Eyebrow>
        <SectionHeading className="mb-10 max-w-2xl">L.I.N.K. is what makes the magic.</SectionHeading>
        <FourSquares />
      </Band>

      {/* 3.6 How a meeting runs */}
      <Band tone="white">
        <Eyebrow>How a meeting runs</Eyebrow>
        <SectionHeading className="max-w-2xl">Seventy minutes. Hard stop.</SectionHeading>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <MeetingWheel />
          </div>
          <div>
            <MeetingLegend />
            <Link
              href="/in-practice"
              className="mt-8 inline-flex font-bold text-blue underline underline-offset-4"
            >
              See the whole meeting
            </Link>
          </div>
        </div>
      </Band>

      {/* 3.7 The four numbers */}
      <Band tone="wash">
        <Eyebrow>Chapter mechanics</Eyebrow>
        <SectionHeading className="mb-10 max-w-2xl">The shape of a chapter.</SectionHeading>
        <StatCards />
      </Band>

      {/* 3.8 Referrals — the honest position */}
      <Band tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Eyebrow>Referrals</Eyebrow>
            <SectionHeading>We track referrals. We just don&rsquo;t demand them.</SectionHeading>
            <p className="prose-body mt-7 text-navy/80">
              Referrals matter, so we count them. Tracking is one of the ten focus areas, and a
              dedicated leadership seat &mdash; the Growth Keeper &mdash; owns it in every chapter.
              What no one can track is the growth that comes from being in the room: the partnership
              formed over coffee, the business that got better because its owner did, the deal that
              closed eighteen months later. That part is attributed to your presence here &mdash; not
              to a referral slip.
            </p>
          </div>
          <div className="flex items-center">
            <PullQuote />
          </div>
        </div>
      </Band>

      {/* 3.9 What this isn't */}
      <Band tone="white" top={false}>
        <IsntBox />
      </Band>

      {/* 3.10 Founder's statement */}
      <Band tone="wash">
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote>
            <p className="text-balance text-2xl font-extrabold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
              &ldquo;I was uncomfortable being asked to bring referrals to people I wouldn&rsquo;t do
              business with myself. I couldn&rsquo;t do it. So I started BusinessGPS.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-navy/70">
            Jim Shelvy &middot; Founder
          </figcaption>
        </figure>
      </Band>

      {/* 3.11 History band */}
      <Band tone="white">
        <Eyebrow>Since 2017</Eyebrow>
        <SectionHeading className="mb-10 max-w-2xl">Ten years of rooms.</SectionHeading>
        <HistoryBand />
      </Band>

      {/* 3.12 Member voices */}
      <Band tone="wash">
        <Eyebrow>Member voices</Eyebrow>
        <SectionHeading className="mb-10 max-w-2xl">People who were in the room.</SectionHeading>
        <QuoteCards />
      </Band>

      {/* 3.13 The price */}
      <Band tone="white">
        <PriceBlock />
      </Band>

      {/* 3.14 Final CTA */}
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_85%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="bottom-left" tone="white" size={560} />
        <Container className="relative z-10 py-20 text-center sm:py-24">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready, or just curious?
          </h2>
          <p className="prose-body mx-auto mt-5 max-w-2xl text-white/80">
            Visit a meeting, apply to be a member, or tell us you&rsquo;d like to start a chapter of
            your own.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/join" variant="red">
              Apply to be a member
            </Button>
            <Button href="/chapters" variant="ghost">
              Find a chapter
            </Button>
          </div>
          <p className="mt-6 text-sm font-semibold text-white/70">Visiting is free. Always.</p>
        </Container>
      </section>
    </>
  );
}
