import type { Metadata } from "next";
import Link from "next/link";
import { BrandArc, TealArc } from "@/components/BrandGeometry";
import { ChapterCard } from "@/components/ChapterCard";
import { PhotoTile } from "@/components/PhotoTile";
import { AccentStrip, Band, Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { chapters } from "@/data/chapters";
import { photoSets } from "@/data/photos";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Find a BusinessGPS chapter, apply to be a member, or start one where you are. Chapters meet weekly in St. Louis.",
  alternates: { canonical: "/chapters" },
};

const steps = [
  { number: "1", name: "Tell us", body: "Email launch@ourbizgps.com or send the form." },
  { number: "2", name: "Train", body: "Sit inside a running chapter." },
  {
    number: "3",
    name: "Launch",
    body: "A structured launch sequence with BusinessGPS leadership in the room.",
  },
];

// TODO: replace this mailto with a booking link when scheduling is set up.
const launchMailto = "mailto:launch@ourbizgps.com?subject=Starting%20a%20BusinessGPS%20chapter";

export default function ChaptersPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">Chapters</Eyebrow>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find your room.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            Chapters meet weekly. Thirty members max, one member per industry. Visiting is free.
            Always.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* Chapter grid */}
      <Band tone="white">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Where we meet</Eyebrow>
            <SectionHeading className="max-w-2xl">St. Louis chapters.</SectionHeading>
          </div>
          <Link
            href="/chapters/leadership"
            className="font-bold text-blue underline underline-offset-4"
          >
            How chapters are led
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </ul>
      </Band>

      {/* Launch a chapter */}
      <Band tone="wash" id="launch">
        <BrandArc position="bottom-left" tone="navy" size={520} />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Eyebrow>Launch a chapter</Eyebrow>
            <SectionHeading>Start one where you are.</SectionHeading>
            <TealArc className="mt-5 w-40" />
            <p className="prose-body mt-8 text-navy/80">
              Every chapter begins the same way: a handful of committed people, a launch process that
              has been run before, and support from BusinessGPS leadership from the first
              conversation to the first meeting. Founders train inside an existing chapter first
              &mdash; you learn the room before you build one. Founders are members too: same seat,
              same price, same expectations.
            </p>
            <Button href={launchMailto} variant="red" external className="mt-9">
              Schedule a conversation
            </Button>
          </div>

          <ol className="h-fit space-y-px overflow-hidden rounded-2xl border border-faint bg-faint">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5 bg-white px-7 py-8">
                <span className="text-3xl font-extrabold leading-none tracking-tighter text-blue">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-navy">{step.name}</h3>
                  <p className="prose-body mt-1 text-navy/75">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {photoSets.chapters.map((photo) => (
            <PhotoTile
              key={photo.file}
              photo={photo}
              className="aspect-[2/1]"
              sizes="(max-width: 640px) 92vw, 45vw"
            />
          ))}
        </div>
      </Band>
    </>
  );
}
