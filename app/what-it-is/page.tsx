import type { Metadata } from "next";
import { BrandArc, BrandArrow, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { SelfSelect } from "@/components/SelfSelect";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "What It Is",
  description:
    "A structured weekly event where growth happens — up to thirty business owners and professionals, one per industry, seventy minutes, hard stop.",
  alternates: { canonical: "/what-it-is" },
};

const happens = [
  {
    title: "You learn.",
    body: "A synchronized curriculum, thirteen weeks at a time.",
  },
  {
    title: "You build.",
    body: "Real relationships with people who know your name and your business.",
  },
  {
    title: "You grow.",
    body: "Personally and professionally, on purpose.",
  },
];

const costs = [
  "$59.95 a month, month to month.",
  "Everything included — no processing fee, no initiation fee, all chapter materials provided.",
  "No contract, no renewal date, no expiring term.",
  "Visiting is free. Always.",
];

export default function WhatItIsPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">What it is</Eyebrow>
          <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            This is not a networking group.
          </h1>
          <p className="prose-body mt-7 max-w-3xl text-lg text-white/85">
            BusinessGPS is a structured weekly event where growth happens &mdash; personal and
            professional. People gather intentionally, to learn and to build real relationships.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* What a visitor actually walks into */}
      <Band tone="white">
        <SectionHeading className="max-w-3xl">What you walk into.</SectionHeading>
        <TealArc className="mt-5 w-40" />
        <p className="prose-body mt-8 max-w-3xl text-lg text-navy/80">
          A room of up to thirty business owners and professionals &mdash; one per industry. The same
          day and time every week. Seventy minutes, hard stop.
        </p>
        <BrandArrow className="mt-9" />
      </Band>

      {/* What happens there */}
      <Band tone="wash">
        <Eyebrow>What happens there</Eyebrow>
        <SectionHeading className="mb-10 max-w-2xl">Three things, every week.</SectionHeading>
        <ul className="grid gap-5 md:grid-cols-3">
          {happens.map((item) => (
            <li key={item.title} className="rounded-2xl border border-faint bg-white p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">{item.title}</h3>
              <p className="prose-body mt-3 text-navy/75">{item.body}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* What it costs */}
      <Band tone="white">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>What it costs</Eyebrow>
            <SectionHeading>
              $59<span className="align-super text-3xl text-redink sm:text-4xl">95</span> a month.
            </SectionHeading>
          </div>
          <ul className="space-y-4">
            {costs.map((cost) => (
              <li key={cost} className="flex gap-3.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0" aria-hidden="true">
                  <path
                    d="M4 12.5l5 5L20 6.5"
                    fill="none"
                    stroke="#005FFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="prose-body text-navy/80">{cost}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* Who it's for */}
      <Band tone="wash">
        <SelfSelect heading="Who it's for." />
      </Band>

      <Band tone="white" bottom={false}>
        <CTAPanel
          heading="Come see the room."
          body="Apply to be a member, or find a chapter and visit first. Visiting is free. Always."
          primary={{ href: "/join", label: "Apply to be a member" }}
          secondary={{ href: "/chapters", label: "Find a chapter" }}
        />
      </Band>
      <div className="h-16 bg-white sm:h-24" />
    </>
  );
}
