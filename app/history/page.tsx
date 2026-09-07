import type { Metadata } from "next";
import { BrandArc, BrandArrow, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { PhotoTile } from "@/components/PhotoTile";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { photoSets } from "@/data/photos";

export const metadata: Metadata = {
  title: "History",
  description:
    "BusinessGPS launched its first St. Louis chapter in 2017 and relaunches in 2026. Same beliefs, built to reach even further.",
  alternates: { canonical: "/history" },
};

const gallery = photoSets.history;

export default function HistoryPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">History</Eyebrow>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What happened in those rooms.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            What happened in those rooms is well documented. And it&rsquo;s happening again right
            now.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* 1. 2017 */}
      <Band tone="white">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:gap-16">
          <p className="text-5xl font-extrabold leading-none tracking-tighter text-navy sm:text-7xl">
            2017
          </p>
          <div>
            <p className="prose-body text-lg text-navy/80">
              BusinessGPS launches its first chapter out of the NexCore building in St. Louis and
              grows to multiple chapters. From the first weeks, its rooms taught the same four
              practices members learn today: Listen, Invest, Nurture, Kindle.
            </p>
            <TealArc className="mt-7 w-40" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {gallery.slice(0, 3).map((photo) => (
            <PhotoTile
              key={photo.file}
              photo={photo}
              className="aspect-[3/2]"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          ))}
        </div>
      </Band>

      {/* 2. What the rooms produced */}
      <Band tone="wash">
        <Eyebrow>What the rooms produced</Eyebrow>
        <SectionHeading className="max-w-3xl">Relationships that outlived the meetings.</SectionHeading>
        <p className="prose-body mt-7 max-w-3xl text-lg text-navy/80">
          New partnerships formed between members. New businesses created.
        </p>

        <figure className="mt-14 max-w-4xl border-l-4 border-teal pl-7 sm:pl-10">
          <blockquote>
            <p className="text-balance text-2xl font-extrabold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
              One member walked in as an employee &mdash; and walked out a founder. Her company now
              has employees of its own. One of them is a BusinessGPS member.
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-navy/60">
            TBD: name/permission pending
          </figcaption>
        </figure>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {gallery.slice(3, 6).map((photo) => (
            <PhotoTile
              key={photo.file}
              photo={photo}
              className="aspect-[3/2]"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          ))}
        </div>
      </Band>

      {/* 3. The founder's line */}
      <Band tone="white">
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote>
            <p className="text-balance text-2xl font-extrabold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
              &ldquo;The relationships built in that first year of BusinessGPS are some of my
              strongest business relationships today. And that was nearly ten years ago.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-navy/70">
            Jim Shelvy &middot; Founder
          </figcaption>
        </figure>
      </Band>

      {/* 4. 2026 */}
      <Band tone="wash">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:gap-16">
          <p className="text-5xl font-extrabold leading-none tracking-tighter text-navy sm:text-7xl">
            2026
          </p>
          <div>
            <p className="prose-body text-lg text-navy/80">
              BusinessGPS relaunches. Same beliefs, built to reach even further.
            </p>
            <BrandArrow className="mt-8" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3">
          {gallery.slice(6, 8).map((photo) => (
            <PhotoTile
              key={photo.file}
              photo={photo}
              className="aspect-[3/2]"
              sizes="(max-width: 640px) 50vw, 45vw"
            />
          ))}
        </div>
      </Band>

      <Band tone="white" bottom={false}>
        <CTAPanel
          heading="The next room is being built now."
          body="Find out what BusinessGPS actually is, then come and see one."
          primary={{ href: "/what-it-is", label: "What It Is" }}
          secondary={{ href: "/chapters", label: "Find a chapter" }}
        />
      </Band>
      <div className="h-16 bg-white sm:h-24" />
    </>
  );
}
