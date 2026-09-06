import type { Metadata } from "next";
import { ChapterCard } from "@/components/ChapterCard";
import { PhotoTile } from "@/components/PhotoTile";
import { AccentStrip, Button, Container, Eyebrow, NavyPanel, Section, SectionHeading } from "@/components/ui";
import { chapters } from "@/data/chapters";
import { photoPlacements } from "@/data/photos";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Find a BusinessGPS chapter, apply to join one, or start one where you are. Chapters meet weekly in St. Louis.",
  alternates: { canonical: "/chapters" },
};

const steps = [
  {
    number: "1",
    name: "Tell us",
    body: "Email launch@ourbizgps.com or send the form.",
  },
  {
    number: "2",
    name: "Train",
    body: "Sit inside a running chapter.",
  },
  {
    number: "3",
    name: "Launch",
    body: "A structured launch sequence with BusinessGPS leadership in the room.",
  },
];

// TODO: replace this mailto with a booking link when scheduling is set up.
const launchMailto =
  "mailto:launch@ourbizgps.com?subject=Starting%20a%20BusinessGPS%20chapter";

export default function ChaptersPage() {
  return (
    <>
      <Container className="pt-5 sm:pt-8">
        <NavyPanel className="px-6 py-14 sm:px-12 sm:py-20">
          <Eyebrow tone="light">Chapters</Eyebrow>
          <SectionHeading as="h1" tone="light" className="max-w-3xl">
            Find your room.
          </SectionHeading>
          <p className="prose-body mt-6 max-w-2xl text-white/75">
            Chapters meet weekly. Thirty members max, one member per industry. Visiting is free.
            Always.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </NavyPanel>
      </Container>

      {/* 7.1 Chapter grid */}
      <Section>
        <Container>
          <Eyebrow>Where we meet</Eyebrow>
          <SectionHeading className="mb-10 max-w-2xl">St. Louis chapters.</SectionHeading>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </ul>
        </Container>
      </Section>

      {/* 7.2 Launch a chapter */}
      <Section className="bg-wash">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
            <div>
              <Eyebrow>Launch a chapter</Eyebrow>
              <SectionHeading>Start one where you are.</SectionHeading>
              <p className="prose-body mt-6 text-navy/75">
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
                    <p className="prose-body mt-1 text-navy/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {photoPlacements.chaptersStrip.map((photo) => (
              <PhotoTile key={photo.file} photo={photo} className="aspect-[3/2]" />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
