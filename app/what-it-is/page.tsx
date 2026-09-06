import type { Metadata } from "next";
import { BrandArc, BrandArrow, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { HappensThere } from "@/components/HappensThere";
import { SelfSelect } from "@/components/SelfSelect";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "What It Is",
  description:
    "A structured weekly event where growth happens — up to thirty business owners and professionals, one per industry, seventy minutes, hard stop.",
  alternates: { canonical: "/what-it-is" },
};

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
          A room of people committed to growth &mdash; their own, and everyone else&rsquo;s. What you
          walk out with is almost impossible to measure.
        </p>
        <BrandArrow className="mt-9" />
      </Band>

      {/* What happens there */}
      <Band tone="wash">
        <Eyebrow>What happens there</Eyebrow>
        <HappensThere />
      </Band>

      {/* What it costs */}
      <Band tone="white">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>What it costs</Eyebrow>
            <SectionHeading>
              can be measured. What you get can&rsquo;t be.
            </SectionHeading>
            <p className="mt-8 text-5xl font-extrabold leading-none tracking-tighter text-navy sm:text-6xl">
              $59<span className="align-super text-2xl text-redink sm:text-3xl">95</span>
              <span className="ml-3 align-middle text-base font-bold uppercase tracking-[0.18em] text-navy/60">
                a month
              </span>
            </p>
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
