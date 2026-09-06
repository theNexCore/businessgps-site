import type { Metadata } from "next";
import { BrandArc, CompassPoint, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Chapter Leadership",
  description:
    "Every BusinessGPS chapter is led by its own members. Eight seats, each turning over yearly, with succession by nomination.",
  alternates: { canonical: "/chapters/leadership" },
};

const seats = [
  { name: "Chapter Lead", body: "Owns the room and the standard." },
  { name: "Onboarding Facilitator", body: "Every new member's first thirteen weeks." },
  { name: "Chapter Coach", body: "Develops the members developing everyone else." },
  {
    name: "Growth Keeper",
    body: "Tracks referrals, results, and the numbers that can be counted.",
    detail:
      "Tracking is one of the ten focus areas — the framework itself insists results get counted. This seat owns referral results and the numbers that can be counted, in every chapter.",
  },
  {
    name: "Community Coordinator",
    body: "The giveback and the chapter's presence in its community.",
  },
  { name: "Welcome Crew Lead", body: "First faces at the door, plus two supporting members." },
  { name: "Keeper of the Clock", body: "Seventy minutes means seventy minutes." },
  { name: "Event Organizer", body: "The socials and the moments between meetings." },
];

export default function ChapterLeadershipPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">Chapter leadership</Eyebrow>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Run by members. On purpose.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            Every chapter is led by its own members &mdash; roughly a third of a full chapter holds a
            leadership seat. No staff at the front of the room.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      <Band tone="white">
        <Eyebrow>The seats</Eyebrow>
        <SectionHeading className="max-w-2xl">Eight seats, one room.</SectionHeading>
        <TealArc className="mt-5 w-40" />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-faint bg-faint sm:grid-cols-2">
          {seats.map((seat) => (
            <li key={seat.name} className="bg-white p-8">
              <div className="flex items-start gap-3.5">
                <CompassPoint tone="navy" className="mt-1.5 shrink-0" />
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight text-navy">{seat.name}</h2>
                  <p className="prose-body mt-2 text-navy/75">{seat.body}</p>
                  {"detail" in seat && seat.detail ? (
                    <p className="prose-body mt-3 border-l-2 border-teal pl-4 text-navy/70">
                      {seat.detail}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="wash">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Terms</Eyebrow>
            <SectionHeading>Every seat turns over.</SectionHeading>
          </div>
          <div>
            <p className="prose-body text-lg text-navy/80">
              Terms run the year. Every seat turns over yearly. Succession by nomination.
            </p>
            <p className="prose-body mt-6 text-lg text-navy/80">
              Leadership is development &mdash; holding a seat is one of the fastest ways to grow
              here.
            </p>
          </div>
        </div>
      </Band>

      <Band tone="white" bottom={false}>
        <CTAPanel
          heading="Want a seat one day?"
          body="Start by being in the room. Apply to be a member, or write to us about launching a chapter of your own."
          primary={{ href: "/join", label: "Apply to be a member" }}
          secondary={{ href: "/chapters#launch", label: "Launch a chapter" }}
        />
      </Band>
      <div className="h-16 bg-white sm:h-24" />
    </>
  );
}
